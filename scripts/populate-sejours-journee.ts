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

// Helper to convert text to blocks
function textToBlocks(text: string) {
  const lines = text.split('\n\n');
  return lines.map(line => {
    const trimmed = line.trim();

    if (trimmed.startsWith('### ')) {
      return {
        _type: 'block',
        style: 'h3',
        children: [{ _type: 'span', text: trimmed.replace('### ', ''), marks: [] }],
        markDefs: []
      };
    }

    if (trimmed.startsWith('## ')) {
      return {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: trimmed.replace('## ', ''), marks: [] }],
        markDefs: []
      };
    }

    return {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', text: trimmed, marks: [] }],
      markDefs: []
    };
  });
}

const skiRandoJournee = {
  _type: 'sejour',
  _id: 'sejour-ski-randonnee-hautes-alpes-journee',
  title: 'Journée ski de randonnée',
  slug: { _type: 'slug', current: 'ski-randonnee-hautes-alpes-journee' },
  categorie: 'journee-ski-rando',
  massifs: ['queyras', 'ubaye', 'ecrins'],
  niveauDefaut: 'intermediaire',
  duree: '1 jour',
  prixDefaut: 'À partir de 95€/pers',
  description: 'Ski de randonnée dans les Alpes - Une aventure à la journée',
  hideUpcomingSorties: false,

  intro: textToBlocks(`## Ski de randonnée dans les Alpes - Une aventure à la journée

La journée encadrée en ski de randonnée est l'aventure accessible par excellence car elle permet de s'immerger pleinement en montagne, sans contrainte logistique. Pas besoin de refuge ni de sac trop lourd : une bonne volonté suffit pour vivre un moment unique en ski dans la poudreuse.`),

  essentiel: textToBlocks(`• **Tarif : 95€ / pers en formule collective**

• **Skieurs : débrouillés-intermédiaires • Effort : modéré** Un rythme équilibré, entre 700 et 1 000 m de dénivelé, pour allier effort et plaisir de la glisse.

• **Terrains préservés des Hautes-Alpes** : sorties dans le Queyras, l'Ubaye ou l'Embrunais, loin des domaines skiables, dans un cadre exceptionnel.

• **Prêt de sac à dos de montagne et kit secours (DVA, pelle, sonde)** sur demande dans le formulaire d'inscription.

• **Logistique simplifiée** : transport assuré en minibus 9 places, pour un départ serein et une journée sans contraintes.

• **Une journée accessible**, parfait pour découvrir ou consolider les bases du ski de rando (utilisation des peaux de phoque, techniques de montées...).`),

  programme: textToBlocks(`### Une journée type en ski de randonnée encadrée

Envie de vivre une vraie journée d'aventure en montagne ? Voici comment se déroule une sortie encadrée en ski de randonnée dans les Hautes-Alpes, entre apprentissage, paysages grandioses et plaisir de la glisse.

**8h30 – Rendez-vous à Baratier** : Le départ se fait depuis l'aire de covoiturage, au rond point des Orres. Facile d'accès et pratique pour tous.

**Transport sur le lieu de départ** : À bord de notre minibus, on vous emmène au départ de l'itinéraire du jour, choisi en fonction des conditions météo et nivologiques.

**Brief matériel & sécurité** : Avant de chausser les skis, on vérifie ensemble l'équipement : skis de rando, peaux de phoque, fixations à insert, chaussures débrayables… ainsi que le pack secours (DVA, pelle, sonde) fourni si besoin.

**Montée en peaux** : En route pour l'ascension ! On progresse à votre rythme, avec des conseils techniques pour mieux gérer l'effort, les conversions et la lecture du terrain.

**Pique-nique en altitude** : Une pause bien méritée au sommet ou sur une crête avec vue panoramique. Le moment parfait pour souffler… et s'émerveiller.

**Descente plaisir** : On vous accompagne aussi dans la descente avec des astuces pour améliorer votre ski en neige naturelle, en toute sécurité.

**Retour entre 16h et 17h** : Retour en vallée, le sourire aux lèvres et les jambes bien sollicitées. Une journée complète, riche en apprentissages et en sensations.

Cette sortie est idéale pour découvrir le ski de randonnée dans les Alpes du Sud, progresser techniquement, tester son matériel, et vivre une immersion en montagne loin des pistes. Encadrement professionnel, ambiance conviviale et itinéraires adaptés à tous les niveaux.`),

  materiel: textToBlocks(`### 1 - Matériel fourni si vous n'êtes pas équipé

• Pack secours : DVA (Détecteur de Victime d'Avalanche), pelle et sonde
• Sac à dos adapté à l'activité (30/35l)

### 2 - Matériel personnel à prévoir

• Skis de randonnée avec fixations à insert (type Low Tech)
• Peaux de phoque en bon état (colle et poils encore efficaces)
• Couteaux à neige adaptés à vos fixations
• Chaussures de ski de rando débrayables (avec mode montée/descente)
• Bâtons de ski avec rondelles larges (≈ 8 cm)
• Sac à dos de 30 à 35 litres
• Minimum 1,5L d'eau par personne
• Pique-nique + vivres de course (fruits secs, barres, pâtes de fruits…)

### 3 - Tenue vestimentaire adaptée

• Pantalon de ski respirant avec aérations
• Veste imperméable type Gore-Tex
• Micro-doudoune ou polaire chaude
• Sous-couche technique (éviter le coton)
• Buff, cache cou
• Gants fins + gants chauds ou moufles
• Lunettes de soleil (cat. 3 ou 4) et/ou masque de ski
• Bonnet fin, bandeau ou casquette + bonnet chaud
• Casque de ski conseillé mais facultatif
• Crème solaire à indice élevé (SPF 30 minimum)
• Pansements ampoules type seconde peau (Compeed ou équivalent)

### 4 - Pensez à l'assurance annulation

Souscrire à une assurance annulation avant de réserver est fortement conseillé. Elle vous permettra d'être couvert en cas d'imprévu (blessure, empêchement professionnel, aléa familial…) entraînant l'annulation de votre participation. Sans cela, les frais engagés pour le séjour seront remboursés selon le barème des CGV.

Une option d'assurance annulation « Impact Évasion » vous sera proposée au moment de votre réservation.

### 5 - Assurances personnelles obligatoires

Chaque participant doit disposer de :
• Une assurance responsabilité civile individuelle
• Une assurance couvrant les frais de secours et de rapatriement

Il est de votre responsabilité de vérifier que votre contrat d'assurance couvre ce type d'activité en milieu montagnard.

Une option d'assurance secours et rapatriement « Impact Multisports » vous sera proposée au moment de votre réservation.

### 6 - Mon conseil équipement

Les conditions varient vite en montagne : prévoyez des vêtements modulables. Le système 3 couches est idéal (1ère couche technique + couche thermique + couche coupe-vent). Une 4ème couche de secours peut être utile (ex : doudoune sans manches). Évitez de transpirer avec des vêtements trop chauds : l'humidité empêche de se réchauffer même avec une grosse doudoune. Trop chaud il en va de votre confort, trop froid il en va de votre survie !`),

  budgetInclus: [
    'L\'encadrement professionnel par un moniteur diplômé d\'État',
    'L\'organisation et la préparation de la sortie',
    'Coaching technique ski toutes neiges',
    'Le transport en minibus sur le départ de l\'itinéraire',
    'Le prêt éventuel de sac de montagne avec DVA, pelle et sonde',
    'Matériel collectif de sécurité et secours (radio VHF, trousse de secours, GPS...)',
    'Le petit coup de gnole du chef !'
  ],

  budgetNonInclus: [
    'La location éventuelle du matériel de ski de randonnée',
    'Le transport jusqu\'au point de rdv',
    'Les assurances rapatriement et annulation',
    'Le pique-nique ou repas du midi',
    'Les vivres de courses',
    'Toutes dépenses personnelles éventuelles'
  ],

  faqs: [
    {
      question: 'Quel niveau faut-il avoir ?',
      answer: 'Il faut être à l\'aise sur pistes rouges et pouvoir enchaîner plusieurs heures de ski. Pas besoin d\'expérience en ski de randonnée, nous vous apprenons les bases !',
    },
    {
      question: 'Faut-il avoir son propre matériel ?',
      answer: 'Oui, vous devez avoir votre matériel de ski de randonnée (skis, chaussures, peaux). Le DVA, pelle et sonde peuvent être prêtés sur demande.',
    },
    {
      question: 'Où a lieu le rendez-vous ?',
      answer: 'Rendez-vous à 8h30 à l\'aire de covoiturage de Baratier, au rond-point des Orres. Transport ensuite assuré en minibus.',
    },
    {
      question: 'Combien de personnes par sortie ?',
      answer: 'Groupes de 4 à 8 personnes maximum pour un encadrement de qualité et une progression adaptée.',
    },
  ],

  seoTitle: 'Journée Ski de Randonnée Hautes-Alpes | Encadrement Pro',
  seoDescription: 'Découvrez le ski de randonnée dans les Hautes-Alpes avec un moniteur diplômé. Sorties à la journée dans le Queyras, l\'Ubaye et les Écrins. À partir de 95€/pers.',
}

const skiHorsPiste = {
  _type: 'sejour',
  _id: 'sejour-ski-hors-piste-station-hautes-alpes',
  title: 'Journée Freerando & Hors-piste',
  slug: { _type: 'slug', current: 'ski-hors-piste-station-hautes-alpes' },
  categorie: 'journee-freerando',
  massifs: ['ecrins'],
  niveauDefaut: 'confirme',
  duree: '1 jour',
  prixDefaut: 'À partir de 95€/pers',
  description: 'Ski hors-piste en station avec un guide professionnel',
  hideUpcomingSorties: false,

  intro: textToBlocks(`## Freerando & Hors-piste en station - Poudreuse et sensations

La journée freerando est le parfait compromis entre ski de randonnée et freeride : on utilise les remontées mécaniques pour accéder rapidement aux plus beaux itinéraires hors-piste. Maximum de descentes, minimum d'effort en montée, pour un maximum de plaisir dans la poudreuse !`),

  essentiel: textToBlocks(`• **Tarif : 95€ / pers en formule collective**

• **Skieurs : confirmés-experts** • Bon niveau de ski toutes neiges requis

• **Stations des Hautes-Alpes** : Vars, Les Orres, Crévoux, Serre Chevalier selon conditions

• **Prêt de sac à dos de montagne et kit secours (DVA, pelle, sonde)** sur demande

• **Forfait de remontées mécaniques en supplément** (non inclus dans le tarif)

• **Itinéraires adaptés au niveau du groupe** : combes sauvages, couloirs, forêts...`),

  programme: textToBlocks(`### Déroulement d'une journée Freerando

**8h30 – Rendez-vous** : Pied des pistes de la station choisie selon les conditions

**Brief sécurité** : Vérification du matériel (DVA, pelle, sonde) et briefing nivologique

**Premières descentes** : On profite des remontées pour enchaîner les plus belles lignes hors-piste

**Pause déjeuner** : Au sommet ou en terrasse, selon la météo

**Session après-midi** : On continue l'exploration avec de nouveaux itinéraires

**Retour vers 16h-17h** : Fin de journée après un dernier run

Cette formule permet d'enchaîner plusieurs descentes en hors-piste tout en bénéficiant des remontées mécaniques. Idéal pour progresser en ski toutes neiges et découvrir les spots secrets de nos stations !`),

  materiel: textToBlocks(`### Matériel nécessaire

• Skis freeride ou ski de randonnée (avec mode descente verrouillé)
• DVA, pelle, sonde (prêt possible)
• Sac à dos avec porte-skis
• Vêtements chauds et imperméables
• Lunettes/masque de ski
• Gants chauds
• Eau et vivres de course
• Crème solaire
• Forfait de remontées mécaniques (non inclus)`),

  budgetInclus: [
    'L\'encadrement par un guide professionnel',
    'Coaching technique freeride',
    'Le prêt de DVA, pelle, sonde si besoin',
    'Matériel de sécurité collectif'
  ],

  budgetNonInclus: [
    'Le forfait de remontées mécaniques',
    'La location de matériel',
    'Le repas du midi',
    'Les assurances',
    'Le transport jusqu\'à la station'
  ],

  faqs: [
    {
      question: 'Quel niveau de ski faut-il ?',
      answer: 'Il faut être à l\'aise sur pistes noires et en toutes neiges. Un bon niveau technique est requis pour profiter pleinement des itinéraires hors-piste.',
    },
    {
      question: 'Le forfait est-il inclus ?',
      answer: 'Non, le forfait de remontées mécaniques est en supplément et à votre charge.',
    },
    {
      question: 'Dans quelles stations ?',
      answer: 'Selon les conditions de neige : Vars, Les Orres, Crévoux, ou Serre Chevalier. Le choix est fait la veille en fonction de la météo et de l\'enneigement.',
    },
  ],

  seoTitle: 'Ski Hors-Piste & Freerando Hautes-Alpes | Guide Pro',
  seoDescription: 'Sessions ski hors-piste en station avec un guide diplômé. Vars, Les Orres, Serre Chevalier. Poudreuse et sensations garanties. 95€/pers.',
}

async function populateSejours() {
  console.log('🏔️ Peuplement des séjours journée...\n')

  try {
    console.log('1️⃣ Création/mise à jour : Journée Ski de Randonnée...')
    await client.createOrReplace(skiRandoJournee)
    console.log('   ✅ Ski de randonnée journée créé/mis à jour\n')

    console.log('2️⃣ Création/mise à jour : Journée Freerando & Hors-piste...')
    await client.createOrReplace(skiHorsPiste)
    console.log('   ✅ Freerando & Hors-piste créé/mis à jour\n')

    console.log('✨ SUCCÈS ! Les deux séjours sont maintenant 100% éditables dans Sanity.')
  } catch (error: any) {
    console.error('❌ Erreur:', error.message)
    process.exit(1)
  }
}

populateSejours().catch(console.error)
