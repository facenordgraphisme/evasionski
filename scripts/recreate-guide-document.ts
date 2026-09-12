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

async function recreateGuideDocument() {
  console.log('🔄 Recréation du document guide...\n')

  const oldDocId = 'VBJKCq85QlNgxho2iUCXI3'

  // 1. Supprimer l'ancien document
  console.log('1️⃣ Suppression de l\'ancien document...')
  try {
    await client.delete(oldDocId)
    console.log('   ✅ Ancien document supprimé')
  } catch (error) {
    console.log('   ⚠️  Pas d\'ancien document à supprimer')
  }

  // 2. Créer un nouveau document avec toutes les données
  console.log('\n2️⃣ Création du nouveau document...')

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

  const newGuideDoc = {
    _id: oldDocId, // Garder le même ID pour ne pas casser les références
    _type: 'guide',
    badge: 'Votre Guide',
    titleNormal: 'Toni',
    titleAccent: 'Mancini',
    quote: 'Offrez-vous des souvenirs inoubliables.',
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-33d07b1ddf2ee210813fb9dc8bed332b265d903d-1584x2376-webp'
      }
    },
    introTitle: 'Moniteur de ski de randonnée dans les Hautes-Alpes 05',
    introParagraph: 'EvasionSki propose des expériences de ski uniques dans les Hautes-Alpes, plus particulièrement dans les vallées des Ecrins, du Queyras et de l\'Ubaye. Découvrez le hors-piste, le freerando, et le ski de randonnée avec un moniteur de ski expérimenté et moniteur de ski de randonnée, Toni Mancini.',
    introLinkText: 'Prérogatives d\'exercice du moniteur de ski alpin.',
    introLinkUrl: 'https://www.ensm.sports.gouv.fr/prerogatives-dexercice-du-moniteur-de-ski-alpin-ensa/',
    introClosure: 'Offrez-vous des souvenirs inoubliables.',
    bioTitle: 'Qui suis-je ?',
    bio: bioBlocks,
    certification: 'Moniteur de ski alpin',
    certificationSub: 'Prérogatives d\'exercice',
    experience: '10+ ans',
    experienceSub: 'd\'expérience en montagne',
    missionTitle: 'Ma Mission',
    mission: missionBlocks,
    valuesTitle: 'Mes Valeurs',
    valuesText: valuesTextBlocks,
    whyChooseTitle: 'Pourquoi choisir Evasion Ski ?',
    whyChooseSubtitle: 'Une expérience humaine, locale et professionnelle au cœur des Alpes',
    values
  }

  try {
    const result = await client.createOrReplace(newGuideDoc)
    console.log('   ✅ Nouveau document créé:', result._id)
    console.log('\n✨ Succès ! Va dans le Studio et teste de modifier un champ.')
  } catch (error: any) {
    console.error('   ❌ Erreur:', error.message)
  }
}

recreateGuideDocument().catch(console.error)
