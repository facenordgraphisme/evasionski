'use client'

import React, { useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '@/context/LanguageContext'
import ResponsiveVideoSources from '@/components/ResponsiveVideoSources'

// Register ScrollTrigger client-side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroProps {
  title?: string
  subtitle?: string
  description?: string
  videoSrc?: string
  backupImage?: string
  images?: string[]
}

const Hero = ({
  title = "Séjours et raids en ski de randonnée dans les Hautes-Alpes",
  subtitle = "Toni Mancini — Moniteur de Ski de Randonnée",
  description = "Parcourez les plus beaux itinéraires des Alpes du Sud : Queyras, Écrins, Clarée, Ubaye et des destinations d'exception comme la Norvège.",
  videoSrc = '/videos/hero-video.mp4',
  backupImage = '/images/hero.jpg',
  images
}: HeroProps) => {
  const { at, t } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const textContainerRef = useRef<HTMLDivElement>(null)

  const bgImage = (images && images.length > 0) ? images[0] : backupImage;
  const titleWords = at(title).split(/\s+/).filter(Boolean)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia(heroRef)

    // Animations complètes
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      // 1. Logo : révélation de bas en haut + léger zoom
      tl.fromTo('.hero-logo',
        { opacity: 0, y: 30, scale: 0.85, clipPath: 'inset(100% 0% 0% 0%)' },
        { opacity: 1, y: 0, scale: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4 },
        0.1
      )
      // 2. Sous-titre : lettres qui s'écartent + traits qui se dessinent
      .fromTo('.hero-subtitle',
        { opacity: 0, letterSpacing: '0.05em' },
        { opacity: 1, letterSpacing: '0.3em', duration: 1.4, ease: 'power3.out' },
        0.6
      )
      .fromTo('.hero-subtitle-line',
        { scaleX: 0 },
        { scaleX: 1, duration: 1, ease: 'power3.inOut' },
        0.8
      )
      // 3. Titre : chaque mot monte depuis un masque
      .fromTo('.hero-word',
        { yPercent: 110, rotate: 4 },
        { yPercent: 0, rotate: 0, duration: 1.1, stagger: 0.07 },
        0.8
      )
      .fromTo('.hero-description',
        { opacity: 0, y: 25, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.1, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo('.hero-buttons > *',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out' },
        '-=0.7'
      )
      .fromTo('.hero-scroll',
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        '-=0.3'
      )

      // Logo qui « flotte » doucement une fois apparu
      gsap.to('.hero-logo-float', {
        y: -8, duration: 3, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1.6
      })

      // Parallax de la vidéo au scroll
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true }
        });
      }

      // Le texte s'efface en remontant au scroll
      if (textContainerRef.current) {
        gsap.to(textContainerRef.current, {
          opacity: 0,
          y: -80,
          scale: 0.98,
          ease: 'none',
          scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom 40%', scrub: true }
        });
      }
    })

    // Animations réduites : simple fondu
    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.fromTo('.hero-animate', { opacity: 0 }, { opacity: 1, duration: 0.6 })
    })

    return () => mm.revert();
  }, [title]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center bg-slate-950"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {videoSrc ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            loop
            poster={bgImage}
            className="absolute inset-0 w-full h-full object-cover scale-[1.08]"
          >
            <ResponsiveVideoSources src={videoSrc} />
          </video>
        ) : (
          <div
            style={{ backgroundImage: `url(${bgImage})` }}
            className="absolute inset-0 bg-cover bg-center"
          />
        )}
        {/* Overlay : assombrit le centre pour la lisibilité, garde les bords vivants */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0.55)_0%,rgba(2,6,23,0)_70%)]" />
      </div>

      {/* Hero Content */}
      <div
        ref={textContainerRef}
        className="container relative z-10 px-6 text-center pt-28 pb-24 md:pt-36 md:pb-32 max-w-5xl"
      >
        {/* Logo */}
        <div className="hero-logo-float mx-auto mb-6 w-56 sm:w-60 md:w-64">
          <div className="hero-logo hero-animate">
            <Image
              src="/logo-hero.webp"
              alt="ÉvasionSki.fr — Explorez les Alpes à ski"
              width={390}
              height={229}
              priority
              className="w-full h-auto drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)]"
            />
          </div>
        </div>

        {/* Sous-titre encadré de deux traits */}
        <div className="hero-animate flex items-center justify-center gap-3 sm:gap-4 mb-6">
          <span className="hero-subtitle-line hidden sm:block h-px w-10 md:w-16 bg-amber-400/80 origin-right" />
          <span className="hero-subtitle text-amber-400 font-black tracking-[0.3em] uppercase text-[10px] sm:text-xs md:text-sm drop-shadow-md">
            {at(subtitle)}
          </span>
          <span className="hero-subtitle-line hidden sm:block h-px w-10 md:w-16 bg-amber-400/80 origin-left" />
        </div>

        <h1 className="hero-animate text-[2.1rem] sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white leading-[1.1] drop-shadow-lg">
          <span className="sr-only">{at(title)}</span>
          <span aria-hidden="true">
            {titleWords.map((word, i) => (
              <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
                <span className="hero-word inline-block">{word}</span>
                {i < titleWords.length - 1 && ' '}
              </span>
            ))}
          </span>
        </h1>

        <p className="hero-description hero-animate max-w-2xl mx-auto text-base sm:text-lg text-slate-200/90 mb-10 leading-relaxed drop-shadow-sm font-medium">
          {at(description)}
        </p>

        <div className="hero-buttons hero-animate flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            onClick={() => {
              const element = document.getElementById('activites');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="btn-primary !bg-amber-500 hover:!bg-amber-400 text-slate-950 font-black uppercase tracking-widest text-xs px-8 py-4 shadow-lg shadow-amber-500/30 w-full sm:w-auto hover:scale-105 transition-transform"
          >
            {t('hero.discover') || 'Découvrir les activités'}
          </button>
          <Link
            href="/calendrier"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-xs font-black uppercase tracking-widest transition-all text-white w-full sm:w-auto hover:scale-105"
          >
            {t('hero.departures') || 'Prochains départs'}
          </Link>
        </div>
      </div>

      {/* Decorative bottom fade mask */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-10" />

      {/* Indicateur de scroll : souris animée */}
      <button
        type="button"
        aria-label={at('Défiler vers le contenu')}
        onClick={() => document.getElementById('activites')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        className="hero-scroll hero-animate absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
      >
        <span className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
          <span className="w-1 h-2 rounded-full bg-current animate-bounce" />
        </span>
        <span className="text-[9px] uppercase tracking-[0.4em] font-bold">{at({ fr: 'Découvrir', en: 'Discover' })}</span>
      </button>
    </section>
  )
}

export default Hero
