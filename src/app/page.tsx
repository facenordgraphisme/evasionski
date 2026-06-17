import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PresentationSection from "@/components/PresentationSection";
import ActivitySection from "@/components/ActivitySection";
import AboutSection from "@/components/AboutSection";
import UpcomingSorties from "@/components/UpcomingSorties";
import AdventureStart from "@/components/AdventureStart";
import ContactHome from "@/components/ContactHome";
import Testimonials from "@/components/Testimonials";
import BlogTeaser from "@/components/BlogTeaser";
import Footer from "@/components/Footer";
import PartnersSlider from "@/components/PartnersSlider";

import { client } from "@/sanity/lib/client";
import { homeQuery, sortiesQuery, testimonialsQuery, blogTeaserQuery, activitiesQuery, settingsQuery } from "@/sanity/lib/queries";

import { mockHome, mockSorties, mockTestimonials, mockPosts, mockActivities, mockSettings } from "@/sanity/lib/mockData";

export default async function Home() {
  let homeData = null;
  try {
    homeData = await client.fetch(homeQuery).catch(() => null);
  } catch (e) {
    console.error("Home query failed:", e);
  }
  if (!homeData || !homeData.heroTitle) {
    homeData = mockHome;
  }

  const limit = homeData?.featuredPostsLimit || 3;
  let sortiesData = [];
  let testimonialsData = [];
  let blogTeaserData = [];
  let activitiesData = [];
  let settingsData = null;

  try {
    const [fetchedSorties, fetchedTestimonials, fetchedBlog, fetchedActivities, fetchedSettings] = await Promise.all([
      client.fetch(sortiesQuery).catch(() => []),
      client.fetch(testimonialsQuery).catch(() => []),
      client.fetch(blogTeaserQuery, { limit }).catch(() => []),
      client.fetch(activitiesQuery).catch(() => []),
      client.fetch(settingsQuery).catch(() => null)
    ]);
    sortiesData = fetchedSorties;
    testimonialsData = fetchedTestimonials;
    blogTeaserData = fetchedBlog;
    activitiesData = fetchedActivities;
    settingsData = fetchedSettings;
  } catch (e) {
    console.error("Home related queries failed:", e);
  }

  if (!sortiesData || sortiesData.length === 0) {
    sortiesData = mockSorties;
  }
  if (!testimonialsData || testimonialsData.length === 0) {
    testimonialsData = mockTestimonials;
  }
  if (!blogTeaserData || blogTeaserData.length === 0) {
    blogTeaserData = mockPosts;
  }
  if (!activitiesData || activitiesData.length === 0 || !activitiesData[0]?.title) {
    activitiesData = mockActivities;
  }
  if (!settingsData || !settingsData.siteName) {
    settingsData = mockSettings;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": settingsData?.siteName || "ÉvasionSki | Toni Mancini",
    "image": settingsData?.seoImage || undefined,
    "telephone": settingsData?.phone || undefined,
    "email": settingsData?.email || undefined,
    "address": settingsData?.address ? {
      "@type": "PostalAddress",
      "streetAddress": settingsData.address
    } : undefined,
    "priceRange": "$$",
    "sameAs": [
      settingsData?.instagram,
      settingsData?.facebook,
      settingsData?.youtube
    ].filter(Boolean)
  };

  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero 
        title={homeData?.heroTitle}
        subtitle={homeData?.heroSubtitle}
        description={homeData?.heroDescription}
        images={homeData?.heroImages}
      />
      <div className="space-y-0">
        <PresentationSection />
        <ActivitySection 
          title={homeData?.activitiesTitle}
          titleAccent={homeData?.activitiesTitleAccent}
          description={homeData?.activitiesDescription}
          data={activitiesData}
          className="bg-surface"
        />
        <UpcomingSorties 
          data={sortiesData} 
          badge={homeData?.sortiesBadge}
          title={homeData?.sortiesTitle}
          titleAccent={homeData?.sortiesTitleAccent}
          className="bg-background"
        />
        <AboutSection 
          badge={homeData?.aboutBadge}
          title={homeData?.aboutTitle}
          titleAccent={homeData?.aboutTitleAccent}
          description={homeData?.aboutDescription}
          image={homeData?.aboutImage}
          experience={homeData?.experienceYears}
          className="bg-surface"
        />
        <ContactHome 
          badge={homeData?.contactBadge}
          title={homeData?.contactTitle}
          titleAccent={homeData?.contactTitleAccent}
          description={homeData?.contactDescription}
        />
        <AdventureStart 
          badge={homeData?.adventureBadge}
          title={homeData?.adventureTitle}
          titleAccent={homeData?.adventureTitleAccent}
          description={homeData?.adventureDescription}
          image={homeData?.adventureImage}
          className="bg-surface"
        />
        {!homeData?.hideTestimonials && (
          <Testimonials 
            data={testimonialsData} 
            badge={homeData?.testimonialsBadge}
            title={homeData?.testimonialsTitle}
            titleAccent={homeData?.testimonialsTitleAccent}
            className="bg-background"
          />
        )}
        {!homeData?.hideBlog && (
          <BlogTeaser 
            data={blogTeaserData} 
            badge={homeData?.blogBadge}
            title={homeData?.blogTitle}
            titleAccent={homeData?.blogTitleAccent}
            className="bg-surface"
          />
        )}
        {!settingsData?.hidePartners && (
          <PartnersSlider partners={settingsData?.partners} />
        )}
      </div>
    </main>
  );
}
