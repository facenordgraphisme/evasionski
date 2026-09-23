'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { Compass, Shield, Award } from 'lucide-react'
import { motion } from 'framer-motion'

interface PresentationCard {
  icon: string
  title: string
  titleEn: string
  text: string
  textEn: string
}

interface PresentationSectionProps {
  badge?: string
  badgeEn?: string
  title?: string
  titleEn?: string
  titleAccent?: string
  titleAccentEn?: string
  description?: string
  descriptionEn?: string
  cards?: PresentationCard[]
}

const PresentationSection = ({
  badge,
  badgeEn,
  title,
  titleEn,
  titleAccent,
  titleAccentEn,
  description,
  descriptionEn,
  cards,
}: PresentationSectionProps) => {
  const { at } = useLanguage()

  // Icon mapping
  const iconMap: Record<string, any> = {
    Compass: Compass,
    Award: Award,
    Shield: Shield,
  }

  // Fallback data (si Sanity ne retourne rien)
  const fallbackBlocks: PresentationCard[] = [
    {
      icon: "Compass",
      title: "Le Ski de Randonnée",
      titleEn: "Ski Touring",
      text: "Un pas après l'autre, loin de la foule et des remontées mécaniques. Découvrez le plaisir de l'effort physique à la montée pour accéder à des combes sauvages et des sommets préservés des Hautes-Alpes.",
      textEn: "One step at a time, far from crowds and ski lifts. Discover the pleasure of climbing and access wild valleys and untouched peaks in the Southern Alps."
    },
    {
      icon: "Award",
      title: "Freerando & Hors-Piste",
      titleEn: "Freerando & Off-Piste",
      text: "Profitez du meilleur des deux mondes. Utilisez les stations pour vous hisser en altitude, puis évadez-vous en peaux de phoque pour tracer des hors-pistes d'exception et de longues combes de neige vierge.",
      textEn: "Get the best of both worlds. Use resort lifts to gain height quickly, then skin away to track exceptional off-piste lines and long valleys of virgin powder."
    },
    {
      icon: "Shield",
      title: "Stages & Raids à Ski",
      titleEn: "Ski Raids & Stages",
      text: "L'immersion totale en montagne sur plusieurs jours. De refuge en gîte d'altitude, vivez l'itinérance à ski dans le Queyras, la Clarée, l'Ubaye ou lors de voyages d'exception en Norvège.",
      textEn: "Total mountain immersion over several days. From hut to refuge, experience ski touring itinerancy in Queyras, Clarée, Ubaye, or during exceptional trips to Norway."
    }
  ]

  const blocks = cards && cards.length === 3 ? cards : fallbackBlocks

  return (
    <section className="py-24 px-6 bg-background relative border-b border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">
            {at({
              fr: badge || "BIENVENUE SUR ÉVASIONSKI",
              en: badgeEn || "WELCOME TO EVASIONSKI"
            })}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground leading-tight">
            {at({
              fr: title || "Explorez les Alpes",
              en: titleEn || "Explore the Alps"
            })} <br />
            <span className="text-accent italic font-normal">
              {at({
                fr: titleAccent || "en ski de randonnée",
                en: titleAccentEn || "on ski touring"
              })}
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed font-medium">
            {at({
              fr: description || "Le ski de randonnée est un moyen de déplacement unique en montagne. Il permet de s'évader, de tracer sa propre voie et de savourer chaque descente après l'effort de la montée.",
              en: descriptionEn || "Ski touring is a unique way of traveling in the mountains. It allows you to escape, carve your own path, and savor every descent after the effort of the climb."
            })}
          </p>
        </div>

        {/* Featured layout: first block large left, two smaller stacked right */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Featured large card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 glass p-10 rounded-[3rem] border border-border shadow-xl group flex flex-col gap-6 hover:border-accent/30 transition-all"
          >
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl flex items-center justify-center text-accent flex-shrink-0 border border-accent/20 group-hover:scale-110 transition-transform">
                {(() => {
                  const Icon = iconMap[blocks[0].icon] || Compass
                  return <Icon className="w-10 h-10" />
                })()}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1 text-foreground tracking-tight leading-tight">
                  {at({ fr: blocks[0].title, en: blocks[0].titleEn })}
                </h3>
                <div className="h-1 w-12 bg-accent rounded-full mt-2 mb-4 group-hover:w-24 transition-all duration-300" />
                <p className="text-foreground/70 leading-relaxed font-medium">
                  {at({ fr: blocks[0].text, en: blocks[0].textEn })}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Two smaller stacked cards */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {blocks.slice(1).map((block, idx) => {
              const Icon = iconMap[block.icon] || Shield
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx + 1) * 0.15, duration: 0.5 }}
                  className="glass p-8 rounded-[2.5rem] border border-border shadow-lg group flex-1 hover:border-accent/30 transition-all"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-5 group-hover:scale-110 transition-transform border border-accent/15">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground tracking-tight">
                    {at({ fr: block.title, en: block.titleEn })}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed font-medium text-sm">
                    {at({ fr: block.text, en: block.textEn })}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PresentationSection
