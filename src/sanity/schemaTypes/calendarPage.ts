import { defineField, defineType } from 'sanity'
import { Calendar } from 'lucide-react'

export const calendarPageType = defineType({
  name: 'calendarPage',
  title: 'Page Calendrier',
  type: 'document',
  icon: Calendar,
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Image Hero',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image affichée en haut de la page (30% de hauteur)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Badge (FR)',
      type: 'string',
      initialValue: 'Calendrier',
    }),
    defineField({
      name: 'badgeEn',
      title: 'Badge (EN)',
      type: 'string',
      initialValue: 'Schedule',
    }),
    defineField({
      name: 'title',
      title: 'Titre (FR)',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'PROCHAINS',
    }),
    defineField({
      name: 'titleEn',
      title: 'Titre (EN)',
      type: 'string',
      initialValue: 'UPCOMING',
    }),
    defineField({
      name: 'titleAccent',
      title: 'Titre accent (FR)',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'DÉPARTS',
    }),
    defineField({
      name: 'titleAccentEn',
      title: 'Titre accent (EN)',
      type: 'string',
      initialValue: 'TRIPS',
    }),
    defineField({
      name: 'description',
      title: 'Description (FR)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
      initialValue: 'Consultez le calendrier de toutes nos sorties de ski de randonnée, freerando et raids à ski dans les Hautes-Alpes.',
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Description (EN)',
      type: 'text',
      rows: 3,
      initialValue: 'Check the calendar of all our ski touring, freerando and ski raid trips in the Hautes-Alpes.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'badge',
      media: 'heroImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Page Calendrier',
        subtitle: subtitle,
        media,
      }
    },
  },
})
