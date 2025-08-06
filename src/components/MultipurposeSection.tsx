import { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package, Camera, Navigation, Cpu } from 'lucide-react';
import multipurposeImage from '@/assets/multipurpose-robot-hd.jpg';

const MultipurposeSection = () => {
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

  const capabilities = [
    {
      icon: Package,
      title: "Autonomous Delivery",
      description: "Smart navigation and package handling",
      metric: "15km/h"
    },
    {
      icon: Camera,
      title: "Computer Vision",
      description: "Real-time object detection and recognition",
      metric: "95% accuracy"
    },
    {
      icon: Navigation,
      title: "Path Planning",
      description: "Dynamic route optimization",
      metric: "360° awareness"
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "On-device AI processing",
      metric: "< 10ms latency"
    }
  ];

  return (
    <section 
      id="multipurpose" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background to-secondary/20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(195, 100%, 50%) 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, hsl(195, 100%, 50%) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Visual Element */}
        <div className={`order-2 lg:order-1 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          <div className="relative">
            <img 
              src={multipurposeImage} 
              alt="Multipurpose AI robot"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            
            {/* Floating capability indicators */}
            <div className="absolute -top-4 -right-4 glass-card p-3 animate-float">
              <Package className="h-6 w-6 text-primary" />
            </div>
            
            <div className="absolute top-1/2 -left-4 glass-card p-3 animate-float" style={{ animationDelay: '1s' }}>
              <Camera className="h-6 w-6 text-primary" />
            </div>
            
            <div className="absolute -bottom-4 left-1/3 glass-card p-3 animate-float" style={{ animationDelay: '2s' }}>
              <Navigation className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={`order-1 lg:order-2 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}>
          <div className="mb-6">
            <span className="text-primary font-semibold text-lg tracking-wide">MULTIPURPOSE AI</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-hero">One Machine.</span>
            <br />
            <span className="text-glow">Endless Potential.</span>
          </h2>

          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            Adaptive robots that learn, evolve, and excel across multiple domains. 
            From delivery to inspection, our AI systems redefine versatility.
          </p>

          {/* Simplified Capabilities - removed excessive cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className={`flex items-start space-x-4 transition-all duration-700 delay-${(index + 1) * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <capability.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">{capability.title}</h3>
                  <p className="text-sm text-foreground/70 mb-1">{capability.description}</p>
                  <div className="text-primary font-semibold text-sm">{capability.metric}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-hero">
              View Specifications
            </Button>
            <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultipurposeSection;