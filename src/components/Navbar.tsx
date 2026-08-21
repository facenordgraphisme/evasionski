'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { usePathname } from 'next/navigation'

const Navbar = ({ sanityActivities }: { sanityActivities?: any[] } = {}) => {
  const pathname = usePathname()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const { language, setLanguage, t, at } = useLanguage()

  // Hide Navbar inside Sanity Studio
  if (pathname?.startsWith('/studio')) return null

  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isJourneeOpen, setIsJourneeOpen] = useState(false)
  const [isStagesOpen, setIsStagesOpen] = useState(false)
  const [isInfosOpen, setIsInfosOpen] = useState(false)

  useEffect(() => setMounted(true), [])

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
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ top: 'calc(var(--banner-height, 0px) + 24px)' }}
        className="fixed left-1/2 -translate-x-1/2 z-[60] w-[95%] max-w-6xl glass rounded-full px-6 py-1.5 md:py-2 flex items-center justify-between shadow-2xl transition-[top] duration-300 ease-out"
      >
        <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          {mounted && (
            <img
              src={resolvedTheme === 'dark' ? "/logo.webp?v=2" : "/logo-black.webp?v=2"}
              alt="ÉvasionSki"
              width={360}
              height={130}
              className="h-[60px] md:h-[90px] lg:h-[115px] w-auto object-contain my-[-10px] md:my-[-12px] lg:my-[-14px]"
            />
          )}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4 text-xs font-semibold uppercase tracking-wider">
          <div className="flex items-center gap-4 text-foreground/80">
            
            {/* A la journée with Submenu Cards */}
            <div className="relative group/journee py-4">
              <span className="hover:text-accent transition-colors flex items-center gap-1 cursor-pointer">
                {at({ fr: "À la journée", en: "Daily" })}
                <ChevronDown className="w-3.5 h-3.5 group-hover/journee:rotate-180 transition-transform" />
              </span>

              {/* Submenu Grid */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 translate-y-4 pointer-events-none group-hover/journee:opacity-100 group-hover/journee:translate-y-0 group-hover/journee:pointer-events-auto transition-all duration-300">
                <div className="glass-card rounded-[32px] p-6 w-[720px] grid grid-cols-3 gap-5 shadow-2xl border border-white/15">
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
            <div className="relative group/menu py-4">
              <Link href="/stages-et-raids-a-ski-de-randonnee-hautes-alpes" className="hover:text-accent transition-colors flex items-center gap-1">
                {at({ fr: "Stages & Raids", en: "Stages & Raids" })}
                <ChevronDown className="w-3.5 h-3.5 group-hover/menu:rotate-180 transition-transform" />
              </Link>

              {/* Submenu Grid */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 translate-y-4 pointer-events-none group-hover/menu:opacity-100 group-hover/menu:translate-y-0 group-hover/menu:pointer-events-auto transition-all duration-300">
                <div className="glass-card rounded-[32px] p-6 w-[720px] grid grid-cols-3 gap-5 shadow-2xl border border-white/15">
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
            <Link href="/calendrier" className="hover:text-accent transition-colors py-4">
              {at({ fr: "Calendrier", en: "Calendar" })}
            </Link>

            {/* Infos Dropdown (Text-only) */}
            <div className="relative group/info py-4">
              <span className="hover:text-accent transition-colors flex items-center gap-1 cursor-pointer">
                {at({ fr: "Infos", en: "Info" })}
                <ChevronDown className="w-3.5 h-3.5 group-hover/info:rotate-180 transition-transform" />
              </span>

              {/* Submenu List */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 translate-y-4 pointer-events-none group-hover/info:opacity-100 group-hover/info:translate-y-0 group-hover/info:pointer-events-auto transition-all duration-300">
                <div className="glass rounded-[20px] p-3 w-56 flex flex-col gap-1 shadow-2xl border border-white/10 text-left">
                  {infosSubmenuItems.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/${item.slug}`}
                      className="px-4 py-2.5 hover:bg-foreground/5 hover:text-accent rounded-xl transition-all text-xs font-bold uppercase tracking-wider"
                    >
                      {at(item.title)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {/* Language Switcher */}
          <div className="flex items-center gap-1.5 mr-2 px-2.5 py-1 bg-foreground/5 rounded-full border border-border">
            <button 
              onClick={() => setLanguage('fr')}
              className={`w-5.5 h-5.5 rounded-full overflow-hidden transition-all duration-300 ${language === 'fr' ? 'ring-2 ring-accent scale-105' : 'opacity-40 hover:opacity-100'}`}
              title="Français"
            >
              <img src="https://flagcdn.com/w40/fr.png" alt="FR" className="w-full h-full object-cover" />
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`w-5.5 h-5.5 rounded-full overflow-hidden transition-all duration-300 ${language === 'en' ? 'ring-2 ring-accent scale-105' : 'opacity-40 hover:opacity-100'}`}
              title="English"
            >
              <img src="https://flagcdn.com/w40/gb.png" alt="EN" className="w-full h-full object-cover" />
            </button>
          </div>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-foreground/5 transition-colors text-foreground"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          )}
          <Link href="/evasion-ski-hautes-alpes-contact" className="hidden sm:block btn-primary py-2 px-5 text-xs font-bold uppercase tracking-wider">{t('nav.contact')}</Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ paddingTop: 'calc(var(--banner-height, 0px) + 96px)' }}
            className="fixed inset-x-0 top-0 pb-12 z-[50] glass lg:hidden max-h-screen overflow-y-auto transition-[padding-top] duration-300 ease-out"
          >
            <div className="flex flex-col items-center gap-6 px-6">
              
              {/* A la journée Dropdown */}
              <div className="w-full">
                <button 
                  onClick={() => setIsJourneeOpen(!isJourneeOpen)}
                  className="w-full flex items-center justify-between py-4 text-lg font-bold uppercase tracking-wider border-b border-foreground/10"
                >
                  <span>{at({ fr: "À la journée", en: "Daily" })}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isJourneeOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isJourneeOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="w-full overflow-hidden flex flex-col gap-1 py-3 pl-4 border-l-2 border-accent/20"
                    >
                      {journeeSubmenuItems.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/${item.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="py-2.5 text-foreground/80 hover:text-accent font-semibold text-sm text-left transition-colors"
                        >
                          {at(item.title)}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Stages & Raids Dropdown */}
              <div className="w-full">
                <div className="flex items-center border-b border-foreground/10">
                  <Link
                    href="/stages-et-raids-a-ski-de-randonnee-hautes-alpes"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 py-4 text-lg font-bold uppercase tracking-wider hover:text-accent transition-colors text-left pl-4"
                  >
                    {at({ fr: "Stages & Raids", en: "Stages & Raids" })}
                  </Link>
                  <button
                    onClick={() => setIsStagesOpen(!isStagesOpen)}
                    className="px-4 py-4"
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform ${isStagesOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                <AnimatePresence>
                  {isStagesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="w-full overflow-hidden flex flex-col gap-1 py-3 pl-4 border-l-2 border-accent/20"
                    >
                      {stagesSubmenuItems.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/${item.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="py-2.5 text-foreground/80 hover:text-accent font-semibold text-sm text-left transition-colors"
                        >
                          {at(item.title)}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Calendrier Link */}
              <div className="w-full border-b border-foreground/10">
                <Link
                  href="/calendrier"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 text-lg font-bold uppercase tracking-wider hover:text-accent transition-colors block text-center"
                >
                  {at({ fr: "Calendrier", en: "Calendar" })}
                </Link>
              </div>

              {/* Infos Dropdown */}
              <div className="w-full">
                <button 
                  onClick={() => setIsInfosOpen(!isInfosOpen)}
                  className="w-full flex items-center justify-between py-4 text-lg font-bold uppercase tracking-wider border-b border-foreground/10"
                >
                  <span>{at({ fr: "Infos", en: "Info" })}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isInfosOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isInfosOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="w-full overflow-hidden flex flex-col gap-2 py-4 text-center items-center"
                    >
                      {infosSubmenuItems.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/${item.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="py-2.5 text-foreground/80 hover:text-accent font-bold text-sm uppercase tracking-wider"
                        >
                          {at(item.title)}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Language Switcher */}
              <div className="flex items-center justify-center gap-6 mt-8 py-4 w-full border-t border-foreground/10">
                <button 
                  onClick={() => setLanguage('fr')}
                  className={`flex flex-col items-center gap-2 transition-all ${language === 'fr' ? 'scale-105' : 'opacity-40'}`}
                >
                  <img src="https://flagcdn.com/w80/fr.png" alt="FR" className="w-9 h-9 rounded-full object-cover ring-2 ring-accent/50" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-foreground">Français</span>
                </button>
                <button 
                  onClick={() => setLanguage('en')}
                  className={`flex flex-col items-center gap-2 transition-all ${language === 'en' ? 'scale-105' : 'opacity-40'}`}
                >
                  <img src="https://flagcdn.com/w80/gb.png" alt="EN" className="w-9 h-9 rounded-full object-cover ring-2 ring-accent/50" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-foreground">English</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar

