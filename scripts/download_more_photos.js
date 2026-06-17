const fs = require('fs');
const path = require('path');
const https = require('https');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const scrapedContentPath = path.join(__dirname, 'scraped_evasionski_content.json');
const publicPhotosDir = path.join(__dirname, '..', 'public', 'photos');

if (!fs.existsSync(publicPhotosDir)) {
  fs.mkdirSync(publicPhotosDir, { recursive: true });
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Status ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

async function run() {
  if (!fs.existsSync(scrapedContentPath)) {
    console.error("Scraped content JSON not found!");
    process.exit(1);
  }

  const pages = JSON.parse(fs.readFileSync(scrapedContentPath, 'utf8'));
  const urls = new Set();

  // Collect all image URLs
  pages.forEach(page => {
    if (page.images) {
      page.images.forEach(img => {
        if (img.src && img.src.startsWith('http')) {
          const lowerSrc = img.src.toLowerCase();
          if (!lowerSrc.includes('logo') && !lowerSrc.includes('avatar') && !lowerSrc.includes('flag') && !lowerSrc.includes('simple-icon')) {
            urls.add(img.src);
          }
        }
      });
    }
  });

  const urlList = Array.from(urls);
  console.log(`Found ${urlList.length} candidate images. Downloading the first 15...`);

  // Download up to 15 images and save them as photo_ski_X.jpg
  const downloadedFiles = [];
  for (let i = 0; i < Math.min(urlList.length, 15); i++) {
    const url = urlList[i];
    const extension = path.extname(new URL(url).pathname) || '.jpg';
    const filename = `photo_ski_${i + 1}${extension}`;
    const destPath = path.join(publicPhotosDir, filename);

    try {
      await downloadFile(url, destPath);
      console.log(`✅ Downloaded: ${filename} from ${url}`);
      downloadedFiles.push(`/photos/${filename}`);
    } catch (err) {
      console.log(`❌ Failed to download ${filename} from ${url}:`, err.message);
    }
    // slight delay
    await new Promise(r => setTimeout(r, 500));
  }

  console.log("\nFinished downloading photos. Downloaded paths:");
  console.log(JSON.stringify(downloadedFiles, null, 2));
}

run();
