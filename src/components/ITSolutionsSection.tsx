import { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code2, Database, Cloud, BarChart3, ArrowRight } from 'lucide-react';
import datacenterImage from '@/assets/datacenter.jpg';

const ITSolutionsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const services = [
    {
      icon: Code2,
      title: "Custom Enterprise APIs",
      description: "Scalable backend solutions designed for robotics integration",
      features: ["REST & GraphQL APIs", "Real-time WebSocket connections", "Microservices architecture"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: BarChart3,
      title: "AI-Powered Dashboards",
      description: "Intelligent analytics and monitoring for robotic operations",
      features: ["Real-time KPI tracking", "Predictive analytics", "Custom visualizations"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Cloud,
      title: "Cloud & IoT Integration",
      description: "Seamless connectivity for distributed robotic systems",
      features: ["Edge computing", "Multi-cloud deployment", "IoT device management"],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Database,
      title: "Predictive Maintenance",
      description: "ML-driven systems that prevent downtime before it happens",
      features: ["Anomaly detection", "Performance optimization", "Automated reporting"],
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="it-solutions" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={datacenterImage} 
          alt="Modern datacenter with glowing servers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60"></div>
      </div>

      {/* Animated circuit pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, hsl(195, 100%, 50%) 2px, transparent 2px),
            linear-gradient(0deg, hsl(195, 100%, 50%) 2px, transparent 2px)
          `,
          backgroundSize: '60px 60px',
          animation: 'pulse 4s ease-in-out infinite'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-primary font-semibold text-lg tracking-wide mb-4 block">IT SOLUTIONS</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-hero">Enterprise-Grade IT</span>
            <br />
            <span className="text-glow">for Smart Industries</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Custom APIs, Automation Systems, Cloud Robotics, and ML-Driven Dashboards 
            that power the next generation of intelligent operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`glass-card border-border/30 transition-all duration-700 delay-${index * 100} cursor-pointer group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-8">
                {/* Service Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 bg-gradient-to-br ${service.color} ${
                  hoveredCard === index ? 'scale-110 shadow-lg' : ''
                }`}>
                  <service.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Service Title & Description */}
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className={`flex items-center text-foreground/70 transition-all duration-300 delay-${featureIndex * 100} ${
                        hoveredCard === index ? 'translate-x-2' : ''
                      }`}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className={`flex items-center text-primary font-semibold transition-all duration-300 ${
                  hoveredCard === index ? 'translate-x-2' : ''
                }`}>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className={`glass-card p-8 mb-12 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Our Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 text-center">
            {['React', 'Node.js', 'Python', 'Docker', 'Kubernetes', 'AWS', 'TensorFlow', 'PostgreSQL'].map((tech, index) => (
              <div 
                key={index}
                className="glass-card p-4 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-primary font-semibold">{tech}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="btn-hero text-lg px-12 py-6 group"
          >
            Let's Talk Tech
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ITSolutionsSection;