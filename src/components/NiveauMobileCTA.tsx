'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BarChart3, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function NiveauMobileCTA() {
  const { at } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 200)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[100] transition-all duration-300 lg:bottom-6 lg:left-1/2 lg:right-auto lg:-translate-x-1/2 lg:w-[min(640px,calc(100%-16rem))] ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none lg:translate-y-[150%]'
      }`}
    >
      {/* Desktop : barre flottante centrée pour ne pas recouvrir les boutons WhatsApp et Retour en haut */}
      <Link
        href="/niveau-en-ski"
        className="flex items-center justify-between gap-4 w-full px-6 py-4 bg-accent text-white shadow-2xl border-t-2 border-white/20 lg:border-0 lg:rounded-full lg:pl-4 lg:pr-3 lg:py-3 lg:hover:brightness-105 active:scale-95 transition-all"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="w-10 h-10 shrink-0 rounded-full bg-white/20 flex items-center justify-center">
            <BarChart3 size={18} />
          </span>
          <div className="flex flex-col items-start min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">
              {at({ fr: 'Ce séjour est-il pour vous ?', en: 'Is this trip for you?' })}
            </span>
            <span className="text-base font-black leading-tight">
              {at({ fr: 'Évaluer son niveau', en: 'Assess your level' })}
            </span>
          </div>
        </div>
        <span className="shrink-0 flex items-center gap-1.5 px-5 py-3 bg-white text-accent rounded-full text-sm font-black uppercase tracking-wider shadow-lg">
          {at({ fr: 'Tester', en: 'Test' })}
          <ArrowRight size={16} />
        </span>
      </Link>
    </div>
  )
}
