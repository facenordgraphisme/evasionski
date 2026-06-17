import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, BarChart3, Clock, Euro, ArrowLeft, Calendar } from 'lucide-react';
import { getServerTranslations } from '@/i18n/server';
import SejourTabs from '@/components/SejourTabs';
import RichContent from '@/components/RichContent';
import BlogCard from '@/components/BlogCard';
import CheckoutButton from '@/components/CheckoutButton';
import SejourFAQ from '@/components/SejourFAQ';

interface SejourViewProps {
  sejour: any;
  relatedPosts: any[];
}

const slugVideoMap: Record<string, string> = {
  'ski-randonnee-hautes-alpes-journee': '/videos/ski-rando-journee.mp4',
  'ski-hors-piste-station-hautes-alpes': '/videos/freerando-journee.mp4',
  'stage-de-ski-freerando-les-orres-crevoux': '/videos/freerando-journee.mp4',
  'ski-randonnee-norvege-alpes-lyngen': '/videos/norvege-voyage.mp4'
}

export default async function SejourView({ sejour, relatedPosts }: SejourViewProps) {
  const { at, t, translatePortableText } = await getServerTranslations();

  const videoSrc = slugVideoMap[sejour.slug];

  const priceString = sejour.priceEncadrement || sejour.basePrice || '0';
  const numericPrice = parseFloat(priceString.replace(/[^0-9.]/g, '')) || 0;

  const getLevelLabel = (level?: string) => {
    const map: Record<string, string> = {
      'debutant': at('Débutant'),
      'intermediaire': at('Intermédiaire'),
      'confirme': at('Confirmé'),
      'expert': at('Expert')
    };
    return level ? map[level] || level : '';
  };

  const hasTabs = sejour.essentiel || sejour.programme || sejour.materiel || sejour.inclus || sejour.budget || sejour.infosPratiques;

  const tabs = [
    { 
      id: 'essentiel', 
      label: at('Essentiel de la sortie'), 
      content: sejour.essentiel ? translatePortableText(sejour.essentiel) : (sejour.infosPratiques ? translatePortableText(sejour.infosPratiques) : null) 
    },
    { 
      id: 'programme', 
      label: at('Programme type'), 
      content: sejour.programme ? translatePortableText(sejour.programme) : null 
    },
    { 
      id: 'materiel', 
      label: at('Matériel et assurances'), 
      content: sejour.materiel ? translatePortableText(sejour.materiel) : null, 
      pdf: sejour.materielPdf ?? null 
    },
    { 
      id: 'inclus', 
      label: at('Inclus / Non inclus'), 
      content: sejour.inclus ? translatePortableText(sejour.inclus) : (sejour.budget ? translatePortableText(sejour.budget) : null) 
    },
  ].filter(tab => tab.content !== null || tab.pdf !== null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": at(sejour.title),
    "description": sejour.description ? at(sejour.description) : undefined,
    "image": sejour.image || undefined,
    "touristType": sejour.activityType ? at(sejour.activityType) : undefined,
    "offers": sejour.basePrice ? {
      "@type": "Offer",
      "price": sejour.basePrice.replace(/[^0-9]/g, ''),
      "priceCurrency": "EUR",
      "description": at("Tarif de base")
    } : undefined,
    "provider": {
      "@type": "Person",
      "name": "Toni Mancini",
      "jobTitle": "Moniteur de Ski de Randonnée"
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              muted
              playsInline
              loop
              poster={sejour.image}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : sejour.image ? (
            <Image
              src={sejour.image}
              alt={at(sejour.title)}
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
          ) : null}
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-background via-transparent to-black/20" />
        </div>

        <div className="container relative z-10 px-6 pt-32 max-w-5xl">
          <Link
            href={`/${sejour.activityType || ''}`}
            className="inline-flex items-center gap-2 text-accent font-bold mb-8 hover:gap-4 transition-all duration-300"
          >
            <ArrowLeft size={20} />
            {at("RETOUR À L'ACTIVITÉ")}
          </Link>

          <div className="flex flex-wrap gap-4 mb-8">
            <span className="px-4 py-1.5 bg-accent text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
              {at(sejour.activityType)}
            </span>
            {sejour.massif && (
              <span className="px-3 py-1 bg-background/50 text-white text-[10px] font-bold uppercase tracking-wider rounded-full backdrop-blur-md border border-white/10 flex items-center gap-1">
                <MapPin size={10} className="text-accent" />
                {at(sejour.massif)}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white">
            {at(sejour.title)}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="pt-24 lg:pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {sejour.intro ? (
                <div className="prose-custom max-w-none text-lg">
                  <RichContent value={translatePortableText(sejour.intro)} />
                </div>
              ) : sejour.description ? (
                <p className="text-2xl font-medium leading-relaxed text-foreground/80">
                  {at(sejour.description)}
                </p>
              ) : null}

              {hasTabs ? (
                <SejourTabs tabs={tabs} />
              ) : sejour.content ? (
                <RichContent value={translatePortableText(sejour.content)} />
              ) : null}

              {sejour.faqs && sejour.faqs.length > 0 && (
                <SejourFAQ faqs={sejour.faqs} />
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-36 space-y-5">

                {/* Bloc 1 — Stat tiles 2×2 + prix + CTA */}
                <div className="rounded-[32px] border border-border shadow-2xl overflow-hidden bg-card">

                  {/* Header */}
                  <div className="px-7 pt-7 pb-5 border-b border-border">
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-accent mb-1 block">{at('Infos pratiques')}</span>
                    <h3 className="text-xl font-bold text-foreground">{at('Fiche Technique')}</h3>
                  </div>

                  {/* 2×2 stat grid with explicit borders */}
                  <div className="grid grid-cols-2">
                    <div className="p-5 flex flex-col gap-1 border-r border-b border-border">
                      <div className="flex items-center gap-1.5 text-foreground/40 mb-1">
                        <Clock size={12} />
                        <span className="text-[9px] font-black uppercase tracking-widest">{at('Durée')}</span>
                      </div>
                      <span className="text-lg font-bold text-foreground leading-tight">{at(sejour.duration) || '—'}</span>
                    </div>

                    <div className="p-5 flex flex-col gap-1 border-b border-border">
                      <div className="flex items-center gap-1.5 text-foreground/40 mb-1">
                        <BarChart3 size={12} />
                        <span className="text-[9px] font-black uppercase tracking-widest">{at('Niveau')}</span>
                      </div>
                      <span className="text-lg font-bold text-foreground leading-tight">{getLevelLabel(sejour.level) || '—'}</span>
                    </div>

                    <div className="p-5 flex flex-col gap-1 border-r border-border">
                      <div className="flex items-center gap-1.5 text-foreground/40 mb-1">
                        <MapPin size={12} />
                        <span className="text-[9px] font-black uppercase tracking-widest">{at('Massif')}</span>
                      </div>
                      <span className="text-base font-bold text-foreground leading-tight">{at(sejour.massif) || '—'}</span>
                    </div>

                    <div className="p-5 flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-foreground/40 mb-1">
                        <Euro size={12} />
                        <span className="text-[9px] font-black uppercase tracking-widest">{at('Tarif')}</span>
                      </div>
                      <span className="text-lg font-bold text-highlight leading-tight">
                        {at(sejour.priceEncadrement) || at(sejour.basePrice) || '—'}
                      </span>
                    </div>
                  </div>

                  {/* Prix détaillé si frais de séjour */}
                  {sejour.priceFraisSejour && (
                    <div className="px-7 py-4 bg-foreground/[0.02] border-t border-border flex justify-between items-baseline">
                      <span className="text-[11px] font-bold text-foreground/50 uppercase tracking-wider">{at('Frais de séjour')}</span>
                      <span className="font-bold text-foreground/70">{at(sejour.priceFraisSejour)}</span>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="p-6 space-y-3 border-t border-border">
                    {numericPrice > 0 ? (
                      <>
                        <CheckoutButton 
                          title={at(sejour.title)}
                          price={numericPrice}
                          image={sejour.image}
                          slug={sejour.slug}
                        />
                        <Link href="/evasion-ski-hautes-alpes-contact" className="w-full block text-center text-foreground/50 hover:text-foreground/80 py-2 text-[11px] font-bold uppercase tracking-widest transition-colors">
                          {at('Demander un devis personnalisé')}
                        </Link>
                      </>
                    ) : (
                      <Link href="/evasion-ski-hautes-alpes-contact" className="btn-primary w-full block text-center py-4 text-sm font-bold uppercase tracking-widest">
                        {at('Réserver ce séjour')}
                      </Link>
                    )}
                    <p className="text-[9px] text-center text-foreground/30 font-bold uppercase tracking-widest">
                      {at('Conseils & Réservation par téléphone possible')}
                    </p>
                  </div>
                </div>

                {/* Bloc 2 — Prochains Départs (horizontal timeline) */}
                {!sejour.hideUpcomingSorties && (
                  <div className="rounded-[32px] border border-border shadow-xl overflow-hidden bg-card">

                    <div className="px-7 pt-6 pb-4 border-b border-border flex items-center gap-2">
                      <Calendar size={14} className="text-accent" />
                      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-accent">{at('Prochains Départs')}</span>
                    </div>

                    <div className="p-5 space-y-2">
                      {sejour.upcomingSorties && sejour.upcomingSorties.length > 0 ? (
                        sejour.upcomingSorties.map((s: any, i: number) => (
                          <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${s.isFull ? 'border-border bg-foreground/[0.02] opacity-60' : 'border-accent/20 bg-accent/[0.03] hover:bg-accent/[0.06]'}`}>
                            {/* Date bullet */}
                            <div className={`w-2 h-2 rounded-full shrink-0 ${s.isFull ? 'bg-foreground/20' : 'bg-accent'}`} />
                            <div className="flex-1 min-w-0">
                              <span className="font-bold text-sm text-foreground block truncate">{at(s.date)}</span>
                              <span className="text-[10px] text-foreground/40 font-medium">{at(s.availableSpots)} {at('places')}</span>
                            </div>
                            {s.isFull ? (
                              <span className="text-[9px] font-black uppercase text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full border border-red-500/20 shrink-0">{at('Complet')}</span>
                            ) : (
                              <span className="text-[9px] font-black uppercase text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 shrink-0">{at('Dispo')}</span>
                            )}
                          </div>
                        ))
                      ) : (
                        <div className="py-6 text-center">
                          <Calendar size={24} className="text-foreground/20 mx-auto mb-3" />
                          <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">{at('Dates sur demande')}</p>
                        </div>
                      )}
                    </div>

                    {/* Info partage / groupes — 2 colonnes compactes */}
                    <div className="grid grid-cols-2 divide-x divide-border border-t border-border">
                      <div className="p-4">
                        <span className="text-[9px] font-black uppercase tracking-widest text-accent block mb-1.5">{at('Partage')}</span>
                        <p className="text-[10px] leading-relaxed text-foreground/60">
                          {at("Inscriptions individuelles — frais partagés.")}
                        </p>
                      </div>
                      <div className="p-4">
                        <span className="text-[9px] font-black uppercase tracking-widest text-accent block mb-1.5">{at('Groupes')}</span>
                        <p className="text-[10px] leading-relaxed text-foreground/60">
                          {at("Groupe constitué ? Engagement privé possible.")}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      {sejour.gallery && sejour.gallery.length > 0 && (
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-10">
              {at('Galerie')} <span className="text-accent italic">{at('Photos')}</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sejour.gallery.map((photo: { url: string; alt?: string }, i: number) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-2xl group">
                  <Image
                    src={photo.url}
                    alt={photo.alt || at(sejour.title)}
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

      {/* Related Blog Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="pb-24 bg-surface/40">
          <div className="container mx-auto px-6 pt-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-10">
              {at('Dernières')} <span className="text-accent italic">{at('Sorties')}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((post: any) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
