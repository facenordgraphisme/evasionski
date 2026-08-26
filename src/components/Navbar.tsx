'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'

const Navbar = ({ sanityActivities }: { sanityActivities?: any[] } = {}) => {
  const pathname = usePathname()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const { language, setLanguage, t, at } = useLanguage()
  const navRef = useRef(null)

  // Hide Navbar inside Sanity Studio
  if (pathname?.startsWith('/studio')) return null

  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isJourneeOpen, setIsJourneeOpen] = useState(false)
  const [isStagesOpen, setIsStagesOpen] = useState(false)
  const [isInfosOpen, setIsInfosOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Initial entry animation
    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.2 }
    )

    // Scroll listener for glassmorphism
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const journeeSubmenuItems = [
    {
      title: { fr: "À la carte / Engagement Privé", en: "Custom / Private guiding" },
      slug: "ski-de-randonnee-engagement-prive",
      image: "/images/hero.jpg"
    },
    {
      title: { fr: "Ski de rando journée", en: "Ski touring day trip" },
      slug: "ski-randonnee-hautes-alpes-journee",
      image: "/photos/DSC_6701.jpg"
    },
    {
      title: { fr: "Freerando Journée", en: "Freerando day trip" },
      slug: "ski-hors-piste-station-hautes-alpes",
      image: "/photos/DSC_6612.jpg"
    },
  ]

  const stagesSubmenuItems = [
    {
      title: { fr: "Stage de ski freerando Les Orres / Crévoux", en: "Freerando stage Les Orres / Crévoux" },
      slug: "stage-de-ski-freerando-les-orres-crevoux",
      image: "/images/freerando_les_orres.jpg"
    },
    {
      title: { fr: "Ski de randonnée dans le Queyras 5 jours", en: "Ski touring in Queyras 5 days" },
      slug: "ski-de-randonnee-queyras-decouverte",
      image: "/images/queyras.jpg"
    },
    {
      title: { fr: "Raid à ski en Clarée 3 jours", en: "Ski raid in Clarée 3 days" },
      slug: "ski-de-randonnee-en-claree",
      image: "/images/claree.jpg"
    },
    {
      title: { fr: "Raid à ski en Ubaye 3 jours", en: "Ski raid in Ubaye 3 days" },
      slug: "raid-ski-randonnee-ubaye",
      image: "/images/ubaye.jpg"
    },
    {
      title: { fr: "Voyage en Norvège", en: "Ski trip to Norway" },
      slug: "ski-randonnee-norvege-alpes-lyngen",
      image: "/images/norvege.jpg"
    },
    {
      title: { fr: "Séjour et raid à la carte", en: "Custom stay & ski raid" },
      slug: "ski-de-randonnee-engagement-prive",
      image: "/images/hero.jpg"
    },
  ]

  const infosSubmenuItems = [
    { title: { fr: "Évaluer son niveau", en: "Evaluate your level" }, slug: "niveau-en-ski" },
    { title: { fr: "Qui suis-je", en: "Who am I" }, slug: "a-propos-moniteur-de-ski-de-randonnee" },
    { title: { fr: "Contact", en: "Contact" }, slug: "evasion-ski-hautes-alpes-contact" },
    { title: { fr: "Carnet de montagne-Blog", en: "Mountain notebook-Blog" }, slug: "blog-explorez-les-hautes-alpes-a-ski" },
    { title: { fr: "Conditions & CGV", en: "Terms & Conditions" }, slug: "conditions-generales-de-vente" },
  ]

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-5'}`}
    >
      <div className={`absolute inset-0 transition-all duration-500 ${isScrolled ? 'glass-promax opacity-100 shadow-xl' : 'glass-nav opacity-50'}`} />

      <div className="relative max-w-7xl mx-auto px-6 flex justify-between items-center h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group z-10">
          <div className="relative w-16 h-16 transition-transform duration-500 group-hover:scale-110">
            {mounted && (
              <img
                src={resolvedTheme === 'dark' && !isScrolled ? "/logo.webp?v=2" : "/logo-black.webp?v=2"}
                alt="ÉvasionSki"
                className="h-full w-full object-contain"
              />
            )}
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">

          {/* A la journée with Submenu Cards */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('journee')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`flex items-center gap-2 text-sm font-black uppercase transition-all bg-transparent border-none cursor-pointer ${activeDropdown === 'journee' ? 'text-accent' : (isScrolled ? 'text-slate-800' : 'text-white text-white-shadow')}`}>
              {at({ fr: "À la journée", en: "Daily" })}
              <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'journee' ? 'rotate-180' : ''}`} />
            </button>

            {/* Submenu Grid */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${activeDropdown === 'journee' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="glass-promax rounded-[32px] p-6 w-[720px] grid grid-cols-3 gap-5 shadow-2xl border border-white/40">
                {journeeSubmenuItems.map((item, idx) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden group/item shadow-lg border border-white/5 hover:border-accent/50 transition-all duration-300"
                  >
                    <Image
                      src={item.image}
                      alt={at(item.title)}
                      fill
                      sizes="(max-width: 1024px) 100vw, 220px"
                      className="object-cover transition-transform duration-700 group-hover/item:scale-110"
                    />
                    <div className="absolute top-3 left-3 z-10 px-2.5 py-0.5 bg-accent/90 text-[7px] font-black uppercase tracking-widest text-white rounded-md shadow-md">
                      Journée
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />
                    <div className="absolute inset-0 p-4 flex flex-col justify-end">
                      <p className="font-black text-white text-xs leading-snug tracking-tight text-left">{at(item.title)}</p>
                      <p className="text-accent text-[9px] font-black uppercase tracking-widest mt-1.5 text-left flex items-center gap-1 group-hover/item:text-white transition-colors">
                        Découvrir <span className="transform group-hover/item:translate-x-1 transition-transform">→</span>
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Stages & Raids with Submenu Cards */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('stages')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/stages-et-raids-a-ski-de-randonnee-hautes-alpes"
              className={`flex items-center gap-2 text-sm font-black uppercase transition-all ${activeDropdown === 'stages' ? 'text-accent' : (isScrolled ? 'text-slate-800' : 'text-white text-white-shadow')}`}
            >
              {at({ fr: "Stages & Raids", en: "Stages & Raids" })}
              <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'stages' ? 'rotate-180' : ''}`} />
            </Link>

            {/* Submenu Grid */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${activeDropdown === 'stages' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="glass-promax rounded-[32px] p-6 w-[720px] grid grid-cols-3 gap-5 shadow-2xl border border-white/40">
                {stagesSubmenuItems.map((item, idx) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden group/item shadow-lg border border-white/5 hover:border-accent/50 transition-all duration-300"
                  >
                    <Image
                      src={item.image}
                      alt={at(item.title)}
                      fill
                      sizes="(max-width: 1024px) 100vw, 220px"
                      className="object-cover transition-transform duration-500 group-hover/item:scale-110"
                    />
                    <div className="absolute top-3 left-3 z-10 px-2.5 py-0.5 bg-secondary text-[7px] font-black uppercase tracking-widest text-white rounded-md shadow-md">
                      Stage / Raid
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />
                    <div className="absolute inset-0 p-4 flex flex-col justify-end">
                      <p className="font-black text-white text-xs leading-snug tracking-tight text-left">{at(item.title)}</p>
                      <p className="text-accent text-[9px] font-black uppercase tracking-widest mt-1.5 text-left flex items-center gap-1 group-hover/item:text-white transition-colors">
                        Découvrir <span className="transform group-hover/item:translate-x-1 transition-transform">→</span>
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Calendrier Link */}
          <Link
            href="/calendrier"
            className={`text-sm font-black uppercase nav-link ${isScrolled ? 'text-slate-800' : 'text-white text-white-shadow'}`}
          >
            {at({ fr: "Calendrier", en: "Calendar" })}
          </Link>

          {/* Infos Dropdown (Text-only) */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('infos')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`flex items-center gap-2 text-sm font-black uppercase transition-all bg-transparent border-none cursor-pointer ${activeDropdown === 'infos' ? 'text-accent' : (isScrolled ? 'text-slate-800' : 'text-white text-white-shadow')}`}>
              {at({ fr: "Infos", en: "Info" })}
              <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'infos' ? 'rotate-180' : ''}`} />
            </button>

            {/* Submenu List */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${activeDropdown === 'infos' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="glass-promax rounded-[2rem] p-3 w-64 flex flex-col gap-1 shadow-2xl border border-white/40">
                {infosSubmenuItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className="flex items-center justify-between py-4 px-6 rounded-2xl transition-all font-black uppercase tracking-[0.15em] text-[10px] group/item text-slate-900 hover:bg-accent/10 hover:text-accent"
                  >
                    <span>{at(item.title)}</span>
                    <span className="opacity-0 group-hover/item:opacity-100 transition-opacity translate-x-2 group-hover/item:translate-x-0 transition-transform">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Theme, Language & CTA */}
        <div className="hidden lg:flex items-center gap-4 z-10">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-slate-800 hover:bg-slate-800/5' : 'text-white hover:bg-white/10'}`}
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>
          )}

          <div className="w-px h-6 bg-slate-200/20 mx-2" />

          {/* Language Switcher */}
          <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border transition-colors ${isScrolled ? 'bg-slate-900/5 border-slate-900/10' : 'bg-white/5 border-white/10'}`}>
            <button
              onClick={() => setLanguage('fr')}
              className={`w-7 h-7 rounded-full overflow-hidden transition-all duration-300 ${language === 'fr' ? 'ring-2 ring-accent scale-105' : 'opacity-40 hover:opacity-100'}`}
              title="Français"
            >
              <img src="https://flagcdn.com/w40/fr.png" alt="FR" className="w-full h-full object-cover" />
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`w-7 h-7 rounded-full overflow-hidden transition-all duration-300 ${language === 'en' ? 'ring-2 ring-accent scale-105' : 'opacity-40 hover:opacity-100'}`}
              title="English"
            >
              <img src="https://flagcdn.com/w40/gb.png" alt="EN" className="w-full h-full object-cover" />
            </button>
          </div>

          {/* Reserve Button */}
          <Link
            href="/evasion-ski-hautes-alpes-contact"
            className="button-glow"
          >
            {at({ fr: "Réserver", en: "Book" })}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden relative w-12 h-12 flex items-center justify-center rounded-2xl border transition-all duration-300 shadow-lg z-10 ${
            isScrolled
              ? 'text-slate-900 bg-slate-900/5 border-slate-900/10'
              : 'text-white bg-white/10 border-white/20'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 w-full h-screen bg-[#f8f9fa] overflow-y-auto transition-all duration-500 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'}`}>
        <div className="pt-32 pb-24 px-8 flex flex-col space-y-10">
          {/* À la journée */}
          <div>
            <button
              onClick={() => setIsJourneeOpen(!isJourneeOpen)}
              className="w-full flex items-center justify-between text-slate-900 hover:text-accent transition-colors text-3xl font-black uppercase tracking-tight py-2"
            >
              {at({ fr: "À la journée", en: "Daily" })}
              <ChevronDown className={`w-6 h-6 transition-transform ${isJourneeOpen ? 'rotate-180' : ''}`} />
            </button>
            {isJourneeOpen && (
              <div className="pl-4 mt-4 space-y-3">
                {journeeSubmenuItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-xl text-slate-700 hover:text-accent transition-colors font-bold"
                  >
                    {at(item.title)}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Stages & Raids */}
          <div>
            <button
              onClick={() => setIsStagesOpen(!isStagesOpen)}
              className="w-full flex items-center justify-between text-slate-900 hover:text-accent transition-colors text-3xl font-black uppercase tracking-tight py-2"
            >
              {at({ fr: "Stages & Raids", en: "Stages & Raids" })}
              <ChevronDown className={`w-6 h-6 transition-transform ${isStagesOpen ? 'rotate-180' : ''}`} />
            </button>
            {isStagesOpen && (
              <div className="pl-4 mt-4 space-y-3">
                {stagesSubmenuItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-xl text-slate-700 hover:text-accent transition-colors font-bold"
                  >
                    {at(item.title)}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="h-px bg-slate-200" />

          <Link href="/calendrier" onClick={() => setIsOpen(false)} className="text-3xl font-black tracking-tight text-slate-800 uppercase">
            {at({ fr: "Calendrier", en: "Calendar" })}
          </Link>

          {/* Infos */}
          <div>
            <button
              onClick={() => setIsInfosOpen(!isInfosOpen)}
              className="w-full flex items-center justify-between text-slate-900 hover:text-accent transition-colors text-3xl font-black uppercase tracking-tight py-2"
            >
              {at({ fr: "Infos", en: "Info" })}
              <ChevronDown className={`w-6 h-6 transition-transform ${isInfosOpen ? 'rotate-180' : ''}`} />
            </button>
            {isInfosOpen && (
              <div className="pl-4 mt-4 space-y-3">
                {infosSubmenuItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-xl text-slate-700 hover:text-accent transition-colors font-bold"
                  >
                    {at(item.title)}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="pt-10">
            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="inline-flex items-center gap-4 px-8 py-4 rounded-full border border-slate-200 font-black text-slate-800 bg-white shadow-lg uppercase text-xs tracking-widest"
            >
              <img
                src={language === 'fr' ? "https://flagcdn.com/w40/gb.png" : "https://flagcdn.com/w40/fr.png"}
                alt={language === 'fr' ? 'EN' : 'FR'}
                className="w-6 h-6 rounded-full"
              />
              {language === 'fr' ? 'English Version' : 'Version Française'}
            </button>
          </div>
        </div>

        {/* Close button for mobile */}
        <button className="fixed top-8 right-8 w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-2xl z-50 text-slate-900" onClick={() => setIsOpen(false)}>
          <X size={28} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
