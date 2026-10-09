'use client'

import { useEffect, useState } from 'react'

// Visible seulement si l'aperçu est ouvert hors du Studio (onglet séparé) : permet d'en sortir.
export default function DraftModeBanner() {
  const [inIframe, setInIframe] = useState(true)

  useEffect(() => {
    setInIframe(window.self !== window.top)
  }, [])

  if (inIframe) return null

  return (
    <div className="fixed top-0 inset-x-0 z-[200] flex items-center justify-center gap-4 px-4 py-2 bg-slate-900 text-white text-xs font-bold">
      <span>Mode aperçu : vous voyez les brouillons non publiés.</span>
      <a href="/api/draft-mode/disable" className="px-3 py-1 rounded-full bg-accent text-slate-900 uppercase tracking-widest">
        Quitter l&apos;aperçu
      </a>
    </div>
  )
}
