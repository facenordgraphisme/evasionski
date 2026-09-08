'use client'

import React, { useState } from 'react';
import { CreditCard, Loader2 } from 'lucide-react';

interface CheckoutButtonProps {
  title: string;
  price: number;
  image?: string;
  slug: string;
  date?: string;
  label?: string;
  className?: string;
  scrollToId?: string; // ID de l'élément vers lequel scroller au lieu de checkout
}

export default function CheckoutButton({
  title,
  price,
  image,
  slug,
  date,
  label = 'Réserver et payer en ligne',
  className = '',
  scrollToId,
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (loading) return;

    // Si scrollToId est fourni, scroller vers l'élément au lieu de checkout
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          price,
          image,
          slug,
          date,
        }),
      });

      const data = await response.json();

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        throw new Error(data.error || 'Failed to create checkout session');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Une erreur est survenue lors de l\'initialisation du paiement. Veuillez réessayer ou nous contacter.');
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={`w-full btn-primary bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/20 text-white py-4 px-6 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed ${className}`}
    >
      {loading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Chargement...</span>
        </>
      ) : (
        <>
          <CreditCard className="w-5 h-5" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
