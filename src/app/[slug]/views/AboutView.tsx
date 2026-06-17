import React from 'react';
import Image from 'next/image';
import { PortableText } from "@portabletext/react";
import PartnersSlider from "@/components/PartnersSlider";
import { getServerTranslations } from '@/i18n/server';

interface AboutViewProps {
  guide: any;
  settings: any;
}

export default async function AboutView({ guide, settings }: AboutViewProps) {
  const { at, translatePortableText } = await getServerTranslations();

  const fallback = {
    badge: at("Votre Moniteur"),
    titleNormal: at("TONI"),
    titleAccent: at("MANCINI"),
    quote: at("Vivez l'exceptionnel en altitude avec un moniteur passionné. Sécurité, aventure et respect de la nature."),
    image: "/photos/DSC_6701.jpg",
    bioTitle: at("Une passion née dans les Hautes-Alpes"),
    certification: "Moniteur National",
    certificationSub: at("Diplômé d'État depuis 2001"),
    experience: "25+",
    experienceSub: at("Années d'expérience"),
    values: [
      { title: at("Sécurité"), description: at("La base de toute aventure. Une analyse constante des conditions pour un plaisir serein.") },
      { title: at("Adaptabilité"), description: at("La montagne impose son rythme, je m'adapte pour que votre expérience soit optimale.") },
      { title: at("Pédagogie"), description: at("Plus qu'un encadrant, je suis là pour vous apprendre à devenir autonome en montagne.") }
    ]
  };

  const data = guide || fallback;

  return (
    <div className="relative min-h-screen">

      {/* Header Section */}
      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              {at(data.badge || fallback.badge)}
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-gradient uppercase">
              {at(data.titleNormal || fallback.titleNormal)} <br /> {at(data.titleAccent || fallback.titleAccent)}
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed italic border-l-4 border-accent pl-8 py-2">
              "{at(data.quote || fallback.quote)}"
            </p>
          </div>
        </div>
      </section>

      {/* Main Bio Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl">
              <Image
                src={data.image || fallback.image}
                alt="Toni Mancini"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-8 text-lg text-foreground/70 leading-relaxed">
              <h2 className="text-4xl font-bold text-foreground">
                {at(data.bioTitle || fallback.bioTitle)}
              </h2>
              <div className="prose prose-invert prose-lg max-w-none text-foreground/70">
                {data.bio ? (
                  <PortableText value={translatePortableText(data.bio)} />
                ) : (
                  <>
                    <p>
                      {at('Je m\'appelle Toni, moniteur de ski diplômé d\'État et indépendant, basé dans les Alpes du Sud et plus précisément dans les Hautes-Alpes, aux Orres depuis 2001.')}
                    </p>
                    <p>
                      {at('Spécialisé en ski de montagne, passionné et pratiquant assidu, je vous accompagne aujourd\'hui dans des aventures sur mesure, dans un cadre à la fois sérieux et convivial.')}
                    </p>
                  </>
                )}
              </div>

              <div className="pt-8 grid grid-cols-2 gap-8">
                <div className="glass p-6 rounded-3xl">
                  <p className="text-3xl font-bold text-highlight">{at(data.certification || fallback.certification)}</p>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-50">{at(data.certificationSub || fallback.certificationSub)}</p>
                </div>
                <div className="glass p-6 rounded-3xl">
                  <p className="text-3xl font-bold text-highlight">{at(data.experience || fallback.experience)}</p>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-50">{at(data.experienceSub || fallback.experienceSub)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Values Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{at('Mes Valeurs')}</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(data.values || fallback.values).map((v: any, index: number) => (
              <div key={index} className="glass p-10 rounded-[40px] hover:border-accent transition-colors border border-border">
                <h3 className="text-2xl font-bold mb-4 text-accent">{at(v.title)}</h3>
                <p className="text-foreground/60">{at(v.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {settings && !settings.hidePartners && settings.partners && settings.partners.length > 0 && (
        <PartnersSlider partners={settings.partners} />
      )}
    </div>
  );
}
