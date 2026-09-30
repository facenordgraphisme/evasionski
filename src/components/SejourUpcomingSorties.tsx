'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, Eye } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import BookingPopup from './BookingPopup'

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
  outplannersLink?: string
}

interface SejourUpcomingSortiesProps {
  sorties: Sortie[]
  sejourTitle: string
  sejourNiveauDefaut?: string
}

export default function SejourUpcomingSorties({
  sorties,
  sejourTitle,
  sejourNiveauDefaut
}: SejourUpcomingSortiesProps) {
  const { at } = useLanguage()
  const [isBookingPopupOpen, setIsBookingPopupOpen] = useState(false)
  const [selectedBooking, setSelectedBooking] = useState<{ url: string, title: string } | null>(null)

  const getLevelLabel = (level?: string) => {
    const map: Record<string, string> = {
      'debutant': at('Débutant'),
      'intermediaire': at('Intermédiaire'),
      'confirme': at('Confirmé'),
      'expert': at('Expert')
    }
    return level ? map[level] || level : ''
  }

  const handleReserverClick = (sortie: Sortie) => {
    if (sortie.outplannersLink) {
      setSelectedBooking({
        url: sortie.outplannersLink,
        title: at(sortie.titrePersonnalise || sejourTitle)
      })
      setIsBookingPopupOpen(true)
    } else {
      // Rediriger vers la page de contact si pas de lien Outplanners
      window.location.href = '/evasion-ski-hautes-alpes-contact'
    }
  }

  if (!sorties || sorties.length === 0) {
    return (
      <div className="py-6 text-center">
        <Calendar size={24} className="text-foreground/20 mx-auto mb-3" />
        <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">
          {at('Dates sur demande')}
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="space-y-2">
        {sorties.map((s: Sortie, i: number) => {
          const dateDebut = new Date(s.dateDebut).toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          })
          const dateFin = s.dateFin && s.dateFin !== s.dateDebut
            ? ` - ${new Date(s.dateFin).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })}`
            : ''
          const dateDisplay = `${dateDebut}${dateFin}`
          const sortieTitle = s.titrePersonnalise || sejourTitle
          const sortieNiveau = s.niveau || sejourNiveauDefaut

          return (
            <div
              key={s._id || i}
              className={`p-4 rounded-2xl border transition-all ${
                s.complet || s.placesDisponibles === 0
                  ? 'border-border bg-foreground/[0.02] opacity-60'
                  : 'border-accent/20 bg-accent/[0.03]'
              }`}
            >
              {/* Header : Titre + Date + Badge */}
              <div className="flex items-start gap-3 mb-3">
                {/* Date bullet */}
                <div
                  className={`w-2 h-2 rounded-full shrink-0 mt-1.5 ${
                    s.complet || s.placesDisponibles === 0 ? 'bg-foreground/20' : 'bg-accent'
                  }`}
                />

                {/* Titre et date */}
                <div className="flex-1 min-w-0">
                  <span className="font-bold text-sm text-foreground block">{at(sortieTitle)}</span>
                  <span className="text-xs text-foreground/60 font-medium">{dateDisplay}</span>
                </div>

                {/* Status badge */}
                {s.complet || s.placesDisponibles === 0 ? (
                  <span className="text-[9px] font-black uppercase text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full border border-red-500/20 whitespace-nowrap shrink-0">
                    {at('Complet')}
                  </span>
                ) : (
                  <span className="text-[9px] font-black uppercase text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 whitespace-nowrap shrink-0">
                    {at('Dispo')}
                  </span>
                )}
              </div>

              {/* Détails + Boutons */}
              <div className="flex items-center justify-between gap-4 pl-5">
                {/* Détails (places, niveau, prix) */}
                <div className="flex items-center gap-3 text-[10px] font-medium">
                  <span className="text-foreground/60">
                    {s.placesDisponibles} / {s.placesTotales} {at('places')}
                  </span>
                  {sortieNiveau && (
                    <span className="text-accent font-bold">{getLevelLabel(sortieNiveau)}</span>
                  )}
                  {s.prix && <span className="text-accent font-bold text-sm">{s.prix}</span>}
                </div>

                {/* Boutons d'action */}
                <div className="flex items-center gap-2 shrink-0">
                  {/* Bouton Voir */}
                  {s.slug && (
                    <Link
                      href={`/sorties/${s.slug}`}
                      className="px-4 py-2 bg-foreground/5 hover:bg-foreground/10 text-foreground text-xs font-bold uppercase tracking-widest rounded-lg transition-all flex items-center gap-2 whitespace-nowrap"
                    >
                      <Eye size={14} />
                      {at('Voir')}
                    </Link>
                  )}

                  {/* Bouton Réserver - Toujours afficher si pas complet */}
                  {!(s.complet || s.placesDisponibles === 0) && (
                    <button
                      onClick={() => handleReserverClick(s)}
                      className="px-4 py-2 bg-accent hover:bg-accent/90 text-white text-xs font-bold uppercase tracking-widest rounded-lg transition-all shadow-lg hover:shadow-accent/50 whitespace-nowrap"
                    >
                      {at('Réserver')}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Popup de réservation */}
      {selectedBooking && (
        <BookingPopup
          isOpen={isBookingPopupOpen}
          onClose={() => {
            setIsBookingPopupOpen(false)
            setSelectedBooking(null)
          }}
          bookingUrl={selectedBooking.url}
          title={selectedBooking.title}
        />
      )}
    </>
  )
}
