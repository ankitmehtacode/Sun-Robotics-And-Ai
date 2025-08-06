import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const updateCurrentSection = () => {
      const sections = ['hero', 'industrial', 'multipurpose', 'ai-brain', 'it-solutions', 'showcase', 'testimonials', 'contact'];
      const scrollPosition = window.pageYOffset + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(sections[i]);
          break;
        }
      }
    };

    const handleScroll = () => {
      toggleVisibility();
      updateCurrentSection();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'multipurpose', label: 'Multipurpose' },
    { id: 'ai-brain', label: 'AI Brain' },
    { id: 'it-solutions', label: 'IT Solutions' },
    { id: 'showcase', label: 'Products' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'contact', label: 'Contact' }
  ];

  const currentIndex = sections.findIndex(section => section.id === currentSection);

  return (
    <>
      {/* Back to top button */}
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 btn-hero h-12 w-12 rounded-full p-0 shadow-glow"
          aria-label="Back to top"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}

      {/* Section navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-3">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`group relative w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === section.id 
                ? 'bg-primary scale-125 shadow-glow' 
                : 'bg-foreground/30 hover:bg-foreground/50'
            }`}
            aria-label={`Go to ${section.label}`}
          >
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-foreground/90 text-background px-2 py-1 rounded text-xs whitespace-nowrap">
                {section.label}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Previous/Next section navigation */}
      {isVisible && (
        <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4">
          {currentIndex > 0 && (
            <Button
              onClick={() => scrollToSection(sections[currentIndex - 1].id)}
              variant="outline"
              size="sm"
              className="glass-card border-primary/30 hover:bg-primary/10 group"
              aria-label={`Previous: ${sections[currentIndex - 1].label}`}
            >
              <ChevronUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          )}
          {currentIndex < sections.length - 1 && (
            <Button
              onClick={() => scrollToSection(sections[currentIndex + 1].id)}
              variant="outline"
              size="sm"
              className="glass-card border-primary/30 hover:bg-primary/10 group"
              aria-label={`Next: ${sections[currentIndex + 1].label}`}
            >
              <ChevronUp className="h-4 w-4 rotate-180 group-hover:translate-y-0.5 transition-transform" />
            </Button>
          )}
        </div>
      )}
    </>
  );
};

export default BackToTop;