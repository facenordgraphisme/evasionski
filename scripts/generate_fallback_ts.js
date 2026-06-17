const fs = require('fs');

const scrapedData = JSON.parse(fs.readFileSync('scripts/scraped_evasionski_content.json', 'utf8'));
const parsedData = JSON.parse(fs.readFileSync('scripts/parsed_data_result.json', 'utf8'));

// Base metadata for stays
const sejoursMeta = {
  "ski-de-randonnee-engagement-prive": {
    activityType: "ski-de-randonnee-engagement-prive",
    massif: "Hautes-Alpes / Ubaye / Queyras / Écrins / Norvège",
    level: "debutant",
    season: "hiver",
    duration: "À la carte",
    basePrice: "400€/jour",
    priceEncadrement: "400€/jour",
    priceFraisSejour: "450€ à 480€/jour selon groupe",
    image: "/images/hero.jpg",
    gallery: []
  },
  "ski-randonnee-hautes-alpes-journee": {
    activityType: "ski-randonnee-hautes-alpes-journee",
    massif: "Queyras / Ubaye / Embrunais / Écrins",
    level: "intermediaire",
    season: "hiver",
    duration: "1 jour",
    basePrice: "95€",
    priceEncadrement: "95€/pers",
    image: "/photos/DSC_6701.jpg",
    gallery: []
  },
  "ski-hors-piste-station-hautes-alpes": {
    activityType: "ski-hors-piste-station-hautes-alpes",
    massif: "Les Orres / Crévoux / Vars",
    level: "confirme",
    season: "hiver",
    duration: "1 jour",
    basePrice: "95€",
    priceEncadrement: "95€/pers",
    image: "/photos/DSC_6612.jpg",
    gallery: []
  },
  "stage-de-ski-freerando-les-orres-crevoux": {
    activityType: "stages-et-raids-a-ski-de-randonnee-hautes-alpes",
    massif: "Embrunais / Parpaillon",
    level: "intermediaire",
    season: "hiver",
    duration: "3 jours",
    basePrice: "380€",
    priceEncadrement: "240€/pers",
    priceFraisSejour: "140€/pers",
    image: "/images/freerando_les_orres.jpg",
    gallery: [{ url: "/images/freerando_les_orres.jpg", alt: "Freerando" }]
  },
  "ski-de-randonnee-queyras-decouverte": {
    activityType: "stages-et-raids-a-ski-de-randonnee-hautes-alpes",
    massif: "Queyras",
    level: "intermediaire",
    season: "hiver",
    duration: "5 jours",
    basePrice: "620€",
    priceEncadrement: "400€/pers",
    priceFraisSejour: "220€/pers",
    image: "/images/queyras.jpg",
    gallery: [{ url: "/images/queyras.jpg", alt: "Queyras" }]
  },
  "ski-de-randonnee-en-claree": {
    activityType: "stages-et-raids-a-ski-de-randonnee-hautes-alpes",
    massif: "Cerces / Clarée",
    level: "intermediaire",
    season: "hiver",
    duration: "3 jours",
    basePrice: "390€",
    priceEncadrement: "260€/pers",
    priceFraisSejour: "130€/pers",
    image: "/images/claree.jpg",
    gallery: [{ url: "/images/claree.jpg", alt: "Clarée" }]
  },
  "raid-ski-randonnee-ubaye": {
    activityType: "stages-et-raids-a-ski-de-randonnee-hautes-alpes",
    massif: "Ubaye",
    level: "confirme",
    season: "hiver",
    duration: "3 jours",
    basePrice: "410€",
    priceEncadrement: "270€/pers",
    priceFraisSejour: "140€/pers",
    image: "/images/ubaye.jpg",
    gallery: []
  },
  "ski-randonnee-norvege-alpes-lyngen": {
    activityType: "stages-et-raids-a-ski-de-randonnee-hautes-alpes",
    massif: "Alpes de Lyngen (Norvège)",
    level: "intermediaire",
    season: "hiver",
    duration: "8 jours",
    basePrice: "1690€",
    priceEncadrement: "1290€/pers",
    priceFraisSejour: "400€/pers",
    image: "/images/norvege.jpg",
    gallery: []
  }
};

let tsContent = `export function textToBlocks(text: string): any[] {
  if (!text) return [];
  return text.split('\\n\\n').map((paragraph, index) => {
    const isHeading = paragraph.startsWith('### ') || 
                      paragraph.startsWith('## ') ||
                      paragraph.startsWith('• ') ||
                      paragraph.startsWith('Où ') || 
                      paragraph.startsWith('Quelles ') || 
                      paragraph.startsWith('Quels ') || 
                      paragraph.startsWith('Tarif') || 
                      paragraph.startsWith('Matériel') || 
                      paragraph.startsWith('Tenue') || 
                      paragraph.startsWith('Assurance') || 
                      paragraph.startsWith('Mon conseil') || 
                      paragraph.startsWith('Une journée type');
    
    if (isHeading) {
      const cleanText = paragraph.replace('### ', '').replace('## ', '').replace('• ', '');
      let style = 'h3';
      if (paragraph.startsWith('## ')) {
        style = 'h2';
      } else if (paragraph.startsWith('• ')) {
        style = 'normal'; // bullet styling
      }
      return {
        _key: \`p-\${index}\`,
        _type: 'block',
        style: style,
        children: [{ _type: 'span', _key: \`s-\${index}\`, text: cleanText }]
      };
    }
    
    return {
      _key: \`p-\${index}\`,
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', _key: \`s-\${index}\`, text: paragraph }]
    };
  });
}

// 1. Core Services & Trips Fallbacks
export const fallbackSejours: Record<string, any> = {
`;

function escapeJS(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${');
}

Object.keys(sejoursMeta).forEach(slug => {
  const meta = sejoursMeta[slug];
  const parsed = parsedData[slug];

  if (!parsed) {
    console.error(`Missing parsed data for ${slug}`);
    return;
  }

  tsContent += `  "${slug}": {
    title: "${escapeJS(parsed.title).replace(/\r?\n/g, ' ')}",
    slug: "${slug}",
    activityType: "${meta.activityType}",
    massif: "${meta.massif}",
    level: "${meta.level}",
    season: "${meta.season}",
    duration: "${meta.duration}",
    basePrice: "${meta.basePrice}",
    priceEncadrement: "${meta.priceEncadrement}",
    priceFraisSejour: "${meta.priceFraisSejour || ''}",
    image: "${meta.image}",
    intro: textToBlocks(\`${escapeJS(parsed.intro)}\`),
    description: \`${escapeJS(parsed.description)}\`,
    essentiel: textToBlocks(\`${escapeJS(parsed.essentiel)}\`),
    programme: textToBlocks(\`${escapeJS(parsed.programme)}\`),
    materiel: textToBlocks(\`${escapeJS(parsed.materiel)}\`),
    inclus: textToBlocks(\`${escapeJS(parsed.inclus)}\`),
    gallery: ${JSON.stringify(meta.gallery, null, 4)},
    faqs: ${JSON.stringify(parsed.faqs, null, 4)}
  },
`;
});

tsContent += `};

// 2. Activity Category Fallback
`;

// Extract stages-raids category FAQs
const stagesRaidsScraped = scrapedData.find(item => item.slug === 'stages-raids');
const stagesRaidsFaqs = [];
if (stagesRaidsScraped) {
  const seenFaqs = new Set();
  for (let i = 0; i < stagesRaidsScraped.textBlocks.length; i++) {
    const block = stagesRaidsScraped.textBlocks[i];
    const text = block.text.trim();
    if (block.tag === 'h3' && (text.includes('?') || text.startsWith('Comment') || text.startsWith('Quelles') || text.startsWith('À qui') || text.startsWith('Comment'))) {
      let answer = '';
      let j = i + 1;
      while (j < stagesRaidsScraped.textBlocks.length && ['p', 'div'].includes(stagesRaidsScraped.textBlocks[j].tag)) {
        if (!answer.includes(stagesRaidsScraped.textBlocks[j].text)) {
          answer += (answer ? '\n\n' : '') + stagesRaidsScraped.textBlocks[j].text.trim();
        }
        j++;
      }
      if (answer && answer.length > 5 && !seenFaqs.has(text)) {
        seenFaqs.add(text);
        stagesRaidsFaqs.push({ question: text, answer });
      }
      i = j - 1;
    }
  }
}

tsContent += `export const fallbackActivities: Record<string, any> = {
  "stages-et-raids-a-ski-de-randonnee-hautes-alpes": {
    title: "Stages et raids à ski de rando",
    slug: "stages-et-raids-a-ski-de-randonnee-hautes-alpes",
    subtitle: "Séjours itinérants de plusieurs jours",
    intro: "L'immersion totale en montagne. De refuge en gîte, vivez des raids à ski d'exception.",
    description: "Vivez l'itinérance à ski à travers les plus beaux massifs alpins et internationaux.",
    image: "/images/stages_raids_hub.jpg",
    price: "À partir de 380€",
    period: "Janvier à Mai",
    location: "Queyras, Clarée, Ubaye, Norvège",
    keyPoints: [
      { title: "Itinérance", description: "Changer de gîte ou de refuge chaque jour." },
      { title: "Dépassement", description: "Une aventure sportive et humaine inoubliable." },
      { title: "Convivialité", description: "En petits groupes pour privilégier la sécurité et le partage." }
    ],
    faqs: ${JSON.stringify(stagesRaidsFaqs, null, 4)}
  }
};
`;

fs.writeFileSync('src/utils/fallbackData.ts', tsContent);
console.log('Successfully wrote fallbackData.ts');
