import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import * as path from 'path'

// Charger les variables d'environnement depuis .env
dotenv.config({ path: path.join(__dirname, '..', '.env') })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: false,
  apiVersion: '2024-05-01',
  token: process.env.SANITY_API_TOKEN, // Token avec droits d'écriture
})

console.log('📡 Connexion à Sanity...')
console.log('  Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
console.log('  Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET)
console.log('  Token:', process.env.SANITY_API_TOKEN ? '✅ Présent' : '❌ Manquant')
console.log('')

const sejourSkiRandoJournee = {
  _type: 'sejour',
  _id: 'sejour-ski-rando-journee',
  title: 'Ski de randonnée journée Hautes Alpes',
  slug: {
    _type: 'slug',
    current: 'ski-randonnee-hautes-alpes-journee',
  },
  categorie: 'journee-ski-rando',
  massifs: ['queyras', 'ubaye', 'ecrins', 'claree'],
  niveauDefaut: 'intermediaire',
  duree: '1 jour',
  prixDefaut: 'À partir de 95€/pers',
  description: 'Une aventure en montagne accessible à la journée. Partez léger, découvrez le ski de randonnée et revenez le soir, sans contrainte logistique de refuge. Idéal pour s\'initier ou se perfectionner dans les massifs des Hautes-Alpes.',
  programme: [
    {
      _type: 'block',
      _key: 'prog1',
      style: 'h2',
      children: [{ _type: 'span', text: 'Programme d\'une journée type' }],
    },
    {
      _type: 'block',
      _key: 'prog2',
      style: 'h3',
      children: [{ _type: 'span', text: '8h30 - Rendez-vous' }],
    },
    {
      _type: 'block',
      _key: 'prog3',
      style: 'normal',
      children: [{ _type: 'span', text: 'Point de rencontre : Baratier (aire de covoiturage, rond-point des Orres)' }],
    },
    {
      _type: 'block',
      _key: 'prog4',
      style: 'h3',
      children: [{ _type: 'span', text: 'Matin' }],
    },
    {
      _type: 'block',
      _key: 'prog5',
      style: 'normal',
      children: [{ _type: 'span', text: '• Transport en minibus vers le site du jour\n• Brief équipement & sécurité avant le départ\n• Montée en peaux de phoque à votre rythme avec conseils techniques\n• Dénivelé : 700-1000 m' }],
    },
    {
      _type: 'block',
      _key: 'prog6',
      style: 'h3',
      children: [{ _type: 'span', text: 'Midi' }],
    },
    {
      _type: 'block',
      _key: 'prog7',
      style: 'normal',
      children: [{ _type: 'span', text: 'Pause pique-nique au sommet ou sur une crête panoramique' }],
    },
    {
      _type: 'block',
      _key: 'prog8',
      style: 'h3',
      children: [{ _type: 'span', text: 'Après-midi' }],
    },
    {
      _type: 'block',
      _key: 'prog9',
      style: 'normal',
      children: [{ _type: 'span', text: '• Descente encadrée avec coaching en neige naturelle\n• Retour en vallée entre 16h et 17h' }],
    },
    {
      _type: 'block',
      _key: 'prog10',
      style: 'h2',
      children: [{ _type: 'span', text: 'Les secteurs' }],
    },
    {
      _type: 'block',
      _key: 'prog11',
      style: 'normal',
      children: [{ _type: 'span', text: 'Les itinéraires se situent dans les Hautes-Alpes, incluant le Queyras, l\'Ubaye, l\'Embrunais, les Écrins, la Clarée et les secteurs autour du lac de Serre-Ponçon (Orres, Crévoux, Réallon).' }],
    },
  ],
  materiel: [
    {
      _type: 'block',
      _key: 'mat1',
      style: 'h2',
      children: [{ _type: 'span', text: 'Niveau et effort requis' }],
    },
    {
      _type: 'block',
      _key: 'mat2',
      style: 'normal',
      children: [{ _type: 'span', text: 'Niveau : Skieurs débrouillés à intermédiaires\nEffort : Modéré (700-1 000 m de dénivelé positif)' }],
    },
    {
      _type: 'block',
      _key: 'mat3',
      style: 'h2',
      children: [{ _type: 'span', text: 'Vêtements recommandés' }],
    },
    {
      _type: 'block',
      _key: 'mat4',
      style: 'normal',
      children: [{ _type: 'span', text: 'Système 3 couches : sous-vêtement technique, polaire ou softshell, veste imperméable Gore-Tex, pantalon respirant, gants, bonnet, lunettes cat. 3-4 et masque. Casque conseillé.' }],
    },
    {
      _type: 'block',
      _key: 'mat5',
      style: 'h2',
      children: [{ _type: 'span', text: 'Autres équipements' }],
    },
    {
      _type: 'block',
      _key: 'mat6',
      style: 'normal',
      children: [{ _type: 'span', text: '1,5L d\'eau minimum, pique-nique et vivres de course, crème solaire SPF 30+, pansements pour ampoules.' }],
    },
  ],
  materielInclus: [
    'DVA, pelle et sonde',
    'Sac à dos de montagne (30-35L)',
  ],
  materielNonInclus: [
    'Skis de randonnée avec fixations à insert',
    'Peaux de phoque en bon état',
    'Couteaux à neige adaptés',
    'Chaussures de ski débrayables',
    'Bâtons avec rondelles larges (~8 cm)',
    'Vêtements techniques (système 3 couches)',
    'Gants, bonnet, lunettes et masque',
    'Pique-nique et vivres personnels',
  ],
  infosPratiques: [
    {
      _type: 'block',
      _key: 'info1',
      style: 'h2',
      children: [{ _type: 'span', text: 'Rendez-vous' }],
    },
    {
      _type: 'block',
      _key: 'info2',
      style: 'normal',
      children: [{ _type: 'span', text: 'Lieu : Baratier - Aire de covoiturage au rond-point des Orres\nHeure : 8h30' }],
    },
    {
      _type: 'block',
      _key: 'info3',
      style: 'h2',
      children: [{ _type: 'span', text: 'Déroulement' }],
    },
    {
      _type: 'block',
      _key: 'info4',
      style: 'normal',
      children: [{ _type: 'span', text: 'Transport en minibus jusqu\'au départ de la sortie. Retour prévu entre 16h et 17h.' }],
    },
    {
      _type: 'block',
      _key: 'info5',
      style: 'h2',
      children: [{ _type: 'span', text: 'Contact' }],
    },
    {
      _type: 'block',
      _key: 'info6',
      style: 'normal',
      children: [{ _type: 'span', text: 'Toni : 06 73 45 84 34' }],
    },
  ],
  budget: [
    {
      _type: 'block',
      _key: 'bud1',
      style: 'h2',
      children: [{ _type: 'span', text: 'Tarif' }],
    },
    {
      _type: 'block',
      _key: 'bud2',
      style: 'normal',
      children: [{ _type: 'span', text: '95€ par personne en formule collective' }],
    },
    {
      _type: 'block',
      _key: 'bud3',
      style: 'h2',
      children: [{ _type: 'span', text: 'Niveau requis' }],
    },
    {
      _type: 'block',
      _key: 'bud4',
      style: 'normal',
      children: [{ _type: 'span', text: 'Skieurs débrouillés à intermédiaires' }],
    },
    {
      _type: 'block',
      _key: 'bud5',
      style: 'h2',
      children: [{ _type: 'span', text: 'Effort physique' }],
    },
    {
      _type: 'block',
      _key: 'bud6',
      style: 'normal',
      children: [{ _type: 'span', text: 'Modéré : 700-1 000 m de dénivelé positif' }],
    },
  ],
  budgetInclus: [
    'Encadrement professionnel par un moniteur diplômé d\'État',
    'Organisation et préparation complète',
    'Coaching technique ski',
    'Transport en minibus',
    'Prêt sac/DVA/pelle/sonde si nécessaire',
    'Matériel collectif de secours (radio VHF, GPS, trousse)',
  ],
  budgetNonInclus: [
    'Location matériel de ski de randonnée',
    'Transport jusqu\'au point de rendez-vous',
    'Assurances rapatriement/annulation',
    'Pique-nique et vivres personnels',
    'Dépenses personnelles',
  ],
  hideUpcomingSorties: false,
}

const sejourFreerandoJournee = {
  _type: 'sejour',
  _id: 'sejour-freerando-journee',
  title: 'Freerando et ski hors-piste journée',
  slug: {
    _type: 'slug',
    current: 'ski-hors-piste-station-hautes-alpes',
  },
  categorie: 'journee-freerando',
  massifs: ['ecrins', 'claree', 'queyras'],
  niveauDefaut: 'confirme',
  duree: '1 jour',
  prixDefaut: 'À partir de 95€/pers',
  description: 'La freerando fusionne le freeride et le ski de randonnée. Profitez des remontées mécaniques pour accéder à des zones non tracées, peu fréquentées, souvent en neige poudreuse. L\'option idéale pour les skieurs experts cherchant les sensations fortes sans les longues ascensions.',
  programme: [
    {
      _type: 'block',
      _key: 'fprog1',
      style: 'h2',
      children: [{ _type: 'span', text: 'Programme d\'une journée type' }],
    },
    {
      _type: 'block',
      _key: 'fprog2',
      style: 'h3',
      children: [{ _type: 'span', text: '8h30 - Rendez-vous' }],
    },
    {
      _type: 'block',
      _key: 'fprog3',
      style: 'normal',
      children: [{ _type: 'span', text: 'Point de rencontre : Baratier (aire de covoiturage, rond-point des Orres)' }],
    },
    {
      _type: 'block',
      _key: 'fprog4',
      style: 'h3',
      children: [{ _type: 'span', text: 'Matin' }],
    },
    {
      _type: 'block',
      _key: 'fprog5',
      style: 'normal',
      children: [{ _type: 'span', text: '• Transport en minibus vers la station du jour (Les Orres, Vars, Crévoux, Ceillac ou Abriès)\n• Brief sécurité et vérification équipement\n• Premier run : Descente hors-piste depuis les remontées mécaniques' }],
    },
    {
      _type: 'block',
      _key: 'fprog6',
      style: 'h3',
      children: [{ _type: 'span', text: 'Milieu de journée' }],
    },
    {
      _type: 'block',
      _key: 'fprog7',
      style: 'normal',
      children: [{ _type: 'span', text: '• Montée en peaux de phoque : environ 500-700 m D+\n• Pique-nique au sommet avec vue panoramique' }],
    },
    {
      _type: 'block',
      _key: 'fprog8',
      style: 'h3',
      children: [{ _type: 'span', text: 'Après-midi' }],
    },
    {
      _type: 'block',
      _key: 'fprog9',
      style: 'normal',
      children: [{ _type: 'span', text: '• Descente finale de 1000 m avec coaching technique\n• Retour en vallée entre 16h et 17h' }],
    },
    {
      _type: 'block',
      _key: 'fprog10',
      style: 'h2',
      children: [{ _type: 'span', text: 'Les secteurs' }],
    },
    {
      _type: 'block',
      _key: 'fprog11',
      style: 'normal',
      children: [{ _type: 'span', text: 'Les Orres, Vars, Crévoux, Ceillac, Abriès' }],
    },
    {
      _type: 'block',
      _key: 'fprog12',
      style: 'h2',
      children: [{ _type: 'span', text: 'Dénivelé' }],
    },
    {
      _type: 'block',
      _key: 'fprog13',
      style: 'normal',
      children: [{ _type: 'span', text: 'Montée : 400-700 m positif\nDescente : ~1600 m au total' }],
    },
  ],
  materiel: [
    {
      _type: 'block',
      _key: 'fmat1',
      style: 'h2',
      children: [{ _type: 'span', text: 'Niveau et effort requis' }],
    },
    {
      _type: 'block',
      _key: 'fmat2',
      style: 'normal',
      children: [{ _type: 'span', text: 'Niveau : Skieurs confirmés à experts\nEffort : 400-700 m de dénivelé positif\n\nPublic idéal : Skieurs confirmés recherchant pentes vierges et sensations sans engagement long. Format parfait pour une journée intensive ou un week-end entre passionnés.' }],
    },
    {
      _type: 'block',
      _key: 'fmat3',
      style: 'h2',
      children: [{ _type: 'span', text: 'Vêtements recommandés' }],
    },
    {
      _type: 'block',
      _key: 'fmat4',
      style: 'normal',
      children: [{ _type: 'span', text: 'Système 3-4 couches : pantalon de ski respirant, veste Gore-Tex imperméable, couches thermiques, gants, bonnet, masque/lunettes (cat. 3-4), crème solaire SPF 30+. Casque conseillé.' }],
    },
    {
      _type: 'block',
      _key: 'fmat5',
      style: 'h2',
      children: [{ _type: 'span', text: 'Autres équipements' }],
    },
    {
      _type: 'block',
      _key: 'fmat6',
      style: 'normal',
      children: [{ _type: 'span', text: '1,5L d\'eau minimum, pique-nique et vivres de course.' }],
    },
  ],
  materielInclus: [
    'Pack secours complet (DVA, pelle, sonde)',
    'Sac à dos de montagne (30-35L)',
    'Matériel collectif de sécurité (radio VHF, GPS, trousse)',
  ],
  materielNonInclus: [
    'Skis de randonnée avec fixations insert',
    'Peaux de phoque en bon état',
    'Chaussures de ski débrayables',
    'Bâtons avec rondelles larges (~8 cm)',
    'Vêtements techniques (système 3-4 couches)',
    'Gants, bonnet, lunettes et masque',
    'Pique-nique et vivres personnels',
  ],
  infosPratiques: [
    {
      _type: 'block',
      _key: 'finfo1',
      style: 'h2',
      children: [{ _type: 'span', text: 'Rendez-vous' }],
    },
    {
      _type: 'block',
      _key: 'finfo2',
      style: 'normal',
      children: [{ _type: 'span', text: 'Lieu : Baratier - Aire de covoiturage au rond-point des Orres\nHeure : 8h30' }],
    },
    {
      _type: 'block',
      _key: 'finfo3',
      style: 'h2',
      children: [{ _type: 'span', text: 'Déroulement' }],
    },
    {
      _type: 'block',
      _key: 'finfo4',
      style: 'normal',
      children: [{ _type: 'span', text: 'Transport en minibus jusqu\'à la station. Retour prévu entre 16h et 17h.' }],
    },
    {
      _type: 'block',
      _key: 'finfo5',
      style: 'h2',
      children: [{ _type: 'span', text: 'Assurances recommandées' }],
    },
    {
      _type: 'block',
      _key: 'finfo6',
      style: 'normal',
      children: [{ _type: 'span', text: 'Annulation : Option "Impact Évasion" proposée à la réservation\nSecours/Rapatriement : Option "Impact Multisports" obligatoire\nResponsabilité civile : À votre charge' }],
    },
    {
      _type: 'block',
      _key: 'finfo7',
      style: 'h2',
      children: [{ _type: 'span', text: 'Contact' }],
    },
    {
      _type: 'block',
      _key: 'finfo8',
      style: 'normal',
      children: [{ _type: 'span', text: 'Toni : 06 73 45 84 34' }],
    },
  ],
  budget: [
    {
      _type: 'block',
      _key: 'fbud1',
      style: 'h2',
      children: [{ _type: 'span', text: 'Tarif' }],
    },
    {
      _type: 'block',
      _key: 'fbud2',
      style: 'normal',
      children: [{ _type: 'span', text: '95€ par personne en formule collective' }],
    },
    {
      _type: 'block',
      _key: 'fbud3',
      style: 'h2',
      children: [{ _type: 'span', text: 'Niveau requis' }],
    },
    {
      _type: 'block',
      _key: 'fbud4',
      style: 'normal',
      children: [{ _type: 'span', text: 'Skieurs confirmés à experts' }],
    },
    {
      _type: 'block',
      _key: 'fbud5',
      style: 'h2',
      children: [{ _type: 'span', text: 'Effort physique' }],
    },
    {
      _type: 'block',
      _key: 'fbud6',
      style: 'normal',
      children: [{ _type: 'span', text: '400-700 m de dénivelé positif | 1600 m de descente totale' }],
    },
  ],
  budgetInclus: [
    'Encadrement moniteur diplômé d\'État',
    'Organisation et préparation',
    'Coaching technique ski toutes neiges',
    'Transport en minibus',
    'Prêt équipement sécurité (DVA, pelle, sonde)',
    'Matériel collectif de secours',
  ],
  budgetNonInclus: [
    'Location matériel de ski de randonnée',
    'Forfait remontées mécaniques',
    'Transport jusqu\'au point de rendez-vous',
    'Assurances rapatriement/annulation',
    'Pique-nique et vivres personnels',
    'Dépenses personnelles',
  ],
  hideUpcomingSorties: false,
}

async function importSejours() {
  try {
    console.log('🚀 Import des séjours journée...\n')

    console.log('📝 Création du séjour "Ski de randonnée journée"...')
    const skiRando = await client.createOrReplace(sejourSkiRandoJournee)
    console.log('✅ Séjour ski de rando créé avec ID:', skiRando._id)

    console.log('\n📝 Création du séjour "Freerando journée"...')
    const freerando = await client.createOrReplace(sejourFreerandoJournee)
    console.log('✅ Séjour freerando créé avec ID:', freerando._id)

    console.log('\n🎉 Import terminé avec succès!')
    console.log('\n📌 Prochaines étapes:')
    console.log('1. Va dans Sanity Studio → "Catalogue des Séjours"')
    console.log('2. Upload les images pour chaque séjour')
    console.log('3. Publie les deux séjours')
    console.log('4. Crée des "Dates & Départs" pour ces séjours\n')
  } catch (error) {
    console.error('❌ Erreur lors de l\'import:', error)
  }
}

importSejours()
