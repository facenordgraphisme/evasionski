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

const niveauSkiData = {
  _type: 'niveauSki',
  _id: 'niveauSki',
  badge: 'AUTO-ÉVALUATION',
  title: 'Évaluer son niveau en ski',
  introText: 'Cette page a pour but de fournir toutes les informations nécessaires pour permettre à chacun d\'évaluer son niveau en ski avec justesse et de s\'inscrire à la sortie idéale.',
  adviceTitle: 'Pourquoi s\'évaluer honnêtement ?',
  adviceText: 'Se surestimer peut mettre en difficulté la personne concernée ainsi que le reste du groupe. En cas de doute, contactez-moi pour en parler !',
  ctaText: 'CONTACTER TONI',
  ctaLink: '/evasion-ski-hautes-alpes-contact',
  technicalTabLabel: 'Niveau Technique',
  physicalTabLabel: 'Niveau Physique',
  technicalLevels: [
    {
      level: 1,
      title: 'Niveau Technique 1 : Débrouillé',
      titleEn: 'Technical Level 1: Beginner-Intermediate',
      description: [
        'Je n\'ai jamais pratiqué le ski de randonnée, ni le ski hors-piste, mais je suis à l\'aise sur les pistes rouges.',
        'Je peux enchaîner plusieurs heures de ski sans problème.',
        'Je fais mes virages en skis parallèles, même si j\'ai encore un peu d\'appréhension à haute vitesse.',
        'Les différents types de dérapage (face à la pente, freinage) sont maîtrisés.'
      ],
      summary: 'Ce niveau correspond à un bon skieur DÉBROUILLÉ, prêt à découvrir le ski de randonnée, avec des bases solides mais une expérience hors-piste encore à construire.',
      summaryEn: 'This level corresponds to a good beginner-intermediate skier, ready to discover ski touring with solid basics but still building off-piste experience.',
      trips: ['Journée ski de randonnée']
    },
    {
      level: 2,
      title: 'Niveau Technique 2 : Intermédiaire',
      titleEn: 'Technical Level 2: Intermediate',
      description: [
        'J\'ai déjà pratiqué le ski de randonnée et/ou le hors-piste.',
        'Je suis à l\'aise sur toutes les pistes, y compris les noires, quelles que soient les conditions.',
        'Je tourne en skis parallèles, avec une bonne maîtrise de la vitesse, même sur des pentes inclinées à 30–35°.',
        'Je maîtrise les dérapages sur ces pentes modérées.',
        'Je m\'aventure parfois dans les bosses ou en forêt, avec un bon niveau de contrôle.'
      ],
      summary: 'Ce niveau correspond à un skieur DÉBROUILLÉ/CONFIRMÉ, autonome en descente en terrain varié, et prêt à évoluer dans des environnements alpins non aménagés.',
      summaryEn: 'This level corresponds to an intermediate/advanced skier, autonomous in descent on varied terrain and ready for un-groomed alpine environments.',
      trips: ['Découverte du Queyras en ski', 'Journée ski de randonnée', 'Raid à ski en Ubaye']
    },
    {
      level: 3,
      title: 'Niveau Technique 3 : Confirmé',
      titleEn: 'Technical Level 3: Advanced',
      description: [
        'Je pratique régulièrement le ski de randonnée ou le ski hors-piste : plus de 10 jours par an.',
        'Je suis capable de m\'adapter à la plupart des terrains et des conditions, même en neige difficile, avec les moyens du bord.',
        'À partir de 40° d\'inclinaison, mes virages restent possibles mais peuvent devenir irréguliers en neige compliquée.',
        'J\'ai de bons acquis techniques que je continue à consolider dans des terrains variés (pentes raides, forêts, bosses, neige changeante).',
        'Je maîtrise parfaitement les dérapages dans toutes les situations, ainsi que les conversions en montée, même en pente raide ou gelée.'
      ],
      summary: 'Ce niveau s\'adresse à un skieur CONFIRMÉ, autonome et efficace, capable d\'évoluer en sécurité dans la plupart des itinéraires classiques. Il reste une marge de progression dans les conditions les plus techniques.',
      summaryEn: 'This level is for an advanced skier, autonomous and efficient, capable of touring safely in most classic itineraries. There remains room for progression in the most technical conditions.',
      trips: ['Raid à ski en Clarée', 'Découverte du Queyras en ski', 'Ski de randonnée en Norvège']
    },
    {
      level: 4,
      title: 'Niveau Technique 4 : Expert',
      titleEn: 'Technical Level 4: Expert',
      description: [
        'Je pratique très régulièrement le ski de randonnée ou le hors-piste : plus de 25 jours par an.',
        'Je suis totalement à l\'aise dans toutes les neiges, tous types de terrains, y compris raides, engagés ou techniques.',
        'Je gère parfaitement mon stress en situation délicate (exposition, pente raide, neige difficile), sans que cela n\'altère ma technique.',
        'J\'ai une maîtrise complète des dérapages en descente (tous types de neige et pente > 40°), et des conversions en montée même en terrain délicat (gelé, étroit, exposé).',
        'Je suis capable d\'évoluer en autonomie complète, en sécurité, et d\'adapter ma technique aux conditions du moment.'
      ],
      summary: 'Ce niveau correspond à un skieur EXPERT, autonome en terrain alpin engagé, apte à s\'inscrire dans des sorties exigeantes.',
      summaryEn: 'This level corresponds to an expert skier, autonomous in challenging alpine terrain, ready to join demanding outings.',
      trips: ['Ski de randonnée en Norvège', 'Journée Freerando', 'Raid à ski en Clarée']
    }
  ],
  physicalLevels: [
    {
      level: 1,
      title: 'Niveau Physique 1 : Accessible',
      titleEn: 'Physical Level 1: Accessible',
      description: [
        'Je suis capable de marcher activement en terrain montagneux pendant 3 à 4 heures, sans difficulté particulière, avec un sac à dos d\'environ 4 kg.',
        'Je suis capable d\'enchaîner plusieurs heures de ski alpin sans pause.',
        'En ski de randonnée, j\'envisage des journées de 4 à 5 heures, montée comprise (400/700m D+).'
      ],
      summary: 'Le rythme est modéré, mais la journée reste physiquement exigeante : elle demande une bonne forme générale et une capacité à enchaîner plusieurs heures d\'effort.',
      summaryEn: 'The pace is moderate, but the day remains physically demanding: it requires good general shape and ability to sustain several hours of effort.',
      trips: ['Journée Freerando']
    },
    {
      level: 2,
      title: 'Niveau Physique 2 : Modéré',
      titleEn: 'Physical Level 2: Moderate',
      description: [
        'Je suis capable de marcher activement en terrain montagneux pendant 4 à 5 heures, avec 800 à 1000 m de dénivelé positif, sans difficulté particulière, en portant un sac d\'environ 6 kg.',
        'En ski de randonnée, j\'envisage des journées de 5 à 7 heures, montée comprise (700/1200m D+).',
        'Les journées sont sportives, d\'intensité modérée à soutenue, et nécessitent une bonne endurance ainsi qu\'un effort continu dans la durée.'
      ],
      summary: 'Les journées nécessitent une bonne endurance ainsi qu\'un effort continu dans la durée.',
      summaryEn: 'Outings require good endurance and continuous, steady effort over time.',
      trips: ['Découverte du Queyras en ski', 'Journée ski de randonnée', 'Raid à ski en Ubaye']
    },
    {
      level: 3,
      title: 'Niveau Physique 3 : Soutenu',
      titleEn: 'Physical Level 3: Demanding',
      description: [
        'J\'ai le goût de l\'effort et je sais le gérer.',
        'Je pratique un sport d\'endurance (course, vélo, etc.) plusieurs fois par semaine, au moins 1 heure par séance.',
        'Je suis capable d\'effectuer une randonnée en montagne de 5 à 7 heures, avec 1000 à 1400 m de dénivelé positif.',
        'En ski de randonnée, j\'envisage des journées de 6 à 8 heures d\'effort, montée comprise (1000/1400m D+).'
      ],
      summary: 'Journées sportives et soutenues, demandant une bonne endurance et une récupération rapide.',
      summaryEn: 'Sporty and demanding days, requiring high endurance and quick recovery.',
      trips: ['Découverte du Queyras en ski', 'Ski de randonnée en Norvège', 'Raid à ski en Clarée']
    },
    {
      level: 4,
      title: 'Niveau Physique 4 : Intense',
      titleEn: 'Physical Level 4: Intense',
      description: [
        'Je suis passionné de sports d\'endurance que je pratique très régulièrement à un niveau soutenu. Si je reste deux jours sans bouger, mes jambes s\'impatientent !',
        'J\'aime me confronter à l\'effort, et je suis capable de faire une randonnée de plus de 8 heures, avec plus de 1400 m de dénivelé et un sac de 8 kg sur le dos, sans difficulté.',
        'En ski de randonnée, j\'envisage des journées longues (6 à 8 h voire plus), montée comprise, avec une intensité élevée, tant en montée qu\'en descente (>1400m D+)'
      ],
      summary: 'Ce niveau s\'adresse aux sportifs entraînés, habitués à enchaîner les efforts, avec une solide condition physique et un mental d\'acier.',
      summaryEn: 'This level is for trained athletes, accustomed to consecutive efforts, with a solid physical condition and mental grit.',
      trips: ['Ski de randonnée en Norvège', 'Raid à ski en Clarée']
    }
  ]
}

async function createNiveauSki() {
  try {
    console.log('Création/mise à jour du document Niveau en Ski...')
    const result = await client.createOrReplace(niveauSkiData)
    console.log('✅ Document "Niveau en Ski" créé/mis à jour avec succès !')
    console.log('Document ID:', result._id)
  } catch (error) {
    console.error('❌ Erreur lors de la création du document:', error)
    process.exit(1)
  }
}

createNiveauSki().catch(console.error)
