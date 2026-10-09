import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Compass, Home, Mail } from 'lucide-react'
import { getServerTranslations } from '@/i18n/server'

export const metadata: Metadata = {
  title: 'Page introuvable | ÉvasionSki',
}

export default async function NotFound() {
  const { at } = await getServerTranslations()

  const links = [
    {
      href: '/stages-et-raids-a-ski-de-randonnee-hautes-alpes',
      icon: Compass,
      label: at({ fr: 'Stages & raids', en: 'Stages & raids' }),
      desc: at({ fr: 'Queyras, Clarée, Ubaye, Norvège…', en: 'Queyras, Clarée, Ubaye, Norway…' }),
    },
    {
      href: '/calendrier',
      icon: Calendar,
      label: at({ fr: 'Calendrier des sorties', en: 'Trip calendar' }),
      desc: at({ fr: 'Toutes les prochaines dates', en: 'All upcoming dates' }),
    },
    {
      href: '/evasion-ski-hautes-alpes-contact',
      icon: Mail,
      label: at({ fr: 'Me contacter', en: 'Contact me' }),
      desc: at({ fr: 'Une question, un projet ?', en: 'A question, a project?' }),
    },
  ]

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-background via-black/40 to-black/30" />

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 max-w-4xl text-center">
        <span className="inline-block px-4 py-1.5 bg-accent text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg mb-8">
          {at({ fr: 'Erreur 404', en: 'Error 404' })}
        </span>

        <h1 className="text-[7rem] sm:text-[10rem] md:text-[13rem] font-black leading-none tracking-tighter text-white drop-shadow-2xl">
          4<span className="text-accent italic">0</span>4
        </h1>

        <h2 className="mt-4 text-2xl md:text-4xl font-bold tracking-tight text-white">
          {at({ fr: 'Hors-piste… cette page n\'existe pas', en: 'Off-piste… this page doesn\'t exist' })}
        </h2>
        <p className="mt-4 text-base md:text-lg text-white/75 max-w-xl mx-auto leading-relaxed">
          {at({
            fr: 'La trace que vous suivez s\'arrête ici. La page a peut-être été déplacée ou n\'est plus disponible. Pas de panique, on vous remet sur le bon itinéraire.',
            en: 'The track you were following ends here. The page may have moved or is no longer available. Don\'t worry, let\'s get you back on route.',
          })}
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-full text-sm font-black uppercase tracking-widest shadow-xl shadow-accent/30 hover:gap-4 transition-all"
        >
          <Home size={18} />
          {at({ fr: 'Retour à l\'accueil', en: 'Back to home' })}
        </Link>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {links.map(({ href, icon: Icon, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center gap-4 p-5 rounded-3xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 hover:border-accent/60 transition-all"
            >
              <span className="w-11 h-11 shrink-0 rounded-full bg-accent/20 text-accent flex items-center justify-center">
                <Icon size={20} />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-sm font-bold text-white">{label}</span>
                <span className="block text-xs text-white/60 truncate">{desc}</span>
              </span>
              <ArrowRight size={16} className="text-white/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
