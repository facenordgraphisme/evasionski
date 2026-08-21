import { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { sejoursByCategoryQuery } from '@/sanity/lib/queries'
import { getServerTranslations } from '@/i18n/server'
import StagesRaidsView from './StagesRaidsView'

export async function generateMetadata(): Promise<Metadata> {
  const { at } = await getServerTranslations()

  return {
    title: `${at({ fr: 'Stages et raids à ski de randonnée', en: 'Ski touring stages & raids' })} | ÉvasionSki`,
    description: at({
      fr: 'Découvrez nos stages et raids à ski de randonnée dans les Hautes-Alpes. Du Queyras à la Norvège, vivez des aventures inoubliables.',
      en: 'Discover our ski touring stages and raids in the Hautes-Alpes. From Queyras to Norway, live unforgettable adventures.'
    }),
  }
}

export default async function StagesRaidsPage() {
  // Fetch all stage-raid séjours
  const sejours = await client.fetch(sejoursByCategoryQuery, { categorie: 'stage-raid' })

  return <StagesRaidsView sejours={sejours} />
}
