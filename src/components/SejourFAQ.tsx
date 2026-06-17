'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface FAQItem {
  question: string;
  answer: string;
}

interface SejourFAQProps {
  faqs: FAQItem[];
}

export default function SejourFAQ({ faqs }: SejourFAQProps) {
  const { at } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="mt-16 border-t border-border pt-12">
      <h3 className="text-3xl font-black uppercase tracking-tight mb-8 text-foreground">
        {at('Questions Fréquentes')}
      </h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`glass rounded-3xl overflow-hidden transition-all duration-300 ${
                isOpen 
                  ? 'border-accent/40 shadow-[0_4px_30px_rgba(0,242,254,0.05)]' 
                  : 'hover:border-accent/20 hover:bg-foreground/[0.01]'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between gap-6 px-6 md:px-8 py-5 text-left text-lg font-bold text-foreground transition-colors duration-200"
              >
                <span className="flex items-center gap-3">
                  <HelpCircle className={`w-5 h-5 shrink-0 transition-colors duration-300 ${isOpen ? 'text-accent' : 'text-foreground/40'}`} />
                  {faq.question}
                </span>
                <span className={`p-1.5 rounded-full bg-foreground/5 text-foreground/50 transition-all duration-300 ${isOpen ? 'rotate-180 bg-accent/15 text-accent' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 text-base text-foreground/80 leading-relaxed border-t border-border pt-4 whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
