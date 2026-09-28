'use client'

import { useState } from 'react'
import Image from 'next/image'
import ImageLightbox from './ImageLightbox'
import { useLanguage } from '@/context/LanguageContext'

interface SejourGalleryProps {
  gallery: { url: string; alt?: string }[]
  sejourTitle: string
}

export default function SejourGallery({ gallery, sejourTitle }: SejourGalleryProps) {
  const { at } = useLanguage()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  if (!gallery || gallery.length === 0) return null

  return (
    <section className="pb-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-10">
          {at('Galerie')} <span className="text-accent italic">{at('Photos')}</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((photo: { url: string; alt?: string }, i: number) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            >
              <Image
                src={photo.url}
                alt={photo.alt || at(sejourTitle)}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <ImageLightbox
        images={gallery}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  )
}
