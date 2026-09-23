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

async function populateHomePage() {
  console.log('🚀 Population du document Home avec toutes les données...\n')

  const homeDocument = {
    _id: 'home',
    _type: 'home',

    // 1️⃣ HERO SECTION
    heroTitle: 'Séjours et raids en ski de randonnée dans les Hautes-Alpes',
    heroSubtitle: 'Toni Mancini — Moniteur de Ski de Randonnée',
    heroDescription: 'Parcourez les plus beaux itinéraires des Alpes du Sud : Queyras, Écrins, Clarée, Ubaye et des destinations d\'exception comme la Norvège.',
    // heroImages à ajouter manuellement dans Sanity Studio

    // 2️⃣ PRESENTATION SECTION
    presentationBadge: 'BIENVENUE SUR ÉVASIONSKI',
    presentationBadgeEn: 'WELCOME TO EVASIONSKI',
    presentationTitle: 'Explorez les Alpes',
    presentationTitleEn: 'Explore the Alps',
    presentationTitleAccent: 'en ski de randonnée',
    presentationTitleAccentEn: 'on ski touring',
    presentationDescription: 'Le ski de randonnée est un moyen de déplacement unique en montagne. Il permet de s\'évader, de tracer sa propre voie et de savourer chaque descente après l\'effort de la montée.',
    presentationDescriptionEn: 'Ski touring is a unique way of traveling in the mountains. It allows you to escape, carve your own path, and savor every descent after the effort of the climb.',
    presentationCards: [
      {
        _key: 'card-1',
        icon: 'Compass',
        title: 'Le Ski de Randonnée',
        titleEn: 'Ski Touring',
        text: 'Un pas après l\'autre, loin de la foule et des remontées mécaniques. Découvrez le plaisir de l\'effort physique à la montée pour accéder à des combes sauvages et des sommets préservés des Hautes-Alpes.',
        textEn: 'One step at a time, far from crowds and ski lifts. Discover the pleasure of climbing and access wild valleys and untouched peaks in the Southern Alps.',
      },
      {
        _key: 'card-2',
        icon: 'Award',
        title: 'Freerando & Hors-Piste',
        titleEn: 'Freerando & Off-Piste',
        text: 'Profitez du meilleur des deux mondes. Utilisez les stations pour vous hisser en altitude, puis évadez-vous en peaux de phoque pour tracer des hors-pistes d\'exception et de longues combes de neige vierge.',
        textEn: 'Get the best of both worlds. Use resort lifts to gain height quickly, then skin away to track exceptional off-piste lines and long valleys of virgin powder.',
      },
      {
        _key: 'card-3',
        icon: 'Shield',
        title: 'Stages & Raids à Ski',
        titleEn: 'Ski Raids & Stages',
        text: 'L\'immersion totale en montagne sur plusieurs jours. De refuge en gîte d\'altitude, vivez l\'itinérance à ski dans le Queyras, la Clarée, l\'Ubaye ou lors de voyages d\'exception en Norvège.',
        textEn: 'Total mountain immersion over several days. From hut to refuge, experience ski touring itinerancy in Queyras, Clarée, Ubaye, or during exceptional trips to Norway.',
      },
    ],

    // 3️⃣ ACTIVITIES SECTION
    activitiesTitle: 'Explorez les Alpes',
    activitiesTitleAccent: 'En ski de rando',
    activitiesDescription: 'Des journées d\'initiation aux raids itinérants les plus reculés, trouvez la formule idéale.',

    // 4️⃣ SORTIES SECTION
    sortiesBadge: 'Prochaines dates',
    sortiesTitle: 'Calendrier des',
    sortiesTitleAccent: 'Départs groupés',

    // 5️⃣ ABOUT SECTION
    aboutBadge: 'Le Guide',
    aboutTitle: 'Toni',
    aboutTitleAccent: 'Mancini',
    aboutDescription: [
      {
        _type: 'block',
        _key: 'about-1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'about-span-1',
            text: 'Je m\'appelle Toni, moniteur de ski diplômé d\'État et indépendant, basé dans les Alpes du Sud et plus précisément dans les Hautes-Alpes, aux Orres depuis 2001.',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'about-2',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'about-span-2',
            text: 'Spécialisé en ski de montagne, passionné et pratiquant assidu, je vous accompagne aujourd\'hui dans des aventures sur mesure, dans un cadre à la fois sérieux et convivial.',
          },
        ],
      },
    ],
    // aboutImage à ajouter manuellement dans Sanity Studio
    experienceYears: 25,

    // 6️⃣ CONTACT SECTION
    contactBadge: 'Contact',
    contactTitle: 'Prêt pour',
    contactTitleAccent: 'L\'Aventure ?',
    contactDescription: 'Envoyez-moi un message pour réserver une date ou organiser un engagement privé sur mesure.',

    // 7️⃣ ADVENTURE / FAQ SECTION
    adventureBadge: 'FAQ',
    adventureTitle: 'Des questions ?',
    adventureTitleAccent: 'ÉvasionSki y répond',
    adventureDescription: 'Retrouvez les réponses aux questions les plus courantes sur l\'organisation des sorties en ski de randonnée.',
    adventureFeatures: [],
    // adventureImage à ajouter manuellement dans Sanity Studio
    adventureFaqs: [
      {
        _key: 'faq-1',
        questionFr: 'Quelles sont les sorties proposées ?',
        questionEn: 'What outings are offered?',
        answerFr: 'Chez Évasion Ski, chaque sortie est une expérience adaptée à vos envies et à votre niveau :\n\n• Journées découverte pour s\'initier en douceur au ski de rando.\n• Ski de rando et sorties plus sportives pour les amateurs de belles descentes.\n• Sessions freerando en station ou en hors-piste avec approche en peaux.\n• Raids et séjours de plusieurs jours, en gîte ou en refuge d\'altitude.\n• Aventures à la carte, on construit ensemble selon vos envies.',
        answerEn: 'At Évasion Ski, each outing is tailored to your desires and level:\n\n• Discovery days to gently learn ski touring.\n• Ski touring and sportier outings for lovers of beautiful descents.\n• Freerando sessions in resorts or off-piste with skins approach.\n• Raids and stays of several days in gites or altitude huts.\n• Tailor-made adventures, we build together according to your wishes.',
      },
      {
        _key: 'faq-2',
        questionFr: 'Comment débuter ou progresser en ski de randonnée ?',
        questionEn: 'How to start or progress in ski touring?',
        answerFr: 'Commencez par une journée découverte !\nVous apprendrez les bases techniques, l\'utilisation du matériel, les règles de sécurité… et les plaisirs de la montée pour mieux savourer la descente.\nEnsuite, on adapte les sorties à votre progression, vos envies, et vos objectifs.',
        answerEn: 'Start with a discovery day!\nYou will learn the technical basics, equipment use, safety rules... and the pleasures of climbing to better enjoy the descent.\nThen, we adapt the outings to your progression, desires, and goals.',
      },
      {
        _key: 'faq-3',
        questionFr: 'Où se déroulent des sorties à ski de randonnée ?',
        questionEn: 'Where do the ski tours take place?',
        answerFr: 'Principalement dans les Hautes-Alpes : Les Orres, Crévoux, Réallon, Queyras, Ubaye, Écrins, Cerces… Mais aussi du voyage à l\'étranger notamment en Norvège.',
        answerEn: 'Mainly in the Hautes-Alpes: Les Orres, Crévoux, Réallon, Queyras, Ubaye, Écrins, Cerces... But also trips abroad, notably to Norway.',
      },
      {
        _key: 'faq-4',
        questionFr: 'Et pour se loger ?',
        questionEn: 'And for accommodation?',
        answerFr: 'Voici quelques adresses que je vous conseille pour des nuits reposantes et des repas montagnards faits maison : la Grande Ferme à Saint-Sauveur, La Jarbelle aux Orres ou encore le gîte l\'Edelweiss à Abriès, tout près des départs de course.\nDes lieux simples, accueillants, et bien placés pour profiter pleinement du séjour.',
        answerEn: 'Here are some addresses I recommend for restful nights and homemade mountain meals: la Grande Ferme in Saint-Sauveur, La Jarbelle in Les Orres or the gite l\'Edelweiss in Abriès, very close to the departures.\nSimple, welcoming places, well located to fully enjoy your stay.',
      },
      {
        _key: 'faq-5',
        questionFr: 'Par où commencer ?',
        questionEn: 'Where to start?',
        answerFr: 'Explorez mes différentes activités et laissez-vous inspirer par votre prochaine aventure. Si vous cherchez à vous évader, à explorer, ainsi qu\'à glisser alors vous êtes au bon endroit !',
        answerEn: 'Explore my different activities and let yourself be inspired for your next adventure. If you are looking to escape, explore, and slide, then you are in the right place!',
      },
    ],

    // 8️⃣ TESTIMONIALS SECTION
    testimonialsBadge: 'Témoignages',
    testimonialsTitle: 'Ils ont',
    testimonialsTitleAccent: 'Glissé avec moi',

    // 9️⃣ BLOG SECTION
    blogBadge: 'Carnet de Montagne',
    blogTitle: 'Récits &',
    blogTitleAccent: 'Conditions',

    // ⚙️ LAYOUT CONTROLS
    hideTestimonials: false,
    hideBlog: false,
    featuredPostsLimit: 3,
  }

  try {
    const result = await client.createOrReplace(homeDocument)
    console.log('✅ Document Home créé/mis à jour avec succès!\n')
    console.log('📄 Résumé:')
    console.log('  - Hero: ✅')
    console.log('  - Présentation: ✅ (3 cartes)')
    console.log('  - Activités: ✅')
    console.log('  - Sorties: ✅')
    console.log('  - À Propos: ✅')
    console.log('  - Contact: ✅')
    console.log('  - FAQ/Aventure: ✅ (5 questions)')
    console.log('  - Témoignages: ✅')
    console.log('  - Blog: ✅\n')
    console.log('⚠️  NOTE IMPORTANTE:')
    console.log('   Les IMAGES doivent être ajoutées manuellement dans Sanity Studio:')
    console.log('   • heroImages (carrousel)')
    console.log('   • aboutImage')
    console.log('   • adventureImage\n')
    console.log('🎯 Allez sur https://evasionski.sanity.studio pour ajouter les images!')
  } catch (error) {
    console.error('❌ Erreur lors de la création du document:', error)
    process.exit(1)
  }
}

populateHomePage()
