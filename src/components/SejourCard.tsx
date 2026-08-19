'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, BarChart3, Clock } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

interface SejourCardProps {
  sejour: {
    title: string
    slug: string
    activityType: string
    subCategory: string
    massif?: string
    level?: string
    duration?: string
    basePrice?: string
    image?: string
  }
  activitySlug: string
}

const SejourCard = ({ sejour, activitySlug }: SejourCardProps) => {
  const { at, t } = useLanguage()

  const getLevelLabel = (level?: string) => {
    const map: Record<string, string> = {
      'debutant': at('Débutant'),
      'intermediaire': at('Intermédiaire'),
      'confirme': at('Confirmé'),
      'expert': at('Expert')
    }
    return level ? map[level] || at(level) : ''
  }

  const getActivityLabel = (type: string) => {
    const map: Record<string, string> = {
      'alpinisme': at('Alpinisme'),
      'ski': at('Ski de randonnée'),
      'escalade': at('Escalade'),
      'voyage': at('Voyages'),
      'stages-et-raids-a-ski-de-randonnee-hautes-alpes': at('Stage & Raid'),
      'ski-de-randonnee-engagement-prive': at('Engagement'),
      'ski-randonnee-hautes-alpes-journee': at('Journée'),
      'ski-hors-piste-station-hautes-alpes': at('Freerando')
    }
    return map[type] || at(type)
  }

  return (
    <Link href={`/${sejour.slug}`} className="group block h-full">
      <div className="glass-card overflow-hidden rounded-[40px] border border-border bg-card/5 h-full flex flex-col shadow-xl">
        {/* Header Badge & Level */}
        <div className="absolute top-6 left-6 right-6 z-20 flex justify-between items-center gap-2 pointer-events-none">
          <span className="px-4 py-1.5 bg-accent text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg backdrop-blur-md whitespace-nowrap">
            {getActivityLabel(sejour.activityType)}
          </span>
          <div className="flex gap-2 min-w-0">
            {sejour.massif && (
              <span className="px-3 py-1 bg-background/80 text-foreground text-[10px] font-bold uppercase tracking-wider rounded-full backdrop-blur-md border border-white/10 flex items-center gap-1 whitespace-nowrap truncate max-w-[120px]">
                <MapPin size={10} className="text-accent shrink-0" />
                {at(sejour.massif)}
              </span>
            )}
            {sejour.level && (
              <span className="px-3 py-1 bg-background/80 text-foreground text-[10px] font-bold uppercase tracking-wider rounded-full backdrop-blur-md border border-white/10 flex items-center gap-1 whitespace-nowrap">
                <BarChart3 size={10} className="text-accent shrink-0" />
                {getLevelLabel(sejour.level)}
              </span>
            )}
          </div>
        </div>

        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden">
          {sejour.image ? (
            <Image
              src={sejour.image}
              alt={at(sejour.title)}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-foreground/10 to-foreground/5" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          
          <div className="absolute bottom-6 left-8 right-8">
            {sejour.duration && (
              <div className="flex items-center gap-1 text-foreground/60 text-[10px] font-bold uppercase tracking-widest mb-2">
                <Clock size={12} className="text-accent" />
                {at(sejour.duration)}
              </div>
            )}
            <h3 className="text-xl font-bold text-foreground tracking-tight leading-snug mb-6">
              {at(sejour.title)}
            </h3>
            
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest leading-none mb-1">{at('À partir de')}</span>
                <span className="text-xl font-black text-highlight leading-none">{at(sejour.basePrice || "Sur devis")}</span>
              </div>
              <div className="bg-foreground text-background text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full transition-colors group-hover:bg-accent group-hover:text-white">
                {at('Voir le séjour')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default SejourCard
