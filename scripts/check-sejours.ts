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

async function checkSejours() {
  console.log('🔍 Vérification des séjours...\n')

  const sejours = await client.fetch(`*[_type == "sejour"] {
    _id,
    title,
    "slug": slug.current,
    duree,
    niveauDefaut,
    massifs,
    prixDefaut,
    essentiel,
    programme,
    materiel,
    budget,
    infosPratiques
  }`)

  console.log(`📊 ${sejours.length} séjour(s) trouvé(s)\n`)

  if (sejours.length === 0) {
    console.log('❌ Aucun séjour dans Sanity.')
    console.log('ℹ️  Les pages utilisent actuellement les fallbacks en dur.')
    console.log('💡 Tu peux créer tes séjours dans Sanity Studio pour les rendre éditables.\n')
    return
  }

  sejours.forEach((s: any) => {
    console.log(`📄 ${s.title} (${s.slug})`)
    console.log(`   - duree: ${s.duree ? '✅' : '❌ manquant'}`)
    console.log(`   - niveauDefaut: ${s.niveauDefaut ? '✅' : '❌ manquant'}`)
    console.log(`   - massifs: ${s.massifs?.length > 0 ? '✅' : '❌ manquant'}`)
    console.log(`   - prixDefaut: ${s.prixDefaut ? '✅' : '❌ manquant'}`)
    console.log(`   - essentiel: ${s.essentiel ? '✅' : '⚠️  vide (utilise infosPratiques en fallback)'}`)
    console.log(`   - programme: ${s.programme ? '✅' : '⚠️  vide'}`)
    console.log(`   - materiel: ${s.materiel ? '✅' : '⚠️  vide'}`)
    console.log(`   - budget: ${s.budget ? '✅' : '⚠️  vide'}`)
    console.log(`   - infosPratiques: ${s.infosPratiques ? '✅' : '⚠️  vide'}\n`)
  })

  console.log('✨ Vérification terminée!')
  console.log('💡 Les champs manquants peuvent être remplis dans Sanity Studio.')
}

checkSejours().catch(console.error)
