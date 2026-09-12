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

async function updateAlaCarteInfos() {
  console.log('🔄 Mise à jour des infos pratiques...\n')

  try {
    const result = await client
      .patch('ski-de-randonnee-engagement-prive')
      .set({
        infoDuree: 'Sur mesure',
        infoMassif: 'Hautes-Alpes au choix',
        infoTarif: 'À partir de 400€/jour',
        infoFlexibilite: 'Dates, durée et itinéraire personnalisables.',
        infoGroupes: 'Seul, en famille ou entre amis (1-8 pers.).',
      })
      .commit()

    console.log('✅ Infos pratiques mises à jour!')
    console.log('\n✨ Rafraîchis le Studio pour voir les nouveaux champs éditables.')
  } catch (error: any) {
    console.error('❌ Erreur:', error.message)
  }
}

updateAlaCarteInfos().catch(console.error)
