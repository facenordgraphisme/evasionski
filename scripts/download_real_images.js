const fs = require('fs');
const path = require('path');
const https = require('https');

const publicDir = 'c:\\Users\\FX\\Desktop\\Codes antigravity\\evasion-ski-next\\public\\images';

const assets = [
  // Core template fallbacks
  {
    url: 'https://evasionski.fr/wp-content/uploads/2025/05/apres-leffort-de-la-montee-la-recompense-de-la-descente-en-freerando-4-Copie.webp',
    dest: 'hero.jpg'
  },
  {
    url: 'https://evasionski.fr/wp-content/uploads/2025/05/apres-leffort-de-la-montee-la-recompense-de-la-descente-en-freerando-4-Copie.webp',
    dest: 'ski.jpg'
  },
  {
    url: 'https://evasionski.fr/wp-content/uploads/2025/05/IMG-20250110-WA0027-Copie-683x1024.webp',
    dest: 'alpinisme.jpg'
  },
  {
    url: 'https://evasionski.fr/wp-content/uploads/2025/05/IMG-20250110-WA0027-Copie-683x1024.webp',
    dest: 'escalade.jpg'
  },
  {
    url: 'https://evasionski.fr/wp-content/uploads/2025/05/IMG-20250110-WA0025-Copie.webp',
    dest: 'guide.jpg'
  },
  // Specific Stays & Raids Images
  {
    url: 'https://evasionski.fr/wp-content/uploads/elementor/thumbs/IMG-20250204-WA0240-r80o9iyq1gc3fr1nepxj6nlstaqwslmstkgvcksd34.jpg',
    dest: 'queyras.jpg'
  },
  {
    url: 'https://evasionski.fr/wp-content/uploads/elementor/thumbs/IMG-20250316-WA0064-scaled-r8b16107p3gryh7ir193ij2d9x38raz06ohfqe59hc.jpg',
    dest: 'claree.jpg'
  },
  {
    url: 'https://evasionski.fr/wp-content/uploads/elementor/thumbs/PXL_20240112_103624488-scaled-r7v4c7t9exrewjjfn562kddsvbdd67t8y6xq5qb6tc.jpg',
    dest: 'ubaye.jpg'
  },
  {
    url: 'https://evasionski.fr/wp-content/uploads/elementor/thumbs/KhJPC-r8zcb2qwgri2rud9e9jt5c955wpsy9twe6wbopaou8.jpg',
    dest: 'norvege.jpg'
  },
  {
    url: 'https://evasionski.fr/wp-content/uploads/elementor/thumbs/IMG-20250110-WA0021-Copie-e1752912634783-r8zac4venwe0jbewn3mggqpr60dj0n76z2e2rwhcg0.webp',
    dest: 'freerando_les_orres.jpg'
  },
  {
    url: 'https://evasionski.fr/wp-content/uploads/elementor/thumbs/IMG-20250204-WA0183-r80o8ya6tgjke4ss21gwbe1qds5cw3d1i9nld2e0q4.jpg',
    dest: 'stages_raids_hub.jpg'
  }
];

function downloadFile(url, destName) {
  return new Promise((resolve, reject) => {
    const destPath = path.join(publicDir, destName);
    const file = fs.createWriteStream(destPath);
    
    console.log(`Downloading ${url} -> ${destPath}`);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}, status code: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Successfully downloaded: ${destName}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

async function run() {
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  for (const asset of assets) {
    try {
      await downloadFile(asset.url, asset.dest);
    } catch (err) {
      console.log(`Error downloading ${asset.dest}:`, err.message);
    }
  }
  console.log('Real assets download completed!');
}

run();
