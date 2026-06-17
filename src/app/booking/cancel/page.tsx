'use client'

import React, { useEffect, useRef, Suspense } from 'react';
import { gsap } from 'gsap';
import { XCircle, ArrowLeft, RefreshCw, MessageSquare } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import NextLink from 'next/link';

function CancelContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.animate-card', {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });

      gsap.from('.animate-icon', {
        scale: 0,
        opacity: 0,
        delay: 0.2,
        duration: 0.5,
        ease: 'back.out(2)',
      });

      gsap.from('.animate-text', {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        delay: 0.3,
        duration: 0.5,
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
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="animate-card max-w-lg w-full bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 text-center shadow-2xl relative z-10">
        <div className="animate-icon inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/20 text-red-400 mb-6">
          <XCircle className="w-12 h-12" />
        </div>

        <h1 className="animate-text text-3xl font-black tracking-tight mb-2 text-white">
          Réservation Interrompue
        </h1>
        <p className="animate-text text-slate-400 mb-8">
          Le processus de paiement a été annulé ou n'a pas pu aboutir. Aucune somme n'a été débitée de votre compte.
        </p>

        <div className="animate-text border-t border-slate-800 pt-6 mb-8 text-slate-300 text-sm space-y-3 max-w-xs mx-auto">
          <p>Vous rencontrez un problème ?</p>
          <p className="text-slate-500">N'hésitez pas à me contacter directement par téléphone ou email pour finaliser votre inscription.</p>
        </div>

        <div className="animate-text flex flex-col sm:flex-row gap-4 justify-center">
          {slug ? (
            <NextLink 
              href={`/${slug}`} 
              className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-950 font-bold rounded-full transition-all flex items-center justify-center gap-2 group"
            >
              <RefreshCw className="w-4 h-4 transition-transform group-hover:rotate-45" />
              Réessayer la réservation
            </NextLink>
          ) : (
            <NextLink 
              href="/" 
              className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-950 font-bold rounded-full transition-all flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au site
            </NextLink>
          )}
          <NextLink 
            href="/evasion-ski-hautes-alpes-contact" 
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-full transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            Me contacter
          </NextLink>
        </div>
      </div>
    </div>
  );
}

export default function BookingCancelPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">
        Chargement...
      </div>
    }>
      <CancelContent />
    </Suspense>
  );
}
