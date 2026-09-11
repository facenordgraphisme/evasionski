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
    return [
      {
        source: '/prestations/:slug',
        destination: '/:slug',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
