import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getServerTranslations } from '@/i18n/server';

interface LegalViewProps {
  slug: string;
}

export default async function LegalView({ slug }: LegalViewProps) {
  const { at } = await getServerTranslations();

  let title = '';
  let content: React.ReactNode = null;

  if (slug === 'mentions-legales') {
    title = "Mentions Légales";
    content = (
      <div className="space-y-8">
        <p className="text-foreground/80 leading-relaxed text-lg">
          Conformément à l’article 6 de la Loi n°2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site <span className="font-semibold text-foreground">evasionski.fr</span> l’identité des différents intervenants :
        </p>

        <section className="border-l-4 border-accent pl-6 py-2">
          <h2 className="text-2xl font-bold text-foreground mb-4">Éditeur du site</h2>
          <p className="text-foreground/80 leading-relaxed">
            <strong>Toni Mancini</strong><br />
            Auto-entrepreneur<br />
            Adresse : 115 Rue Saint Donat, 05200 Embrun<br />
            Email : <a href="mailto:tonimancini05200@gmail.com" className="text-accent hover:underline">tonimancini05200@gmail.com</a><br />
            Téléphone : 06 73 45 84 34<br />
            SIRET : 44040074500053<br />
            TVA non applicable – article 293 B du CGI
          </p>
        </section>

        <section className="border-l-4 border-accent pl-6 py-2">
          <h2 className="text-2xl font-bold text-foreground mb-4">Responsable de la publication</h2>
          <p className="text-foreground/80 leading-relaxed">
            Toni Mancini – <a href="mailto:tonimancini05200@gmail.com" className="text-accent hover:underline">tonimancini05200@gmail.com</a>
          </p>
        </section>

        <section className="border-l-4 border-accent pl-6 py-2">
          <h2 className="text-2xl font-bold text-foreground mb-4">Hébergement du site</h2>
          <p className="text-foreground/80 leading-relaxed">
            Ce site est hébergé en France.<br />
            Hébergeur : Vercel Inc.<br />
            Adresse : 440 N Barranca Ave #4133 Covina, CA 91723<br />
            Site Internet : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://vercel.com</a>
          </p>
        </section>

        <section className="border-l-4 border-accent pl-6 py-2">
          <h2 className="text-2xl font-bold text-foreground mb-4">Données personnelles</h2>
          <p className="text-foreground/80 leading-relaxed">
            Le site <span className="font-semibold text-foreground">evasionski.fr</span> ne collecte des données personnelles que pour répondre aux demandes et réservations. Conformément à la loi “Informatique et Libertés”, vous disposez d’un droit d’accès et de rectification en nous contactant à : <a href="mailto:tonimancini05200@gmail.com" className="text-accent hover:underline">tonimancini05200@gmail.com</a>.
          </p>
        </section>

        <section className="border-l-4 border-accent pl-6 py-2">
          <h2 className="text-2xl font-bold text-foreground mb-4">Propriété intellectuelle</h2>
          <p className="text-foreground/80 leading-relaxed">
            L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
        </section>
      </div>
    );
  } else if (slug === 'confidentialite' || slug === 'politique-de-confidentialite') {
    title = "Politique de Confidentialité";
    content = (
      <div className="space-y-8">
        <p className="text-foreground/80 leading-relaxed text-lg">
          Le site <span className="font-semibold text-foreground">www.evasionski.fr</span>, exploité par Toni Mancini, auto-entrepreneur, attache une grande importance à la protection de vos données personnelles et à votre vie privée. Cette politique de confidentialité explique quelles données sont collectées, comment elles sont utilisées et quels sont vos droits.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">1. Collecte des données</h2>
          <p className="text-foreground/80 leading-relaxed">
            Nous collectons les informations suivantes lors de vos interactions sur notre site :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="p-6 rounded-2xl bg-foreground/5 border border-border">
              <h3 className="font-bold text-foreground mb-2">a) Via le formulaire de contact</h3>
              <ul className="list-disc list-inside space-y-1 text-foreground/70">
                <li>Nom</li>
                <li>Adresse e-mail</li>
                <li>Message</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-foreground/5 border border-border">
              <h3 className="font-bold text-foreground mb-2">b) Via le système de réservation en ligne</h3>
              <ul className="list-disc list-inside space-y-1 text-foreground/70">
                <li>Nom, prénom</li>
                <li>Adresse e-mail</li>
                <li>Numéro de téléphone</li>
                <li>Détails sur l&apos;activité (choix, niveau, remarques, etc.)</li>
                <li>Données de paiement (traitées via Stripe, non stockées sur le site)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">2. Finalité de la collecte</h2>
          <p className="text-foreground/80 leading-relaxed">
            Les données collectées sont utilisées uniquement pour :
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1 text-foreground/80">
            <li>Répondre aux demandes envoyées via le formulaire</li>
            <li>Gérer les réservations d’activités</li>
            <li>Envoyer des confirmations, rappels ou informations pratiques</li>
            <li>Assurer le suivi administratif ou légal</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">3. Responsable du traitement</h2>
          <p className="text-foreground/80 leading-relaxed">
            <strong>Toni Mancini</strong><br />
            Statut : Auto-entrepreneur<br />
            Email : <a href="mailto:tonimancini05200@gmail.com" className="text-accent hover:underline">tonimancini05200@gmail.com</a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">4. Durée de conservation</h2>
          <p className="text-foreground/80 leading-relaxed">
            Les données sont conservées :
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1 text-foreground/80">
            <li>Jusqu’à 3 ans après la dernière interaction commerciale ou le dernier contact.</li>
            <li>Ou immédiatement sur simple demande de suppression de l’utilisateur.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">5. Partage des données</h2>
          <p className="text-foreground/80 leading-relaxed">
            Les données ne sont jamais revendues à des tiers. Elles peuvent être partagées avec :
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1 text-foreground/80">
            <li>Le prestataire de paiement (Stripe)</li>
            <li>Le système de réservation</li>
            <li>L’hébergeur du site web (selon besoin technique)</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">6. Sécurité des données</h2>
          <p className="text-foreground/80 leading-relaxed">
            Toutes les données transmises via le site sont sécurisées par HTTPS. Les données de paiement sont gérées directement par Stripe, conforme aux normes PCI DSS.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">7. Vos droits</h2>
          <p className="text-foreground/80 leading-relaxed">
            Conformément au RGPD, vous disposez des droits d’accès, de rectification, d’effacement (droit à l’oubli), de portabilité et de retrait de votre consentement.
            Vous pouvez exercer ces droits en écrivant à : <a href="mailto:tonimancini05200@gmail.com" className="text-accent hover:underline">tonimancini05200@gmail.com</a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">8. Cookies</h2>
          <p className="text-foreground/80 leading-relaxed">
            Le site utilise des cookies uniquement à des fins de mesure d’audience et pour le fonctionnement des modules de réservation. Un bandeau d’acceptation des cookies est affiché à votre arrivée sur le site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">9. Réclamations</h2>
          <p className="text-foreground/80 leading-relaxed">
            En cas de réclamation, vous pouvez contacter la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.cnil.fr</a>) ou nous écrire directement.
          </p>
        </section>
      </div>
    );
  } else if (slug === 'cgv' || slug === 'conditions-generales-de-vente') {
    title = "Conditions Générales de Vente";
    content = (
      <div className="space-y-8">
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">1. Présentation</h2>
          <p className="text-foreground/80 leading-relaxed">
            Les présentes conditions générales de vente régissent les prestations proposées par Toni Mancini via le site internet <span className="font-semibold text-foreground">evasionski.fr</span>. Toni Mancini est moniteur de ski diplômé, exerçant en tant qu’auto-entrepreneur dans les Hautes-Alpes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">2. Identification du prestataire</h2>
          <p className="text-foreground/80 leading-relaxed">
            <strong>Toni Mancini</strong><br />
            Statut : Auto-entrepreneur<br />
            SIRET : 44040074500053<br />
            Adresse : 115 Rue Saint Donat, 05200 Embrun<br />
            Email : <a href="mailto:tonimancini05200@gmail.com" className="text-accent hover:underline">tonimancini05200@gmail.com</a><br />
            TVA : non applicable – article 293 B du CGI
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">3. Prestations proposées</h2>
          <p className="text-foreground/80 leading-relaxed">
            Toni Mancini propose à la vente en ligne des sorties et séjours encadrés en ski hors-piste, ski de randonnée (à la journée ou sur plusieurs jours), et freerando, dans les Alpes du Sud et la vallée de l’Ubaye.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Chaque prestation comprend :
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1 text-foreground/80">
            <li>L’encadrement par un professionnel diplômé d’État (BEES 1er degré ski alpin)</li>
            <li>La préparation de la sortie, du séjour ou du raid à ski</li>
            <li>L’accompagnement sur le terrain</li>
            <li>Le respect des règles de sécurité en montagne</li>
            <li>Le matériel collectif (radio VHF, trousse de secours, GPS, etc.)</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">4. Modalités de réservation</h2>
          <p className="text-foreground/80 leading-relaxed">
            Les réservations se font via le site <span className="font-semibold text-foreground">evasionski.fr</span> grâce au système intégré de réservation en ligne. Le client choisit un événement parmi ceux proposés, sélectionne un nombre de places, et procède au paiement. Une réservation est considérée comme confirmée uniquement après paiement complet.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">5. Tarifs</h2>
          <p className="text-foreground/80 leading-relaxed">
            Les prix sont indiqués en euros (€) toutes taxes comprises. Toni Mancini étant en micro-entreprise, la TVA n’est pas applicable (art. 293 B du CGI). Les tarifs sont affichés sur chaque fiche d’événement et peuvent varier selon la durée, la complexité ou le lieu de la sortie.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">6. Paiement</h2>
          <p className="text-foreground/80 leading-relaxed">
            Le paiement s’effectue en ligne au moment de la réservation, via un système sécurisé (Stripe).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">7. Conditions d&apos;annulation et de remboursement</h2>
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-foreground/5 border border-border">
              <h3 className="font-bold text-foreground mb-2">Annulation à l’initiative du client</h3>
              <p className="text-foreground/70 mb-3">
                Toute annulation doit être communiquée par écrit (email). Les frais d’annulation suivants s’appliquent :
              </p>
              <ul className="list-disc list-inside space-y-1 text-foreground/70 mb-3">
                <li><strong>Plus de 30 jours avant le départ :</strong> remboursement intégral, avec une déduction de 30 € pour frais de gestion.</li>
                <li><strong>Entre 30 et 15 jours avant le départ :</strong> remboursement de 50 % du montant total.</li>
                <li><strong>Moins de 15 jours avant le départ :</strong> aucun remboursement.</li>
              </ul>
              <p className="text-foreground/70 italic">
                Nous vous encourageons vivement à souscrire une assurance annulation et interruption de séjour.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-foreground/5 border border-border">
              <h3 className="font-bold text-foreground mb-2">Annulation à l’initiative de l’organisateur (Toni Mancini)</h3>
              <p className="text-foreground/70 mb-3">
                Le guide se réserve le droit d’annuler ou de modifier le séjour en cas de conditions météo/nivologiques défavorables, nombre insuffisant de participants, ou cas de force majeure compromettant la sécurité.
              </p>
              <p className="text-foreground/70">
                Dans ce cas, plusieurs options sont proposées : report à une date ultérieure, un avoir de 12 mois, ou un remboursement intégral.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">8. Cession du contrat</h2>
          <p className="text-foreground/80 leading-relaxed">
            Le client peut céder sa réservation à une autre personne, à condition de prévenir le prestataire au moins 7 jours avant le départ et que le remplaçant remplisse les conditions requises pour la sortie.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">9. Droit de rétractation</h2>
          <p className="text-foreground/80 leading-relaxed">
            Conformément à l’article L221-28 du Code de la consommation, les prestations d&apos;activités de loisir à date fixe ne sont pas soumises au droit de rétractation. Toute réservation est donc ferme et définitive.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">10. Obligations du participant</h2>
          <p className="text-foreground/80 leading-relaxed">
            Le participant s’engage à avoir le niveau requis, disposer du matériel nécessaire en bon état, et respecter les consignes de sécurité du moniteur. Une assurance responsabilité civile individuelle est obligatoire.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">11. Responsabilité</h2>
          <p className="text-foreground/80 leading-relaxed">
            La pratique du ski en milieu naturel comporte des risques que même une vigilance constante ne peut totalement éliminer. En s&apos;inscrivant, chaque participant reconnaît en être conscient et les assumer. La responsabilité de Toni Mancini ne saurait être engagée en cas d’accident dû à une imprudence personnelle ou au non-respect des consignes.
          </p>
        </section>
      </div>
    );
  }

  if (!content) {
    return null;
  }

  return (
    <div className="relative pt-32 min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-accent font-bold mb-8 hover:gap-4 transition-all duration-300 text-sm"
        >
          <ArrowLeft size={16} />
          {at('RETOUR À L\'ACCUEIL')}
        </Link>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-12 text-foreground">
          {at(title)}
        </h1>

        <div className="glass p-8 md:p-12 rounded-[2rem] border border-border shadow-xl">
          <div className="prose-custom max-w-none text-foreground/80 leading-relaxed">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}
