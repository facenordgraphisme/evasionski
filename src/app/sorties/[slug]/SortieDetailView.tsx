'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, Users, Clock, ChevronLeft, TrendingUp, Activity } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import RichContent from '@/components/RichContent'
import BookingPopup from '@/components/BookingPopup'
import MobileCTA from '@/components/MobileCTA'

interface SortieDetailViewProps {
  sortie: any
}

export default function SortieDetailView({ sortie }: SortieDetailViewProps) {
  const { at, t } = useLanguage()
  const [isBookingPopupOpen, setIsBookingPopupOpen] = useState(false)

  const titre = sortie.titrePersonnalise || sortie.sejour?.title

  // Composant CTA réutilisable
  const CTAButton = ({ className = '' }: { className?: string }) => {
    const buttonText = at(sortie.complet || sortie.placesDisponibles === 0 ? 'Liste d\'attente' : 'Réserver ma place')

    if (sortie.outplannersLink) {
      return (
        <button
          onClick={() => setIsBookingPopupOpen(true)}
          className={`btn-primary inline-block px-12 py-4 text-lg font-bold uppercase tracking-widest cursor-pointer ${className}`}
        >
          {buttonText}
        </button>
      )
    }

    return (
      <Link
        href="/evasion-ski-hautes-alpes-contact"
        className={`btn-primary inline-block px-12 py-4 text-lg font-bold uppercase tracking-widest ${className}`}
      >
        {buttonText}
      </Link>
    )
  }

  console.log('🎨 Rendering SortieDetailView with:', {
    hasProgramme: !!sortie.programmeSpecifique,
    hasInfos: !!sortie.informationsComplementaires,
    hasSejour: !!sortie.sejour,
  })

  const description = sortie.descriptionPersonnalisee || sortie.sejour?.description
  const image = sortie.image || sortie.sejour?.image
  const massif = sortie.massifSpecifique || sortie.sejour?.massifs?.[0]
  const niveau = sortie.niveau || sortie.sejour?.niveauDefaut

  // Déterminer le lien de retour selon la catégorie
  const getBackLink = () => {
    if (sortie.sejour?.categorie === 'journee-ski-rando') {
      return '/ski-randonnee-hautes-alpes-journee'
    } else if (sortie.sejour?.categorie === 'journee-freerando') {
      return '/ski-hors-piste-station-hautes-alpes'
    }
    return '/' // Par défaut, page d'accueil
  }

  // Format dates
  const dateDebut = new Date(sortie.dateDebut).toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
  const dateFin = sortie.dateFin && sortie.dateFin !== sortie.dateDebut
    ? new Date(sortie.dateFin).toLocaleDateString('fr-FR', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    : null

  const getNiveauLabel = (niv?: string) => {
    const map: Record<string, string> = {
      'debutant': at('Débutant'),
      'intermediaire': at('Intermédiaire'),
      'confirme': at('Confirmé'),
      'expert': at('Expert')
    }
    return niv ? map[niv] || at(niv) : ''
  }

  const getCategorieLabel = (cat?: string) => {
    const map: Record<string, string> = {
      'journee-ski-rando': at('Ski de rando journée'),
      'journee-freerando': at('Freerando'),
      'stage-raid': at('Stage / Raid')
    }
    return cat ? map[cat] || at(cat) : ''
  }

  const getEffortLabel = (effort?: string) => {
    const map: Record<string, string> = {
      'facile': at('Facile'),
      'modere': at('Modéré'),
      'soutenu': at('Soutenu'),
      'intense': at('Intense')
    }
    return effort ? map[effort] || at(effort) : ''
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {image && (
            <Image
              src={image}
              alt={at(titre)}
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-background via-transparent to-black/20" />
        </div>

        <div className="container relative z-10 px-6 pt-32 max-w-5xl">
          <Link
            href={getBackLink()}
            className="inline-flex items-center gap-2 text-accent font-bold mb-8 hover:gap-4 transition-all duration-300"
          >
            <ChevronLeft size={20} />
            {at('RETOUR AUX SORTIES')}
          </Link>

          <div className="flex flex-wrap gap-4 mb-8">
            {sortie.sejour?.categorie && (
              <span className="px-4 py-1.5 bg-accent text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                {getCategorieLabel(sortie.sejour.categorie)}
              </span>
            )}
            {massif && (
              <span className="px-3 py-1 bg-background/50 text-white text-[10px] font-bold uppercase tracking-wider rounded-full backdrop-blur-md border border-white/10 flex items-center gap-1">
                <MapPin size={10} className="text-accent" />
                {at(massif)}
              </span>
            )}
            {sortie.complet || sortie.placesDisponibles === 0 ? (
              <span className="px-4 py-1.5 bg-red-500/90 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                {at('Complet')}
              </span>
            ) : sortie.placesDisponibles <= 2 ? (
              <span className="px-4 py-1.5 bg-orange-500/90 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                {at('Dernières places')}
              </span>
            ) : null}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white">
            {at(titre)}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="pt-24 lg:pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {description && (
                <p className="text-2xl font-medium leading-relaxed text-foreground/80">
                  {at(description)}
                </p>
              )}

              {/* Programme */}
              {(sortie.programmeSpecifique || sortie.sejour?.programme) && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gradient">
                    {at('Programme')}
                  </h2>
                  <div className="glass rounded-[40px] border border-border shadow-xl overflow-hidden">
                    <div className="p-8 prose prose-lg max-w-none">
                      <RichContent
                        value={sortie.programmeSpecifique || sortie.sejour.programme}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Informations complémentaires */}
              {sortie.informationsComplementaires && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gradient">
                    {at('Informations complémentaires')}
                  </h2>
                  <div className="glass rounded-[40px] border border-border shadow-xl overflow-hidden">
                    <div className="p-8 prose prose-lg max-w-none">
                      <RichContent value={sortie.informationsComplementaires} />
                    </div>
                  </div>
                </div>
              )}

              {/* Matériel */}
              {sortie.sejour?.materiel && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gradient">
                    {at('Matériel')}
                  </h2>
                  <div className="glass rounded-[40px] border border-border shadow-xl overflow-hidden p-8">
                    <RichContent value={sortie.sejour.materiel} />

                    {(sortie.sejour.materielInclus || sortie.sejour.materielNonInclus) && (
                      <div className="grid md:grid-cols-2 gap-8 mt-8">
                        {sortie.sejour.materielInclus && (
                          <div>
                            <h3 className="font-bold text-lg mb-4 text-emerald-500">
                              ✓ {at('Inclus')}
                            </h3>
                            <ul className="space-y-2">
                              {sortie.sejour.materielInclus.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-emerald-500 mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {sortie.sejour.materielNonInclus && (
                          <div>
                            <h3 className="font-bold text-lg mb-4 text-red-500">
                              ✗ {at('Non inclus / À prévoir')}
                            </h3>
                            <ul className="space-y-2">
                              {sortie.sejour.materielNonInclus.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-red-500 mt-1">•</span>
                                  <span className="text-foreground/70">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Budget / Tarif */}
              {(sortie.budgetSpecifique || sortie.sejour?.budget) && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gradient">
                    {at('Tarif & Budget')}
                  </h2>
                  <div className="glass rounded-[40px] border border-border shadow-xl overflow-hidden p-8">
                    <RichContent value={sortie.budgetSpecifique || sortie.sejour.budget} />

                    {((sortie.budgetInclusSpecifique || sortie.sejour?.budgetInclus) || (sortie.budgetNonInclusSpecifique || sortie.sejour?.budgetNonInclus)) && (
                      <div className="grid md:grid-cols-2 gap-8 mt-8">
                        {(sortie.budgetInclusSpecifique || sortie.sejour?.budgetInclus) && (
                          <div>
                            <h3 className="font-bold text-lg mb-4 text-emerald-500">
                              ✓ {at('Inclus dans le prix')}
                            </h3>
                            <ul className="space-y-2">
                              {(sortie.budgetInclusSpecifique || sortie.sejour.budgetInclus).map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-emerald-500 mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {(sortie.budgetNonInclusSpecifique || sortie.sejour?.budgetNonInclus) && (
                          <div>
                            <h3 className="font-bold text-lg mb-4 text-red-500">
                              ✗ {at('Non inclus')}
                            </h3>
                            <ul className="space-y-2">
                              {(sortie.budgetNonInclusSpecifique || sortie.sejour.budgetNonInclus).map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-red-500 mt-1">•</span>
                                  <span className="text-foreground/70">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Infos pratiques */}
              {(sortie.infosPratiquesSpecifiques || sortie.sejour?.infosPratiques) && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gradient">
                    {at('Informations pratiques')}
                  </h2>
                  <div className="glass rounded-[40px] border border-border shadow-xl overflow-hidden">
                    <div className="p-8 prose prose-lg max-w-none">
                      <RichContent value={sortie.infosPratiquesSpecifiques || sortie.sejour.infosPratiques} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-36 space-y-5">

                {/* Bloc 1 — Stats + Prix + CTA */}
                <div className="rounded-[32px] border border-border shadow-2xl overflow-hidden bg-card">

                  {/* Header */}
                  <div className="px-7 pt-7 pb-5 border-b border-border">
                    <span className="text-[9px] font-black uppercase tracking-[0.25em] text-accent">
                      {at('Fiche Technique')}
                    </span>
                  </div>

                  {/* Stats Grid 2×2 */}
                  <div className="grid grid-cols-2 divide-x divide-y divide-border">
                    {/* Durée */}
                    {sortie.sejour?.duree && (
                      <div className="p-5 bg-foreground/[0.01] hover:bg-foreground/[0.02] transition-colors">
                        <div className="flex flex-col gap-2">
                          <span className="text-[9px] font-black uppercase tracking-widest text-foreground/40">
                            {at('Durée')}
                          </span>
                          <span className="text-base font-bold text-foreground leading-tight">
                            {at(sortie.sejour.duree)}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Niveau */}
                    {niveau && (
                      <div className="p-5 bg-foreground/[0.01] hover:bg-foreground/[0.02] transition-colors">
                        <div className="flex flex-col gap-2">
                          <span className="text-[9px] font-black uppercase tracking-widest text-foreground/40">
                            {at('Niveau')}
                          </span>
                          <span className="text-base font-bold text-foreground leading-tight">
                            {getNiveauLabel(niveau)}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Dénivelé */}
                    {sortie.denivele && (
                      <div className="p-5 bg-foreground/[0.01] hover:bg-foreground/[0.02] transition-colors">
                        <div className="flex flex-col gap-2">
                          <span className="text-[9px] font-black uppercase tracking-widest text-foreground/40">
                            {at('Dénivelé')}
                          </span>
                          <span className="text-base font-bold text-foreground leading-tight">
                            {sortie.denivele}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Effort */}
                    {sortie.effortPhysique && (
                      <div className="p-5 bg-foreground/[0.01] hover:bg-foreground/[0.02] transition-colors">
                        <div className="flex flex-col gap-2">
                          <span className="text-[9px] font-black uppercase tracking-widest text-foreground/40">
                            {at('Effort')}
                          </span>
                          <span className="text-base font-bold text-foreground leading-tight">
                            {getEffortLabel(sortie.effortPhysique)}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Prix */}
                  <div className="px-7 py-6 bg-gradient-to-br from-accent/5 to-transparent border-t border-border">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[9px] font-black uppercase tracking-widest text-foreground/40">
                        {at('Prix')}
                      </span>
                      <div className="text-right">
                        <div className="text-2xl font-black text-accent">
                          {sortie.prix}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="p-6 border-t border-border">
                    <CTAButton className="w-full text-center" />
                  </div>
                </div>

                {/* Bloc 2 — Dates et Rendez-vous */}
                <div className="rounded-[32px] border border-border shadow-xl overflow-hidden bg-card">
                  <div className="px-7 pt-6 pb-4 border-b border-border flex items-center gap-2">
                    <Calendar size={14} className="text-accent" />
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-accent">
                      {at('Dates & Rendez-vous')}
                    </span>
                  </div>

                  <div className="p-5 space-y-4">
                    {/* Date */}
                    <div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-foreground/40 mb-2">
                        {at('Date')}
                      </div>
                      <div className="text-sm font-medium text-foreground/80">
                        {dateDebut}
                        {dateFin && (
                          <>
                            <br />→ {dateFin}
                          </>
                        )}
                      </div>
                    </div>

                    {/* Heure RDV */}
                    {sortie.heureRdv && (
                      <div>
                        <div className="text-[9px] font-black uppercase tracking-widest text-foreground/40 mb-2">
                          {at('Heure')}
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                          <Clock size={14} className="text-accent" />
                          {sortie.heureRdv}
                        </div>
                      </div>
                    )}

                    {/* Lieu RDV */}
                    {sortie.lieuRdv && (
                      <div>
                        <div className="text-[9px] font-black uppercase tracking-widest text-foreground/40 mb-2">
                          {at('Lieu de rendez-vous')}
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                          <MapPin size={14} className="text-accent" />
                          {sortie.lieuRdv}
                        </div>
                      </div>
                    )}

                    {/* Places */}
                    <div className="pt-4 border-t border-border">
                      <div className="text-[9px] font-black uppercase tracking-widest text-foreground/40 mb-2">
                        {at('Disponibilité')}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={14} className="text-accent" />
                        <span className="text-sm font-bold text-foreground">
                          {sortie.placesDisponibles} / {sortie.placesTotales} {at('places')}
                        </span>
                        {sortie.complet || sortie.placesDisponibles === 0 ? (
                          <span className="ml-auto text-[9px] font-black uppercase text-red-400 bg-red-500/10 px-2 py-1 rounded-full border border-red-500/20">
                            {at('Complet')}
                          </span>
                        ) : sortie.placesDisponibles <= 2 ? (
                          <span className="ml-auto text-[9px] font-black uppercase text-orange-400 bg-orange-500/10 px-2 py-1 rounded-full border border-orange-500/20">
                            {at('Dernières places')}
                          </span>
                        ) : (
                          <span className="ml-auto text-[9px] font-black uppercase text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
                            {at('Disponible')}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popup de réservation */}
      {sortie.outplannersLink && (
        <BookingPopup
          isOpen={isBookingPopupOpen}
          onClose={() => setIsBookingPopupOpen(false)}
          bookingUrl={sortie.outplannersLink}
          title={at(titre)}
        />
      )}

      {/* Mobile CTA */}
      <MobileCTA
        prix={sortie.prix}
        complet={sortie.complet}
        placesDisponibles={sortie.placesDisponibles}
        outplannersLink={sortie.outplannersLink}
        onBookingClick={() => setIsBookingPopupOpen(true)}
      />
    </div>
  )
}
