import { defineField, defineType } from 'sanity'
import { Mountain } from 'lucide-react'

export const stagesRaidsPageType = defineType({
  name: 'stagesRaidsPage',
  title: 'Page Stages & Raids',
  type: 'document',
  icon: Mountain,
  groups: [
    { name: 'hero', title: '🎯 Bloc Hero', default: true },
    { name: 'seo', title: '🔎 SEO' },
  ],
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Image Hero',
      type: 'image',
      options: { hotspot: true },
      description: 'Grande image en haut de la page. Si vide, l\'image actuelle est conservée.',
      group: 'hero',
    }),
    defineField({ name: 'badge', title: 'Petit texte au-dessus du titre (FR)', type: 'string', initialValue: 'Immersion totale', group: 'hero' }),
    defineField({ name: 'badgeEn', title: 'Petit texte au-dessus du titre (EN)', type: 'string', initialValue: 'Full immersion', group: 'hero' }),
    defineField({ name: 'title', title: 'Titre (FR)', type: 'string', initialValue: 'Stages et raids à ski', group: 'hero' }),
    defineField({ name: 'titleEn', title: 'Titre (EN)', type: 'string', initialValue: 'Ski touring stages & raids', group: 'hero' }),
    defineField({
      name: 'description',
      title: 'Texte d\'introduction (FR)',
      type: 'text',
      rows: 3,
      initialValue: 'De refuge en gîte, vivez des raids à ski d\'exception de plusieurs jours. Du Queyras aux Alpes de Lyngen en Norvège, découvrez les plus beaux massifs.',
      group: 'hero',
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Texte d\'introduction (EN)',
      type: 'text',
      rows: 3,
      initialValue: 'From hut to lodge, experience exceptional multi-day ski raids. From Queyras to the Lyngen Alps in Norway, discover the most beautiful mountain ranges.',
      group: 'hero',
    }),
    defineField({
      name: 'seoTitle',
      title: 'Titre Google',
      type: 'string',
      description: 'Titre affiché dans l\'onglet et sur Google. Si vide : « Stages et raids à ski de randonnée ».',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Description Google',
      type: 'text',
      rows: 3,
      description: 'Texte sous le titre dans les résultats Google (160 caractères max conseillé).',
      validation: (Rule) => Rule.max(200),
      group: 'seo',
    }),
  ],
  preview: {
    select: { media: 'heroImage' },
    prepare: ({ media }) => ({ title: 'Page Stages & Raids', media }),
  },
})
