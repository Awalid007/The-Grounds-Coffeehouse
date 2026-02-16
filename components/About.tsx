
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-coffee-cream scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="reveal transform translate-y-10 transition-all duration-1000">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200" 
                alt="Barista at work" 
                className="rounded-2xl shadow-2xl z-10 relative"
              />
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-coffee-gold rounded-2xl -z-0"></div>
              <div className="absolute -bottom-10 -right-10 hidden md:block w-48 h-48 bg-coffee-brown rounded-full flex items-center justify-center p-8 text-white text-center shadow-xl">
                <span className="font-serif italic text-lg leading-tight">Founded on passion for great beans.</span>
              </div>
            </div>
          </div>

          <div className="reveal transform translate-y-10 transition-all duration-1000 delay-200">
            <span className="text-coffee-gold font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark mb-8 leading-tight">
              More Than Just <br />
              <span className="italic text-coffee-brown font-normal">A Morning Ritual</span>
            </h2>
            <div className="space-y-6 text-coffee-brown/80 leading-relaxed text-lg">
              <p>
                At The Grounds Coffeehouse, we believe that the best conversations happen over a perfectly brewed cup. Our journey started with a simple vision: to create a sanctuary where community and craft collide.
              </p>
              <p>
                Every bean we serve is ethically sourced from sustainable farms and roasted locally in small batches to preserve its unique flavor profile. Whether you're here for a quick espresso or a slow Sunday brunch, you're part of the family.
              </p>
              <p>
                Step into our space and feel the warmth of hand-poured coffee, fresh aromas, and a friendly face. We're here to fuel your day and spark your creativity.
              </p>
            </div>
            <div className="mt-10 flex gap-8">
              <div>
                <span className="block text-3xl font-serif font-bold text-coffee-gold">10k+</span>
                <span className="text-sm uppercase tracking-wider text-coffee-dark/60">Cups Served</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-coffee-gold">15+</span>
                <span className="text-sm uppercase tracking-wider text-coffee-dark/60">Unique Blends</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
