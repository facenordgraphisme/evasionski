'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Users, MapPin, Clock } from 'lucide-react'

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

interface Sortie {
  _id: string
  slug?: string
  titrePersonnalise?: string
  dateDebut: string
  dateFin?: string
  prix: string
  niveau?: string
  placesDisponibles: number
  placesTotales: number
  complet: boolean
  image?: string
  lieuRdv?: string
  heureRdv?: string
  sejour: Sejour
}

interface UpcomingSortiesProps {
  initialFilter?: string;
  showFilters?: boolean;
  data?: Sortie[];
  badge?: string
  title?: string
  titleAccent?: string
  className?: string
}

import { useLanguage } from '@/context/LanguageContext'

const UpcomingSorties = ({ 
  initialFilter = 'Tous les séjours', 
  showFilters = true, 
  data = [],
  badge = "Prochaines sorties",
  title = "REJOIGNEZ",
  titleAccent = "L'AVENTURE",
  className = "bg-background"
}: UpcomingSortiesProps) => {
  const { at, t } = useLanguage()
  const [filter, setFilter] = useState(initialFilter)

  const categories = [
    at('Tous les séjours'),
    at('Ski de rando journée'),
    at('Freerando'),
    at('Stages & Raids')
  ]

  // Mapping categories to display names
  const getCategoryDisplay = (categorie: string) => {
    const map: Record<string, string> = {
      'journee-ski-rando': at('Ski de rando journée'),
      'journee-freerando': at('Freerando'),
      'stage-raid': at('Stages & Raids')
    }
    return map[categorie] || at(categorie)
  }

  const safeData = data || []
  
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const filteredSorties = safeData.filter(s => {
    if (!s.sejour) return false;

    // Filter out past departures
    const start = s.dateDebut ? new Date(s.dateDebut) : null;
    if (start) start.setHours(0, 0, 0, 0);
    if (start && start < today) return false;

    // Custom filter logic
    const matchesCat = (() => {
      if (filter === 'Tous les séjours' || filter === at('Tous les séjours')) return true;
      if (filter === 'Ski de rando journée' || filter === at('Ski de rando journée')) {
        return s.sejour.categorie === 'journee-ski-rando';
      }
      if (filter === 'Freerando' || filter === at('Freerando')) {
        return s.sejour.categorie === 'journee-freerando';
      }
      if (filter === 'Stages & Raids' || filter === at('Stages & Raids')) {
        return s.sejour.categorie === 'stage-raid';
      }
      return s.sejour.categorie.toLowerCase().includes(filter.toLowerCase());
    })();

    return matchesCat;
  });

  return (
    <section className={`py-24 px-6 transition-colors duration-300 ${className}`}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">{at(badge)}</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-normal">
              {at(title)} <span className="text-accent italic">{at(titleAccent)}</span>
            </h2>
          </div>

          {showFilters && (
            <div className="flex flex-wrap gap-2 justify-end">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${filter === cat
                      ? 'bg-accent text-slate-900 shadow-lg'
                      : 'bg-foreground/5 text-foreground/40 hover:bg-foreground/10'
                    }`}
                >
                  {at(cat)}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredSorties.map((s, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl bg-card/5 border border-border"
              >
                {(s.image || s.sejour?.image) && (
                  <Image
                    src={s.image || s.sejour.image}
                    alt={at(s.sejour.title)}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                  <span className="px-4 py-1.5 bg-accent text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    {getCategoryDisplay(s.sejour?.categorie)}
                  </span>
                  {s.complet && (
                    <span className="px-4 py-1.5 bg-red-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                      {at('Complet')}
                    </span>
                  )}
                </div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-accent font-bold uppercase tracking-[0.2em] text-xs">
                      <Calendar size={14} />
                      {new Date(s.dateDebut).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}
                      {s.dateFin && s.dateFin !== s.dateDebut && ` - ${new Date(s.dateFin).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })}`}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground tracking-tight leading-snug">
                      {at(s.titrePersonnalise || s.sejour?.title)}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-widest text-foreground/60">
                      {s.sejour?.massifs && s.sejour.massifs.length > 0 && (
                        <div className="flex items-center gap-1">
                          <MapPin size={12} className="text-accent" />
                          {at(s.sejour.massifs[0])}
                        </div>
                      )}
                      {s.sejour?.duree && (
                        <div className="flex items-center gap-1">
                          <Clock size={12} className="text-accent" />
                          {at(s.sejour.duree)}
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Users size={12} className="text-accent" />
                        {s.placesDisponibles} / {s.placesTotales} {at('places')}
                      </div>
                    </div>
                  </div>

                  {(() => {
                    // Pour les sorties à la journée, lien vers la page de la sortie
                    // Pour les stages/raids, lien vers la page du séjour parent
                    const isJournee = s.sejour?.categorie === 'journee-ski-rando' || s.sejour?.categorie === 'journee-freerando'
                    const href = isJournee && s.slug ? `/sorties/${s.slug}` : `/${s.sejour?.slug}`

                    return (
                      <Link
                        href={href}
                        className="w-full py-4 bg-foreground text-background hover:bg-accent hover:text-white transition-all rounded-2xl text-center text-xs font-black uppercase tracking-widest"
                      >
                        {at('Découvrir la sortie')}
                      </Link>
                    );
                  })()}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredSorties.length === 0 && (
          <div className="text-center py-24 glass rounded-[40px]">
            <p className="text-xl text-foreground/40 font-medium">{at('Aucune sortie programmée pour ces critères actuellement.')}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default UpcomingSorties
