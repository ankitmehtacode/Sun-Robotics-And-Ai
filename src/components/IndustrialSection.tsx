import { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Shield, Clock, Wrench } from 'lucide-react';
import industrialImage from '@/assets/industrial-robot-premium.jpg';

const IndustrialSection = () => {
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

  const features = [
    {
      icon: Zap,
      title: "Ultimate Power",
      description: "Industrial-grade performance with precision engineering for the most demanding applications"
    },
    {
      icon: Shield,
      title: "Unmatched Accuracy",
      description: "Sub-millimeter precision with advanced sensor fusion and real-time error correction"
    },
    {
      icon: Clock,
      title: "Maximum Uptime",
      description: "99.9% operational reliability with predictive maintenance and self-diagnostics"
    },
    {
      icon: Wrench,
      title: "Easy Integration",
      description: "Seamless deployment into existing workflows with minimal downtime"
    }
  ];

  return (
    <section 
      id="industrial" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={industrialImage} 
          alt="Industrial welding robot"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          <div className="mb-6">
            <span className="text-primary font-semibold text-lg tracking-wide">INDUSTRIAL ROBOTICS</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-hero">Power.</span>
            <br />
            <span className="text-hero">Accuracy.</span>
            <br />
            <span className="text-glow">Unmatched Uptime.</span>
          </h2>

          <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
            Transform your manufacturing with AI-powered industrial robots that deliver 
            precision, reliability, and efficiency at unprecedented scales.
          </p>

          <div className="grid grid-cols-1 gap-4">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`glass-card border-border/30 transition-all duration-700 delay-${(index + 1) * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-foreground/70">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interactive Visual Element */}
        <div className={`hidden lg:block transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}>
          <div className="relative">
            {/* Animated overlay stats */}
            <div className="absolute top-8 right-8 glass-card p-4 animate-float">
              <div className="text-2xl font-bold text-primary">47%</div>
              <div className="text-sm text-foreground/70">Efficiency Boost</div>
            </div>
            
            <div className="absolute bottom-8 left-8 glass-card p-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-foreground/70">Operation</div>
            </div>
            
            <div className="absolute top-1/2 right-16 glass-card p-4 animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-2xl font-bold text-primary">±0.1mm</div>
              <div className="text-sm text-foreground/70">Precision</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialSection;