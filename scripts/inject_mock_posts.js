const fs = require('fs');
const path = require('path');

const mockDataPath = path.join(__dirname, '..', 'src', 'sanity', 'lib', 'mockData.ts');
const scrapedPostsPath = path.join(__dirname, 'scraped_blog_articles.json');

if (!fs.existsSync(scrapedPostsPath)) {
  console.error("Scraped posts file not found!");
  process.exit(1);
}

const scrapedPosts = JSON.parse(fs.readFileSync(scrapedPostsPath, 'utf8'));

// Enrich posts with prevPost/nextPost links
const enrichedPosts = scrapedPosts.map((post, index) => {
  const prevPost = index > 0 ? {
    title: scrapedPosts[index - 1].title,
    slug: scrapedPosts[index - 1].slug
  } : null;

  const nextPost = index < scrapedPosts.length - 1 ? {
    title: scrapedPosts[index + 1].title,
    slug: scrapedPosts[index + 1].slug
  } : null;

  return {
    ...post,
    prevPost,
    nextPost
  };
});

// Load mockData.ts
let mockDataContent = fs.readFileSync(mockDataPath, 'utf8');

// Find where mockPosts starts
const mockPostsRegex = /export const mockPosts = \[\s*[\s\S]*?\];/g;
const newMockPostsCode = `export const mockPosts = ${JSON.stringify(enrichedPosts, null, 2)};`;

if (mockPostsRegex.test(mockDataContent)) {
  mockDataContent = mockDataContent.replace(mockPostsRegex, newMockPostsCode);
  fs.writeFileSync(mockDataPath, mockDataContent, 'utf8');
  console.log("Successfully injected mockPosts into mockData.ts!");
} else {
  console.error("Could not find mockPosts declaration in mockData.ts!");
}
