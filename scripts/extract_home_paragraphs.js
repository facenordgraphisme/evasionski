const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'scraped_evasionski_content.json');
const pages = JSON.parse(fs.readFileSync(filePath, 'utf8'));
const home = pages.find(p => p.slug === 'home');

home.textBlocks.forEach((tb, i) => {
  console.log(`[${i}] ${tb.tag.toUpperCase()}: ${tb.text}\n`);
});
