import type { Metadata } from 'next';
import React from 'react'
import Link from 'next/link';
import { client } from "@/sanity/lib/client";
import { activitiesPageQuery } from "@/sanity/lib/queries";
import Image from 'next/image';

import { getServerTranslations } from '@/i18n/server';

export async function generateMetadata(): Promise<Metadata> {
  const { at } = await getServerTranslations();
  return {
    title: `${at('Activités')} | ÉvasionSki`,
    description: at('Découvrez toutes les activités de ski proposées par Toni Mancini : Engagement privé, Ski de randonnée journée, Freerando et Stages/Raids à ski. Encadrement professionnel.'),
  };
}

export default async function ActivitesPage() {
  const pageData = await client.fetch(activitiesPageQuery).catch(() => null);
  const { at, t } = await getServerTranslations();

  // Fallback minimal en cas d'erreur Sanity
  const fallbackData = {
    pageTitle: 'NOS ACTIVITÉS',
    pageDescription: 'Découvrez toutes les activités que je propose. Chaque sortie est encadrée avec passion et une sécurité absolue.',
    activities: [
      {
        title: 'Engagement Privé / À la carte',
        slug: 'ski-de-randonnee-engagement-prive',
        description: 'Sortie privée sur mesure. En famille, entre amis ou en solo, tracez votre propre voie.',
        price: 'À partir de 400€/jour',
        image: '/images/hero.jpg'
      },
      {
        title: 'Ski de randonnée journée',
        slug: 'ski-randonnee-hautes-alpes-journee',
        description: 'Des sorties à la journée pour s\'évader, découvrir de nouveaux massifs et s\'initier ou se perfectionner.',
        price: '95€ / pers',
        image: '/photos/DSC_6701.jpg'
      },
      {
        title: 'Freerando & Hors-piste',
        slug: 'ski-hors-piste-station-hautes-alpes',
        description: 'Profitez des remontées mécaniques pour accéder à de longs hors-pistes et de superbes combes sauvages.',
        price: '95€ / pers',
        image: '/photos/DSC_6612.jpg'
      },
      {
        title: 'Stages et raids à ski',
        slug: 'stages-et-raids-a-ski-de-randonnee-hautes-alpes',
        description: 'L\'immersion totale en montagne. De refuge en gîte, vivez des raids à ski d\'exception de plusieurs jours.',
        price: 'À partir de 295€',
        image: '/photos/DSC_6683.jpg'
      }
    ]
  };

  const data = pageData || fallbackData;
  const pageTitle = at(data.pageTitle) || at(fallbackData.pageTitle);
  const pageDescription = at(data.pageDescription) || at(fallbackData.pageDescription);
  const activities = data.activities || fallbackData.activities;

  return (
    <main className="relative pt-32 min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-gradient">{pageTitle}</h1>
        <p className="text-foreground/60 text-lg mb-16 max-w-2xl">
          {pageDescription}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((p: any) => (
            <Link href={`/${p.slug}`} key={p.slug} className="group glass rounded-[40px] overflow-hidden flex flex-col h-full hover:border-accent transition-all duration-500">
              <div className="h-64 overflow-hidden relative">
                <Image 
                  src={p.image || "/images/alpinisme.jpg"}
                  alt={at(p.title)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {at(p.title)}
                </h3>
                <p className="text-foreground/70 mb-8 flex-1 leading-relaxed line-clamp-3">
                  {at(p.description)}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold text-highlight">{at(p.price)}</span>
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
