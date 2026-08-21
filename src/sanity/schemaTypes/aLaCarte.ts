import { defineField, defineType } from 'sanity'
import { Sparkles } from 'lucide-react'

export const aLaCarteType = defineType({
  name: 'aLaCarte',
  title: 'Page À la Carte / Engagement Privé',
  type: 'document',
  icon: Sparkles,
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de la page',
      type: 'string',
      initialValue: 'Ski de randonnée à la carte',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      initialValue: { current: 'ski-de-randonnee-engagement-prive' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero — Titre',
      type: 'string',
      description: 'Titre principal en haut de page.',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero — Sous-titre',
      type: 'string',
      description: 'Sous-titre accrocheur.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero — Image de fond',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Description courte',
      type: 'text',
      rows: 4,
      description: 'Texte d\'introduction présenté sous le hero.',
    }),
    defineField({
      name: 'content',
      title: 'Contenu principal',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
          ],
        },
        { type: 'image' },
      ],
      description: 'Contenu détaillé de la page (FAQ, avantages, etc.).',
    }),
    defineField({
      name: 'tarifs',
      title: 'Section Tarifs',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
          ],
        },
      ],
      description: 'Explications sur les tarifs personnalisés.',
    }),
    defineField({
      name: 'prestationsIncluses',
      title: 'Prestations incluses',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Liste à puces des prestations incluses.',
    }),
    defineField({
      name: 'prestationsNonIncluses',
      title: 'Prestations non incluses',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Liste à puces des prestations non incluses.',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA — Texte du bouton',
      type: 'string',
      initialValue: 'Créer mon aventure',
      description: 'Texte du bouton d\'appel à l\'action.',
    }),
    defineField({
      name: 'ctaSubtext',
      title: 'CTA — Sous-texte',
      type: 'string',
      description: 'Texte affiché sous le bouton (ex: "Contactez-moi pour un devis personnalisé").',
    }),
    defineField({
      name: 'gallery',
      title: 'Galerie photos',
      type: 'array',
      options: {
        layout: 'grid',
      },
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', type: 'string', title: 'Texte alternatif' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO — Titre',
      type: 'string',
      description: 'Si vide, utilise le titre de la page.',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO — Description',
      type: 'text',
      rows: 3,
      description: 'Meta description pour les moteurs de recherche.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'heroImage',
    },
    prepare(selection) {
      const { title, media } = selection
      return {
        title: title || 'Page À la Carte',
        subtitle: '📝 Page statique avec CTA',
        media,
      }
    },
  },
})
