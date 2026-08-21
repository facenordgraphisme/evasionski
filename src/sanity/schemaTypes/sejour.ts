import { defineField, defineType } from 'sanity'
import { Mountain } from 'lucide-react'

export const sejourType = defineType({
  name: 'sejour',
  title: 'Catalogue des Séjours',
  type: 'document',
  icon: Mountain,
  fields: [
    defineField({
      name: 'title',
      title: 'Titre du séjour',
      type: 'string',
      description: 'Ex: Ski de randonnée aux Orres',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categorie',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Ski de randonnée journée', value: 'journee-ski-rando' },
          { title: 'Freerando journée', value: 'journee-freerando' },
          { title: 'Stages & Raids', value: 'stage-raid' },
        ],
      },
      description: 'Catégorie principale de ce séjour.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'massifs',
      title: 'Massif(s)',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Écrins', value: 'ecrins' },
          { title: 'Queyras', value: 'queyras' },
          { title: 'Ubaye', value: 'ubaye' },
          { title: 'Clarée', value: 'claree' },
          { title: 'Cerces', value: 'cerces' },
          { title: 'Dévoluy', value: 'devoluy' },
          { title: 'Champsaur', value: 'champsaur' },
          { title: 'Norvège', value: 'norvege' },
          { title: 'Autre', value: 'autre' },
        ],
      },
      description: 'Sélectionnez un ou plusieurs massifs.',
    }),
    defineField({
      name: 'niveauDefaut',
      title: 'Niveau par défaut',
      type: 'string',
      options: {
        list: [
          { title: 'Débutant', value: 'debutant' },
          { title: 'Intermédiaire', value: 'intermediaire' },
          { title: 'Confirmé', value: 'confirme' },
          { title: 'Expert', value: 'expert' },
        ],
      },
      description: 'Niveau technique par défaut (peut être surchargé au niveau de chaque date).',
    }),
    defineField({
      name: 'duree',
      title: 'Durée',
      type: 'string',
      description: 'Ex: 1 jour, 3 jours, 5 jours',
    }),
    defineField({
      name: 'image',
      title: 'Image principale',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
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
      name: 'description',
      title: 'Description courte',
      type: 'text',
      rows: 4,
      description: 'Résumé affiché sur les cartes et en haut de page.',
    }),
    defineField({
      name: 'prixDefaut',
      title: 'Prix par défaut (affichage)',
      type: 'string',
      description: 'Ex: À partir de 95€/pers (pour l\'affichage sur les cartes)',
    }),

    // ONGLET PROGRAMME
    defineField({
      name: 'programme',
      title: 'Onglet — Programme',
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
      description: 'Programme détaillé jour par jour.',
    }),

    // ONGLET MATÉRIEL
    defineField({
      name: 'materiel',
      title: 'Onglet — Matériel (Texte libre)',
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
      description: 'Description générale du matériel.',
    }),
    defineField({
      name: 'materielInclus',
      title: 'Matériel — Inclus',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Liste à puces du matériel fourni.',
    }),
    defineField({
      name: 'materielNonInclus',
      title: 'Matériel — Non inclus / À prévoir',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Liste à puces du matériel à apporter.',
    }),
    defineField({
      name: 'materielPdf',
      title: 'Matériel — PDF téléchargeable',
      type: 'file',
      options: { accept: '.pdf' },
    }),

    // ONGLET INFOS PRATIQUES
    defineField({
      name: 'infosPratiques',
      title: 'Onglet — Infos Pratiques',
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
      description: 'Informations pratiques (hébergement, RDV, etc.).',
    }),

    // ONGLET BUDGET
    defineField({
      name: 'budget',
      title: 'Onglet — Budget (Texte libre)',
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
      description: 'Explications sur le budget.',
    }),
    defineField({
      name: 'budgetInclus',
      title: 'Budget — Inclus',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Liste à puces des prestations incluses.',
    }),
    defineField({
      name: 'budgetNonInclus',
      title: 'Budget — Non inclus',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Liste à puces des frais non inclus.',
    }),

    // OPTIONS
    defineField({
      name: 'hideUpcomingSorties',
      title: 'Masquer le bloc "Prochains Départs"',
      type: 'boolean',
      initialValue: false,
      description: 'Cochez pour masquer les dates sur la page (ex: séjour sur demande uniquement).',
    }),

    // SEO
    defineField({
      name: 'seoTitle',
      title: 'SEO — Titre',
      type: 'string',
      description: 'Si vide, utilise le titre du séjour.',
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
      categorie: 'categorie',
      massifs: 'massifs',
      media: 'image',
    },
    prepare(selection) {
      const { title, categorie, massifs, media } = selection

      let categorieLabel = ''
      if (categorie === 'journee-ski-rando') categorieLabel = '📅 Journée ski rando'
      else if (categorie === 'journee-freerando') categorieLabel = '🎿 Journée freerando'
      else if (categorie === 'stage-raid') categorieLabel = '🏔️ Stage / Raid'

      const massifStr = massifs && massifs.length > 0 ? ` • ${massifs.join(', ')}` : ''

      return {
        title: title || 'Sans titre',
        subtitle: `${categorieLabel}${massifStr}`,
        media,
      }
    },
  },
})
