import { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Play, Quote } from 'lucide-react';

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      company: "Tesla Manufacturing",
      industry: "Automotive",
      testimonial: "Sun Robotics transformed our production line efficiency by 47%. The AI-powered precision is unmatched.",
      author: "Sarah Chen",
      role: "Head of Operations",
      rating: 5,
      image: "🚗",
      metric: "+47% Efficiency"
    },
    {
      company: "Amazon Logistics",
      industry: "E-commerce",
      testimonial: "Their multipurpose robots revolutionized our warehouse operations. 24/7 reliability with zero downtime.",
      author: "Michael Rodriguez",
      role: "Logistics Director",
      rating: 5,
      image: "📦",
      metric: "Zero Downtime"
    },
    {
      company: "Siemens Industrial",
      industry: "Manufacturing",
      testimonial: "The predictive maintenance system prevented $2M in potential losses. Outstanding ROI in just 6 months.",
      author: "Dr. Emma Thompson",
      role: "CTO",
      rating: 5,
      image: "⚙️",
      metric: "$2M Saved"
    },
    {
      company: "Boeing Aerospace",
      industry: "Aerospace",
      testimonial: "Precision beyond our expectations. The AI vision system detected defects we couldn't see manually.",
      author: "James Park",
      role: "Quality Assurance Lead",
      rating: 5,
      image: "✈️",
      metric: "99.8% Accuracy"
    },
    {
      company: "Mayo Clinic",
      industry: "Healthcare",
      testimonial: "Collaborative robots assist our surgeons with incredible precision. Patient outcomes improved significantly.",
      author: "Dr. Lisa Wang",
      role: "Chief Medical Officer",
      rating: 5,
      image: "🏥",
      metric: "Enhanced Precision"
    },
    {
      company: "Walmart Supply Chain",
      industry: "Retail",
      testimonial: "Autonomous inventory management reduced costs by 35% while improving accuracy to near perfection.",
      author: "Robert Kim",
      role: "Supply Chain VP",
      rating: 5,
      image: "🛒",
      metric: "-35% Costs"
    }
  ];

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-secondary/10 to-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-primary font-semibold text-lg tracking-wide mb-4 block">SUCCESS STORIES</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-hero">Trusted by</span>
            <br />
            <span className="text-glow">Industry Leaders</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Real results from real companies who've transformed their operations 
            with our AI-powered robotics solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`glass-card border-border/30 transition-all duration-700 delay-${index * 100} hover:scale-105 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <CardContent className="p-8">
                {/* Company & Industry */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{testimonial.image}</div>
                    <div>
                      <h3 className="font-bold text-foreground">{testimonial.company}</h3>
                      <p className="text-sm text-foreground/60">{testimonial.industry}</p>
                    </div>
                  </div>
                  
                  {/* Metric */}
                  <div className="glass-card px-3 py-1">
                    <span className="text-primary font-bold text-sm">{testimonial.metric}</span>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/30" />
                  <p className="text-foreground/80 leading-relaxed pl-4">
                    "{testimonial.testimonial}"
                  </p>
                </div>

                {/* Author & Rating */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                  
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                {/* Video Play Button Overlay (for demo) */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                    <Play className="h-5 w-5 text-primary ml-0.5" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industry Stats */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-foreground/70">Global Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-foreground/70">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-foreground/70">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-foreground/70">Global Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;