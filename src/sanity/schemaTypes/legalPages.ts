import { defineField, defineType } from 'sanity'
import { Scale } from 'lucide-react'

export const legalPagesType = defineType({
  name: 'legalPages',
  title: 'Pages Légales',
  type: 'document',
  icon: Scale,
  fields: [
    defineField({
      name: 'mentionsLegales',
      title: 'Mentions Légales (FR)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Contenu de la page Mentions Légales en français',
    }),
    defineField({
      name: 'mentionsLegalesEn',
      title: 'Legal Notice (EN)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Legal Notice page content in English',
    }),
    defineField({
      name: 'confidentialite',
      title: 'Politique de Confidentialité (FR)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Contenu de la page Politique de Confidentialité en français',
    }),
    defineField({
      name: 'confidentialiteEn',
      title: 'Privacy Policy (EN)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Privacy Policy page content in English',
    }),
    defineField({
      name: 'cgv',
      title: 'Conditions Générales de Vente (FR)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Contenu de la page CGV en français',
    }),
    defineField({
      name: 'cgvEn',
      title: 'Terms & Conditions (EN)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Terms & Conditions page content in English',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Pages Légales',
        subtitle: 'Mentions Légales, Confidentialité, CGV',
      }
    },
  },
})
