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

// Mapping des anciens slugs vers les nouveaux IDs de massifs
const massifMapping: Record<string, string> = {
  'ecrins': 'massif-ecrins',
  'queyras': 'massif-queyras',
  'ubaye': 'massif-ubaye',
  'claree': 'massif-claree',
  'cerces': 'massif-cerces',
  'devoluy': 'massif-devoluy',
  'champsaur': 'massif-champsaur',
  'norvege': 'massif-norvege',
  'autre': 'massif-autre',
}

async function migrateSejours() {
  console.log('🔄 Migration des séjours vers les références de massifs...\n')

  try {
    // Récupérer tous les séjours
    const sejours = await client.fetch(`*[_type == "sejour"] {
      _id,
      title,
      massifs
    }`)

    console.log(`📊 Trouvé ${sejours.length} séjours à migrer\n`)

    for (const sejour of sejours) {
      if (sejour.massifs && Array.isArray(sejour.massifs)) {
        // Vérifier si ce sont déjà des références
        const firstMassif = sejour.massifs[0]
        if (firstMassif && typeof firstMassif === 'object' && firstMassif._ref) {
          console.log(`⏭️  "${sejour.title}" - Déjà migré`)
          continue
        }

        // Convertir les strings en références
        const massifRefs = sejour.massifs
          .filter((m: string) => massifMapping[m])
          .map((m: string) => ({
            _type: 'reference',
            _ref: massifMapping[m],
            _key: `massif-${m}`,
          }))

        if (massifRefs.length > 0) {
          await client
            .patch(sejour._id)
            .set({ massifs: massifRefs })
            .commit()

          console.log(`✅ "${sejour.title}" - Migré avec ${massifRefs.length} massif(s)`)
        } else {
          console.log(`⚠️  "${sejour.title}" - Aucun massif valide trouvé`)
        }
      } else {
        console.log(`ℹ️  "${sejour.title}" - Aucun massif défini`)
      }
    }

    console.log('\n✨ SUCCÈS ! Tous les séjours ont été migrés.')
  } catch (error: any) {
    console.error('❌ Erreur:', error.message)
    process.exit(1)
  }
}

migrateSejours().catch(console.error)
