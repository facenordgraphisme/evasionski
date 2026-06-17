import type { Metadata } from 'next';
import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { sortiesQuery } from "@/sanity/lib/queries";
import SortiesFilterableList from "@/components/SortiesFilterableList";
import { getServerTranslations } from '@/i18n/server';

export async function generateMetadata(): Promise<Metadata> {
  const { at } = await getServerTranslations();
  return {
    title: `${at('Prochaines Sorties')} | ÉvasionSki`,
    description: at("Rejoignez-moi pour des raids, stages et sorties de ski de randonnée d'exception dans les Hautes-Alpes et à l'étranger. Calendrier des départs collectifs."),
  };
}

import { mockSorties } from "@/sanity/lib/mockData";

export default async function SortiesPage() {
  let sorties = [];
  try {
    sorties = await client.fetch(sortiesQuery).catch(() => []);
  } catch (e) {
    console.error("Sorties page fetch failed:", e);
  }

  if (!sorties || sorties.length === 0) {
    sorties = mockSorties;
  }

  const { at, t } = await getServerTranslations();

  return (
    <main className="relative pt-32 min-h-screen bg-background">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mb-20">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">{at('Calendrier')}</span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 text-gradient uppercase leading-[0.9]">
            {at('PROCHAINS')} <br /> {at('DÉPARTS')}
          </h1>
          <p className="text-foreground/60 text-xl max-w-2xl leading-relaxed">
            {at("Une sélection de séjours, de raids et de sorties à la journée à ski. Chaque sortie est encadrée personnellement pour garantir sécurité et immersion.")}
          </p>
        </div>
        
        <SortiesFilterableList initialSorties={sorties} />
      </div>
    </main>
  );
}
