import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Calendar, Clock, Euro } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import SejourCard from '@/components/SejourCard';
import { getServerTranslations } from '@/i18n/server';
import SejourFAQ from '@/components/SejourFAQ';

interface ActivityViewProps {
  activity: any;
  sejours: any[];
}

const slugVideoMap: Record<string, string> = {
  'stages-et-raids-a-ski-de-randonnee-hautes-alpes': '/videos/stages-raids.mp4'
}

export default async function ActivityView({ activity, sejours }: ActivityViewProps) {
  const { at, t, translatePortableText } = await getServerTranslations();

  const videoSrc = slugVideoMap[activity.slug]

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              muted
              playsInline
              loop
              poster={activity.image}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : activity.image ? (
            <Image 
              src={activity.image}
              alt={at(activity.title)}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          ) : null}
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-background via-transparent to-black/20" />
        </div>
        <div className="container relative z-10 px-6 text-center pt-20">
          <span className="text-accent font-black tracking-[0.4em] uppercase text-xs mb-6 block">
            {at(activity.subtitle || "AVENTURE")}
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white uppercase mb-8 leading-[0.8]">
            {at(activity.title)}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium">
            {at(activity.intro || activity.description?.substring(0, 200))}
          </p>
        </div>
      </section>

      {/* Key Points Section */}
      {activity.keyPoints && activity.keyPoints.length > 0 && (
        <section className="py-20 bg-card/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {activity.keyPoints.map((point: any, i: number) => (
                <div key={i} className="glass p-10 rounded-[40px] text-center border border-border shadow-lg hover:border-accent/30 transition-colors">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto mb-6">
                    <span className="font-black text-xl">{i + 1}</span>
                  </div>
                  <h3 className="text-xl font-black mb-4 text-accent uppercase tracking-widest leading-tight">
                    {at(point.title)}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed font-medium">
                    {at(point.description)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Catalog / Sejours Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-black tracking-widest uppercase text-xs mb-4 block">
              {at("NOTRE SÉLECTION")}
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
              {at('Les Formules')} <span className="text-accent italic">{at('& Séjours')}</span>
            </h2>
            <p className="text-foreground/40 font-bold uppercase tracking-widest text-xs">
              {at('Découvrez nos aventures disponibles')}
            </p>
          </div>

          {sejours && sejours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sejours.map((sejour: any) => (
                <SejourCard 
                  key={sejour.slug} 
                  sejour={sejour} 
                  activitySlug={activity.slug} 
                />
              ))}
            </div>
          ) : (
            <div className="glass p-20 rounded-[50px] text-center border border-dashed border-border max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 opacity-40 uppercase tracking-tighter">
                {at('Sur Mesure / Engagement')}
              </h3>
              <p className="text-foreground/60 font-medium mb-8 max-w-xl mx-auto">
                {at(activity.description || 'Découvrez nos formules d\'engagement privé sur mesure pour cette activité.')}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {activity.price && (
                  <span className="text-xl font-black text-highlight px-6 py-3 bg-foreground/5 rounded-full border border-border">
                    {at(activity.price)}
                  </span>
                )}
                <Link 
                  href="/evasion-ski-hautes-alpes-contact" 
                  className="btn-primary py-4 px-8 text-sm font-black uppercase tracking-widest !text-white"
                >
                  {at('Faire une demande')}
                </Link>
              </div>
            </div>
          )}

          {activity.faqs && activity.faqs.length > 0 && (
            <div className="max-w-4xl mx-auto mt-24">
              <SejourFAQ faqs={activity.faqs} />
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
