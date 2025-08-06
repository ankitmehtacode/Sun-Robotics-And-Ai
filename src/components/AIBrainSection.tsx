import { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Eye, Zap, Network } from 'lucide-react';
import aiBrainImage from '@/assets/ai-brain-hd.jpg';

const AIBrainSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFlow, setActiveFlow] = useState(0);
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveFlow((prev) => (prev + 1) % 4);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const flowSteps = [
    {
      icon: Eye,
      title: "Sensing",
      description: "Multi-modal sensor fusion",
      details: "Computer vision, LIDAR, ultrasonic sensors"
    },
    {
      icon: Brain,
      title: "AI Computation", 
      description: "Neural network processing",
      details: "Deep learning, pattern recognition"
    },
    {
      icon: Zap,
      title: "Action",
      description: "Real-time decision execution",
      details: "Motor control, actuator commands"
    },
    {
      icon: Network,
      title: "Feedback",
      description: "Continuous learning loop",
      details: "Performance optimization, adaptation"
    }
  ];

  return (
    <section 
      id="ai-brain" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={aiBrainImage} 
          alt="AI neural network visualization"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background/90 via-background/50 to-background/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Interactive Flow Diagram */}
        <div className={`order-2 lg:order-1 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          <div className="relative bg-gradient-to-br from-secondary/20 to-transparent p-8 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-8 text-center text-glow">Intelligence Engine</h3>
            
            {/* Flow Steps */}
            <div className="space-y-6">
              {flowSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`glass-card p-6 transition-all duration-500 ${
                    activeFlow === index 
                      ? 'border-primary/60 shadow-lg shadow-primary/20 scale-105' 
                      : 'border-border/30'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-500 ${
                      activeFlow === index 
                        ? 'bg-primary text-primary-foreground shadow-glow' 
                        : 'bg-primary/20 text-primary'
                    }`}>
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground">{step.title}</h4>
                      <p className="text-foreground/70">{step.description}</p>
                      {activeFlow === index && (
                        <p className="text-sm text-primary mt-1 animate-slide-up">{step.details}</p>
                      )}
                    </div>
                    {activeFlow === index && (
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    )}
                  </div>
                  
                  {/* Flow arrow */}
                  {index < flowSteps.length - 1 && (
                    <div className="flex justify-center mt-4">
                      <div className={`w-0.5 h-6 transition-all duration-500 ${
                        activeFlow === index ? 'bg-primary animate-glow' : 'bg-border'
                      }`}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Connecting lines animation */}
            <div className="absolute right-0 top-1/2 transform translate-x-8 -translate-y-1/2 hidden lg:block">
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={`order-1 lg:order-2 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}>
          <div className="mb-6">
            <span className="text-primary font-semibold text-lg tracking-wide">AI INTELLIGENCE</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-hero">Robots That</span>
            <br />
            <span className="text-glow">Learn in Real Time</span>
          </h2>

          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            Our advanced neural networks enable robots to perceive, understand, 
            and adapt to their environment with human-like intelligence and beyond.
          </p>

          {/* AI Capabilities */}
          <div className="space-y-4 mb-8">
            <Card className="glass-card border-border/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">Processing Speed</h4>
                    <p className="text-foreground/70">Real-time inference</p>
                  </div>
                  <div className="text-2xl font-bold text-primary">0.8ms</div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">Learning Rate</h4>
                    <p className="text-foreground/70">Continuous adaptation</p>
                  </div>
                  <div className="text-2xl font-bold text-primary">24/7</div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">Accuracy Rate</h4>
                    <p className="text-foreground/70">Object recognition</p>
                  </div>
                  <div className="text-2xl font-bold text-primary">99.7%</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Neural Network Visualization */}
          <div className="relative p-6 glass-card rounded-xl">
            <h4 className="text-lg font-semibold mb-4 text-foreground">Neural Architecture</h4>
            <div className="flex items-center justify-between">
              {['Input Layer', 'Hidden Layers', 'Output Layer'].map((layer, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center mb-2 ${
                    activeFlow === index ? 'bg-primary/20 border-primary animate-pulse' : ''
                  }`}>
                    <div className="w-8 h-8 bg-primary rounded-full opacity-60"></div>
                  </div>
                  <p className="text-xs text-foreground/70">{layer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBrainSection;