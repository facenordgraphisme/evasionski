import { defineField, defineType } from 'sanity'
import { Calendar } from 'lucide-react'

export const sejourDateType = defineType({
  name: 'sejourDate',
  title: 'Dates & Départs',
  type: 'document',
  icon: Calendar,
  fields: [
    defineField({
      name: 'sejour',
      title: 'Séjour',
      type: 'reference',
      to: [{ type: 'sejour' }],
      description: 'Sélectionnez le séjour de base.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL unique)',
      type: 'slug',
      options: {
        source: (doc: any) => {
          const date = doc.dateDebut ? new Date(doc.dateDebut).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' }).replace(/\s/g, '-') : ''
          return `sortie-${date}`
        },
        maxLength: 96,
      },
      description: 'URL unique pour cette sortie (ex: sortie-15-janv)',
    }),
    defineField({
      name: 'titrePersonnalise',
      title: 'Titre personnalisé',
      type: 'string',
      description: 'Titre spécifique pour cette sortie (ex: "Ski de rando au Col des Marches"). Laissez vide pour utiliser le titre du séjour.',
    }),
    defineField({
      name: 'descriptionPersonnalisee',
      title: 'Description personnalisée',
      type: 'text',
      rows: 4,
      description: 'Description spécifique pour cette sortie. Laissez vide pour utiliser celle du séjour parent.',
    }),
    defineField({
      name: 'massifSpecifique',
      title: 'Massif de cette sortie',
      type: 'string',
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
      description: 'Massif spécifique de cette sortie.',
    }),
    defineField({
      name: 'dateDebut',
      title: 'Date de début',
      type: 'date',
      description: 'Date de début de cette sortie.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dateFin',
      title: 'Date de fin',
      type: 'date',
      description: 'Date de fin de cette sortie (peut être identique à la date de début pour une journée).',
    }),
    defineField({
      name: 'prix',
      title: 'Prix',
      type: 'string',
      description: 'Ex: 95€/pers ou 870€/pers',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'niveau',
      title: 'Niveau',
      type: 'string',
      options: {
        list: [
          { title: 'Débutant', value: 'debutant' },
          { title: 'Intermédiaire', value: 'intermediaire' },
          { title: 'Confirmé', value: 'confirme' },
          { title: 'Expert', value: 'expert' },
        ],
      },
      description: 'Si vide, hérite du niveau du séjour parent.',
    }),
    defineField({
      name: 'placesDisponibles',
      title: 'Places disponibles',
      type: 'number',
      description: 'Nombre de places restantes.',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'placesTotales',
      title: 'Places totales',
      type: 'number',
      description: 'Nombre total de places pour cette sortie.',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'complet',
      title: 'Complet ?',
      type: 'boolean',
      initialValue: false,
      description: 'Cochez si la sortie est complète.',
    }),
    defineField({
      name: 'lieuRdv',
      title: 'Lieu de rendez-vous',
      type: 'string',
      description: 'Ex: Parking de Baratier, Office de tourisme des Orres...',
    }),
    defineField({
      name: 'heureRdv',
      title: 'Heure de rendez-vous',
      type: 'string',
      description: 'Ex: 8h30, 9h00...',
    }),
    defineField({
      name: 'programmeSpecifique',
      title: 'Programme spécifique à cette date',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
          ],
        },
      ],
      description: 'Programme détaillé pour cette sortie en particulier (si différent du séjour parent).',
    }),
    defineField({
      name: 'informationsComplementaires',
      title: 'Informations complémentaires',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
          ],
        },
      ],
      description: 'Infos spécifiques à cette date (conditions, particularités, etc.).',
    }),
    defineField({
      name: 'denivele',
      title: 'Dénivelé',
      type: 'string',
      description: 'Ex: 800m D+ / 1200m D+ / 600m D+...',
    }),
    defineField({
      name: 'effortPhysique',
      title: 'Effort physique',
      type: 'string',
      options: {
        list: [
          { title: 'Facile', value: 'facile' },
          { title: 'Modéré', value: 'modere' },
          { title: 'Soutenu', value: 'soutenu' },
          { title: 'Intense', value: 'intense' },
        ],
      },
      description: 'Niveau d\'effort physique requis pour cette sortie.',
    }),
    defineField({
      name: 'budgetSpecifique',
      title: 'Budget spécifique (remplace celui du séjour)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
          ],
        },
      ],
      description: 'Texte de description du budget pour cette sortie. Laissez vide pour utiliser celui du séjour parent.',
    }),
    defineField({
      name: 'budgetInclusSpecifique',
      title: 'Inclus dans le prix (spécifique)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Liste des prestations incluses pour cette sortie. Laissez vide pour utiliser celle du séjour parent.',
    }),
    defineField({
      name: 'budgetNonInclusSpecifique',
      title: 'Non inclus (spécifique)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Liste des prestations non incluses pour cette sortie. Laissez vide pour utiliser celle du séjour parent.',
    }),
    defineField({
      name: 'infosPratiquesSpecifiques',
      title: 'Informations pratiques spécifiques',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
          ],
        },
      ],
      description: 'Informations pratiques spécifiques à cette sortie (déroulement, consignes...). Laissez vide pour utiliser celles du séjour parent.',
    }),
    defineField({
      name: 'image',
      title: 'Image spécifique',
      type: 'image',
      options: { hotspot: true },
      description: 'Image spécifique pour cette date (si différente du séjour parent).',
    }),
    defineField({
      name: 'notes',
      title: 'Notes internes',
      type: 'text',
      rows: 3,
      description: 'Notes privées (non affichées sur le site).',
    }),
  ],
  preview: {
    select: {
      sejourTitle: 'sejour.title',
      dateDebut: 'dateDebut',
      dateFin: 'dateFin',
      prix: 'prix',
      placesDisponibles: 'placesDisponibles',
      placesTotales: 'placesTotales',
      complet: 'complet',
      media: 'sejour.image',
    },
    prepare(selection) {
      const { sejourTitle, dateDebut, dateFin, prix, placesDisponibles, placesTotales, complet, media } = selection

      const mainTitle = sejourTitle || 'Sans titre'

      // Format dates
      let dateStr = ''
      if (dateDebut) {
        const debut = new Date(dateDebut).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })
        if (dateFin && dateFin !== dateDebut) {
          const fin = new Date(dateFin).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })
          dateStr = ` • ${debut} → ${fin}`
        } else {
          dateStr = ` • ${debut}`
        }
      }

      // Status prefix
      let statusPrefix = ''
      let subtitle = ''

      if (complet || placesDisponibles === 0) {
        statusPrefix = '🔴 [COMPLET] '
        subtitle = '⚠️ COMPLET - Plus de place'
      } else if (placesDisponibles <= 2) {
        statusPrefix = '⚠️ [DERNIÈRES PLACES] '
        subtitle = `🔥 ${placesDisponibles}/${placesTotales} places • ${prix}`
      } else {
        statusPrefix = '🟢 [DISPO] '
        subtitle = `✔ ${placesDisponibles}/${placesTotales} places • ${prix}`
      }

      return {
        title: `${statusPrefix}${mainTitle}${dateStr}`,
        subtitle,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Date de début (plus récent)',
      name: 'dateDebutDesc',
      by: [{ field: 'dateDebut', direction: 'desc' }],
    },
    {
      title: 'Date de début (plus ancien)',
      name: 'dateDebutAsc',
      by: [{ field: 'dateDebut', direction: 'asc' }],
    },
  ],
})
