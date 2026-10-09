import { defineField, defineType } from 'sanity'
import { Mountain } from 'lucide-react'

export const sejourType = defineType({
  name: 'sejour',
  title: 'Catalogue des Séjours',
  type: 'document',
  icon: Mountain,
  groups: [
    {
      name: 'hero',
      title: '🎯 Bloc Hero',
    },
    {
      name: 'contenu',
      title: '📝 Onglets Contenu',
    },
    {
      name: 'fiche',
      title: '📊 Fiche Technique',
    },
    {
      name: 'faq',
      title: '❓ FAQ',
    },
    {
      name: 'options',
      title: '⚙️ Options & SEO',
    },
  ],
  fields: [
    defineField({
      name: 'masquer',
      title: 'Masquer cette page du site',
      type: 'boolean',
      initialValue: false,
      description: 'Activé : la page est invisible pour les visiteurs (lien, menus, listes, calendrier, Google).',
      group: ['hero', 'contenu', 'fiche', 'faq', 'options'],
    }),
    defineField({
      name: 'title',
      title: 'Titre du séjour',
      type: 'string',
      description: 'Ex: Ski de randonnée aux Orres',
      validation: (Rule) => Rule.required(),
      group: 'hero',
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
      group: 'hero',
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
      group: 'fiche',
    }),
    defineField({
      name: 'massifs',
      title: 'Massif(s)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'massif' }] }],
      description: 'Sélectionnez un ou plusieurs massifs.',
      group: 'fiche',
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
      group: 'fiche',
    }),
    defineField({
      name: 'duree',
      title: 'Durée',
      type: 'string',
      description: 'Ex: 1 jour, 3 jours, 5 jours',
      group: 'fiche',
    }),
    defineField({
      name: 'image',
      title: 'Image principale',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      group: 'hero',
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
      group: 'hero',
    }),
    defineField({
      name: 'description',
      title: 'Description courte',
      type: 'text',
      rows: 4,
      description: 'Résumé affiché sur les cartes et en haut de page.',
      group: 'hero',
    }),
    defineField({
      name: 'prixDefaut',
      title: 'Prix par défaut (affichage)',
      type: 'string',
      description: 'Ex: À partir de 95€/pers (pour l\'affichage sur les cartes)',
      group: 'fiche',
    }),

    // CONTENU INTRO
    defineField({
      name: 'intro',
      title: 'Introduction / Présentation',
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
      description: 'Texte d\'introduction affiché en haut de la page.',
      group: 'contenu',
    }),

    // ONGLET ESSENTIEL - Version structurée
    defineField({
      name: 'essentielStructure',
      title: 'Onglet — Essentiel (Structuré) ✨',
      type: 'object',
      group: 'contenu',
      fields: [
        defineField({
          name: 'tarifs',
          title: '💶 Tarifs & Budget',
          type: 'text',
          rows: 3,
          description: 'Ex: Tarif : 95€ / pers en formule collective',
        }),
        defineField({
          name: 'niveau',
          title: '📊 Niveau & Effort',
          type: 'text',
          rows: 3,
          description: 'Ex: Skieurs : débrouillés-intermédiaires • Effort : modéré',
        }),
        defineField({
          name: 'destinations',
          title: '🗺️ Destinations & Massifs',
          type: 'text',
          rows: 2,
          description: 'Ex: Terrains préservés des Hautes-Alpes : sorties dans le Queyras, l\'Ubaye...',
        }),
        defineField({
          name: 'hebergement',
          title: '🏠 Hébergement',
          type: 'text',
          rows: 3,
          description: 'Ex: Hébergement en pension complète à Abriès au gîte l\'Edelweiss',
        }),
        defineField({
          name: 'logistique',
          title: '🚐 Logistique & Transport',
          type: 'text',
          rows: 3,
          description: 'Ex: Prêt de sac à dos de montagne et kit secours (DVA, pelle, sonde)',
        }),
        defineField({
          name: 'materiel',
          title: '🛡️ Matériel & Secours',
          type: 'text',
          rows: 3,
          description: 'Ex: Prêt de DVA, pelle, sonde sur demande',
        }),
        defineField({
          name: 'duree',
          title: '⏱️ Durée & Format',
          type: 'text',
          rows: 2,
          description: 'Ex: Une journée accessible, parfait pour découvrir le ski de rando',
        }),
        defineField({
          name: 'autresInfos',
          title: 'ℹ️ Autres informations',
          type: 'text',
          rows: 3,
          description: 'Informations supplémentaires (optionnel)',
        }),
      ],
      description: '✨ RECOMMANDÉ : Remplissez chaque section séparément pour un affichage optimisé',
    }),

    // ONGLET ESSENTIEL - Version texte libre (fallback)
    defineField({
      name: 'essentiel',
      title: 'Onglet — Essentiel (Texte libre - Ancien format)',
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
      description: '⚠️ Utilisez plutôt "Essentiel (Structuré)" ci-dessus pour un meilleur contrôle',
      group: 'contenu',
    }),

    // ONGLET PROGRAMME - Version structurée
    defineField({
      name: 'programmeStructure',
      title: 'Onglet — Programme (Structuré) ✨',
      type: 'array',
      group: 'contenu',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'jour',
              title: '📅 Intitulé du jour',
              type: 'string',
              description: 'Ex: Jour 1, Jour 2, 8H30 - Rendez-vous',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'titre',
              title: '📝 Titre / Résumé',
              type: 'string',
              description: 'Ex: Sommet sauvage et grand itinéraire hors-piste',
            }),
            defineField({
              name: 'description',
              title: '📄 Description',
              type: 'text',
              rows: 5,
              description: 'Description détaillée de la journée',
            }),
          ],
          preview: {
            select: {
              jour: 'jour',
              titre: 'titre',
            },
            prepare({ jour, titre }) {
              return {
                title: jour || 'Jour',
                subtitle: titre || '',
              }
            },
          },
        },
      ],
      description: '✨ RECOMMANDÉ : Créez chaque jour séparément pour un affichage optimisé',
    }),

    // ONGLET PROGRAMME - Version texte libre (fallback)
    defineField({
      name: 'programme',
      title: 'Onglet — Programme (Texte libre - Ancien format)',
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
      description: '⚠️ Utilisez plutôt "Programme (Structuré)" ci-dessus pour un meilleur contrôle',
      group: 'contenu',
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
      group: 'contenu',
    }),
    defineField({
      name: 'materielInclus',
      title: 'Matériel — Inclus',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Liste à puces du matériel fourni.',
      group: 'contenu',
    }),
    defineField({
      name: 'materielNonInclus',
      title: 'Matériel — Non inclus / À prévoir',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Liste à puces du matériel à apporter.',
      group: 'contenu',
    }),
    defineField({
      name: 'materielPdf',
      title: 'Matériel — PDF téléchargeable',
      type: 'file',
      options: { accept: '.pdf' },
      group: 'contenu',
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
      group: 'contenu',
    }),

    // ONGLET INCLUS / NON INCLUS
    defineField({
      name: 'budgetInclus',
      title: 'Onglet Inclus / Non inclus — Inclus ✅',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Une ligne par prestation incluse (affichée avec une coche verte).',
      group: 'contenu',
    }),
    defineField({
      name: 'budgetNonInclus',
      title: 'Onglet Inclus / Non inclus — Non inclus ❌',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Une ligne par élément non inclus (affiché avec une croix rouge).',
      group: 'contenu',
    }),

    // FAQs
    defineField({
      name: 'faqs',
      title: 'Questions Fréquentes (FAQs)',
      type: 'array',
      group: 'faq',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'questionEn',
              title: 'Question (EN)',
              type: 'string',
            }),
            defineField({
              name: 'answer',
              title: 'Réponse',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'answerEn',
              title: 'Réponse (EN)',
              type: 'text',
              rows: 4,
            }),
          ],
          preview: {
            select: {
              title: 'question',
            },
            prepare({ title }) {
              return {
                title: title || 'Question sans titre',
              }
            },
          },
        },
      ],
      description: 'Questions/Réponses affichées sous les onglets.',
    }),

    // OPTIONS
    defineField({
      name: 'hideUpcomingSorties',
      title: 'Masquer le bloc "Prochains Départs"',
      type: 'boolean',
      initialValue: false,
      description: 'Cochez pour masquer les dates sur la page (ex: séjour sur demande uniquement).',
      group: 'options',
    }),

    // SEO
    defineField({
      name: 'seoTitle',
      title: 'SEO — Titre',
      type: 'string',
      description: 'Si vide, utilise le titre du séjour.',
      group: 'options',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO — Description',
      type: 'text',
      rows: 3,
      description: 'Meta description pour les moteurs de recherche.',
      group: 'options',
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
