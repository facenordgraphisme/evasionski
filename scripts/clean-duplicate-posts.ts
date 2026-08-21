import { createClient } from '@sanity/client'
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

async function cleanDuplicatePosts() {
  console.log('🧹 Nettoyage des articles en double...\n')

  // Fetch all posts
  const posts = await client.fetch(`*[_type == "post"] | order(_createdAt desc) {
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    "hasImage": defined(mainImage.asset._ref)
  }`)

  console.log(`📊 Total d'articles trouvés: ${posts.length}`)

  // Group by slug
  const postsBySlug: Record<string, any[]> = {}
  posts.forEach((post: any) => {
    if (!postsBySlug[post.slug]) {
      postsBySlug[post.slug] = []
    }
    postsBySlug[post.slug].push(post)
  })

  // Find and delete duplicates
  let deletedCount = 0

  for (const [slug, duplicates] of Object.entries(postsBySlug)) {
    if (duplicates.length > 1) {
      console.log(`\n🔍 Doublon trouvé pour: "${duplicates[0].title}"`)
      console.log(`   ${duplicates.length} versions trouvées`)

      // Sort: prefer posts with images, then most recent
      duplicates.sort((a, b) => {
        if (a.hasImage && !b.hasImage) return -1
        if (!a.hasImage && b.hasImage) return 1
        return new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
      })

      // Keep the first (best) one, delete the rest
      const toKeep = duplicates[0]
      const toDelete = duplicates.slice(1)

      console.log(`   ✅ Garder: ${toKeep._id} (${toKeep.hasImage ? 'avec image' : 'sans image'})`)

      for (const post of toDelete) {
        console.log(`   🗑️  Supprimer: ${post._id} (${post.hasImage ? 'avec image' : 'sans image'})`)
        await client.delete(post._id)
        deletedCount++
      }
    }
  }

  console.log(`\n✨ Nettoyage terminé!`)
  console.log(`   ${deletedCount} articles supprimés`)
  console.log(`   ${posts.length - deletedCount} articles conservés`)
}

cleanDuplicatePosts().catch(console.error)
