const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const BLOG_POSTS = [
  {
    slug: '5-bonnes-raisons-de-partir-faire-un-ski-trip-en-norvege',
    url: 'https://evasionski.fr/5-bonnes-raisons-de-partir-faire-un-ski-trip-en-norvege/'
  },
  {
    slug: 'sejour-ski-de-randonnee-dans-le-queyras-5-bonnes-raisons-dy-aller',
    url: 'https://evasionski.fr/sejour-ski-de-randonnee-dans-le-queyras-5-bonnes-raisons-dy-aller/'
  },
  {
    slug: 'le-ski-de-randonnee-moniteur-ou-guide',
    url: 'https://evasionski.fr/le-ski-de-randonnee-moniteur-ou-guide/'
  },
  {
    slug: 'ski-de-randonnee-choisir-son-materiel',
    url: 'https://evasionski.fr/ski-de-randonnee-choisir-son-materiel/'
  },
  {
    slug: 'la-freerando-entre-freeride-et-ski-de-randonnee',
    url: 'https://evasionski.fr/la-freerando-entre-freeride-et-ski-de-randonnee/'
  },
  {
    slug: 'quest-ce-que-le-ski-de-randonnee',
    url: 'https://evasionski.fr/quest-ce-que-le-ski-de-randonnee/'
  }
];

// Helper to convert HTML elements to simple Portable Text-like block structure
// to match our schema/blog detail view structure
function convertHtmlToBlocks($, el) {
  const blocks = [];
  $(el).find('p, h2, h3, h4, ul, ol, blockquote').each((i, node) => {
    const tagName = node.tagName.toLowerCase();
    const text = $(node).text().trim();
    if (!text) return;

    if (tagName.startsWith('h')) {
      const style = tagName === 'h2' ? 'h2' : tagName === 'h3' ? 'h3' : 'h4';
      blocks.push({
        _key: Math.random().toString(36).substring(2, 9),
        _type: 'block',
        style,
        children: [{ _key: Math.random().toString(36).substring(2, 9), _type: 'span', text }]
      });
    } else if (tagName === 'blockquote') {
      blocks.push({
        _key: Math.random().toString(36).substring(2, 9),
        _type: 'block',
        style: 'blockquote',
        children: [{ _key: Math.random().toString(36).substring(2, 9), _type: 'span', text }]
      });
    } else if (tagName === 'ul') {
      $(node).find('li').each((j, li) => {
        blocks.push({
          _key: Math.random().toString(36).substring(2, 9),
          _type: 'block',
          style: 'normal',
          listItem: 'bullet',
          level: 0,
          children: [{ _key: Math.random().toString(36).substring(2, 9), _type: 'span', text: $(li).text().trim() }]
        });
      });
    } else if (tagName === 'ol') {
      $(node).find('li').each((j, li) => {
        blocks.push({
          _key: Math.random().toString(36).substring(2, 9),
          _type: 'block',
          style: 'normal',
          listItem: 'number',
          level: 0,
          children: [{ _key: Math.random().toString(36).substring(2, 9), _type: 'span', text: $(li).text().trim() }]
        });
      });
    } else {
      blocks.push({
        _key: Math.random().toString(36).substring(2, 9),
        _type: 'block',
        style: 'normal',
        children: [{ _key: Math.random().toString(36).substring(2, 9), _type: 'span', text }]
      });
    }
  });

  if (blocks.length === 0) {
    // Fallback: just put the text in blocks
    const text = $(el).text().trim();
    if (text) {
      blocks.push({
        _key: Math.random().toString(36).substring(2, 9),
        _type: 'block',
        style: 'normal',
        children: [{ _key: Math.random().toString(36).substring(2, 9), _type: 'span', text }]
      });
    }
  }
  return blocks;
}

async function scrapePost(post) {
  console.log(`Scraping post: ${post.slug}...`);
  try {
    const res = await axios.get(post.url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    const $ = cheerio.load(res.data);
    
    // Extract metadata
    const title = $('h1.entry-title').first().text().trim() || $('h1').first().text().trim() || post.slug;
    
    // Find featured image URL
    // Often in Yoast meta or link rel="image_src" or elementor background or img
    let featuredImage = $('meta[property="og:image"]').attr('content');
    if (!featuredImage) {
      featuredImage = $('img.attachment-post-thumbnail').first().attr('src') || $('img').first().attr('src');
    }
    
    // Parse publish date
    let dateStr = $('meta[property="article:published_time"]').attr('content') || 
                  $('time.entry-date').attr('datetime') || 
                  $('time').attr('datetime');
    if (!dateStr) {
      dateStr = new Date().toISOString();
    }

    // Extract excerpt
    let excerpt = $('meta[property="og:description"]').attr('content') || '';
    if (excerpt.length > 200) {
      excerpt = excerpt.substring(0, 197) + '...';
    }

    // Main content area
    const contentArea = $('.entry-content, .elementor-widget-theme-post-content, main article').first();
    const bodyBlocks = convertHtmlToBlocks($, contentArea.length > 0 ? contentArea : $('body'));

    // Extract tags (categories / massifs)
    const tags = [];
    $('.entry-categories a, .entry-tags a, .cat-links a, .tags-links a').each((i, el) => {
      const name = $(el).text().trim();
      const href = $(el).attr('href') || '';
      const slug = href.split('/').filter(Boolean).pop() || name.toLowerCase();
      if (name && !tags.some(t => t.name === name)) {
        tags.push({
          name,
          slug,
          tagType: href.includes('massif') || name.toLowerCase().includes('queyras') || name.toLowerCase().includes('norvege') || name.toLowerCase().includes('cerces') || name.toLowerCase().includes('ubaye') || name.toLowerCase().includes('ecrins') ? 'massif' : 'category'
        });
      }
    });

    // Default tag logic if none found
    if (tags.length === 0) {
      if (post.slug.includes('norvege')) {
        tags.push({ name: 'Norvège', slug: 'norvege', tagType: 'massif' });
        tags.push({ name: 'Voyage', slug: 'voyage', tagType: 'category' });
      } else if (post.slug.includes('queyras')) {
        tags.push({ name: 'Queyras', slug: 'queyras', tagType: 'massif' });
        tags.push({ name: 'Ski de randonnée', slug: 'ski-de-randonnee', tagType: 'category' });
      } else if (post.slug.includes('freerando')) {
        tags.push({ name: 'Freerando', slug: 'freerando', tagType: 'category' });
      } else {
        tags.push({ name: 'Ski de randonnée', slug: 'ski-de-randonnee', tagType: 'category' });
      }
    }

    return {
      title,
      slug: post.slug,
      date: dateStr,
      image: featuredImage,
      excerpt,
      body: bodyBlocks,
      tags
    };
  } catch (error) {
    console.error(`Error scraping ${post.slug}:`, error.message);
    return null;
  }
}

async function main() {
  const results = [];
  for (const post of BLOG_POSTS) {
    const data = await scrapePost(post);
    if (data) {
      results.push(data);
    }
    await new Promise(r => setTimeout(r, 1000));
  }

  const outPath = path.join(__dirname, 'scraped_blog_articles.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`Saved ${results.length} scraped posts to ${outPath}`);
}

main();
