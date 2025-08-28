import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import IndustrialSection from "@/components/IndustrialSection";
import ITSolutionsSection from "@/components/ITSolutionsSection";
import ProductShowcase from "@/components/ProductShowcase";
import AIBrainSection from "@/components/AIBrainSection";
import MultipurposeSection from "@/components/MultipurposeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import BackToTop from "@/components/BackToTop";

export default function Index() {
  // Ensure smooth scrolling (matches original behaviour)
  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = prev || "auto";
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Top Navigation (sticky) */}
      <Navigation />

      {/* Main site sections - keep original ordering and let components handle their own animations */}
      <main className="flex-grow">
        <HeroSection />
        <IndustrialSection />
        <ITSolutionsSection />
        <ProductShowcase />
        <AIBrainSection />
        <MultipurposeSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      {/* Small utility components */}
      <BackToTop />

      {/* Minimal footer that preserves original styling; update content if you want a custom footer file */}
      <footer className="py-8 text-center border-t border-border/10 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Sun Robotics &amp; AI — All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
