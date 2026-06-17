const axios = require('axios');
const cheerio = require('cheerio');

// Set TLS reject to 0 for local HTTPS if needed
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

async function checkPage(page) {
  try {
    const response = await axios.get(page.url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    const $ = cheerio.load(response.data);
    const videos = [];

    // Check video tags
    $('video').each((i, el) => {
      const src = $(el).attr('src');
      if (src) videos.push({ tag: 'video', src });
      
      $(el).find('source').each((j, sel) => {
        const ssrc = $(sel).attr('src');
        if (ssrc) videos.push({ tag: 'source', src: ssrc });
      });
    });

    // Check data-vide-bg attributes (often used by jquery.vide)
    $('[data-vide-bg]').each((i, el) => {
      const bg = $(el).attr('data-vide-bg');
      videos.push({ tag: 'data-vide-bg', src: bg });
    });

    // Check elementor video backgrounds
    $('[data-settings]').each((i, el) => {
      const settingsStr = $(el).attr('data-settings');
      if (settingsStr && (settingsStr.includes('.mp4') || settingsStr.includes('video_link'))) {
        videos.push({ tag: 'elementor-settings', src: settingsStr });
      }
    });

    // General html check for mp4
    const bodyHtml = $('body').html() || '';
    const mp4Regex = /https?:\/\/[^"'\s>]+\.mp4/gi;
    let match;
    while ((match = mp4Regex.exec(bodyHtml)) !== null) {
      videos.push({ tag: 'html-match', src: match[0] });
    }

    if (videos.length > 0) {
      console.log(`\n=== ${page.slug} has videos:`);
      videos.forEach(v => console.log(` - [${v.tag}] ${v.src}`));
    } else {
      console.log(`\n=== ${page.slug} has no videos.`);
    }

  } catch (error) {
    console.error(`Error checking ${page.slug}:`, error.message);
  }
}

async function run() {
  for (const page of urls) {
    await checkPage(page);
  }
}

run();
