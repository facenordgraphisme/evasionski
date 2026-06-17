'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { PortableText } from '@portabletext/react'

import { useLanguage } from '@/context/LanguageContext'

interface AboutProps {
  badge?: string
  title?: string
  titleAccent?: string
  description?: any
  image?: string
  experience?: number
  className?: string
}

const AboutSection = ({
  badge = "Le Guide",
  title = "TONI",
  titleAccent = "MANCINI",
  description,
  image = "/images/guide.jpg",
  experience = 15,
  className = "bg-background"
}: AboutProps) => {
  const { at, t, translatePortableText } = useLanguage()
  return (
    <section id="a-propos" className={`py-24 px-6 overflow-hidden transition-colors duration-300 ${className}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group p-4"
          >
            {/* Asymmetric offset accent frame */}
            <div className="absolute inset-0 border-2 border-accent rounded-[3rem] translate-x-3 translate-y-3 sm:translate-x-6 sm:translate-y-6 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5 sm:group-hover:translate-x-3 sm:group-hover:translate-y-3" />
            
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${image || "/images/guide.jpg"}')` }}
              />
            </div>
            {/* Decorative blur element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent rounded-full blur-[100px] opacity-25 -z-10" />
            
            {/* Floating stats card using glass-card style */}
            <div className="absolute bottom-10 -right-6 glass-card p-6 rounded-3xl hidden md:block border border-white/20 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-highlight text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-accent/20">
                  {experience}+
                </div>
                <div>
                  <p className="text-[10px] text-foreground/60 uppercase tracking-widest font-black mb-0.5">{t('about.yearsExperience')}</p>
                  <p className="font-bold text-sm tracking-tight">{t('about.role')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-black tracking-widest uppercase text-sm mb-4 block">
              {at(badge)}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
              {at(title)} <br /> <span className="text-accent italic font-normal">{at(titleAccent)}</span>
            </h2>
            <div className="space-y-6 text-foreground/70 text-lg leading-relaxed mb-10">
              {description ? (
                <PortableText value={translatePortableText(description)} />
              ) : (
                <>
                  <p>
                    {at('Installé à Les Orres dans les Hautes-Alpes, je suis Moniteur de Ski de Randonnée spécialisé dans les massifs des Écrins et du Queyras.')}
                  </p>
                  <p>
                    {at('Ma philosophie repose sur une approche authentique et humaine de la montagne. "Laissez le rêve être votre guide" n\'est pas qu\'une devise, c\'est une promesse de partage et de découverte.')}
                  </p>
                </>
              )}
            </div>
            
            <Link href="/a-propos-moniteur-de-ski-de-randonnee" className="btn-primary inline-block">
              {t('about.learnMore')}
            </Link>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
