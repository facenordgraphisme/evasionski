import { defineType, defineField } from 'sanity'

export const niveauSki = defineType({
  name: 'niveauSki',
  title: 'Niveau en Ski',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge (ex: AUTO-ÉVALUATION)',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Titre principal',
      type: 'string',
    }),
    defineField({
      name: 'introText',
      title: 'Texte d\'introduction',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'adviceTitle',
      title: 'Titre du conseil (Pourquoi s\'évaluer honnêtement ?)',
      type: 'string',
    }),
    defineField({
      name: 'adviceText',
      title: 'Texte du conseil',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'ctaText',
      title: 'Texte du CTA (ex: CONTACTER TONI)',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      title: 'Lien du CTA',
      type: 'string',
    }),
    defineField({
      name: 'technicalTabLabel',
      title: 'Label onglet technique',
      type: 'string',
    }),
    defineField({
      name: 'physicalTabLabel',
      title: 'Label onglet physique',
      type: 'string',
    }),
    defineField({
      name: 'technicalLevels',
      title: 'Niveaux Techniques',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'level',
              title: 'Niveau (1-4)',
              type: 'number',
              validation: (Rule) => Rule.required().min(1).max(4),
            }),
            defineField({
              name: 'title',
              title: 'Titre',
              type: 'string',
            }),
            defineField({
              name: 'titleEn',
              title: 'Titre (EN)',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Critères (liste)',
              type: 'array',
              of: [{ type: 'text', rows: 2 }],
            }),
            defineField({
              name: 'summary',
              title: 'Résumé',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'summaryEn',
              title: 'Résumé (EN)',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'trips',
              title: 'Sorties adaptées',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'Noms exacts des sorties (ex: "Journée ski de randonnée")',
            }),
          ],
          preview: {
            select: {
              level: 'level',
              title: 'title',
            },
            prepare({ level, title }) {
              return {
                title: `Niveau ${level}`,
                subtitle: title,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'physicalLevels',
      title: 'Niveaux Physiques',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'level',
              title: 'Niveau (1-4)',
              type: 'number',
              validation: (Rule) => Rule.required().min(1).max(4),
            }),
            defineField({
              name: 'title',
              title: 'Titre',
              type: 'string',
            }),
            defineField({
              name: 'titleEn',
              title: 'Titre (EN)',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Critères (liste)',
              type: 'array',
              of: [{ type: 'text', rows: 2 }],
            }),
            defineField({
              name: 'summary',
              title: 'Résumé',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'summaryEn',
              title: 'Résumé (EN)',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'trips',
              title: 'Sorties adaptées',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'Noms exacts des sorties (ex: "Découverte du Queyras en ski")',
            }),
          ],
          preview: {
            select: {
              level: 'level',
              title: 'title',
            },
            prepare({ level, title }) {
              return {
                title: `Niveau ${level}`,
                subtitle: title,
              }
            },
          },
        },
      ],
    }),
  ],
})
