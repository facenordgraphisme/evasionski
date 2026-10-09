import { defineDocuments, defineLocations, type PresentationPluginOptions } from 'sanity/presentation'

const page = (title: string, href: string) =>
  defineLocations({ locations: [{ title, href }] })

// Page du site → document à ouvrir automatiquement dans le Studio
const mainDocuments = defineDocuments([
  { route: '/', filter: `_type == "home"` },
  { route: '/calendrier', filter: `_type == "calendarPage"` },
  { route: '/activites', filter: `_type == "activitiesPage"` },
  { route: '/niveau-en-ski', filter: `_type == "niveauSki"` },
  { route: '/a-propos-moniteur-de-ski-de-randonnee', filter: `_type == "guide"` },
  { route: '/evasion-ski-hautes-alpes-contact', filter: `_type == "contact"` },
  { route: '/ski-de-randonnee-engagement-prive', filter: `_type == "aLaCarte"` },
  { route: '/:slug', filter: `_type in ["sejour", "post"] && slug.current == $slug` },
])

// Document du Studio → pages du site où il apparaît
const locations = {
  home: page('Accueil', '/'),
  calendarPage: page('Calendrier', '/calendrier'),
  activitiesPage: page('Activités', '/activites'),
  niveauSki: page('Niveau en ski', '/niveau-en-ski'),
  guide: page('À propos', '/a-propos-moniteur-de-ski-de-randonnee'),
  contact: page('Contact', '/evasion-ski-hautes-alpes-contact'),
  aLaCarte: page('À la carte / Engagement privé', '/ski-de-randonnee-engagement-prive'),
  settings: page('Accueil', '/'),
  sejour: defineLocations({
    select: { title: 'title', slug: 'slug.current' },
    resolve: (doc) => ({
      locations: [
        { title: doc?.title || 'Séjour', href: `/${doc?.slug}` },
        { title: 'Calendrier', href: '/calendrier' },
      ],
    }),
  }),
  sejourDate: defineLocations({
    select: { title: 'sejour.title', slug: 'sejour.slug.current' },
    resolve: (doc) => ({
      locations: [
        { title: doc?.title || 'Séjour', href: `/${doc?.slug}` },
        { title: 'Calendrier', href: '/calendrier' },
      ],
    }),
  }),
  post: defineLocations({
    select: { title: 'title', slug: 'slug.current' },
    resolve: (doc) => ({
      locations: [
        { title: doc?.title || 'Article', href: `/${doc?.slug}` },
        { title: 'Blog', href: '/blog-explorez-les-hautes-alpes-a-ski' },
      ],
    }),
  }),
}

export const presentationOptions: PresentationPluginOptions = {
  title: 'Mode visuel',
  previewUrl: {
    previewMode: { enable: '/api/draft-mode/enable' },
  },
  resolve: { mainDocuments, locations },
}
