import { useEffect, useState, useRef, memo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Rocket, Cog, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import logo from '../assets/Picsart_25-08-26_16-14-15-746.png';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.3
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    // console.log('Form submitted:', formData);
  };
  const scrollToDemo = () => {
    const element = document.getElementById('showcase');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToIT = () => {
    const element = document.getElementById('it-solutions');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <section id="contact" ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background">
        {/* Animated tech grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
          backgroundImage: `
              linear-gradient(90deg, hsl(195, 100%, 50%) 1px, transparent 1px),
              linear-gradient(0deg, hsl(195, 100%, 50%) 1px, transparent 1px)
            `,
          backgroundSize: '50px 50px',
          animation: 'pulse 8s ease-in-out infinite'
        }}></div>
        </div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{
        animationDelay: '3s'
      }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Main CTA Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-hero">Let's Build the</span>
            <br />
            <span className="text-glow">Future Together</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-12">
            Ready to transform your operations with cutting-edge AI robotics? 
            Let's discuss your vision and create tomorrow's solutions today.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button size="lg" onClick={scrollToDemo} className="btn-hero text-lg px-12 py-6 group">
              <Rocket className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Book a Robotics Demo
            </Button>

            <Button variant="outline" size="lg" onClick={scrollToIT} className="btn-hero border-primary/30 text-lg px-12 py-6 group">
              <Cog className="mr-2 h-5 w-5 group-hover:rotate-45 transition-transform" />
              Explore IT Services
            </Button>
          </div>
        </div>

        {/* Contact Form & Info Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className={`glass-card border-border/30 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} className="bg-secondary/20 border-border/50 focus:border-primary" />
                  </div>
                  <div>
                    <Input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} className="bg-secondary/20 border-border/50 focus:border-primary" />
                  </div>
                </div>
                
                <Input name="company" placeholder="Company Name" value={formData.company} onChange={handleInputChange} className="bg-secondary/20 border-border/50 focus:border-primary" />
                
                <Textarea name="message" placeholder="Tell us about your project or requirements..." rows={4} value={formData.message} onChange={handleInputChange} className="bg-secondary/20 border-border/50 focus:border-primary resize-none" />

                <Button type="submit" className="w-full btn-hero group">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <Card className="glass-card border-border/30 hover:scale-105 transition-transform">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-foreground/70">sunroboticsandai@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-border/30 hover:scale-105 transition-transform">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-foreground/70">+91 8144426440</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-border/30 hover:scale-105 transition-transform">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-foreground/70">Indraprastha Tower,Rau Indore</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Operating Hours */}
            <Card className="glass-card border-border/30">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 text-foreground">Support Hours</h4>
                <div className="space-y-2 text-foreground/70">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergency Support</span>
                    <span className="text-primary">24/7 Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
                {/* Footer */}
        <div className={`text-center mt-16 pt-8 border-t border-border/30 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img 
              src={logo} 
              alt="Sun Robotics & AI" 
              className="h-10 w-auto transition-all duration-300 hover:scale-105 drop-shadow-lg"
            />
            <div>
              <span className="text-xl font-bold text-foreground">Sun Robotics & AI</span>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center space-x-4 mb-4">
            <a 
              href="https://www.linkedin.com/company/sunroboticsandai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-foreground/70 hover:text-primary transition-colors duration-300 group"
            >
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
          
          <p className="text-foreground/60">
            Copyright © Zonrobotics Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(CTASection);
