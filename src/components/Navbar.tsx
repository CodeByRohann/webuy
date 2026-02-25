import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Intersection Observer for scroll spy - Sanket
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['home', 'services', 'how-it-works', 'clients', 'contact'];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Clients', href: '#clients', id: 'clients' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 flex justify-center ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className={`w-full max-w-[84rem] mx-auto px-6 lg:px-8 transition-all duration-500 ${isScrolled ? 'max-w-[64rem]' : ''}`}>
        <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'bg-white/70 backdrop-blur-[24px] transform-gpu will-change-transform border border-gray-200/60 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.06)] px-4 py-3' : 'px-0 py-0'}`}>

          {/* Custom Typographic Logo */}
          <div className="flex flex-col items-start cursor-pointer group mt-1">
            <div className="flex items-end leading-none">
              <span className="text-[34px] font-black tracking-tighter text-[#4A86BA] leading-none transition-transform duration-300 group-hover:scale-[1.02]">
                We
              </span>
              <span className="text-[34px] font-black tracking-tighter text-[#09090b] leading-none transition-transform duration-300 group-hover:scale-[1.02] relative">
                buy,
                {/* Small Monitor Icon attached to the 'y' */}
                <div className="absolute -top-3 -right-6 w-5 h-5 text-[#4A86BA]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                    <rect x="5" y="6" width="14" height="8" rx="1" ry="1" fill="currentColor" fillOpacity="0.2" />
                  </svg>
                </div>
              </span>
            </div>
            <span className="text-[10px] font-bold tracking-[0.05em] text-[#09090b] mt-0.5 ml-0.5 uppercase">
              Reliable IT Solutions
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-9">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`text-[14px] font-bold transition-all duration-300 relative group/link ${activeSection === link.id ? 'text-[#09090b]' : 'text-gray-500 hover:text-[#09090b]'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-blue-600 transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover/link:w-full'}`}></span>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-5">
            <a
              href="https://wa.me/918957575798"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-semibold bg-[#25D366] text-white px-5 py-2.5 rounded-full hover:shadow-[0_8px_20px_rgba(37,211,102,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 relative overflow-hidden group flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              Sell on WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#09090b] hover:text-blue-600 p-2"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100 bg-white/90 backdrop-blur-2xl transform-gpu will-change-transform absolute top-full left-0 w-full shadow-2xl"
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-lg font-bold transition-colors ${activeSection === link.id ? 'bg-gray-50 text-blue-600' : 'text-[#09090b] hover:bg-gray-50 hover:text-blue-600'}`}
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-4">
                <a
                  href="https://wa.me/918957575798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-4 py-4 rounded-xl text-[16px] font-bold text-white bg-[#25D366] block"
                >
                  Sell on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
