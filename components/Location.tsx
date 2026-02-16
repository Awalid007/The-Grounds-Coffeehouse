
import React from 'react';
// Added Coffee to the lucide-react imports to resolve the missing name error on line 66
import { MapPin, Phone, Clock, Mail, Coffee } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="reveal">
            <span className="text-coffee-gold font-bold tracking-widest uppercase text-sm mb-4 block">Visit Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark mb-10 italic">Your Local Sanctuary</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-coffee-cream p-4 rounded-2xl">
                  <MapPin className="text-coffee-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-coffee-dark mb-1">Our Address</h4>
                  <p className="text-coffee-brown/70">50 N Stafford Complex Ctr #107<br />Stafford, VA 22556</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-coffee-cream p-4 rounded-2xl">
                  <Clock className="text-coffee-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-coffee-dark mb-1">Opening Hours</h4>
                  <ul className="text-coffee-brown/70 space-y-1">
                    <li className="flex justify-between w-48"><span>Mon - Fri:</span> <span className="font-bold">7AM - 5PM</span></li>
                    <li className="flex justify-between w-48"><span>Sat - Sun:</span> <span className="font-bold">8AM - 4PM</span></li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-coffee-cream p-4 rounded-2xl">
                  <Phone className="text-coffee-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-coffee-dark mb-1">Contact</h4>
                  <p className="text-coffee-brown/70">(540) 288-2058</p>
                  <p className="text-coffee-brown/70">hello@thegroundsva.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://www.google.com/maps/dir//The+Grounds+Coffeehouse,+50+N+Stafford+Complex+Ctr+%23107,+Stafford,+VA+22556/@38.4232307,-77.4109439,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-coffee-dark text-white px-8 py-4 rounded-full font-bold hover:bg-coffee-gold transition-colors inline-flex items-center gap-3"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="reveal transform lg:translate-y-10">
            <div className="h-[500px] w-full bg-coffee-beige rounded-3xl overflow-hidden shadow-2xl relative">
              {/* This is a placeholder for a Google Map */}
              <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-77.4087,38.4231,14,0/800x600?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2V5In0')"}}></div>
              <div className="absolute inset-0 bg-coffee-dark/10"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce">
                  <div className="w-10 h-10 bg-coffee-gold rounded-full flex items-center justify-center text-white">
                    <Coffee size={20} />
                  </div>
                  <span className="font-bold text-coffee-dark whitespace-nowrap">The Grounds is here!</span>
                </div>
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.281696472651!2d-77.41094388466632!3d38.4232306796468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6623635a676b7%3A0x7d67b8178d7e9894!2sThe%20Grounds%20Coffeehouse!5e0!3m2!1sen!2sus!4v1645000000000!5m2!1sen!2sus" 
                className="w-full h-full border-0 grayscale contrast-125"
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
