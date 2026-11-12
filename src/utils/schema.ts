import { SITE_URL } from './site'

// Helpers pour les données structurées (JSON-LD) partagées entre les pages.

export const TONI = {
  '@type': 'Person',
  '@id': `${SITE_URL}/a-propos-moniteur-de-ski-de-randonnee#toni`,
  name: 'Toni Mancini',
  jobTitle: 'Moniteur de ski de randonnée diplômé d’État',
  url: `${SITE_URL}/a-propos-moniteur-de-ski-de-randonnee`,
}

export const BUSINESS_ID = `${SITE_URL}/#business`

/** Fil d'Ariane : [{ name, path }] avec des chemins relatifs ("/" pour l'accueil). */
export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === '/' ? '' : item.path}`,
    })),
  }
}

/** Premier montant trouvé dans un prix saisi librement ("À partir de 98€/pers" → "98"). */
export function firstPrice(value?: string | null): string | undefined {
  const match = value?.replace(/\s/g, '').match(/\d+(?:[.,]\d+)?/)
  return match ? match[0].replace(',', '.') : undefined
}

/** Garde uniquement les vrais profils sociaux (pas "https://www.instagram.com/" tout court). */
export function realProfiles(urls: (string | undefined | null)[]): string[] {
  return urls.filter((u): u is string => {
    if (!u) return false
    try {
      return new URL(u).pathname.replace(/\//g, '').length > 0
    } catch {
      return false
    }
  })
}

export const CATEGORY_LABELS: Record<string, { fr: string; en: string }> = {
  'journee-ski-rando': { fr: 'Ski de randonnée', en: 'Ski touring' },
  'journee-freerando': { fr: 'Freerando', en: 'Freerando' },
  'stage-raid': { fr: 'Stage & raid', en: 'Trip & raid' },
}
