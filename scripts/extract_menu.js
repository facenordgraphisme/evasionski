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
    const menuLinks = [];
    
    // Find all links in menu headers
    $('ul.nav-menu a, .main-navigation a, header a, nav a').each((i, el) => {
      const href = $(el).attr('href');
      const text = $(el).text().trim();
      if (href && href.startsWith('http')) {
        menuLinks.push({ text, href });
      }
    });

    // Deduplicate
    const uniqueLinks = [];
    const seen = new Set();
    for (const item of menuLinks) {
      const key = `${item.text}-${item.href}`;
      if (!seen.has(key)) {
        seen.add(key);
        uniqueLinks.push(item);
      }
    }

    console.log(JSON.stringify(uniqueLinks, null, 2));
  } catch (err) {
    console.error(err);
  }
}

run();
