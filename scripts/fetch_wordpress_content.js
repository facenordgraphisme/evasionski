const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

// Disable TLS reject to 0 for downloading over HTTPS
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const urls = [
  { slug: 'home', url: 'https://evasionski.fr/' },
  { slug: 'engagement-prive', url: 'https://evasionski.fr/ski-de-randonnee-engagement-prive/' },
  { slug: 'ski-rando-journee', url: 'https://evasionski.fr/ski-randonnee-hautes-alpes-journee/' },
  { slug: 'freerando-journee', url: 'https://evasionski.fr/ski-hors-piste-station-hautes-alpes/' },
  { slug: 'stages-raids', url: 'https://evasionski.fr/stages-et-raids-a-ski-de-randonnee-hautes-alpes/' },
  { slug: 'stage-freerando-les-orres', url: 'https://evasionski.fr/stage-de-ski-freerando-les-orres-crevoux/' },
  { slug: 'queyras-5-jours', url: 'https://evasionski.fr/ski-de-randonnee-queyras-decouverte/' },
  { slug: 'claree-3-jours', url: 'https://evasionski.fr/ski-de-randonnee-en-claree/' },
  { slug: 'ubaye-3-jours', url: 'https://evasionski.fr/raid-ski-randonnee-ubaye/' },
  { slug: 'norvege-voyage', url: 'https://evasionski.fr/ski-randonnee-norvege-alpes-lyngen/' },
  { slug: 'a-propos', url: 'https://evasionski.fr/a-propos-moniteur-de-ski-de-randonnee/' },
  { slug: 'niveau-ski', url: 'https://evasionski.fr/niveau-en-ski/' }
];

async function fetchPageContent(page) {
  try {
    console.log(`Fetching content for ${page.slug} (${page.url})...`);
    const response = await axios.get(page.url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    const $ = cheerio.load(response.data);

    // Clean up unwanted tags (scripts, styles, iframe, etc.)
    $('script').remove();
    $('style').remove();
    $('iframe').remove();
    $('noscript').remove();

    const title = $('h1').first().text().trim() || $('title').text().trim();
    
    // In WordPress Elementor, the main content is usually inside .entry-content or .elementor
    let contentHtml = '';
    const mainContent = $('.entry-content, .elementor-534, .elementor-kit-522, main').first();
    if (mainContent.length > 0) {
      contentHtml = mainContent.html();
    } else {
      contentHtml = $('body').html();
    }

    // Extract text blocks and lists
    const textBlocks = [];
    $('.elementor-widget-text-editor, p, h2, h3, h4').each((i, el) => {
      const tag = el.tagName.toLowerCase();
      const text = $(el).text().trim();
      if (text.length > 15) {
        textBlocks.push({ tag, text });
      }
    });

    // Extract images
    const images = [];
    $('img').each((i, el) => {
      const src = $(el).attr('src');
      const alt = $(el).attr('alt') || '';
      if (src && src.startsWith('http') && !src.includes('logo') && !src.includes('avatar')) {
        images.push({ src, alt });
      }
    });

    return {
      slug: page.slug,
      url: page.url,
      title,
      textBlocks,
      images: [...new Set(images.map(img => JSON.stringify(img)))].map(s => JSON.parse(s))
    };
  } catch (error) {
    console.error(`Error fetching page ${page.slug}:`, error.message);
    return { slug: page.slug, url: page.url, error: error.message };
  }
}

async function run() {
  const scrapedData = [];
  for (const page of urls) {
    const data = await fetchPageContent(page);
    scrapedData.push(data);
    // brief delay to be polite
    await new Promise(r => setTimeout(r, 1000));
  }

  const destPath = path.join(__dirname, 'scraped_evasionski_content.json');
  fs.writeFileSync(destPath, JSON.stringify(scrapedData, null, 2), 'utf8');
  console.log(`Finished scraping! Content saved to ${destPath}`);
}

run();
