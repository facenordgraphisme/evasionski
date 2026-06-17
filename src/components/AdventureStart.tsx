'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { ChevronDown, HelpCircle } from 'lucide-react'

interface AdventureProps {
  badge?: string
  title?: string
  titleAccent?: string
  description?: string
  image?: string
  className?: string
}

const HOME_FAQS = [
  {
    questionFr: "Quelles sont les sorties proposées ?",
    questionEn: "What outings are offered?",
    answerFr: "Chez Évasion Ski, chaque sortie est une expérience adaptée à vos envies et à votre niveau :\n\n• Journées découverte pour s’initier en douceur au ski de rando.\n• Ski de rando et sorties plus sportives pour les amateurs de belles descentes.\n• Sessions freerando en station ou en hors-piste avec approche en peaux.\n• Raids et séjours de plusieurs jours, en gîte ou en refuge d’altitude.\n• Aventures à la carte, on construit ensemble selon vos envies.",
    answerEn: "At Évasion Ski, each outing is tailored to your desires and level:\n\n• Discovery days to gently learn ski touring.\n• Ski touring and sportier outings for lovers of beautiful descents.\n• Freerando sessions in resorts or off-piste with skins approach.\n• Raids and stays of several days in gites or altitude huts.\n• Tailor-made adventures, we build together according to your wishes."
  },
  {
    questionFr: "Comment débuter ou progresser en ski de randonnée ?",
    questionEn: "How to start or progress in ski touring?",
    answerFr: "Commencez par une journée découverte !\nVous apprendrez les bases techniques, l’utilisation du matériel, les règles de sécurité… et les plaisirs de la montée pour mieux savourer la descente.\nEnsuite, on adapte les sorties à votre progression, vos envies, et vos objectifs.",
    answerEn: "Start with a discovery day!\nYou will learn the technical basics, equipment use, safety rules... and the pleasures of climbing to better enjoy the descent.\nThen, we adapt the outings to your progression, desires, and goals."
  },
  {
    questionFr: "Où se déroulent des sorties à ski de randonnée ?",
    questionEn: "Where do the ski tours take place?",
    answerFr: "Principalement dans les Hautes-Alpes : Les Orres, Crévoux, Réallon, Queyras, Ubaye, Écrins, Cerces… Mais aussi du voyage à l’étranger notamment en Norvège.",
    answerEn: "Mainly in the Hautes-Alpes: Les Orres, Crévoux, Réallon, Queyras, Ubaye, Écrins, Cerces... But also trips abroad, notably to Norway."
  },
  {
    questionFr: "Et pour se loger ?",
    questionEn: "And for accommodation?",
    answerFr: "Voici quelques adresses que je vous conseille pour des nuits reposantes et des repas montagnards faits maison : la Grande Ferme à Saint-Sauveur, La Jarbelle aux Orres ou encore le gîte l’Edelweiss à Abriès, tout près des départs de course.\nDes lieux simples, accueillants, et bien placés pour profiter pleinement du séjour.",
    answerEn: "Here are some addresses I recommend for restful nights and homemade mountain meals: la Grande Ferme in Saint-Sauveur, La Jarbelle in Les Orres or the gite l'Edelweiss in Abriès, very close to the departures.\nSimple, welcoming places, well located to fully enjoy your stay."
  },
  {
    questionFr: "Par où commencer ?",
    questionEn: "Where to start?",
    answerFr: "Explorez mes différentes activités et laissez-vous inspirer par votre prochaine aventure. Si vous cherchez à vous évader, à explorer, ainsi qu’à glisser alors vous êtes au bon endroit !",
    answerEn: "Explore my different activities and let yourself be inspired for your next adventure. If you are looking to escape, explore, and slide, then you are in the right place!"
  }
]

const AdventureStart = ({
  badge = "FAQ",
  title = "Des questions ?",
  titleAccent = "ÉvasionSki y répond",
  description = "Retrouvez les réponses aux questions les plus courantes sur l'organisation des sorties en ski de randonnée.",
  image = "/photos/DSC_6701.jpg",
  className = "bg-surface"
}: AdventureProps) => {
  const { language, at } = useLanguage()
  const [activeIdx, setActiveIdx] = useState<number | null>(0)

  return (
    <section className={`py-24 px-6 overflow-hidden transition-colors duration-300 ${className}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* FAQ Column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <span className="inline-block px-4 py-1.5 bg-highlight text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-6">
              {at(badge)}
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-normal mb-6 text-foreground leading-tight">
              {at(title)} <br />
              <span className="text-accent italic">{at(titleAccent)}</span>
            </h2>
            <p className="text-lg text-foreground/80 mb-10 max-w-xl leading-relaxed">
              {at(description)}
            </p>

            {/* Accordion list */}
            <div className="space-y-4 max-w-2xl">
              {HOME_FAQS.map((faq, idx) => {
                const isOpen = activeIdx === idx
                const question = language === 'en' ? faq.questionEn : faq.questionFr
                const answer = language === 'en' ? faq.answerEn : faq.answerFr

                return (
                  <div
                    key={idx}
                    className={`glass border rounded-3xl overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? 'border-accent/40 bg-card/10 shadow-[0_4px_30px_rgba(243,177,8,0.05)]'
                        : 'border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02]'
                    }`}
                  >
                    <button
                      onClick={() => setActiveIdx(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 transition-colors duration-200 text-left text-lg md:text-xl font-bold text-foreground"
                    >
                      <span className="flex items-center gap-3">
                        <HelpCircle className={`w-5 h-5 shrink-0 transition-colors duration-300 ${isOpen ? 'text-accent' : 'text-foreground/45'}`} />
                        {question}
                      </span>
                      <span className={`p-1 rounded-full bg-white/5 text-foreground/50 transition-all duration-300 ${isOpen ? 'rotate-180 bg-accent/15 text-accent' : ''}`}>
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>

                    <div
                      style={{
                        height: isOpen ? 'auto' : 0,
                        opacity: isOpen ? 1 : 0,
                        transition: 'height 0.3s ease, opacity 0.3s ease',
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-base md:text-lg text-foreground/80 leading-relaxed border-t border-border pt-4 whitespace-pre-line">
                        {answer}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl relative">
              <Image
                src={image || "/photos/DSC_6701.jpg"}
                alt="Ski de randonnée Hautes-Alpes"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full blur-[100px] opacity-25" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-highlight rounded-full blur-[100px] opacity-15" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default AdventureStart
