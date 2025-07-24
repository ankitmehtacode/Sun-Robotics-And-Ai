import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-robot-lab.jpg';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Advanced robotics laboratory"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 video-overlay"></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-transparent to-primary/10 animate-glow"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Headline */}
          <h1 className="text-hero text-6xl md:text-8xl lg:text-9xl mb-6">
            Engineering
            <br />
            Tomorrow's
            <br />
            <span className="text-glow">Intelligence</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Robotics and IT solutions that power the future of intelligent automation
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button 
              size="lg"
              onClick={() => scrollToSection('demo')}
              className="btn-hero text-lg px-8 py-6 group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Explore Demo
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="btn-hero border-primary/30 text-lg px-8 py-6 group"
                >
                  Products
                  <ChevronDown className="ml-2 h-5 w-5 group-hover:rotate-180 transition-transform" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-card border-border/50 min-w-64">
                <DropdownMenuItem 
                  onClick={() => scrollToSection('industrial')}
                  className="text-base py-3 hover:bg-primary/10"
                >
                  <div>
                    <div className="font-semibold">Industrial Robotics</div>
                    <div className="text-sm text-muted-foreground">Heavy-duty automation</div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => scrollToSection('multipurpose')}
                  className="text-base py-3 hover:bg-primary/10"
                >
                  <div>
                    <div className="font-semibold">Multipurpose Robots</div>
                    <div className="text-sm text-muted-foreground">Adaptive solutions</div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => scrollToSection('ai-brain')}
                  className="text-base py-3 hover:bg-primary/10"
                >
                  <div>
                    <div className="font-semibold">AI Intelligence</div>
                    <div className="text-sm text-muted-foreground">Neural networks</div>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
              variant="ghost" 
              size="lg"
              onClick={() => scrollToSection('it-solutions')}
              className="text-lg px-8 py-6 group hover:bg-primary/10"
            >
              IT Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-foreground/70">Robots Deployed</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-foreground/70">Uptime Guarantee</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-foreground/70">AI Monitoring</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary/60" />
      </div>
    </section>
  );
};

export default HeroSection;