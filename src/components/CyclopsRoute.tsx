import React, { useEffect, useRef } from 'react';

const stops = [
  {
    name: 'BLU MARINA SRL,\nCATANIA',
    sub: 'Starting and return point.',
    img: '/lovable-uploads/gibigiana-marina.jpg',
    note: null,
    noteImg: null,
  },
  {
    name: 'ULYSSES CAVES',
    sub: null,
    img: '/lovable-uploads/DSC02042.jpg',
    note: 'Swim & snorkel between volcanic cliffs.',
    noteImg: '/lovable-uploads/Image_2.png',
  },
  {
    name: 'ACI CASTELLO',
    sub: null,
    img: '/lovable-uploads/DSC02042.jpg',
    note: 'Taste Sicily with a brunch, lunch, or sunset aperitif.',
    noteImg: '/lovable-uploads/Image_6.png',
  },
  {
    name: 'FARAGLIONI DI\nACI TREZZA',
    sub: null,
    img: '/lovable-uploads/DSC02206.jpg',
    note: 'Sail into the sunset with music and enjoy dolphin watching.',
    noteImg: '/lovable-uploads/20250801_192926.jpg',
  },
];

const CyclopsRoute = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(els => els.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:0.08});
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden" ref={ref}
      style={{
        background: 'linear-gradient(135deg, #0D1B2A 0%, #1F4E5C 50%, #0D1B2A 100%)',
      }}>
      {/* Water texture overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M0 50 Q25 30 50 50 T100 50' stroke='%23ffffff' stroke-width='0.3' fill='none' opacity='0.5'/%3E%3Cpath d='M0 70 Q25 50 50 70 T100 70' stroke='%23ffffff' stroke-width='0.3' fill='none' opacity='0.3'/%3E%3Cpath d='M0 30 Q25 10 50 30 T100 30' stroke='%23ffffff' stroke-width='0.3' fill='none' opacity='0.4'/%3E%3C/svg%3E")`,
        }} />

      <div className="container-custom relative z-10">
        {/* Section label */}
        <div className="text-center mb-5 reveal">
          <div className="flex items-center justify-center gap-3">
            <span className="teal-rule" />
            <span className="section-label" style={{color: 'var(--teal-light)'}}>The Itinerary</span>
            <span className="teal-rule" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-12 md:mb-16 reveal">
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            color: '#fff',
            lineHeight: 1.05,
          }}>
            Sail Sicily's Legendary Cyclops Riviera
          </h2>
        </div>

        {/* Stops grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 reveal reveal-delay-1">
          {stops.map((stop, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {/* Step number indicator */}
              <div className="text-white/40 text-xs tracking-[0.3em] mb-3" style={{fontFamily:"'Bebas Neue', sans-serif"}}>
                STOP {String(i + 1).padStart(2, '0')}
              </div>

              {/* Name */}
              <p className="text-white text-base tracking-wider mb-1 px-2" style={{
                fontFamily:"'Cormorant Garamond',serif",
                fontWeight: 500,
                letterSpacing: '0.08em',
                whiteSpace: 'pre-line',
                lineHeight: 1.2,
              }}>
                {stop.name}
              </p>

              {/* Sub text */}
              {stop.sub && (
                <p className="text-white/60 text-xs italic mb-4">{stop.sub}</p>
              )}
              {!stop.sub && <div className="mb-4" />}

              {/* Main photo */}
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-white/90 shadow-2xl">
                <img src={stop.img} alt={stop.name.replace('\n', ' ')} className="w-full h-full object-cover" />
              </div>

              {/* Note (only if present) */}
              {stop.note && (
                <div className="mt-6 flex flex-col items-center">
                  <p className="text-white/80 text-xs italic mb-3 max-w-[180px] leading-relaxed">
                    {stop.note}
                  </p>
                  {stop.noteImg && (
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/70 shadow-xl">
                      <img src={stop.noteImg} alt="" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Subtle dotted connector under the grid (desktop only, decorative) */}
        <div className="hidden lg:block mt-12 reveal reveal-delay-2">
          <div className="relative h-px">
            <div className="absolute inset-x-0 top-0 border-t border-dashed border-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyclopsRoute;
