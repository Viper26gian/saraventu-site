import React, { useEffect, useRef } from 'react';

const stops = [
  {
    name: 'BLU MARINA SRL, CATANIA',
    sub: 'Starting and return point.',
    img: '/lovable-uploads/DSC02084.jpg',
    icon: 'anchor',
    note: null,
    notePosition: null,
  },
  {
    name: 'ULYSSES CAVES',
    sub: null,
    img: '/lovable-uploads/DSC02042.jpg',
    icon: 'cave',
    note: 'Swim & snorkel\nbetween volcanic cliffs.',
    notePosition: 'bottom',
    noteImg: '/lovable-uploads/Image_2.png',
  },
  {
    name: 'ACI CASTELLO',
    sub: null,
    img: '/lovable-uploads/DSC02042.jpg',
    icon: 'castle',
    note: 'Taste Sicily\nwith a brunch, lunch,\nor sunset aperitif.',
    notePosition: 'bottom',
    noteImg: '/lovable-uploads/Image_6.png',
  },
  {
    name: 'FARAGLIONI DI\nACI TREZZA',
    sub: null,
    img: '/lovable-uploads/DSC02206.jpg',
    icon: 'rocks',
    note: 'Sail into the sunset\nwith music and enjoy\ndolphin watching.',
    notePosition: 'right',
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
      <div className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none"
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

        {/* DESKTOP — Route map with curves */}
        <div className="hidden lg:block relative reveal reveal-delay-1" style={{ minHeight: '520px' }}>
          {/* SVG curved path connecting all stops */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 520" preserveAspectRatio="none">
            <path
              d="M 100 300 Q 200 220, 340 260 T 600 300 Q 750 240, 900 270 T 1130 320"
              stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" strokeDasharray="6 4"
            />
            <line x1="100" y1="300" x2="100" y2="380" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="3 3"/>
            <circle cx="100" cy="385" r="10" fill="#0D1B2A" stroke="#fff" strokeWidth="1.5"/>
            <circle cx="340" cy="260" r="5" fill="#0D1B2A" stroke="#fff" strokeWidth="1.5"/>
            <circle cx="600" cy="300" r="5" fill="#0D1B2A" stroke="#fff" strokeWidth="1.5"/>
            <circle cx="900" cy="270" r="5" fill="#0D1B2A" stroke="#fff" strokeWidth="1.5"/>
            <line x1="340" y1="260" x2="340" y2="400" stroke="rgba(255,255,255,0.35)" strokeWidth="1" strokeDasharray="3 3"/>
            <line x1="600" y1="300" x2="600" y2="440" stroke="rgba(255,255,255,0.35)" strokeWidth="1" strokeDasharray="3 3"/>
          </svg>

          {/* Stop 1: Catania */}
          <div className="absolute" style={{ top: '140px', left: '20px', width: '160px' }}>
            <div className="text-center mb-3">
              <p className="text-white text-sm tracking-wider mb-1" style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:500, letterSpacing:'0.08em'}}>
                BLU MARINA SRL,<br/>CATANIA
              </p>
              <p className="text-white/70 text-xs italic">Starting and return point.</p>
            </div>
            <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-white shadow-2xl mx-auto">
              <img src="/lovable-uploads/DSC02084.jpg" alt="Catania" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Stop 2: Ulysses Caves */}
          <div className="absolute" style={{ top: '30px', left: '270px', width: '140px' }}>
            <p className="text-center text-white text-sm tracking-wider mb-3" style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:500, letterSpacing:'0.08em'}}>
              ULYSSES CAVES
            </p>
            <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-2 border-white shadow-2xl">
              <img src="/lovable-uploads/DSC02042.jpg" alt="Ulysses Caves" className="w-full h-full object-cover" />
            </div>
            {/* Note bubble below */}
            <div className="absolute" style={{ top: '260px', left: '-15px' }}>
              <p className="text-white/85 text-xs italic mb-2 text-center" style={{whiteSpace:'pre-line', minWidth:'170px'}}>
                Swim & snorkel{'\n'}between volcanic cliffs.
              </p>
              <div className="w-[90px] h-[90px] rounded-full overflow-hidden border-2 border-white shadow-xl mx-auto">
                <img src="/lovable-uploads/Image_2.png" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Stop 3: Aci Castello */}
          <div className="absolute" style={{ top: '140px', left: '540px', width: '130px' }}>
            <p className="text-center text-white text-sm tracking-wider mb-3" style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:500, letterSpacing:'0.08em'}}>
              ACI<br/>CASTELLO
            </p>
            <div className="w-[130px] h-[130px] rounded-full overflow-hidden border-2 border-white shadow-2xl">
              <img src="/lovable-uploads/DSC02042.jpg" alt="Aci Castello" className="w-full h-full object-cover" style={{objectPosition:'right center'}} />
            </div>
            {/* Note below */}
            <div className="absolute" style={{ top: '250px', left: '-25px' }}>
              <p className="text-white/85 text-xs italic text-center mb-2" style={{whiteSpace:'pre-line', minWidth:'180px'}}>
                Taste Sicily{'\n'}with a brunch, lunch,{'\n'}or sunset aperitif.
              </p>
              <div className="w-[90px] h-[90px] rounded-full overflow-hidden border-2 border-white shadow-xl mx-auto">
                <img src="/lovable-uploads/Image_6.png" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Stop 4: Faraglioni */}
          <div className="absolute" style={{ top: '90px', left: '830px', width: '140px' }}>
            <p className="text-center text-white text-sm tracking-wider mb-3" style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:500, letterSpacing:'0.08em'}}>
              FARAGLIONI DI<br/>ACI TREZZA
            </p>
            <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-2 border-white shadow-2xl">
              <img src="/lovable-uploads/DSC02206.jpg" alt="Faraglioni" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Boat at end */}
          <div className="absolute" style={{ top: '290px', right: '20px' }}>
            <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
              <path d="M5 45 L75 45 L65 55 L15 55 Z" fill="#fff" opacity="0.9"/>
              <path d="M40 10 L40 45 M40 10 L60 35 L40 35 Z" fill="#fff" opacity="0.85"/>
            </svg>
          </div>

          {/* Right-side note for Faraglioni */}
          <div className="absolute" style={{ top: '310px', right: '30px', width: '180px' }}>
            <p className="text-white/85 text-xs italic mb-2 text-right" style={{whiteSpace:'pre-line'}}>
              Sail into the sunset{'\n'}with music and enjoy{'\n'}dolphin watching.
            </p>
            <div className="w-[90px] h-[90px] rounded-full overflow-hidden border-2 border-white shadow-xl ml-auto">
              <img src="/lovable-uploads/20250801_192926.jpg" alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* MOBILE — vertical compact version */}
        <div className="lg:hidden space-y-6 reveal reveal-delay-1">
          {stops.map((stop, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <div>
                <p className="text-white text-sm" style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:500, letterSpacing:'0.06em', whiteSpace:'pre-line'}}>
                  {stop.name}
                </p>
                {stop.sub && <p className="text-white/70 text-xs italic mt-1">{stop.sub}</p>}
                {stop.note && <p className="text-white/85 text-xs italic mt-1" style={{whiteSpace:'pre-line'}}>{stop.note}</p>}
              </div>
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-xl flex-shrink-0">
                <img src={stop.img} alt={stop.name} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyclopsRoute;
