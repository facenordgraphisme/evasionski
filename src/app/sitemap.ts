import type { MetadataRoute } from 'next'
import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import { fallbackSejours } from '@/utils/fallbackData'
import { SITE_URL } from '@/utils/site'

export const revalidate = 3600

type Entry = { slug: string; updatedAt?: string }

const sejoursQuery = groq`*[_type == "sejour" && defined(slug.current)]{ "slug": slug.current, "updatedAt": _updatedAt }`
const postsQuery = groq`*[_type == "post" && defined(slug.current)]{ "slug": slug.current, "updatedAt": _updatedAt }`

const staticPages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/calendrier', priority: 0.9, changeFrequency: 'daily' },
  { path: '/stages-et-raids-a-ski-de-randonnee-hautes-alpes', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/activites', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/ski-de-randonnee-engagement-prive', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/niveau-en-ski', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/a-propos-moniteur-de-ski-de-randonnee', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/evasion-ski-hautes-alpes-contact', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/blog-explorez-les-hautes-alpes-a-ski', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/mentions-legales', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/cgv', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/politique-de-confidentialite', priority: 0.2, changeFrequency: 'yearly' },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [sejours, posts]: [Entry[], Entry[]] = await Promise.all([
    client.fetch(sejoursQuery).catch(() => []),
    client.fetch(postsQuery).catch(() => []),
  ])

  const sejourSlugs = new Map<string, string | undefined>()
  for (const slug of Object.keys(fallbackSejours)) sejourSlugs.set(slug, undefined)
  for (const s of sejours ?? []) sejourSlugs.set(s.slug, s.updatedAt)

  const staticPaths = new Set(staticPages.map((p) => p.path))

  return [
    ...staticPages.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...[...sejourSlugs]
      .filter(([slug]) => !staticPaths.has(`/${slug}`))
      .map(([slug, updatedAt]) => ({
        url: `${SITE_URL}/${slug}`,
        lastModified: updatedAt ? new Date(updatedAt) : undefined,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      })),
    ...(posts ?? []).map((p) => ({
      url: `${SITE_URL}/${p.slug}`,
      lastModified: p.updatedAt ? new Date(p.updatedAt) : undefined,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
