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

const massifs = [
  {
    _type: 'massif',
    _id: 'massif-ecrins',
    nom: 'Écrins',
    nomEn: 'Écrins',
    slug: { _type: 'slug', current: 'ecrins' },
    description: 'Parc national des Écrins, sommets majestueux et glaciers',
    ordre: 1,
  },
  {
    _type: 'massif',
    _id: 'massif-queyras',
    nom: 'Queyras',
    nomEn: 'Queyras',
    slug: { _type: 'slug', current: 'queyras' },
    description: 'Parc naturel régional du Queyras, vallées préservées',
    ordre: 2,
  },
  {
    _type: 'massif',
    _id: 'massif-ubaye',
    nom: 'Ubaye',
    nomEn: 'Ubaye',
    slug: { _type: 'slug', current: 'ubaye' },
    description: 'Vallée de l\'Ubaye, ski sauvage et authentique',
    ordre: 3,
  },
  {
    _type: 'massif',
    _id: 'massif-claree',
    nom: 'Clarée',
    nomEn: 'Clarée',
    slug: { _type: 'slug', current: 'claree' },
    description: 'Vallée de la Clarée, itinéraires variés',
    ordre: 4,
  },
  {
    _type: 'massif',
    _id: 'massif-cerces',
    nom: 'Cerces',
    nomEn: 'Cerces',
    slug: { _type: 'slug', current: 'cerces' },
    description: 'Massif des Cerces, proche de Briançon',
    ordre: 5,
  },
  {
    _type: 'massif',
    _id: 'massif-devoluy',
    nom: 'Dévoluy',
    nomEn: 'Dévoluy',
    slug: { _type: 'slug', current: 'devoluy' },
    description: 'Massif du Dévoluy, terrain de jeu idéal',
    ordre: 6,
  },
  {
    _type: 'massif',
    _id: 'massif-champsaur',
    nom: 'Champsaur',
    nomEn: 'Champsaur',
    slug: { _type: 'slug', current: 'champsaur' },
    description: 'Vallée du Champsaur, paysages variés',
    ordre: 7,
  },
  {
    _type: 'massif',
    _id: 'massif-norvege',
    nom: 'Norvège',
    nomEn: 'Norway',
    slug: { _type: 'slug', current: 'norvege' },
    description: 'Alpes de Lyngen, fjords et montagnes',
    ordre: 8,
  },
  {
    _type: 'massif',
    _id: 'massif-autre',
    nom: 'Autre',
    nomEn: 'Other',
    slug: { _type: 'slug', current: 'autre' },
    description: 'Autres destinations',
    ordre: 99,
  },
]

async function populateMassifs() {
  console.log('⛰️  Peuplement des massifs...\n')

  try {
    for (const massif of massifs) {
      console.log(`📍 Création/mise à jour : ${massif.nom}...`)
      await client.createOrReplace(massif)
    }

    console.log('\n✨ SUCCÈS ! Tous les massifs ont été créés/mis à jour.')
    console.log('👉 Tu peux maintenant les gérer dans Sanity Studio.')
  } catch (error: any) {
    console.error('❌ Erreur:', error.message)
    process.exit(1)
  }
}

populateMassifs().catch(console.error)
