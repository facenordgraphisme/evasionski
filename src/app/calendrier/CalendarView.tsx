'use client'

import React, { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users, X, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

interface Sortie {
  _id: string
  slug?: string
  titrePersonnalise?: string
  dateDebut: string
  dateFin?: string
  prix: string
  placesDisponibles: number
  placesTotales: number
  complet: boolean
  image?: string
  sejour: {
    title: string
    slug: string
    categorie: string
    massifs: string[]
    image?: string
  }
}

interface PageData {
  heroImage?: string
  badge?: string
  badgeEn?: string
  title?: string
  titleEn?: string
  titleAccent?: string
  titleAccentEn?: string
  description?: string
  descriptionEn?: string
}

interface CalendarViewProps {
  sorties: Sortie[]
  pageData?: PageData | null
}

const MONTH_NAMES = {
  fr: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
}

const DAY_NAMES = {
  fr: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
  en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
}

// --- Dates sans fuseau horaire ---------------------------------------------
// Les dates Sanity sont des chaînes "YYYY-MM-DD" (jour civil, sans heure).
// On ne passe JAMAIS par l'heure locale de l'appareil : tous les calculs se font
// en UTC pur, ce qui donne le même résultat sur le serveur et sur n'importe quel
// téléphone, quel que soit son fuseau.
const pad = (n: number) => String(n).padStart(2, '0')
const toKey = (d: Date) => `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`
const fromKey = (key: string) => {
  const [y, m, d] = key.slice(0, 10).split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d))
}
// "Aujourd'hui" vu depuis les Hautes-Alpes
const parisTodayKey = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris' }).format(new Date())

export default function CalendarView({ sorties, pageData }: CalendarViewProps) {
  const { at, language } = useLanguage()
  const [view, setView] = useState(() => {
    const t = fromKey(parisTodayKey())
    return { year: t.getUTCFullYear(), month: t.getUTCMonth() }
  })
  // Calculé après le montage pour éviter tout écart serveur / navigateur à l'hydratation
  const [todayKey, setTodayKey] = useState<string | null>(null)
  useEffect(() => { setTodayKey(parisTodayKey()) }, [])
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [hoveredDate, setHoveredDate] = useState<string | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })

  // Textes avec fallback
  const badge = at({ fr: pageData?.badge || 'Calendrier', en: pageData?.badgeEn || 'Calendar' })
  const title = at({ fr: pageData?.title || 'PROCHAINS', en: pageData?.titleEn || 'UPCOMING' })
  const titleAccent = at({ fr: pageData?.titleAccent || 'DÉPARTS', en: pageData?.titleAccentEn || 'TRIPS' })
  const description = at({
    fr: pageData?.description || 'Consultez le calendrier de toutes nos sorties de ski de randonnée, freerando et raids à ski dans les Hautes-Alpes.',
    en: pageData?.descriptionEn || 'Check the calendar of all our ski touring, freerando and ski raid trips in the Hautes-Alpes.'
  })

  // Get category color
  const getCategoryColor = (categorie: string) => {
    switch (categorie) {
      case 'journee-ski-rando':
        return 'bg-blue-500'
      case 'journee-freerando':
        return 'bg-purple-500'
      case 'stage-raid':
        return 'bg-orange-500'
      default:
        return 'bg-accent'
    }
  }

  const getCategoryLabel = (categorie: string) => {
    const map: Record<string, string> = {
      'journee-ski-rando': at({ fr: 'Ski de rando journée', en: 'Ski touring day' }),
      'journee-freerando': at({ fr: 'Freerando', en: 'Freerando' }),
      'stage-raid': at({ fr: 'Stage / Raid', en: 'Stage / Raid' })
    }
    return map[categorie] || categorie
  }

  // Calendar calculations
  const { year, month } = view

  const monthNames = MONTH_NAMES[language as keyof typeof MONTH_NAMES] || MONTH_NAMES.fr
  const dayNames = DAY_NAMES[language as keyof typeof DAY_NAMES] || DAY_NAMES.fr

  // Map sorties by date
  const sortiesByDate = useMemo(() => {
    const map: Record<string, Sortie[]> = {}
    sorties.forEach(sortie => {
      if (!sortie.dateDebut) return
      const start = fromKey(sortie.dateDebut)
      const end = sortie.dateFin ? fromKey(sortie.dateFin) : start

      // Add sortie to all dates in range (garde-fou : 60 jours max)
      const cursor = new Date(start)
      for (let i = 0; cursor <= end && i < 60; i++) {
        const dateKey = toKey(cursor)
        if (!map[dateKey]) map[dateKey] = []
        map[dateKey].push(sortie)
        cursor.setUTCDate(cursor.getUTCDate() + 1)
      }
    })
    return map
  }, [sorties])

  // Generate calendar days
  const calendarDays = useMemo(() => {
    const days = []
    const firstDay = new Date(Date.UTC(year, month, 1))
    // Grille qui commence le dimanche (colonne DIM)
    const current = new Date(Date.UTC(year, month, 1 - firstDay.getUTCDay()))

    for (let i = 0; i < 42; i++) {
      const dateKey = toKey(current)
      days.push({
        dateKey,
        day: current.getUTCDate(),
        isCurrentMonth: current.getUTCMonth() === month,
        isToday: dateKey === todayKey,
        sorties: sortiesByDate[dateKey] || []
      })
      current.setUTCDate(current.getUTCDate() + 1)
    }
    return days
  }, [year, month, todayKey, sortiesByDate])

  const prevMonth = () => {
    setView(({ year, month }) => (month === 0 ? { year: year - 1, month: 11 } : { year, month: month - 1 }))
  }

  const nextMonth = () => {
    setView(({ year, month }) => (month === 11 ? { year: year + 1, month: 0 } : { year, month: month + 1 }))
  }

  const selectedDaySorties = selectedDate ? sortiesByDate[selectedDate] || [] : []

  return (
    <>
      {/* Hero Image */}
      {pageData?.heroImage && (
        <div className="relative w-full h-[30vh] overflow-hidden">
          <Image
            src={pageData.heroImage}
            alt={title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
        </div>
      )}

      <main className="relative pb-24 min-h-screen px-6" style={{ paddingTop: pageData?.heroImage ? '3rem' : '8rem' }}>
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              {badge}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient uppercase leading-tight">
              {title} <br />
              <span className="text-accent italic font-normal">{titleAccent}</span>
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 glass rounded-full">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm font-semibold">{at({ fr: 'Ski de rando journée', en: 'Ski touring day' })}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 glass rounded-full">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className="text-sm font-semibold">{at({ fr: 'Freerando', en: 'Freerando' })}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 glass rounded-full">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span className="text-sm font-semibold">{at({ fr: 'Stages & Raids', en: 'Stages & Raids' })}</span>
          </div>
        </div>

        {/* Calendar */}
        <div className="glass rounded-[40px] p-6 md:p-8 shadow-2xl border border-border max-w-4xl mx-auto">
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
            <button
              onClick={prevMonth}
              className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <h2 className="text-xl md:text-2xl font-bold">
              {monthNames[month]} {year}
            </h2>
            <button
              onClick={nextMonth}
              className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Day Names */}
          <div className="grid grid-cols-7 gap-1 md:gap-2 mb-2">
            {dayNames.map(day => (
              <div key={day} className="text-center font-bold text-xs text-foreground/40 uppercase tracking-wider py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 md:gap-2">
            {calendarDays.map(({ dateKey, day, isCurrentMonth, isToday, sorties }) => {
              // Check if this day is part of a multi-day event
              const hasMultiDay = sorties.some(s => {
                if (!s.dateFin || s.dateFin === s.dateDebut) return false
                return (fromKey(s.dateFin).getTime() - fromKey(s.dateDebut).getTime()) > 86400000 // > 1 day
              })

              return (
                <motion.button
                  key={dateKey}
                  onClick={() => {
                    setHoveredDate(null)
                    if (sorties.length > 0) setSelectedDate(dateKey)
                  }}
                  onPointerEnter={(e) => {
                    if (e.pointerType === 'mouse' && sorties.length > 0) {
                      setHoveredDate(dateKey)
                      const rect = e.currentTarget.getBoundingClientRect()
                      setTooltipPosition({
                        x: rect.left + rect.width / 2,
                        y: rect.top - 10
                      })
                    }
                  }}
                  onPointerLeave={() => setHoveredDate(null)}
                  className={`
                    relative aspect-[4/3] rounded-xl p-1.5 md:p-2 transition-all
                    ${isCurrentMonth ? 'text-foreground' : 'text-foreground/30'}
                    ${isToday ? 'ring-2 ring-accent font-bold' : ''}
                    ${sorties.length > 0 ? 'hover:scale-105 cursor-pointer' : 'cursor-default'}
                    ${!isCurrentMonth ? 'opacity-30' : ''}
                    ${sorties.length > 0 && isCurrentMonth ? 'bg-accent/5' : ''}
                  `}
                  whileHover={sorties.length > 0 ? { scale: 1.08 } : {}}
                  whileTap={sorties.length > 0 ? { scale: 0.95 } : {}}
                >
                  <span className={`text-xs md:text-sm font-semibold ${isToday ? 'text-accent' : ''}`}>
                    {day}
                  </span>

                  {/* Sortie indicators - bigger and more visible */}
                  {sorties.length > 0 && (
                    <div className="absolute top-1 right-1 flex flex-col gap-0.5">
                      {Array.from(new Set(sorties.map(s => s.sejour.categorie))).map(cat => (
                        <div
                          key={cat}
                          className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${getCategoryColor(cat)} ring-1 ring-white/20`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Multi-day indicator */}
                  {hasMultiDay && (
                    <div className="absolute bottom-0.5 left-0.5 right-0.5 h-0.5 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 rounded-full" />
                  )}
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* Hover Tooltip */}
        <AnimatePresence>
          {hoveredDate && sortiesByDate[hoveredDate] && sortiesByDate[hoveredDate].length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.15 }}
              className="fixed z-[60] pointer-events-none"
              style={{
                left: tooltipPosition.x,
                top: tooltipPosition.y,
                transform: 'translate(-50%, -100%)'
              }}
            >
              <div className="glass rounded-2xl p-4 shadow-2xl border border-border max-w-sm">
                {sortiesByDate[hoveredDate].map((sortie, i) => {
                  const image = sortie.image || sortie.sejour?.image
                  return (
                    <div key={i} className={i > 0 ? 'mt-3 pt-3 border-t border-border' : ''}>
                      {image && (
                        <div className="relative w-full h-24 rounded-lg overflow-hidden mb-2">
                          <Image
                            src={image}
                            alt={sortie.titrePersonnalise || sortie.sejour.title}
                            fill
                            sizes="300px"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="flex items-start gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${getCategoryColor(sortie.sejour.categorie)} mt-1.5 shrink-0`}
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm text-foreground leading-tight">
                            {at(sortie.titrePersonnalise || sortie.sejour.title)}
                          </h4>
                          <p className="text-xs text-foreground/60 mt-0.5">
                            {sortie.prix}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              {/* Arrow */}
              <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-card border-r border-b border-border" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Selected Date Modal */}
        <AnimatePresence>
          {selectedDate && selectedDaySorties.length > 0 && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedDate(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              />

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] sm:w-[95%] max-w-3xl max-h-[85vh] sm:max-h-[80vh] overflow-y-auto glass rounded-[28px] sm:rounded-[40px] p-5 sm:p-8 shadow-2xl border border-border z-50"
              >
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                  <div>
                    <div className="flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-widest mb-2">
                      <Calendar size={16} />
                      {fromKey(selectedDate).toLocaleDateString(language === 'en' ? 'en-GB' : 'fr-FR', {
                        timeZone: 'UTC',
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </div>
                    <h3 className="text-2xl font-bold">
                      {selectedDaySorties.length} {at({ fr: 'sortie(s)', en: 'trip(s)' })}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedDate(null)}
                    className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-4">
                  {selectedDaySorties.map((sortie) => {
                    // Déterminer le lien selon le type
                    let href = `/${sortie.sejour.slug}` // Par défaut : page du séjour

                    // Si c'est une journée, aller vers la page de listing de l'activité
                    if (sortie.sejour.categorie === 'journee-ski-rando') {
                      href = '/ski-randonnee-hautes-alpes-journee'
                    } else if (sortie.sejour.categorie === 'journee-freerando') {
                      href = '/ski-hors-piste-station-hautes-alpes'
                    }

                    const image = sortie.image || sortie.sejour?.image

                    return (
                      <Link
                        key={sortie._id}
                        href={href}
                        className="block glass rounded-3xl border border-border hover:border-accent/50 transition-all group overflow-hidden"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4">
                          {/* Image */}
                          {image && (
                            <div className="relative w-full h-36 sm:w-32 sm:h-32 shrink-0 sm:rounded-2xl overflow-hidden">
                              <Image
                                src={image}
                                alt={sortie.titrePersonnalise || sortie.sejour.title}
                                fill
                                sizes="(max-width: 640px) 100vw, 128px"
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                          )}

                          {/* Content */}
                          <div className="flex-1 min-w-0 p-4 sm:py-6 sm:pl-0 sm:pr-6">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                  <span className={`px-3 py-1 ${getCategoryColor(sortie.sejour.categorie)} text-white text-xs font-black uppercase tracking-widest rounded-full`}>
                                    {getCategoryLabel(sortie.sejour.categorie)}
                                  </span>
                                  {(sortie.complet || sortie.placesDisponibles === 0) && (
                                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-black uppercase tracking-widest rounded-full">
                                      {at({ fr: 'Complet', en: 'Full' })}
                                    </span>
                                  )}
                                  <span className="sm:hidden ml-auto text-xl font-black text-accent whitespace-nowrap">
                                    {sortie.prix}
                                  </span>
                                </div>
                                <h4 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                                  {at(sortie.titrePersonnalise || sortie.sejour.title)}
                                </h4>
                                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-foreground/60">
                                  {sortie.sejour.massifs && sortie.sejour.massifs.length > 0 && (
                                    <div className="flex items-center gap-1">
                                      <MapPin size={14} className="text-accent" />
                                      {at(sortie.sejour.massifs[0])}
                                    </div>
                                  )}
                                  <div className="flex items-center gap-1">
                                    <Users size={14} className="text-accent" />
                                    {sortie.placesDisponibles} / {sortie.placesTotales} {at({ fr: 'places', en: 'spots' })}
                                  </div>
                                </div>
                                <span className="mt-4 flex sm:inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-2.5 bg-accent group-hover:bg-accent/90 text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg transition-all">
                                  {at({ fr: 'Voir le séjour', en: 'View trip' })}
                                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                              </div>
                              <div className="hidden sm:block text-right shrink-0">
                                <div className="text-2xl font-black text-accent whitespace-nowrap">
                                  {sortie.prix}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </main>
    </>
  )
}
