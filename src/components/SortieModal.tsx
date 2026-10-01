'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, MapPin, Calendar, Clock, TrendingUp, Mountain } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

interface SortieModalProps {
  isOpen: boolean
  onClose: () => void
  sortie: {
    titrePersonnalise?: string
    dateDebut: string
    dateFin?: string
    image?: string
    lieuRdv?: string
    heureRdv?: string
    niveau?: string
    denivelePositif?: number
    prix: string
    placesDisponibles: number
    placesTotales: number
    complet: boolean
    outplannersLink?: string
  }
  sejourTitle: string
  sejourImage?: string
  onReserver: () => void
  getLevelLabel: (level?: string) => string
}

export default function SortieModal({
  isOpen,
  onClose,
  sortie,
  sejourTitle,
  sejourImage,
  onReserver,
  getLevelLabel
}: SortieModalProps) {
  const { at } = useLanguage()

  const titre = sortie.titrePersonnalise || sejourTitle
  const image = sortie.image || sejourImage

  // Format date
  const dateDebut = new Date(sortie.dateDebut).toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
  const dateFin = sortie.dateFin && sortie.dateFin !== sortie.dateDebut
    ? new Date(sortie.dateFin).toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'long'
      })
    : null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-2xl max-h-[85vh] overflow-y-auto glass rounded-[32px] shadow-2xl border border-border z-[90]"
          >
            {/* Header avec image */}
            <div className="relative h-64 rounded-t-[32px] overflow-hidden">
              {image && (
                <Image
                  src={image}
                  alt={at(titre)}
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition-all"
              >
                <X size={20} />
              </button>

              {/* Title */}
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {at(titre)}
                </h2>
                {(sortie.complet || sortie.placesDisponibles === 0) ? (
                  <span className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-black uppercase tracking-widest rounded-full">
                    {at('Complet')}
                  </span>
                ) : (
                  <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-xs font-black uppercase tracking-widest rounded-full">
                    {sortie.placesDisponibles} {at('places disponibles')}
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
              {/* Date */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Calendar size={24} className="text-accent" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-foreground/60 mb-1">
                    {at('Date')}
                  </div>
                  <div className="font-bold text-foreground">
                    {dateDebut}
                    {dateFin && ` - ${dateFin}`}
                  </div>
                </div>
              </div>

              {/* Heure de départ */}
              {sortie.heureRdv && (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Clock size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-foreground/60 mb-1">
                      {at('Heure de rendez-vous')}
                    </div>
                    <div className="font-bold text-foreground">{sortie.heureRdv}</div>
                  </div>
                </div>
              )}

              {/* Lieu de départ */}
              {sortie.lieuRdv && (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-foreground/60 mb-1">
                      {at('Lieu de rendez-vous')}
                    </div>
                    <div className="font-bold text-foreground">{sortie.lieuRdv}</div>
                  </div>
                </div>
              )}

              {/* Niveau */}
              {sortie.niveau && (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <TrendingUp size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-foreground/60 mb-1">
                      {at('Niveau')}
                    </div>
                    <div className="font-bold text-foreground">{getLevelLabel(sortie.niveau)}</div>
                  </div>
                </div>
              )}

              {/* Dénivelé */}
              {sortie.denivelePositif && (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Mountain size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-foreground/60 mb-1">
                      {at('Dénivelé positif')}
                    </div>
                    <div className="font-bold text-foreground">
                      {sortie.denivelePositif}m D+
                    </div>
                  </div>
                </div>
              )}

              {/* Divider */}
              <div className="border-t border-border pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-foreground/60 mb-1">
                      {at('Tarif')}
                    </div>
                    <div className="text-3xl font-black text-accent">{sortie.prix}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-foreground/60">
                      {sortie.placesDisponibles} / {sortie.placesTotales} {at('places')}
                    </div>
                  </div>
                </div>

                {/* CTA Réserver */}
                {!(sortie.complet || sortie.placesDisponibles === 0) && (
                  <button
                    onClick={onReserver}
                    className="w-full py-4 bg-accent hover:bg-accent/90 text-white rounded-2xl text-center font-black uppercase tracking-widest transition-all shadow-lg hover:shadow-accent/50"
                  >
                    {at('Réserver cette sortie')}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
