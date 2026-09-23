import type { StructureBuilder } from 'sanity/structure'
import { Home, UserRound, Mail, Settings, Sparkles, BarChart3, Calendar, Activity, FileText, BookOpen, Mountain, MessageSquare, Star, Tag, Package, CalendarDays, Scale } from 'lucide-react'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Contenu')
    .items([
      // 🔧 PARAMÈTRES GLOBAUX
      S.listItem()
        .title('Paramètres Globaux')
        .id('settings')
        .icon(Settings)
        .child(S.document().schemaType('settings').documentId('settings').title('Paramètres Globaux')),

      S.divider(),

      // 📄 PAGES
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
        .title('Page Activités')
        .id('activitiesPage')
        .icon(Activity)
        .child(S.document().schemaType('activitiesPage').documentId('activitiesPage').title('Page Activités')),

      S.listItem()
        .title('Page Calendrier')
        .id('calendarPage')
        .icon(Calendar)
        .child(S.document().schemaType('calendarPage').documentId('calendarPage').title('Page Calendrier')),

      S.listItem()
        .title('Page Contact')
        .id('contact')
        .icon(Mail)
        .child(S.document().schemaType('contact').documentId('contact').title('Page Contact')),

      S.listItem()
        .title('Blog')
        .id('post')
        .icon(BookOpen)
        .child(S.documentTypeList('post').title('Articles de Blog')),

      S.listItem()
        .title('Page Niveau en Ski')
        .id('niveauSki')
        .icon(BarChart3)
        .child(S.document().schemaType('niveauSki').documentId('niveauSki').title('Niveau en Ski')),

      S.listItem()
        .title('Pages Légales')
        .id('legalPages')
        .icon(Scale)
        .child(S.document().schemaType('legalPages').documentId('legalPages').title('Pages Légales')),

      S.divider(),

      // 🎿 CATALOGUE
      S.listItem()
        .title('Page À la Carte / Engagement Privé')
        .id('ski-de-randonnee-engagement-prive')
        .icon(Sparkles)
        .child(S.document().schemaType('aLaCarte').documentId('ski-de-randonnee-engagement-prive').title('Page À la Carte')),

      S.listItem()
        .title('Catalogue des Séjours')
        .id('sejour')
        .icon(Package)
        .child(S.documentTypeList('sejour').title('Séjours')),

      S.listItem()
        .title('Dates & Départs')
        .id('sejourDate')
        .icon(CalendarDays)
        .child(S.documentTypeList('sejourDate').title('Dates de départ')),

      S.divider(),

      // 📚 CONTENU
      S.listItem()
        .title('Massifs')
        .id('massif')
        .icon(Mountain)
        .child(S.documentTypeList('massif').title('Massifs')),

      S.listItem()
        .title('Foire Aux Questions (FAQ)')
        .id('faq')
        .icon(MessageSquare)
        .child(S.documentTypeList('faq').title('FAQs')),

      S.listItem()
        .title('Témoignages')
        .id('testimonial')
        .icon(Star)
        .child(S.documentTypeList('testimonial').title('Témoignages')),

      S.listItem()
        .title('Tags / Catégories')
        .id('tag')
        .icon(Tag)
        .child(S.documentTypeList('tag').title('Tags')),
    ])
