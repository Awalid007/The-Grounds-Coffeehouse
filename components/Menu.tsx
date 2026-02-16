
import React from 'react';

const MENU_ITEMS = [
  {
    title: "Signature Latte",
    desc: "Our house blend espresso with velvety steamed milk and a hint of vanilla bean.",
    price: "$5.50",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Cold Brew Reserve",
    desc: "18-hour steep for an incredibly smooth, bold, and refreshing pick-me-up.",
    price: "$6.25",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Wildflower Pastry",
    desc: "Flaky, buttery croissant filled with locally sourced berry compote.",
    price: "$4.95",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Seasonal Special",
    desc: "Honey Lavender Oat Latte - delicate, floral, and naturally sweetened.",
    price: "$6.75",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600"
  }
];

export const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-coffee-gold font-bold tracking-widest uppercase text-sm mb-4 block">Crafted with Love</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark mb-4">On The Menu</h2>
          <div className="w-24 h-1 bg-coffee-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MENU_ITEMS.map((item, idx) => (
            <div 
              key={item.title} 
              className="reveal bg-coffee-cream rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-coffee-dark font-bold">
                  {item.price}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-serif font-bold mb-3 text-coffee-dark">{item.title}</h3>
                <p className="text-coffee-brown/70 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                <button className="text-coffee-gold font-bold text-sm uppercase tracking-wider flex items-center gap-2 group/btn">
                  Add to Order
                  <span className="w-0 group-hover/btn:w-4 transition-all h-[1px] bg-coffee-gold"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <button className="px-10 py-4 border-2 border-coffee-gold text-coffee-gold hover:bg-coffee-gold hover:text-white rounded-full font-bold transition-all uppercase tracking-widest text-sm">
            Download Full Menu (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};
