const fs = require('fs');

const scrapedData = JSON.parse(fs.readFileSync('scripts/scraped_evasionski_content.json', 'utf8'));

const scrapedToNewSlugMap = {
  'engagement-prive': 'ski-de-randonnee-engagement-prive',
  'ski-rando-journee': 'ski-randonnee-hautes-alpes-journee',
  'freerando-journee': 'ski-hors-piste-station-hautes-alpes',
  'stage-freerando-les-orres': 'stage-de-ski-freerando-les-orres-crevoux',
  'queyras-5-jours': 'ski-de-randonnee-queyras-decouverte',
  'claree-3-jours': 'ski-de-randonnee-en-claree',
  'ubaye-3-jours': 'raid-ski-randonnee-ubaye',
  'norvege-voyage': 'ski-randonnee-norvege-alpes-lyngen'
};

const processed = {};

scrapedData.forEach((item) => {
  const newSlug = scrapedToNewSlugMap[item.slug];
  if (!newSlug) return;

  console.log(`Processing: ${item.slug} -> ${newSlug}`);

  const faqs = [];
  let intro = '';
  let essentiel = '';
  let programme = '';
  let materiel = '';
  let inclus = '';

  let currentSection = 'intro'; // intro, faq, essentiel, programme, materiel, inclus

  for (let i = 0; i < item.textBlocks.length; i++) {
    const block = item.textBlocks[i];
    const text = block.text.trim();
    if (!text) continue;

    const lowerText = text.toLowerCase();

    // Determine section transitions
    if (lowerText.includes('tout savoir avant de réserver')) {
      currentSection = 'essentiel';
      continue;
    } else if (lowerText.startsWith('programme type') || lowerText.startsWith('une journée type') || lowerText.startsWith('une jounée type')) {
      currentSection = 'programme';
      programme += `### ${text}\n\n`;
      continue;
    } else if (lowerText.startsWith('1 - matériel') || lowerText.startsWith('1- matériel') || lowerText.startsWith('matériel fourni')) {
      currentSection = 'materiel';
    } else if (lowerText.startsWith('le prix affiché comprend') || lowerText.startsWith('le tarif comprend')) {
      currentSection = 'inclus';
      inclus += `### ${text}\n\n`;
      continue;
    } else if (lowerText.startsWith('le prix affiché ne comprend pas') || lowerText.startsWith('le tarif ne comprend pas')) {
      currentSection = 'inclus';
      inclus += `### ${text}\n\n`;
      continue;
    }

    // Handle H3 questions as FAQs if in intro/faq phase
    if (block.tag === 'h3' && (currentSection === 'intro' || currentSection === 'faq') && 
        (text.includes('?') || text.startsWith('Où') || text.startsWith('Comment') || text.startsWith('Quelles') || text.startsWith('Quels') || text.startsWith('À qui') || text.startsWith('A qui') || text.startsWith('Qu\'est-ce') || text.startsWith('Est-ce'))) {
      currentSection = 'faq';
      // Find answer
      let answer = '';
      let j = i + 1;
      while (j < item.textBlocks.length) {
        const nextBlock = item.textBlocks[j];
        const nextText = nextBlock.text.trim();
        if (nextBlock.tag === 'h3' || nextText.toLowerCase().includes('tout savoir avant de réserver') || nextText.toLowerCase().startsWith('programme type') || nextText.toLowerCase().startsWith('une journée type')) {
          break;
        }
        if (['p', 'div'].includes(nextBlock.tag)) {
          // avoid duplicate answers
          if (!answer.includes(nextText)) {
            answer += (answer ? '\n\n' : '') + nextText;
          }
        }
        j++;
      }
      if (answer && answer.trim().length > 5) {
        faqs.push({ question: text, answer: answer.trim() });
      }
      i = j - 1; // skip processed answer blocks
      continue;
    }

    // Append text to current section
    if (currentSection === 'intro') {
      if (block.tag === 'h2') {
        intro += `## ${text}\n\n`;
      } else {
        if (!intro.includes(text)) {
          intro += `${text}\n\n`;
        }
      }
    } else if (currentSection === 'essentiel') {
      if (block.tag === 'h3') {
        essentiel += `• **${text}**\n\n`;
      } else {
        if (!essentiel.includes(text)) {
          essentiel += `${text}\n\n`;
        }
      }
    } else if (currentSection === 'programme') {
      if (block.tag.startsWith('h')) {
        programme += `### ${text}\n\n`;
      } else {
        if (!programme.includes(text)) {
          programme += `${text}\n\n`;
        }
      }
    } else if (currentSection === 'materiel') {
      if (block.tag.startsWith('h')) {
        materiel += `### ${text}\n\n`;
      } else {
        if (!materiel.includes(text)) {
          materiel += `${text}\n\n`;
        }
      }
    } else if (currentSection === 'inclus') {
      if (block.tag.startsWith('h')) {
        inclus += `### ${text}\n\n`;
      } else {
        if (!inclus.includes(text)) {
          inclus += `${text}\n\n`;
        }
      }
    }
  }

  // Deduplicate FAQs
  const uniqueFaqs = [];
  const seenFaqs = new Set();
  faqs.forEach(f => {
    if (!seenFaqs.has(f.question)) {
      seenFaqs.add(f.question);
      uniqueFaqs.push(f);
    }
  });

  processed[newSlug] = {
    title: item.title,
    description: intro.split('\n\n')[0] || '',
    intro: intro.trim(),
    faqs: uniqueFaqs,
    essentiel: essentiel.trim(),
    programme: programme.trim(),
    materiel: materiel.trim(),
    inclus: inclus.trim()
  };
});

fs.writeFileSync('scripts/parsed_data_result.json', JSON.stringify(processed, null, 2));
console.log('Done! Output written to scripts/parsed_data_result.json');
