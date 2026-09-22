'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle, XCircle, Loader2 } from 'lucide-react'

export default function ContactForm() {
  const { at, t } = useLanguage()
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      if (result.text === 'OK') {
        setSubmitStatus('success')
        setFormData({ from_name: '', from_email: '', message: '' })

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')

      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass p-10 rounded-[40px]"
    >
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-foreground/40 mb-2">
            {at('Nom complet')}
          </label>
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full bg-foreground/5 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-foreground/40 disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder={at("Votre nom")}
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-foreground/40 mb-2">
            {at('Email')}
          </label>
          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full bg-foreground/5 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-foreground/40 disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="votre@email.com"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-foreground/40 mb-2">
            {at('Message')}
          </label>
          <textarea
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full bg-foreground/5 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none text-foreground placeholder:text-foreground/40 disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder={at("Décrivez votre projet...")}
          ></textarea>
        </div>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-600 dark:text-green-400"
          >
            <CheckCircle className="w-5 h-5 shrink-0" />
            <p className="text-sm font-medium">
              {at('Message envoyé avec succès ! Nous vous répondrons rapidement.')}
            </p>
          </motion.div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-600 dark:text-red-400"
          >
            <XCircle className="w-5 h-5 shrink-0" />
            <p className="text-sm font-medium">
              {at('Une erreur est survenue. Veuillez réessayer.')}
            </p>
          </motion.div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              {at('Envoi en cours...')}
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              {at('Envoyer le message')}
            </>
          )}
        </button>
      </form>
    </motion.div>
  )
}
