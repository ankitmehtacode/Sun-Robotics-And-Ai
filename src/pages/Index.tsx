import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import IndustrialSection from '@/components/IndustrialSection';
import MultipurposeSection from '@/components/MultipurposeSection';
import AIBrainSection from '@/components/AIBrainSection';
import ITSolutionsSection from '@/components/ITSolutionsSection';
import ProductShowcase from '@/components/ProductShowcase';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  useEffect(() => {
    // Optimized scroll reveal functionality with performance improvements
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px 50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Use requestAnimationFrame for smoother animations
          requestAnimationFrame(() => {
            entry.target.classList.add('revealed');
          });
          // Stop observing once revealed to improve performance
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Use more efficient selector and reduce DOM queries
    const scrollElements = document.querySelectorAll('.scroll-reveal:not(.revealed)');
    scrollElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <IndustrialSection />
      <MultipurposeSection />
      <AIBrainSection />
      <ITSolutionsSection />
      <ProductShowcase />
      <TestimonialsSection />
      <CTASection />
      <BackToTop />
    </div>
  );
};

export default Index;
