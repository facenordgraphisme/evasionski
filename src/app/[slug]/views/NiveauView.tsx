'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Heart, ArrowRight, Activity, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function NiveauView() {
  const { at, t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'technical' | 'physical'>('technical');

  // Map of trip names to their flat URL slugs
  const tripUrlMap: Record<string, string> = {
    "Journée ski de randonnée": "/ski-randonnee-hautes-alpes-journee",
    "Journée Freerando": "/ski-hors-piste-station-hautes-alpes",
    "Découverte du Queyras en ski": "/ski-de-randonnee-queyras-decouverte",
    "Raid à ski en Ubaye": "/raid-ski-randonnee-ubaye",
    "Raid à ski en Clarée": "/ski-de-randonnee-en-claree",
    "Ski de randonnée en Norvège": "/ski-randonnee-norvege-alpes-lyngen",
    "Ski de rnadonnée en Norvège": "/ski-randonnee-norvege-alpes-lyngen",
  };

  const getTripLink = (text: string) => {
    const cleanText = text.trim();
    return tripUrlMap[cleanText] || null;
  };

  const parseTripsList = (tripsText: string) => {
    // splits the string like "SORTIES ADAPTÉES :\n- Journée ski de randonnée\n- ..."
    const lines = tripsText.split('\n');
    const listItems: string[] = [];
    lines.forEach(line => {
      if (line.startsWith('-')) {
        listItems.push(line.replace('-', '').trim());
      }
    });
    return listItems;
  };

  const technicalLevels = [
    {
      level: 1,
      title: "Niveau Technique 1 : Débrouillé",
      titleEn: "Technical Level 1: Beginner-Intermediate",
      description: [
        "Je n’ai jamais pratiqué le ski de randonnée, ni le ski hors-piste, mais je suis à l’aise sur les pistes rouges.",
        "Je peux enchaîner plusieurs heures de ski sans problème.",
        "Je fais mes virages en skis parallèles, même si j’ai encore un peu d’appréhension à haute vitesse.",
        "Les différents types de dérapage (face à la pente, freinage) sont maîtrisés."
      ],
      summary: "Ce niveau correspond à un bon skieur DÉBROUILLÉ, prêt à découvrir le ski de randonnée, avec des bases solides mais une expérience hors-piste encore à construire.",
      summaryEn: "This level corresponds to a good beginner-intermediate skier, ready to discover ski touring with solid basics but still building off-piste experience.",
      trips: ["Journée ski de randonnée"]
    },
    {
      level: 2,
      title: "Niveau Technique 2 : Intermédiaire",
      titleEn: "Technical Level 2: Intermediate",
      description: [
        "J’ai déjà pratiqué le ski de randonnée et/ou le hors-piste.",
        "Je suis à l’aise sur toutes les pistes, y compris les noires, quelles que soient les conditions.",
        "Je tourne en skis parallèles, avec une bonne maîtrise de la vitesse, même sur des pentes inclinées à 30–35°.",
        "Je maîtrise les dérapages sur ces pentes modérées.",
        "Je m’aventure parfois dans les bosses ou en forêt, avec un bon niveau de contrôle."
      ],
      summary: "Ce niveau correspond à un skieur DÉBROUILLÉ/CONFIRMÉ, autonome en descente en terrain varié, et prêt à évoluer dans des environnements alpins non aménagés.",
      summaryEn: "This level corresponds to an intermediate/advanced skier, autonomous in descent on varied terrain and ready for un-groomed alpine environments.",
      trips: ["Découverte du Queyras en ski", "Journée ski de randonnée", "Raid à ski en Ubaye"]
    },
    {
      level: 3,
      title: "Niveau Technique 3 : Confirmé",
      titleEn: "Technical Level 3: Advanced",
      description: [
        "Je pratique régulièrement le ski de randonnée ou le ski hors-piste : plus de 10 jours par an.",
        "Je suis capable de m’adapter à la plupart des terrains et des conditions, même en neige difficile, avec les moyens du bord.",
        "À partir de 40° d’inclinaison, mes virages restent possibles mais peuvent devenir irréguliers en neige compliquée.",
        "J’ai de bons acquis techniques que je continue à consolider dans des terrains variés (pentes raides, forêts, bosses, neige changeante).",
        "Je maîtrise parfaitement les dérapages dans toutes les situations, ainsi que les conversions en montée, même en pente raide ou gelée."
      ],
      summary: "Ce niveau s’adresse à un skieur CONFIRMÉ, autonome et efficace, capable d’évoluer en sécurité dans la plupart des itinéraires classiques. Il reste une marge de progression dans les conditions les plus techniques.",
      summaryEn: "This level is for an advanced skier, autonomous and efficient, capable of touring safely in most classic itineraries. There remains room for progression in the most technical conditions.",
      trips: ["Raid à ski en Clarée", "Découverte du Queyras en ski", "Ski de randonnée en Norvège"]
    },
    {
      level: 4,
      title: "Niveau Technique 4 : Expert",
      titleEn: "Technical Level 4: Expert",
      description: [
        "Je pratique très régulièrement le ski de randonnée ou le hors-piste : plus de 25 jours par an.",
        "Je suis totalement à l’aise dans toutes les neiges, tous types de terrains, y compris raides, engagés ou techniques.",
        "Je gère parfaitement mon stress en situation délicate (exposition, pente raide, neige difficile), sans que cela n’altère ma technique.",
        "J’ai une maîtrise complète des dérapages en descente (tous types de neige et pente > 40°), et des conversions en montée même en terrain délicat (gelé, étroit, exposé).",
        "Je suis capable d’évoluer en autonomie complète, en sécurité, et d’adapter ma technique aux conditions du moment."
      ],
      summary: "Ce niveau correspond à un skieur EXPERT, autonome en terrain alpin engagé, apte à s’inscrire dans des sorties exigeantes.",
      summaryEn: "This level corresponds to an expert skier, autonomous in challenging alpine terrain, ready to join demanding outings.",
      trips: ["Ski de randonnée en Norvège", "Journée Freerando", "Raid à ski en Clarée"]
    }
  ];

  const physicalLevels = [
    {
      level: 1,
      title: "Niveau Physique 1 : Accessible",
      titleEn: "Physical Level 1: Accessible",
      description: [
        "Je suis capable de marcher activement en terrain montagneux pendant 3 à 4 heures, sans difficulté particulière, avec un sac à dos d’environ 4 kg.",
        "Je suis capable d'enchaîner plusieurs heures de ski alpin sans pause.",
        "En ski de randonnée, j’envisage des journées de 4 à 5 heures, montée comprise (400/700m D+)."
      ],
      summary: "Le rythme est modéré, mais la journée reste physiquement exigeante : elle demande une bonne forme générale et une capacité à enchaîner plusieurs heures d’effort.",
      summaryEn: "The pace is moderate, but the day remains physically demanding: it requires good general shape and ability to sustain several hours of effort.",
      trips: ["Journée Freerando"]
    },
    {
      level: 2,
      title: "Niveau Physique 2 : Modéré",
      titleEn: "Physical Level 2: Moderate",
      description: [
        "Je suis capable de marcher activement en terrain montagneux pendant 4 à 5 heures, avec 800 à 1000 m de dénivelé positif, sans difficulté particulière, en portant un sac d’environ 6 kg.",
        "En ski de randonnée, j’envisage des journées de 5 à 7 heures, montée comprise (700/1200m D+).",
        "Les journées sont sportives, d’intensité modérée à soutenue, et nécessitent une bonne endurance ainsi qu’un effort continu dans la durée."
      ],
      summary: "Les journées nécessitent une bonne endurance ainsi qu'un effort continu dans la durée.",
      summaryEn: "Outings require good endurance and continuous, steady effort over time.",
      trips: ["Découverte du Queyras en ski", "Journée ski de randonnée", "Raid à ski en Ubaye"]
    },
    {
      level: 3,
      title: "Niveau Physique 3 : Soutenu",
      titleEn: "Physical Level 3: Demanding",
      description: [
        "J'ai le goût de l’effort et je sais le gérer.",
        "Je pratique un sport d’endurance (course, vélo, etc.) plusieurs fois par semaine, au moins 1 heure par séance.",
        "Je suis capable d’effectuer une randonnée en montagne de 5 à 7 heures, avec 1000 à 1400 m de dénivelé positif.",
        "En ski de randonnée, j’envisage des journées de 6 à 8 heures d’effort, montée comprise (1000/1400m D+)."
      ],
      summary: "Journées sportives et soutenues, demandant une bonne endurance et une récupération rapide.",
      summaryEn: "Sporty and demanding days, requiring high endurance and quick recovery.",
      trips: ["Découverte du Queyras en ski", "Ski de randonnée en Norvège", "Raid à ski en Clarée"]
    },
    {
      level: 4,
      title: "Niveau Physique 4 : Intense",
      titleEn: "Physical Level 4: Intense",
      description: [
        "Je suis passionné de sports d’endurance que je pratique très régulièrement à un niveau soutenu. Si je reste deux jours sans bouger, mes jambes s’impatientent !",
        "J’aime me confronter à l’effort, et je suis capable de faire une randonnée de plus de 8 heures, avec plus de 1400 m de dénivelé et un sac de 8 kg sur le dos, sans difficulté.",
        "En ski de randonnée, j’envisage des journées longues (6 à 8 h voire plus), montée comprise, avec une intensité élevée, tant en montée qu’en descente (>1400m D+)"
      ],
      summary: "Ce niveau s’adresse aux sportifs entraînés, habitués à enchaîner les efforts, avec une solide condition physique et un mental d'acier.",
      summaryEn: "This level is for trained athletes, accustomed to consecutive efforts, with a solid physical condition and mental grit.",
      trips: ["Ski de randonnée en Norvège", "Raid à ski en Clarée"]
    }
  ];

  const levels = activeTab === 'technical' ? technicalLevels : physicalLevels;

  return (
    <main className="relative pt-32 min-h-screen bg-background text-foreground transition-colors duration-300">
      
      {/* Title Header */}
      <section className="relative py-20 bg-muted/10 border-b border-border/50">
        <div className="container relative z-10 px-6 max-w-4xl mx-auto text-center">
          <span className="text-accent font-black tracking-[0.4em] uppercase text-xs mb-4 block">
            {language === 'en' ? 'SELF-EVALUATION' : 'AUTO-ÉVALUATION'}
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 text-foreground">
            {language === 'en' ? 'Evaluate Your Ski Level' : 'Évaluer son niveau en ski'}
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed font-medium">
            {language === 'en'
              ? 'This page provides all the information needed to correctly evaluate your level, ensuring safety and fun for everyone on our ski tours.'
              : 'Cette page a pour but de fournir toutes les informations nécessaires pour permettre à chacun d\'évaluer son niveau en ski avec justesse et de s\'inscrire à la sortie idéale.'
            }
          </p>
        </div>
      </section>

      {/* Guide & Advice Banner */}
      <section className="py-12">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="glass p-8 rounded-[32px] border border-border grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-card/5">
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <HelpCircle className="text-accent w-5 h-5" />
                {language === 'en' ? 'Why evaluate honestly?' : 'Pourquoi s\'évaluer honnêtement ?'}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {language === 'en'
                  ? 'Overestimating your level puts yourself and the group in difficulty. If you have any doubt, do not hesitate to contact me to discuss it!'
                  : 'Se surestimer peut mettre en difficulté la personne concernée ainsi que le reste du groupe. En cas de doute, contactez-moi pour en parler !'
                }
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link
                href="/evasion-ski-hautes-alpes-contact"
                className="btn-primary px-6 py-3.5 text-xs font-black uppercase tracking-widest !text-white"
              >
                {language === 'en' ? 'CONTACT ME' : 'CONTACTER TONI'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Selector */}
      <section className="py-8">
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setActiveTab('technical')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-black uppercase tracking-widest border transition-all duration-300 ${
              activeTab === 'technical'
                ? 'bg-accent border-accent text-white shadow-lg shadow-accent/20'
                : 'bg-card/5 border-border text-foreground/60 hover:text-foreground hover:border-border'
            }`}
          >
            <BarChart3 size={16} />
            {language === 'en' ? 'Technical level' : 'Niveau Technique'}
          </button>
          <button
            onClick={() => setActiveTab('physical')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-black uppercase tracking-widest border transition-all duration-300 ${
              activeTab === 'physical'
                ? 'bg-accent border-accent text-white shadow-lg shadow-accent/20'
                : 'bg-card/5 border-border text-foreground/60 hover:text-foreground hover:border-border'
            }`}
          >
            <Heart size={16} />
            {language === 'en' ? 'Physical level' : 'Niveau Physique'}
          </button>
        </div>
      </section>

      {/* Levels Display Grid */}
      <section className="py-12 pb-24">
        <div className="container max-w-5xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {levels.map((item) => (
                <div 
                  key={item.level} 
                  className="glass p-8 md:p-10 rounded-[40px] border border-border bg-card/5 flex flex-col justify-between shadow-2xl relative group overflow-hidden"
                >
                  {/* Decorative background number */}
                  <div className="absolute right-6 top-2 text-[120px] font-black opacity-[0.02] text-foreground pointer-events-none select-none">
                    {item.level}
                  </div>

                  <div>
                    {/* Badge */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <span className="font-black text-sm">{item.level}</span>
                      </div>
                      <h3 className="text-lg font-black uppercase tracking-wider text-foreground">
                        {language === 'en' && item.titleEn ? item.titleEn : item.title}
                      </h3>
                    </div>

                    {/* Criteria List */}
                    <ul className="space-y-4 mb-8">
                      {item.description.map((crit, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-foreground/75 leading-relaxed font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                          {crit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Summary & Recommended Trips */}
                  <div className="border-t border-border/50 pt-6 mt-auto">
                    <p className="text-xs text-foreground/50 leading-relaxed italic mb-6">
                      {language === 'en' && item.summaryEn ? item.summaryEn : item.summary}
                    </p>

                    {/* Recommended trips */}
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-accent block mb-3">
                        {language === 'en' ? 'SUITABLE TOURS' : 'SORTIES ADAPTÉES'} :
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {item.trips.map((tripName, idx) => {
                          const slug = getTripLink(tripName);
                          if (slug) {
                            return (
                              <Link
                                key={idx}
                                href={slug}
                                className="inline-flex items-center gap-1.5 bg-accent/5 hover:bg-accent hover:text-white transition-all text-xs font-bold px-3 py-1.5 rounded-full border border-accent/20 text-accent"
                              >
                                {tripName}
                                <ArrowRight size={10} />
                              </Link>
                            );
                          }
                          return (
                            <span
                              key={idx}
                              className="inline-block bg-foreground/5 text-foreground/50 text-xs font-bold px-3 py-1.5 rounded-full border border-border"
                            >
                              {tripName}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

    </main>
  );
}
