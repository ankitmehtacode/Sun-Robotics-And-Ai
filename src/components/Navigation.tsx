import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X, Send } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import logo from '@/assets/sun-robotics-logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border/20 shadow-xl' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer">
            <img 
              src={logo} 
              alt="Sun Robotics & AI" 
              className="h-10 sm:h-14 w-auto transition-all duration-300 group-hover:scale-105 drop-shadow-lg"
            />
          </div>

          {/* Mobile Navigation Bar - Simple Layout */}
          <div className="flex md:hidden items-center space-x-2">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-xs font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('industrial')}
              className="text-xs font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
            >
              Robotics
            </button>
            <button 
              onClick={() => scrollToSection('it-solutions')}
              className="text-xs font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
            >
              IT
            </button>
            <button 
              onClick={() => scrollToSection('showcase')}
              className="text-xs font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
            >
              Products
            </button>
          </div>

          {/* Desktop Navigation - Premium */}
          <div className="hidden md:flex items-center space-x-10">
            <button 
              onClick={() => scrollToSection('hero')}
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-glow transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-all duration-300 font-medium group">
                Robotics <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-glow transition-all duration-300 group-hover:w-full"></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-card border-border/50">
                <DropdownMenuItem onClick={() => scrollToSection('industrial')}>
                  Industrial Robots
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('multipurpose')}>
                  Multipurpose Robots
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('ai-brain')}>
                  AI Intelligence
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button 
              onClick={() => scrollToSection('it-solutions')}
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group"
            >
              IT Solutions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-glow transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            <button 
              onClick={() => scrollToSection('showcase')}
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group"
            >
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-glow transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-glow transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          {/* Premium CTA Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('demo')}
              className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 font-medium"
            >
              Demo
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="btn-hero text-foreground hover:text-primary-foreground font-semibold px-6 py-2 group"
            >
              <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;