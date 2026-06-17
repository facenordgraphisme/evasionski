import React from 'react';
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import { getServerTranslations } from '@/i18n/server';

interface ContactViewProps {
  contact: any;
  faqs: any[];
}

export default async function ContactView({ contact, faqs }: ContactViewProps) {
  const { at, t } = await getServerTranslations();

  const fallback = {
    title: at("CONTACT"),
    description: at("Une question ? Un projet de raid ? Envoyez-moi un message et je vous répondrai dans les plus brefs délais."),
    email: "tonimancini05200@gmail.com",
    phone: "06 73 45 84 34",
    location: at("Les Orres, Hautes-Alpes")
  };

  const data = contact || fallback;

  return (
    <div className="relative pt-32 min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-gradient uppercase">
              {at(data.title || fallback.title)}
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              {at(data.description || fallback.description)}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactForm />
            
            <div className="flex flex-col justify-center space-y-12">
              <div>
                <h4 className="font-bold text-accent mb-2 uppercase tracking-widest text-xs">{at('Email')}</h4>
                <p className="text-2xl font-bold text-foreground">{data.email || fallback.email}</p>
              </div>
              <div>
                <h4 className="font-bold text-accent mb-2 uppercase tracking-widest text-xs">{at('Téléphone')}</h4>
                <p className="text-2xl font-bold text-foreground">{data.phone || fallback.phone}</p>
              </div>
              <div>
                <h4 className="font-bold text-accent mb-2 uppercase tracking-widest text-xs">{at('Localisation')}</h4>
                <p className="text-2xl font-bold text-foreground">{at(data.location || fallback.location)}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-24 border-t border-border pt-12">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </div>
    </div>
  );
}
