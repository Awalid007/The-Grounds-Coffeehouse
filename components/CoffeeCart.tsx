
import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp, Send, Package, Palette, Users } from 'lucide-react';

const FAQ_ITEMS = [
  {
    q: "Can I get a custom quote for my particular event?",
    a: "Absolutely! Please fill out our contact form below with a little more information and we will reach out to chat more. Just because you’re filling out the form doesn’t mean you’re booking. We will help guide you by asking questions, showing you the options and then sending you a customized proposal."
  },
  {
    q: "Are the drinks really unlimited?",
    a: "Yes! Your guests can have as many beverages as they’d like during the duration of your service."
  },
  {
    q: "What fees do you charge in addition to the price of the catering service?",
    a: "None. What you see in your quote is what you pay; everything is included in that price: set-up, clean-up, additional baristas, and non-dairy milk options. The only exception might be if we need to travel more than 25 miles from our shop, but any additional fees will also be included in the quote."
  },
  {
    q: "What condiments do you provide?",
    a: "Of course, we think our coffee is delicious as is! But, we also know that people like having milk, sweeteners, and sugar as options, which we always provide."
  }
];

export const CoffeeCart: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="catering" className="py-24 bg-coffee-cream scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20 reveal">
          <span className="text-coffee-gold font-bold tracking-widest uppercase text-sm mb-4 block">Event Catering</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-coffee-dark mb-6 italic">The Grounds Coffee Cart</h2>
          <p className="max-w-3xl mx-auto text-coffee-brown/80 text-lg leading-relaxed">
            Elevate your wedding, corporate or private event with hand-crafted drinks prepared by professional baristas! We are happy to bring The Grounds Coffeehouse to you with our customized coffee cart.
          </p>
        </div>

        {/* Cart Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 reveal">
          {[
            { title: "Espresso Cart", desc: "Classic hot and iced lattes, cappuccinos, and flat whites.", icon: "☕" },
            { title: "Iced Coffee Cart", desc: "Our signature cold brew and refreshing iced favorites.", icon: "🧊" },
            { title: "Hot Chocolate Cart", desc: "Rich, velvety cocoa with artisan toppings for cozy events.", icon: "🍫" }
          ].map((cart, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-coffee-beige group">
              <div className="text-4xl mb-6 bg-coffee-cream w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {cart.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-coffee-dark mb-4">{cart.title}</h3>
              <p className="text-coffee-brown/70 leading-relaxed">
                {cart.desc}
              </p>
              <div className="mt-8 flex items-center gap-2 text-coffee-gold font-bold text-sm uppercase tracking-wider">
                Included in every cart <Check size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Featured Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 bg-coffee-dark text-white rounded-[3rem] p-10 lg:p-20 reveal">
          <div>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-8">Personalize Every Cup</h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-coffee-gold/20 p-4 rounded-2xl h-fit">
                  <Palette className="text-coffee-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Custom Stickers</h4>
                  <p className="text-white/60">Choose from our pre-designed wedding monograms or send us your company logo for high-impact branding on every cup.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-coffee-gold/20 p-4 rounded-2xl h-fit">
                  <Users className="text-coffee-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Inclusive Options</h4>
                  <p className="text-white/60">Have non-coffee drinkers? We’ve got you covered with premium chai lattes and hot chocolate options for everyone to enjoy.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?auto=format&fit=crop&q=80&w=1200" 
              alt="Coffee Cart Experience" 
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-coffee-gold p-8 rounded-2xl hidden md:block">
              <span className="text-white font-serif italic text-xl">"Professional baristas, <br/>exceptional service."</span>
            </div>
          </div>
        </div>

        {/* Quote Form */}
        <div id="quote-form" className="bg-white rounded-[3rem] shadow-2xl overflow-hidden reveal">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 bg-coffee-brown p-12 lg:p-20 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-4xl font-serif font-bold mb-8 italic leading-tight">Get a Quote for Your Event</h3>
                <p className="text-white/70 text-lg mb-12">
                  Give us a little more information about your event and we’d love to provide a customized proposal!
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Send size={18} className="text-coffee-gold" />
                    </div>
                    <span className="text-sm font-medium">thegroundsva@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="mt-20 pt-10 border-t border-white/10">
                <span className="block text-coffee-gold font-bold text-xs uppercase tracking-widest mb-2">Note</span>
                <p className="text-white/40 text-xs italic">Submission of this form does not confirm a booking.</p>
              </div>
            </div>

            <div className="lg:col-span-3 p-12 lg:p-20">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-coffee-dark/60">First Name *</label>
                    <input type="text" className="w-full border-b-2 border-coffee-beige focus:border-coffee-gold outline-none py-3 transition-colors" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-coffee-dark/60">Last Name *</label>
                    <input type="text" className="w-full border-b-2 border-coffee-beige focus:border-coffee-gold outline-none py-3 transition-colors" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-coffee-dark/60">Email *</label>
                  <input type="email" className="w-full border-b-2 border-coffee-beige focus:border-coffee-gold outline-none py-3 transition-colors" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-coffee-dark/60">Event Type</label>
                    <select className="w-full border-b-2 border-coffee-beige focus:border-coffee-gold outline-none py-3 bg-transparent transition-colors">
                      <option>Wedding</option>
                      <option>Corporate</option>
                      <option>Private Party</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-coffee-dark/60">Date of Event</label>
                    <input type="date" className="w-full border-b-2 border-coffee-beige focus:border-coffee-gold outline-none py-3 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-coffee-dark/60">Guest Count</label>
                    <input type="number" placeholder="e.g. 150" className="w-full border-b-2 border-coffee-beige focus:border-coffee-gold outline-none py-3 transition-colors" />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-wider text-coffee-dark/60 block mb-4">Interested In</label>
                  <div className="flex flex-wrap gap-4">
                    {["Espresso Cart", "Iced Coffee Cart", "Hot Chocolate Cart", "Custom Stickers"].map((item) => (
                      <label key={item} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="hidden peer" />
                        <div className="w-5 h-5 border-2 border-coffee-beige rounded peer-checked:bg-coffee-gold peer-checked:border-coffee-gold transition-all flex items-center justify-center">
                          <Check size={12} className="text-white" />
                        </div>
                        <span className="text-sm text-coffee-brown peer-checked:text-coffee-dark font-medium">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-coffee-dark/60">Event Location (Address)</label>
                  <input type="text" placeholder="Address, City, State, ZIP" className="w-full border-b-2 border-coffee-beige focus:border-coffee-gold outline-none py-3 transition-colors" required />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-coffee-dark/60">Additional Details</label>
                  <textarea rows={3} placeholder="Tell us more about your vision..." className="w-full border-b-2 border-coffee-beige focus:border-coffee-gold outline-none py-3 transition-colors resize-none"></textarea>
                </div>

                <button type="submit" className="bg-coffee-gold text-white px-12 py-5 rounded-full font-bold hover:bg-coffee-dark transition-all shadow-xl hover:-translate-y-1">
                  Submit Quote Request
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-32 max-w-4xl mx-auto reveal">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif font-bold text-coffee-dark italic">Commonly Asked Questions</h3>
          </div>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-coffee-beige shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-coffee-cream/50 transition-colors"
                >
                  <span className="font-bold text-coffee-dark pr-6">{item.q}</span>
                  {openFaq === idx ? <ChevronUp className="text-coffee-gold" /> : <ChevronDown className="text-coffee-gold" />}
                </button>
                {openFaq === idx && (
                  <div className="px-8 pb-8 text-coffee-brown/70 leading-relaxed animate-fade-in">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center text-coffee-brown/60 text-sm">
            Have a question we didn't cover? <a href="mailto:thegroundsva@gmail.com" className="text-coffee-gold font-bold hover:underline">Email us here.</a>
          </div>
        </div>

      </div>
    </section>
  );
};
