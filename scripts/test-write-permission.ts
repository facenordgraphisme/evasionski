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

async function testWritePermission() {
  console.log('🔐 Test des permissions d\'écriture...\n')

  try {
    // Essayer de mettre à jour le badge
    const result = await client
      .patch('VBJKCq85QlNgxho2iUCXI3')
      .set({ badge: 'TEST WRITE PERMISSION' })
      .commit()

    console.log('✅ ÉCRITURE RÉUSSIE !')
    console.log('Badge mis à jour:', result.badge)
    console.log('\nLe token a bien les permissions d\'écriture.')

    // Remettre l'ancienne valeur
    await client
      .patch('VBJKCq85QlNgxho2iUCXI3')
      .set({ badge: 'Votre Guide' })
      .commit()
    console.log('✅ Valeur restaurée')

  } catch (error: any) {
    console.error('❌ ÉCHEC D\'ÉCRITURE !')
    console.error('Erreur:', error.message)
    console.error('\n⚠️  Le token N\'A PAS les permissions d\'écriture.')
    console.error('Solution: Va dans Sanity.io > Settings > API > Tokens')
    console.error('et crée un nouveau token avec les permissions "Editor" ou "Admin"')
  }
}

testWritePermission().catch(console.error)
