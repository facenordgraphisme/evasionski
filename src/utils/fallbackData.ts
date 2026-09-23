/**
 * Fallback data minimal - Utilisé uniquement si Sanity est inaccessible
 * Avec CDN + ISR activés, ces fallbacks ne devraient jamais être utilisés
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

// Structure minimale pour éviter les erreurs de mapping
// Le contenu réel vient de Sanity via CDN (cache illimité)
export const fallbackSejours: Record<string, any> = {
  "ski-randonnee-hautes-alpes-journee": {
    title: "Ski de randonnée journée - Hautes-Alpes",
    slug: "ski-randonnee-hautes-alpes-journee",
    categorie: "journee-ski-rando",
    massif: "Hautes-Alpes",
    level: "debutant",
    duration: "1 jour",
    basePrice: 95,
    image: "/photos/DSC_6701.jpg",
    description: "Contenu temporairement indisponible. Rechargez la page.",
    intro: [],
    essentiel: [],
    programme: [],
    materiel: [],
    inclus: [],
    faqs: [],
  },
  "ski-hors-piste-station-hautes-alpes": {
    title: "Ski hors-piste en station - Hautes-Alpes",
    slug: "ski-hors-piste-station-hautes-alpes",
    categorie: "journee-freerando",
    massif: "Hautes-Alpes",
    level: "intermediaire",
    duration: "1 jour",
    basePrice: 95,
    image: "/photos/DSC_6612.jpg",
    description: "Contenu temporairement indisponible. Rechargez la page.",
    intro: [],
    essentiel: [],
    programme: [],
    materiel: [],
    inclus: [],
    faqs: [],
  },
};

export const fallbackActivities = [
  {
    title: "Contenu temporairement indisponible",
    slug: "",
    description: "Rechargez la page",
    price: "",
    image: "/images/hero.jpg",
  },
];
