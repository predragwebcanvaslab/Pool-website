import { motion } from "motion/react";
import { 
  Droplets, 
  ShieldCheck, 
  Star, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter,
  Menu,
  X,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-primary/80 backdrop-blur-md py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Droplets className="text-accent size-8" />
          <span className="font-serif text-2xl font-bold tracking-tight">MIAMI POOLS</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a>
          <a href="#areas" className="hover:text-accent transition-colors">Areas</a>
          <button className="bg-white text-primary px-6 py-2 rounded-full hover:bg-accent hover:text-primary transition-all duration-300">
            Free Quote
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-primary absolute top-full left-0 right-0 p-6 border-t border-white/10"
        >
          <div className="flex flex-col gap-4 text-center">
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
            <a href="#areas" onClick={() => setIsMobileMenuOpen(false)}>Areas</a>
            <button className="bg-accent text-primary px-6 py-3 rounded-full font-bold">
              Get a Free Quote
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Miami Pool at Golden Hour" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-primary"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block bg-accent/20 backdrop-blur-md border border-accent/30 text-accent px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            Premium Pool Care
          </span>
          <h1 className="font-serif text-5xl md:text-8xl font-bold leading-tight mb-8">
            Miami's Trusted Pool Experts <span className="italic text-accent">Since 2010</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light">
            Crystal-clear results for the most discerning homeowners. Experience the gold standard in Miami pool maintenance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent text-primary px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,229,255,0.3)]">
              Get a Free Quote
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              Our Services
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
      </motion.div>
    </section>
  );
};

const TrustBadges = () => {
  return (
    <section className="py-20 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="size-10" />
            <span className="text-xs font-bold tracking-tighter">CPO CERTIFIED</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-2xl font-serif font-bold">A+</div>
            <span className="text-xs font-bold tracking-tighter">BBB ACCREDITED</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1 text-accent">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}
            </div>
            <span className="text-xs font-bold tracking-tighter">500+ GOOGLE REVIEWS</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-2xl font-serif font-bold">14+</div>
            <span className="text-xs font-bold tracking-tighter">YEARS IN MIAMI</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Weekly Maintenance",
      description: "Comprehensive cleaning, chemical balancing, and equipment inspection every week.",
      image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Equipment Repair",
      description: "Expert diagnostics and repair for pumps, filters, heaters, and automation systems.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Green to Clean",
      description: "Rapid recovery service to turn your swamp back into a crystal-clear oasis.",
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="services" className="py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">Our Services</h2>
            <p className="text-white/60 text-lg font-light">We provide a full suite of professional pool care solutions tailored to the unique Miami climate.</p>
          </div>
          <button className="flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all">
            View All Services <ArrowRight className="size-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Julianna V.",
      role: "Coral Gables Homeowner",
      text: "The most reliable pool service I've ever used. My pool has never looked this clear, even in the middle of summer.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Marcus T.",
      role: "Miami Beach Resident",
      text: "Professional, punctual, and extremely knowledgeable. They fixed an equipment issue two other companies couldn't solve.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Elena R.",
      role: "Key Biscayne",
      text: "I love their weekly reports. It's great to see the chemical levels and know exactly what was done each visit.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-white text-primary">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-center mb-20">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="size-20 rounded-full overflow-hidden mb-6 ring-4 ring-accent/20">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex gap-1 text-accent mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <p className="text-lg italic mb-6 text-primary/80 leading-relaxed">"{t.text}"</p>
              <h4 className="font-bold text-xl">{t.name}</h4>
              <span className="text-sm text-primary/50 uppercase tracking-widest">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceAreas = () => {
  const areas = ["Coral Gables", "Miami Beach", "Coconut Grove", "Pinecrest", "Key Biscayne", "Doral", "Brickell", "South Miami"];
  
  return (
    <section id="areas" className="py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8">Serving All of Miami</h2>
            <p className="text-white/60 text-lg font-light mb-12">
              From the luxury estates of Pinecrest to the high-rises of Brickell, our fleet covers the entire Miami metropolitan area.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {areas.map((area, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="text-accent size-5" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&q=80&w=1000" 
              alt="Miami Skyline" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary pt-32 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <Droplets className="text-accent size-8" />
              <span className="font-serif text-2xl font-bold tracking-tight">MIAMI POOLS</span>
            </div>
            <p className="text-white/50 max-w-sm mb-8 font-light leading-relaxed">
              Elevating the standard of pool care in Miami since 2010. Licensed, insured, and dedicated to your satisfaction.
            </p>
            <div className="flex gap-4">
              <a href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Instagram className="size-5" />
              </a>
              <a href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Facebook className="size-5" />
              </a>
              <a href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Twitter className="size-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-sm">Contact</h4>
            <div className="flex flex-col gap-4 text-white/60">
              <div className="flex items-center gap-3">
                <Phone className="size-4 text-accent" />
                <span>(305) 555-0123</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-4 text-accent" />
                <span>hello@miamipools.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="size-4 text-accent" />
                <span>Miami, FL 33131</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-sm">Quick Links</h4>
            <div className="flex flex-col gap-4 text-white/60">
              <a href="#services" className="hover:text-accent transition-colors">Services</a>
              <a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a>
              <a href="#areas" className="hover:text-accent transition-colors">Service Areas</a>
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-sm">
          <p>© 2026 Miami Pool Experts. All rights reserved.</p>
          <p>Designed with passion in Miami.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBadges />
      <Services />
      <Testimonials />
      <ServiceAreas />
      <Footer />
    </div>
  );
}
