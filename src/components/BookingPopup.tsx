'use client'

import React, { useEffect } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface BookingPopupProps {
  isOpen: boolean
  onClose: () => void
  bookingUrl: string
  title?: string
}

export default function BookingPopup({ isOpen, onClose, bookingUrl, title }: BookingPopupProps) {
  // Fermer avec Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-6xl h-[90vh] bg-background rounded-3xl shadow-2xl overflow-hidden border border-border">
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-6 bg-gradient-to-b from-background via-background to-transparent">
                <h3 className="text-xl font-bold text-foreground">
                  {title || 'Réservation'}
                </h3>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 border border-border flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Fermer"
                >
                  <X size={20} className="text-foreground" />
                </button>
              </div>

              {/* Iframe */}
              <iframe
                src={bookingUrl}
                className="w-full h-full border-0"
                title="Réservation Outplanners"
                allow="payment"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
