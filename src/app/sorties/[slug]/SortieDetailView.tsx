'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, Users, Clock, ChevronLeft, TrendingUp, Activity } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import RichContent from '@/components/RichContent'

interface SortieDetailViewProps {
  sortie: any
}

export default function SortieDetailView({ sortie }: SortieDetailViewProps) {
  const { at, t } = useLanguage()

  console.log('🎨 Rendering SortieDetailView with:', {
    hasProgramme: !!sortie.programmeSpecifique,
    hasInfos: !!sortie.informationsComplementaires,
    hasSejour: !!sortie.sejour,
  })

  const titre = sortie.titrePersonnalise || sortie.sejour?.title
  const description = sortie.descriptionPersonnalisee || sortie.sejour?.description
  const image = sortie.image || sortie.sejour?.image
  const massif = sortie.massifSpecifique || sortie.sejour?.massifs?.[0]
  const niveau = sortie.niveau || sortie.sejour?.niveauDefaut

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
    <main className="relative pt-32 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        {image && (
          <Image
            src={image}
            alt={at(titre)}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-accent transition-colors mb-6 font-medium"
            >
              <ChevronLeft size={20} />
              {at('Retour aux sorties')}
            </Link>

            <div className="flex items-center gap-3 mb-4">
              {sortie.sejour?.categorie && (
                <span className="px-4 py-1.5 bg-accent text-white text-xs font-black uppercase tracking-widest rounded-full">
                  {getCategorieLabel(sortie.sejour.categorie)}
                </span>
              )}
              {sortie.complet || sortie.placesDisponibles === 0 ? (
                <span className="px-4 py-1.5 bg-red-500 text-white text-xs font-black uppercase tracking-widest rounded-full">
                  {at('Complet')}
                </span>
              ) : sortie.placesDisponibles <= 2 ? (
                <span className="px-4 py-1.5 bg-orange-500 text-white text-xs font-black uppercase tracking-widest rounded-full">
                  {at('Dernières places')}
                </span>
              ) : null}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient max-w-4xl">
              {at(titre)}
            </h1>

            <div className="flex flex-wrap gap-6 text-foreground/80">
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-accent" />
                <span className="font-medium">{dateDebut}</span>
                {dateFin && <span> - {dateFin}</span>}
              </div>
              {massif && (
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-accent" />
                  <span className="font-medium">{at(massif)}</span>
                </div>
              )}
              {niveau && (
                <div className="flex items-center gap-2">
                  <span className="font-medium">{getNiveauLabel(niveau)}</span>
                </div>
              )}
              {sortie.denivele && (
                <div className="flex items-center gap-2">
                  <TrendingUp size={20} className="text-accent" />
                  <span className="font-medium">{sortie.denivele}</span>
                </div>
              )}
              {sortie.effortPhysique && (
                <div className="flex items-center gap-2">
                  <Activity size={20} className="text-accent" />
                  <span className="font-medium">{getEffortLabel(sortie.effortPhysique)}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Users size={20} className="text-accent" />
                <span className="font-medium">
                  {sortie.placesDisponibles} / {sortie.placesTotales} {at('places')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          {description && (
            <div className="mb-12">
              <p className="text-xl text-foreground/80 leading-relaxed">
                {at(description)}
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Prix */}
            <div className="glass rounded-3xl p-6">
              <div className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-2">
                {at('Prix')}
              </div>
              <div className="text-3xl font-black text-accent">
                {sortie.prix}
              </div>
            </div>

            {/* Rendez-vous */}
            {(sortie.lieuRdv || sortie.heureRdv) && (
              <div className="glass rounded-3xl p-6">
                <div className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-2">
                  {at('Rendez-vous')}
                </div>
                <div className="space-y-1">
                  {sortie.heureRdv && (
                    <div className="flex items-center gap-2 text-foreground font-medium">
                      <Clock size={16} className="text-accent" />
                      {sortie.heureRdv}
                    </div>
                  )}
                  {sortie.lieuRdv && (
                    <div className="flex items-center gap-2 text-foreground/70 text-sm">
                      <MapPin size={16} className="text-accent" />
                      {sortie.lieuRdv}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Durée */}
            {sortie.sejour?.duree && (
              <div className="glass rounded-3xl p-6">
                <div className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-2">
                  {at('Durée')}
                </div>
                <div className="text-xl font-bold text-foreground">
                  {at(sortie.sejour.duree)}
                </div>
              </div>
            )}
          </div>

          {/* Programme */}
          {(sortie.programmeSpecifique || sortie.sejour?.programme) && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gradient">
                {at('Programme')}
              </h2>
              <div className="glass rounded-3xl p-8 prose prose-lg max-w-none">
                <RichContent
                  value={sortie.programmeSpecifique || sortie.sejour.programme}
                />
              </div>
            </div>
          )}

          {/* Informations complémentaires */}
          {sortie.informationsComplementaires && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gradient">
                {at('Informations complémentaires')}
              </h2>
              <div className="glass rounded-3xl p-8 prose prose-lg max-w-none">
                <RichContent value={sortie.informationsComplementaires} />
              </div>
            </div>
          )}

          {/* Matériel */}
          {sortie.sejour?.materiel && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gradient">
                {at('Matériel')}
              </h2>
              <div className="glass rounded-3xl p-8">
                <RichContent value={sortie.sejour.materiel} />

                {(sortie.sejour.materielInclus || sortie.sejour.materielNonInclus) && (
                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    {sortie.sejour.materielInclus && (
                      <div>
                        <h3 className="font-bold text-lg mb-4 text-accent">
                          ✓ {at('Inclus')}
                        </h3>
                        <ul className="space-y-2">
                          {sortie.sejour.materielInclus.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {sortie.sejour.materielNonInclus && (
                      <div>
                        <h3 className="font-bold text-lg mb-4 text-foreground/60">
                          ✗ {at('Non inclus / À prévoir')}
                        </h3>
                        <ul className="space-y-2">
                          {sortie.sejour.materielNonInclus.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-foreground/40 mt-1">•</span>
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
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gradient">
                {at('Tarif & Budget')}
              </h2>
              <div className="glass rounded-3xl p-8">
                <RichContent value={sortie.budgetSpecifique || sortie.sejour.budget} />

                {((sortie.budgetInclusSpecifique || sortie.sejour?.budgetInclus) || (sortie.budgetNonInclusSpecifique || sortie.sejour?.budgetNonInclus)) && (
                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    {(sortie.budgetInclusSpecifique || sortie.sejour?.budgetInclus) && (
                      <div>
                        <h3 className="font-bold text-lg mb-4 text-accent">
                          ✓ {at('Inclus dans le prix')}
                        </h3>
                        <ul className="space-y-2">
                          {(sortie.budgetInclusSpecifique || sortie.sejour.budgetInclus).map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {(sortie.budgetNonInclusSpecifique || sortie.sejour?.budgetNonInclus) && (
                      <div>
                        <h3 className="font-bold text-lg mb-4 text-foreground/60">
                          ✗ {at('Non inclus')}
                        </h3>
                        <ul className="space-y-2">
                          {(sortie.budgetNonInclusSpecifique || sortie.sejour.budgetNonInclus).map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-foreground/40 mt-1">•</span>
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
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gradient">
                {at('Informations pratiques')}
              </h2>
              <div className="glass rounded-3xl p-8 prose prose-lg max-w-none">
                <RichContent value={sortie.infosPratiquesSpecifiques || sortie.sejour.infosPratiques} />
              </div>
            </div>
          )}

          {/* CTA Réservation */}
          <div className="text-center">
            <Link
              href="/evasion-ski-hautes-alpes-contact"
              className="btn-primary inline-block px-12 py-4 text-lg font-bold uppercase tracking-widest"
            >
              {at(sortie.complet || sortie.placesDisponibles === 0 ? 'Liste d\'attente' : 'Réserver ma place')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
