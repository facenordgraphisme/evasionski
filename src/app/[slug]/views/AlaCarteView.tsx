import React from 'react';
import Image from 'next/image';
import { PortableText } from "@portabletext/react";
import { Check, X, Euro, MapPin, Clock } from 'lucide-react';
import { getServerTranslations } from '@/i18n/server';
import Link from 'next/link';
import SejourTabs from '@/components/SejourTabs';
import RichContent from '@/components/RichContent';

interface AlaCarteViewProps {
  data: any;
  settings: any;
}

export default async function AlaCarteView({ data, settings }: AlaCarteViewProps) {
  const { at, translatePortableText } = await getServerTranslations();

  if (!data) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <p className="text-foreground/60">{at("Contenu non disponible")}</p>
      </div>
    );
  }

  // Préparer les onglets
  const tabs = [
    {
      id: 'description',
      label: at('Présentation'),
      content: data.content ? translatePortableText(data.content) : null
    },
    {
      id: 'tarifs',
      label: at('Tarifs'),
      content: data.tarifs ? translatePortableText(data.tarifs) : null
    },
    {
      id: 'inclus',
      label: at('Inclus / Non inclus'),
      content: (data.prestationsIncluses?.length > 0 || data.prestationsNonIncluses?.length > 0) ? 'prestations' : null
    },
  ].filter(tab => tab.content !== null);

  const hasTabs = tabs.length > 0;

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">

      {/* Hero Header */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {data.heroImage ? (
            <Image
              src={data.heroImage}
              alt={data.heroTitle || data.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-accent/20 via-background to-highlight/20" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-gradient uppercase">
            {at(data.heroTitle || data.title)}
          </h1>
          {data.heroSubtitle && (
            <p className="text-xl md:text-2xl text-accent font-medium max-w-3xl mx-auto">
              {at(data.heroSubtitle)}
            </p>
          )}
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">

            {/* Main column */}
            <div className="space-y-12">
              {data.description && (
                <p className="text-2xl font-medium leading-relaxed text-foreground/80">
                  {at(data.description)}
                </p>
              )}

              {hasTabs ? (
                <SejourTabs
                  tabs={tabs.map(tab => ({
                    ...tab,
                    content: tab.id === 'inclus' ? (
                      <div className="grid md:grid-cols-2 gap-8">
                        {data.prestationsIncluses?.length > 0 && (
                          <div className="glass p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-6 text-highlight flex items-center gap-2">
                              <Check className="w-6 h-6" />
                              {at("Inclus dans la prestation")}
                            </h3>
                            <ul className="space-y-3">
                              {data.prestationsIncluses.map((item: string, index: number) => (
                                <li key={index} className="flex items-start gap-3 text-foreground/80">
                                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                  <span>{at(item)}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {data.prestationsNonIncluses?.length > 0 && (
                          <div className="glass p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-6 text-foreground/60 flex items-center gap-2">
                              <X className="w-6 h-6" />
                              {at("Non inclus")}
                            </h3>
                            <ul className="space-y-3">
                              {data.prestationsNonIncluses.map((item: string, index: number) => (
                                <li key={index} className="flex items-start gap-3 text-foreground/60">
                                  <X className="w-5 h-5 text-foreground/40 flex-shrink-0 mt-0.5" />
                                  <span>{at(item)}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ) : tab.content
                  }))}
                />
              ) : data.content ? (
                <RichContent value={translatePortableText(data.content)} />
              ) : null}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-36 space-y-5">

                {/* Bloc 1 — Infos pratiques + CTA */}
                <div className="rounded-[32px] border border-border shadow-2xl overflow-hidden bg-card">

                  {/* Header */}
                  <div className="px-7 pt-7 pb-5 border-b border-border">
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-accent mb-1 block">{at('Infos pratiques')}</span>
                    <h3 className="text-xl font-bold text-foreground">{at('Engagement Privé')}</h3>
                  </div>

                  {/* Info grid */}
                  <div className="grid grid-cols-1">
                    <div className="p-5 flex flex-col gap-1 border-b border-border">
                      <div className="flex items-center gap-1.5 text-foreground/40 mb-1">
                        <Clock size={12} />
                        <span className="text-[9px] font-black uppercase tracking-widest">{at('Durée')}</span>
                      </div>
                      <span className="text-lg font-bold text-foreground leading-tight">
                        {at(data.infoDuree || 'Sur mesure')}
                      </span>
                    </div>

                    <div className="p-5 flex flex-col gap-1 border-b border-border">
                      <div className="flex items-center gap-1.5 text-foreground/40 mb-1">
                        <MapPin size={12} />
                        <span className="text-[9px] font-black uppercase tracking-widest">{at('Massif')}</span>
                      </div>
                      <span className="text-base font-bold text-foreground leading-tight">
                        {at(data.infoMassif || 'Hautes-Alpes au choix')}
                      </span>
                    </div>

                    <div className="p-5 flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-foreground/40 mb-1">
                        <Euro size={12} />
                        <span className="text-[9px] font-black uppercase tracking-widest">{at('Tarif')}</span>
                      </div>
                      <span className="text-lg font-bold text-highlight leading-tight">
                        {at(data.infoTarif || 'À partir de 400€/jour')}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="p-6 space-y-3 border-t border-border">
                    <Link
                      href="/evasion-ski-hautes-alpes-contact"
                      className="btn-primary w-full block text-center py-4 text-sm font-bold uppercase tracking-widest"
                    >
                      {at(data.ctaText || "Demander un devis")}
                    </Link>
                    {data.ctaSubtext && (
                      <p className="text-[9px] text-center text-foreground/50 leading-relaxed">
                        {at(data.ctaSubtext)}
                      </p>
                    )}
                    <p className="text-[9px] text-center text-foreground/30 font-bold uppercase tracking-widest">
                      {at('Conseils & Réservation par téléphone possible')}
                    </p>
                  </div>
                </div>

                {/* Bloc 2 — Info complémentaire */}
                <div className="rounded-[32px] border border-border shadow-xl overflow-hidden bg-card">
                  <div className="grid grid-cols-1 divide-y divide-border">
                    <div className="p-4">
                      <span className="text-[9px] font-black uppercase tracking-widest text-accent block mb-1.5">{at('Flexibilité')}</span>
                      <p className="text-[10px] leading-relaxed text-foreground/60">
                        {at(data.infoFlexibilite || "Dates, durée et itinéraire personnalisables.")}
                      </p>
                    </div>
                    <div className="p-4">
                      <span className="text-[9px] font-black uppercase tracking-widest text-accent block mb-1.5">{at('Groupes')}</span>
                      <p className="text-[10px] leading-relaxed text-foreground/60">
                        {at(data.infoGroupes || "Seul, en famille ou entre amis (1-8 pers.).")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie */}
      {data.gallery && data.gallery.length > 0 && (
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-10">
              {at('Galerie')} <span className="text-accent italic">{at('Photos')}</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.gallery.map((photo: any, i: number) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-2xl group">
                  <Image
                    src={photo.url}
                    alt={photo.alt || at(data.title)}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
