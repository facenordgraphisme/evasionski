import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Désactive l'optimisation Vercel pour éviter le quota - Sanity optimise déjà les images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'evasionski.fr',
      },
    ],
  },
  async redirects() {
    const JOURNEE = '/ski-randonnee-hautes-alpes-journee'
    const FREERANDO = '/ski-hors-piste-station-hautes-alpes'
    const QUEYRAS = '/ski-de-randonnee-queyras-decouverte'
    const CLAREE = '/ski-de-randonnee-en-claree'
    const UBAYE = '/raid-ski-randonnee-ubaye'
    const STAGE = '/stage-de-ski-freerando-les-orres-crevoux'
    const NORVEGE = '/ski-randonnee-norvege-alpes-lyngen'
    const STAGES_RAIDS = '/stages-et-raids-a-ski-de-randonnee-hautes-alpes'
    const BLOG = '/blog-explorez-les-hautes-alpes-a-ski'

    // Anciennes URLs du site WordPress (relevées sur archive.org) → nouvelles pages.
    // L'ordre compte : la première règle qui correspond l'emporte.
    const legacy: [string, string][] = [
      ['/prestations/:slug', '/:slug'],
      ['/home', '/'],
      ['/boutique', '/calendrier'],
      ['/shop', '/calendrier'],
      ['/moniteur-ski-randonnee-hautes-alpes-prestations', '/activites'],
      ['/decouverte-du-queyras-en-ski-de-randonnee', QUEYRAS],
      ['/raid-a-ski-dans-la-claree', CLAREE],
      ['/raid-ski-randonnee-decouverte-vallee-claree', CLAREE],
      ['/raid-en-ski-de-randonnee-hautes-alpes', STAGES_RAIDS],
      ['/raid-sejours-ski-de-randonnee-hautes-alpes', STAGES_RAIDS],
      ['/sortie-ski-de-randonnee-hautes-alpes-journee', JOURNEE],
      ['/voyage-a-ski-en-norvege', NORVEGE],

      ['/categorie-produit/ski-de-randonnee-journee', JOURNEE],
      ['/categorie-produit/sortie-hors-piste-freerando', FREERANDO],
      ['/categorie-produit/stage-ski-freerando', STAGE],
      ['/categorie-produit/voyage-norvege', NORVEGE],
      ['/categorie-produit/:path*', STAGES_RAIDS],

      ['/produit/:slug(journee-freerando.*)', FREERANDO],
      ['/produit/:slug(.*ski-de-randonnee-journee.*|journee-ski-de-randonnee.*)', JOURNEE],
      ['/produit/:slug(.*queyras.*)', QUEYRAS],
      ['/produit/:slug(.*claree.*)', CLAREE],
      ['/produit/:slug(.*norvege.*)', NORVEGE],
      ['/produit/:slug(stage-ski.*)', STAGE],
      ['/produit/:path*', '/calendrier'],

      ['/sortie/:slug(.*freerando.*)', FREERANDO],
      ['/sortie/:slug(journee-ski-de-randonnee.*)', JOURNEE],
      ['/sortie/:slug(.*queyras.*)', QUEYRAS],
      ['/sortie/:slug(.*claree.*)', CLAREE],
      ['/sortie/:path*', '/calendrier'],

      ['/sorties', '/calendrier'],
      ['/sorties/categorie/hors-piste-freerando-station', FREERANDO],
      ['/sorties/categorie/ski-de-randonnee-journee', JOURNEE],
      ['/sorties/categorie/stage-ski-de-rando-freerando', STAGE],
      ['/sorties/categorie/:slug(voyage-a-l-etranger.*)', NORVEGE],
      ['/sorties/categorie/:cat/:slug(.*queyras.*)', QUEYRAS],
      ['/sorties/categorie/:cat/:slug(.*claree.*)', CLAREE],
      ['/sorties/categorie/:path*', STAGES_RAIDS],

      ['/lieu/alpes-de-lyngen-norvege', NORVEGE],
      ['/lieu/parc-naturel-regional-du-queyras', QUEYRAS],
      ['/lieu/vallee-de-la-claree', CLAREE],
      ['/lieu/vallee-de-lubaye', UBAYE],
      ['/lieu/:path*', '/'],

      ['/category/:path*', BLOG],
      ['/author/:path*', '/a-propos-moniteur-de-ski-de-randonnee'],
      ['/organisateur/:path*', '/a-propos-moniteur-de-ski-de-randonnee'],

      ['/en/assess-your-level', '/niveau-en-ski'],
      ['/en/day-ski-touring', JOURNEE],
      ['/en/multi-day-ski-touring', STAGES_RAIDS],
      ['/en/off-piste-skiing-and-freerando', FREERANDO],
      ['/en/ski-hors-piste-station-hautes-alpes', FREERANDO],
      ['/en/ski-touring-in-claree', CLAREE],
      ['/en/ski-touring-in-norway', NORVEGE],
      ['/en/ski-touring-in-queyras', QUEYRAS],
      ['/en/ski-touring-in-ubaye', UBAYE],
      ['/en/general-terms-and-conditions', '/cgv'],
      ['/en/legal-notices', '/mentions-legales'],
      ['/en/shop', '/calendrier'],
      ['/en/category/:path*', BLOG],
      ['/en', '/'],
      ['/en/:path*', '/'],
    ]

    return legacy.map(([source, destination]) => ({ source, destination, permanent: true }))
  },
};

export default nextConfig;
