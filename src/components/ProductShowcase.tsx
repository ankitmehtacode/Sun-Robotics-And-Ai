import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const ProductShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      name: "SunBot Industrial X1",
      application: "Heavy Manufacturing",
      description: "Advanced welding and assembly robot with precision control",
      specs: ["Payload: 500kg", "Reach: 3.2m", "Repeatability: ±0.05mm"],
      image: "🏭",
      bgGradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      name: "SunBot Logistics Pro",
      application: "Warehouse Automation",
      description: "Autonomous mobile robot for inventory and delivery",
      specs: ["Speed: 15km/h", "Payload: 200kg", "Battery: 12h"],
      image: "📦",
      bgGradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      name: "SunBot Vision AI",
      application: "Quality Inspection",
      description: "Computer vision system for defect detection",
      specs: ["Resolution: 4K", "Speed: 100 parts/min", "Accuracy: 99.8%"],
      image: "👁️",
      bgGradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      name: "SunBot Collaborative",
      application: "Human-Robot Interaction",
      description: "Safe collaborative robot for shared workspaces",
      specs: ["Force sensing", "Voice control", "Safety certified"],
      image: "🤝",
      bgGradient: "from-orange-500/20 to-red-500/20"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section 
      id="showcase" 
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-background to-secondary/10"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(195, 100%, 50%) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-primary font-semibold text-lg tracking-wide mb-4 block">PRODUCT SHOWCASE</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-hero">Innovation</span>
            <br />
            <span className="text-glow">in Motion</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Discover our complete range of AI-powered robotics solutions, 
            each engineered for excellence in their respective domains.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Slide */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Card className="glass-card border-border/30 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  {/* Product Visual */}
                  <div className={`relative h-80 lg:h-96 bg-gradient-to-br ${products[currentSlide].bgGradient} flex items-center justify-center`}>
                    <div className="text-8xl animate-float">
                      {products[currentSlide].image}
                    </div>
                    
                    {/* Floating specs */}
                    <div className="absolute top-6 left-6 glass-card p-3 animate-float">
                      <div className="text-primary font-bold">AI Powered</div>
                    </div>
                    
                    <div className="absolute bottom-6 right-6 glass-card p-3 animate-float" style={{ animationDelay: '1s' }}>
                      <div className="text-primary font-bold">Industry 4.0</div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                        {products[currentSlide].application}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 text-foreground">
                      {products[currentSlide].name}
                    </h3>
                    
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {products[currentSlide].description}
                    </p>

                    {/* Specifications */}
                    <div className="space-y-2 mb-8">
                      {products[currentSlide].specs.map((spec, index) => (
                        <div key={index} className="flex items-center text-foreground/70">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {spec}
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button className="btn-hero">
                        View Specs
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
                        Request Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-card p-3 hover:scale-110 transition-transform"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-card p-3 hover:scale-110 transition-transform"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Product Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {products.map((product, index) => (
            <Card 
              key={index}
              className={`glass-card border-border/30 cursor-pointer transition-all duration-300 hover:scale-105 ${
                index === currentSlide ? 'border-primary/60 shadow-glow' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">{product.image}</div>
                <h4 className="font-semibold text-sm text-foreground">{product.name}</h4>
                <p className="text-xs text-foreground/60 mt-1">{product.application}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;