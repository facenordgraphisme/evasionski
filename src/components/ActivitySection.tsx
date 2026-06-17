'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const activities = [
  {
    title: 'Alpinisme',
    slug: 'alpinisme',
    description: 'Sommets mythiques, arêtes effilées et glaciers majestueux. Découvrez la haute montagne.',
    image: '/images/alpinisme.jpg',
  },
  {
    title: 'Ski',
    slug: 'ski',
    description: 'Ski de randonnée, freeride ou hors-piste. Tracez votre propre voie dans la poudreuse.',
    image: '/images/ski.jpg',
  },

  {
    title: 'Escalade',
    slug: 'escalade',
    description: 'Verticalité et sensations. Des falaises ensoleillées aux grandes voies calcaires.',
    image: '/images/escalade.jpg',
  },
  {
    title: 'Cascade de Glace',
    slug: 'cascade-de-glace',
    description: 'La magie cristalline des éphémères. Grimpez sur des structures de glace uniques.',
    image: '/photos/DSC_6753.jpg',
  },
  {
    title: 'Paralpinisme',
    slug: 'paralpinisme',
    description: 'Entre ciel et terre. Gravissez les sommets pour vous envoler en parapente.',
    image: '/photos/DSC_6701.jpg',
  },
  {
    title: 'Voyages',
    slug: 'voyages',
    description: 'L\'aventure au-delà des frontières. Expéditions sur mesure dans les plus beaux massifs du monde.',
    image: '/photos/2017-06-15 12.01.27.jpg',
  }
]


interface ActivitySectionProps {
  title?: string
  titleAccent?: string
  description?: string
  data?: any[]
  className?: string
}

import { useLanguage } from '@/context/LanguageContext'

const ActivitySection = ({
  title = "Vos prochaines",
  titleAccent = "aventures",
  description = "Que vous soyez débutant ou expert, chaque sortie est conçue pour vous offrir une expérience unique, sécurisée et inoubliable.",
  data = [],
  className = "bg-background"
}: ActivitySectionProps) => {
  const { at, t } = useLanguage()
  
  const activities = [
    {
      title: at('Engagement Privé'),
      slug: 'ski-de-randonnee-engagement-prive',
      description: at('Ski de randonnée sur mesure selon vos envies. En famille, entre amis ou en solo, tracez votre propre voie.'),
      image: '/images/hero.jpg',
    },
    {
      title: at('Ski de rando journée'),
      slug: 'ski-randonnee-hautes-alpes-journee',
      description: at('Des sorties à la journée pour s\'évader, découvrir de nouveaux massifs et s\'initier ou se perfectionner.'),
      image: '/photos/DSC_6701.jpg',
    },
    {
      title: at('Freerando journée'),
      slug: 'ski-hors-piste-station-hautes-alpes',
      description: at('Profitez des remontées mécaniques pour accéder à de longs hors-pistes et de superbes combes sauvages.'),
      image: '/photos/DSC_6612.jpg',
    },
    {
      title: at('Stages & Raids'),
      slug: 'stages-et-raids-a-ski-de-randonnee-hautes-alpes',
      description: at('L\'immersion totale en montagne. De refuge en gîte, vivez des raids à ski d\'exception.'),
      image: '/images/ski.jpg',
    }
  ]

  const safeData = data?.length > 0 ? data : activities;
  
  const fallbackCategoryImages = [
    '/images/rebranded/ski-de-randonnee-engagement-prive/img_2.jpg',
    '/images/rebranded/ski-randonnee-hautes-alpes-journee/img_2.webp',
    '/images/rebranded/ski-hors-piste-station-hautes-alpes/img_1.webp',
    '/images/stages_raids_hub.jpg'
  ];

  return (
    <section id="activites" className={`py-24 px-6 transition-colors duration-300 ${className}`}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-light tracking-normal mb-6 leading-tight">
              {at(title)} <span className="text-accent italic">{at(titleAccent)}</span>
            </h2>
            <p className="text-foreground/60 text-lg">
              {at(description)}
            </p>
          </div>
          <button className="text-sm font-bold tracking-widest uppercase border-b border-accent pb-1 text-foreground/60 hover:text-accent transition-colors">
            {t('common.viewAll')}
          </button>
        </div>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {safeData.map((activity, index) => (
            <Link 
              key={activity.title} 
              href={`/${activity.slug}`}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
                className={`group relative overflow-hidden cursor-pointer rounded-[2.5rem] border border-white/10 hover:border-accent/50 transition-all duration-500 ${
                  index % 2 === 0 ? 'h-[360px] sm:h-[520px]' : 'h-[360px] sm:h-[440px] sm:mt-8'
                }`}
              >
                <Image 
                  src={activity.image || fallbackCategoryImages[index] || "/images/alpinisme.jpg"}
                  alt={at(activity.title)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                {/* Number label */}
                <div className="absolute top-5 left-5 w-9 h-9 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-black text-[11px] backdrop-blur-sm">
                  0{index + 1}
                </div>

                {/* Hover top tag */}
                <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[9px] font-black uppercase tracking-widest backdrop-blur-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Explorer →
                </div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors tracking-tight">
                    {at(activity.title)}
                  </h3>
                  <p className="text-sm text-white/80 line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {at(activity.description)}
                  </p>
                  <div className="mt-5 w-10 h-10 rounded-2xl bg-accent flex items-center justify-center text-white opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 shadow-lg shadow-accent/30">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  )
}

export default ActivitySection
