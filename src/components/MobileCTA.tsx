'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

interface MobileCTAProps {
  prix?: string
  complet?: boolean
  placesDisponibles?: number
  outplannersLink?: string
  onBookingClick?: () => void
  scrollToId?: string
}

export default function MobileCTA({
  prix,
  complet,
  placesDisponibles,
  outplannersLink,
  onBookingClick,
  scrollToId
}: MobileCTAProps) {
  const { at } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 200px
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const buttonText = complet || placesDisponibles === 0
    ? at({ fr: "Liste d'attente", en: 'Waiting list' })
    : at({ fr: 'Réserver', en: 'Book now' })

  const handleClick = () => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else if (onBookingClick) {
      onBookingClick()
    }
  }

  const ButtonContent = () => (
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-col items-start">
        <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">
          {at({ fr: 'À partir de', en: 'From' })}
        </span>
        <span className="text-xl font-black">
          {prix || '—'}
        </span>
      </div>
      <span className="px-6 py-3 bg-white text-accent rounded-full text-sm font-black uppercase tracking-wider shadow-lg">
        {buttonText}
      </span>
    </div>
  )

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-accent text-white shadow-2xl border-t-2 border-white/20">
        {scrollToId || outplannersLink ? (
          <button
            onClick={handleClick}
            className="w-full px-6 py-4 active:scale-95 transition-transform"
          >
            <ButtonContent />
          </button>
        ) : (
          <Link
            href="/evasion-ski-hautes-alpes-contact"
            className="block w-full px-6 py-4 active:scale-95 transition-transform"
          >
            <ButtonContent />
          </Link>
        )}
      </div>
    </div>
  )
}
