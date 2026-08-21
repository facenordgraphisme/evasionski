import { createClient } from '@sanity/client'
import axios from 'axios'
import * as cheerio from 'cheerio'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '../.env') })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_API_TOKEN!,
  apiVersion: '2024-01-01',
  useCdn: false,
})

interface BlogPost {
  title: string
  url: string
  date: string
  excerpt: string
}

const blogPosts: BlogPost[] = [
  {
    title: "Freerando : est-ce fait pour vous ?",
    url: "https://evasionski.fr/la-freerando-entre-freeride-et-ski-de-randonnee/",
    date: "2025-10-22",
    excerpt: "Freerando : entre freeride et ski de randonnée… Vous avez déjà rêvé d'atteindre les pentes vierges sans y consacrer la journée entière ?"
  },
  {
    title: "Ski de randonnée : comment choisir son matériel parmi toutes les options ?",
    url: "https://evasionski.fr/ski-de-randonnee-choisir-son-materiel/",
    date: "2025-09-22",
    excerpt: "Guide complet pour choisir votre matériel de ski de randonnée adapté à votre pratique."
  },
  {
    title: "Séjour ski de randonnée dans le Queyras : 5 bonnes raisons d'y aller",
    url: "https://evasionski.fr/sejour-ski-de-randonnee-dans-le-queyras-5-bonnes-raisons-dy-aller/",
    date: "2025-08-25",
    excerpt: "Queyras, paradis du ski de randonnée : soleil, neige et authenticité dans les Hautes-Alpes"
  },
  {
    title: "Le ski de randonnée, avec un moniteur ou un guide ?",
    url: "https://evasionski.fr/le-ski-de-randonnee-moniteur-ou-guide/",
    date: "2025-07-27",
    excerpt: "Moniteur ou guide de haute montagne : qui choisir pour vos sorties ski de randonnée ?"
  },
  {
    title: "Qu'est ce que le ski de randonnée ?",
    url: "https://evasionski.fr/quest-ce-que-le-ski-de-randonnee/",
    date: "2025-07-13",
    excerpt: "Le ski de randonnée : liberté, effort et nature en hiver"
  },
  {
    title: "5 bonnes raisons de partir faire un ski trip en Norvège",
    url: "https://evasionski.fr/5-bonnes-raisons-de-partir-faire-un-ski-trip-en-norvege/",
    date: "2025-06-23",
    excerpt: "La Norvège, destination de plus en plus prisée des amateurs de ski de randonnée"
  }
]

// Helper to convert HTML to Portable Text blocks
function htmlToPortableText(html: string): any[] {
  const $ = cheerio.load(html)
  const blocks: any[] = []

  // Remove unwanted elements
  $('script, style, nav, footer, .comments, .sidebar').remove()

  // Process paragraphs and headings
  $('p, h2, h3, h4, ul, ol').each((_, elem) => {
    const $elem = $(elem)
    const text = $elem.text().trim()
    const tagName = (elem as any).name || (elem as any).tagName

    if (!text) return

    if (tagName === 'p') {
      blocks.push({
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text, marks: [] }],
        markDefs: []
      })
    } else if (tagName === 'h2') {
      blocks.push({
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text, marks: [] }],
        markDefs: []
      })
    } else if (tagName === 'h3') {
      blocks.push({
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text, marks: [] }],
        markDefs: []
      })
    } else if (tagName === 'ul' || tagName === 'ol') {
      $elem.find('li').each((_, li) => {
        const liText = $(li).text().trim()
        if (liText) {
          blocks.push({
            _type: 'block',
            style: 'normal',
            listItem: tagName === 'ul' ? 'bullet' : 'number',
            children: [{ _type: 'span', text: liText, marks: [] }],
            markDefs: []
          })
        }
      })
    }
  })

  return blocks
}

// Helper to download and upload image to Sanity
async function uploadImageToSanity(imageUrl: string, filename: string): Promise<any> {
  try {
    console.log(`  📥 Téléchargement de l'image: ${imageUrl}`)
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' })
    const buffer = Buffer.from(response.data)

    const asset = await client.assets.upload('image', buffer, {
      filename,
      contentType: response.headers['content-type'] || 'image/jpeg'
    })

    console.log(`  ✅ Image uploadée: ${asset._id}`)
    return asset
  } catch (error) {
    console.error(`  ❌ Erreur upload image ${imageUrl}:`, error)
    return null
  }
}

async function importBlogPost(post: BlogPost) {
  console.log(`\n🔄 Import de: ${post.title}`)
  console.log(`   URL: ${post.url}`)

  try {
    // Fetch the article HTML
    const response = await axios.get(post.url)
    const $ = cheerio.load(response.data)

    // Extract main content
    const articleContent = $('article .entry-content, .post-content, main article').first()
    const contentHtml = articleContent.html() || ''

    // Convert to Portable Text
    const body = htmlToPortableText(contentHtml)

    // Extract main image - try multiple sources
    let mainImageAsset = null

    // 1. Try Open Graph image first
    let mainImageUrl = $('meta[property="og:image"]').attr('content') ||
                       $('meta[name="twitter:image"]').attr('content')

    // 2. Try featured image / post thumbnail
    if (!mainImageUrl) {
      mainImageUrl = $('.wp-post-image').attr('src') ||
                     $('article img').first().attr('src')
    }

    // 3. Filter out small images (avatars, logos)
    if (mainImageUrl && (
      mainImageUrl.includes('gravatar.com') ||
      mainImageUrl.includes('Logo-avec-accent') ||
      mainImageUrl.includes('s=40')
    )) {
      // Try to find a better image in article content
      const contentImages = $('article img').toArray()
      for (const img of contentImages) {
        const src = $(img).attr('src')
        if (src && src.includes('/wp-content/uploads/') && !src.includes('Logo')) {
          mainImageUrl = src
          break
        }
      }
    }

    if (mainImageUrl && !mainImageUrl.includes('gravatar.com')) {
      const fullImageUrl = mainImageUrl.startsWith('http') ? mainImageUrl : `https://evasionski.fr${mainImageUrl}`
      const filename = `blog-${post.url.split('/').filter(Boolean).pop()}-${Date.now()}.jpg`
      mainImageAsset = await uploadImageToSanity(fullImageUrl, filename)
    }

    // Create slug from title
    const slug = post.url.split('/').filter(Boolean).pop() ||
                 post.title.toLowerCase()
                   .normalize('NFD').replace(/[̀-ͯ]/g, '')
                   .replace(/[^a-z0-9]+/g, '-')
                   .replace(/^-|-$/g, '')

    // Create post document
    const postDoc = {
      _type: 'post',
      title: post.title,
      slug: { _type: 'slug', current: slug },
      publishedAt: new Date(post.date).toISOString(),
      excerpt: post.excerpt,
      body,
      mainImage: mainImageAsset ? {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: mainImageAsset._id
        }
      } : undefined,
    }

    // Create the post
    const result = await client.create(postDoc)
    console.log(`✅ Article créé: ${result._id}`)

  } catch (error) {
    console.error(`❌ Erreur lors de l'import de "${post.title}":`, error)
  }
}

async function main() {
  console.log('🚀 Début de l\'import des articles de blog...\n')
  console.log(`📊 ${blogPosts.length} articles à importer\n`)

  for (const post of blogPosts) {
    await importBlogPost(post)
    // Wait 1 second between requests to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  console.log('\n✨ Import terminé!')
}

main().catch(console.error)
