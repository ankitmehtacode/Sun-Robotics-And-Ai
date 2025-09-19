import React, { useState, useEffect, useRef, memo, Suspense, lazy } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { ArrowRight, Rocket, Cog, Mail, Phone, MapPin, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';

// Simplified component versions for a single file application.
// In a real-world app, these would live in separate files.

const Navigation = () => (
  <nav className="fixed w-full z-50 py-4 px-6 flex justify-between items-center nav-glass">
    <div className="flex items-center space-x-4">
      <span className="text-xl font-bold text-primary">Sun Robotics & AI</span>
    </div>
    <div className="hidden md:flex space-x-6">
      <a href="#hero" className="hover:text-primary transition-colors">Home</a>
      <a href="#products" className="hover:text-primary transition-colors">Products</a>
      <a href="#services" className="hover:text-primary transition-colors">Services</a>
      <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
    </div>
    <Button variant="outline" className="hidden md:block">Get a Quote</Button>
  </nav>
);

const HeroSection = () => (
  <section id="hero" className="min-h-screen flex items-center justify-center text-center py-20 bg-hero-pattern bg-cover bg-center relative overflow-hidden">
    <div className="relative z-10 p-8">
      <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white text-glow">
        Revolutionizing Industry <br /> with AI & Robotics
      </h1>
      <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto mb-12">
        We build intelligent automation and robotic systems to drive productivity and innovation for your business.
      </p>
      <Button size="lg" className="btn-hero text-lg px-12 py-6">
        Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  </section>
);

const IndustrialSection = () => (
  <section id="industrial" className="py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Industrial Automation</h2>
      <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
        Our industrial robots are engineered for precision and durability, optimizing manufacturing and logistics.
      </p>
    </div>
  </section>
);

const ITSolutionsSection = () => (
  <section id="it-solutions" className="py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">IT Solutions</h2>
      <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
        Harness the power of AI and machine learning to supercharge your data processing and analytics.
      </p>
    </div>
  </section>
);

const ProductShowcase = memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const products = [
    { name: "SunBot Industrial X1", application: "Heavy Manufacturing", description: "Advanced welding and assembly robot with precision control", specs: ["Payload: 500kg", "Reach: 3.2m", "Repeatability: ±0.05mm"], image: "🏭", bgGradient: "from-blue-500/20 to-cyan-500/20" },
    { name: "SunBot Logistics Pro", application: "Warehouse Automation", description: "Autonomous mobile robot for inventory and delivery", specs: ["Speed: 15km/h", "Payload: 200kg", "Battery: 12h"], image: "📦", bgGradient: "from-green-500/20 to-emerald-500/20" },
    { name: "SunBot Vision AI", application: "Quality Inspection", description: "Computer vision system for defect detection", specs: ["Resolution: 4K", "Speed: 100 parts/min", "Accuracy: 99.8%"], image: "👁️", bgGradient: "from-purple-500/20 to-pink-500/20" },
    { name: "SunBot Collaborative", application: "Human-Robot Interaction", description: "Safe collaborative robot for shared workspaces", specs: ["Force sensing", "Voice control", "Safety certified"], image: "🤝", bgGradient: "from-orange-500/20 to-red-500/20" }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % products.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section id="showcase" ref={sectionRef} className="relative py-20 overflow-hidden bg-gradient-to-br from-background to-secondary/10">
      <div className="relative z-10 container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-primary font-semibold text-lg tracking-wide mb-4 block">PRODUCT SHOWCASE</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-hero">Innovation</span><br />
            <span className="text-glow">in Motion</span>
          </h2>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className="glass-card border-border/30 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  <div className={`relative h-80 lg:h-96 bg-gradient-to-br ${products[currentSlide].bgGradient} flex items-center justify-center`}>
                    <div className="text-8xl animate-float">{products[currentSlide].image}</div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                        {products[currentSlide].application}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-foreground">{products[currentSlide].name}</h3>
                    <p className="text-foreground/80 mb-6 leading-relaxed">{products[currentSlide].description}</p>
                    <div className="space-y-2 mb-8">
                      {products[currentSlide].specs.map((spec, index) => (<div key={index} className="flex items-center text-foreground/70"><div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>{spec}</div>))}
                    </div>
                    <div className="flex gap-4">
                      <Button className="btn-hero">View Specs <ArrowRight className="ml-2 h-4 w-4" /></Button>
                      <Button variant="outline" className="border-primary/30 hover:bg-primary/10">Request Demo</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-card p-3 hover:scale-110 transition-transform"><ChevronLeft className="h-6 w-6 text-primary" /></button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-card p-3 hover:scale-110 transition-transform"><ChevronRight className="h-6 w-6 text-primary" /></button>
          <div className="flex justify-center mt-8 space-x-2">
            {products.map((_, index) => (<button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primary scale-125' : 'bg-border hover:bg-primary/50'}`}/>))}
          </div>
        </div>
      </div>
    </section>
  );
});

const AIBrainSection = () => (
  <section id="ai-brain" className="py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">The AI Brain</h2>
      <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
        The core of our systems is a powerful, self-learning AI that adapts to your needs.
      </p>
    </div>
  </section>
);

const MultipurposeSection = () => (
  <section id="multipurpose" className="py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Multipurpose Robotics</h2>
      <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
        Flexible and versatile robots designed for various applications, from research to service.
      </p>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
      <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
        Hear from the businesses we've helped transform with our solutions.
      </p>
    </div>
  </section>
);

const CTASection = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  const scrollToDemo = () => {
    const element = document.getElementById('showcase');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToIT = () => {
    const element = document.getElementById('it-solutions');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="contact" ref={sectionRef} className="relative py-20 overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-hero">Let's Build the</span><br />
            <span className="text-glow">Future Together</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-12">
            Ready to transform your operations with cutting-edge AI robotics? Let's discuss your vision and create tomorrow's solutions today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button size="lg" onClick={scrollToDemo} className="btn-hero text-lg px-12 py-6 group">
              <Rocket className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />Book a Robotics Demo
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToIT} className="btn-hero border-primary/30 text-lg px-12 py-6 group">
              <Cog className="mr-2 h-5 w-5 group-hover:rotate-45 transition-transform" />Explore IT Services
            </Button>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className={`glass-card border-border/30 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} className="bg-secondary/20 border-border/50 focus:border-primary" />
                  <Input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} className="bg-secondary/20 border-border/50 focus:border-primary" />
                </div>
                <Input name="company" placeholder="Company Name" value={formData.company} onChange={handleInputChange} className="bg-secondary/20 border-border/50 focus:border-primary" />
                <Textarea name="message" placeholder="Tell us about your project or requirements..." rows={4} value={formData.message} onChange={handleInputChange} className="bg-secondary/20 border-border/50 focus:border-primary resize-none" />
                <Button type="submit" className="w-full btn-hero group">
                  Send Message<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Contact Information</h3>
            <div className="space-y-6 mb-8">
              <Card className="glass-card border-border/30 hover:scale-105 transition-transform">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center"><Mail className="h-6 w-6 text-primary" /></div>
                  <div><h4 className="font-semibold text-foreground">Email</h4><p className="text-foreground/70">sunroboticsandai@gmail.com</p></div>
                </CardContent>
              </Card>
              <Card className="glass-card border-border/30 hover:scale-105 transition-transform">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center"><Phone className="h-6 w-6 text-primary" /></div>
                  <div><h4 className="font-semibold text-foreground">Phone</h4><p className="text-foreground/70">+91 8144426440</p></div>
                </CardContent>
              </Card>
              <Card className="glass-card border-border/30 hover:scale-105 transition-transform">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center"><MapPin className="h-6 w-6 text-primary" /></div>
                  <div><h4 className="font-semibold text-foreground">Location</h4><p className="text-foreground/70">Indraprastha Tower,Rau Indore</p></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

const BackToTop = () => (
  <div className="fixed bottom-4 right-4 z-50">
    <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="glass-card p-3"><ArrowRight className="h-6 w-6 rotate-[-90deg]" /></Button>
  </div>
);

const App = () => (
  <div className="bg-black text-white min-h-screen flex flex-col">
    <Navigation />
    <main className="flex-grow">
      <HeroSection />
      <IndustrialSection />
      <ITSolutionsSection />
      <ProductShowcase />
      <AIBrainSection />
      <MultipurposeSection />
      <TestimonialsSection />
      <CTASection />
    </main>
    <BackToTop />
    <footer className="py-8 text-center border-t border-border/10 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Sun Robotics &amp; AI — All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default App;
