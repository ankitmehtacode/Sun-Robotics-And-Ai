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

const Index = () => {
  useEffect(() => {
    // Add scroll reveal functionality
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-reveal');
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
    </div>
  );
};

export default Index;
