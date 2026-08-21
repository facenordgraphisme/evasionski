'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users, X } from 'lucide-react'
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
  sejour: {
    title: string
    slug: string
    categorie: string
    massifs: string[]
  }
}

interface CalendarViewProps {
  sorties: Sortie[]
}

export default function CalendarView({ sorties }: CalendarViewProps) {
  const { at } = useLanguage()
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

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
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const startDate = new Date(firstDay)
  startDate.setDate(startDate.getDate() - firstDay.getDay())

  const monthNames = at({
    fr: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  })

  const dayNames = at({
    fr: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  })

  // Map sorties by date
  const sortiesByDate = useMemo(() => {
    const map: Record<string, Sortie[]> = {}
    sorties.forEach(sortie => {
      const startDate = new Date(sortie.dateDebut)
      const endDate = sortie.dateFin ? new Date(sortie.dateFin) : startDate

      // Add sortie to all dates in range
      let currentDate = new Date(startDate)
      while (currentDate <= endDate) {
        const dateKey = currentDate.toISOString().split('T')[0]
        if (!map[dateKey]) map[dateKey] = []
        map[dateKey].push(sortie)
        currentDate.setDate(currentDate.getDate() + 1)
      }
    })
    return map
  }, [sorties])

  // Generate calendar days
  const calendarDays = useMemo(() => {
    const days = []
    const current = new Date(startDate)

    for (let i = 0; i < 42; i++) {
      const dateKey = current.toISOString().split('T')[0]
      const isCurrentMonth = current.getMonth() === month
      const isToday = new Date().toDateString() === current.toDateString()
      const daySorties = sortiesByDate[dateKey] || []

      days.push({
        date: new Date(current),
        dateKey,
        day: current.getDate(),
        isCurrentMonth,
        isToday,
        sorties: daySorties
      })

      current.setDate(current.getDate() + 1)
    }
    return days
  }, [startDate, month, sortiesByDate])

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  const selectedDaySorties = selectedDate ? sortiesByDate[selectedDate] || [] : []

  return (
    <main className="relative pt-32 pb-24 min-h-screen px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
            {at({ fr: 'Calendrier', en: 'Calendar' })}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            {at({ fr: 'Toutes nos sorties', en: 'All our trips' })}
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            {at({
              fr: 'Consultez toutes nos dates de sorties à la journée, stages et raids à ski.',
              en: 'Check all our day trips, ski touring stages and raids dates.'
            })}
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
        <div className="glass rounded-[40px] p-6 md:p-8 shadow-2xl border border-border max-w-5xl mx-auto">
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
            {calendarDays.map(({ date, dateKey, day, isCurrentMonth, isToday, sorties }) => {
              // Check if this day is part of a multi-day event
              const hasMultiDay = sorties.some(s => {
                if (!s.dateFin || s.dateFin === s.dateDebut) return false
                const start = new Date(s.dateDebut)
                const end = new Date(s.dateFin)
                return (end.getTime() - start.getTime()) > 86400000 // > 1 day
              })

              return (
                <motion.button
                  key={dateKey}
                  onClick={() => sorties.length > 0 && setSelectedDate(dateKey)}
                  className={`
                    relative aspect-square rounded-xl p-1.5 md:p-2 transition-all
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
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-3xl max-h-[80vh] overflow-y-auto glass rounded-[40px] p-8 shadow-2xl border border-border z-50"
              >
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                  <div>
                    <div className="flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-widest mb-2">
                      <Calendar size={16} />
                      {new Date(selectedDate).toLocaleDateString('fr-FR', {
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
                    const isJournee = sortie.sejour.categorie === 'journee-ski-rando' || sortie.sejour.categorie === 'journee-freerando'
                    const href = isJournee && sortie.slug ? `/sorties/${sortie.slug}` : `/${sortie.sejour.slug}`

                    return (
                      <Link
                        key={sortie._id}
                        href={href}
                        className="block p-6 glass rounded-3xl border border-border hover:border-accent/50 transition-all group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className={`px-3 py-1 ${getCategoryColor(sortie.sejour.categorie)} text-white text-xs font-black uppercase tracking-widest rounded-full`}>
                                {getCategoryLabel(sortie.sejour.categorie)}
                              </span>
                              {(sortie.complet || sortie.placesDisponibles === 0) && (
                                <span className="px-3 py-1 bg-red-500 text-white text-xs font-black uppercase tracking-widest rounded-full">
                                  {at({ fr: 'Complet', en: 'Full' })}
                                </span>
                              )}
                            </div>
                            <h4 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                              {at(sortie.titrePersonnalise || sortie.sejour.title)}
                            </h4>
                            <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
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
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-black text-accent">
                              {sortie.prix}
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
  )
}
