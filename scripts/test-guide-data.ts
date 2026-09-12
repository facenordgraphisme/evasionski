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

async function testGuideData() {
  console.log('🔍 Récupération des données guide...\n')

  const guide = await client.fetch(`*[_type == "guide"][0] {
    badge,
    titleNormal,
    titleAccent,
    quote,
    "image": image.asset->url,
    introTitle,
    introParagraph,
    introLinkText,
    introLinkUrl,
    introClosure,
    bioTitle,
    bio,
    certification,
    certificationSub,
    experience,
    experienceSub,
    missionTitle,
    "missionImage": missionImage.asset->url,
    mission,
    valuesTitle,
    "valuesImage": valuesImage.asset->url,
    valuesText,
    whyChooseTitle,
    whyChooseSubtitle,
    values
  }`)

  console.log('📊 Données récupérées:')
  console.log('- badge:', guide?.badge)
  console.log('- titleNormal:', guide?.titleNormal)
  console.log('- introTitle:', guide?.introTitle)
  console.log('- introParagraph:', guide?.introParagraph?.substring(0, 50) + '...')
  console.log('- missionTitle:', guide?.missionTitle)
  console.log('- valuesTitle:', guide?.valuesTitle)
  console.log('- whyChooseTitle:', guide?.whyChooseTitle)
  console.log('- whyChooseSubtitle:', guide?.whyChooseSubtitle)
  console.log('- values count:', guide?.values?.length)

  console.log('\n✅ Test terminé!')
  console.log('📋 Objet complet:')
  console.log(JSON.stringify(guide, null, 2))
}

testGuideData().catch(console.error)
