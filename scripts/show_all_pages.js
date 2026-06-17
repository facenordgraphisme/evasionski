const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'scraped_evasionski_content.json');
const raw = fs.readFileSync(filePath, 'utf8');
const pages = JSON.parse(raw);

pages.forEach(p => {
  console.log(`=========================================`);
  console.log(`SLUG: ${p.slug}`);
  console.log(`URL: ${p.url}`);
  console.log(`TITLE: ${p.title}`);
  console.log(`=========================================`);
  
  const headings = p.textBlocks.filter(tb => ['h1', 'h2', 'h3', 'h4'].includes(tb.tag));
  console.log(`HEADINGS:`);
  headings.forEach(h => console.log(`  [${h.tag.toUpperCase()}] ${h.text}`));

  console.log(`\nTEXT SNIPPETS:`);
  const texts = p.textBlocks.filter(tb => !['h1', 'h2', 'h3', 'h4'].includes(tb.tag));
  texts.slice(0, 8).forEach(t => console.log(`  - ${t.text.substring(0, 160)}...`));
  console.log(`\n`);
});
