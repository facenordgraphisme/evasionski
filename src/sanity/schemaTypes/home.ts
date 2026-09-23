import { defineField, defineType } from 'sanity'
import { Home, Compass, Award, Shield } from 'lucide-react'

export const homeType = defineType({
  name: 'home',
  title: 'Page d\'accueil',
  type: 'document',
  icon: Home,
  groups: [
    { name: 'hero', title: '1️⃣ Hero' },
    { name: 'presentation', title: '2️⃣ Présentation' },
    { name: 'activities', title: '3️⃣ Activités' },
    { name: 'sorties', title: '4️⃣ Prochaines Sorties' },
    { name: 'about', title: '5️⃣ À Propos' },
    { name: 'contact', title: '6️⃣ Contact' },
    { name: 'adventure', title: '7️⃣ FAQ / Aventure' },
    { name: 'testimonials', title: '8️⃣ Témoignages' },
    { name: 'blog', title: '9️⃣ Blog' },
    { name: 'layout', title: '⚙️ Mise en Page' },
  ],
  fields: [
    // ========================================
    // 1️⃣ HERO SECTION (en haut de la page)
    // ========================================
    defineField({
      name: 'heroTitle',
      title: 'Titre Hero',
      type: 'text',
      description: 'Utilisez la touche Entrée pour passer à la ligne',
      rows: 2,
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Sous-titre Hero',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Description Hero',
      type: 'text',
      rows: 4,
      group: 'hero',
    }),
    defineField({
      name: 'heroImages',
      title: 'Images du carrousel',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      group: 'hero',
    }),

    // ========================================
    // 2️⃣ PRESENTATION SECTION "Explorez les Alpes"
    // ========================================
    defineField({
      name: 'presentationBadge',
      title: 'Badge Présentation',
      type: 'string',
      group: 'presentation',
      initialValue: 'BIENVENUE SUR ÉVASIONSKI',
    }),
    defineField({
      name: 'presentationBadgeEn',
      title: 'Badge Présentation (EN)',
      type: 'string',
      group: 'presentation',
      initialValue: 'WELCOME TO EVASIONSKI',
    }),
    defineField({
      name: 'presentationTitle',
      title: 'Titre Présentation (Normal)',
      type: 'string',
      group: 'presentation',
      initialValue: 'Explorez les Alpes',
    }),
    defineField({
      name: 'presentationTitleEn',
      title: 'Titre Présentation (EN)',
      type: 'string',
      group: 'presentation',
      initialValue: 'Explore the Alps',
    }),
    defineField({
      name: 'presentationTitleAccent',
      title: 'Titre Présentation (Turquoise)',
      type: 'string',
      group: 'presentation',
      initialValue: 'en ski de randonnée',
    }),
    defineField({
      name: 'presentationTitleAccentEn',
      title: 'Titre Présentation Accent (EN)',
      type: 'string',
      group: 'presentation',
      initialValue: 'on ski touring',
    }),
    defineField({
      name: 'presentationDescription',
      title: 'Description Présentation',
      type: 'text',
      rows: 3,
      group: 'presentation',
      initialValue: 'Le ski de randonnée est un moyen de déplacement unique en montagne. Il permet de s\'évader, de tracer sa propre voie et de savourer chaque descente après l\'effort de la montée.',
    }),
    defineField({
      name: 'presentationDescriptionEn',
      title: 'Description Présentation (EN)',
      type: 'text',
      rows: 3,
      group: 'presentation',
      initialValue: 'Ski touring is a unique way of traveling in the mountains. It allows you to escape, carve your own path, and savor every descent after the effort of the climb.',
    }),
    defineField({
      name: 'presentationCards',
      title: 'Cartes de Présentation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icône',
              type: 'string',
              options: {
                list: [
                  { title: 'Boussole (Compass)', value: 'Compass' },
                  { title: 'Récompense (Award)', value: 'Award' },
                  { title: 'Bouclier (Shield)', value: 'Shield' },
                ],
              },
              initialValue: 'Compass',
            }),
            defineField({
              name: 'title',
              title: 'Titre (FR)',
              type: 'string',
            }),
            defineField({
              name: 'titleEn',
              title: 'Titre (EN)',
              type: 'string',
            }),
            defineField({
              name: 'text',
              title: 'Texte (FR)',
              type: 'text',
              rows: 4,
            }),
            defineField({
              name: 'textEn',
              title: 'Texte (EN)',
              type: 'text',
              rows: 4,
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'icon',
            },
            prepare({ title, subtitle }) {
              return {
                title: title || 'Carte sans titre',
                subtitle: `Icône: ${subtitle}`,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(3).max(3),
      group: 'presentation',
      initialValue: [
        {
          icon: 'Compass',
          title: 'Le Ski de Randonnée',
          titleEn: 'Ski Touring',
          text: 'Un pas après l\'autre, loin de la foule et des remontées mécaniques. Découvrez le plaisir de l\'effort physique à la montée pour accéder à des combes sauvages et des sommets préservés des Hautes-Alpes.',
          textEn: 'One step at a time, far from crowds and ski lifts. Discover the pleasure of climbing and access wild valleys and untouched peaks in the Southern Alps.',
        },
        {
          icon: 'Award',
          title: 'Freerando & Hors-Piste',
          titleEn: 'Freerando & Off-Piste',
          text: 'Profitez du meilleur des deux mondes. Utilisez les stations pour vous hisser en altitude, puis évadez-vous en peaux de phoque pour tracer des hors-pistes d\'exception et de longues combes de neige vierge.',
          textEn: 'Get the best of both worlds. Use resort lifts to gain height quickly, then skin away to track exceptional off-piste lines and long valleys of virgin powder.',
        },
        {
          icon: 'Shield',
          title: 'Stages & Raids à Ski',
          titleEn: 'Ski Raids & Stages',
          text: 'L\'immersion totale en montagne sur plusieurs jours. De refuge en gîte d\'altitude, vivez l\'itinérance à ski dans le Queyras, la Clarée, l\'Ubaye ou lors de voyages d\'exception en Norvège.',
          textEn: 'Total mountain immersion over several days. From hut to refuge, experience ski touring itinerancy in Queyras, Clarée, Ubaye, or during exceptional trips to Norway.',
        },
      ],
    }),

    // ========================================
    // 3️⃣ ACTIVITIES SECTION
    // ========================================
    defineField({
      name: 'activitiesTitle',
      title: 'Titre Activités (Normal)',
      type: 'string',
      group: 'activities',
    }),
    defineField({
      name: 'activitiesTitleAccent',
      title: 'Titre Activités (Turquoise)',
      type: 'string',
      group: 'activities',
    }),
    defineField({
      name: 'activitiesDescription',
      title: 'Description Activités',
      type: 'text',
      group: 'activities',
    }),

    // ========================================
    // 4️⃣ SORTIES SECTION
    // ========================================
    defineField({
      name: 'sortiesBadge',
      title: 'Badge Sorties',
      type: 'string',
      group: 'sorties',
      initialValue: 'Prochaines sorties',
    }),
    defineField({
      name: 'sortiesTitle',
      title: 'Titre Sorties (Normal)',
      type: 'string',
      group: 'sorties',
    }),
    defineField({
      name: 'sortiesTitleAccent',
      title: 'Titre Sorties (Turquoise)',
      type: 'string',
      group: 'sorties',
    }),

    // ========================================
    // 5️⃣ ABOUT SECTION
    // ========================================
    defineField({
      name: 'aboutBadge',
      title: 'Badge À Propos',
      type: 'string',
      group: 'about',
      initialValue: 'Le Guide',
    }),
    defineField({
      name: 'aboutTitle',
      title: 'Titre À Propos (Normal)',
      type: 'string',
      group: 'about',
    }),
    defineField({
      name: 'aboutTitleAccent',
      title: 'Titre À Propos (Turquoise)',
      type: 'string',
      group: 'about',
    }),
    defineField({
      name: 'aboutDescription',
      title: 'Description À Propos',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'about',
    }),
    defineField({
      name: 'aboutImage',
      title: 'Image À Propos',
      type: 'image',
      options: { hotspot: true },
      group: 'about',
    }),
    defineField({
      name: 'experienceYears',
      title: 'Années d\'expérience',
      type: 'number',
      group: 'about',
    }),

    // ========================================
    // 6️⃣ CONTACT HOME SECTION
    // ========================================
    defineField({
      name: 'contactBadge',
      title: 'Badge Contact',
      type: 'string',
      group: 'contact',
      initialValue: 'Vous avez un projet ?',
    }),
    defineField({
      name: 'contactTitle',
      title: 'Titre Contact (Normal)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'contactTitleAccent',
      title: 'Titre Contact (Turquoise)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'contactDescription',
      title: 'Description Contact',
      type: 'text',
      group: 'contact',
    }),

    // ========================================
    // 7️⃣ ADVENTURE START SECTION (FAQ)
    // ========================================
    defineField({
      name: 'adventureBadge',
      title: 'Badge Aventure',
      type: 'string',
      group: 'adventure',
      initialValue: 'FAQ',
    }),
    defineField({
      name: 'adventureTitle',
      title: 'Titre Aventure (Normal)',
      type: 'string',
      group: 'adventure',
    }),
    defineField({
      name: 'adventureTitleAccent',
      title: 'Titre Aventure (Turquoise)',
      type: 'string',
      group: 'adventure',
    }),
    defineField({
      name: 'adventureDescription',
      title: 'Description Aventure',
      type: 'text',
      group: 'adventure',
    }),
    defineField({
      name: 'adventureFeatures',
      title: 'Points forts',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'adventure',
    }),
    defineField({
      name: 'adventureImage',
      title: 'Image Aventure',
      type: 'image',
      options: { hotspot: true },
      group: 'adventure',
    }),
    defineField({
      name: 'adventureFaqs',
      title: 'Questions / Réponses FAQ',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'questionFr',
              title: 'Question (FR)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'questionEn',
              title: 'Question (EN)',
              type: 'string',
            }),
            defineField({
              name: 'answerFr',
              title: 'Réponse (FR)',
              type: 'text',
              rows: 6,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'answerEn',
              title: 'Réponse (EN)',
              type: 'text',
              rows: 6,
            }),
          ],
          preview: {
            select: {
              title: 'questionFr',
            },
            prepare({ title }) {
              return {
                title: title || 'Question sans titre',
              }
            },
          },
        },
      ],
      group: 'adventure',
      validation: (Rule) => Rule.max(10),
    }),

    // ========================================
    // 8️⃣ TESTIMONIALS SECTION
    // ========================================
    defineField({
      name: 'testimonialsBadge',
      title: 'Badge Témoignages',
      type: 'string',
      group: 'testimonials',
      initialValue: 'Avis Clients',
    }),
    defineField({
      name: 'testimonialsTitle',
      title: 'Titre Témoignages (Normal)',
      type: 'string',
      group: 'testimonials',
    }),
    defineField({
      name: 'testimonialsTitleAccent',
      title: 'Titre Témoignages (Turquoise)',
      type: 'string',
      group: 'testimonials',
    }),

    // ========================================
    // 9️⃣ BLOG SECTION
    // ========================================
    defineField({
      name: 'blogBadge',
      title: 'Badge Blog',
      type: 'string',
      group: 'blog',
      initialValue: 'Carnet de voyage',
    }),
    defineField({
      name: 'blogTitle',
      title: 'Titre Blog (Normal)',
      type: 'string',
      group: 'blog',
    }),
    defineField({
      name: 'blogTitleAccent',
      title: 'Titre Blog (Turquoise)',
      type: 'string',
      group: 'blog',
    }),

    // ========================================
    // ⚙️ LAYOUT CONTROLS
    // ========================================
    defineField({
      name: 'hideTestimonials',
      title: 'Masquer la section Témoignages',
      type: 'boolean',
      initialValue: false,
      group: 'layout',
    }),
    defineField({
      name: 'hideBlog',
      title: 'Masquer la section Blog',
      type: 'boolean',
      initialValue: false,
      group: 'layout',
    }),
    defineField({
      name: 'featuredPostsLimit',
      title: "Nombre d'articles de blog",
      type: 'number',
      initialValue: 3,
      group: 'layout',
      validation: (Rule) => Rule.min(1).max(9),
    }),
  ],
})
