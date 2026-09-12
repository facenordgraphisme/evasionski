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

async function checkDocumentState() {
  console.log('🔍 Vérification état du document...\n')

  // Fetch le document published
  const published = await client.fetch(`*[_type == "guide" && !(_id in path("drafts.**"))][0] {
    _id,
    _rev,
    _updatedAt,
    badge,
    introTitle,
    bioTitle
  }`)

  // Fetch le draft
  const draft = await client.fetch(`*[_type == "guide" && _id in path("drafts.**")][0] {
    _id,
    _rev,
    _updatedAt,
    badge,
    introTitle,
    bioTitle
  }`)

  console.log('📄 Version PUBLIÉE:')
  console.log('  ID:', published?._id)
  console.log('  MAJ:', published?._updatedAt)
  console.log('  badge:', published?.badge)
  console.log('  introTitle:', published?.introTitle)
  console.log('  bioTitle:', published?.bioTitle)

  console.log('\n📝 Version BROUILLON (draft):')
  if (draft) {
    console.log('  ID:', draft?._id)
    console.log('  MAJ:', draft?._updatedAt)
    console.log('  badge:', draft?.badge)
    console.log('  introTitle:', draft?.introTitle)
    console.log('  bioTitle:', draft?.bioTitle)
  } else {
    console.log('  ❌ Pas de brouillon')
  }

  console.log('\n✅ Test terminé!')
}

checkDocumentState().catch(console.error)
