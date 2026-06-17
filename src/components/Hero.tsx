'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '@/context/LanguageContext'

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Staggered reveal animations on load
      gsap.fromTo('.hero-subtitle', 
        { opacity: 0, y: 30, letterSpacing: '0.1em' }, 
        { opacity: 1, y: 0, letterSpacing: '0.25em', duration: 1.2, ease: 'power4.out', delay: 0.2 }
      );
      
      gsap.fromTo('.hero-title', 
        { opacity: 0, y: 60, scale: 0.95 }, 
        { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: 'power4.out', delay: 0.4 }
      );

      gsap.fromTo('.hero-description', 
        { opacity: 0, y: 35 }, 
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.6 }
      );

      gsap.fromTo('.hero-buttons', 
        { opacity: 0, y: 25 }, 
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.8 }
      );

      // 2. Parallax effect on the background video when scrolling
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }
      
      // 3. Text container fade and slight lift on scroll
      if (textContainerRef.current) {
        gsap.to(textContainerRef.current, {
          opacity: 0,
          y: -80,
          scale: 0.98,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom 40%',
            scrub: true
          }
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-slate-950"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            playsInline
            loop
            poster={bgImage}
            className="absolute inset-0 w-full h-full object-cover scale-[1.08]"
          />
        ) : (
          <div 
            style={{ backgroundImage: `url(${bgImage})` }} 
            className="absolute inset-0 bg-cover bg-center"
          />
        )}
        {/* Soft, rich overlay gradient for readability */}
        <div className="absolute inset-0 bg-slate-950/40 bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950" />
      </div>

      {/* Hero Content */}
      <div 
        ref={textContainerRef}
        className="container relative z-10 px-6 text-center pt-20 max-w-5xl"
      >
        <span className="hero-subtitle text-amber-400 font-black tracking-[0.25em] uppercase text-xs sm:text-sm mb-6 block drop-shadow-md">
          {at(subtitle)}
        </span>
        
        <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-white leading-[1.15] drop-shadow-lg">
          {at(title)}
        </h1>
        
        <p className="hero-description max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-200/90 mb-12 leading-relaxed drop-shadow-sm font-medium">
          {at(description)}
        </p>
        
        <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link 
            href="/activites" 
            className="btn-primary !bg-amber-500 hover:!bg-amber-400 text-slate-950 font-black uppercase tracking-widest text-xs px-8 py-4 shadow-lg shadow-amber-500/20 w-full sm:w-auto"
          >
            {t('hero.discover') || 'Découvrir les sorties'}
          </Link>
          <Link 
            href="/prochaines-sorties" 
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-full text-xs font-black uppercase tracking-widest transition-all text-white w-full sm:w-auto hover:scale-105"
          >
            {t('hero.departures') || 'Prochaines dates'}
          </Link>
        </div>
      </div>

      {/* Decorative bottom fade mask */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-10" />

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-10 z-20 hidden md:flex flex-col items-center gap-3">
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/30 rotate-90 translate-y-12 mb-12 font-bold">Scroll</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}

export default Hero
