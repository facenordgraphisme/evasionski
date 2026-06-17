const fs = require('fs');
const path = require('path');
const https = require('https');

const videosDir = 'c:\\Users\\FX\\Desktop\\Codes antigravity\\evasion-ski-next\\public\\videos';
const publicDir = 'c:\\Users\\FX\\Desktop\\Codes antigravity\\evasion-ski-next\\public';

const videos = [
  {
    url: 'https://evasionski.fr/wp-content/uploads/2025/09/YouCut_20250905_103243975.mp4',
    dest: 'hero-video.mp4'
  },
  {
    url: 'https://evasionski.fr/wp-content/uploads/2025/09/YouCut_20250909_075828046.mp4',
    dest: 'ski-rando-journee.mp4'
  },
  {
    url: 'https://evasionski.fr/wp-content/uploads/2025/09/20250905_103802_033.mp4',
    dest: 'freerando-journee.mp4'
  },
  {
    url: 'https://evasionski.fr/wp-content/uploads/2025/09/YouCut_20250905_102855618.mp4',
    dest: 'stages-raids.mp4'
  },
  {
    url: 'https://evasionski.fr/wp-content/uploads/2025/09/YouCut_20250905_113024385.mp4',
    dest: 'norvege-voyage.mp4'
  }
];

function downloadFile(url, destName) {
  return new Promise((resolve, reject) => {
    const destPath = path.join(videosDir, destName);
    const file = fs.createWriteStream(destPath);
    
    console.log(`Downloading ${url} -> ${destPath}`);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download video ${url}, status code: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Successfully downloaded video: ${destName}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

async function run() {
  if (!fs.existsSync(videosDir)) {
    fs.mkdirSync(videosDir, { recursive: true });
  }

  // Check if we can move the existing hero-video.mp4
  const existingHeroPath = path.join(publicDir, 'hero-video.mp4');
  const targetHeroPath = path.join(videosDir, 'hero-video.mp4');
  if (fs.existsSync(existingHeroPath) && !fs.existsSync(targetHeroPath)) {
    console.log(`Moving existing hero-video.mp4 from public/ to public/videos/`);
    fs.renameSync(existingHeroPath, targetHeroPath);
  }

  for (const video of videos) {
    const destPath = path.join(videosDir, video.dest);
    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 1000000) {
      console.log(`Video already exists and is valid: ${video.dest}`);
      continue;
    }
    try {
      await downloadFile(video.url, video.dest);
    } catch (err) {
      console.log(`Error downloading video ${video.dest}:`, err.message);
    }
  }
  console.log('Video assets download completed!');
}

run();
