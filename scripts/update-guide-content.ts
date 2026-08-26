import { createClient } from '@sanity/client'
import axios from 'axios'
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

async function uploadImageToSanity(imageUrl: string, filename: string): Promise<any> {
  try {
    console.log(`  📥 Téléchargement de l'image: ${imageUrl}`)
    const fullUrl = imageUrl.startsWith('http') ? imageUrl : `https://evasionski.fr${imageUrl}`
    const response = await axios.get(fullUrl, { responseType: 'arraybuffer' })
    const buffer = Buffer.from(response.data)

    const asset = await client.assets.upload('image', buffer, {
      filename,
      contentType: response.headers['content-type'] || 'image/webp'
    })

    console.log(`  ✅ Image uploadée: ${asset._id}`)
    return asset
  } catch (error) {
    console.error(`  ❌ Erreur upload image ${imageUrl}:`, error)
    return null
  }
}

async function updateGuideContent() {
  console.log('🔄 Mise à jour du contenu "À propos"...\n')

  // Upload main profile image
  const mainImageAsset = await uploadImageToSanity(
    '/wp-content/uploads/2025/05/IMG-20250110-WA0025-Copie.webp',
    'toni-profile.webp'
  )

  // Intro text - avant "Qui suis-je ?"
  const introBlocks = [
    {
      _type: 'block',
      style: 'h2',
      children: [{
        _type: 'span',
        text: 'Moniteur de ski de randonnée dans les Hautes-Alpes 05',
        marks: []
      }],
      markDefs: []
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: 'EvasionSki propose des expériences de ski uniques dans les Hautes-Alpes, plus particulièrement dans les vallées des Ecrins, du Queyras et de l\'Ubaye. Découvrez le hors-piste, le freerando, et le ski de randonnée avec un moniteur de ski expérimenté et moniteur de ski de randonnée, Toni Mancini.',
        marks: []
      }],
      markDefs: []
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: 'Prérogatives d\'exercice du moniteur de ski alpin',
        marks: ['link-prerogatives']
      }],
      markDefs: [
        {
          _key: 'link-prerogatives',
          _type: 'link',
          href: 'https://www.ensm.sports.gouv.fr/prerogatives-dexercice-du-moniteur-de-ski-alpin-ensa/'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: 'Offrez-vous des souvenirs inoubliables.',
        marks: []
      }],
      markDefs: []
    },
  ]

  // Bio content - VRAIS TEXTES de l'ancien site
  const bioBlocks = [
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: 'Lorsque j\'ai troqué le tumulte parisien pour parcourir les plus beaux sommets des Alpes, je n\'imaginais pas à quel point ma vie serait une aventure sans fin.',
        marks: []
      }],
      markDefs: []
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: 'Je suis Toni Mancini. Evasion Ski est le fruit de ma passion pour la montagne et le ski. Mon amour pour la glisse en pleine nature est né ici, dans les Hautes-Alpes. J\'ai eu la chance d\'admirer des points de vue à couper le souffle dans le Queyras, les Écrins et l\'Ubaye. J\'ai dévalé les pentes sauvages de Vars, Les Orres ou encore Crévoux.',
        marks: []
      }],
      markDefs: []
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: 'Après avoir été moniteur ESF aux Orres, je me suis consacré à ce que j\'aimais principalement : faire découvrir le ski de montagne aux gens et les former à l\'autonomie en leur apprenant toutes les subtilités du déplacement en terrain hivernal. Je partage avec vous mes connaissances et ma passion afin de rendre votre expérience unique.',
        marks: []
      }],
      markDefs: []
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: 'L\'ascension d\'une montagne avec des skis est exigeante. La découverte des sommets enneigés vous offrira une récompense mémorable. Mais ce n\'est pas tout ! La descente dans des vallons sauvages, préservés de toute affluence touristique, vous procurera également des sensations uniques.',
        marks: []
      }],
      markDefs: []
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: 'Êtes-vous prêt à vivre une expérience inoubliable sur les plus belles pentes du 05 ?',
        marks: []
      }],
      markDefs: []
    },
  ]

  // Mission - VRAIS TEXTES
  const missionBlocks = [
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: 'Imaginez-vous gravissant des sommets en pleine nature, avec pour seul bruit le crissement de vos peaux de phoque sur la neige fraîche.',
        marks: []
      }],
      markDefs: []
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: 'Chez Evasion Ski, ma mission est que vous preniez un maximum de plaisir tout en garantissant votre sécurité.',
        marks: []
      }],
      markDefs: []
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: 'Que vous soyez débutant ou skieur expérimenté, je vous accompagne avec passion et expertise pour des journées de ski en pleine nature adaptées à votre niveau. Découvrez les itinéraires secrets des Hautes-Alpes, où chaque virage révèle une nouvelle merveille.',
        marks: []
      }],
      markDefs: []
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: 'Je vous propose des sorties à la journée, des raids de plusieurs jours mais aussi des sorties hors-piste ainsi qu\'en freerando.',
        marks: []
      }],
      markDefs: []
    },
  ]

  // Mes Valeurs - VRAIS TEXTES
  const valuesTextBlocks = [
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: 'Je valorise naturellement l\'authenticité et la passion. J\'aime partager les plus beaux secrets des cimes immaculées des Hautes-Alpes.',
        marks: []
      }],
      markDefs: []
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: 'Chaque itinéraire proposé par votre moniteur de ski de randonnée Evasion Ski est conçu pour vous offrir un moment de plaisir maximum tout en favorisant un respect mutuel envers la montagne et la nature.',
        marks: []
      }],
      markDefs: []
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: 'Votre sécurité est ma priorité. Les sorties hors des sentiers balisés présentent des risques qu\'il convient de connaître ainsi que des règles à respecter afin de ne mettre personne en danger. Il me paraît donc important de vous former aux bonnes pratiques pour évoluer en montagne en toute sérénité.',
        marks: []
      }],
      markDefs: []
    },
  ]

  // Values cards - Section "Pourquoi choisir Evasion Ski"
  const values = [
    {
      title: 'Un accompagnement sur mesure',
      description: 'Toni adapte chacune de vos sorties à votre niveau et vos envies, pour une aventure encadrée, accessible et enrichissante.'
    },
    {
      title: 'Une parfaite connaissance du terrain',
      description: 'Moniteur local expérimenté, Toni connaît les moindres recoins des Hautes-Alpes et de l\'Ubaye, été comme hiver.'
    },
    {
      title: 'Sécurité et passion avant tout',
      description: 'Professionnalisme, matériel adapté et briefing : vous partez serein(e), encadré(e) par un moniteur passionné et rigoureux.'
    }
  ]

  // Check if guide document exists
  const existingGuide = await client.fetch(`*[_type == "guide"][0]`)

  const guideDoc = {
    _type: 'guide',
    badge: 'Votre Guide',
    titleNormal: 'Toni',
    titleAccent: 'Mancini',
    quote: 'Offrez-vous des souvenirs inoubliables.',
    image: mainImageAsset ? {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: mainImageAsset._id
      }
    } : undefined,
    introText: introBlocks,
    bioTitle: 'Qui suis-je ?',
    bio: bioBlocks,
    certification: 'Moniteur de ski alpin',
    certificationSub: 'Prérogatives d\'exercice',
    experience: '10+ ans',
    experienceSub: 'd\'expérience en montagne',
    mission: missionBlocks,
    valuesText: valuesTextBlocks,
    values
  }

  try {
    if (existingGuide) {
      // Update existing
      const result = await client
        .patch(existingGuide._id)
        .set(guideDoc)
        .commit()
      console.log(`✅ Document guide mis à jour: ${result._id}`)
    } else {
      // Create new
      const result = await client.create(guideDoc)
      console.log(`✅ Document guide créé: ${result._id}`)
    }
  } catch (error) {
    console.error('❌ Erreur lors de la mise à jour:', error)
  }

  console.log('\n✨ Mise à jour terminée!')
}

updateGuideContent().catch(console.error)
