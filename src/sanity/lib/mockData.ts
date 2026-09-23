/**
 * Mock data minimal - Utilisé uniquement si Sanity est inaccessible
 * Avec CDN + ISR activés, ces mocks ne devraient jamais être utilisés
 */

export const mockHome = {
  heroTitle: "Contenu temporairement indisponible",
  heroSubtitle: "Rechargez la page",
  heroDescription: "",
  heroImages: ["/images/hero.jpg"],
  aboutBadge: "",
  aboutTitle: "",
  aboutTitleAccent: "",
  aboutDescription: [],
  experienceYears: 0,
  activitiesTitle: "",
  activitiesTitleAccent: "",
  activitiesDescription: "",
  sortiesBadge: "",
  sortiesTitle: "",
  sortiesTitleAccent: "",
  adventureBadge: "",
  adventureTitle: "",
  adventureTitleAccent: "",
  adventureDescription: "",
  adventureFeatures: [],
  adventureImage: "",
  contactBadge: "",
  contactTitle: "",
  contactTitleAccent: "",
  contactDescription: "",
  testimonialsBadge: "",
  testimonialsTitle: "",
  testimonialsTitleAccent: "",
  blogBadge: "",
  blogTitle: "",
  blogTitleAccent: "",
  hideTestimonials: false,
  hideBlog: false,
  featuredPostsLimit: 3,
};

export const mockSorties = [
  {
    _id: "mock-1",
    slug: "mock-sortie",
    titrePersonnalise: "Contenu temporairement indisponible",
    dateDebut: new Date().toISOString(),
    dateFin: new Date().toISOString(),
    prix: 0,
    niveau: "Rechargez la page",
    placesDisponibles: 0,
    placesTotales: 0,
    complet: true,
    image: "/images/hero.jpg",
    sejour: {
      title: "",
      slug: "",
      categorie: "",
      massifs: [],
      niveauDefaut: "",
      duree: "",
      prixDefaut: 0,
      image: "",
      description: "",
    },
  },
];

export const mockTestimonials = [
  {
    author: "Contenu temporairement indisponible",
    role: "",
    quote: "Rechargez la page",
    rating: 5,
    avatar: "",
  },
];

export const mockPosts = [
  {
    title: "Contenu temporairement indisponible",
    slug: "mock-post",
    date: new Date().toISOString(),
    image: "/images/hero.jpg",
    excerpt: "Rechargez la page",
  },
];

export const mockActivities = [
  {
    title: "Contenu temporairement indisponible",
    slug: "",
    description: "Rechargez la page",
    price: "",
    image: "/images/hero.jpg",
  },
];

export const mockSettings = {
  siteName: "ÉvasionSki",
  logoLight: "",
  logoDark: "",
  instagram: "",
  facebook: "",
  youtube: "",
  whatsappNumber: "",
  whatsappText: "",
  whatsappTextEn: "",
  email: "",
  phone: "",
  address: "",
  footerDescription: "",
  footerDescriptionEn: "",
  copyright: "",
  seoTitle: "",
  seoTitleEn: "",
  seoDescription: "",
  seoDescriptionEn: "",
  seoImage: "",
  showBanner: false,
  bannerText: "",
  bannerTextEn: "",
  bannerColor: "accent",
  bannerLink: "",
  hidePartners: false,
  partners: [],
};
