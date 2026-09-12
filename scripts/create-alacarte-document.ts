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

async function createAlaCarteDocument() {
  console.log('🔄 Création du document À la Carte...\n')

  const contentBlocks = [
    {
      _type: 'block',
      style: 'h2',
      children: [{
        _type: 'span',
        text: 'Votre sortie, vos envies',
        marks: []
      }],
      markDefs: []
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: 'Vous rêvez d\'une aventure en ski de randonnée entièrement personnalisée ? Que vous soyez seul, en famille ou entre amis, je crée pour vous une expérience sur mesure, adaptée à votre niveau, vos objectifs et vos disponibilités.',
        marks: []
      }],
      markDefs: []
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: 'En engagement privé, vous bénéficiez de mon expertise et de mon attention exclusive pour découvrir les plus beaux itinéraires des Hautes-Alpes : Queyras, Écrins, Clarée, Ubaye... Je m\'adapte à vos souhaits pour vous offrir une expérience inoubliable.',
        marks: []
      }],
      markDefs: []
    },
    {
      _type: 'block',
      style: 'h3',
      children: [{
        _type: 'span',
        text: 'Pourquoi choisir un engagement privé ?',
        marks: []
      }],
      markDefs: []
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: '• Flexibilité totale : choix des dates, de la durée et de l\'itinéraire',
        marks: []
      }],
      markDefs: []
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: '• Encadrement personnalisé : un accompagnement adapté à votre niveau',
        marks: []
      }],
      markDefs: []
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: '• Intimité : profitez de la montagne en petit comité',
        marks: []
      }],
      markDefs: []
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: '• Sur-mesure : des itinéraires choisis selon vos envies et capacités',
        marks: []
      }],
      markDefs: []
    },
  ]

  const tarifsBlocks = [
    {
      _type: 'block',
      style: 'h2',
      children: [{
        _type: 'span',
        text: 'Tarifs et modalités',
        marks: []
      }],
      markDefs: []
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: 'Les tarifs d\'un engagement privé varient en fonction de plusieurs critères : durée de la sortie, nombre de participants, technicité de l\'itinéraire, période de l\'année et logistique nécessaire.',
        marks: []
      }],
      markDefs: []
    },
    {
      _type: 'block',
      style: 'h3',
      children: [{
        _type: 'span',
        text: 'Tarifs indicatifs',
        marks: []
      }],
      markDefs: []
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: '• Sortie à la journée (1-4 personnes) : à partir de 400€',
        marks: []
      }],
      markDefs: []
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: '• Raid de plusieurs jours : sur devis personnalisé',
        marks: []
      }],
      markDefs: []
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: '• Groupe de 5 personnes et plus : tarif dégressif',
        marks: []
      }],
      markDefs: []
    },
    {
      _type: 'block',
      style: 'normal',
      children: [{
        _type: 'span',
        text: 'Chaque projet est unique. N\'hésitez pas à me contacter pour discuter de vos envies et obtenir un devis personnalisé gratuit.',
        marks: []
      }],
      markDefs: []
    },
  ]

  const aLaCarteDoc = {
    _id: 'ski-de-randonnee-engagement-prive',
    _type: 'aLaCarte',
    title: 'Ski de randonnée à la carte',
    slug: {
      _type: 'slug',
      current: 'ski-de-randonnee-engagement-prive'
    },
    heroTitle: 'Ski de randonnée sur mesure',
    heroSubtitle: 'Créez votre aventure idéale avec un accompagnement 100% personnalisé',
    description: 'Envie d\'une sortie ski de randonnée entièrement adaptée à vos envies, votre niveau et vos disponibilités ? Avec un engagement privé, je vous propose une expérience sur mesure dans les plus beaux massifs des Hautes-Alpes.',
    content: contentBlocks,
    tarifs: tarifsBlocks,
    prestationsIncluses: [
      'Encadrement par un moniteur diplômé d\'État',
      'Analyse météo et nivologique avant chaque sortie',
      'Matériel de sécurité collectif (DVA, pelle, sonde)',
      'Adaptation de l\'itinéraire en temps réel',
      'Conseils techniques et formation à l\'autonomie',
      'Assurance Responsabilité Civile Professionnelle'
    ],
    prestationsNonIncluses: [
      'Hébergement et repas',
      'Matériel de ski individuel (skis, peaux, bâtons)',
      'Matériel de sécurité individuel (DVA personnel)',
      'Forfaits de remontées mécaniques si nécessaire',
      'Transport jusqu\'au point de départ',
      'Assurance individuelle annulation/rapatriement'
    ],
    ctaText: 'Créer mon aventure',
    ctaSubtext: 'Contactez-moi pour discuter de votre projet et obtenir un devis personnalisé gratuit',
    seoTitle: 'Engagement Privé Ski de Randonnée - Sortie Sur Mesure Hautes-Alpes',
    seoDescription: 'Organisez votre sortie ski de randonnée sur mesure dans les Hautes-Alpes avec un moniteur diplômé. Itinéraires personnalisés, encadrement privé, flexibilité totale.',
  }

  try {
    const result = await client.createOrReplace(aLaCarteDoc)
    console.log('✅ Document créé:', result._id)
    console.log('\n✨ Succès ! Va dans le Studio pour vérifier et personnaliser le contenu.')
  } catch (error: any) {
    console.error('❌ Erreur:', error.message)
  }
}

createAlaCarteDocument().catch(console.error)
