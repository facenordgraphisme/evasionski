'use client'

import { useState } from 'react'
import { PortableText } from '@portabletext/react'
import type { PortableTextComponents } from '@portabletext/react'
import { 
  Download, 
  FileText,
  Euro, 
  Activity, 
  Home, 
  Bus, 
  Shield, 
  MapPin, 
  Clock, 
  Info 
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

interface EssentielStructure {
  tarifs?: string
  niveau?: string
  destinations?: string
  hebergement?: string
  logistique?: string
  materiel?: string
  duree?: string
  autresInfos?: string
}

interface BudgetStructure {
  inclus: string[]
  nonInclus: string[]
}

interface ProgrammeJour {
  jour: string
  titre?: string
  description?: string
}

interface Tab {
  id: string
  label: string
  content: any[] | null
  pdf?: string | null
  structure?: EssentielStructure | null
  budgetStructure?: BudgetStructure | null
  programmeStructure?: ProgrammeJour[] | null
}

interface SejourTabsProps {
  tabs: Tab[]
}

// Helper to serialize PortableText blocks to a single string
function blocksToText(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return '';
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) return '';
      return block.children.map((child: any) => child.text).join('');
    })
    .join('\n\n');
}

// Category titles translation mapping
const categoryTitles: Record<string, { fr: string, en: string }> = {
  'Tarifs & Budget': { fr: 'Tarifs & Budget', en: 'Rates & Budget' },
  'Niveau & Effort': { fr: 'Niveau & Effort', en: 'Level & Effort' },
  'Hébergement': { fr: 'Hébergement', en: 'Accommodation' },
  'Logistique & Transport': { fr: 'Logistique & Transport', en: 'Logistics & Transport' },
  'Matériel & Secours': { fr: 'Matériel & Secours', en: 'Gear & Safety' },
  'Destinations & Massifs': { fr: 'Destinations & Massifs', en: 'Destinations & Ranges' },
  'Durée & Format': { fr: 'Durée & Format', en: 'Duration & Format' },
  'À savoir': { fr: 'À savoir', en: 'Useful Info' }
};

// Icon map for the categories
const IconMap: Record<string, React.ComponentType<any>> = {
  Euro,
  Activity,
  Home,
  Bus,
  Shield,
  MapPin,
  Clock,
  Info
};

// Cleans common wordpress/scraping spelling mistakes and spaces
function cleanScrapedText(text: string): string {
  if (!text) return '';
  return text
    .replace(/(\d+)\s*\?/g, '$1 €') // Fix euro symbol issue
    .replace(/\?/g, '€')
    .replace(/\*\*/g, '')
    .replace(/intermédiaireseffort/gi, 'intermédiaires / Effort')
    .replace(/expertseffort/gi, 'experts / Effort')
    .replace(/d’inscriptionlogistique/gi, "d'inscription. Logistique")
    .replace(/d'inscriptionlogistique/gi, "d'inscription. Logistique")
    .replace(/participantspour/gi, 'participants pour')
    .replace(/diviserpour/gi, 'diviser pour')
    .replace(/persen/gi, 'pers en')
    .replace(/tairf/gi, 'tarif')
    .replace(/perspour/gi, 'pers pour')
    .replace(/([a-z0-9à-öø-ÿœ])(effort\s*:)/gi, '$1 | $2')
    .replace(/([a-z0-9à-öø-ÿœ])(logistique\s*:)/gi, '$1. $2')
    .replace(/([a-z0-9à-öø-ÿœ])(transport\s*:)/gi, '$1. $2')
    .replace(/([a-z0-9à-öø-ÿœ…])([A-ZÀ-ÖŒ])/g, (m, p1, p2) => p1 + '. ' + p2)
    .trim();
}

// Detect category of points based on text
function getBlockCategory(text: string) {
  const lower = text.toLowerCase();
  if (lower.includes('tarif') || lower.includes('€') || lower.includes('prix') || lower.includes('persen') || lower.includes('personnes :') || lower.includes('tairf')) {
    return {
      title: 'Tarifs & Budget',
      icon: 'Euro',
      color: 'text-emerald-500 bg-emerald-500/10 dark:text-emerald-400 dark:bg-emerald-400/10'
    };
  }
  if (lower.includes('skieur') || lower.includes('effort') || lower.includes('niveau') || lower.includes('physique') || lower.includes('dénivelé')) {
    return {
      title: 'Niveau & Effort',
      icon: 'Activity',
      color: 'text-amber-500 bg-amber-500/10 dark:text-amber-400 dark:bg-amber-400/10'
    };
  }
  if (lower.includes('hébergement') || lower.includes('gîte') || lower.includes('refuge') || lower.includes('cabane') || lower.includes('hôtel') || lower.includes('pension') || lower.includes('maison')) {
    return {
      title: 'Hébergement',
      icon: 'Home',
      color: 'text-blue-500 bg-blue-500/10 dark:text-blue-400 dark:bg-blue-400/10'
    };
  }
  if (lower.includes('transport') || lower.includes('minibus') || lower.includes('véhicule') || lower.includes('déplacement') || lower.includes('logistique')) {
    return {
      title: 'Logistique & Transport',
      icon: 'Bus',
      color: 'text-indigo-500 bg-indigo-500/10 dark:text-indigo-400 dark:bg-indigo-400/10'
    };
  }
  if (lower.includes('prêt') || lower.includes('matériel') || lower.includes('fourni') || lower.includes('sac à dos') || lower.includes('dva') || lower.includes('secours')) {
    return {
      title: 'Matériel & Secours',
      icon: 'Shield',
      color: 'text-red-500 bg-red-500/10 dark:text-red-400 dark:bg-red-400/10'
    };
  }
  if (lower.includes('queyras') || lower.includes('ubaye') || lower.includes('embrunais') || lower.includes('écrins') || lower.includes('norvège') || lower.includes('clarée') || lower.includes('massif') || lower.includes('terrain') || lower.includes('lyngen')) {
    return {
      title: 'Destinations & Massifs',
      icon: 'MapPin',
      color: 'text-cyan-500 bg-cyan-500/10 dark:text-cyan-400 dark:bg-cyan-400/10'
    };
  }
  if (lower.includes('durée') || lower.includes('jours') || lower.includes('journée') || lower.includes('semaine')) {
    return {
      title: 'Durée & Format',
      icon: 'Clock',
      color: 'text-purple-500 bg-purple-500/10 dark:text-purple-400 dark:bg-purple-400/10'
    };
  }
  return {
    title: 'À savoir',
    icon: 'Info',
    color: 'text-zinc-500 bg-zinc-500/10 dark:text-zinc-400 dark:bg-zinc-400/10'
  };
}

// Parses raw milestone text into structured title and paragraphs
function parseMilestone(partText: string) {
  let clean = partText.replace(/([a-z0-9\u00e0-\u00f6\u00f8-\u00ff\u0153\u2026])([A-Z\u00c0-\u00d6\u00d8-\u00df\u0152])/g, (m, p1, p2) => p1 + '\n\n' + p2);
  clean = clean.replace(/\*\*/g, '').replace(/(\d+)\s*\?/g, '$1 €').replace(/Pour profiter pleinement[\s\S]*/i, '').trim();

  const paragraphs = clean.split('\n\n').map(p => p.trim()).filter(Boolean);
  if (paragraphs.length === 0) return null;

  let title = '';
  let descParagraphs = [...paragraphs];
  const firstP = paragraphs[0];

  if (firstP.length < 85) {
    title = firstP;
    descParagraphs.shift();
  } else {
    const separatorIndex = firstP.indexOf(':');
    const dashIndex = firstP.indexOf('–') !== -1 ? firstP.indexOf('–') : firstP.indexOf(' - ');
    
    let splitIdx = -1;
    let sepLength = 1;
    if (separatorIndex !== -1 && (dashIndex === -1 || separatorIndex < dashIndex)) {
      splitIdx = separatorIndex;
      sepLength = 1;
    } else if (dashIndex !== -1) {
      splitIdx = dashIndex;
      sepLength = 3;
    }

    if (splitIdx !== -1 && splitIdx < 60) {
      title = firstP.substring(0, splitIdx).trim();
      const rest = firstP.substring(splitIdx + sepLength).trim();
      if (rest) {
        descParagraphs[0] = rest;
      } else {
        descParagraphs.shift();
      }
    } else {
      title = firstP.substring(0, 40) + '...';
    }
  }

  title = title.replace(/[:\-–]$/, '').trim();
  return {
    title,
    paragraphs: descParagraphs
  };
}

// Composants PortableText définis côté client
const portableTextComponents: PortableTextComponents = {
  block: {
    blockCenter: ({ children }) => <p style={{ textAlign: 'center' }}>{children}</p>,
    blockRight: ({ children }) => <p style={{ textAlign: 'right' }}>{children}</p>,
    blockJustify: ({ children }) => <p style={{ textAlign: 'justify' }}>{children}</p>,
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
  },
}

export default function SejourTabs({ tabs }: SejourTabsProps) {
  const { language } = useLanguage()
  const visibleTabs = tabs.filter(tab =>
    (tab.content && tab.content.length > 0) ||
    tab.pdf ||
    (tab.budgetStructure && (tab.budgetStructure.inclus.length > 0 || tab.budgetStructure.nonInclus.length > 0)) ||
    (tab.programmeStructure && tab.programmeStructure.length > 0) ||
    tab.structure
  )

  const [activeTab, setActiveTab] = useState(visibleTabs[0]?.id ?? '')

  if (visibleTabs.length === 0) return null

  const current = visibleTabs.find(t => t.id === activeTab)

  return (
    <div className="glass rounded-[40px] border border-border shadow-xl overflow-hidden">
      {/* Tab buttons */}
      <div className="flex flex-wrap gap-2 px-8 pt-8 pb-6 border-b border-border bg-foreground/[0.02]">
        {visibleTabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-accent text-slate-900 shadow-lg shadow-accent/20'
                : 'bg-foreground/5 text-foreground/50 hover:bg-foreground/10 hover:text-foreground/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {current && (
        <div className="px-8 py-8 prose-custom max-w-none animate-in fade-in duration-300">
          
          {/* Custom Essentiel Tab Layout */}
          {activeTab === 'essentiel' && (current.structure || current.content) ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(() => {
                // Priorité à la structure si disponible
                if (current.structure) {
                  const sections = [
                    { key: 'tarifs', title: 'Tarifs & Budget', icon: 'Euro', color: 'text-emerald-500 bg-emerald-500/10 dark:text-emerald-400 dark:bg-emerald-400/10' },
                    { key: 'niveau', title: 'Niveau & Effort', icon: 'Activity', color: 'text-amber-500 bg-amber-500/10 dark:text-amber-400 dark:bg-amber-400/10' },
                    { key: 'destinations', title: 'Destinations & Massifs', icon: 'MapPin', color: 'text-cyan-500 bg-cyan-500/10 dark:text-cyan-400 dark:bg-cyan-400/10' },
                    { key: 'hebergement', title: 'Hébergement', icon: 'Home', color: 'text-blue-500 bg-blue-500/10 dark:text-blue-400 dark:bg-blue-400/10' },
                    { key: 'logistique', title: 'Logistique & Transport', icon: 'Bus', color: 'text-indigo-500 bg-indigo-500/10 dark:text-indigo-400 dark:bg-indigo-400/10' },
                    { key: 'materiel', title: 'Matériel & Secours', icon: 'Shield', color: 'text-red-500 bg-red-500/10 dark:text-red-400 dark:bg-red-400/10' },
                    { key: 'duree', title: 'Durée & Format', icon: 'Clock', color: 'text-purple-500 bg-purple-500/10 dark:text-purple-400 dark:bg-purple-400/10' },
                    { key: 'autresInfos', title: 'À savoir', icon: 'Info', color: 'text-zinc-500 bg-zinc-500/10 dark:text-zinc-400 dark:bg-zinc-400/10' },
                  ] as const;

                  return sections
                    .filter(section => current.structure?.[section.key])
                    .map((section, index) => {
                      const IconComp = IconMap[section.icon] || Info;
                      const content = current.structure![section.key]!;
                      const categoryLabel = language === 'en'
                        ? categoryTitles[section.title]?.en || section.title
                        : categoryTitles[section.title]?.fr || section.title;

                      return (
                        <div
                          key={section.key}
                          className="glass p-6 rounded-3xl border border-border flex gap-5 hover:border-accent/30 transition-all duration-300 shadow-sm"
                        >
                          <div className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center ${section.color}`}>
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div className="space-y-1.5 flex-1">
                            <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40 block">
                              {categoryLabel}
                            </span>
                            <p className="text-foreground/80 leading-relaxed text-sm font-medium whitespace-pre-line">
                              {content}
                            </p>
                          </div>
                        </div>
                      );
                    });
                }

                // Sinon, fallback sur l'analyse automatique du texte
                if (!current.content) return null;

                const textContent = blocksToText(current.content);
                const points = textContent
                  .split('\n\n')
                  .map(p => p.trim())
                  .filter(p => p.length > 0);

                return points.map((point, index) => {
                  const category = getBlockCategory(point);
                  const IconComp = IconMap[category.icon] || Info;
                  const cleaned = cleanScrapedText(point)
                    .replace(/^[•\s\-*]+/, '')
                    .trim();

                  const colonIndex = cleaned.indexOf(':');
                  let prefix = '';
                  let body = cleaned;

                  if (colonIndex !== -1 && colonIndex < 35) {
                    prefix = cleaned.substring(0, colonIndex).trim();
                    body = cleaned.substring(colonIndex + 1).trim();
                  }

                  const categoryLabel = language === 'en' 
                    ? categoryTitles[category.title]?.en || category.title 
                    : categoryTitles[category.title]?.fr || category.title;

                  return (
                    <div 
                      key={index}
                      className="glass p-6 rounded-3xl border border-border flex gap-5 hover:border-accent/30 transition-all duration-300 shadow-sm"
                    >
                      <div className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center ${category.color}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40 block">
                          {categoryLabel}
                        </span>
                        <p className="text-foreground/80 leading-relaxed text-sm font-medium">
                          {prefix ? (
                            <>
                              <strong className="font-extrabold text-foreground capitalize">{prefix} :</strong> {body}
                            </>
                          ) : (
                            body
                          )}
                        </p>
                      </div>
                    </div>
                  );
                });
              })()}
            </div>
          ) : activeTab === 'programme' && current.programmeStructure ? (
            /* Programme Structuré Timeline */
            <div className="relative pl-8 md:pl-10 border-l-2 border-accent/20 ml-3 md:ml-4 space-y-10 py-2">
              {current.programmeStructure.map((jour, index) => (
                <div key={index} className="relative group">
                  {/* Circle bullet with index */}
                  <div className="absolute -left-[45px] md:-left-[53px] top-1.5 w-8 h-8 rounded-full bg-background border-2 border-accent flex items-center justify-center text-xs font-black text-accent shadow-md group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {index + 1}
                  </div>
                  <div className="glass p-6 md:p-8 rounded-3xl border border-border shadow-sm group-hover:border-accent/30 transition-all duration-300">
                    <h4 className="text-lg font-black uppercase tracking-tight text-foreground mb-2">
                      {jour.jour}
                      {jour.titre && (
                        <span className="font-normal text-foreground/80 normal-case block text-base mt-1">
                          {jour.titre}
                        </span>
                      )}
                    </h4>
                    {jour.description && (
                      <p className="text-foreground/75 leading-relaxed font-medium text-sm whitespace-pre-line mt-4">
                        {jour.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : activeTab === 'programme' && current.content ? (
            /* Custom Programme Timeline Layout (fallback ancien format) */
            <div>
              {(() => {
                const textContent = blocksToText(current.content);
                const parts = textContent.split(/(?=Jours? [0-9]|Brief mat|Premier run|Second run|Retour entre|Accueil et installation|Soirée libre|Vie au gîte|8h[3-9][0-9]|9h[0-9][0-9]|Transport sur|Montée en peaux|Pique-nique en altitude|Descente plaisir|Départ matinal|Restitution de)/gi);

                const intro = parts[0]?.replace(/\*\*/g, '').replace(/###/g, '').trim();
                const milestones = parts.slice(1);

                if (milestones.length === 0) {
                  return <PortableText value={current.content} components={portableTextComponents} />;
                }

                return (
                  <div className="space-y-8">
                    {intro && (
                      <div className="p-6 rounded-3xl bg-foreground/[0.02] border border-border italic text-foreground/80 font-medium leading-relaxed mb-6">
                        {intro}
                      </div>
                    )}
                    <div className="relative pl-8 md:pl-10 border-l-2 border-accent/20 ml-3 md:ml-4 space-y-10 py-2">
                      {milestones.map((part, index) => {
                        const parsed = parseMilestone(part);
                        if (!parsed) return null;

                        return (
                          <div key={index} className="relative group">
                            {/* Circle bullet with index */}
                            <div className="absolute -left-[45px] md:-left-[53px] top-1.5 w-8 h-8 rounded-full bg-background border-2 border-accent flex items-center justify-center text-xs font-black text-accent shadow-md group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                              {index + 1}
                            </div>
                            <div className="glass p-6 md:p-8 rounded-3xl border border-border shadow-sm group-hover:border-accent/30 transition-all duration-300">
                              <h4 className="text-lg font-black uppercase tracking-tight text-foreground mb-4">
                                {parsed.title}
                              </h4>
                              <div className="text-foreground/75 leading-relaxed font-medium text-sm space-y-3">
                                {parsed.paragraphs.map((p, pIdx) => (
                                  <p key={pIdx}>{p}</p>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}
            </div>
          ) : activeTab === 'inclus' && current.budgetStructure ? (
            /* Custom Budget Inclus/Non Inclus Layout */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Section Inclus */}
              {current.budgetStructure.inclus.length > 0 && (
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-foreground mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {language === 'en' ? 'Included' : 'Inclus'}
                  </h3>
                  <ul className="space-y-3">
                    {current.budgetStructure.inclus.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-foreground/80 text-sm">
                        <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="flex-1 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Section Non Inclus */}
              {current.budgetStructure.nonInclus.length > 0 && (
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-foreground mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    {language === 'en' ? 'Not Included' : 'Non Inclus'}
                  </h3>
                  <ul className="space-y-3">
                    {current.budgetStructure.nonInclus.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-foreground/80 text-sm">
                        <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span className="flex-1 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            /* Standard PortableText Fallback for other tabs */
            current.content && current.content.length > 0 && (
              <PortableText value={current.content} components={portableTextComponents} />
            )
          )}

          {current.pdf && (
            <div className="mt-8">
              <a
                href={current.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-highlight/10 hover:bg-highlight/20 border border-highlight/30 hover:border-highlight/60 text-highlight rounded-2xl font-bold text-sm uppercase tracking-widest transition-all duration-300 group"
              >
                <FileText size={18} className="shrink-0" />
                {language === 'en' ? 'Download gear list (PDF)' : 'Télécharger la liste de matériel (PDF)'}
                <Download size={16} className="shrink-0 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
