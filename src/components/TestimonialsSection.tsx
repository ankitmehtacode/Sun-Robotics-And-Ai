import { useEffect, useState, useRef } from 'react';

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

        {/* Coming Soon */}
        <div className={`text-center transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-2xl mx-auto">
            <div className="text-6xl mb-8 animate-float">🏢</div>
            <p className="text-xl text-foreground/80 mb-8">
              Industry leader partnerships and testimonials will be showcased here soon.
            </p>
            <div className="text-foreground/60">
              Stay tuned for success stories from our enterprise clients.
            </div>
          </div>
        </div>

        {/* Industry Stats */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">Global</div>
            <div className="text-foreground/70">Reach</div>
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
