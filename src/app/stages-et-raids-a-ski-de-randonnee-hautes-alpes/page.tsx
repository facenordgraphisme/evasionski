import { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { sejoursByCategoryQuery, stagesRaidsPageQuery } from '@/sanity/lib/queries'
import { getServerTranslations } from '@/i18n/server'
import StagesRaidsView, { type StagesRaidsPageData } from './StagesRaidsView'

export async function generateMetadata(): Promise<Metadata> {
  const { at } = await getServerTranslations()
  const page: StagesRaidsPageData | null = await client.fetch(stagesRaidsPageQuery).catch(() => null)

  return {
    title: page?.seoTitle || `${at({ fr: 'Stages et raids à ski de randonnée', en: 'Ski touring stages & raids' })} | ÉvasionSki`,
    alternates: { canonical: '/stages-et-raids-a-ski-de-randonnee-hautes-alpes' },
    description: page?.seoDescription || at({
      fr: 'Découvrez nos stages et raids à ski de randonnée dans les Hautes-Alpes. Du Queyras à la Norvège, vivez des aventures inoubliables.',
      en: 'Discover our ski touring stages and raids in the Hautes-Alpes. From Queyras to Norway, live unforgettable adventures.'
    }),
    openGraph: page?.heroImage ? { images: [{ url: page.heroImage }] } : undefined,
  }
}

export default async function StagesRaidsPage() {
  const [sejours, page] = await Promise.all([
    client.fetch(sejoursByCategoryQuery, { categorie: 'stage-raid' }),
    client.fetch(stagesRaidsPageQuery).catch(() => null),
  ])

  return <StagesRaidsView sejours={sejours} page={page} />
}
