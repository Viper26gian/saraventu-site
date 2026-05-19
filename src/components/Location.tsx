import React from 'react';
import { MapPin } from 'lucide-react';

const locations = [
  {
    name: 'Playa di Catania — Lido La Cucaracha',
    sub: 'Windsurf, wingfoil, e-foil',
  },
  {
    name: 'Aci Trezza',
    sub: 'SUP & kayak tours',
  },
];

const Location = () => {
  return (
    <section id="location" className="section-padding bg-cream">
      <div className="container-custom">

        {/* Centered header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="teal-rule" />
            <span className="section-label">Where We Are</span>
            <span className="teal-rule" />
          </div>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontSize:'clamp(2rem,4vw,3.2rem)', lineHeight:1.05, color:'var(--navy)'}}>
            Based in Catania, Sicily
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            We operate in the most iconic spots on Sicily's east coast — the Cyclops Riviera.
          </p>
        </div>

        {/* Two-col content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Locations list */}
          <div className="space-y-6">
            {locations.map((loc, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-white border border-gray-100 hover:border-[--teal]/40 transition-colors duration-300 group">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[--teal]/10 group-hover:bg-[--teal] transition-colors duration-300 flex items-center justify-center">
                  <MapPin size={18} className="text-[--teal] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'1.3rem', fontWeight:500, color:'var(--navy)', lineHeight:1.2}}>
                    {loc.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 italic">{loc.sub}</p>
                </div>
              </div>
            ))}

            {/* Decorative inset card */}
            <div className="mt-6 p-6 bg-[--navy] text-white">
              <p className="text-xs font-lexend tracking-widest uppercase text-white/50 mb-2">Departure</p>
              <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'1.4rem', fontWeight:400}}>
                Blu Marina SRL, Catania
              </p>
              <p className="text-white/60 text-sm mt-2 italic">Starting and return point for all sailing experiences.</p>
            </div>
          </div>

          {/* Real Google Map (Catania area) */}
          <div className="relative h-[420px] lg:h-[520px] overflow-hidden shadow-2xl border-2 border-white">
            <iframe
              title="Saraventu location — Catania"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d50847.5!2d15.13!3d37.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sit!4v1700000000000"
              width="100%"
              height="100%"
              style={{border:0, filter:'grayscale(0.15) contrast(0.95)'}}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            {/* Subtle gold corner ornament */}
            <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-[--gold]/70 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-[--gold]/70 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
