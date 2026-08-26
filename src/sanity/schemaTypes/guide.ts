import { defineField, defineType } from 'sanity'
import { UserRound } from 'lucide-react'

export const guideType = defineType({
  name: 'guide',
  title: 'Le Guide',
  type: 'document',
  icon: UserRound,
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'string',
      initialValue: 'Votre Guide',
    }),
    defineField({
      name: 'titleNormal',
      title: 'Titre (Normal)',
      type: 'string',
    }),
    defineField({
      name: 'titleAccent',
      title: 'Titre (Turquoise)',
      type: 'string',
    }),
    defineField({
      name: 'quote',
      title: 'Citation',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image de profil',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'introText',
      title: 'Texte d\'introduction',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Texte affiché avant la section "Qui suis-je ?"',
    }),
    defineField({
      name: 'bioTitle',
      title: 'Titre de la Bio',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Biographie',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'certification',
      title: 'Certification (ex: UIAGM)',
      type: 'string',
    }),
    defineField({
      name: 'certificationSub',
      title: 'Sous-titre Certification',
      type: 'string',
    }),
    defineField({
      name: 'experience',
      title: 'Expérience (ex: 15+)',
      type: 'string',
    }),
    defineField({
      name: 'experienceSub',
      title: 'Sous-titre Expérience',
      type: 'string',
    }),
    defineField({
      name: 'mission',
      title: 'Ma Mission',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Section "Ma mission"',
    }),
    defineField({
      name: 'valuesText',
      title: 'Mes Valeurs (Texte)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Texte de la section "Mes valeurs"',
    }),
    defineField({
      name: 'values',
      title: 'Mes Valeurs (Cards)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Titre', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text' }),
          ],
        },
      ],
    }),
  ],
})
