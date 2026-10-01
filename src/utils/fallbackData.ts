/**
 * Fallback data complet - Utilisé en attendant que le contenu Sanity soit rempli
 */

export function textToBlocks(text: string): any[] {
  if (!text) return [];
  return text.split('\n\n').map((paragraph, index) => ({
    _key: `p-${index}`,
    _type: 'block',
    style: 'normal',
    children: [{ _type: 'span', _key: `s-${index}`, text: paragraph }]
  }));
}

// Contenu complet des séjours
export const fallbackSejours: Record<string, any> = {
  "ski-randonnee-hautes-alpes-journee": {
    title: "Ski de randonnée journée - Hautes-Alpes",
    titleEn: "Ski touring day trip - Hautes-Alpes",
    slug: "ski-randonnee-hautes-alpes-journee",
    categorie: "journee-ski-rando",
    activityType: "ski-de-randonnee",
    subCategory: "A la journée",
    massif: "Hautes-Alpes",
    massifs: ["Queyras", "Ubaye", "Écrins", "Clarée", "Embrunais", "Parpaillon"],
    level: "intermediaire",
    niveauDefaut: "intermediaire",
    duration: "1 jour",
    duree: "1 jour",
    basePrice: "98€/pers",
    priceEncadrement: "98€/pers",
    image: "/photos/DSC_6701.jpg",
    seoTitle: "Journée ski de randonnée dans les Hautes-Alpes | Guide ÉvasionSki",
    seoDescription: "Découvrez le ski de randonnée à la journée dans les Hautes-Alpes. Sorties encadrées par un guide professionnel dans les massifs du Queyras, Ubaye, Écrins...",
    description: "La journée encadrée en ski de randonnée est l'aventure accessible par excellence car elle permet de s'immerger pleinement en montagne, sans contrainte logistique. Pas besoin de refuge ni de sac trop lourd : une bonne volonté suffit pour vivre un moment unique en ski dans la poudreuse.",

    intro: textToBlocks(`Ski de randonnée dans les Alpes - Une aventure à la journée, loin de la foule et au cœur de la montagne sauvage.

La journée encadrée en ski de randonnée est l'aventure accessible par excellence car elle permet de s'immerger pleinement en montagne, sans contrainte logistique. Pas besoin de refuge ni de sac trop lourd : une bonne volonté suffit pour vivre un moment unique en ski dans la poudreuse.`),

    essentiel: textToBlocks(`Une journée à ski de randonnée, c'est une aventure complète qui commence dès le matin. Nous partons du gîte pour rejoindre en minibus les meilleurs secteurs en fonction des conditions. Cela permet de découvrir différents coins du Queyras, l'Ubaye ou l'Embrunais, loin des domaines skiables, dans un cadre exceptionnel.

Le séjour se déroule en étoile : chaque jour nous partons du gîte pour rejoindre en minibus les meilleurs secteurs en fonction des conditions. Cela permet de découvrir différents coins du Queyras et de choisir l'itinéraire et les pentes les plus adaptés.

L'objectif est de profiter pleinement de 5 jours pour skier, découvrir le massif et progresser en ski de randonnée, sans limite à un seul secteur, dans un cadre sécuritaire (utilisation des peaux de phoque, techniques de montée...).`),

    programme: textToBlocks(`**Rendez-vous** : Le matin au parking défini la veille (communiqué par SMS/WhatsApp)

**Déroulement de la journée** :
- Départ matinal pour profiter des meilleures conditions
- Briefing sécurité et présentation du programme
- Montée progressive avec pauses régulières (700 à 1200m de dénivelé)
- Pique-nique au sommet avec vue panoramique
- Descente en poudreuse dans un cadre sauvage
- Retour au parking en fin d'après-midi

**Terrains privilégiés** : sorties dans le Queyras, l'Ubaye ou l'Embrunais, loin des domaines skiables, dans un cadre exceptionnel.

**Logistique Simplifiée** : transport assuré en minibus 9 places, pour un départ serein et une journée sans contrainte.`),

    materiel: textToBlocks(`**Prêt de sac à dos de montagne et ski secours (DVA, pelle, sonde)**

**À prévoir** :
- Skis de randonnée + peaux + couteaux (location possible dans les magasins de la vallée)
- Chaussures de ski de randonnée
- Bâtons télescopiques
- Vêtements chauds et techniques (3 couches)
- Gants, bonnet, lunettes de soleil + masque
- Crème solaire et stick à lèvres
- Gourde 1L minimum
- Pique-nique + en-cas énergétiques
- Téléphone chargé

**DVA, pelle, sonde fournis** — Si demande dans le formulaire d'inscription.`),

    inclus: textToBlocks(`**Inclus** :
- Encadrement par guide professionnel
- Prêt du matériel de sécurité (DVA, pelle, sonde)
- Transport en minibus 9 places
- Assurance RC professionnelle

**Non inclus** :
- Location du matériel de ski (skis, peaux, chaussures)
- Forfait remontées mécaniques si utilisé
- Pique-nique et boissons
- Assurance personnelle annulation/rapatriement`),

    faqs: [
      {
        question: "Quel niveau faut-il avoir ?",
        answer: "Il faut être à l'aise en ski hors-piste (piste rouge minimum) et avoir une bonne condition physique. Les itinéraires sont adaptés au niveau du groupe."
      },
      {
        question: "Combien de dénivelé ?",
        answer: "Entre 700 et 1200m de dénivelé positif selon les conditions et le niveau du groupe."
      },
      {
        question: "Que se passe-t-il en cas de mauvais temps ?",
        answer: "La sortie est maintenue sauf conditions dangereuses. En cas d'annulation pour raison de sécurité, vous serez remboursé ou une nouvelle date sera proposée."
      },
      {
        question: "Faut-il avoir déjà fait du ski de randonnée ?",
        answer: "Une première expérience est recommandée mais pas obligatoire. Le guide adaptera l'itinéraire et prendra le temps d'expliquer les techniques de base."
      }
    ],

    budgetInclus: [
      "Encadrement par guide diplômé d'État",
      "Prêt DVA + pelle + sonde",
      "Transport en minibus (A/R départ)",
      "Assurance RC professionnelle"
    ],

    budgetNonInclus: [
      "Location matériel ski de rando",
      "Forfaits remontées (si utilisés)",
      "Pique-nique + boissons",
      "Assurance annulation"
    ]
  },

  "ski-hors-piste-station-hautes-alpes": {
    title: "Freerando et ski hors-piste journée",
    titleEn: "Freerando and off-piste skiing day trip",
    slug: "ski-hors-piste-station-hautes-alpes",
    categorie: "journee-freerando",
    activityType: "freerando",
    subCategory: "A la journée",
    massif: "Hautes-Alpes",
    massifs: ["Écrins", "Clarée", "Queyras", "Crevoux"],
    level: "confirme",
    niveauDefaut: "confirme",
    duration: "1 jour",
    duree: "1 jour",
    basePrice: "95€/pers",
    priceEncadrement: "À partir de 95€/pers test",
    image: "/photos/DSC_6612.jpg",
    seoTitle: "Journée freerando et ski hors-piste Hautes-Alpes | Guide ÉvasionSki",
    seoDescription: "La freerando fusionne le freeride et le ski de randonnée. Profitez des remontées mécaniques pour accéder à des zones non tracées, peu fréquentées, souvent en neige poudreuse.",
    description: "La freerando fusionne le freeride et le ski de randonnée. Profitez des remontées mécaniques pour accéder à des zones non tracées, peu fréquentées, souvent en neige poudreuse. L'option idéale pour les skieurs experts cherchant les sensations fortes sans les longues ascensions.",

    intro: textToBlocks(`La freerando fusionne le freeride et le ski de randonnée. Profitez des remontées mécaniques pour accéder à des zones non tracées, peu fréquentées, souvent en neige poudreuse. L'option idéale pour les skieurs experts cherchant les sensations fortes sans les longues ascensions.

Une journée accessible, parfait pour découvrir ou consolider les bases du ski de rando (utilisation des peaux de phoque, techniques de montée...).`),

    essentiel: textToBlocks(`**À savoir** :
Tarif : 98€/pers en formule collective

**Skieurs & effort** :
Skieurs : débrouillés-intermédiaires • Effort : modéré

Un rythme équilibré, entre 700 et 1000 m de dénivelé, parfait pour découvrir ou consolider les bases du ski de rando (utilisation des peaux de phoque, techniques de montées...).

**Durée & Format** :
Une journée accessible, parfait pour découvrir ou consolider les bases du ski de rando (utilisation des peaux de phoque, techniques de montée...).

**Destinations & Massifs** :
Terrains privilégiés des Hautes-Alpes : sorties dans le Queyras, l'Ubaye ou l'Embrunais, loin des domaines skiables, dans un cadre exceptionnel.

**Matériel & Secours** :
Prêt de sac à dos de montagne et ski secours (DVA, pelle, sonde) sur demande dans le formulaire d'inscription.

**Logistique Simplifiée** :
transport assuré en minibus 9 places, pour un départ serein et une journée sans contrainte.`),

    programme: textToBlocks(`**Déroulement type** :

**Matin** : Rendez-vous à la station, briefing sécurité et choix des itinéraires selon les conditions. Utilisation des remontées mécaniques pour accéder rapidement aux zones de hors-piste.

**Journée** : Alternance entre descentes hors-piste et courtes montées en peaux de phoque pour accéder à des zones non tracées. Pause pique-nique en altitude.

**Après-midi** : Dernières descentes en poudreuse avant le retour.

**Durée & Format** :
Une journée accessible, parfait pour découvrir ou consolider les bases du ski de rando (utilisation des peaux de phoque, techniques de montée...).`),

    materiel: textToBlocks(`**Prêt de sac à dos de montagne et ski secours (DVA, pelle, sonde) sur demande dans le formulaire d'inscription.**

**Matériel requis** :
- Skis all-mountain ou freeride
- Chaussures de ski (compatibles fixations rando si possible)
- Bâtons
- DVA, pelle, sonde (fournis)
- Forfait de ski journée
- Vêtements chauds 3 couches
- Masque + lunettes de soleil
- Protection solaire
- Pique-nique + eau
- Sac à dos 20-30L`),

    inclus: textToBlocks(`**Inclus dans la prestation** :
- Encadrement par guide diplômé
- Prêt DVA + pelle + sonde
- Assurance RC guide

**Non inclus** :
- Forfait remontées mécaniques
- Location matériel ski
- Pique-nique
- Assurance annulation`),

    faqs: [
      {
        question: "Quelle est la différence avec le ski de randonnée classique ?",
        answer: "Le freerando utilise les remontées mécaniques pour gagner de l'altitude rapidement, puis on fait de courtes montées en peaux pour accéder à des zones hors-piste vierges."
      },
      {
        question: "Faut-il un forfait de ski ?",
        answer: "Oui, le forfait journée de la station est nécessaire pour utiliser les remontées mécaniques."
      },
      {
        question: "Quel niveau technique requis ?",
        answer: "Il faut être bon skieur hors-piste (piste noire aisée) et avoir une bonne condition physique pour les montées."
      }
    ]
  },

  "ski-de-randonnee-queyras-decouverte": {
    title: "Ski de randonnée dans le Queyras 5 jours",
    titleEn: "Ski touring in Queyras 5 days",
    slug: "ski-de-randonnee-queyras-decouverte",
    categorie: "stage-raid",
    activityType: "ski-de-randonnee",
    subCategory: "Stages & Raids",
    massif: "Queyras",
    massifs: ["Queyras"],
    level: "intermediaire",
    niveauDefaut: "intermediaire",
    duration: "5 jours",
    duree: "5 jours",
    basePrice: "870€",
    priceEncadrement: "870€",
    priceFraisSejour: "À partir de 400€ (pension complète)",
    image: "/images/queyras.jpg",
    seoTitle: "Stage ski de randonnée Queyras 5 jours | Raid à ski guidé",
    seoDescription: "Stage de 5 jours complets de ski de randonnée au cœur du Parc naturel régional du Queyras, avec un hébergement en pension complète au gîte l'Edelweiss, à Abriès.",
    description: "Ce stage vous propose 5 jours complets de ski de randonnée au cœur du Parc naturel régional du Queyras, avec un hébergement en pension complète au gîte l'Edelweiss, à Abriès (arrivée possible le dimanche à partir de 16h).",

    intro: textToBlocks(`Un raid à ski technique et sauvage dans la haute vallée de l'Ubaye, aux frontières de l'Italie.

Ce stage vous propose 5 jours complets de ski de randonnée au cœur du Parc naturel régional du Queyras, avec un hébergement en pension complète au gîte l'Edelweiss, à Abriès (arrivée possible le dimanche à partir de 16h).

Le séjour se déroule en étoile : chaque jour nous partons du gîte pour rejoindre en minibus les meilleurs secteurs en fonction des conditions. Cela permet de découvrir différents coins du Queyras et de choisir l'itinéraire et les pentes les plus adaptés.

L'objectif est de profiter pleinement de 5 jours pour skier, découvrir le massif et progresser en ski de randonnée, sans limite à un seul secteur, dans un cadre sécuritaire.`),

    essentiel: textToBlocks(`**Tarifs & Budget** :
Tarif : 98€/pers en formule collective

**Skieurs** : débrouillés-intermédiaires • Effort : modéré Un rythme équilibré, entre 700 et 1000 m de dénivelé, parfait pour découvrir ou consolider les bases du ski de rando (utilisation des peaux de phoque, techniques de montées...).

**Durée & Format** :
Séjour en étoile — Nous rejoignons en minibus différents départs chaque matin, permettant de varier les itinéraires, découvrir plusieurs vallées du Queyras et ajuster le programme selon la météo et les conditions de neige (entre 700 et 1 200 m de dénivelé par jour).

**Destinations & Massifs** :
Terrains privilégiés des Hautes-Alpes : sorties dans le Queyras, l'Ubaye ou l'Embrunais, loin des domaines skiables, dans un cadre exceptionnel.

**Matériel & Secours** :
Prêt de sac à dos de montagne et ski secours (DVA, pelle, sonde) sur demande dans le formulaire d'inscription.

**Logistique Simplifiée** :
transport assuré en minibus 9 places, pour un départ serein et une journée sans contrainte.

**Une journée accessible** : parfait pour découvrir ou consolider les bases du ski de rando (utilisation des peaux de phoque, techniques de montées...).`),

    programme: textToBlocks(`Le séjour se déroule en étoile : chaque jour nous partons du gîte pour rejoindre en minibus les meilleurs secteurs en fonction des conditions. Cela permet de découvrir différents coins du Queyras et de choisir l'itinéraire et les pentes les plus adaptés.`),

    materiel: textToBlocks(`**Prêt de sac à dos de montagne et ski secours (DVA, pelle, sonde)**

**Matériel personnel requis** :
- Skis de randonnée légers + peaux + couteaux
- Chaussures ski de rando
- Bâtons télescopiques
- Sac à dos 30-40L
- Vêtements techniques 3 couches
- Doudoune
- Gants chauds + gants de rechange
- Bonnet, buff, lunettes + masque
- Crème solaire haute protection
- Gourde isotherme 1L
- Thermos pour boisson chaude
- Vivres de course
- Lampe frontale
- Trousse de toilette
- Drap de sac (si non fourni)
- Pharmacie personnelle`),

    inclus: textToBlocks(`**Inclus dans l'encadrement (870€)** :
- 5 jours d'encadrement par guide diplômé
- Prêt DVA + pelle + sonde
- Transport quotidien en minibus
- Assurance RC guide

**Frais de séjour en sus (env. 400€)** :
- 5 nuits en gîte pension complète
- Tous les repas du dîner J1 au petit-déjeuner J6

**Non inclus** :
- Transport jusqu'à Abriès
- Location matériel ski de rando
- Boissons
- Assurance annulation/rapatriement`),

    faqs: [
      {
        question: "Le stage est-il adapté aux débutants ?",
        answer: "Il faut avoir un bon niveau de ski (rouge/noire) et une bonne condition physique. Une première expérience en ski de rando est recommandée."
      },
      {
        question: "Combien de dénivelé par jour ?",
        answer: "Entre 800 et 1200m selon les conditions et le niveau du groupe."
      },
      {
        question: "Comment se passe l'hébergement ?",
        answer: "Gîte confortable en pension complète avec chambres partagées (2-4 pers), draps fournis."
      }
    ]
  },

  "ski-de-randonnee-en-claree": {
    title: "Raid à ski en Clarée 3 jours",
    titleEn: "3-day ski raid in Clarée",
    slug: "ski-de-randonnee-en-claree",
    categorie: "stage-raid",
    activityType: "ski-de-randonnee",
    subCategory: "Stages & Raids",
    massif: "Clarée",
    massifs: ["Clarée"],
    level: "confirme",
    niveauDefaut: "confirme",
    duration: "3 jours",
    duree: "3 jours",
    basePrice: "520€",
    priceEncadrement: "520€",
    image: "/images/claree.jpg",
    seoTitle: "Raid à ski itinérant Clarée 3 jours | Ski de randonnée",
    seoDescription: "Raid à ski de 3 jours dans la magnifique vallée de la Clarée. Itinéraire de refuge en refuge à travers les plus beaux sommets.",
    description: "Un raid à ski de 3 jours dans la vallée préservée de la Clarée, l'une des plus belles des Alpes. Itinéraire en boucle avec nuits en refuges.",

    intro: textToBlocks(`La vallée de la Clarée est un joyau des Hautes-Alpes, préservée et authentique. Ce raid de 3 jours vous emmène à la découverte de ses plus beaux sommets en itinérance, avec des nuits en refuges gardés.

Un itinéraire varié qui alterne montées progressives et descentes en poudreuse, dans un cadre grandiose.`),

    essentiel: textToBlocks(`**Niveau requis** : Bon skieur hors-piste, habitué aux dénivelés de 1000m+

**Dénivelé quotidien** : 1000 à 1400m

**Groupe** : 4 à 8 participants

**Hébergement** : Refuges gardés (nuits en dortoir)

**Portage** : Sac léger (affaires perso + pique-nique), pas de matériel de bivouac`),

    programme: textToBlocks(`**Jour 1** : Vallée de la Clarée - Refuge du Chardonnet
Départ de Névache, montée progressive vers le refuge. 1100m D+

**Jour 2** : Tour des sommets - Refuge de Laval
Traversée haute avec plusieurs sommets possibles selon conditions. 1300m D+

**Jour 3** : Retour par les crêtes
Dernier sommet et longue descente finale vers Névache. 900m D+`),

    materiel: textToBlocks(`**Matériel ski** :
- Skis de randonnée légers
- Peaux + couteaux
- Chaussures de rando confortables
- Bâtons
- DVA + pelle + sonde
- Crampons + piolet (selon conditions)

**Sac à dos** :
- Vêtements de rechange pour 3 jours
- Drap de sac
- Trousse de toilette
- Vivres de course
- Gourde + thermos
- Lampe frontale
- Pharmacie perso`),

    inclus: textToBlocks(`**Inclus** :
- Encadrement 3 jours
- Nuits en refuge (½ pension)

**Non inclus** :
- Transport
- Pique-niques
- Boissons
- Assurance`),

    faqs: []
  },

  "raid-ski-randonnee-ubaye": {
    title: "Raid à ski en Ubaye 3 jours",
    titleEn: "3-day ski raid in Ubaye",
    slug: "raid-ski-randonnee-ubaye",
    categorie: "stage-raid",
    activityType: "ski-de-randonnee",
    subCategory: "Stages & Raids",
    massif: "Ubaye",
    massifs: ["Ubaye"],
    level: "expert",
    niveauDefaut: "expert",
    duration: "3 jours",
    duree: "3 jours",
    basePrice: "550€",
    priceEncadrement: "550€",
    image: "/images/ubaye.jpg",
    description: "Un raid à ski technique et sauvage dans la haute vallée de l'Ubaye, aux frontières de l'Italie.",

    intro: textToBlocks(`Un raid à ski technique et sauvage dans la haute vallée de l'Ubaye, aux frontières de l'Italie.

L'Ubaye est un terrain de jeu exceptionnel pour le ski de randonnée : sommets à plus de 3000m, pentes raides, neige de qualité et ambiance haute montagne.`),

    essentiel: textToBlocks(`**Niveau** : Expert - Ski technique, pentes > 35°

**Dénivelé** : 1200-1500m/jour

**Altitude** : Sommets jusqu'à 3000m

**Format** : Raid itinérant en autonomie`),

    programme: textToBlocks(`Itinéraire sur 3 jours à travers les plus beaux sommets de l'Ubaye, avec nuits en refuges non gardés ou bivouac selon secteur.

Programme adapté aux conditions nivologiques et météo.`),

    materiel: textToBlocks(`Matériel complet de ski de randonnée + sécurité montagne`),
    inclus: textToBlocks(`Encadrement 3 jours par guide de haute montagne`),
    faqs: []
  },

  "stage-de-ski-freerando-les-orres-crevoux": {
    title: "Stage de ski freerando Les Orres / Crévoux",
    titleEn: "Freerando stage Les Orres / Crévoux",
    slug: "stage-de-ski-freerando-les-orres-crevoux",
    categorie: "stage-raid",
    activityType: "freerando",
    subCategory: "Stages & Raids",
    massif: "Embrunais",
    massifs: ["Les Orres", "Crévoux"],
    level: "confirme",
    niveauDefaut: "confirme",
    duration: "3 jours",
    duree: "3 jours",
    basePrice: "480€",
    priceEncadrement: "480€",
    image: "/images/freerando_les_orres.jpg",
    seoTitle: "Stage freerando Les Orres Crévoux | Ski hors-piste 3 jours",
    seoDescription: "Stage de 3 jours de freerando aux Orres et Crévoux.",
    description: "Un stage de 3 jours pour découvrir le freerando aux Orres et à Crévoux.",

    intro: textToBlocks(`Stage de 3 jours pour progresser en freerando aux Orres et à Crévoux.

Le principe : utiliser les remontées mécaniques pour accéder rapidement aux zones de hors-piste, puis effectuer de courtes montées en peaux pour atteindre des secteurs sauvages.`),

    essentiel: textToBlocks(`**Niveau** : Confirmé - Bon skieur hors-piste

**Format** : Stage en étoile avec hébergement fixe

**Stations** : Les Orres + Crévoux

**Dénivelé** : 400-800m/jour`),

    programme: textToBlocks(`3 jours de freerando aux Orres et Crévoux selon les conditions.

Chaque jour : accès rapide en remontées, puis hors-piste avec courtes montées en peaux.`),

    materiel: textToBlocks(`Skis all-mountain, peaux, DVA + pelle + sonde, forfaits`),
    inclus: textToBlocks(`Encadrement 3 jours`),
    faqs: []
  },

  "ski-randonnee-norvege-alpes-lyngen": {
    title: "Ski de randonnée en Norvège - Alpes de Lyngen",
    titleEn: "Ski touring in Norway - Lyngen Alps",
    slug: "ski-randonnee-norvege-alpes-lyngen",
    categorie: "stage-raid",
    activityType: "ski-de-randonnee",
    subCategory: "Stages & Raids",
    massif: "Norvège",
    massifs: ["Alpes de Lyngen"],
    level: "intermediaire",
    niveauDefaut: "intermediaire",
    duration: "7 jours",
    duree: "7 jours",
    basePrice: "1850€",
    priceEncadrement: "1850€",
    image: "/images/norvege.jpg",
    seoTitle: "Ski de randonnée Norvège Lyngen Alps | Voyage ski 7 jours",
    seoDescription: "Séjour de ski de randonnée dans les Alpes de Lyngen en Norvège.",
    description: "Voyage de ski de randonnée dans les Alpes de Lyngen, au nord de la Norvège.",

    intro: textToBlocks(`Ski de randonnée dans les Alpes de Lyngen - Aventure entre mer et montagne.

Les Alpes de Lyngen offrent un terrain unique : sommets qui plongent dans les fjords, neige exceptionnelle.`),

    essentiel: textToBlocks(`**Période** : Mars à Mai

**Niveau** : Intermédiaire à confirmé

**Dénivelé** : 800-1200m par jour

**Hébergement** : Maison en pension complète`),

    programme: textToBlocks(`7 jours de ski de randonnée dans les Alpes de Lyngen

Ski du sommet à la mer, découverte des fjords.`),

    materiel: textToBlocks(`Skis de randonnée + peaux, DVA + pelle + sonde, vêtements chauds`),
    inclus: textToBlocks(`7 jours encadrement, 7 nuits pension complète, transports sur place`),
    faqs: []
  }
};

export const fallbackActivities = [
  {
    title: "Ski de randonnée",
    titleEn: "Ski touring",
    slug: "ski-de-randonnee",
    description: "Découvrez les plus beaux sommets des Hautes-Alpes en ski de randonnée",
    descriptionEn: "Discover the most beautiful peaks of the Hautes-Alpes on ski touring",
    price: "À partir de 98€",
    image: "/photos/DSC_6701.jpg",
  },
  {
    title: "Freerando",
    titleEn: "Freerando",
    slug: "freerando",
    description: "Le meilleur du freeride et du ski de randonnée",
    descriptionEn: "The best of freeride and ski touring",
    price: "À partir de 95€",
    image: "/photos/DSC_6612.jpg",
  },
  {
    title: "Stages & Raids",
    titleEn: "Stages & Raids",
    slug: "stages-raids",
    description: "Séjours de plusieurs jours pour explorer les massifs",
    descriptionEn: "Multi-day trips to explore the mountain ranges",
    price: "À partir de 520€",
    image: "/images/queyras.jpg",
  },
];
