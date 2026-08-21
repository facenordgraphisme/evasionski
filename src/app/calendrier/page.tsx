import { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { sortiesQuery } from '@/sanity/lib/queries'
import { getServerTranslations } from '@/i18n/server'
import CalendarView from './CalendarView'

export async function generateMetadata(): Promise<Metadata> {
  const { at } = await getServerTranslations()

  return {
    title: `${at({ fr: 'Calendrier des sorties', en: 'Schedule Calendar' })} | ÉvasionSki`,
    description: at({
      fr: 'Consultez le calendrier de toutes nos sorties de ski de randonnée, freerando et raids à ski dans les Hautes-Alpes.',
      en: 'Check the calendar of all our ski touring, freerando and ski raid trips in the Hautes-Alpes.'
    }),
  }
}

export default async function CalendrierPage() {
  // Fetch all upcoming sorties
  const sorties = await client.fetch(sortiesQuery)

  return <CalendarView sorties={sorties} />
}
