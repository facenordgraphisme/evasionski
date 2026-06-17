import { createClient } from 'next-sanity'
import * as mock from './mockData'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-05-01'

const isMockEnabled = process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true' || projectId === 'p72h34w4';

const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to true for production
})

export const client = {
  ...sanityClient,
  fetch: async (query: string, params: any = {}) => {
    if (isMockEnabled) {
      const q = query.toLowerCase();
      
      if (q.includes('_type == "home"') || q.includes('homequery')) {
        return mock.mockHome;
      }
      if (q.includes('_type == "settings"') || q.includes('settingsquery')) {
        return mock.mockSettings;
      }
      if (q.includes('_type == "contact"') || q.includes('contactquery')) {
        return mock.mockContact;
      }
      if (q.includes('_type == "testimonial"')) {
        return mock.mockTestimonials;
      }
      if (q.includes('_type == "sortie"')) {
        const sorties = mock.mockSorties;
        return sorties;
      }
      
      // FAQ and Tags
      if (q.includes('_type == "faq"') || q.includes('faqsquery')) {
        return [];
      }
      if (q.includes('_type == "tag"') || q.includes('tagsquery')) {
        return [];
      }

      // Guide query
      if (q.includes('_type == "guide"') || q.includes('guidequery')) {
        return mock.mockGuide;
      }

      // Post queries
      if (q.includes('postspagequery') || (q.includes('_type == "post"') && q.includes('count('))) {
        return {
          posts: mock.mockPosts,
          total: mock.mockPosts.length
        };
      }
      if (q.includes('postbyslugquery') || (q.includes('_type == "post"') && q.includes('slug.current == $slug'))) {
        return mock.mockPosts.find(p => p.slug === params.slug) || null;
      }
      if (q.includes('_type == "post"') || q.includes('blogteaserquery') || q.includes('postsquery')) {
        return mock.mockPosts;
      }
      
      // Activity queries
      if (q.includes('_type == "activity"')) {
        if (params.slug) {
          return mock.mockActivities.find(a => a.slug === params.slug) || null;
        }
        return mock.mockActivities;
      }
      
      // Sejour queries
      if (q.includes('_type == "sejour"')) {
        if (params.slug) {
          const s = mock.mockSejours.find(se => se.slug === params.slug);
          if (s) {
            return {
              ...s,
              subCategory: s.subCategory,
              upcomingSorties: mock.mockSorties.filter(so => so.sejour.slug === s.slug)
            };
          }
          return null;
        }
        if (params.activity) {
          return mock.mockSejours.filter(se => se.activityType === params.activity);
        }
        return mock.mockSejours;
      }

      console.log('Unmatched mock query, fallback to live:', query);
    }
    
    return sanityClient.fetch(query, params);
  }
} as any;
