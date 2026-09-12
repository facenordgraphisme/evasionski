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
      name: 'introTitle',
      title: 'Titre de l\'intro',
      type: 'string',
      description: 'Ex: Moniteur de ski de randonnée dans les Hautes-Alpes 05',
    }),
    defineField({
      name: 'introParagraph',
      title: 'Paragraphe d\'introduction',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'introLinkText',
      title: 'Texte du lien prérogatives',
      type: 'string',
    }),
    defineField({
      name: 'introLinkUrl',
      title: 'URL du lien prérogatives',
      type: 'url',
    }),
    defineField({
      name: 'introClosure',
      title: 'Phrase de conclusion intro',
      type: 'string',
      description: 'Ex: Offrez-vous des souvenirs inoubliables.',
    }),
    defineField({
      name: 'introText',
      title: 'Texte d\'introduction (Portable Text)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Alternative: Texte riche affiché avant la section "Qui suis-je ?"',
      hidden: true, // Caché car on utilise les champs simples ci-dessus
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
      name: 'missionTitle',
      title: 'Titre "Ma Mission"',
      type: 'string',
      initialValue: 'Ma Mission',
    }),
    defineField({
      name: 'missionImage',
      title: 'Image "Ma Mission"',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'mission',
      title: 'Contenu "Ma Mission"',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Texte de la section "Ma mission"',
    }),
    defineField({
      name: 'valuesTitle',
      title: 'Titre "Mes Valeurs"',
      type: 'string',
      initialValue: 'Mes Valeurs',
    }),
    defineField({
      name: 'valuesImage',
      title: 'Image "Mes Valeurs"',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'valuesText',
      title: 'Contenu "Mes Valeurs"',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Texte de la section "Mes valeurs"',
    }),
    defineField({
      name: 'whyChooseTitle',
      title: 'Titre "Pourquoi choisir"',
      type: 'string',
      initialValue: 'Pourquoi choisir Evasion Ski ?',
    }),
    defineField({
      name: 'whyChooseSubtitle',
      title: 'Sous-titre "Pourquoi choisir"',
      type: 'string',
      initialValue: 'Une expérience humaine, locale et professionnelle au cœur des Alpes',
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
