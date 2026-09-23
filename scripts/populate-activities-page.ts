import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN!,
  apiVersion: '2024-01-01',
})

async function populateActivitiesPage() {
  console.log('🚀 Création du document activitiesPage...\n')

  const activitiesPage = {
    _id: 'activitiesPage',
    _type: 'activitiesPage',
    pageTitle: 'NOS ACTIVITÉS',
    pageTitleEn: 'OUR ACTIVITIES',
    pageDescription:
      'Découvrez toutes les activités que je propose. Chaque sortie est encadrée avec passion et une sécurité absolue.',
    pageDescriptionEn:
      'Discover all the activities I offer. Each outing is supervised with passion and absolute safety.',
    activities: [
      {
        _key: '1',
        title: 'Engagement Privé / À la carte',
        titleEn: 'Private Engagement / Custom',
        slug: 'ski-de-randonnee-engagement-prive',
        description:
          'Sortie privée sur mesure. En famille, entre amis ou en solo, tracez votre propre voie.',
        descriptionEn:
          'Custom private outing. With family, friends or solo, chart your own course.',
        price: 'À partir de 400€/jour',
        priceEn: 'From €400/day',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-hero', // À remplacer par un vrai asset ID si besoin
          },
        },
        order: 1,
        featured: true,
      },
      {
        _key: '2',
        title: 'Ski de randonnée journée',
        titleEn: 'Ski touring day trips',
        slug: 'ski-randonnee-hautes-alpes-journee',
        description:
          "Des sorties à la journée pour s'évader, découvrir de nouveaux massifs et s'initier ou se perfectionner.",
        descriptionEn:
          'Day trips to escape, discover new mountain ranges and learn or improve your skills.',
        price: '95€ / pers',
        priceEn: '€95 / person',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-ski-rando', // À remplacer par un vrai asset ID
          },
        },
        order: 2,
        featured: false,
      },
      {
        _key: '3',
        title: 'Freerando & Hors-piste',
        titleEn: 'Freerando & Off-piste',
        slug: 'ski-hors-piste-station-hautes-alpes',
        description:
          'Profitez des remontées mécaniques pour accéder à de longs hors-pistes et de superbes combes sauvages.',
        descriptionEn:
          'Take advantage of ski lifts to access long off-piste runs and superb wild couloirs.',
        price: '95€ / pers',
        priceEn: '€95 / person',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-freerando', // À remplacer par un vrai asset ID
          },
        },
        order: 3,
        featured: false,
      },
      {
        _key: '4',
        title: 'Stages et raids à ski',
        titleEn: 'Ski touring stages & raids',
        slug: 'stages-et-raids-a-ski-de-randonnee-hautes-alpes',
        description:
          "L'immersion totale en montagne. De refuge en gîte, vivez des raids à ski d'exception de plusieurs jours.",
        descriptionEn:
          'Total mountain immersion. From hut to lodge, experience exceptional multi-day ski tours.',
        price: 'À partir de 295€',
        priceEn: 'From €295',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-stages-raids', // À remplacer par un vrai asset ID
          },
        },
        order: 4,
        featured: false,
      },
    ],
  }

  try {
    const result = await client.createOrReplace(activitiesPage)
    console.log('✅ Document activitiesPage créé avec succès!')
    console.log('\n📄 Document créé:')
    console.log(JSON.stringify(result, null, 2))
    console.log('\n⚠️  NOTE: Les images utilisent des asset IDs temporaires.')
    console.log(
      '   Allez dans Sanity Studio pour remplacer les images par de vrais assets.'
    )
  } catch (error) {
    console.error('❌ Erreur lors de la création du document:', error)
    process.exit(1)
  }
}

populateActivitiesPage()
