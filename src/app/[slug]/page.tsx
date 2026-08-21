import type { Metadata } from 'next';
import React, { Suspense } from 'react';
import { client } from "@/sanity/lib/client";
import { notFound } from 'next/navigation';
import { getServerTranslations } from '@/i18n/server';

// Import queries
import {
  sejourBySlugQuery,
  aLaCarteQuery,
  postBySlugQuery,
  postsPageQuery,
  categoryTagsQuery,
  massifTagsQuery,
  guideQuery,
  contactQuery,
  faqsQuery,
  settingsQuery,
  postsBySejourQuery
} from "@/sanity/lib/queries";

// Import sub-views
import SejourView from './views/SejourView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';
import BlogView from './views/BlogView';
import BlogDetailView from './views/BlogDetailView';
import NiveauView from './views/NiveauView';
import LegalView from './views/LegalView';

// Import local fallback data
import { fallbackSejours, fallbackActivities } from "@/utils/fallbackData";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sParams = await searchParams;
  const { at } = await getServerTranslations();

  // 1. Hardcoded slug handlers
  if (slug === 'a-propos-moniteur-de-ski-de-randonnee') {
    const data = await client.fetch(guideQuery).catch(() => null);
    const title = `${at(data?.titleNormal || 'Toni')} ${at(data?.titleAccent || 'Mancini')} - Moniteur de Ski | ÉvasionSki`;
    const description = data?.quote ? `"${at(data.quote)}"` : "Toni Mancini, moniteur de ski indépendant.";
    return { title, description };
  }

  if (slug === 'evasion-ski-hautes-alpes-contact') {
    const data = await client.fetch(contactQuery).catch(() => null);
    const title = `${at(data?.title || 'Contact')} | ÉvasionSki`;
    const description = data?.description ? at(data.description) : "Contactez Toni Mancini, moniteur de ski.";
    return { title, description };
  }

  if (slug === 'niveau-en-ski') {
    return {
      title: `${at('Évaluer son niveau en ski')} | ÉvasionSki`,
      description: at("Évaluez votre niveau technique et physique pour vos sorties et raids en ski de randonnée."),
    };
  }

  if (slug === 'blog-explorez-les-hautes-alpes-a-ski') {
    const pageNumber = Math.max(1, Number(sParams.page) || 1);
    return {
      title: `${at('Blog')}${pageNumber > 1 ? ` - Page ${pageNumber}` : ''} | ÉvasionSki`,
      description: at("Retrouvez les récits d'aventures et conditions dans les Alpes du Sud."),
    };
  }

  if (slug === 'mentions-legales') {
    return {
      title: `${at('Mentions Légales')} | ÉvasionSki`,
      description: at("Mentions légales du site ÉvasionSki, Toni Mancini, moniteur de ski indépendant."),
    };
  }

  if (slug === 'confidentialite' || slug === 'politique-de-confidentialite') {
    return {
      title: `${at('Politique de Confidentialité')} | ÉvasionSki`,
      description: at("Politique de confidentialité et protection des données personnelles sur ÉvasionSki."),
    };
  }

  if (slug === 'cgv' || slug === 'conditions-generales-de-vente') {
    return {
      title: `${at('Conditions Générales de Vente')} | ÉvasionSki`,
      description: at("Conditions générales de vente (CGV) des prestations de ski de randonnée de Toni Mancini."),
    };
  }

  // 2. Check for À la carte page
  if (slug === 'ski-de-randonnee-engagement-prive') {
    const aLaCarte = await client.fetch(aLaCarteQuery).catch(() => null);
    if (aLaCarte) {
      return {
        title: `${at(aLaCarte.seoTitle || aLaCarte.title)} | ÉvasionSki`,
        description: at(aLaCarte.seoDescription || aLaCarte.description || ''),
        openGraph: aLaCarte.heroImage ? { images: [{ url: aLaCarte.heroImage }] } : undefined,
      };
    }
  }

  // 3. Dynamic content checks
  let sejour = null;
  let post = null;

  try {
    const [fetchedSejour, fetchedPost] = await Promise.all([
      client.fetch(sejourBySlugQuery, { slug }).catch(() => null),
      client.fetch(postBySlugQuery, { slug }).catch(() => null),
    ]);
    sejour = fetchedSejour;
    post = fetchedPost;
  } catch (err) {
    console.error("Sanity query error in generateMetadata:", err);
  }

  if (sejour && fallbackSejours[slug]) {
    sejour = {
      ...fallbackSejours[slug],
      ...sejour,
      intro: sejour.intro && sejour.intro.length > 0 ? sejour.intro : fallbackSejours[slug].intro,
    };
  } else if (!sejour && fallbackSejours[slug]) {
    sejour = fallbackSejours[slug];
  }

  if (sejour) {
    return {
      title: `${at(sejour.seoTitle || sejour.title)} | ÉvasionSki`,
      description: at(sejour.seoDescription || sejour.description || '').substring(0, 160),
      openGraph: sejour.image ? { images: [{ url: sejour.image }] } : undefined,
    };
  }

  if (post) {
    return {
      title: `${at(post.title)} | ÉvasionSki`,
      description: post.excerpt ? at(post.excerpt) : '',
      openGraph: post.image ? { images: [{ url: post.image }], type: 'article' } : undefined,
    };
  }

  return {};
}

export default async function DynamicSlugPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const sParams = await searchParams;

  // 1. Hardcoded slug handlers
  if (slug === 'a-propos-moniteur-de-ski-de-randonnee') {
    let guide = null;
    let settings = null;
    try {
      [guide, settings] = await Promise.all([
        client.fetch(guideQuery).catch(() => null),
        client.fetch(settingsQuery).catch(() => null)
      ]);
    } catch (e) {
      console.error(e);
    }
    return <AboutView guide={guide} settings={settings} />;
  }

  if (slug === 'evasion-ski-hautes-alpes-contact') {
    let contact = null;
    let faqs = [];
    try {
      [contact, faqs] = await Promise.all([
        client.fetch(contactQuery).catch(() => null),
        client.fetch(faqsQuery).catch(() => [])
      ]);
    } catch (e) {
      console.error(e);
    }
    return <ContactView contact={contact} faqs={faqs} />;
  }

  if (slug === 'niveau-en-ski') {
    return <NiveauView />;
  }

  if (
    slug === 'mentions-legales' ||
    slug === 'confidentialite' ||
    slug === 'politique-de-confidentialite' ||
    slug === 'cgv' ||
    slug === 'conditions-generales-de-vente'
  ) {
    return <LegalView slug={slug} />;
  }

  if (slug === 'blog-explorez-les-hautes-alpes-a-ski') {
    const category = typeof sParams.category === 'string' ? sParams.category : undefined;
    const massif = typeof sParams.massif === 'string' ? sParams.massif : undefined;
    const pageNumber = Math.max(1, Number(sParams.page) || 1);
    const PAGE_SIZE = 50;
    const start = (pageNumber - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    let posts = [];
    let total = 0;
    let categories = [];
    let massifs = [];

    try {
      const [postsData, categoriesData, massifsData] = await Promise.all([
        client.fetch(postsPageQuery, { start, end, category: category ?? null, massif: massif ?? null }).catch(() => ({ posts: [], total: 0 })),
        client.fetch(categoryTagsQuery).catch(() => []),
        client.fetch(massifTagsQuery).catch(() => []),
      ]);
      posts = postsData.posts;
      total = postsData.total;
      categories = categoriesData;
      massifs = massifsData;
    } catch (e) {
      console.error(e);
    }

    const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

    return (
      <BlogView
        posts={posts}
        total={total}
        categories={categories}
        massifs={massifs}
        activeCategory={category}
        activeMassif={massif}
        pageNumber={pageNumber}
        totalPages={totalPages}
      />
    );
  }

  // 2. Check for À la carte page
  if (slug === 'ski-de-randonnee-engagement-prive') {
    const aLaCarte = await client.fetch(aLaCarteQuery).catch(() => null);
    // TODO: Create AlaCarteView component or use fallback
    if (aLaCarte) {
      // Pour l'instant, on redirige vers la page de contact ou on affiche un message
      // Tu devras créer un composant AlaCarteView plus tard
      return (
        <main className="relative pt-32 min-h-screen">
          <div className="container mx-auto px-6 py-20">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-gradient">
              {aLaCarte.heroTitle || aLaCarte.title}
            </h1>
            <p className="text-foreground/60 text-lg mb-8">{aLaCarte.heroSubtitle}</p>
            <p className="text-foreground/80 mb-8">{aLaCarte.description}</p>
            <a href="/evasion-ski-hautes-alpes-contact" className="btn-primary inline-block">
              {aLaCarte.ctaText || "Me contacter"}
            </a>
          </div>
        </main>
      );
    }
  }

  // 3. Dynamic content checks
  let sejour = null;
  let post = null;

  try {
    const [fetchedSejour, fetchedPost] = await Promise.all([
      client.fetch(sejourBySlugQuery, { slug }).catch(() => null),
      client.fetch(postBySlugQuery, { slug }).catch(() => null),
    ]);
    sejour = fetchedSejour;
    post = fetchedPost;
  } catch (err) {
    console.error("Sanity query error in DynamicSlugPage:", err);
  }

  if (sejour && fallbackSejours[slug]) {
    sejour = {
      ...fallbackSejours[slug],
      ...sejour,
      intro: sejour.intro && sejour.intro.length > 0 ? sejour.intro : fallbackSejours[slug].intro,
      essentiel: sejour.essentiel && sejour.essentiel.length > 0 ? sejour.essentiel : fallbackSejours[slug].essentiel,
      programme: sejour.programme && sejour.programme.length > 0 ? sejour.programme : fallbackSejours[slug].programme,
      materiel: sejour.materiel && sejour.materiel.length > 0 ? sejour.materiel : fallbackSejours[slug].materiel,
      inclus: sejour.inclus && sejour.inclus.length > 0 ? sejour.inclus : fallbackSejours[slug].inclus,
      faqs: sejour.faqs && sejour.faqs.length > 0 ? sejour.faqs : fallbackSejours[slug].faqs,
    };
  } else if (!sejour && fallbackSejours[slug]) {
    sejour = fallbackSejours[slug];
  }

  // If slug matches a Sejour (trip)
  if (sejour) {
    // Fetch related posts for sidebar/footer
    let directPosts = [];
    try {
      directPosts = sejour._id
        ? await client.fetch(postsBySejourQuery, { sejourId: sejour._id }).catch(() => [])
        : [];
    } catch (e) {
      // Ignored
    }
    const relatedPosts = directPosts.slice(0, 6);

    return <SejourView sejour={sejour} relatedPosts={relatedPosts} />;
  }

  // If slug matches a Blog Post
  if (post) {
    return <BlogDetailView post={post} />;
  }

  // 4. Fallback to 404
  notFound();
}
