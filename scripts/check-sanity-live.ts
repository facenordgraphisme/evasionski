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
  useCdn: false, // IMPORTANT: pas de cache
})

async function checkLiveData() {
  console.log('🔍 Récupération des données LIVE (pas de cache)...\n')

  // Fetch avec timestamp pour forcer le rafraîchissement
  const guide = await client.fetch(`*[_type == "guide"][0] {
    _id,
    _rev,
    _updatedAt,
    introTitle,
    introParagraph,
    bioTitle
  }`, {}, {
    // Force pas de cache
    cache: 'no-store',
    next: { revalidate: 0 }
  } as any)

  console.log('📊 Données actuelles dans Sanity:')
  console.log('- Document ID:', guide?._id)
  console.log('- Révision:', guide?._rev)
  console.log('- Dernière mise à jour:', guide?._updatedAt)
  console.log('- introTitle:', guide?.introTitle)
  console.log('- introParagraph:', guide?.introParagraph?.substring(0, 50) + '...')
  console.log('- bioTitle:', guide?.bioTitle)

  console.log('\n✅ Test terminé!')
}

checkLiveData().catch(console.error)
