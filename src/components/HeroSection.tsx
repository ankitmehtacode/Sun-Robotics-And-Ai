import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-robot-lab-premium.jpg';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Ultra-cinematic Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Advanced robotics laboratory" className="w-full h-full object-cover scale-110 transition-transform duration-20000" />
        <div className="absolute inset-0 video-overlay"></div>
        
        {/* Ultra-dramatic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-transparent to-primary/20 animate-glow"></div>
        
        {/* Additional atmospheric layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent"></div>
      </div>

      {/* Premium floating particles effect */}
      <div className="particle-field">
        {[...Array(30)].map((_, i) => <div key={i} className="particle" style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${8 + Math.random() * 4}s`
      }} />)}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Minimalistic Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 leading-tight font-light tracking-tight">
            Engineering Tomorrow's
            <br className="hidden sm:block" />
            <span className="block sm:inline text-glow font-normal">Intelligence</span>
          </h1>

          {/* Enhanced Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed font-light px-2 sm:px-0">
            Robotics and IT solutions that power the future of intelligent automation
          </p>

          {/* Ultra-premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
            <Button size="lg" onClick={() => scrollToSection('demo')} className="btn-hero text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 group relative overflow-hidden w-full sm:w-auto max-w-xs sm:max-w-none">
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
              Explore Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('contact')} 
              className="sm:hidden text-lg px-8 py-6 w-full max-w-xs border-primary/30 text-primary hover:bg-primary/10"
            >
              Contact Us
            </Button>
          </div>

          {/* Ultra-premium Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-5xl mx-auto px-2 sm:px-0">
            <div className="glass-card p-6 sm:p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="text-4xl sm:text-5xl font-black text-primary mb-3 sm:mb-4 group-hover:animate-glow">500+</div>
              <div className="text-foreground/80 text-base sm:text-lg font-medium">Robots Deployed</div>
            </div>
            <div className="glass-card p-6 sm:p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="text-4xl sm:text-5xl font-black text-primary mb-3 sm:mb-4 group-hover:animate-glow">99.9%</div>
              <div className="text-foreground/80 text-base sm:text-lg font-medium">Uptime Guarantee</div>
            </div>
            <div className="glass-card p-6 sm:p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="text-4xl sm:text-5xl font-black text-primary mb-3 sm:mb-4 group-hover:animate-glow">24/7</div>
              <div className="text-foreground/80 text-base sm:text-lg font-medium">AI Monitoring</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="relative">
          <ChevronDown className="h-10 w-10 text-primary/80" />
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;