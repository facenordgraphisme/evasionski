'use client'

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { CheckCircle2, Calendar, User, ArrowRight, ShieldCheck } from 'lucide-react';

export default function BookingSuccessPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      gsap.from('.animate-card', {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });

      gsap.from('.animate-icon', {
        scale: 0,
        opacity: 0,
        delay: 0.3,
        duration: 0.6,
        ease: 'back.out(2)',
      });

      gsap.from('.animate-text', {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        delay: 0.4,
        duration: 0.6,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 relative overflow-hidden"
    >
      {/* Decorative blurred backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="animate-card max-w-lg w-full bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 text-center shadow-2xl relative z-10">
        <div className="animate-icon inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 mb-6">
          <CheckCircle2 className="w-12 h-12" />
        </div>

        <h1 className="animate-text text-3xl font-black tracking-tight mb-2 text-white">
          Aventure Réservée !
        </h1>
        <p className="animate-text text-slate-400 mb-8">
          Votre paiement a été traité avec succès. Un e-mail de confirmation contenant les détails de votre sortie et la fiche technique vous a été envoyé.
        </p>

        <div className="animate-text border-t border-b border-slate-800 py-6 mb-8 text-left space-y-4">
          <div className="flex items-center gap-3 text-slate-300">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-medium">Paiement 100% sécurisé via Stripe</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <Calendar className="w-5 h-5 text-slate-400" />
            <span className="text-sm">Rendez-vous à l'heure convenue pour le départ</span>
          </div>
        </div>

        <div className="animate-text flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-full transition-all flex items-center justify-center gap-2 group shadow-lg shadow-emerald-500/20"
          >
            Retour à l'accueil
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link 
            href="/blog-explorez-les-hautes-alpes-a-ski" 
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-full transition-all"
          >
            Lire le carnet de montagne
          </Link>
        </div>
      </div>
    </div>
  );
}
