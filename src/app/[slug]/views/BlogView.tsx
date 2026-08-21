import React from 'react';
import BlogCard from "@/components/BlogCard";
import BlogFilters from "@/components/BlogFilters";
import Pagination from "@/components/Pagination";
import { getServerTranslations } from '@/i18n/server';

interface BlogViewProps {
  posts: any[];
  total: number;
  categories: any[];
  massifs: any[];
  activeCategory?: string;
  activeMassif?: string;
  pageNumber: number;
  totalPages: number;
}

export default async function BlogView({
  posts,
  total,
  categories,
  massifs,
  activeCategory,
  activeMassif,
  pageNumber,
  totalPages,
}: BlogViewProps) {
  const { at } = await getServerTranslations();

  return (
    <div className="relative pt-32 min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mb-12">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-r from-foreground to-foreground/40 bg-clip-text text-transparent uppercase">
            {at('BLOG')}
          </h1>
          <p className="text-xl text-foreground/60 leading-relaxed max-w-2xl">
            {at("Retrouvez mes derniers récits d'aventures, conseils techniques et actualités de la montagne.")}
          </p>
        </div>

        <BlogFilters
          categories={categories}
          massifs={massifs}
          activeCategory={activeCategory}
          activeMassif={activeMassif}
        />

        {posts && posts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
            <Pagination
              currentPage={pageNumber}
              totalPages={totalPages}
              basePath="/blog-explorez-les-hautes-alpes-a-ski"
              category={activeCategory}
              massif={activeMassif}
            />
          </>
        ) : (activeCategory || activeMassif) ? (
          <div className="glass p-12 rounded-[2rem] text-center border border-border">
            <h3 className="text-3xl font-bold mb-4">{at('Aucun article ne correspond à ces filtres')}</h3>
            <p className="text-foreground/40">{at('Essayez une autre catégorie ou un autre massif.')}</p>
          </div>
        ) : (
          <div className="glass p-12 rounded-[2rem] text-center border border-border">
            <div className="text-accent text-sm font-bold mb-4 tracking-[0.2em]">{at('PROCHAINEMENT')}</div>
            <h3 className="text-3xl font-bold mb-4">{at('Articles en cours de rédaction')}</h3>
            <p className="text-foreground/40">{at('Revenez bientôt pour découvrir les premières histoires.')}</p>
          </div>
        )}
      </div>
    </div>
  );
}
