'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Clock, TrendingUp, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

interface Sejour {
  title: string
  slug: string
  categorie: string
  massifs: string[]
  niveauDefaut: string
  duree: string
  prixDefaut: string
  image: string
  description: string
}

interface StagesRaidsViewProps {
  sejours: Sejour[]
}

export default function StagesRaidsView({ sejours }: StagesRaidsViewProps) {
  const { at } = useLanguage()

  const getNiveauLabel = (niveau: string) => {
    const map: Record<string, string> = {
      'debutant': at({ fr: 'Débutant', en: 'Beginner' }),
      'intermediaire': at({ fr: 'Intermédiaire', en: 'Intermediate' }),
      'confirme': at({ fr: 'Confirmé', en: 'Advanced' }),
      'expert': at({ fr: 'Expert', en: 'Expert' })
    }
    return map[niveau] || niveau
  }

  return (
    <main className="relative pt-32 pb-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden mb-24">
        <Image
          src="/images/stages_raids_hub.jpg"
          alt={at({ fr: 'Stages et raids à ski', en: 'Ski touring stages & raids' })}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-16">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              {at({ fr: 'Immersion totale', en: 'Full immersion' })}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient max-w-4xl">
              {at({ fr: 'Stages et raids à ski', en: 'Ski touring stages & raids' })}
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl leading-relaxed">
              {at({
                fr: 'De refuge en gîte, vivez des raids à ski d\'exception de plusieurs jours. Du Queyras aux Alpes de Lyngen en Norvège, découvrez les plus beaux massifs.',
                en: 'From hut to lodge, experience exceptional multi-day ski raids. From Queyras to the Lyngen Alps in Norway, discover the most beautiful mountain ranges.'
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Séjours Grid */}
      <section className="px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sejours.map((sejour, idx) => (
              <motion.div
                key={sejour.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  href={`/${sejour.slug}`}
                  className="group block relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl bg-card border border-border hover:border-accent/50 transition-all duration-500"
                >
                  {sejour.image && (
                    <Image
                      src={sejour.image}
                      alt={at(sejour.title)}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                      {at({ fr: 'Stage / Raid', en: 'Stage / Raid' })}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-foreground mb-4 leading-snug">
                      {at(sejour.title)}
                    </h3>

                    <div className="space-y-2 mb-6 text-sm">
                      {sejour.massifs && sejour.massifs.length > 0 && (
                        <div className="flex items-center gap-2 text-foreground/80">
                          <MapPin size={14} className="text-accent" />
                          <span className="font-medium">{at(sejour.massifs[0])}</span>
                        </div>
                      )}
                      {sejour.duree && (
                        <div className="flex items-center gap-2 text-foreground/80">
                          <Clock size={14} className="text-accent" />
                          <span className="font-medium">{at(sejour.duree)}</span>
                        </div>
                      )}
                      {sejour.niveauDefaut && (
                        <div className="flex items-center gap-2 text-foreground/80">
                          <TrendingUp size={14} className="text-accent" />
                          <span className="font-medium">{getNiveauLabel(sejour.niveauDefaut)}</span>
                        </div>
                      )}
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-black text-accent">
                        {at(sejour.prixDefaut)}
                      </div>
                      <div className="flex items-center gap-1 text-accent text-xs font-black uppercase tracking-widest group-hover:gap-2 transition-all">
                        {at({ fr: 'Découvrir', en: 'Discover' })}
                        <ChevronRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {sejours.length === 0 && (
            <div className="text-center py-24 glass rounded-[40px]">
              <p className="text-xl text-foreground/40 font-medium">
                {at({ fr: 'Aucun stage ou raid disponible pour le moment.', en: 'No stages or raids available at the moment.' })}
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
