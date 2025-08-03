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
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Minimalistic Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight font-light tracking-tight">
            Engineering Tomorrow's
            <br />
            <span className="text-glow font-normal">Intelligence</span>
          </h1>

          {/* Enhanced Subheadline */}
          <p className="text-2xl md:text-3xl text-foreground/90 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Robotics and IT solutions that power the future of intelligent automation
          </p>

          {/* Ultra-premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20">
            <Button size="lg" onClick={() => scrollToSection('demo')} className="btn-hero text-xl px-12 py-8 group relative overflow-hidden">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Explore Demo
            </Button>
          </div>

          {/* Ultra-premium Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="text-5xl font-black text-primary mb-4 group-hover:animate-glow">500+</div>
              <div className="text-foreground/80 text-lg font-medium">Robots Deployed</div>
            </div>
            <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="text-5xl font-black text-primary mb-4 group-hover:animate-glow">99.9%</div>
              <div className="text-foreground/80 text-lg font-medium">Uptime Guarantee</div>
            </div>
            <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-500">
              <div className="text-5xl font-black text-primary mb-4 group-hover:animate-glow">24/7</div>
              <div className="text-foreground/80 text-lg font-medium">AI Monitoring</div>
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