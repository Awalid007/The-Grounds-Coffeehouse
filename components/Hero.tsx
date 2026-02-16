
import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1501339819398-ed4751825728?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <div className="animate-fade-up">
          <span className="text-coffee-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Crafting Moments Since 2021</span>
          <h1 className="text-5xl md:text-8xl font-serif text-white font-bold mb-6 leading-tight">
            Where Community <br />
            <span className="italic text-coffee-beige">Meets Coffee</span>
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light mb-10 leading-relaxed">
            Freshly brewed artisan coffee, a warm atmosphere, and a cozy space to connect, work, and dream. Experience the art of the perfect pour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#menu" 
              onClick={(e) => scrollToSection(e, 'menu')}
              className="bg-coffee-gold hover:bg-white text-white hover:text-coffee-dark w-48 py-4 rounded-full flex items-center justify-center h-14 font-bold transition-all shadow-xl transform hover:scale-105"
            >
              View Menu
            </a>
            <a 
              href="#location" 
              onClick={(e) => scrollToSection(e, 'location')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white w-48 py-4 rounded-full flex items-center justify-center h-14 font-bold transition-all transform hover:scale-105"
            >
              Visit Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById('about');
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
      >
        <ChevronDown className="text-white w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity" />
      </button>
    </section>
  );
};
