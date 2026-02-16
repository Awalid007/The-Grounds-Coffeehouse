
import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Menu', href: 'menu' },
    { name: 'Catering', href: 'catering' },
    { name: 'Location', href: 'location' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Estimated height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: id === 'home' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-coffee-dark/95 py-3 shadow-xl backdrop-blur-md' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, 'home')}
          className="flex items-center gap-2 group"
        >
          <div className="bg-coffee-gold p-1.5 rounded-full transition-transform group-hover:rotate-12">
            <Coffee className="text-white w-5 h-5" />
          </div>
          <span className={`font-serif text-xl md:text-2xl font-bold tracking-tight text-white`}>
            The Grounds <span className="text-coffee-gold">Coffeehouse</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-white/80 hover:text-coffee-gold font-medium tracking-wide text-sm uppercase transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#menu"
            onClick={(e) => scrollToSection(e, 'menu')}
            className="bg-coffee-gold hover:bg-white hover:text-coffee-dark text-white px-6 py-2 rounded-full font-semibold text-sm transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-coffee-dark transform transition-transform duration-500 z-40 md:hidden flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={`#${link.href}`}
            onClick={(e) => scrollToSection(e, link.href)}
            className="text-white text-3xl font-serif hover:text-coffee-gold transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#menu"
          onClick={(e) => scrollToSection(e, 'menu')}
          className="bg-coffee-gold text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-white hover:text-coffee-dark transition-all"
        >
          Order Now
        </a>
      </div>
    </nav>
  );
};
