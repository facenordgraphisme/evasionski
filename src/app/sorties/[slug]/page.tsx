import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { sortieBySlugQuery } from '@/sanity/lib/queries'
import { getServerTranslations } from '@/i18n/server'
import SortieDetailView from './SortieDetailView'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const { at } = await getServerTranslations()

  let sortie = null
  try {
    sortie = await client.fetch(sortieBySlugQuery, { slug })
  } catch (error) {
    console.error('Error fetching sortie:', error)
  }

  if (!sortie) {
    return {
      title: 'Sortie non trouvée | ÉvasionSki',
    }
  }

  const title = sortie.titrePersonnalise || sortie.sejour?.title || 'Sortie'
  const description = sortie.descriptionPersonnalisee || sortie.sejour?.description || ''

  return {
    title: `${at(title)} | ÉvasionSki`,
    description: at(description).substring(0, 160),
    openGraph: sortie.image || sortie.sejour?.image ? {
      images: [{ url: sortie.image || sortie.sejour.image }],
    } : undefined,
  }
}

export default async function SortiePage({ params }: PageProps) {
  const { slug } = await params

  console.log('🔍 Fetching sortie with slug:', slug)

  let sortie = null
  try {
    sortie = await client.fetch(sortieBySlugQuery, { slug })
    console.log('✅ Sortie fetched:', sortie ? 'Data received' : 'No data')
    if (sortie) {
      console.log('Sortie keys:', Object.keys(sortie))
      console.log('Sortie data:', JSON.stringify(sortie, null, 2))
    }
  } catch (error) {
    console.error('❌ Error fetching sortie:', error)
  }

  if (!sortie) {
    console.log('❌ Sortie not found, showing 404')
    notFound()
  }

  return <SortieDetailView sortie={sortie} />
}
