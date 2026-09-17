import { defineType, defineField } from 'sanity'
import { Mountain } from 'lucide-react'

export const massifType = defineType({
  name: 'massif',
  title: 'Massifs',
  type: 'document',
  icon: Mountain,
  fields: [
    defineField({
      name: 'nom',
      title: 'Nom du massif',
      type: 'string',
      description: 'Ex: Queyras, Écrins, Ubaye...',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nomEn',
      title: 'Nom (EN)',
      type: 'string',
      description: 'Traduction anglaise (optionnel)',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'nom',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Courte description du massif (optionnel)',
    }),
    defineField({
      name: 'ordre',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Pour trier les massifs (1 = premier, 2 = deuxième, etc.)',
      initialValue: 10,
    }),
  ],
  preview: {
    select: {
      title: 'nom',
      subtitle: 'description',
      ordre: 'ordre',
    },
    prepare({ title, subtitle, ordre }) {
      return {
        title: title || 'Sans nom',
        subtitle: subtitle || `Ordre: ${ordre || '—'}`,
      }
    },
  },
  orderings: [
    {
      title: 'Ordre d\'affichage',
      name: 'ordreAsc',
      by: [
        { field: 'ordre', direction: 'asc' },
        { field: 'nom', direction: 'asc' },
      ],
    },
    {
      title: 'Nom A-Z',
      name: 'nomAsc',
      by: [{ field: 'nom', direction: 'asc' }],
    },
  ],
})
