import { createClient } from 'next-sanity'
import { defineEnableDraftMode } from 'next-sanity/draft-mode'

// Appelée par l'outil Presentation du Studio : vérifie le secret de prévisualisation puis active le mode brouillon.
export const { GET } = defineEnableDraftMode({
  client: createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-05-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
  }),
})
