import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { SearchSection } from "@/components/landing/search-section";
import { CategoriesSection } from "@/components/landing/categories-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { FeaturedSpacesSection } from "@/components/landing/featured-spaces-section";
import { HostSection } from "@/components/landing/host-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { PlatformPreviewSection } from "@/components/landing/platform-preview-section";
import { CtaSection } from "@/components/landing/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SearchSection />
        <div id="categories">
          <CategoriesSection />
        </div>
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        <FeaturedSpacesSection />
        <div id="host">
          <HostSection />
        </div>
        <TestimonialsSection />
        <PlatformPreviewSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
