import type { StructureBuilder } from 'sanity/structure'
import { Home, UserRound, Mail, Settings, Sparkles, BarChart3 } from 'lucide-react'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Contenu')
    .items([
      // Singletons
      S.listItem()
        .title('Paramètres Globaux')
        .id('settings')
        .icon(Settings)
        .child(S.document().schemaType('settings').documentId('settings').title('Paramètres Globaux')),

      S.divider(),

      S.listItem()
        .title('Page d\'accueil')
        .id('home')
        .icon(Home)
        .child(S.document().schemaType('home').documentId('home').title('Page d\'accueil')),
      
      S.listItem()
        .title('Le Guide')
        .id('guide')
        .icon(UserRound)
        .child(S.document().schemaType('guide').documentId('guide').title('Le Guide')),

      S.listItem()
        .title('Page Contact')
        .id('contact')
        .icon(Mail)
        .child(S.document().schemaType('contact').documentId('contact').title('Page Contact')),

      S.listItem()
        .title('Page À la Carte / Engagement Privé')
        .id('ski-de-randonnee-engagement-prive')
        .icon(Sparkles)
        .child(S.document().schemaType('aLaCarte').documentId('ski-de-randonnee-engagement-prive').title('Page À la Carte')),

      S.listItem()
        .title('Page Niveau en Ski')
        .id('niveauSki')
        .icon(BarChart3)
        .child(S.document().schemaType('niveauSki').documentId('niveauSki').title('Niveau en Ski')),

      S.divider(),

      // Regular document types, filtered to exclude singletons
      ...S.documentTypeListItems().filter(
        (listItem) => !['home', 'guide', 'contact', 'settings', 'aLaCarte', 'niveauSki'].includes(listItem.getId() || '')
      ),
    ])
