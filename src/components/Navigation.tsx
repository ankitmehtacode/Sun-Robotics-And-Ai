import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      isScrolled 
        ? 'nav-glass shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Premium Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center shadow-glow transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
              <span className="text-primary-foreground font-black text-xl">S</span>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-ultra to-primary rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>
            <div className="transition-all duration-500 group-hover:translate-x-1">
              <h1 className="text-2xl font-black text-foreground bg-gradient-to-r from-foreground to-primary bg-clip-text">Sun Robotics</h1>
              <p className="text-sm text-primary font-bold tracking-wider">& AI</p>
            </div>
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
              className="btn-hero text-foreground hover:text-primary-foreground font-semibold px-6 py-2"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-card rounded-lg p-6">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('industrial')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Industrial Robots
              </button>
              <button 
                onClick={() => scrollToSection('multipurpose')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Multipurpose Robots
              </button>
              <button 
                onClick={() => scrollToSection('it-solutions')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                IT Solutions
              </button>
              <button 
                onClick={() => scrollToSection('showcase')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Products
              </button>
              <div className="pt-4 border-t border-border/50">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full btn-hero text-foreground hover:text-primary-foreground"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;