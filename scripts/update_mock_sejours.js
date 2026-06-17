const fs = require('fs');

const scrapedData = JSON.parse(fs.readFileSync('scripts/scraped_evasionski_content.json', 'utf8'));
const parsedData = JSON.parse(fs.readFileSync('scripts/parsed_data_result.json', 'utf8'));

// Stays metadata specifically for mockSejours (like subCategory)
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
    subCategory: "les-orres-crevoux",
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
    subCategory: "queyras",
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
    subCategory: "claree",
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
    subCategory: "ubaye",
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
    subCategory: "norvege",
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

const mockDataPath = 'src/sanity/lib/mockData.ts';
let content = fs.readFileSync(mockDataPath, 'utf8');

// Build the mockSejours array string representation
let newMockSejoursStr = `export const mockSejours = [\n`;

function escapeJS(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${');
}

Object.keys(sejoursMeta).forEach(slug => {
  const meta = sejoursMeta[slug];
  const parsed = parsedData[slug];

  newMockSejoursStr += `  {\n`;
  newMockSejoursStr += `    title: "${escapeJS(parsed.title).replace(/\r?\n/g, ' ')}",\n`;
  newMockSejoursStr += `    slug: "${slug}",\n`;
  newMockSejoursStr += `    activityType: "${meta.activityType}",\n`;
  if (meta.subCategory) {
    newMockSejoursStr += `    subCategory: "${meta.subCategory}",\n`;
  }
  newMockSejoursStr += `    massif: "${meta.massif}",\n`;
  newMockSejoursStr += `    level: "${meta.level}",\n`;
  newMockSejoursStr += `    season: "${meta.season}",\n`;
  newMockSejoursStr += `    duration: "${meta.duration}",\n`;
  newMockSejoursStr += `    basePrice: "${meta.basePrice}",\n`;
  newMockSejoursStr += `    priceEncadrement: "${meta.priceEncadrement}",\n`;
  newMockSejoursStr += `    priceFraisSejour: "${meta.priceFraisSejour || ''}",\n`;
  newMockSejoursStr += `    image: "${meta.image}",\n`;
  newMockSejoursStr += `    intro: textToBlocks(\`${escapeJS(parsed.intro)}\`),\n`;
  newMockSejoursStr += `    description: \`${escapeJS(parsed.description)}\`,\n`;
  newMockSejoursStr += `    essentiel: textToBlocks(\`${escapeJS(parsed.essentiel)}\`),\n`;
  newMockSejoursStr += `    programme: textToBlocks(\`${escapeJS(parsed.programme)}\`),\n`;
  newMockSejoursStr += `    materiel: textToBlocks(\`${escapeJS(parsed.materiel)}\`),\n`;
  newMockSejoursStr += `    inclus: textToBlocks(\`${escapeJS(parsed.inclus)}\`),\n`;
  newMockSejoursStr += `    gallery: ${JSON.stringify(meta.gallery, null, 4)},\n`;
  newMockSejoursStr += `    faqs: ${JSON.stringify(parsed.faqs, null, 4)}\n`;
  newMockSejoursStr += `  },\n`;
});

newMockSejoursStr += `];`;

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

// Inject stagesRaidsFaqs into mockActivities in content string
// Find where stages-et-raids-a-ski-de-randonnee-hautes-alpes is inside mockActivities
const activitySlugPattern = 'slug: "stages-et-raids-a-ski-de-randonnee-hautes-alpes"';
const activityIndex = content.indexOf(activitySlugPattern);

if (activityIndex !== -1) {
  // Let's locate the closing brace of this activity object
  // We can search for the next closing brace at the start of a line or near keyPoints
  const searchSection = content.substring(activityIndex, activityIndex + 800);
  const nextActivityEnd = searchSection.indexOf('univers: [');
  
  if (nextActivityEnd !== -1) {
    const insertPosition = activityIndex + nextActivityEnd;
    const faqsStr = `faqs: ${JSON.stringify(stagesRaidsFaqs, null, 4)},\n    `;
    content = content.substring(0, insertPosition) + faqsStr + content.substring(insertPosition);
  }
}

// Regex replacement for mockSejours array
const startPattern = 'export const mockSejours = [';
const endPattern = 'export const mockSorties = [';

const startIndex = content.indexOf(startPattern);
const endIndex = content.indexOf(endPattern);

if (startIndex === -1 || endIndex === -1) {
  console.error('Failed to locate mockSejours or mockSorties patterns in mockData.ts');
  process.exit(1);
}

const before = content.substring(0, startIndex);
const after = content.substring(endIndex);

const updatedContent = before + newMockSejoursStr + '\n\n' + after;
fs.writeFileSync(mockDataPath, updatedContent);
console.log('Successfully updated mockData.ts with new stayed content and activity FAQs!');
