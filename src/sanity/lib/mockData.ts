import { textToBlocks } from '@/utils/fallbackData';

export const mockHome = {
  heroTitle: "Séjours et raids en ski de randonnée dans les Hautes-Alpes",
  heroSubtitle: "Toni Mancini — Moniteur de Ski de Randonnée",
  heroDescription: "Parcourez les plus beaux itinéraires des Alpes du Sud : Queyras, Écrins, Clarée, Ubaye et des destinations d'exception comme la Norvège.",
  heroImages: ["/images/hero.jpg"],
  
  aboutBadge: "Qui suis-je",
  aboutTitle: "Toni",
  aboutTitleAccent: "Mancini",
  aboutDescription: [
    {
      _type: 'block',
      children: [{ _type: 'span', text: "Je m'appelle Toni, moniteur de ski diplômé d'État et indépendant, basé dans les Alpes du Sud et plus précisément dans les Hautes-Alpes, aux Orres depuis 2001." }]
    },
    {
      _type: 'block',
      children: [{ _type: 'span', text: "Spécialisé en ski de montagne, passionné et pratiquant assidu, je vous accompagne aujourd'hui dans des aventures sur mesure, dans un cadre à la fois sérieux et convivial." }]
    }
  ],
  experienceYears: 25,

  activitiesTitle: "Explorez les Alpes",
  activitiesTitleAccent: "En ski de rando",
  activitiesDescription: "Des journées d'initiation aux raids itinérants les plus reculés, trouvez la formule idéale.",

  sortiesBadge: "Prochaines dates",
  sortiesTitle: "Calendrier des",
  sortiesTitleAccent: "Départs groupés",

  adventureBadge: "FAQ",
  adventureTitle: "Des questions ?",
  adventureTitleAccent: "ÉvasionSki y répond",
  adventureDescription: "Retrouvez les réponses aux questions les plus courantes sur l'organisation des sorties en ski de randonnée.",
  adventureFeatures: [],
  adventureImage: "/photos/DSC_6701.jpg",

  contactBadge: "Contact",
  contactTitle: "Prêt pour",
  contactTitleAccent: "L'Aventure ?",
  contactDescription: "Envoyez-moi un message pour réserver une date ou organiser un engagement privé sur mesure.",

  testimonialsBadge: "Témoignages",
  testimonialsTitle: "Ils ont",
  testimonialsTitleAccent: "Glissé avec moi",

  blogBadge: "Carnet de Montagne",
  blogTitle: "Récits &",
  blogTitleAccent: "Conditions",
  hideTestimonials: false,
  hideBlog: false,
  featuredPostsLimit: 3
};

export const mockSettings = {
  siteName: "ÉvasionSki",
  email: "tonimancini05200@gmail.com",
  phone: "06 73 45 84 34",
  address: "Les Orres, Hautes-Alpes",
  seoTitle: "ÉvasionSki | Raids et Ski de randonnée Hautes-Alpes",
  seoDescription: "Moniteur de ski indépendant Toni Mancini. Ski de randonnée, freerando et raids dans le Queyras, les Écrins, l'Ubaye et la Norvège.",
  footerDescription: "Vivez l'exceptionnel en altitude avec un moniteur passionné. Sécurité, aventure et respect de la nature.",
  instagram: "https://www.instagram.com/toni_evasionski.fr",
  facebook: "https://www.facebook.com/profile.php?id=61580500118649",
  youtube: "https://www.youtube.com/@evasionski",
  whatsappNumber: "33673458434",
  whatsappText: "Bonjour Toni, je souhaiterais me renseigner pour une sortie en ski de randonnée !",
  hidePartners: true,
  partners: []
};

export const mockContact = {
  email: "tonimancini05200@gmail.com",
  phone: "06 73 45 84 34",
  address: "Les Orres, Hautes-Alpes"
};

export const mockGuide = {
  badge: "Votre Guide",
  titleNormal: "Toni",
  titleAccent: "Mancini",
  quote: "Vivez l'exceptionnel en altitude avec un moniteur passionné. Sécurité, aventure et respect de la nature.",
  image: "/photos/DSC_6701.jpg",
  bioTitle: "Une passion du ski née dans les Hautes-Alpes",
  bio: [
    {
      _key: 'b1',
      _type: 'block',
      children: [{ _key: 's1', _type: 'span', text: "Je m'appelle Toni, moniteur de ski diplômé d'État et indépendant, basé dans les Alpes du Sud et plus précisément dans les Hautes-Alpes, aux Orres depuis 2001." }]
    },
    {
      _key: 'b2',
      _type: 'block',
      children: [{ _key: 's2', _type: 'span', text: "Spécialisé en ski de montagne, passionné et pratiquant assidu, je vous accompagne aujourd'hui dans des aventures sur mesure, dans un cadre à la fois sérieux et convivial." }]
    }
  ],
  certification: "Moniteur National",
  certificationSub: "Ski Alpin & Randonnée",
  experience: "25+",
  experienceSub: "Années d'expérience",
  values: [
    { title: "Sécurité", description: "La base de toute aventure. Une analyse constante des conditions pour un plaisir serein." },
    { title: "Adaptabilité", description: "La montagne impose son rythme, je m'adapte pour que votre expérience soit optimale." },
    { title: "Pédagogie", description: "Plus qu'un moniteur, je suis là pour vous apprendre à devenir autonome et à prendre du plaisir." }
  ]
};

export const mockActivities = [
  {
    title: "Engagement Privé / À la carte",
    slug: "ski-de-randonnee-engagement-prive",
    subtitle: "Sortie privée avec moniteur",
    intro: "Ski de randonnée sur mesure selon vos envies. En famille, entre amis ou en solo, tracez votre propre voie.",
    description: "Encadrement privé pour un apprentissage sur mesure ou la réalisation de vos projets de ski les plus ambitieux.",
    image: "/images/rebranded/ski-de-randonnee-engagement-prive/img_2.jpg",
    price: "À partir de 420€/jour",
    period: "Hiver / Printemps",
    location: "Hautes-Alpes, Queyras, Écrins",
    activityType: "ski",
    keyPoints: [
      { title: "Sur Mesure", description: "Itinéraire et rythme adaptés à votre niveau." },
      { title: "Flexibilité", description: "Choix des dates et du massif selon les conditions." }
    ]
  },
  {
    title: "Ski de randonnée journée",
    slug: "ski-randonnee-hautes-alpes-journee",
    subtitle: "Les plus beaux sommets à la journée",
    intro: "Des sorties à la journée pour s'évader, découvrir de nouveaux massifs et s'initier ou se perfectionner.",
    description: "Des vallons sauvages aux sommets panoramiques, découvrez les Hautes-Alpes loin de la foule des stations.",
    image: "/images/rebranded/ski-randonnee-hautes-alpes-journee/img_2.webp",
    price: "À partir de 95€/jour",
    period: "Décembre à Mai",
    location: "Hautes-Alpes",
    activityType: "ski",
    keyPoints: [
      { title: "Nature Sauvage", description: "Loin des remontées mécaniques et des foules." },
      { title: "Sécurité", description: "Apprentissage de l'utilisation du DVA et de l'analyse météo." }
    ]
  },
  {
    title: "Freerando & Hors-piste",
    slug: "ski-hors-piste-station-hautes-alpes",
    subtitle: "Ski hors-piste et freerando en station",
    intro: "Profitez des remontées mécaniques pour accéder à de longs hors-pistes et de superbes combes sauvages.",
    description: "Approche courte en peaux de phoque pour maximiser le dénivelé négatif et savourer de longues descentes vierges.",
    image: "/images/rebranded/ski-hors-piste-station-hautes-alpes/img_1.webp",
    price: "À partir de 90€/jour",
    period: "Hiver",
    location: "Les Orres, Crévoux, Réallon",
    activityType: "ski",
    keyPoints: [
      { title: "Ski Plaisir", description: "On privilégie les belles pentes et les grandes descentes." },
      { title: "Proximité", description: "Départ directement depuis les stations des Hautes-Alpes." }
    ]
  },
  {
    title: "Stages et raids à ski",
    slug: "stages-et-raids-a-ski-de-randonnee-hautes-alpes",
    subtitle: "Séjours itinérants de plusieurs jours",
    intro: "L'immersion totale en montagne. De refuge en gîte, vivez des raids à ski d'exception.",
    description: "Vivez l'itinérance à ski à travers les plus beaux massifs alpins et internationaux.",
    image: "/images/stages_raids_hub.jpg",
    price: "À partir de 350€",
    period: "Janvier à Mai",
    location: "Queyras, Clarée, Ubaye, Norvège",
    activityType: "ski",
    keyPoints: [
      { title: "Itinérance", description: "Changer de gîte ou de refuge chaque jour." },
      { title: "Dépassement", description: "Une aventure sportive et humaine inoubliable." }
    ],
    faqs: [
    {
        "question": "Comment se déroule un raid à ski ?",
        "answer": "Accompagné par Toni, moniteur de ski diplômé, vous partez en petit groupe sur des itinéraires adaptés aux conditions météo et nivologiques et à l’état de forme du groupe. Chaque jour, une nouvelle découverte, du grand ski, et des paysages à couper le souffle."
    },
    {
        "question": "Quelles différences entre un séjour et un raid ?",
        "answer": "En séjour, l’hébergement est situé en vallée, ce qui permet des départs en étoile vers différents itinéraires, avec déplacements en minibus pour viser l’ itinéraire le plus prometteur selon les  conditions de neige.Le raid, c’est une immersion plus profonde en montagne. On séjourne en refuge d’altitude, déjà bien loin de la vallée. Les départs se font skis aux pieds, c’est une expérience plus coupée du monde, plus intense, et terriblement dépaysante."
    },
    {
        "question": "À qui sont destinés ces séjours et ces raids ?",
        "answer": "Ces séjours en ski de rando s’adressent aux skieurs ayant une bonne condition physique et une expérience du ski de rando hors des pistes. C’est le format idéal pour ceux qui veulent vivre une immersion totale en montagne découvrir un massif en ski."
    },
    {
        "question": "Comment s’organise la logistique ?",
        "answer": "Pas de panique, pas besoin d’être en autonomie totale ! Tous les refuges de montagne et gîtes de vallée sont confortables et vous accueillent en pension complète.Le transport  est assuré : un minibus est à disposition pour se déplacer. Vous n’avez qu’à profiter pleinement de votre raid à ski, l’organisation est clé en main !"
    }
],
    univers: [
      { title: "Les Orres / Crévoux", description: [{ _type: 'block', children: [{ _type: 'span', text: "Freerando sur les Orres." }] }] },
      { title: "Queyras", description: [{ _type: 'block', children: [{ _type: 'span', text: "Raid dans le Queyras." }] }] },
      { title: "Clarée", description: [{ _type: 'block', children: [{ _type: 'span', text: "Raid en Clarée." }] }] },
      { title: "Ubaye", description: [{ _type: 'block', children: [{ _type: 'span', text: "Raid en Ubaye." }] }] },
      { title: "Norvège", description: [{ _type: 'block', children: [{ _type: 'span', text: "Voyage en Norvège." }] }] }
    ]
  }
];

export const mockSejours = [
  {
    title: "Ski de randonnée en engagement privé",
    slug: "ski-de-randonnee-engagement-prive",
    activityType: "ski-de-randonnee-engagement-prive",
    massif: "Hautes-Alpes / Ubaye / Queyras / Écrins / Norvège",
    level: "debutant",
    season: "hiver",
    duration: "À la carte",
    basePrice: "400€/jour",
    priceEncadrement: "400€/jour",
    priceFraisSejour: "450€ à 480€/jour selon groupe",
    image: "/images/hero.jpg",
    intro: textToBlocks(`## Ski de randonnée à la carte - Votre expérience 100% sur mesure

L’ aventure à ski de randonnée en formule privée aussi appelé « engagement » c’est le top pour partir en toute sérénité. Avec un moniteur rien que pour vous, tout devient simple et fluide : on défini ensemble vos envies, vos dates et votre destination, et on crée une expérience sur mesure sans aucune contrainte.`),
    description: `## Ski de randonnée à la carte - Votre expérience 100% sur mesure`,
    essentiel: textToBlocks(`• **de 1 à 4 personnes : 400€/jour (À diviser entre tous les participants)pour 5 personnes : 450€/jour (À diviser)pour 6 à 8 personnes : 480€/jour (À diviser)**

• **Embrunais, clarée, écrins, ubaye ainsi que le queyras et la Norvège**

• **Skieurs : débrouillés à expertseffort : accessible à intensetout est possible, laissez libre cours à vos envies**

• **minibus 9 places avec porte skis à disposition pour une logistique simplifiée**

• **gîte en vallée, refuge d'altitude, cabane de montagne, bivouac sous tente, hôtel de luxe, pension complète ou autogestion... on défini ensemble vos besoins et les options**

Pour profiter pleinement de votre engagement privé ski de randonnée, il est essentiel d’avoir le bon équipement. Voici la liste complète du matériel nécessaire, avec ce que nous fournissons et ce que vous devez apporter.`),
    programme: textToBlocks(``),
    materiel: textToBlocks(`### 1 - Matériel fourni si vous n’êtes pas équipé :

Pack secours : DVA (Détecteur de Victime d’Avalanche), pelle et sondeSac à dos adapté à l’activité (30/35l)

### 2 - Matériel personnel à prévoir :

Skis de randonnée avec fixations à insert (type Low Tech)Peaux de phoque en bon état (colle et poils encore efficaces)Couteaux à neige adaptés à vos fixationsChaussures de ski de rando débrayables (avec mode montée/descente)Bâtons de ski avec rondelles larges (≈ 8 cm)Sac à dos de 30 à 35 litresMinimum 1,5L d’eau par personnePique-nique + vivres de course (fruits secs, barres, pâtes de fruits…)

### 3 - Tenue vestimentaire adaptée

Pantalon de ski respirant avec aérationsVeste imperméable type Gore-TexMicro-doudoune ou polaire chaudeSous-couche technique (éviter le coton)Buff, cache couGants fins + gants chauds ou mouflesLunettes de soleil (cat. 3 ou 4) et/ou masque de skiBonnet fin, bandeau ou casquette + bonnet chaudCasque de ski conseillé mais facultatif (à votre convenance)Crème solaire à indice élevé (SPF 30 minimum)Pansements ampoules type seconde peau (Compeed ou équivalent)

### 4 - Pensez à l'assurance annulation :

Souscrire à une assurance annulation avant de réserver est fortement conseillé.Elle vous permettra d’être couvert en cas d’imprévu (blessure, empêchement professionnel, aléa familial…) entraînant l’annulation de votre participation. Sans cela, les frais engagés pour le séjour seront remboursés selon le barème des CGV.Une option d’assurance annulation « Impact Évasion » vous sera proposée au moment de votre réservation.

### 5 - Assurances personnelles obligatoires :

Chaque participant doit disposer de :Une assurance responsabilité civile individuelleUne assurance couvrant les frais de secours et de rapatriementIl est de votre responsabilité de vérifier que votre contrat d’assurance couvre ce type d’activité en milieu montagnard.Une option d’assurance secours et rapatriement « Impact Multisports » vous sera proposée au moment de votre réservation.

### 6 - Mon conseil équipement :

Les conditions varient vite en montagne : prévoyez des vêtements modulables. Le système 3 couches est idéal (1ère couche technique + couche thermique + couche coupe-vent). Une 4ème couche de secours peut être utile (ex : doudoune sans manches). Évitez de transpirer avec des vêtements trop chauds : l’humidité empêche de se réchauffer même avec une grosse doudoune. Trop chaud il en va de votre confort, trop froid il en va de votre survie !`),
    inclus: textToBlocks(`### Le prix affiché comprend :

L’encadrement professionnel par un moniteur diplômé d’ État ainsi que toute son expérience et son savoir faire acquis au fil des années de pratiqueL’ organisation et la préparation de la sortie, du raid ou du séjour/voyage tel que décrit dans l’onglet programme typeCoaching technique ski toutes neiges (conseils personnalisés et suivi pour améliorer votre technique)Le transport en minibus sur le départ de l’itinéraire du jour, depuis un point de rdvLe prêt éventuel de sac de montagne avec DVA, pelle et sondeMatériel collectif de sécurité et secours (radio vhf, trousse de secours, GPS ect…)Le petit coup de gnole du chef !

### Le prix affiché ne comprend pas :

La location éventuelle du matériel de ski de randonnée (ski, chaussures, bâtons, casque)Le forfait de remontées mécaniques (Freerando)Le transport jusqu’au point de rdv (voiture, train, avion, tapis volant…)Les assurances rapatriement et annulation (option possible au moment du paiement en ligne)Le pique nique ou repas du midiLes vivres de courses (graines, barres céréales, ect…)Toutes dépenses personnelles éventuellesTout ce qui n’est pas mentionné dans le chapitre « Le prix affiché comprend »

### Prêt pour une sortie ou un séjour sur mesure ? Dites-moi ce qui vous fait rêver et on construit votre aventure ensemble.

### Navigation rapide

+33 6 73 45 84 34

tonimancini05200@gmail.com

Copyright EvasionSki © 2025 Tout droits réservés.  Créé par Face Nord Graphisme`),
    gallery: [
          {
                  "url": "/images/rebranded/ski-hors-piste-station-hautes-alpes/img_1.webp",
                  "alt": "Freerando et ski hors-piste"
          },
          {
                  "url": "/images/rebranded/ski-hors-piste-station-hautes-alpes/img_2.webp",
                  "alt": "Freerando et ski hors-piste"
          },
          {
                  "url": "/images/rebranded/ski-hors-piste-station-hautes-alpes/img_3.webp",
                  "alt": "Freerando et ski hors-piste"
          },
          {
                  "url": "/images/rebranded/ski-hors-piste-station-hautes-alpes/img_4.webp",
                  "alt": "Freerando et ski hors-piste"
          },
          {
                  "url": "/images/rebranded/ski-hors-piste-station-hautes-alpes/img_5.webp",
                  "alt": "Freerando et ski hors-piste"
          },
          {
                  "url": "/images/rebranded/ski-hors-piste-station-hautes-alpes/img_6.webp",
                  "alt": "Freerando et ski hors-piste"
          },
          {
                  "url": "/images/rebranded/ski-hors-piste-station-hautes-alpes/img_7.webp",
                  "alt": "Freerando et ski hors-piste"
          }
  ],
    faqs: [
    {
        "question": "Où peut on organiser une sortie ou un raid à ski ?",
        "answer": "Je connais parfaitement les massifs des Hautes-Alpes, de l’Ubaye, du Queyras, des Écrins, et je peux aussi vous emmener plus loin si vous le souhaitez, y compris à l’étranger. On discute ensemble de vos envies, et je vous propose les meilleures options pour profiter de la poudreuse et des plus beaux paysages."
    },
    {
        "question": "Quelles sont les possibilités de sorties avec ce type de formule ?",
        "answer": "Elles sont illimitées, on est complètement libre :Une journée en ski de rando ou freerando pour débuter en ski de randonnée ou concrétiser un objectif de sommet que vous avez en tête.Un raid en étoile pour la facilité de logisitique, ou en itinérance de plusieurs jours pour une aventure plus engagée,Un séjour freerando ou ski de rando avec un camp de base en fond de vallée pour plus de mobilité et d’exploration.Ou même un programme entièrement personnalisé sur mesure."
    },
    {
        "question": "Quels sont les avantages de l'engagement par rapport à une sortie collective ?",
        "answer": "L’ exclusivité! En privé, vous choisissez les dates, la destination et le type de sortie. Je vous accompagne uniquement vous et votre groupe, ce qui permet d’être flexible, de progresser plus vite grâce aux conseils personnalisés, et de vivre une expérience plus personnalisée et conviviale, en famille, entre amis ou en couple.\n\nJe connais parfaitement les massifs des Hautes-Alpes, de l’Ubaye, du Queyras, des Écrins, et je peux aussi vous emmener plus loin si vous le souhaitez, y compris à l’étranger. On discute ensemble de vos envies, et je vous propose les meilleures options pour profiter de la poudreuse et des plus beaux paysages."
    }
]
  },
  {
    title: "Ski de randonnée",
    slug: "ski-randonnee-hautes-alpes-journee",
    activityType: "ski-randonnee-hautes-alpes-journee",
    massif: "Queyras / Ubaye / Embrunais / Écrins",
    level: "intermediaire",
    season: "hiver",
    duration: "1 jour",
    basePrice: "95€",
    priceEncadrement: "95€/pers",
    priceFraisSejour: "",
    image: "/images/rebranded/ski-randonnee-hautes-alpes-journee/img_0.webp",
    intro: textToBlocks(`## Ski de randonnée dans les Alpes - Une aventure à la journée

La journée encadrée en ski de randonnée est l’aventure accessible par excellence car elle permet s’immerger pleinement en montagne, sans contrainte logistique. Pas besoin de refuge ni de sac trop lourd : une bonne volonté suffit pour vivre un moment unique en ski dans la poudreuse.`),
    description: `## Ski de randonnée dans les Alpes - Une aventure à la journée`,
    essentiel: textToBlocks(`• **Tarif : 95€ / persen formule collective**

• **skieurs : débrouillés-intermédiaireseffort : modéréUn rythme équilibré, entre 700 et 1 000 m de dénivelé, pour allier effort et plaisir de la glisse**

• **Terrains préservés des Hautes-Alpes : sorties dans le Queyras, l’Ubaye ou l’Embrunais, loin des domaines skiables, dans un cadre exceptionnel**

• **Prêt de sac à dos de montagne et kit secours (dva, pelle, sonde) sur demande dans le formulaire d'inscriptionlogistique simplifiée : transport assuré en minibus 9 places, pour un départ serein et une journée sans contraintes.**

• **Une journée accessible, Parfait pour découvrir ou consolider les bases du ski de rando (utilisation des peaux de phoque, techniques de montées...).**`),
    programme: textToBlocks(`### Une journée type en ski de randonnée encadrée

Envie de vivre une vraie journée d’aventure en montagne ? Voici comment se déroule une sortie encadrée en ski de randonnée dans les Hautes-Alpes, entre apprentissage, paysages grandioses et plaisir de la glisse.8h30 – Rendez-vous à Baratier : Le départ se fait depuis l’aire de covoiturage, au rond point des Orres. Facile d’accès et pratique pour tous. (Point GPS ci-dessous). Vous arrivez en train ? On vient vous récupérer à la gare. Il suffit de réserver votre sortie et de nous prévenir par e-mail — on s’occupe du reste.Transport sur le lieu de départ : À bord de notre minibus, on vous emmène au départ de l’itinéraire du jour, choisi en fonction des conditions météo et nivologiques.Brief matériel & sécurité : Avant de chausser les skis, on vérifie ensemble l’équipement : skis de rando, peaux de phoque, fixations à insert, chaussures débrayables… ainsi que le pack secours (DVA, pelle, sonde) fourni si besoin.Montée en peaux : En route pour l’ascension ! On progresse à votre rythme, avec des conseils techniques pour mieux gérer l’effort, les conversions et la lecture du terrain.Pique-nique en altitude : Une pause bien méritée au sommet ou sur une crête avec vue panoramique. Le moment parfait pour souffler… et s’émerveiller.Descente plaisir : On vous accompagne aussi dans la descente avec des astuces pour améliorer votre ski en neige naturelle, en toute sécurité.Retour entre 16h et 17h : Retour en vallée, le sourire aux lèvres et les jambes bien sollicitées. Une journée complète, riche en apprentissages et en sensations.Cette sortie est idéale pour découvrir le ski de randonnée dans les Alpes du Sud, progresser techniquement, tester son matériel, et vivre une immersion en montagne loin des pistes. Encadrement professionnel, ambiance conviviale et itinéraires adaptés à tous les niveaux..

Pour profiter pleinement de votre journée de ski de randonnée encadrée, il est essentiel d’avoir le bon équipement. Voici la liste complète du matériel nécessaire, avec ce que nous fournissons et ce que vous devez apporter.`),
    materiel: textToBlocks(`### 1 - Matériel fourni si vous n’êtes pas équipé :

Pack secours : DVA (Détecteur de Victime d’Avalanche), pelle et sondeSac à dos adapté à l’activité (30/35l)

### 2 - Matériel personnel à prévoir :

Skis de randonnée avec fixations à insert (type Low Tech)Peaux de phoque en bon état (colle et poils encore efficaces)Couteaux à neige adaptés à vos fixationsChaussures de ski de rando débrayables (avec mode montée/descente)Bâtons de ski avec rondelles larges (≈ 8 cm)Sac à dos de 30 à 35 litresMinimum 1,5L d’eau par personnePique-nique + vivres de course (fruits secs, barres, pâtes de fruits…)

### 3 - Tenue vestimentaire adaptée

Pantalon de ski respirant avec aérationsVeste imperméable type Gore-TexMicro-doudoune ou polaire chaudeSous-couche technique (éviter le coton)Buff, cache couGants fins + gants chauds ou mouflesLunettes de soleil (cat. 3 ou 4) et/ou masque de skiBonnet fin, bandeau ou casquette + bonnet chaudCasque de ski conseillé mais facultatif (à votre convenance)Crème solaire à indice élevé (SPF 30 minimum)Pansements ampoules type seconde peau (Compeed ou équivalent)

### 4 - Pensez à l'assurance annulation :

Souscrire à une assurance annulation avant de réserver est fortement conseillé.Elle vous permettra d’être couvert en cas d’imprévu (blessure, empêchement professionnel, aléa familial…) entraînant l’annulation de votre participation. Sans cela, les frais engagés pour le séjour seront remboursés selon le barème des CGV.Une option d’assurance annulation « Impact Évasion » vous sera proposée au moment de votre réservation.

### 5 - Assurances personnelles obligatoires :

Chaque participant doit disposer de :Une assurance responsabilité civile individuelleUne assurance couvrant les frais de secours et de rapatriementIl est de votre responsabilité de vérifier que votre contrat d’assurance couvre ce type d’activité en milieu montagnard.Une option d’assurance secours et rapatriement « Impact Multisports » vous sera proposée au moment de votre réservation.

### 6 - Mon conseil équipement :

Les conditions varient vite en montagne : prévoyez des vêtements modulables. Le système 3 couches est idéal (1ère couche technique + couche thermique + couche coupe-vent). Une 4ème couche de secours peut être utile (ex : doudoune sans manches). Évitez de transpirer avec des vêtements trop chauds : l’humidité empêche de se réchauffer même avec une grosse doudoune. Trop chaud il en va de votre confort, trop froid il en va de votre survie !`),
    inclus: textToBlocks(`### Le prix affiché comprend :

L’encadrement professionnel par un moniteur diplômé d’ État ainsi que toute son expérience et son savoir faire acquis au fil des années de pratiqueL’ organisation et la préparation de la sortie, du raid ou du séjour/voyage tel que décrit dans l’onglet programme typeCoaching technique ski toutes neiges (conseils personnalisés et suivi pour améliorer votre technique)Le transport en minibus sur le départ de l’itinéraire du jour, depuis un point de rdvLe prêt éventuel de sac de montagne avec DVA, pelle et sondeMatériel collectif de sécurité et secours (radio vhf, trousse de secours, GPS ect…)Le petit coup de gnole du chef !

### Le prix affiché ne comprend pas :

La location éventuelle du matériel de ski de randonnée (ski, chaussures, bâtons, casque)Le forfait de remontées mécaniques (Freerando)Le transport jusqu’au point de rdv (voiture, train, avion, tapis volant…)Les assurances rapatriement et annulation (option possible au moment du paiement en ligne)Le pique nique ou repas du midiLes vivres de courses (graines, barres céréales, ect…)Toutes dépenses personnelles éventuellesTout ce qui n’est pas mentionné dans le chapitre « Le prix affiché comprend »

### rÉserver une date

Prochaines dates à venir...

### Navigation rapide

+33 6 73 45 84 34

tonimancini05200@gmail.com

Copyright EvasionSki © 2025 Tout droits réservés.  Créé par Face Nord Graphisme`),
    gallery: [
          {
                  "url": "/images/rebranded/ski-randonnee-hautes-alpes-journee/img_1.webp",
                  "alt": "Ski de randonnée"
          },
          {
                  "url": "/images/rebranded/ski-randonnee-hautes-alpes-journee/img_2.webp",
                  "alt": "Ski de randonnée"
          },
          {
                  "url": "/images/rebranded/ski-randonnee-hautes-alpes-journee/img_3.jpg",
                  "alt": "Ski de randonnée"
          },
          {
                  "url": "/images/rebranded/ski-randonnee-hautes-alpes-journee/img_4.jpg",
                  "alt": "Ski de randonnée"
          },
          {
                  "url": "/images/rebranded/ski-randonnee-hautes-alpes-journee/img_5.webp",
                  "alt": "Ski de randonnée"
          },
          {
                  "url": "/images/rebranded/ski-randonnee-hautes-alpes-journee/img_6.jpg",
                  "alt": "Ski de randonnée"
          },
          {
                  "url": "/images/rebranded/ski-randonnee-hautes-alpes-journee/img_7.jpg",
                  "alt": "Ski de randonnée"
          }
  ],
    faqs: [
    {
        "question": "Quel est l’intérêt du ski de randonnée à la journée ?",
        "answer": "C’est le format idéal pour progresser techniquement et passer un moment fort en nature.Vous partez léger, vous revenez dans la journée, avec des images plein la tête."
    },
    {
        "question": "Où se déroulent les sorties à la journée ?",
        "answer": "Les itinéraires se situent au sud des Alpes françaises dans les Hautes-Alpes, au cœur de massifs exceptionnels comme le Queyras, l’ Ubaye, l’ Embrunais mais encore les Écrins et la Clarée.Des lieux sauvages, peu fréquentés, parfaits pour la randonnée à ski."
    },
    {
        "question": "À qui s’adressent ces sorties ?",
        "answer": "À tout le monde : débutant curieux, skieur occasionnel ou pratiquant confirmé. Toni adapte l’itinéraire à votre niveau et à votre forme du moment (évaluer votre niveau)."
    },
    {
        "question": "Qu’est-ce qu’on apprend pendant une journée de ski de rando ?",
        "answer": "Vous découvrez comment utiliser le matériel, les différentes techniques de montées ainsi que la gestion de l’effort en lisant le terrain .Vous progressez aussi sur la sécurité en montagne, l’utilisation du matériel, et bien sûr… vous profitez de conseils techniques pour de belles descentes en neige fraiche."
    },
    {
        "question": "Comment est l' ambiance pendant la sortie ?",
        "answer": "Une ambiance conviviale et détendue.Avec Toni, on partage l’effort, la neige et les sourires. Le groupe avance ensemble, en confiance, entre échanges techniques et plaisir de la montagne."
    },
    {
        "question": "Et pour se loger ?",
        "answer": "Voici quelques adresses que je vous conseille pour des nuits reposantes et des repas montagnards faits maison : la Grande Ferme à Saint-Sauveur, La Jarbelle aux Orres ou encore le gîte l’Edelweiss à Abriès, tout près des départs de course.Des lieux simples, accueillants, et bien placés pour profiter pleinement du séjour."
    }
]
  },
  {
    title: "Freerando et ski hors-piste",
    slug: "ski-hors-piste-station-hautes-alpes",
    activityType: "ski-hors-piste-station-hautes-alpes",
    massif: "Les Orres / Crévoux / Vars",
    level: "confirme",
    season: "hiver",
    duration: "1 jour",
    basePrice: "95€",
    priceEncadrement: "95€/pers",
    priceFraisSejour: "",
    image: "/images/rebranded/ski-hors-piste-station-hautes-alpes/img_0.webp",
    intro: textToBlocks(`## Freerando dans les Alpes - Une aventure à la journée

La freerando est la fusion du freeride et du ski de randonnée. Au départ des remontées mécaniques et avec seulement 400 à 700 m de dénivelé positif en peaux de phoque, on accède à des zones hors-piste éloignées et peu fréquentées, peu ou pas tracées et souvent en neige poudreuse. Les secteurs des Orres, de Crévoux sont particulièrement bien fournis en itinéraires de ski de rando et freerando de quaité et souvent peu tracés.`),
    description: `## Freerando dans les Alpes - Une aventure à la journée`,
    essentiel: textToBlocks(`• **tarif : 95€ / persen formule collective**

• **skieurs : confirmés effort : accessibleUn rythme équilibré, entre 400 et 700 m de dénivelé, pour 1600m de descente loin des itinéraires classiques surfréquentés**

• **Terrains préservés des Hautes-Alpes : les stations de crevoux, vars et les orres regorgent de spots sauvages**

• **Accès rapide à la poudreuse via les remontées mécaniques et de courtes approches Parfait pour les skieurs confirmés à experts, que ce soit pour apprendre, progresser ou simplement en profiter à fond.**

• **Prêt de sac à dos de montagne et kit secours (dva, pelle, sonde) sur demande dans le formulaire d'inscriptionlogistique simplifiée : transport assuré en minibus 9 places, pour un départ serein et une journée sans contraintes.**`),
    programme: textToBlocks(`### Une jounée type en ski hors piste et freerando

Envie de vivre une vraie journée d’aventure en montagne ? Voici comment se déroule une sortie encadrée en ski hors piste et freerando dans les Hautes-Alpes, entre apprentissage, paysages grandioses et plaisir de la glisse.8h30 – Rendez-vous à Baratier : Le départ se fait depuis l’aire de covoiturage, au rond point des Orres. Facile d’accès et pratique pour tous. (Point GPS ci-dessous). Vous arrivez en train ? On vient vous récupérer à la gare. Il suffit de réserver votre sortie et de nous prévenir par e-mail — on s’occupe du reste.Transport sur le lieu de départ : À bord de notre minibus, on vous emmène au départ de la station du jour selon les conditions nivo et météo du moment.Brief matériel & sécurité : Avant de chausser les skis, on vérifie ensemble l’équipement : skis de rando, peaux de phoque, fixations à insert, chaussures débrayables (freerando)… ainsi que le pack secours (DVA, pelle, sonde) fourni si besoin.Premier run : Depuis le sommet des remontées mécaniques on fait une première descente en hors piste.Second run : Après une « courte » montée en peau de phoque (~500/700m D+) on pique nique au sommet avec vue imprenable. Et on fini par une descente plaisir de 1000m D- ponctuée de quelques conseils pour améliorer votre ski en toute neige tout terrain.Retour entre 16h et 17h : Retour en vallée, le sourire aux lèvres et les jambes bien sollicitées. Une journée complète, riche en apprentissages et en sensations.Cette sortie est idéale pour découvrir le ski hors piste et freerando dans les Alpes du Sud, progresser techniquement, tester son matériel, et vivre une immersion en montagne . Encadrement professionnel, ambiance conviviale et itinéraires adaptés à tous les niveaux..

Pour profiter pleinement de votre journée de freerando et hors-piste encadrée, il est essentiel d’avoir le bon équipement. Voici la liste complète du matériel nécessaire, avec ce que nous fournissons et ce que vous devez apporter.`),
    materiel: textToBlocks(`### 1 - Matériel fourni si vous n’êtes pas équipé :

Pack secours : DVA (Détecteur de Victime d’Avalanche), pelle et sondeSac à dos adapté à l’activité (30/35l)

### 2 - Matériel personnel à prévoir :

Skis de randonnée avec fixations à insert (type Low Tech)Peaux de phoque en bon état (colle et poils encore efficaces)Couteaux à neige adaptés à vos fixationsChaussures de ski de rando débrayables (avec mode montée/descente)Bâtons de ski avec rondelles larges (≈ 8 cm)Sac à dos de 30 à 35 litresMinimum 1,5L d’eau par personnePique-nique + vivres de course (fruits secs, barres, pâtes de fruits…)

### 3 - Tenue vestimentaire adaptée

Pantalon de ski respirant avec aérationsVeste imperméable type Gore-TexMicro-doudoune ou polaire chaudeSous-couche technique (éviter le coton)Buff, cache couGants fins + gants chauds ou mouflesLunettes de soleil (cat. 3 ou 4) et/ou masque de skiBonnet fin, bandeau ou casquette + bonnet chaudCasque de ski conseillé mais facultatif (à votre convenance)Crème solaire à indice élevé (SPF 30 minimum)Pansements ampoules type seconde peau (Compeed ou équivalent)

### 4 - Pensez à l'assurance annulation :

Souscrire à une assurance annulation avant de réserver est fortement conseillé.Elle vous permettra d’être couvert en cas d’imprévu (blessure, empêchement professionnel, aléa familial…) entraînant l’annulation de votre participation. Sans cela, les frais engagés pour le séjour seront remboursés selon le barème des CGV.Une option d’assurance annulation « Impact Évasion » vous sera proposée au moment de votre réservation.

### 5 - Assurances personnelles obligatoires :

Chaque participant doit disposer de :Une assurance responsabilité civile individuelleUne assurance couvrant les frais de secours et de rapatriementIl est de votre responsabilité de vérifier que votre contrat d’assurance couvre ce type d’activité en milieu montagnard.Une option d’assurance secours et rapatriement « Impact Multisports » vous sera proposée au moment de votre réservation.

### 6 - Mon conseil équipement :

Les conditions varient vite en montagne : prévoyez des vêtements modulables. Le système 3 couches est idéal (1ère couche technique + couche thermique + couche coupe-vent).Une 4ème couche de secours peut être utile (ex : doudoune sans manches).Évitez de transpirer avec des vêtements trop chauds : l’humidité empêche de se réchauffer même avec une grosse doudoune. Trop chaud il en va de votre confort, trop froid il en va de votre survie !`),
    inclus: textToBlocks(`### Le prix affiché comprend :

L’encadrement professionnel par un moniteur diplômé d’ État ainsi que toute son expérience et son savoir faire acquis au fil des années de pratiqueL’ organisation et la préparation de la sortie, du raid ou du séjour/voyage tel que décrit dans l’onglet programme typeCoaching technique ski toutes neiges (conseils personnalisés et suivi pour améliorer votre technique)Le transport en minibus sur le départ de l’itinéraire du jour, depuis un point de rdvLe prêt éventuel de sac de montagne avec DVA, pelle et sondeMatériel collectif de sécurité et secours (radio vhf, trousse de secours, GPS ect…)Le petit coup de gnole du chef !

### Le prix affiché ne comprend pas :

La location éventuelle du matériel de ski de randonnée (ski, chaussures, bâtons, casque)Le forfait de remontées mécaniques (Freerando)Le transport jusqu’au point de rdv (voiture, train, avion, tapis volant…)Les assurances rapatriement et annulation (option possible au moment du paiement en ligne)Le pique nique ou repas du midiLes vivres de courses (graines, barres céréales, ect…)Toutes dépenses personnelles éventuellesTout ce qui n’est pas mentionné dans le chapitre « Le prix affiché comprend »

### RÉSERVER UNE DATE

Prochaines dates à venir...

### Navigation rapide

+33 6 73 45 84 34

tonimancini05200@gmail.com

Copyright EvasionSki © 2025 Tout droits réservés.  Créé par Face Nord Graphisme`),
    gallery: [
          {
                  "url": "/images/rebranded/ski-hors-piste-station-hautes-alpes/img_1.webp",
                  "alt": "Freerando et ski hors-piste"
          },
          {
                  "url": "/images/rebranded/ski-hors-piste-station-hautes-alpes/img_2.webp",
                  "alt": "Freerando et ski hors-piste"
          },
          {
                  "url": "/images/rebranded/ski-hors-piste-station-hautes-alpes/img_3.webp",
                  "alt": "Freerando et ski hors-piste"
          },
          {
                  "url": "/images/rebranded/ski-hors-piste-station-hautes-alpes/img_4.webp",
                  "alt": "Freerando et ski hors-piste"
          },
          {
                  "url": "/images/rebranded/ski-hors-piste-station-hautes-alpes/img_5.webp",
                  "alt": "Freerando et ski hors-piste"
          },
          {
                  "url": "/images/rebranded/ski-hors-piste-station-hautes-alpes/img_6.webp",
                  "alt": "Freerando et ski hors-piste"
          },
          {
                  "url": "/images/rebranded/ski-hors-piste-station-hautes-alpes/img_7.webp",
                  "alt": "Freerando et ski hors-piste"
          }
  ],
    faqs: [
    {
        "question": "A qui s'adresse la freerando ?",
        "answer": "C’est l’idéal pour les skieurs confirmés en quête de sensations fortes mais n’ayant pas les capacités ou l’envie de faire de longues ascensions. C’est aussi une belle porte d’entrée vers la pratique du ski de randonnée classique en terrain naturel."
    },
    {
        "question": "Quels sont les avantages ?",
        "answer": "Accès rapide aux pentes viergesMoins d’effort en montée, plus de descentesEncadrement professionnel pour skier en sécuritéTransport en minibus  Format parfait pour une journée intense ou un week-end entre passionnés"
    },
    {
        "question": "Où se déroulent ces sorties ?",
        "answer": "Dans les stations des Hautes-Alpes : Les Orres, Vars, Crévoux  ou encore Ceillac ainsi qu’ Abriès. Toni vous guide vers les meilleurs itinéraires de ski hors piste et freerando selon les conditions, votre niveau et votre forme…"
    },
    {
        "question": "Et pour se loger ?",
        "answer": "Voici quelques adresses que je vous conseille pour des nuits reposantes et des repas montagnards faits maison : la Grande Ferme à Saint-Sauveur, La Jarbelle aux Orres ou encore le gîte l’Edelweiss à Abriès, tout près des départs de course.Des lieux simples, accueillants, et bien placés pour profiter pleinement du séjour."
    }
]
  },
  {
    title: "Stage ski de rando / freerando - Les Orres -Crévoux",
    slug: "stage-de-ski-freerando-les-orres-crevoux",
    activityType: "stages-et-raids-a-ski-de-randonnee-hautes-alpes",
    subCategory: "les-orres-crevoux",
    massif: "Embrunais / Parpaillon",
    level: "intermediaire",
    season: "hiver",
    duration: "3 jours",
    basePrice: "380€",
    priceEncadrement: "240€/pers",
    priceFraisSejour: "140€/pers",
    image: "/images/rebranded/stage-de-ski-freerando-les-orres-crevoux/img_0.webp",
    intro: textToBlocks(`## Stage ski de randonnée et freerando - Exploration des Orres et de Crévoux

La freerando est la fusion du freeride et du ski de randonnée. Au départ des remontées mécaniques et avec seulement 400 à 700 m de dénivelé positif en peaux de phoque, on accède à des zones hors-piste éloignées et peu fréquentées, peu ou pas tracées et souvent en neige poudreuse. Les secteurs des Orres, de Crévoux sont particulièrement bien fournis en itinéraires de ski de rando et freerando de qualité et souvent peu tracés. L’aupillon, Costa Ruenda ou encore Le Méale (pour ne citer qu’eux) n’ont jamais été aussi proches de vos spatules.`),
    description: `## Stage ski de randonnée et freerando - Exploration des Orres et de Crévoux`,
    essentiel: textToBlocks(`• **tarif : 295€ / persen formule collectivedépart assuré à 3 inscrits**

• **skieurs : intermédiaires /  confirmés effort : accessible / modéréUn rythme équilibré, entre 400 et 700 m de dénivelé, pour 1600m de descente loin des itinéraires classiques surfréquentés**

• **Terrains préservés des Hautes-Alpes : les stations de crevoux et les orres regorgent de spots sauvages et d'itinéraires grand ski.**

• **Accès rapide à la poudreuse via les remontées mécaniques (forfait "rando") et de courtes approches Parfait pour les skieurs confirmés à experts, que ce soit pour apprendre, progresser ou simplement en profiter à fond.**

• **Prêt de sac à dos de montagne et kit secours (dva, pelle, sonde) sur demande dans le formulaire d'inscriptionlogistique simplifiée : transport assuré en minibus 9 places, pour un départ serein et des journées sans contraintes.**`),
    programme: textToBlocks(`### Une jounée type en ski hors piste et freerando

Envie de découvrir les meilleurs spots de ski de rando et freerando des Orres et de Crévoux dans les Hautes-Alpes, voici comment se déroule les stage « ski de randonnée et freerando » de 3 jours.8h45 – Rendez-vous aux Orres :  directement sur le front de neige 1650 devant les caisses de forfait.Brief matériel & sécurité : Avant de chausser les skis, on vérifie ensemble l’équipement : skis de rando, peaux de phoque, fixations à insert, chaussures débrayables (freerando)… ainsi que le pack secours (DVA, pelle, sonde) fourni si besoin.Premier run : Depuis le sommet des remontées mécaniques on fait une première descente en hors piste.Second run : Après une « courte » montée en peau de phoque (~500/700m D+) on pique nique au sommet avec vue imprenable. Et on fini par une descente plaisir de 1000m D- ponctuée de quelques conseils pour améliorer votre ski en toute neige tout terrain.Retour entre 15h30 et 17h : Retour en station, le sourire aux lèvres et les jambes bien sollicitées. Une journée complète, riche en apprentissages et en sensations.Ce stage est idéal pour découvrir le ski de randonnée et la freerando dans les stations des Alpes du Sud : Crévoux et Les Orres, progresser techniquement, tester son matériel, et vivre une immersion en montagne . Encadrement professionnel, ambiance conviviale et itinéraires adaptés à tous les niveaux.

Pour profiter pleinement de votre stage ski de rando et freerando, il est essentiel d’avoir le bon équipement. Voici la liste complète du matériel nécessaire, avec ce que nous fournissons et ce que vous devez apporter.`),
    materiel: textToBlocks(`### 1 - Matériel fourni si vous n’êtes pas équipé :

Pack secours : DVA (Détecteur de Victime d’Avalanche), pelle et sondeSac à dos adapté à l’activité (30/35l)

### 2 - Matériel personnel à prévoir :

Skis de randonnée avec fixations à insert (type Low Tech)Peaux de phoque en bon état (colle et poils encore efficaces)Couteaux à neige adaptés à vos fixations (IMPÉRATIFS)Chaussures de ski de rando débrayables (avec mode montée/descente)Bâtons de ski avec rondelles larges (≈ 8 cm)Sac à dos de 30 à 35 litresMinimum 1,5L d’eau par personnePique-nique + vivres de course (fruits secs, barres, pâtes de fruits…)

### 3 - Tenue vestimentaire adaptée

Pantalon de ski respirant avec aérationsVeste imperméable type Gore-TexMicro-doudoune ou polaire chaudeSous-couche technique (éviter le coton)Buff, cache couGants fins + gants chauds ou mouflesLunettes de soleil (cat. 3 ou 4) et/ou masque de skiBonnet fin, bandeau ou casquette + bonnet chaudCasque de ski conseillé mais facultatif (à votre convenance)Crème solaire à indice élevé (SPF 30 minimum)Pansements ampoules type seconde peau (Compeed ou équivalent)

### 4 - Pensez à l'assurance annulation :

Souscrire à une assurance annulation avant de réserver est fortement conseillé.Elle vous permettra d’être couvert en cas d’imprévu (blessure, empêchement professionnel, aléa familial…) entraînant l’annulation de votre participation. Sans cela, les frais engagés pour le séjour seront remboursés selon le barème des CGV.Une option d’assurance annulation « Impact Évasion » vous sera proposée au moment de votre réservation.

### 5 - Assurances personnelles obligatoires :

Chaque participant doit disposer de :Une assurance responsabilité civile individuelleUne assurance couvrant les frais de secours et de rapatriementIl est de votre responsabilité de vérifier que votre contrat d’assurance couvre ce type d’activité en milieu montagnard.Une option d’assurance secours et rapatriement « Impact Multisports » vous sera proposée au moment de votre réservation.

### 6 - Mon conseil équipement :

Les conditions varient vite en montagne : prévoyez des vêtements modulables. Le système 3 couches est idéal (1ère couche technique + couche thermique + couche coupe-vent).Une 4ème couche de secours peut être utile (ex : doudoune sans manches).Évitez de transpirer avec des vêtements trop chauds : l’humidité empêche de se réchauffer même avec une grosse doudoune. Trop chaud il en va de votre confort, trop froid il en va de votre survie !`),
    inclus: textToBlocks(`### Le prix affiché comprend :

L’encadrement professionnel par un moniteur diplômé d’ État ainsi que toute son expérience et son savoir faire acquis au fil des années de pratiqueL’ organisation et la préparation de la sortie, du raid ou du séjour/voyage tel que décrit dans l’onglet programme typeCoaching technique ski toutes neiges (conseils personnalisés et suivi pour améliorer votre technique)Le transport en minibus sur le départ de l’itinéraire du jour, depuis un point de rdvLe prêt éventuel de sac de montagne avec DVA, pelle et sondeMatériel collectif de sécurité et secours (radio vhf, trousse de secours, GPS ect…)Le petit coup de gnole du chef !

### Le prix affiché ne comprend pas :

La location éventuelle du matériel de ski de randonnée (ski, chaussures, bâtons, casque)Le forfait de remontées mécaniques (Freerando)Le transport jusqu’au point de rdv (voiture, train, avion, tapis volant…)Les assurances rapatriement et annulation (option possible au moment du paiement en ligne)Le pique nique ou repas du midiLes vivres de courses (graines, barres céréales, ect…)Toutes dépenses personnelles éventuellesTout ce qui n’est pas mentionné dans le chapitre « Le prix affiché comprend »

### RÉSERVER UNE DATE

Prochaines dates à venir...

### Navigation rapide

+33 6 73 45 84 34

tonimancini05200@gmail.com

Copyright EvasionSki © 2025 Tout droits réservés.  Créé par Face Nord Graphisme`),
    gallery: [
          {
                  "url": "/images/rebranded/stage-de-ski-freerando-les-orres-crevoux/img_1.jpg",
                  "alt": "Stage ski de rando / freerando -\nLes Orres -Crévoux"
          },
          {
                  "url": "/images/rebranded/stage-de-ski-freerando-les-orres-crevoux/img_2.webp",
                  "alt": "Stage ski de rando / freerando -\nLes Orres -Crévoux"
          },
          {
                  "url": "/images/rebranded/stage-de-ski-freerando-les-orres-crevoux/img_3.webp",
                  "alt": "Stage ski de rando / freerando -\nLes Orres -Crévoux"
          },
          {
                  "url": "/images/rebranded/stage-de-ski-freerando-les-orres-crevoux/img_4.webp",
                  "alt": "Stage ski de rando / freerando -\nLes Orres -Crévoux"
          },
          {
                  "url": "/images/rebranded/stage-de-ski-freerando-les-orres-crevoux/img_5.webp",
                  "alt": "Stage ski de rando / freerando -\nLes Orres -Crévoux"
          },
          {
                  "url": "/images/rebranded/stage-de-ski-freerando-les-orres-crevoux/img_6.webp",
                  "alt": "Stage ski de rando / freerando -\nLes Orres -Crévoux"
          },
          {
                  "url": "/images/rebranded/stage-de-ski-freerando-les-orres-crevoux/img_7.webp",
                  "alt": "Stage ski de rando / freerando -\nLes Orres -Crévoux"
          }
  ],
    faqs: [
    {
        "question": "A qui s'adresse la freerando ?",
        "answer": "C’est l’idéal pour les skieurs confirmés et freerideurs en quête de sensations fortes mais n’ayant pas les capacités ou l’envie de faire de longues ascensions. C’est aussi une belle porte d’entrée vers la pratique du ski de randonnée classique en terrain naturel."
    },
    {
        "question": "Quels sont les avantages ?",
        "answer": "Accès rapide aux pentes viergesMoins d’effort en montée, plus de descentesEncadrement professionnel pour skier en sécuritéTransport en minibus  Format de 3 jours de ski et d’exploration pour plus de plaisir"
    },
    {
        "question": "Où se déroulent ces sorties ?",
        "answer": "Dans les stations des Hautes-Alpes : Crévoux et Les Orres. Toni vous guide vers les meilleurs itinéraires de ski hors piste et freerando selon les conditions, votre niveau et votre forme…"
    },
    {
        "question": "Et pour se loger ?",
        "answer": "Voici quelques adresses que je vous conseille pour des nuits reposantes et des repas montagnards faits maison : la Grande Ferme à Saint-Sauveur, La Jarbelle aux Orres .Des lieux simples, accueillants, et bien placés pour profiter pleinement du séjour."
    }
]
  },
  {
    title: "Queyras en ski de randonnée",
    slug: "ski-de-randonnee-queyras-decouverte",
    activityType: "stages-et-raids-a-ski-de-randonnee-hautes-alpes",
    subCategory: "queyras",
    massif: "Queyras",
    level: "intermediaire",
    season: "hiver",
    duration: "5 jours",
    basePrice: "620€",
    priceEncadrement: "400€/pers",
    priceFraisSejour: "220€/pers",
    image: "/images/rebranded/ski-de-randonnee-queyras-decouverte/img_0.jpg",
    intro: textToBlocks(`## Le Queyras en ski de randonnée - Vue sur le Viso

Le Queyras est l’un des massifs les plus sauvages, préservés et ensoleillé des Alpes françaises. C’est un terrain parfait pour un séjour de ski de randonnée authentique et dépaysant. A l’aide de nos peaux de phoques nous partirons explorer les moindres recoins de ce massif exceptionnel.`),
    description: `## Le Queyras en ski de randonnée - Vue sur le Viso`,
    essentiel: textToBlocks(`• **tarif : 870€ / pers ( encadrement + hébergement  pension complète)**

• **Parc Naturel Régional du Queyras, hautes-alpes**

• **skieurs : intermédiaires & confirméseffort : modéréUn rythme équilibré, entre 800 et 1 400 m de dénivelé, pour allier effort, plaisir de la glisse et temps de récupération**

• **Hébergement en pension complète à abriès au gîte l'edelweiss : confort, convivialité et repas montagnards**

• **Prêt de sac à dos de montagne et kit secours (dva, pelle, sonde) logistique simplifiée : transport assuré en minibus 9 places, pour un départ serein et un séjour sans contraintes**`),
    programme: textToBlocks(`### Programme type Séjour Queyras en Ski de Randonnée

Le Queyras à ski de rando : sauvage, lumineux, inoubliable. 5 jours de ski au cœur du massif.Accueil et installation : Arrivée au gîte L’ Edelweiss à Abriès à partir de 16h30 le dimanche .Soirée libre au gîte, dîner inclus, nuit en chambre partagée.Jour 1 à 5 (lundi > vendredi) : Ski de randonnée dans le massif du QueyrasDes sorties à la journée dans des vallées emblématiques du Queyras : vallée d’Agnel, Valpreveyre , Arvieux, ou encore Soulier.Une progression technique encadrée :Techniques de montée (conversion, rythme, choix de trace)Techniques de descente hors-pisteGestion de l’effort et lecture du terrainDes ateliers pédagogiques intégrés aux journées :Lecture de carte, utilisation de la boussole et orientation GPSAnalyse du BERA, lecture du manteau neigeuxExercices de recherche DVA et de mise en situation de secours avalancheDes briefings et débriefings quotidiens, dans une ambiance conviviale, avec des retours personnalisés et des échanges collectifs.Vie au gîte :Chaque soir, retour au gîte L’edelweiss pour une douche chaude, un repas maison partagé, et un bon moment d’échange.Ambiance simple, chaleureuse, idéale pour se reposer et profiter du groupe.Les sorties sont adaptées chaque jour en fonction des conditions nivo-météo, du groupe, et des objectifs pédagogiques.L’objectif : progresser à son rythme dans un cadre sécurisé, tout en profitant pleinement de la beauté du massif du Queyras.Dispersion du groupe le vendredi en début d’après-midi, après une belle semaine partagée, les jambes sollicitées… et l’envie de revenir déjà bien présente.

Pour profiter pleinement de votre séjour dans le Queyras en ski de randonnée, il est essentiel d’avoir le bon équipement. Voici la liste complète du matériel nécessaire de ce que vous devez apporter.`),
    materiel: textToBlocks(`### 1 - Matériel fourni si vous n’êtes pas équipé :

Pack secours : DVA (Détecteur de Victime d’Avalanche), pelle et sondeSac à dos adapté à l’activité (30/35l)

### 2 - Matériel personnel à prévoir :

Skis de randonnée avec fixations à insert (type Low Tech)Peaux de phoque en bon état (colle et poils encore efficaces)Couteaux à neige adaptés à vos fixationsChaussures de ski de rando débrayables (avec mode montée/descente)Bâtons de ski avec rondelles larges (≈ 8 cm)Minimum 1,5L d’eau par personnePique-nique + vivres de course (fruits secs, barres, pâtes de fruits…)Pack secours : DVA (Détecteur de Victime d’Avalanche), pelle et sondeSac à dos adapté à l’activité (30/35l)

### 3 - Tenue vestimentaire adaptée

Pantalon de ski respirant avec aérationsVeste imperméable type Gore-Tex (impératif)Micro-doudoune ou polaire chaudeSous-couche technique (éviter le coton)Buff, cache couGants fins + gants chauds ou mouflesLunettes de soleil (cat. 3 ou 4) et/ou masque de ski mauvais tempsBonnet fin, bandeau ou casquette + bonnet chaudCasque de ski conseillé mais facultatif (à votre convenance)Crème solaire à indice élevé (SPF 30 minimum)Pansements ampoules type seconde peau (Compeed ou équivalent)

### 4 - Pensez à l'assurance annulation :

Souscrire à une assurance annulation avant de réserver est fortement conseillé.Elle vous permettra d’être couvert en cas d’imprévu (blessure, empêchement professionnel, aléa familial…) entraînant l’annulation de votre participation. Sans cela, les frais engagés pour le séjour seront remboursés selon le barème des CGV.Une option d’assurance annulation « Impact Évasion » vous sera proposée au moment de votre réservation.

### 5 - Assurances personnelles obligatoires :

Chaque participant doit disposer de :Une assurance responsabilité civile individuelleUne assurance couvrant les frais de secours et de rapatriementIl est de votre responsabilité de vérifier que votre contrat d’assurance couvre ce type d’activité en milieu montagnard.Une option d’assurance secours et rapatriement « Impact Multisports » vous sera proposée au moment de votre réservation.

### 6 - Mon conseil équipement :

Les conditions varient vite en montagne : prévoyez des vêtements modulables. Le système 3 couches est idéal (1ère couche technique + couche thermique + couche coupe-vent).Une 4ème couche de secours peut être utile (ex : doudoune sans manches).Évitez de transpirer avec des vêtements trop chauds : l’humidité empêche de se réchauffer même avec une grosse doudoune. Trop chaud il en va de votre confort, trop froid il en va de votre survie !`),
    inclus: textToBlocks(`### Le prix affiché comprend :

L’encadrement professionnel par un moniteur diplômé d’ État ainsi que toute son expérience et son savoir faire acquis au fil des années de pratiqueL’ organisation et la préparation de la sortie, du raid ou du séjour/voyage tel que décrit dans l’onglet programme typeCoaching technique ski toutes neiges (conseils personnalisés et suivi pour améliorer votre technique)L’ hébergement en pension complète au gîte l’ Edelweiss (p’tit déj, pique nique et dîner)Le transport en minibus sur le départ des itinéraires et durant tout le séjourMatériel collectif de sécurité et secours (radio vhf, trousse de secours, GPS ect…)Le petit coup de gnole du chef !

### Le prix affiché ne comprend pas :

La location éventuelle du matériel de ski de randonnée (ski, chaussures, bâtons, casque)Le transport jusqu’au gîte depuis votre domicile (voiture, train, avion, tapis volant…)Les assurances rapatriement et annulation (option possible au moment du paiement en ligne)Les vivres de courses (graines, barres céréales, ect…)Toutes dépenses personnelles éventuellesTout ce qui n’est pas mentionné dans le chapitre « Le prix affiché comprend »

### RÉSERVER UNE DATE

Prochaines dates à venir...

### Navigation rapide

+33 6 73 45 84 34

tonimancini05200@gmail.com

Copyright EvasionSki © 2025 Tout droits réservés.  Créé par Face Nord Graphisme`),
    gallery: [
          {
                  "url": "/images/rebranded/ski-de-randonnee-queyras-decouverte/img_1.webp",
                  "alt": "Queyras en ski de randonnée"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-queyras-decouverte/img_2.webp",
                  "alt": "Queyras en ski de randonnée"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-queyras-decouverte/img_3.jpg",
                  "alt": "Queyras en ski de randonnée"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-queyras-decouverte/img_4.jpg",
                  "alt": "Queyras en ski de randonnée"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-queyras-decouverte/img_5.jpg",
                  "alt": "Queyras en ski de randonnée"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-queyras-decouverte/img_6.jpg",
                  "alt": "Queyras en ski de randonnée"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-queyras-decouverte/img_7.jpg",
                  "alt": "Queyras en ski de randonnée"
          }
  ],
    faqs: [
    {
        "question": "Quel est le point de départ du séjour Queyras en ski de randonnée ?",
        "answer": "Le Gîte l’Edelweiss dans le village d’Abriès, niché au fond de la vallée du Guil, est notre camp de base. Chaque jour, nous partons explorer de nouveaux itinéraires, selon les conditions et l’inspiration du jour. Un minibus 9 places est à disposition pour les déplacements durant tout le séjour."
    },
    {
        "question": "À qui s’adresse ce séjour découverte du Queyras en ski ?",
        "answer": "Ce séjour s’adresse aux skieurs ayant déjà une petite expérience en ski de randonnée et une bonne forme physique. L’objectif : découvrir le Queyras en ski de randonnée par des itinéraires variés, dans une ambiance conviviale."
    }
]
  },
  {
    title: "Raid à ski en Clarée",
    slug: "ski-de-randonnee-en-claree",
    activityType: "stages-et-raids-a-ski-de-randonnee-hautes-alpes",
    subCategory: "claree",
    massif: "Cerces / Clarée",
    level: "intermediaire",
    season: "hiver",
    duration: "3 jours",
    basePrice: "390€",
    priceEncadrement: "260€/pers",
    priceFraisSejour: "130€/pers",
    image: "/images/rebranded/ski-de-randonnee-en-claree/img_0.jpg",
    intro: textToBlocks(`## Les Cerces – Raid à ski de randonnée dans la Clarée

La vallée de la Clarée offre un terrain parfait pour un  raid à ski de randonnée. Sauvage et préservée, elle permet d’évoluer sur des itinéraires alpins variés et propres à cette vallée. Pointes rocheuses acérées, combe surplombées de crêtes minérales et vallons vierges de toutes traces.`),
    description: `## Les Cerces – Raid à ski de randonnée dans la Clarée`,
    essentiel: textToBlocks(`• **tairf : 486€/pers en pension complète3 jours complets de ski, en étoile (au départ du même refuge)**

• **MAssif des cerces, vallée de la clarée**

• **skieurs : confirmés  effort : soutenudénivelés compris entre 1000 et 1 500 m, avec passages obligatoires et points de non-retour.**

• **Hébergement en pension complète au refuge de laval : confort, convivialité et repas montagnards**

• **Prêt de sac à dos de montagne et kit secours (dva, pelle, sonde) si nécessaire.**`),
    programme: textToBlocks(`### Programme type raid à ski en Clarée (3 jours)

La Claréé à ski, entre Cerces et Mont Thabor l’idéal pour un raid en ski de randonnée.Jour 1 – Rendez-vous et montée au refuge :Accueuil des participants au Pont de l’Alpe (Monêtier-les-Bains) vers 8h00.Présentation du séjour,briefing sécurité et vérification du matériel personnel et de secours.Montée au refuge de Laval par le Crête de la Ponsonnière, le col du Chardonnet ou le col des Béraudes selon les conditions.Installation au refuge, repas chaud et nuit en dortoir.Jour 2 – Journée de ski en étoileSki de randonnée à la journée dans les environs du refuge :Possibles sommets : Roche de chardonnet, Roche Château, ou le trou de la Crête de Moutouze selon conditions et l’état de forme du groupe.Travail technique : rythme, conversions, lecture de terrain et recherche DVA.Pédagogie sur la nivologie, orientation et sécurité en montagne.Retour au refuge en fin d’après-midi, temps calme, dîner et nuitée.Jour 3 – Dernier sommet et retour au parkingDépart matinal pour une dernière sortie, par exemple vers le col du Chardonnet ou la Crête de la Ponsonnière.Derniers conseils techniques et descente vers le Pont de l’Alpe.Fin du raid et dispersion du groupe en début d’après-midi, après trois jours d’aventure au cœur du massif des Cerces, avec de beaux sommets, du ski, de la neige… et de chouettes souvenirs en tête.

Pour profiter pleinement de votre raid en ski de randonnée en Clarée, il est essentiel d’avoir le bon équipement. Voici la liste complète du matériel nécessaire de ce que vous devez apporter.`),
    materiel: textToBlocks(`### 1 - Matériel fourni si vous n’êtes pas équipé :

Pack secours : DVA (Détecteur de Victime d’Avalanche), pelle et sondeSac à dos adapté à l’activité (30/35l)

### 2 - Matériel personnel à prévoir :

Skis de randonnée avec fixations à insert (type Low Tech)Peaux de phoque en bon état (colle et poils encore efficaces)Couteaux à neige adaptés à vos fixationsChaussures de ski de rando débrayables (avec mode montée/descente)Bâtons de ski avec rondelles larges (≈ 8 cm)Minimum 1,5L d’eau par personnePique-nique + vivres de course (fruits secs, barres, pâtes de fruits…)Pack secours : DVA (Détecteur de Victime d’Avalanche), pelle et sondeSac à dos adapté à l’activité (30/35l)

### 3 - Tenue vestimentaire adaptée

Pantalon de ski respirant avec aérationsVeste imperméable type Gore-Tex (impératif)Micro-doudoune ou polaire chaudeSous-couche technique (éviter le coton)Buff, cache couGants fins + gants chauds ou mouflesLunettes de soleil (cat. 3 ou 4) et/ou masque de ski mauvais tempsBonnet fin, bandeau ou casquette + bonnet chaudCasque de ski conseillé mais facultatif (à votre convenance)Crème solaire à indice élevé (SPF 30 minimum)Pansements ampoules type seconde peau (Compeed ou équivalent)

### 4 - Pour le refuge :

Boules Quies fortement conseilléesPetit nécessaire de toilettes (un bout de savon, une brosse à dent, une petite serviette microfibre ect…)Batterie externe si pas d’électricité disponible sur placeLampe frontale avec lumière rouge (dérangement des autres fortement réduit)

### 5 - Pensez à l'assurance annulation :

Souscrire à une assurance annulation avant de réserver est fortement conseillé.Elle vous permettra d’être couvert en cas d’imprévu (blessure, empêchement professionnel, aléa familial…) entraînant l’annulation de votre participation. Sans cela, les frais engagés pour le séjour seront remboursés selon le barème des CGV.Une option d’assurance annulation « Impact Évasion » vous sera proposée au moment de votre réservation.

### 6 - Assurances personnelles obligatoires :

Chaque participant doit disposer de :Une assurance responsabilité civile individuelleUne assurance couvrant les frais de secours et de rapatriementIl est de votre responsabilité de vérifier que votre contrat d’assurance couvre ce type d’activité en milieu montagnard.Une option d’assurance secours et rapatriement « Impact Multisports » vous sera proposée au moment de votre réservation.

### 7 - Mon conseil équipement :

Les conditions varient vite en montagne : prévoyez des vêtements modulables. Le système 3 couches est idéal (1ère couche technique + couche thermique + couche coupe-vent).Une 4ème couche de secours peut être utile (ex : doudoune sans manches).Évitez de transpirer avec des vêtements trop chauds : l’humidité empêche de se réchauffer même avec une grosse doudoune. Trop chaud il en va de votre confort, trop froid il en va de votre survie !`),
    inclus: textToBlocks(`### Le prix affiché comprend :

L’encadrement professionnel par un moniteur diplômé d’ État ainsi que toute son expérience et son savoir faire acquis au fil des années de pratiqueL’ organisation et la préparation de la sortie, du raid ou du séjour/voyage tel que décrit dans l’onglet programme typeCoaching technique ski toutes neiges (conseils personnalisés et suivi pour améliorer votre technique)L’ hébergement en pension complète en refuge (p’tit déj, pique nique et dîner)Matériel collectif de sécurité et secours (radio vhf, trousse de secours, GPS ect…)Le petit coup de gnole du chef !

### Le prix affiché ne comprend pas :

La location éventuelle du matériel de ski de randonnée (ski, chaussures, bâtons, casque)Le pique nique du premier jourLe transport jusqu’au départ du raid depuis votre domicile (voiture, train, avion, tapis volant…)Les assurances rapatriement et annulation (option possible au moment du paiement en ligne)Les vivres de courses (graines, barres céréales, ect…)Toutes dépenses personnelles éventuellesTout ce qui n’est pas mentionné dans le chapitre « Le prix affiché comprend »

### RÉSERVER UNE DATE

Prochaines dates à venir...

### Navigation rapide

+33 6 73 45 84 34

tonimancini05200@gmail.com

Copyright EvasionSki © 2025 Tout droits réservés.  Créé par Face Nord Graphisme`),
    gallery: [
          {
                  "url": "/images/rebranded/ski-de-randonnee-en-claree/img_1.jpg",
                  "alt": "Raid à ski en Clarée"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-en-claree/img_2.jpg",
                  "alt": "Raid à ski en Clarée"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-en-claree/img_3.jpg",
                  "alt": "Raid à ski en Clarée"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-en-claree/img_4.jpg",
                  "alt": "Raid à ski en Clarée"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-en-claree/img_5.jpg",
                  "alt": "Raid à ski en Clarée"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-en-claree/img_6.jpg",
                  "alt": "Raid à ski en Clarée"
          },
          {
                  "url": "/images/rebranded/ski-de-randonnee-en-claree/img_7.jpg",
                  "alt": "Raid à ski en Clarée"
          }
  ],
    faqs: [
    {
        "question": "Quel est le niveau requis pour ce raid à ski en Clarée ?",
        "answer": "Ce raid en ski de rando s’adresse à des skieurs confirmés et en très bonne forme physique. Les étapes sont peu modulables et les itinéraires de replis difficilement envisageables."
    },
    {
        "question": "Comment se déroule l’hébergement pendant le raid à ski  en Claréé?",
        "answer": "Les nuits se font en refuge gardé confortable, en pension complète. Pas de portage lourd : vous évoluez sans autonomie, avec tout le confort nécessaire en altitude. Du grand ski de rando avec un sac léger.\n\nCe raid en ski de rando s’adresse à des skieurs confirmés et en très bonne forme physique. Les étapes sont peu modulables et les itinéraires de replis difficilement envisageables."
    }
]
  },
  {
    title: "Ski de randonnée en Ubaye",
    slug: "raid-ski-randonnee-ubaye",
    activityType: "stages-et-raids-a-ski-de-randonnee-hautes-alpes",
    subCategory: "ubaye",
    massif: "Ubaye",
    level: "confirme",
    season: "hiver",
    duration: "3 jours",
    basePrice: "410€",
    priceEncadrement: "270€/pers",
    priceFraisSejour: "140€/pers",
    image: "/images/rebranded/raid-ski-randonnee-ubaye/img_0.jpg",
    intro: textToBlocks(`## Raid à ski en Ubaye  – Glissade dans les Alpes du Sud

L’Ubaye est un massif sauvage et peu fréquenté, idéal pour un raid à ski de randonnée de 3 jours. Ses vallées isolées et ses cols d’altitude offrent une expérience alpine authentique, loin des foules et au cœur des Alpes du Sud.`),
    description: `## Raid à ski en Ubaye  – Glissade dans les Alpes du Sud`,
    essentiel: textToBlocks(`• **tarif : 330€ / pers (hors hébergement)3 jours complet de ski de rando**

• **Vallée de l' Ubaye à la frontière des Hautes-Alpes et de l'Italie**

• **skieurs : intermédiaires & confirmés effort : modéréDénivelés compris entre 800 et 1200m, pour un effort maitrisé  et du ski plaisir**

• **hébergement en pension complète au refuge de Maljasset (ou autre selon conditions)**

• **Prêt de sac à dos de montagne et kit secours (dva, pelle, sonde) sur demande dans le formulaire d'inscriptiontransport en minibus depuis guillestre**`),
    programme: textToBlocks(`### Programme type Raid à ski en Ubaye

Ski de rando en Ubaye : 3 jours de déconnection dans les Alpes du Sud.Jour 1 : Direction le refuge de MaljassetRendez-vous à 8h00 au parking Intermarché Hall 2 de Guillestre Présentation du séjour, vérification du matériel de ski et de secoursBrief sécurité et rappel des consignes pour la progression en groupe Première rando au Col de Vars, par le Vallon du Crachet Ou par la Grande CombeInstallation au refuge en fin d’après midiJour 2 – Sommets autour du refugePetit-déjeuner matinal et départ pour une journée en étoile autour du refugeSommets ou cols envisagés selon les conditions :L’AlpetPointe de Basse Mary Col Girardin selon les conditionsEn chemin :Ateliers techniques en montée (conversion, rythme) et en descenteLecture du terrain et gestion du risqueÉventuellement, exercices de recherche DVARetour et deuxième nuit au refugeJour 3 – Rando et retour au parkingDernières randonnée dans un itinéraire et décor sauvageArrivée au parking en début ou milieu d’après-midiDispersion du groupe après trois jours d’aventure partagée, de belles traces en montagne et des images plein la tête.

Pour profiter pleinement de votre raid dans l’Ubaye en ski de rando, il est essentiel d’avoir le bon équipement. Voici la liste complète du matériel nécessaire de ce que vous devez apporter.`),
    materiel: textToBlocks(`### 1 - Matériel fourni si vous n’êtes pas équipé :

Pack secours : DVA (Détecteur de Victime d’Avalanche), pelle et sondeSac à dos adapté à l’activité (30/35l)

### 2 - Matériel personnel à prévoir :

Skis de randonnée avec fixations à insert (type Low Tech)Peaux de phoque en bon état (colle et poils encore efficaces)Couteaux à neige adaptés à vos fixationsChaussures de ski de rando débrayables (avec mode montée/descente)Bâtons de ski avec rondelles larges (≈ 8 cm)Minimum 1,5L d’eau par personnePique-nique + vivres de course (fruits secs, barres, pâtes de fruits…)Pack secours : DVA (Détecteur de Victime d’Avalanche), pelle et sondeSac à dos adapté à l’activité (30/35l)

### 3 - Tenue vestimentaire adaptée

Pantalon de ski respirant avec aérationsVeste imperméable type Gore-Tex (impératif)Micro-doudoune ou polaire chaudeSous-couche technique (éviter le coton)Buff, cache couGants fins + gants chauds ou mouflesLunettes de soleil (cat. 3 ou 4) et/ou masque de ski mauvais tempsBonnet fin, bandeau ou casquette + bonnet chaudCasque de ski conseillé mais facultatif (à votre convenance)Crème solaire à indice élevé (SPF 30 minimum)Pansements ampoules type seconde peau (Compeed ou équivalent)

### 4 - Pour le refuge :

Boules Quies fortement conseilléesPetit nécessaire de toilettes (un bout de savon, une brosse à dent, une petite serviette microfibre ect…)Batterie externe si pas d’électricité disponible sur placeLampe frontale avec lumière rouge (dérangement des autres fortement réduit)

### 5 - Pensez à l'assurance annulation :

Souscrire à une assurance annulation avant de réserver est fortement conseillé.Elle vous permettra d’être couvert en cas d’imprévu (blessure, empêchement professionnel, aléa familial…) entraînant l’annulation de votre participation. Sans cela, les frais engagés pour le séjour seront remboursés selon le barème des CGV.Une option d’assurance annulation « Impact Évasion » vous sera proposée au moment de votre réservation.

### 6 - Assurances personnelles obligatoires :

Chaque participant doit disposer de :Une assurance responsabilité civile individuelleUne assurance couvrant les frais de secours et de rapatriementIl est de votre responsabilité de vérifier que votre contrat d’assurance couvre ce type d’activité en milieu montagnard.Une option d’assurance secours et rapatriement « Impact Multisports » vous sera proposée au moment de votre réservation.

### 7 - Mon conseil équipement :

Les conditions varient vite en montagne : prévoyez des vêtements modulables. Le système 3 couches est idéal (1ère couche technique + couche thermique + couche coupe-vent).Une 4ème couche de secours peut être utile (ex : doudoune sans manches).Évitez de transpirer avec des vêtements trop chauds : l’humidité empêche de se réchauffer même avec une grosse doudoune. Trop chaud il en va de votre confort, trop froid il en va de votre survie !`),
    inclus: textToBlocks(`### Le prix affiché comprend :

L’encadrement professionnel par un moniteur diplômé d’ État ainsi que toute son expérience et son savoir faire acquis au fil des années de pratiqueL’ organisation et la préparation de la sortie, du raid ou du séjour/voyage tel que décrit dans l’onglet programme typeCoaching technique ski toutes neiges (conseils personnalisés et suivi pour améliorer votre technique)L’ hébergement en pension complète en refuge (p’tit déj, pique nique et dîner)Matériel collectif de sécurité et secours (radio vhf, trousse de secours, GPS ect…)Le petit coup de gnole du chef !

### Le prix affiché ne comprend pas :

La location éventuelle du matériel de ski de randonnée (ski, chaussures, bâtons, casque)Le pique nique du premier jourLe transport jusqu’au départ du raid depuis votre domicile (voiture, train, avion, tapis volant…)Les assurances rapatriement et annulation (option possible au moment du paiement en ligne)Les vivres de courses (graines, barres céréales, ect…)Toutes dépenses personnelles éventuellesTout ce qui n’est pas mentionné dans le chapitre « Le prix affiché comprend »

### RÉSERVER UNE DATE

Prochaines dates à venir...

### Navigation rapide

+33 6 73 45 84 34

tonimancini05200@gmail.com

Copyright EvasionSki © 2025 Tout droits réservés.  Créé par Face Nord Graphisme`),
    gallery: [
          {
                  "url": "/images/rebranded/raid-ski-randonnee-ubaye/img_1.jpg",
                  "alt": "Ski de randonnée en Ubaye"
          },
          {
                  "url": "/images/rebranded/raid-ski-randonnee-ubaye/img_2.jpg",
                  "alt": "Ski de randonnée en Ubaye"
          },
          {
                  "url": "/images/rebranded/raid-ski-randonnee-ubaye/img_3.jpg",
                  "alt": "Ski de randonnée en Ubaye"
          },
          {
                  "url": "/images/rebranded/raid-ski-randonnee-ubaye/img_4.webp",
                  "alt": "Ski de randonnée en Ubaye"
          },
          {
                  "url": "/images/rebranded/raid-ski-randonnee-ubaye/img_5.jpg",
                  "alt": "Ski de randonnée en Ubaye"
          },
          {
                  "url": "/images/rebranded/raid-ski-randonnee-ubaye/img_6.jpg",
                  "alt": "Ski de randonnée en Ubaye"
          },
          {
                  "url": "/images/rebranded/raid-ski-randonnee-ubaye/img_7.jpg",
                  "alt": "Ski de randonnée en Ubaye"
          }
  ],
    faqs: [
    {
        "question": "À qui s’adresse ce raid de 3 jours ?",
        "answer": "Ce raid à ski en Ubaye s’adresse aux skieurs débrouillés et confirmés, à l’aise en montée comme en descente, avec une bonne condition physique. Pour vivre l’aventure pleinement une première expérience en ski de rando est recommandée."
    },
    {
        "question": "Comment se déroule le raid à ski ?",
        "answer": "Vous évoluez en petit groupe, accompagné par un professionnel diplômé. L’itinéraire s’adapte aux conditions météo et nivologiques, avec des étapes d’environ 800 à 1300 m de dénivelé par jour, selon votre état de forme du moment"
    },
    {
        "question": "Où dort-on pendant le raid à ski en Ubaye ?",
        "answer": "Les nuits se font en refuges gardés confortables, en pension complète. Pas d’autonomie à porter : on monte léger pour profiter pleinement des journées."
    }
]
  },
  {
    title: "Ski de randonnée en Norvège",
    slug: "ski-randonnee-norvege-alpes-lyngen",
    activityType: "stages-et-raids-a-ski-de-randonnee-hautes-alpes",
    subCategory: "norvege",
    massif: "Alpes de Lyngen (Norvège)",
    level: "intermediaire",
    season: "hiver",
    duration: "8 jours",
    basePrice: "1690€",
    priceEncadrement: "1290€/pers",
    priceFraisSejour: "400€/pers",
    image: "/images/rebranded/ski-randonnee-norvege-alpes-lyngen/img_0.jpg",
    intro: textToBlocks(`## Ski de randonnée dans les Alpes de Lyngen — Expérience premium, budget accessible

Rejoignez nous pour vivre une aventure alpine unique au nord du cercle polaire à bas prix! Ce séjour pas cher dans les Alpes de Lyngen vous plonge entre fjords enneigés, sommets isolés et lumière arctique. Loin du tourisme de masse, c’est le paradis des amoureux de ski de randonnée en Norvège.`),
    description: `## Ski de randonnée dans les Alpes de Lyngen — Expérience premium, budget accessible`,
    essentiel: textToBlocks(`• **6 jours complet de ski pour profiter à fond et s'en mettre plein les yeux...et les jambes tarif : 1990€ / pers (hors billets d'avions) - départ assuré à partir de 4 personnes**

• **Norvège, alpes de lyngen**

• **skieurs : confirmés effort : soutenuUn rythme équilibré Des sorties variées, entre 900 et 1 700 m de dénivelé, pour allier effort, plaisir de la glisse et temps de récupération.**

• **location d'un minibus 9 places sur place pour une gestion des déplacements sans contraintes**

• **hébergement en maison partagée dans une ambiance chaleureuse, conviviale et pour plus de flexibilité. nous cuisinerons et partagerons nos repas nous-même**

• **ambiance grand nord avec les montagnes enneigées qui surgissent des fjords et teintées par les lumières arctiques. du grand ski qui marque à vie**`),
    programme: textToBlocks(`### Programme type Séjour Ski de Randonnée en Norvège

Une aventure nordique entre fjords majestueux et sommets sauvages, avec départ et retour à Tromsø.Jour 1 : Arrivée à Tromsø le samedi 4 avril 2026Accueil à l’aéroport de Tromsø, au nord du cercle polaire.Transfert vers votre hébergement en ville pour une première nuit.Rencontre avec Toni, présentation du programme, vérification du matériel et dîner libre en ville.Jour 2 : Rando sur la route de notre camp de baseAprès le petit-déjeuner, départ en minibus vers notre maison partagée située dans la région de Lyngen.Première sortie ski de rando en cours de route, sur un itinéraire adapté à la mise en jambe.Installation en fin d’après-midi dans la maison partagée, dîner convivial et préparation du programme des jours suivants.Jours 3 à 6 : Ski, mange, dort, répète…Chaque jour, départ pour un nouveau sommet avec des itinéraires panoramiques sur les fjords norvégiens tels que Daltinden, Tafeltinden et autre Kravingtinden.Possibilité d’ajuster les sorties selon les niveaux et les conditions météo.Encadrement professionnel, sécurité, plaisir et immersion dans la nature arctique.Montées progressives, techniques de ski de randoDescente face aux fjords ou en forêt boréalePique-niques en pleine natureRetour en fin de journée au chalet pour une ambiance chaleureuseJour 7 : Rando sur la route de Tromsø Restitution de notre camp de base après le petit déjeuner.Dernière sortie ski de rando de notre aventure.Transfert vers notre hébergement en ville et dîner libre.Jour 8 : Fin du séjour le samedi 11 avril 2026Départ tôt le matin pour rejoindre l’aéroport de Tromsø.Séparation du groupe et fin du séjour, souvenirs plein la tête et jambes bien sollicitées !

Pour profiter pleinement de votre voyage en Norvège en ski de rando, il est essentiel d’avoir le bon équipement. Voici la liste complète du matériel nécessaire de ce que vous devez apporter.`),
    materiel: textToBlocks(`### 1 - Matériel personnel à prévoir :

Skis de randonnée avec fixations à insert (type Low Tech)Peaux de phoque en bon état (colle et poils encore efficaces)Couteaux à neige adaptés à vos fixationsChaussures de ski de rando débrayables (avec mode montée/descente)Bâtons de ski avec rondelles larges (≈ 8 cm)Sac à dos de 30 à 35 litresMinimum 1,5L d’eau par personnePique-nique + vivres de course (fruits secs, barres, pâtes de fruits…)Pack secours : DVA (Détecteur de Victime d’Avalanche), pelle et sondeSac à dos adapté à l’activité (30/35l)

### 2 - Tenue vestimentaire adaptée

Pantalon de ski respirant avec aérationsVeste imperméable type Gore-Tex (impératif)Micro-doudoune ou polaire chaudeSous-couche technique (éviter le coton)Buff, cache couGants fins + gants chauds ou mouflesLunettes de soleil (cat. 3 ou 4) et/ou masque de ski mauvais tempsBonnet fin, bandeau ou casquette + bonnet chaudCasque de ski conseillé mais facultatif (à votre convenance)Crème solaire à indice élevé (SPF 30 minimum)Pansements ampoules type seconde peau (Compeed ou équivalent)

### 3 - Pensez à l'assurance annulation :

Souscrire à une assurance annulation avant de réserver est fortement conseillé.Elle vous permettra d’être couvert en cas d’imprévu (blessure, empêchement professionnel, aléa familial…) entraînant l’annulation de votre participation. Sans cela, les frais engagés pour le séjour seront remboursés selon le barème des CGV.Une option d’assurance annulation « Impact Évasion » vous sera proposée au moment de votre réservation.

### 4 - Assurances personnelles obligatoires :

Chaque participant doit disposer de :Une assurance responsabilité civile individuelleUne assurance couvrant les frais de secours et de rapatriementIl est de votre responsabilité de vérifier que votre contrat d’assurance couvre ce type d’activité en milieu montagnard.Une option d’assurance secours et rapatriement « Impact Multisports » vous sera proposée au moment de votre réservation.

### 5 - Mon conseil équipement :

Les conditions varient vite en montagne : prévoyez des vêtements modulables. Le système 3 couches est idéal (1ère couche technique + couche thermique + couche coupe-vent).Une 4ème couche de secours peut être utile (ex : doudoune sans manches).Évitez de transpirer avec des vêtements trop chauds : l’humidité empêche de se réchauffer même avec une grosse doudoune.`),
    inclus: textToBlocks(`### Le prix affiché comprend :

L’encadrement professionnel par un moniteur diplômé d’ État ainsi que toute son expérience et son savoir faire acquis au fil des années de pratiqueL’ organisation et la préparation de la sortie, du raid ou du séjour/voyage tel que décrit dans l’onglet programme typeCoaching technique ski toutes neiges (conseils personnalisés et suivi pour améliorer votre technique)L hébergement des première et dernière nuit au Smarthotel Tromso (chambres doubles)L’ hébergement en maison partagée à Svensby, le reste du voyageLa location et le transport en minibus depuis l’ aéroport de Tromso et durant tout le voyageMatériel collectif de sécurité et secours (radio vhf, trousse de secours, GPS ect…)Le petit coup de gnole du chef !

### Le prix affiché ne comprend pas :

La location éventuelle du matériel de ski de randonnée (ski, chaussures, bâtons, casque)Le billet d’avion pour se rendre à l’ aéroport de TromsoLes assurances rapatriement et annulation (option possible au moment du paiement en ligne)Les piques niques et repas du voyageLes vivres de courses (graines, barres céréales, ect…)Toutes dépenses personnelles éventuellesTout ce qui n’est pas mentionné dans le chapitre « Le prix affiché comprend »

### RÉSERVER UNE DATE

Prochaines dates à venir...

### Navigation rapide

+33 6 73 45 84 34

tonimancini05200@gmail.com

Copyright EvasionSki © 2025 Tout droits réservés.  Créé par Face Nord Graphisme`),
    gallery: [
          {
                  "url": "/images/rebranded/ski-randonnee-norvege-alpes-lyngen/img_1.jpg",
                  "alt": "Ski de randonnée en Norvège"
          },
          {
                  "url": "/images/rebranded/ski-randonnee-norvege-alpes-lyngen/img_2.jpg",
                  "alt": "Ski de randonnée en Norvège"
          },
          {
                  "url": "/images/rebranded/ski-randonnee-norvege-alpes-lyngen/img_3.jpg",
                  "alt": "Ski de randonnée en Norvège"
          },
          {
                  "url": "/images/rebranded/ski-randonnee-norvege-alpes-lyngen/img_4.jpg",
                  "alt": "Ski de randonnée en Norvège"
          },
          {
                  "url": "/images/rebranded/ski-randonnee-norvege-alpes-lyngen/img_5.jpg",
                  "alt": "Ski de randonnée en Norvège"
          },
          {
                  "url": "/images/rebranded/ski-randonnee-norvege-alpes-lyngen/img_6.jpg",
                  "alt": "Ski de randonnée en Norvège"
          },
          {
                  "url": "/images/rebranded/ski-randonnee-norvege-alpes-lyngen/img_7.jpg",
                  "alt": "Ski de randonnée en Norvège"
          }
  ],
    faqs: [
    {
        "question": "À qui s’adresse ce voyage en Norvège à ski ?",
        "answer": "Aux skieurs en bonne condition physique ayant une certaine expérience du ski de rando et à l’aise techniquement . Les sorties sont adaptées chaque jour selon la météo et le niveau du groupe, pour profiter du voyage en toute sécurité"
    },
    {
        "question": "Comment se déroule l’organisation sur place et à quel coût ?",
        "answer": "Contrairement aux idées reçues, partir skier en Norvège ne rime pas forcément avec gros budget. Le séjour est conçu sans superflu, avec une logistique simple et partagée : hébergement chaleureux en maison commune, repas en commun et autonomes, et véhicule 9 places pour les déplacements. Résultat : vrai voyage à ski au nord du cercle polaire à un coût maîtrisé, souvent bien plus accessible que les séjours organisés classiques tout en gardant l’essentiel, du ski et du bonheur."
    }
]
  },
];

export const mockSorties = [
  {
    date: "10 au 12 Janvier 2027",
    startDate: "2027-01-10",
    availableSpots: "4 places",
    isFull: false,
    sejour: mockSejours[0]
  },
  {
    date: "18 au 22 Février 2027",
    startDate: "2027-02-18",
    availableSpots: "2 places",
    isFull: false,
    sejour: mockSejours[1]
  },
  {
    date: "05 au 07 Mars 2027",
    startDate: "2027-03-05",
    availableSpots: "Complet",
    isFull: true,
    sejour: mockSejours[2]
  },
  {
    date: "12 au 19 Avril 2027",
    startDate: "2027-04-12",
    availableSpots: "3 places",
    isFull: false,
    sejour: mockSejours[3]
  }
];

export const mockTestimonials = [
  {
    author: "Jean-Marc L.",
    role: "Pratiquant de ski",
    quote: "Toni connaît les massifs des Alpes du Sud comme sa poche. Il a su nous trouver de la neige de cinéma même en fin de saison. Sécurité au top !",
    rating: 5,
    avatar: null
  },
  {
    author: "Sophie D.",
    role: "Débutante ski de rando",
    quote: "Une journée d'initiation inoubliable avec Toni. Très pédagogue, patient et à l'écoute. J'ai adoré les peaux de phoque !",
    rating: 5,
    avatar: null
  }
];

export const mockPosts = [
  {
    "title": "5 bonnes raisons de partir faire un ski trip en Norvège",
    "slug": "5-bonnes-raisons-de-partir-faire-un-ski-trip-en-norvege",
    "date": "2025-06-23T10:09:46+00:00",
    "image": "https://evasionski.fr/wp-content/uploads/2025/06/FB_IMG_1750919870586.jpg",
    "excerpt": "Découvrez 5 bonnes raisons de partir en ski trip en Norvège : paysages spectaculaires, fjords enneigés, neige de qualité et aventure unique pour skieurs confirmés.",
    "body": [
      {
        "_key": "gh5uk4m",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "ljnk76j",
            "_type": "span",
            "text": "La Norvège 5 raisons d'aller y skier."
          }
        ]
      },
      {
        "_key": "fxkrqio",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "fwmv5nc",
            "_type": "span",
            "text": "La Norvège est devenue au fil des années un terrain de jeu incontournable pour les passionnés de ski de randonnée. Avec ses fjords majestueux, ses montagnes sauvages et son ambiance unique entre mer et neige, elle offre bien plus qu’un simple séjour sportif : un véritable dépaysement et une aventure humaine hors du commun."
          }
        ]
      },
      {
        "_key": "rwzzzq3",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "dglwy49",
            "_type": "span",
            "text": "Si vous hésitez encore à franchir le cap, voici 5 bonnes raisons qui vous convaincront de préparer vos peaux de phoque et de partir skier au cœur des paysages arctiques norvégiens."
          }
        ]
      },
      {
        "_key": "nxhtif1",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "3azaoz3",
            "_type": "span",
            "text": "1. Des paysages à couper le souffle, entre mer et montagne"
          }
        ]
      },
      {
        "_key": "5hpab37",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "m04gszr",
            "_type": "span",
            "text": "Impossible d’évoquer la Norvège sans parler de ses panoramas spectaculaires. Ici, les montagnes plongent directement dans les fjords profonds, créant un contraste saisissant entre la blancheur immaculée des sommets et le bleu intense des eaux. Chaque sortie à ski est un émerveillement, entre glaciers, crêtes enneigées et lumière rasante typique du nord."
          }
        ]
      },
      {
        "_key": "dto0to2",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "87ga0vh",
            "_type": "span",
            "text": "Que vous évoluiez dans les Alpes de Lyngen, les îles Lofoten ou encore les massifs autour de Tromsø, les décors sont dignes des plus belles cartes postales, et les sessions photo entre deux descentes sont quasi obligatoires."
          }
        ]
      },
      {
        "_key": "kjuq0tf",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "mfxe7py",
            "_type": "span",
            "text": "2. Skier jusqu’au bord de l’océan : une expérience unique"
          }
        ]
      },
      {
        "_key": "m0354oy",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "0ic7t2k",
            "_type": "span",
            "text": "Ce qui rend la Norvège si particulière, c’est la proximité permanente de la mer. Peu d’endroits au monde permettent de vivre cette sensation : gravir un sommet en ski de randonnée avec vue panoramique sur les fjords, avant de redescendre quasiment jusqu’à la plage."
          }
        ]
      },
      {
        "_key": "esr44sr",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "dwye2ey",
            "_type": "span",
            "text": "Ce contraste entre l’environnement marin et les cimes enneigées confère aux sorties un caractère exceptionnel, où chaque virage en poudreuse prend une dimension nouvelle, face à l’horizon maritime."
          }
        ]
      },
      {
        "_key": "uzkgmjt",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "jhuk5if",
            "_type": "span",
            "text": "3. Une neige de qualité, légère et abondante"
          }
        ]
      },
      {
        "_key": "t5b0biz",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "dw0z4u6",
            "_type": "span",
            "text": "La Norvège bénéficie d’un climat sec et froid, surtout en hiver et au printemps, offrant ainsi des conditions de neige idéales pour le ski de randonnée. La poudreuse y est souvent légère et agréable à skier, même sur des pentes relativement modérées."
          }
        ]
      },
      {
        "_key": "u7e3rn1",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "295bqsr",
            "_type": "span",
            "text": "De plus, les saisons sont longues : il est possible de partir en ski trip jusqu’à la fin du printemps, avec des journées qui s’allongent et, selon la période, la magie du soleil de minuit."
          }
        ]
      },
      {
        "_key": "rmjncvx",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "rmltuui",
            "_type": "span",
            "text": "4. L’aventure et l'immersion dans une nature sauvage"
          }
        ]
      },
      {
        "_key": "wszn2hb",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "rc3ovld",
            "_type": "span",
            "text": "Partir skier en Norvège, c’est aussi vivre une aventure loin des stations bondées et du tourisme de masse. Ici, tout est plus authentique : les déplacements se font souvent en petit groupe, l’itinéraire est adapté chaque jour selon la météo, et les hébergements en lodge chaleureux ou en bateau permettent une véritable déconnexion."
          }
        ]
      },
      {
        "_key": "k6yl5bm",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "hpftsud",
            "_type": "span",
            "text": "La culture norvégienne, marquée par la mer et la montagne, imprègne le séjour : on découvre la gastronomie locale, les traditions arctiques, et l’accueil chaleureux des habitants. Un ski trip en Norvège, c’est bien plus qu’une simple activité sportive, c’est une immersion dans un autre mode de vie."
          }
        ]
      },
      {
        "_key": "ixdvahs",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "jlwkxfw",
            "_type": "span",
            "text": "5. Un terrain idéal pour les skieurs passionnés"
          }
        ]
      },
      {
        "_key": "5mheepg",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "ng5rjgv",
            "_type": "span",
            "text": "La Norvège s’adresse avant tout aux skieurs ayant déjà une première expérience en ski de randonnée et une bonne condition physique. Les ascensions sont souvent longues, mais jamais extrêmes, et les descentes offrent un maximum de plaisir dans un environnement sécurisant."
          }
        ]
      },
      {
        "_key": "eyeaz2s",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "fcayugd",
            "_type": "span",
            "text": "Accompagné par Toni Mancini, moniteur diplômé et connaisseur du terrain, chaque participant progresse à son rythme, dans le respect des consignes de sécurité et en fonction des conditions du moment."
          }
        ]
      },
      {
        "_key": "lkznh0a",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "xz9n38d",
            "_type": "span",
            "text": "C’est l’occasion de se perfectionner techniquement, d’améliorer sa lecture du terrain et de gagner en autonomie, tout en partageant des moments conviviaux avec un petit groupe de passionnés."
          }
        ]
      },
      {
        "_key": "hsqrerm",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "5y6pm0q",
            "_type": "span",
            "text": "Prêt à vivre l’aventure d'un ski trip en Norvège ?"
          }
        ]
      },
      {
        "_key": "7amm66m",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "4ozbg5m",
            "_type": "span",
            "text": "Que vous soyez amateur de grands espaces, passionné de ski de randonnée ou simplement curieux de découvrir les fjords enneigés, la Norvège est la destination rêvée. Son cadre spectaculaire, la qualité de la neige, l’ambiance unique et l’encadrement professionnel vous garantissent une expérience inoubliable."
          }
        ]
      },
      {
        "_key": "6uu8u8o",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "84m0jt1",
            "_type": "span",
            "text": "Toni Mancini vous propose des séjours sur mesure, adaptés au niveau du groupe, dans les plus beaux massifs norvégiens."
          }
        ]
      },
      {
        "_key": "fdnak5p",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "f7pjuhw",
            "_type": "span",
            "text": "Vous voulez en savoir plus ?Cliquez sur lien suivant pour accéder aux informations sur ce voyage > La Norvège en ski de randonnée"
          }
        ]
      }
    ],
    "tags": [
      {
        "name": "General",
        "slug": "general",
        "tagType": "category"
      }
    ],
    "prevPost": null,
    "nextPost": {
      "title": "Séjour ski de randonnée dans le Queyras : 5  bonnes raisons d’y aller.",
      "slug": "sejour-ski-de-randonnee-dans-le-queyras-5-bonnes-raisons-dy-aller"
    }
  },
  {
    "title": "Séjour ski de randonnée dans le Queyras : 5  bonnes raisons d’y aller.",
    "slug": "sejour-ski-de-randonnee-dans-le-queyras-5-bonnes-raisons-dy-aller",
    "date": "2025-08-25T06:20:47+00:00",
    "image": "https://evasionski.fr/wp-content/uploads/2025/07/FB_IMG_1695793705628.jpg",
    "excerpt": "Découvrez les 5 bonnes raisons de s'inscrire à un séjour \"Découverte du Queyras en ski de randonnée\" avec Évasion ski.",
    "body": [
      {
        "_key": "dt8xx3x",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "f27bmsh",
            "_type": "span",
            "text": "Niché au cœur des Hautes-Alpes, le Queyras  est un véritable paradis pour les amoureux de ski de randonnée. Sauvage, ensoleillé et encore préservé du tourisme de masse, ce massif séduit autant par ses paysages que par la qualité de ses itinéraires. Voici 5 bonnes raisons de venir y poser vos spatules."
          }
        ]
      },
      {
        "_key": "3twnea2",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "67w2c7s",
            "_type": "span",
            "text": "1. Un climat exceptionnel"
          }
        ]
      },
      {
        "_key": "iwoxq5h",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "aqzw2bd",
            "_type": "span",
            "text": "Avec plus de 300 jours de soleil par an, le Queyras est l’un des massifs les plus ensoleillés des Alpes. En effet ce massif bénéficie du climat méditerranéen, ciel bleu azur et soleil permettent de profiter pleinement des sorties dans une ambiance lumineuse et souvent douce, même en plein hiver."
          }
        ]
      },
      {
        "_key": "nedcsvq",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "tpr3byx",
            "_type": "span",
            "text": "2. Un enneigement généreux et fiable"
          }
        ]
      },
      {
        "_key": "svcne5y",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "innb34p",
            "_type": "span",
            "text": "Situé à cheval entre l’influence méditerranéenne et alpine, le Queyras bénéficie de chutes de neige régulières et abondantes sur ses différents secteurs (Ceillac, Agnel, Izoard, St Véran et Abriès-Ristolas). Le Haut Guil situé à l’Est et à la frontière italienne reçoit les fameux « Retour d’Est » qui peuvent déposer jusqu’ 1m50/2 m de neige en 48h tandis que les vallées plus à l’Ouest sont plus propices à recevoir la neige des perturbations classiques arrivant par l’Ouest et le Sud. L’altitude, l’orientation des versants ainsi que des départs de courses assez hauts (1600/2000m) assurent aussi une belle qualité de neige, souvent poudreuse, idéale pour le ski de randonnée."
          }
        ]
      },
      {
        "_key": "3tx1295",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "mafexl1",
            "_type": "span",
            "text": "3. Une topographie idéale pour le ski de randonnée"
          }
        ]
      },
      {
        "_key": "og6kti9",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "z4akt99",
            "_type": "span",
            "text": "La topographie du Queyras en fait un terrain de pratique unique par sa configuration :"
          }
        ]
      },
      {
        "_key": "0my90fg",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "ym0aqfp",
            "_type": "span",
            "text": "un versant aux pentes longues et assez débonnaires pour allonger les virages et profiter de belles descentes dans la poudreuse, sans stress"
          }
        ]
      },
      {
        "_key": "u07rm2l",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "o2ka6q9",
            "_type": "span",
            "text": "l’autre versant aux pentes et couloirs de neige plutôt raides parfait pour les amateurs de virages sautés ou de grandes courbes en pentes fortes"
          }
        ]
      },
      {
        "_key": "ujni5fi",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "dstheud",
            "_type": "span",
            "text": "des sommets de plus de 3000m assez accessibles à ski sans devoir être un alpiniste chevronné"
          }
        ]
      },
      {
        "_key": "r18nic1",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "8xipp4c",
            "_type": "span",
            "text": "Que ça soit en séjours avec hébergement en gîte ou pendant un raid avec nuits en refuge d’altitude, les belles forêts de mélèzes ainsi que les crêtes et sommets de haute montagne du Queyras contenteront tous les amateurs de glisse à peaux de phoques, peu importe leur niveau de pratique."
          }
        ]
      },
      {
        "_key": "7hrxapd",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "po2sap8",
            "_type": "span",
            "text": "4. Un massif préservé et sauvage"
          }
        ]
      },
      {
        "_key": "yvd43bq",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "w8j0azf",
            "_type": "span",
            "text": "Ici, pas de grandes stations de ski et peu de domaines mécanisés : le Queyras a su garder son authenticité. Les vallées sont calmes et la plupart uniquement accessibles en peaux de phoques, les villages encore typiques et chargés d’histoire, et l’ambiance générale invite à la déconnexion totale. C’est l’endroit rêvé pour vivre une expérience de montagne pure sur plusieurs jours, loin de l’agitation."
          }
        ]
      },
      {
        "_key": "mixxbf6",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "2pgpbzz",
            "_type": "span",
            "text": "5. Gîtes et refuges : une table et un acceuil authentique"
          }
        ]
      },
      {
        "_key": "ug7oumq",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "vl426mc",
            "_type": "span",
            "text": "Après une belle journée de ski, l’accueil et le savoir faire des gîtes et refuges du Queyras fait partie intégrante du séjour. Cuisine locale, ambiance conviviale et échanges avec les habitants du pays viennent parfaire cette immersion dans un territoire où l’on prend encore le temps de vivre, de cuisiner et de partager."
          }
        ]
      },
      {
        "_key": "4oax176",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "fhklyfu",
            "_type": "span",
            "text": "Avec ce cadre naturel, ce climat privilégié et cette authenticité, le Queyras s’impose comme l’une des meilleures destinations pour le ski de randonnée dans les Alpes."
          }
        ]
      }
    ],
    "tags": [
      {
        "name": "Queyras",
        "slug": "queyras",
        "tagType": "massif"
      },
      {
        "name": "Ski de randonnée",
        "slug": "ski-de-randonnee",
        "tagType": "category"
      }
    ],
    "prevPost": {
      "title": "5 bonnes raisons de partir faire un ski trip en Norvège",
      "slug": "5-bonnes-raisons-de-partir-faire-un-ski-trip-en-norvege"
    },
    "nextPost": {
      "title": "Le ski de randonnée, avec un moniteur ou un guide ?",
      "slug": "le-ski-de-randonnee-moniteur-ou-guide"
    }
  },
  {
    "title": "Le ski de randonnée, avec un moniteur ou un guide ?",
    "slug": "le-ski-de-randonnee-moniteur-ou-guide",
    "date": "2025-07-27T16:12:31+00:00",
    "image": "https://evasionski.fr/wp-content/uploads/2025/07/Screenshot_20250727-174533-1024x859.png",
    "excerpt": "Contre rémunération, cela dépend du type de terrain et du diplôme du professionnel. Peuvent encadrer hors glacier et en terrain adapté...",
    "body": [
      {
        "_key": "tebjath",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "y4623xi",
            "_type": "span",
            "text": "Est-ce que l' encadrement du ski de randonnée est réservé au Guide de Haute Montagne ?"
          }
        ]
      },
      {
        "_key": "8xhdjis",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "01l0obi",
            "_type": "span",
            "text": "Non, pas toujours. C’est une idée reçue très répandue.Si les guides de haute montagne sont les seuls habilités à encadrer en terrain glaciaire ou très engagé (comme les grandes faces ou les raids en haute altitude), beaucoup de sorties de ski de rando classiques peuvent être encadrées par d’autres professionnels diplômés tout autant performants et compétents."
          }
        ]
      },
      {
        "_key": "tw91yyp",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "x2vq70r",
            "_type": "span",
            "text": "Qui peut légalement encadrer une sortie en ski de randonnée ?"
          }
        ]
      },
      {
        "_key": "sbyxpnj",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "w21bftg",
            "_type": "span",
            "text": "Contre rémunération, cela dépend du type de terrain et du diplôme du professionnel.Peuvent encadrer hors glacier et en terrain adapté :"
          }
        ]
      },
      {
        "_key": "nezn4qz",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "d6d27is",
            "_type": "span",
            "text": "Les guides de haute montagne (DE alpinisme)"
          }
        ]
      },
      {
        "_key": "kdifvod",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "6n46p74",
            "_type": "span",
            "text": "Les moniteurs de ski alpin (DE et BEES ski alpin) complétement diplômés"
          }
        ]
      },
      {
        "_key": "hw7qtg6",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "9bywpky",
            "_type": "span",
            "text": "L’important, c’est que le professionnel respecte le cadre légal de son diplôme."
          }
        ]
      },
      {
        "_key": "ufp6leb",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "1j12r2k",
            "_type": "span",
            "text": "Prérogatives du Moniteur de ski"
          }
        ]
      },
      {
        "_key": "dedn0n2",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "ez564qd",
            "_type": "span",
            "text": "Y a-t-il des terrains réservés uniquement aux guides de haute montagne ?"
          }
        ]
      },
      {
        "_key": "pbukz6i",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "s2tyzdo",
            "_type": "span",
            "text": "Oui. Les terrains glaciaires, les hautes altitudes engagées ou les courses techniques nécessitant du matériel d’alpinisme (baudrier, crampons, encordement, etc.) sont exclusivement encadrables par des guides de haute montagne.Exemples : la Haute Route Chamonix-Zermatt, la Grande Casse, le Dôme des Écrins…"
          }
        ]
      },
      {
        "_key": "zrot5uv",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "6gprs6u",
            "_type": "span",
            "text": "Alors pour une sortie à la journée, un séjour ou un raid à ski, c’est possible sans guide ?"
          }
        ]
      },
      {
        "_key": "74xncew",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "owlrq8c",
            "_type": "span",
            "text": "Absolument. La majorité des itinéraires de ski de randonnée en France se déroulent en terrain non glaciaire, sur des pentes modérées, avec peu de risques objectifs si c’est bien préparé ( Queyras, Beaufortain, Embrunais, Clarée…).Dans ce cas, un moniteur qualifié peut parfaitement proposer une sortie sécurisée et adaptée au niveau du groupe. Sans limite de durée ni d’altitude (hors glacier) il sera autant compétent que n’importe quel guide de haute montagne."
          }
        ]
      },
      {
        "_key": "hwzg6u4",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "142zcim",
            "_type": "span",
            "text": "Et la différence, elle est vraiment importante pour le pratiquant ?"
          }
        ]
      },
      {
        "_key": "xqibstr",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "x44rz63",
            "_type": "span",
            "text": "Sur le terrain, ce qui compte vraiment, c’est l’expérience du professionnel, sa connaissance des conditions du moment, et sa capacité à s’adapter au groupe.Le diplôme détermine le cadre légal, mais la qualité humaine et technique de l’encadrement fait toute la différence."
          }
        ]
      },
      {
        "_key": "lxss6wc",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "sq7avbd",
            "_type": "span",
            "text": "Comment savoir si l’encadrant est compétent ?"
          }
        ]
      },
      {
        "_key": "vij8pvv",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "tmhhwu4",
            "_type": "span",
            "text": "Un professionnel sérieux :"
          }
        ]
      },
      {
        "_key": "vpt4kve",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "ey0u43b",
            "_type": "span",
            "text": "est diplômé d’État ou d’une qualification reconnue et est titulaire d’une Carte Pro à jour"
          }
        ]
      },
      {
        "_key": "8e50l05",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "ex5o840",
            "_type": "span",
            "text": "explique clairement le cadre de sa sortie"
          }
        ]
      },
      {
        "_key": "rx74uey",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "m6z6q5i",
            "_type": "span",
            "text": "adapte les itinéraires aux conditions du jour et au niveau des participants"
          }
        ]
      },
      {
        "_key": "l1y29tz",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "436ydfp",
            "_type": "span",
            "text": "communique avec son groupe, le fait participer aux prises de décisions."
          }
        ]
      },
      {
        "_key": "g2elo1m",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "vserbrs",
            "_type": "span",
            "text": "ne prend pas de risques inutiles, et mise avant tout sur la sécurité"
          }
        ]
      },
      {
        "_key": "uok3tm5",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "59i40wc",
            "_type": "span",
            "text": "N’hésitez pas à poser des questions avant de vous inscrire : sur l’itinéraire, le niveau, le matériel, le programme. Un bon professionnel prend toujours le temps de vous répondre."
          }
        ]
      },
      {
        "_key": "408d7f5",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "4e5ceea",
            "_type": "span",
            "text": "En résumé :"
          }
        ]
      },
      {
        "_key": "lf7e7pc",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "1h995p3",
            "_type": "span",
            "text": "Vous pouvez pratiquer le ski de randonnée de manière autonome, à condition d’avoir les compétences techniques, une bonne gestion des risques et une connaissance solide du terrain.En revanche, dès qu’il y a encadrement contre rémunération, celui-ci doit être assuré par un professionnel diplômé. Ce n’est pas réservé aux seuls guides de haute montagne : les moniteurs de ski titulaires du Diplôme d’État, sont pleinement habilités à encadrer en terrain non glaciaire.Formés à la neige, au terrain, à la pédagogie et à la sécurité, les moniteurs de ski sont des professionnels compétents et expérimentés, tout aussi capables que les guides de proposer des sorties adaptées, sûres et de qualité et de vous former à l’autonomie."
          }
        ]
      }
    ],
    "tags": [
      {
        "name": "General",
        "slug": "general",
        "tagType": "category"
      }
    ],
    "prevPost": {
      "title": "Séjour ski de randonnée dans le Queyras : 5  bonnes raisons d’y aller.",
      "slug": "sejour-ski-de-randonnee-dans-le-queyras-5-bonnes-raisons-dy-aller"
    },
    "nextPost": {
      "title": "Ski de randonnée : comment choisir son matériel parmi toutes les options ?",
      "slug": "ski-de-randonnee-choisir-son-materiel"
    }
  },
  {
    "title": "Ski de randonnée : comment choisir son matériel parmi toutes les options ?",
    "slug": "ski-de-randonnee-choisir-son-materiel",
    "date": "2025-09-22T03:43:33+00:00",
    "image": "https://evasionski.fr/wp-content/uploads/2025/09/PXL_20250922_140746959.PORTRAIT-scaled.jpg",
    "excerpt": "Avoir le matériel de ski de randonnée adapté est la garantie de se faire plaisir. Découvre nos conseils pour mieux choisir.",
    "body": [
      {
        "_key": "14ydsat",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "wobk8u6",
            "_type": "span",
            "text": "On me demande souvent : quel matériel choisir pour la rando à ski ? Et pour cause : une paire de chaussures ou de skis mal adaptés peut gâcher une sortie ou un séjour entier. L’offre est vaste, les prix parfois décourageants… et ce n’est pas toujours évident d’y voir clair. Dans cet article je vous propose un condensé de conseils tirés de mon expérience et des retours de mes clients au fil des années."
          }
        ]
      },
      {
        "_key": "10ycacw",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "ve6z5g7",
            "_type": "span",
            "text": "Les chaussures de ski de rando : l'investissement indispensable!"
          }
        ]
      },
      {
        "_key": "49101fu",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "ysv76yk",
            "_type": "span",
            "text": "Les chaussures représentent sans doute 60 à 70% de la réussite d’une sortie. Skiabilité et confort avant le poids ! Si vous louez attendez vous à devoir apprivoiser le matériel. Il faudra toujours un temps d’adaptation rarement agréable, et encore moins quand il s’agit d’attaquer la descente sans avoir trouvé vos repères. Ce n’est pas infaisable mais ce n’est ni le plus confortable, ni le plus efficace. C’est pourquoi je vous conseille vivement d’investir dans vos propres chaussures de ski de randonnée dès que possible. Aujourd’hui il existe des modèles polyvalents (typés freerando) capables d’être efficaces aussi bien en montagne que sur les pistes en station, et vous trouverez surement de belles promotions  en fin de saison. Pour moi c’est clairement l’investissement N°1 à faire."
          }
        ]
      },
      {
        "_key": "moxy7dy",
        "_type": "block",
        "style": "h4",
        "children": [
          {
            "_key": "5lfdbjc",
            "_type": "span",
            "text": "Skiabilité :"
          }
        ]
      },
      {
        "_key": "li7kwqk",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "0dd9aec",
            "_type": "span",
            "text": "Une chaussure assez rigide, qui maintient bien le pied sans le contraindre. Des crochets pour le maintien (plutôt que des scratchs), de la rigidité en flexion pour la skiabilité (la chaussure ne doit pas s’écraser sur elle même), un chausson épais pour le confort et la thermicité (thermoformage conseillé) et un poids contenu (exit les chaussures ultra légères et les enclumes). Votre chaussure va être le lien indispensable entre vos actions (flexions, charges, allègements…) et vos skis. Négliger ce paramètre vous heurtera à une sensation de mauvaise neige, mauvais skis ou encore mauvaise technique de votre part or la plupart du temps le problème vient bien des chaussures : on ne met pas des jantes et pneus de 2 cv sur une Ferrari !"
          }
        ]
      },
      {
        "_key": "hsvtdkb",
        "_type": "block",
        "style": "h4",
        "children": [
          {
            "_key": "rqdupmq",
            "_type": "span",
            "text": "Fonctionnalité :"
          }
        ]
      },
      {
        "_key": "1sdrnhw",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "cb042nj",
            "_type": "span",
            "text": "Des crochets et un système de vérouillage/déverouillage simple à utiliser, s’imaginer les manipuler en conditions réelles par -10° avec de la neige/glace dedans et des gants au mains (exit les petits ficelous à tirer ou tchitchous à tourner ect…). Simples et efficaces, j’ouvre et je ferme, je déverrouille et je vérouille BASTA!"
          }
        ]
      },
      {
        "_key": "38kn23a",
        "_type": "block",
        "style": "h4",
        "children": [
          {
            "_key": "amhpb2q",
            "_type": "span",
            "text": "Confort :"
          }
        ]
      },
      {
        "_key": "nnc5td9",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "jdfmjis",
            "_type": "span",
            "text": "C’est surement le point le moins évident à sentir. En magasin on sera toujours dans des pantoufles et puis sur le terrain… on aura l’impression d’avoir des sabots aux pieds. Prenez le temps de mettre les pieds une dizaine de minutes dans les chaussures et surtout de marcher avec pour sentir les éventuels point de frottements/compressions et faites un thermoformage si nécessaire (exit la déformation de coque, si vous en êtes réduit à ça c’est que ce modèle n’est clairement pas fait pour vos pieds)."
          }
        ]
      },
      {
        "_key": "6qarl44",
        "_type": "block",
        "style": "h4",
        "children": [
          {
            "_key": "nnq0zyc",
            "_type": "span",
            "text": "Débattement :"
          }
        ]
      },
      {
        "_key": "og27udu",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "deksv9p",
            "_type": "span",
            "text": "Une chaussure qui libère assez la cheville pour se rapprocher du mouvement naturel de la foulée et ainsi faciliter l’effort en montée. Le pivotement du collier doit être fluide et sans « résistance » inutile (exit les chaussures avec une très faible amplitude marche/ski). Petit test à faire en magasin : avec les 2 chaussures aux pieds dont une en « marche » et l’autre en « ski » vous devez sentir une différence flagrante (tester et ne pas se fier au angles de pivotement annoncés par les marques)."
          }
        ]
      },
      {
        "_key": "ab84kt1",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "ruqz3y6",
            "_type": "span",
            "text": "N’hésitez pas à demander conseil aux vendeurs/vendeuses de votre magasin. Vendeurs qui auront pris la peine de mesurer vos pieds (longueur ET largeur), seront à votre écoute et plutôt dans le questionnement de votre ressenti dans tel ou tel modèle que dans l’incitation à acheter le modèle qu’ ils/elles auront décidé."
          }
        ]
      },
      {
        "_key": "iqc9b6v",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "76q09pe",
            "_type": "span",
            "text": "Les skis : Les compagnons du plaisir!"
          }
        ]
      },
      {
        "_key": "u3bweva",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "ie5xl00",
            "_type": "span",
            "text": "Maintenant que vous êtes bien chaussé, avec des chaussures de ski de rando adaptées à votre morphologie de pied et votre confort, il vous faut maintenant trouver les skis qui sauront être à la hauteur de vos ambitions : ce sont eux qui vous accompagneront dans le plaisir de la descente. Pas si simple quand on voit toutes les gammes et la segmentation faite par les marques : difficile d’y voir clair. Résultat, on se retrouve souvent avec des achats pas très judicieux… et ça se ressent vite. Dans les mêmes conditions et à niveaux techniques équivalents, certains profitent à fond quand d’autres galèrent et subissent leur descente.  Pour vous faciliter la tâche, je vais réduire le champs des choix à l’essentiel : le plaisir de la glisse ! Des gammes de skis de randonnée qui fonctionnent à tous les coups, fiables et efficaces pour nos conditions de neige européennes, pour que vous puissiez profiter pleinement et ne pas regretter votre achat."
          }
        ]
      },
      {
        "_key": "p4yv74d",
        "_type": "block",
        "style": "h4",
        "children": [
          {
            "_key": "y4rv33d",
            "_type": "span",
            "text": "Shape :"
          }
        ]
      },
      {
        "_key": "qi1yyrq",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "etqyfd1",
            "_type": "span",
            "text": "Plutôt classique avec un radius supérieur à 17 m (en dessous les skis perdent en accroche et en précision sur la carre), un cambre classique sous le pied et un rocker spatule pas trop prononcé (exit les modèle au formes farfelues, spatules « gouttes d’eau », cambres plats/inversés). Ce sont les modèles les plus polyvalents et performants dans tous types de neiges avec un comportement assez prévisible, ce qui permet de se focaliser sur la technique ou le terrain quand vous skiez."
          }
        ]
      },
      {
        "_key": "r7hwz47",
        "_type": "block",
        "style": "h4",
        "children": [
          {
            "_key": "cjctjqw",
            "_type": "span",
            "text": "Largeur :"
          }
        ]
      },
      {
        "_key": "jykx6qu",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "qble0gi",
            "_type": "span",
            "text": "Largeur = portance = confort = plaisir. Avoir des skis trop étroits fera que vous n’aurez que peu de flottabilité et donc subirez la plupart des neiges autres que neige dure ou poudreuse de cinéma.  Alors qu’avec de la largeur sous le pied 95% des neiges rencontrées en montagne deviendront plaisantes voir excellentes à skier. J’estime de nos jours qu’un minimum de 90 mm au patin pour des personnes jusqu’à 70kg et 94 mm pour les personnes de plus de 70kg est nécessaire. Avec ces largeurs vous aurez aux pieds des skis confortables, qui passent dans toutes les neiges avec moins d’effort, plus de plaisir et votre technique ne fera que s’améliorer… parole de moniteur de ski !"
          }
        ]
      },
      {
        "_key": "mi90omh",
        "_type": "block",
        "style": "h4",
        "children": [
          {
            "_key": "738bpli",
            "_type": "span",
            "text": "Rigidité :"
          }
        ]
      },
      {
        "_key": "rly9r6o",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "d18vuel",
            "_type": "span",
            "text": "Le flex doit être homogène sur une bonne partie de sa longueur, pas trop ferme mais avec du rebond. Un talon trop raide rendra le ski intolérant et limite inskiable dans les neiges compliquées hormis pour les excellents skieurs alors qu’ une spatule trop souple donnera un ski certes plus accessible mais sans caractère et incontrôlable avec de la vitesse ou en terrain accidenté. Cherchez plutôt un noyau bois (léger ou non) classique avec une légère touche de renfort carbone pour rigidifier la torsion du ski (exit les full carbon et les noyaux avec de l’air ou de la mousse injectée)"
          }
        ]
      },
      {
        "_key": "yifeksr",
        "_type": "block",
        "style": "h4",
        "children": [
          {
            "_key": "nfr1jp3",
            "_type": "span",
            "text": "Poids :"
          }
        ]
      },
      {
        "_key": "zdlfs5r",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "horwf1j",
            "_type": "span",
            "text": "L‘argument n°1 des vendeurs, dont il faut se méfier. Un ski trop léger sera forcément plus fragile et aura tendance à « tricoter » pendant la descente, ce qui est très désagréable. Un ski trop lourd aura une excellente skiabilité et solidité mais sera pénible et épuisant à emmener en montagne. Le poids de vos ski doit bien évidemment être contenu (entre 1300gr et 1700gr) mais sans jamais sacrifier la skiabilité car avant tout si vous montez c’est pour vous faire plaisir à la descente. Un ski plus lourd ne vous gênera plus au bout de quelques sorties, un ski trop léger avec moins de skiabilité vous rappellera votre erreur de choix à chaque sortie!"
          }
        ]
      },
      {
        "_key": "4e05vny",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "6k1e30y",
            "_type": "span",
            "text": "N’ hésitez pas à regarder les tests rédigés par des utilisateurs sur les différents forums de ski (skitour, skipass…), ils seront toujours plus pertinents que les test magazine. Là encore vous trouverez de belles promotions en fin de saisons dans les magasins tels que Le Vieux Campeur, Ekosport, Sport Conrad... ou dans les petits commerces spécialisés, de montagne."
          }
        ]
      },
      {
        "_key": "ggt6ky0",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "xzg731f",
            "_type": "span",
            "text": "Les fixations de ski de rando : Le dernier maillon de la chaîne."
          }
        ]
      },
      {
        "_key": "cc7ioe5",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "wjg9zut",
            "_type": "span",
            "text": "Pour pratiquer le ski de randonnée ainsi que la freerando, on utilise le plus souvent des fixations à inserts, dits Lowtech. Leur apparence peut sembler intimidante au premier regard, mais ne vous y tromper pas : elles se révèlent redoutablement efficaces. À la montée comme en descente, elles assurent une accroche sûre avec la chaussure et garantissent un déchaussage fiable lorsque la sécurité l’exige. Attention toutefois : la sophistication à outrance  de certains modèles peut jouer contre eux. Trop complexes, ils peuvent se révéler moins fiables en conditions réelles, et ça, en montagne, on s’en passerait bien. Plus les fixations seront simplifiées, Plus elles seront fiables et efficaces."
          }
        ]
      },
      {
        "_key": "o9hq13p",
        "_type": "block",
        "style": "h4",
        "children": [
          {
            "_key": "y3ihmww",
            "_type": "span",
            "text": "Stopskis :"
          }
        ]
      },
      {
        "_key": "ng7nsxn",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "7idmanq",
            "_type": "span",
            "text": "Un grand OUI ! Les leashs sur le papier c’est chouette, en réalité c’est très contraignant. À chaque chaussage/déchaussage il faudra être vigilant et à la longue ce n’est pas si pratique. Il faudra tout de même veiller à ce que le système de verrouillage des stopskis soit simple (exit les petits boutons à déclencher et les ficelous à tirer ect…). Il faut vous imaginer faire la manip au sommet dans le froid et avec des gants même fins sur les mains."
          }
        ]
      },
      {
        "_key": "4a6ga1k",
        "_type": "block",
        "style": "h4",
        "children": [
          {
            "_key": "k1znvt2",
            "_type": "span",
            "text": "Butée avant :"
          }
        ]
      },
      {
        "_key": "ru90a85",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "vpdo4bj",
            "_type": "span",
            "text": "Simples, deux « branches » avec les inserts et une manette d’ouverture ou verrouillage de la butée. Les système sans ressorts ou à glissière sont de loin les plus fiables (Skitrab Titan Vario 2, Fritschi Xénic) car aucun déclenchement intempestif n’est possible."
          }
        ]
      },
      {
        "_key": "zve61dh",
        "_type": "block",
        "style": "h4",
        "children": [
          {
            "_key": "64o97gm",
            "_type": "span",
            "text": "Butée arrière :"
          }
        ]
      },
      {
        "_key": "4m4nfcw",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "6jj5ihb",
            "_type": "span",
            "text": "Évitez les « usines à gaz » trop complexes, une butée doit juste avoir deux ergots qui s’insèreront dans la chaussure, des cales de hauteur qui se mettent en place plus ou moins facilement suivant les modèles et un réglage DIN (déchaussage). Optez pour un modèle avec réglages de longueur de chaussures sera judicieux car les chaussures de même pointure ont une longueur de coque différente et il faudra alors repercer les skis en cas de changement de chaussure. Les modèles avec une élasticité de la butée arrière sont préférables car elles permettent au flex du ski de rester actif et évite les casses de ski en cas de forte compression de ce dernier."
          }
        ]
      },
      {
        "_key": "zjobizs",
        "_type": "block",
        "style": "h4",
        "children": [
          {
            "_key": "6ma23ik",
            "_type": "span",
            "text": "Poids :"
          }
        ]
      },
      {
        "_key": "cbgkpzt",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "9w5n94p",
            "_type": "span",
            "text": "Ne vous encombrez pas de poids inutile, les modèles de fixations de ski de rando pesant entre 250 et 400 grammes sont largement assez efficaces et fiables. Certains vendeurs utiliseront l’argument « sécurité » pour vous vendre des fixations beaucoup trop lourdes et complexes d’utilisation. Toutes les fixations vendues en magasin ont des normes CE rigoureuses, la sécurité de déchaussage se jouera surtout sur les réglages de l’ensemble fixations + chaussures."
          }
        ]
      },
      {
        "_key": "cj7utu2",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "3oy13dx",
            "_type": "span",
            "text": "Il faudra bien vérifier la compatibilité des couteaux (crampons à ski) avec vos fixations car certaines marques n’acceptent que leurs propres modèles."
          }
        ]
      },
      {
        "_key": "d39g2xj",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "zad02ka",
            "_type": "span",
            "text": "Pour ce qui concerne les bâtons de ski de rando c’est assez simple, tout sauf les bâtons en carbone qui sont très fragiles (en cas de chute) et sont quasiment impossibles à bidouiller/réparer. Il faudra veiller à ce qu’ils ne soient pas trop petits, qu’ils aient une rondelle large pour plus de portance dans la neige et que vous les trouviez confortables. Une paire de bâtons alu avec une rondelle poudreuse et une poignée longue fera amplement l’affaire."
          }
        ]
      },
      {
        "_key": "adep09o",
        "_type": "block",
        "style": "h3",
        "children": [
          {
            "_key": "5kpswql",
            "_type": "span",
            "text": "En ski de rando rien n'est laissé au hasard : les chaussures, les skis, les fixations et même les bâtons jouent chacun leur rôle. Un équipement bien adapté c'est l'assurance de se concentrer sur l'essentiel : profiter pleinement de la montagne."
          }
        ]
      }
    ],
    "tags": [
      {
        "name": "Ski de randonnée",
        "slug": "ski-de-randonnee",
        "tagType": "category"
      }
    ],
    "prevPost": {
      "title": "Le ski de randonnée, avec un moniteur ou un guide ?",
      "slug": "le-ski-de-randonnee-moniteur-ou-guide"
    },
    "nextPost": {
      "title": "Freerando : est-ce fait pour vous ?",
      "slug": "la-freerando-entre-freeride-et-ski-de-randonnee"
    }
  },
  {
    "title": "Freerando : est-ce fait pour vous ?",
    "slug": "la-freerando-entre-freeride-et-ski-de-randonnee",
    "date": "2025-10-22T03:32:11+00:00",
    "image": "https://evasionski.fr/wp-content/uploads/2025/05/toni-Silhourais-101-Copie-Copie.webp",
    "excerpt": "Freerando : entre freeride et ski de randonnée! Vous avez déjà rêvé d’atteindre les pentes vierges sans y consacrer la journée entière...",
    "body": [
      {
        "_key": "z6pb3aq",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "7psz24n",
            "_type": "span",
            "text": "Vous avez déjà rêvé d’atteindre les pentes vierges sans y consacrer la journée entière ? La freerando est faites pour vous."
          }
        ]
      },
      {
        "_key": "fqm2d0t",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "d5ys0h4",
            "_type": "span",
            "text": "La freerando, contraction de « freeride » et « ski de randonnée », c’est l’art de mêler liberté, plaisir des pentes vierges et effort modéré. L’idée ? Utiliser les remontées mécaniques pour accéder rapidement à de vastes terrains puis chausser les peaux de phoque pour s’échapper des pistes et rejoindre des zones plus sauvages. Moins engagée physiquement que le ski de rando traditionnel mais plus aventureuse que le simple hors-piste, la freerando permet de profiter du meilleur des deux mondes : l’accès à des itinéraires loin des foules et la sensation de faire du grand ski."
          }
        ]
      },
      {
        "_key": "cj973hf",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "9qump7f",
            "_type": "span",
            "text": "Pourquoi la freerando séduit autant ?"
          }
        ]
      },
      {
        "_key": "p3y0gi3",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "gemm1gk",
            "_type": "span",
            "text": "La freerando attire de plus en plus de skieurs parce qu’elle représente un compromis rassurant entre aventure et accessibilité. Sans devoir s’engager dans de longues montées ou de gros dénivelés, elle permet de tester l’esprit du ski de randonnée : peaux de phoque aux pieds, gestion de l’effort, lecture du terrain et goût pour les espaces vierges. Pour beaucoup c’est une première porte d’entrée avant de se lancer dans de vraies sorties ski de randonnée. Le matériel reste similaire, l’approche est moins physique, mais on goûte déjà à ce qui fait le charme du ski de rando : la tranquillité, la sensation d’aller chercher sa descente et cette impression d’être un peu plus autonome en montagne. On ne prétend pas faire de l’alpinisme, mais on sort du simple cadre des pistes balisées et hors-piste de station, et c’est souvent suffisant pour savoir si l’on a envie d’aller plus loin."
          }
        ]
      },
      {
        "_key": "rnprv99",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "ajqp9ww",
            "_type": "span",
            "text": "À quel public s'adresse la freerando ?"
          }
        ]
      },
      {
        "_key": "dio6d9z",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "5kjnr51",
            "_type": "span",
            "text": "La freerando s’adresse d’abord à celles et ceux qui aiment déjà quitter les pistes mais qui commencent à tourner en rond sur les hors-piste classiques des stations. Des skieurs et snowboardeurs à l’aise en neige non damée, curieux de découvrir des terrains un peu plus sauvages sans pour autant se lancer directement dans de longues courses de ski de rando. Pas besoin d’avoir un cardio d’athlète : une conditions physique correcte suffit pour apprécier les petites montées et profiter pleinement des descentes. C’est aussi une pratique idéale pour les riders qui se demandent si le ski de randonnée pourrait leur plaire mais qui n’osent pas (ou ne veulent pas) partir pour quatre heures d’ascension. Enfin, elle peut convenir à ceux qui recherchent simplement un autre rapport à la montagne : plus libre, un peu plus engagée que le hors-piste classique, mais encore accessible et ludique."
          }
        ]
      },
      {
        "_key": "gw1o8y4",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "4xk4u9n",
            "_type": "span",
            "text": "Sécurité et bonnes pratiques."
          }
        ]
      },
      {
        "_key": "s2a7okq",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "qpjnl79",
            "_type": "span",
            "text": "Même si la freerando reste plus accessible que le ski de rando classique, la montagne hivernale impose toujours le respect de certaines règles. S’équiper correctement est indispensable : DVA (détecteur de victime d’avalanche), pelle et sonde ainsi que vêtement adaptés aux conditions climatiques hivernales. Connaitre les bases de l’analyse du terrain et des conditions d’enneigement permet de limiter les risques et de profiter sereinement de la sortie. Partir avec un professionnel diplômé d’État est une excellente façon d’apprendre à utiliser correctement le matériel et à réduire les risques, tout en découvrant progressivement de nouveaux terrains en toute sécurité. Comme pour toutes activités en dehors des pistes balisées, il est également conseillé de ne pas partir seul, d’informer quelqu’un de son itinéraire et de rester dans des secteurs que l’on connait ou que l’on découvre progressivement  sans pour autant banaliser les éventuels dangers du terrain."
          }
        ]
      },
      {
        "_key": "zuw2fo5",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "m2iljiz",
            "_type": "span",
            "text": "Prêt à essayer ?"
          }
        ]
      },
      {
        "_key": "tu36rne",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "qebsb6n",
            "_type": "span",
            "text": "Une journée suffit pour comprendre les bases. Ensuite, à vous les grands espaces, les week-ends entre amis, ou les grands voyages nordiques. La freerando est bien plus qu’un sport : c’est une façon d’être en montagne, en accord avec soi et la nature."
          }
        ]
      },
      {
        "_key": "9porkya",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "klaaudt",
            "_type": "span",
            "text": "> Journée Freerando avec Évasion ski"
          }
        ]
      }
    ],
    "tags": [
      {
        "name": "General",
        "slug": "general",
        "tagType": "category"
      }
    ],
    "prevPost": {
      "title": "Ski de randonnée : comment choisir son matériel parmi toutes les options ?",
      "slug": "ski-de-randonnee-choisir-son-materiel"
    },
    "nextPost": {
      "title": "Qu’est ce que le ski de randonnée ?",
      "slug": "quest-ce-que-le-ski-de-randonnee"
    }
  },
  {
    "title": "Qu’est ce que le ski de randonnée ?",
    "slug": "quest-ce-que-le-ski-de-randonnee",
    "date": "2025-07-13T07:48:59+00:00",
    "image": "https://evasionski.fr/wp-content/uploads/2025/06/IMG-20250118-WA0005.jpg",
    "excerpt": "Qu'est ce que le ski de randonnée ? A qui s'adresse le ski de rando ? Où pratiquer ? Autant de questions auxquelles cet article va répondre.",
    "body": [
      {
        "_key": "n924ubw",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "kk0mmt1",
            "_type": "span",
            "text": "Le ski de randonnée, ou « ski de rando » pour les initiés, séduit de plus en plus d’amateurs de montagne. Loin des remontées mécaniques et des pistes damées, cette pratique offre une manière unique d’explorer l’hiver en pleine nature, à son rythme et en toute autonomie."
          }
        ]
      },
      {
        "_key": "node9e3",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "5namryw",
            "_type": "span",
            "text": "Qu’est-ce que le ski de randonnée ?"
          }
        ]
      },
      {
        "_key": "r5kq78z",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "1ug8wtw",
            "_type": "span",
            "text": "Le ski de randonnée est une discipline hivernale qui consiste à gravir des pentes enneigées avec des skis équipés de peaux de phoque synthétiques et de fixations à inserts, puis à redescendre à ski. Contrairement au ski de piste, il n’y a pas de remontées mécaniques : on monte par ses propres moyens, en glissant pas à pas jusqu’au sommet."
          }
        ]
      },
      {
        "_key": "5fak1ri",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "u3b5i4d",
            "_type": "span",
            "text": "Comment ça fonctionne ?"
          }
        ]
      },
      {
        "_key": "4ws15z9",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "n0ojrv5",
            "_type": "span",
            "text": "Le système est à la fois simple et ingénieux :"
          }
        ]
      },
      {
        "_key": "d5tysbm",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "hzwnyrz",
            "_type": "span",
            "text": "Des peaux de phoque se collent sous les skis pour empêcher de reculer à la montée."
          }
        ]
      },
      {
        "_key": "xp5zohz",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "v6uuz0w",
            "_type": "span",
            "text": "Les fixations spécifiques de rando libèrent le talon pour faciliter l’effort."
          }
        ]
      },
      {
        "_key": "ot6l3bs",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "6nh1hwj",
            "_type": "span",
            "text": "Les chaussures de ski de rando sont débrayables, offrant plus d’amplitude de mouvement."
          }
        ]
      },
      {
        "_key": "7654gwv",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "w2o1lt8",
            "_type": "span",
            "text": "Ce système offre une grande liberté d’exploration dans un cadre de montagne souvent exceptionnel."
          }
        ]
      },
      {
        "_key": "c567bsq",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "duid1rh",
            "_type": "span",
            "text": "À qui s’adresse le ski de rando ?"
          }
        ]
      },
      {
        "_key": "js1jr9x",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "0p8qoim",
            "_type": "span",
            "text": "Le ski de randonnée s’adresse à toute personne en bonne forme physique, amoureuse de nature et curieuse d’explorer la montagne autrement. Que vous soyez débutant ou expérimenté, il existe des sorties adaptées à tous les niveaux : initiation, freerando, raids en refuge ou voyages nordiques."
          }
        ]
      },
      {
        "_key": "qg6ra3r",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "vswkt72",
            "_type": "span",
            "text": "> Voir les différents niveaux de pratique"
          }
        ]
      },
      {
        "_key": "ttp0ray",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "7zdxw6d",
            "_type": "span",
            "text": "Pourquoi pratiquer le ski de randonnée ?"
          }
        ]
      },
      {
        "_key": "kndhws9",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "sgxrgf2",
            "_type": "span",
            "text": "Ce sport offre une sensation rare de liberté. Il permet de :"
          }
        ]
      },
      {
        "_key": "lyjlwy1",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "ynx91u8",
            "_type": "span",
            "text": "Découvrir des espaces vierges, loin de la foule"
          }
        ]
      },
      {
        "_key": "x4njfqd",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "xqp4jqj",
            "_type": "span",
            "text": "Travailler son endurance et son souffle"
          }
        ]
      },
      {
        "_key": "u397sfm",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "y1dp4o5",
            "_type": "span",
            "text": "Apprécier le silence de la montagne hivernale"
          }
        ]
      },
      {
        "_key": "38loogc",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "al8m7d3",
            "_type": "span",
            "text": "Partager des moments uniques en petit groupe"
          }
        ]
      },
      {
        "_key": "47b12cp",
        "_type": "block",
        "style": "normal",
        "listItem": "bullet",
        "level": 0,
        "children": [
          {
            "_key": "ppebc84",
            "_type": "span",
            "text": "Accéder à des des faces et vallons inaccessibles autrement"
          }
        ]
      },
      {
        "_key": "yq2uckj",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "degj1r7",
            "_type": "span",
            "text": "Bref…une aventure unique pour déconnecter et se faire plaisir en montagne."
          }
        ]
      },
      {
        "_key": "9aqshm4",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "isu22gh",
            "_type": "span",
            "text": "Où pratiquer le ski de rando ?"
          }
        ]
      },
      {
        "_key": "fo5frmm",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "6ivfvho",
            "_type": "span",
            "text": "Les massifs français offrent un terrain de jeu exceptionnel et plus particulièrement les Haute-Alpes: Queyras, Embrunais, Écrins, Clarée, Ubaye, ou encore des destinations plus lointaines comme la Norvège ou l’ Italie. Chaque zone offre un style différent : vallées sauvages et accessibles, sommets techniques, forêts alpines ou crêtes panoramiques. Les Hautes-Alpes et l’Ubaye sont encore préservées et peu fréquentées comparés au massifs du Nord des Alpes, l’idéal pour décompresser en vivant une aventure à la journée ou sur plusieurs jours."
          }
        ]
      },
      {
        "_key": "4537sta",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "s35am35",
            "_type": "span",
            "text": "Avec qui partir ?"
          }
        ]
      },
      {
        "_key": "v8a16za",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "iv7vrao",
            "_type": "span",
            "text": "Pour une première expérience ou pour progresser en sécurité, l’idéal est de partir avec un accompagnateur diplômé (moniteur de ski ou guide de haute montagne). Un professionnel connaît le terrain, les conditions météo, la gestion des risques d’avalanche, et adapte l’itinéraire à votre niveau et à vos objectifs."
          }
        ]
      },
      {
        "_key": "4f99uhs",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "to6dfz5",
            "_type": "span",
            "text": "> Partir avec Evasionski.fr"
          }
        ]
      },
      {
        "_key": "8lsm0uy",
        "_type": "block",
        "style": "h2",
        "children": [
          {
            "_key": "lehujrx",
            "_type": "span",
            "text": "Prêt à essayer ?"
          }
        ]
      },
      {
        "_key": "ab4kgyv",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "u2mqptg",
            "_type": "span",
            "text": "Une journée découverte suffit pour comprendre les bases. Ensuite, à vous les raids, les week-ends entre amis, ou les grands voyages nordiques. Le ski de rando est bien plus qu’un sport : c’est une façon d’être en montagne, en accord avec soi et la nature."
          }
        ]
      },
      {
        "_key": "v4k67fc",
        "_type": "block",
        "style": "normal",
        "children": [
          {
            "_key": "ki9g24b",
            "_type": "span",
            "text": "> Journée découverte ski de rando"
          }
        ]
      }
    ],
    "tags": [
      {
        "name": "General",
        "slug": "general",
        "tagType": "category"
      }
    ],
    "prevPost": {
      "title": "Freerando : est-ce fait pour vous ?",
      "slug": "la-freerando-entre-freeride-et-ski-de-randonnee"
    },
    "nextPost": null
  }
];
