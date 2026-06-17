const axios = require('axios');
const cheerio = require('cheerio');

async function run() {
  try {
    const res = await axios.get('https://evasionski.fr/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    const $ = cheerio.load(res.data);
    
    console.log('=== TITLE ===');
    console.log($('title').text().trim());

    console.log('\n=== HEADINGS ===');
    $('h1, h2, h3, h4, h5').each((i, el) => {
      console.log(`${el.tagName.toUpperCase()}: ${$(el).text().trim()}`);
    });

    console.log('\n=== SECTIONS CONTENT ===');
    // Let's dump all text blocks
    $('.elementor-widget-text-editor, .elementor-heading-title, p').each((i, el) => {
      const text = $(el).text().trim();
      if (text.length > 30) {
        console.log(`- ${text.substring(0, 150)}...`);
      }
    });
  } catch (err) {
    console.error(err);
  }
}

run();
