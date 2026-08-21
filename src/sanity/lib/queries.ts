import { groq } from 'next-sanity'

export const homeQuery = groq`*[_type == "home"][0]{
  heroTitle,
  heroSubtitle,
  heroDescription,
  "heroImages": heroImages[].asset->url,
  
  aboutBadge,
  aboutTitle,
  aboutTitleAccent,
  aboutDescription,
  "aboutImage": aboutImage.asset->url,
  experienceYears,

  activitiesTitle,
  activitiesTitleAccent,
  activitiesDescription,

  sortiesBadge,
  sortiesTitle,
  sortiesTitleAccent,

  adventureBadge,
  adventureTitle,
  adventureTitleAccent,
  adventureDescription,
  adventureFeatures,
  "adventureImage": adventureImage.asset->url,

  contactBadge,
  contactTitle,
  contactTitleAccent,
  contactDescription,

  testimonialsBadge,
  testimonialsTitle,
  testimonialsTitleAccent,

  blogBadge,
  blogTitle,
  blogTitleAccent,
  hideTestimonials,
  hideBlog,
  featuredPostsLimit
}`

export const testimonialsQuery = groq`*[_type == "testimonial"] | order(_createdAt desc) {
  author,
  role,
  quote,
  rating,
  "avatar": avatar.asset->url
}`

export const sortiesQuery = groq`*[_type == "sejourDate" && dateDebut >= now()] | order(dateDebut asc) {
  _id,
  "slug": slug.current,
  titrePersonnalise,
  descriptionPersonnalisee,
  massifSpecifique,
  dateDebut,
  dateFin,
  prix,
  niveau,
  placesDisponibles,
  placesTotales,
  complet,
  lieuRdv,
  heureRdv,
  "programmeSpecifique": programmeSpecifique[]{
    ...,
    _type == "image" => { ..., "asset": asset-> }
  },
  "informationsComplementaires": informationsComplementaires[]{
    ...,
    _type == "image" => { ..., "asset": asset-> }
  },
  "image": image.asset->url,
  "sejour": sejour-> {
    title,
    "slug": slug.current,
    categorie,
    massifs,
    niveauDefaut,
    duree,
    prixDefaut,
    "image": image.asset->url,
    description,
    "programme": programme[]{
      ...,
      _type == "image" => { ..., "asset": asset-> }
    },
    "materiel": materiel[]{
      ...,
      _type == "image" => { ..., "asset": asset-> }
    },
    materielInclus,
    materielNonInclus,
    "budget": budget[]{
      ...,
      _type == "image" => { ..., "asset": asset-> }
    },
    budgetInclus,
    budgetNonInclus,
    "infosPratiques": infosPratiques[]{
      ...,
      _type == "image" => { ..., "asset": asset-> }
    }
  }
}`

// Query pour récupérer une sortie spécifique par slug
export const sortieBySlugQuery = groq`*[_type == "sejourDate" && slug.current == $slug][0] {
  _id,
  "slug": slug.current,
  titrePersonnalise,
  descriptionPersonnalisee,
  massifSpecifique,
  dateDebut,
  dateFin,
  prix,
  niveau,
  placesDisponibles,
  placesTotales,
  complet,
  lieuRdv,
  heureRdv,
  denivele,
  effortPhysique,
  "programmeSpecifique": programmeSpecifique[]{
    ...,
    _type == "image" => { ..., "asset": asset-> }
  },
  "informationsComplementaires": informationsComplementaires[]{
    ...,
    _type == "image" => { ..., "asset": asset-> }
  },
  "budgetSpecifique": budgetSpecifique[]{
    ...,
    _type == "image" => { ..., "asset": asset-> }
  },
  budgetInclusSpecifique,
  budgetNonInclusSpecifique,
  "infosPratiquesSpecifiques": infosPratiquesSpecifiques[]{
    ...,
    _type == "image" => { ..., "asset": asset-> }
  },
  "image": image.asset->url,
  "sejour": sejour-> {
    _id,
    title,
    "slug": slug.current,
    categorie,
    massifs,
    niveauDefaut,
    duree,
    prixDefaut,
    "image": image.asset->url,
    description,
    "programme": programme[]{
      ...,
      _type == "image" => { ..., "asset": asset-> }
    },
    "materiel": materiel[]{
      ...,
      _type == "image" => { ..., "asset": asset-> }
    },
    materielInclus,
    materielNonInclus,
    "budget": budget[]{
      ...,
      _type == "image" => { ..., "asset": asset-> }
    },
    budgetInclus,
    budgetNonInclus,
    "infosPratiques": infosPratiques[]{
      ...,
      _type == "image" => { ..., "asset": asset-> }
    }
  }
}`

export const sejoursQuery = groq`*[_type == "sejour"] | order(title asc) {
  title,
  "slug": slug.current,
  categorie,
  massifs,
  niveauDefaut,
  duree,
  prixDefaut,
  "image": image.asset->url,
  description
}`

export const sejoursByCategoryQuery = groq`*[_type == "sejour" && categorie == $categorie] | order(title asc) {
  title,
  "slug": slug.current,
  categorie,
  massifs,
  niveauDefaut,
  duree,
  prixDefaut,
  "image": image.asset->url,
  description
}`

export const sejourBySlugQuery = groq`*[_type == "sejour" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  categorie,
  massifs,
  niveauDefaut,
  duree,
  prixDefaut,
  "image": image.asset->url,
  description,
  hideUpcomingSorties,
  "programme": programme[]{
    ...,
    _type == "image" => { ..., "asset": asset-> }
  },
  "budget": budget[]{
    ...,
    _type == "image" => { ..., "asset": asset-> }
  },
  "budgetInclus": budgetInclus,
  "budgetNonInclus": budgetNonInclus,
  "infosPratiques": infosPratiques[]{
    ...,
    _type == "image" => { ..., "asset": asset-> }
  },
  "materiel": materiel[]{
    ...,
    _type == "image" => { ..., "asset": asset-> }
  },
  "materielInclus": materielInclus,
  "materielNonInclus": materielNonInclus,
  "materielPdf": materielPdf.asset->url,
  "gallery": gallery[]{alt, "url": asset->url},
  "upcomingSorties": *[_type == "sejourDate" && sejour._ref == ^._id && dateDebut >= now()] | order(dateDebut asc) {
    _id,
    "slug": slug.current,
    titrePersonnalise,
    dateDebut,
    dateFin,
    prix,
    niveau,
    placesDisponibles,
    placesTotales,
    complet
  },
  seoTitle,
  seoDescription
}`

export const postsBySejourQuery = groq`*[_type == "post" && relatedSejour._ref == $sejourId] | order(publishedAt desc)[0...6] {
  title,
  "slug": slug.current,
  "date": publishedAt,
  "image": mainImage.asset->url,
  "imageAlt": mainImage.alt,
  "imageName": mainImage.imageName,
  excerpt
}`

export const postsByActivityQuery = groq`*[_type == "post" && (activityType == $activityType || activityType->_ref == $activityType || activityType->type == $activityType || activityType->slug.current == $activityType) && !(relatedSejour._ref in $excludedIds)] | order(publishedAt desc)[0...6] {
  title,
  "slug": slug.current,
  "date": publishedAt,
  "image": mainImage.asset->url,
  "imageAlt": mainImage.alt,
  "imageName": mainImage.imageName,
  excerpt
}`

// DEPRECATED - Ancien schéma sortie (archivé)
// export const sortieBySlugQuery = groq`*[_type == "sortie" && slug.current == $slug][0] { ... }`

// DEPRECATED - Anciens schémas Activity & Univers (archivés)
// export const activitiesQuery = groq`*[_type == "activity"] | order(title asc) { ... }`
// export const activityBySlugQuery = groq`*[_type == "activity" && slug.current == $slug][0] { ... }`

// Nouvelle query pour la page À la carte
export const aLaCarteQuery = groq`*[_type == "aLaCarte"][0] {
  title,
  "slug": slug.current,
  heroTitle,
  heroSubtitle,
  "heroImage": heroImage.asset->url,
  description,
  "content": content[]{
    ...,
    _type == "image" => { ..., "asset": asset-> }
  },
  "tarifs": tarifs[]{
    ...,
    _type == "image" => { ..., "asset": asset-> }
  },
  prestationsIncluses,
  prestationsNonIncluses,
  ctaText,
  ctaSubtext,
  "gallery": gallery[]{alt, "url": asset->url},
  seoTitle,
  seoDescription
}`

// Queries pour lister les activités/catégories (pour la page /activites)
export const activitiesQuery = groq`[
  {
    "title": "Engagement Privé / À la carte",
    "slug": "ski-de-randonnee-engagement-prive",
    "description": "Sortie privée sur mesure. En famille, entre amis ou en solo, tracez votre propre voie.",
    "price": "À partir de 400€/jour",
    "image": "/images/hero.jpg"
  },
  {
    "title": "Ski de randonnée journée",
    "slug": "journee-ski-rando",
    "description": "Des sorties à la journée pour s'évader, découvrir de nouveaux massifs et s'initier ou se perfectionner.",
    "price": "95€ / pers",
    "image": *[_type == "sejour" && categorie == "journee-ski-rando"][0].image.asset->url
  },
  {
    "title": "Freerando & Hors-piste",
    "slug": "journee-freerando",
    "description": "Profitez des remontées mécaniques pour accéder à de longs hors-pistes et de superbes combes sauvages.",
    "price": "95€ / pers",
    "image": *[_type == "sejour" && categorie == "journee-freerando"][0].image.asset->url
  },
  {
    "title": "Stages et raids à ski",
    "slug": "stages-et-raids-a-ski-de-randonnee-hautes-alpes",
    "description": "L'immersion totale en montagne. De refuge en gîte, vivez des raids à ski d'exception de plusieurs jours.",
    "price": "À partir de 295€",
    "image": "/images/stages_raids_hub.jpg"
  }
]`

export const blogTeaserQuery = groq`*[_type == "post"] | order(publishedAt desc)[0...$limit] {
  title,
  "slug": slug.current,
  "date": publishedAt,
  "image": mainImage.asset->url,
  "imageAlt": mainImage.alt,
  "imageName": mainImage.imageName,
  "excerpt": pt::text(body)
}`

export const guideQuery = groq`*[_type == "guide"][0] {
  badge,
  titleNormal,
  titleAccent,
  quote,
  "image": image.asset->url,
  bioTitle,
  bio,
  certification,
  certificationSub,
  experience,
  experienceSub,
  values
}`

export const contactQuery = groq`*[_type == "contact"][0] {
  title,
  description,
  email,
  phone,
  location
}`

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  "date": publishedAt,
  "image": mainImage.asset->url,
  "imageAlt": mainImage.alt,
  "imageName": mainImage.imageName,
  excerpt,
  "body": body,
  "tags": tags[]->name
}`

export const postSlugsQuery = groq`*[_type == "post"]{ "slug": slug.current }`

export const postsPageQuery = groq`{
  "posts": *[_type == "post"
    && (!defined($category) || $category in tags[]->slug.current)
    && (!defined($massif) || $massif in tags[]->slug.current)
  ] | order(publishedAt desc) [$start...$end] {
    _id,
    title,
    "slug": slug.current,
    "date": publishedAt,
    "image": mainImage.asset->url,
    "imageAlt": mainImage.alt,
    "imageName": mainImage.imageName,
    excerpt
  },
  "total": count(*[_type == "post"
    && (!defined($category) || $category in tags[]->slug.current)
    && (!defined($massif) || $massif in tags[]->slug.current)
  ])
}`

export const categoryTagsQuery = groq`*[_type == "tag" && tagType == "category"] | order(name asc) { name, "slug": slug.current }`

export const massifTagsQuery = groq`*[_type == "tag" && tagType == "massif"] | order(name asc) { name, "slug": slug.current }`

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  "date": publishedAt,
  "image": mainImage.asset->url,
  "imageAlt": mainImage.alt,
  "imageName": mainImage.imageName,
  excerpt,
  body,
  "gallery": gallery[]{alt, "url": asset->url},
  "tags": tags[]->{ name, "slug": slug.current, tagType },
  "prevPost": *[_type == "post" && (publishedAt < ^.publishedAt || (publishedAt == ^.publishedAt && _createdAt < ^._createdAt))] | order(publishedAt desc, _createdAt desc)[0] {
    title,
    "slug": slug.current
  },
  "nextPost": *[_type == "post" && (publishedAt > ^.publishedAt || (publishedAt == ^.publishedAt && _createdAt > ^._createdAt))] | order(publishedAt asc, _createdAt asc)[0] {
    title,
    "slug": slug.current
  }
}`

export const settingsQuery = groq`*[_type == "settings"][0]{
  siteName,
  "logoLight": logoLight.asset->url,
  "logoDark": logoDark.asset->url,
  instagram,
  facebook,
  youtube,
  whatsappNumber,
  whatsappText,
  whatsappTextEn,
  email,
  phone,
  address,
  footerDescription,
  footerDescriptionEn,
  copyright,
  seoTitle,
  seoTitleEn,
  seoDescription,
  seoDescriptionEn,
  "seoImage": seoImage.asset->url,
  showBanner,
  bannerText,
  bannerTextEn,
  bannerColor,
  bannerLink,
  hidePartners,
  "partners": partners[]{
    name,
    "logo": logo.asset->url,
    link
  }
}`

export const faqsQuery = groq`*[_type == "faq"] | order(order asc, _createdAt desc) {
  _id,
  question,
  questionEn,
  answer,
  answerEn,
  category
}`

