const fs = require('fs');
const path = require('path');
const { createClient } = require('@sanity/client');

require('dotenv').config();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error("Erreur : NEXT_PUBLIC_SANITY_PROJECT_ID et SANITY_API_TOKEN doivent être définis dans votre .env");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-05-01',
  token,
  useCdn: false,
});

const scrapedDataPath = path.join(__dirname, 'scraped_evasionski_content.json');
if (!fs.existsSync(scrapedDataPath)) {
  console.error(`Erreur : Le fichier ${scrapedDataPath} n'existe pas. Lancez d'abord le scraper.`);
  process.exit(1);
}

const pages = JSON.parse(fs.readFileSync(scrapedDataPath, 'utf8'));

// Helper to find scraped page by slug
function getPage(slug) {
  return pages.find(p => p.slug === slug) || {};
}

// Convert plain text paragraphs into Portable Text block format
function paragraphsToBlocks(blocks) {
  return (blocks || []).map(p => ({
    _type: 'block',
    style: 'normal',
    children: [
      {
        _type: 'span',
        text: p.text || p
      }
    ]
  }));
}

async function run() {
  console.log('Starting Sanity seeding...');

  // 1. Create Activities
  const activities = [
    {
      _id: 'activity-engagement-prive',
      _type: 'activity',
      title: 'Engagement Privé / À la carte',
      slug: { _type: 'slug', current: 'ski-de-randonnee-engagement-prive' },
      subtitle: 'Sortie privée avec moniteur',
      intro: 'Ski de randonnée sur mesure selon vos envies. En famille, entre amis ou en solo, tracez votre propre voie.',
      description: 'Encadrement privé pour un apprentissage sur mesure ou la réalisation de vos projets de ski les plus ambitieux.',
      price: 'À partir de 420€/jour',
      period: 'Hiver / Printemps',
      location: 'Hautes-Alpes, Queyras, Écrins',
      type: 'ski'
    },
    {
      _id: 'activity-ski-rando-journee',
      _type: 'activity',
      title: 'Ski de randonnée journée',
      slug: { _type: 'slug', current: 'ski-randonnee-hautes-alpes-journee' },
      subtitle: 'Les plus beaux sommets à la journée',
      intro: 'Des sorties à la journée pour s\'évader, découvrir de nouveaux massifs et s\'initier ou se perfectionner.',
      description: 'Des vallons sauvages aux sommets panoramiques, découvrez les Hautes-Alpes loin de la foule des stations.',
      price: 'À partir de 95€/jour',
      period: 'Décembre à Mai',
      location: 'Hautes-Alpes',
      type: 'ski'
    },
    {
      _id: 'activity-freerando-journee',
      _type: 'activity',
      title: 'Freerando & Hors-piste',
      slug: { _type: 'slug', current: 'ski-hors-piste-station-hautes-alpes' },
      subtitle: 'Ski hors-piste et freerando en station',
      intro: 'Profitez des remontées mécaniques pour accéder à de longs hors-pistes et de superbes combes sauvages.',
      description: 'Approche courte en peaux de phoque pour maximiser le dénivelé négatif et savourer de longues descentes vierges.',
      price: 'À partir de 90€/jour',
      period: 'Hiver',
      location: 'Les Orres, Crévoux, Réallon',
      type: 'ski'
    },
    {
      _id: 'activity-stages-raids',
      _type: 'activity',
      title: 'Stages et raids à ski',
      slug: { _type: 'slug', current: 'stages-et-raids-a-ski-de-randonnee-hautes-alpes' },
      subtitle: 'Séjours itinérants de plusieurs jours',
      intro: 'L\'immersion totale en montagne. De refuge en gîte, vivez des raids à ski d\'exception.',
      description: 'Vivez l\'itinérance à ski à travers les plus beaux massifs alpins et internationaux.',
      price: 'À partir de 350€',
      period: 'Janvier à Mai',
      location: 'Queyras, Clarée, Ubaye, Norvège',
      type: 'ski'
    }
  ];

  for (const act of activities) {
    console.log(`Upserting Activity: ${act.title}`);
    await client.createOrReplace(act);
  }

  // 2. Create Universes (Subcategories under Stages & Raids)
  const universes = [
    {
      _id: 'univers-les-orres-crevoux',
      _type: 'univers',
      title: 'Les Orres / Crévoux',
      slug: { _type: 'slug', current: 'les-orres-crevoux' },
      activity: { _type: 'reference', _ref: 'activity-stages-raids' },
      description: paragraphsToBlocks(['Stages de ski freerando au départ des stations familiales des Orres et de Crévoux.'])
    },
    {
      _id: 'univers-queyras',
      _type: 'univers',
      title: 'Queyras',
      slug: { _type: 'slug', current: 'queyras' },
      activity: { _type: 'reference', _ref: 'activity-stages-raids' },
      description: paragraphsToBlocks(['Raid et itinérance au coeur du parc naturel régional du Queyras.'])
    },
    {
      _id: 'univers-claree',
      _type: 'univers',
      title: 'Clarée',
      slug: { _type: 'slug', current: 'claree' },
      activity: { _type: 'reference', _ref: 'activity-stages-raids' },
      description: paragraphsToBlocks(['Ski de randonnée dans la vallée préservée de la Clarée.'])
    },
    {
      _id: 'univers-ubaye',
      _type: 'univers',
      title: 'Ubaye',
      slug: { _type: 'slug', current: 'ubaye' },
      activity: { _type: 'reference', _ref: 'activity-stages-raids' },
      description: paragraphsToBlocks(['Traversée et raid à ski dans la sauvage vallée de l\'Ubaye.'])
    },
    {
      _id: 'univers-norvege',
      _type: 'univers',
      title: 'Norvège',
      slug: { _type: 'slug', current: 'norvege' },
      activity: { _type: 'reference', _ref: 'activity-stages-raids' },
      description: paragraphsToBlocks(['Ski de randonnée maritime dans les spectaculaires Alpes de Lyngen.'])
    }
  ];

  for (const uni of universes) {
    console.log(`Upserting Univers: ${uni.title}`);
    await client.createOrReplace(uni);
  }

  // 3. Create Sejours (Trips)
  const sejours = [
    {
      _id: 'sejour-stage-freerando-les-orres',
      _type: 'sejour',
      title: 'Stage de ski freerando Les Orres / Crévoux',
      slug: { _type: 'slug', current: 'stage-de-ski-freerando-les-orres-crevoux' },
      activityType: 'stages-et-raids-a-ski-de-randonnee-hautes-alpes',
      subCategory: { _type: 'reference', _ref: 'univers-les-orres-crevoux' },
      massif: 'Embrunais / Parpaillon',
      level: 'intermediaire',
      season: 'hiver',
      duration: '3 jours',
      basePrice: '380€',
      priceEncadrement: '240€/pers (encadrement)',
      priceFraisSejour: '140€/pers (estimé forfait/gîte)',
      description: getPage('stage-freerando-les-orres').title || 'Stage de freerando pour perfectionner son hors-piste et s\'initier aux peaux de phoque.',
      programme: paragraphsToBlocks([
        'Jour 1 : Ski hors-piste technique sur le domaine des Orres. Analyse de la neige et sécurité.',
        'Jour 2 : Première randonnée de proximité avec peaux de phoque dans le vallon de Crévoux. Recherche DVA.',
        'Jour 3 : Sommet sauvage et grand itinéraire hors-piste. Retour d\'expérience.'
      ])
    },
    {
      _id: 'sejour-queyras-5-jours',
      _type: 'sejour',
      title: 'Ski de randonnée dans le Queyras 5 jours',
      slug: { _type: 'slug', current: 'ski-de-randonnee-queyras-decouverte' },
      activityType: 'stages-et-raids-a-ski-de-randonnee-hautes-alpes',
      subCategory: { _type: 'reference', _ref: 'univers-queyras' },
      massif: 'Queyras',
      level: 'intermediaire',
      season: 'hiver',
      duration: '5 jours',
      basePrice: '620€',
      priceEncadrement: '400€/pers',
      priceFraisSejour: '220€/pers',
      description: 'Une itinérance sauvage en gîte au coeur du Queyras, paradis du ski de randonnée.',
      programme: paragraphsToBlocks([
        'Jour 1 : Accueil à Abriès et première mise en jambes dans le vallon du Bouchet.',
        'Jour 2 : Col de la Gypière et descente sur Saint-Véran, plus haute commune d\'Europe.',
        'Jour 3 : Ascension de la Gardiole de l\'Alp. Panorama Écrins et Viso.',
        'Jour 4 : Traversée de crête vers Saint-Véran ou Molines.',
        'Jour 5 : Dernier sommet et dispersion en début d\'après-midi.'
      ])
    },
    {
      _id: 'sejour-claree-3-jours',
      _type: 'sejour',
      title: 'Raid à ski en Clarée 3 jours',
      slug: { _type: 'slug', current: 'ski-de-randonnee-en-claree' },
      activityType: 'stages-et-raids-a-ski-de-randonnee-hautes-alpes',
      subCategory: { _type: 'reference', _ref: 'univers-claree' },
      massif: 'Cerces / Clarée',
      level: 'intermediaire',
      season: 'hiver',
      duration: '3 jours',
      basePrice: '390€',
      priceEncadrement: '260€/pers',
      priceFraisSejour: '130€/pers',
      description: 'Raid en refuge d\'altitude au coeur de la magnifique et ensoleillée vallée de la Clarée.',
      programme: paragraphsToBlocks([
        'Jour 1 : Départ de Névache, montée au refuge de Laval à ski de rando.',
        'Jour 2 : Col des Muandes ou sommet du Tour de la Clarée.',
        'Jour 3 : Traversée vers le refuge de Buffère et retour à Névache.'
      ])
    },
    {
      _id: 'sejour-ubaye-3-jours',
      _type: 'sejour',
      title: 'Raid à ski en Ubaye 3 jours',
      slug: { _type: 'slug', current: 'raid-ski-randonnee-ubaye' },
      activityType: 'stages-et-raids-a-ski-de-randonnee-hautes-alpes',
      subCategory: { _type: 'reference', _ref: 'univers-ubaye' },
      massif: 'Ubaye',
      level: 'confirme',
      season: 'hiver',
      duration: '3 jours',
      basePrice: '410€',
      priceEncadrement: '270€/pers',
      priceFraisSejour: '140€/pers',
      description: 'Un raid à ski technique et sauvage dans la haute vallée de l\'Ubaye, aux frontières de l\'Italie.',
      programme: paragraphsToBlocks([
        'Jour 1 : Départ de Fouillouse, montée au refuge de Chambeyron.',
        'Jour 2 : Tour du Brec de Chambeyron ou Tête de la Frema (3060m).',
        'Jour 3 : Col de la Portiola et descente par le vallon de Stroppia.'
      ])
    },
    {
      _id: 'sejour-norvege-voyage',
      _type: 'sejour',
      title: 'Voyage en Norvège Alpes de Lyngen',
      slug: { _type: 'slug', current: 'ski-randonnee-norvege-alpes-lyngen' },
      activityType: 'stages-et-raids-a-ski-de-randonnee-hautes-alpes',
      subCategory: { _type: 'reference', _ref: 'univers-norvege' },
      massif: 'Alpes de Lyngen (Norvège)',
      level: 'intermediaire',
      season: 'hiver',
      duration: '8 jours',
      basePrice: '1690€',
      priceEncadrement: '1290€/pers (encadrement + logistique locale)',
      priceFraisSejour: '400€/pers (billet d\'avion non inclus)',
      description: 'Skier au bout du monde, là où les montagnes plongent directement dans l\'océan Arctique.',
      programme: paragraphsToBlocks([
        'Jour 1 : Vol pour Tromsø, transfert vers notre lodge dans les Lyngen.',
        'Jour 2 à 7 : Ski de randonnée quotidien sur les sommets de la péninsule (Tafeltinden, Fastdalstinden).',
        'Jour 8 : Retour à Tromsø et vol retour pour la France.'
      ])
    }
  ];

  for (const sej of sejours) {
    console.log(`Upserting Sejour: ${sej.title}`);
    await client.createOrReplace(sej);
  }

  // 4. Create singletons
  console.log('Seeding home and settings singletons...');
  const homeDoc = {
    _id: 'home',
    _type: 'home',
    heroTitle: 'Séjours et raids en ski de randonnée dans les Hautes-Alpes',
    heroSubtitle: 'Toni Mancini — Moniteur de Ski de Randonnée',
    heroDescription: 'Parcourez les plus beaux itinéraires des Alpes du Sud : Queyras, Écrins, Clarée, Ubaye et des destinations d\'exception comme la Norvège.',
    aboutBadge: 'Qui suis-je',
    aboutTitle: 'Toni',
    aboutTitleAccent: 'Mancini',
    aboutDescription: paragraphsToBlocks([
      'Je m\'appelle Toni, moniteur de ski diplômé d\'État et indépendant, basé dans les Alpes du Sud et plus précisément dans les Hautes-Alpes, aux Orres depuis 2001.',
      'Spécialisé en ski de montagne, passionné et pratiquant assidu, je vous accompagne aujourd\'hui dans des aventures sur mesure, dans un cadre à la fois sérieux et convivial.'
    ]),
    experienceYears: 25,
    activitiesTitle: 'Découvrez nos',
    activitiesTitleAccent: 'Sorties & séjours',
    activitiesDescription: 'Des journées d\'initiation aux raids itinérants les plus reculés, trouvez la sortie idéale.',
    sortiesBadge: 'Prochaines dates',
    sortiesTitle: 'Calendrier des',
    sortiesTitleAccent: 'Départs groupés',
    adventureBadge: 'Sécurité & Engagement',
    adventureTitle: 'Tracez votre',
    adventureTitleAccent: 'Propre Voie',
    adventureDescription: 'Encadré par un moniteur diplômé d\'État, bénéficiez d\'une analyse constante des conditions nivologiques et d\'une pédagogie axée sur votre autonomie.',
    adventureFeatures: [
      'Analyse constante de la sécurité et du manteau neigeux',
      'Matériel de sécurité haut de gamme fourni (DVA, pelle, sonde)',
      'Groupes restreints pour une expérience conviviale et sécurisée'
    ],
    contactBadge: 'Contact',
    contactTitle: 'Prêt pour',
    contactTitleAccent: 'L\'Aventure ?',
    contactDescription: 'Envoyez-moi un message pour réserver une date ou organiser un engagement privé sur mesure.',
    testimonialsBadge: 'Témoignages',
    testimonialsTitle: 'Ils ont',
    testimonialsTitleAccent: 'Glissé avec moi',
    blogBadge: 'Carnet de Montagne',
    blogTitle: 'Récits &',
    blogTitleAccent: 'Conditions',
    hideTestimonials: false,
    hideBlog: false,
    featuredPostsLimit: 3
  };
  await client.createOrReplace(homeDoc);

  const settingsDoc = {
    _id: 'settings',
    _type: 'settings',
    siteName: 'ÉvasionSki',
    email: 'tonimancini05200@gmail.com',
    phone: '06 73 45 84 34',
    address: 'Les Orres, Hautes-Alpes',
    seoTitle: 'ÉvasionSki | Raids et Ski de randonnée Hautes-Alpes',
    seoDescription: 'Moniteur de ski indépendant Toni Mancini. Ski de randonnée, freerando et raids dans le Queyras, les Écrins, l\'Ubaye et la Norvège.',
    footerDescription: 'Vivez l\'exceptionnel en altitude avec un moniteur passionné. Sécurité, aventure et respect de la nature.'
  };
  await client.createOrReplace(settingsDoc);

  console.log('Sanity database successfully seeded with ÉvasionSki content!');
}

run().catch(console.error);
