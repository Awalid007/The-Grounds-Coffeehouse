
import React from 'react';

const IMAGES = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800", // Barista pouring
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800", // Coffee beans & cup
  "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800", // Cozy table setting
  "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800", // Latte art heart
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800", // Cafe storefront vibe
  "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=800"  // Person holding coffee
];

export const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-coffee-cream overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-coffee-gold font-bold tracking-widest uppercase text-sm mb-4 block">The Vibe</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark mb-4 italic">Moments in The Grounds</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {IMAGES.map((src, idx) => (
            <div 
              key={idx} 
              className={`reveal relative aspect-square overflow-hidden rounded-2xl group transition-all duration-700 hover:z-10`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <img 
                src={src} 
                alt={`Coffee shop gallery ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-coffee-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white font-bold tracking-widest uppercase text-xs">View Story</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
