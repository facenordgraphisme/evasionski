import { defineField, defineType } from 'sanity'
import { Compass } from 'lucide-react'

export const activitiesType = defineType({
  name: 'activitiesPage',
  title: 'Page Activités',
  type: 'document',
  icon: Compass,
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Titre de la page (FR)',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'NOS ACTIVITÉS',
    }),
    defineField({
      name: 'pageTitleEn',
      title: 'Titre de la page (EN)',
      type: 'string',
      initialValue: 'OUR ACTIVITIES',
    }),
    defineField({
      name: 'pageDescription',
      title: 'Description de la page (FR)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
      initialValue: 'Découvrez toutes les activités que je propose. Chaque sortie est encadrée avec passion et une sécurité absolue.',
    }),
    defineField({
      name: 'pageDescriptionEn',
      title: 'Description de la page (EN)',
      type: 'text',
      rows: 3,
      initialValue: 'Discover all the activities I offer. Each outing is supervised with passion and absolute safety.',
    }),
    defineField({
      name: 'activities',
      title: 'Liste des activités',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Titre (FR)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'titleEn',
              title: 'Titre (EN)',
              type: 'string',
            }),
            defineField({
              name: 'slug',
              title: 'Slug (lien)',
              type: 'string',
              description: 'Le slug de la page de destination (ex: ski-de-randonnee-engagement-prive)',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description (FR)',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'descriptionEn',
              title: 'Description (EN)',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'price',
              title: 'Prix affiché (FR)',
              type: 'string',
              description: 'Ex: À partir de 400€/jour',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'priceEn',
              title: 'Prix affiché (EN)',
              type: 'string',
              description: 'Ex: From 400€/day',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'order',
              title: 'Ordre d\'affichage',
              type: 'number',
              description: 'Ordre d\'affichage sur la page (1 = premier)',
              validation: (Rule) => Rule.required().min(1),
              initialValue: 1,
            }),
            defineField({
              name: 'featured',
              title: 'Mettre en avant',
              type: 'boolean',
              description: 'Afficher en premier / mise en avant spéciale',
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'price',
              media: 'image',
              order: 'order',
            },
            prepare({ title, subtitle, media, order }) {
              return {
                title: `${order}. ${title}`,
                subtitle,
                media,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).max(8),
    }),
  ],
  preview: {
    select: {
      title: 'pageTitle',
    },
    prepare({ title }) {
      return {
        title: title || 'Page Activités',
      }
    },
  },
})
