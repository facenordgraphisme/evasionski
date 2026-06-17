const fs = require('fs');
const path = require('path');

const mockDataPath = path.join(__dirname, '..', 'src', 'sanity', 'lib', 'mockData.ts');
const fallbackDataPath = path.join(__dirname, '..', 'src', 'utils', 'fallbackData.ts');

const IMAGE_DISTRIBUTION = {
  "ski-de-randonnee-engagement-prive": {
    image: "/photos/photo_ski_1.webp",
    gallery: [
      { url: "/photos/photo_ski_5.webp", alt: "Engagement privé ski de rando" },
      { url: "/photos/photo_ski_6.jpg", alt: "Ski dans les Hautes-Alpes" }
    ]
  },
  "ski-randonnee-hautes-alpes-journee": {
    image: "/photos/photo_ski_2.jpg",
    gallery: [
      { url: "/photos/photo_ski_10.jpg", alt: "Randonnée à la journée" },
      { url: "/photos/photo_ski_11.jpg", alt: "Descente poudreuse" }
    ]
  },
  "ski-hors-piste-station-hautes-alpes": {
    image: "/photos/photo_ski_3.webp",
    gallery: [
      { url: "/photos/photo_ski_12.png", alt: "Freerando en station" },
      { url: "/photos/photo_ski_14.jpg", alt: "Neige vierge" }
    ]
  },
  "stage-de-ski-freerando-les-orres-crevoux": {
    image: "/photos/photo_ski_4.webp",
    gallery: [
      { url: "/photos/photo_ski_15.jpg", alt: "Stage freerando Les Orres" },
      { url: "/photos/photo_ski_1.webp", alt: "Couloir de neige" }
    ]
  },
  "ski-de-randonnee-queyras-decouverte": {
    image: "/photos/photo_ski_7.webp",
    gallery: [
      { url: "/photos/photo_ski_2.jpg", alt: "Queyras ski de randonnée" },
      { url: "/photos/photo_ski_3.webp", alt: "Vue sur le mont Viso" }
    ]
  },
  "ski-de-randonnee-en-claree": {
    image: "/photos/photo_ski_8.webp",
    gallery: [
      { url: "/photos/photo_ski_4.webp", alt: "Raid en Clarée" },
      { url: "/photos/photo_ski_5.webp", alt: "Refuge de Laval" }
    ]
  },
  "raid-ski-randonnee-ubaye": {
    image: "/photos/photo_ski_9.jpg",
    gallery: [
      { url: "/photos/photo_ski_6.jpg", alt: "Ubaye sauvage" },
      { url: "/photos/photo_ski_7.webp", alt: "Sommet de l'Ubaye" }
    ]
  },
  "ski-randonnee-norvege-alpes-lyngen": {
    image: "/photos/photo_ski_13.jpg",
    gallery: [
      { url: "/photos/photo_ski_8.webp", alt: "Ski face aux fjords" },
      { url: "/photos/photo_ski_9.jpg", alt: "Aventure arctique" }
    ]
  }
};

// Also apply Norway image mapping for its subCategory in sejours if needed
IMAGE_DISTRIBUTION["raid-sejours-ski-de-randonnee-hautes-alpes"] = {
  image: "/photos/photo_ski_8.webp",
  gallery: []
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Let's replace the images and galleries in sejours
  Object.keys(IMAGE_DISTRIBUTION).forEach(slug => {
    const data = IMAGE_DISTRIBUTION[slug];
    
    // We can replace image and gallery definitions using a regex or simple search replacement
    // Look for slug: "slug" or slug: 'slug' and then update image & gallery values
    const escapedSlug = slug.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    
    // Pattern to match within the object block containing the slug
    // We search for the block that matches the slug, and replace its image & gallery properties
    const blockRegex = new RegExp(`(slug:\\s*["']${escapedSlug}["'][\\s\\S]*?)(image:\\s*["'][^"']*?["'])([\\s\\S]*?gallery:\\s*\\[[\\s\\S]*?\\])`, 'g');
    
    content = content.replace(blockRegex, (match, before, oldImg, middle) => {
      const newImg = `image: "${data.image}"`;
      const newGallery = `gallery: ${JSON.stringify(data.gallery, null, 2)}`;
      return `${before}${newImg}${middle.replace(/gallery:\s*\[[\s\S]*?\]/, newGallery)}`;
    });
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully updated ${filePath}`);
}

processFile(mockDataPath);
processFile(fallbackDataPath);
