import React, { useEffect, useRef } from 'react';

const stops = [
  {
    name: 'BLU MARINA SRL, CATANIA',
    sub: 'Starting and return point.',
    img: '/lovable-uploads/Image_1.png',
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
    noteImg: '/lovable-uploads/DSC01915.jpg',
  },
];

const StopIcon = ({ type }: { type: string }) => {
  if (type === 'anchor') return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>;
  if (type === 'cave')   return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M6 21V8a6 6 0 0 1 12 0v13M3 21h18M9 21v-6h6v6"/></svg>;
  if (type === 'castle') return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M3 21h18M5 21V8l3 1V5l3 1V3l3 1v3l3-1v4l3-1v13M9 21v-5h6v5"/></svg>;
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M3 21h18M5 21l4-10 3 6 3-8 4 12"/></svg>;
};

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
        background: 'linear-gradient(135deg, #1B8A8A 0%, #2CADA8 50%, #1B8A8A 100%)',
      }}>
      {/* Water texture overlay */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M0 50 Q25 30 50 50 T100 50' stroke='%23ffffff' stroke-width='0.3' fill='none' opacity='0.5'/%3E%3Cpath d='M0 70 Q25 50 50 70 T100 70' stroke='%23ffffff' stroke-width='0.3' fill='none' opacity='0.3'/%3E%3Cpath d='M0 30 Q25 10 50 30 T100 30' stroke='%23ffffff' stroke-width='0.3' fill='none' opacity='0.4'/%3E%3C/svg%3E")`,
        }} />

      <div className="container-custom relative z-10">
        {/* Title with compass */}
        <div className="flex items-center justify-between mb-12 md:mb-16 reveal">
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
            color: '#fff',
            letterSpacing: '0.05em',
            lineHeight: 1.1,
          }}>
            SAIL SICILY'S LEGENDARY CYCLOPS RIVIERA
          </h2>
          {/* Compass rose */}
          <div className="hidden md:block opacity-70 flex-shrink-0 ml-6">
            <svg width="70" height="70" viewBox="0 0 100 100" fill="none" stroke="#fff" strokeWidth="0.8">
              <circle cx="50" cy="50" r="38"/>
              <circle cx="50" cy="50" r="28"/>
              <path d="M50 10 L52 50 L50 90 L48 50 Z" fill="#fff" opacity="0.9"/>
              <path d="M10 50 L50 48 L90 50 L50 52 Z" fill="#fff" opacity="0.6"/>
              <path d="M22 22 L48 48 L78 78 L52 52 Z" fill="#fff" opacity="0.4"/>
              <path d="M78 22 L52 48 L22 78 L48 52 Z" fill="#fff" opacity="0.4"/>
              <text x="50" y="8" textAnchor="middle" fontSize="6" fill="#fff" stroke="none">N</text>
              <text x="50" y="98" textAnchor="middle" fontSize="6" fill="#fff" stroke="none">S</text>
              <text x="5" y="53" textAnchor="middle" fontSize="6" fill="#fff" stroke="none">W</text>
              <text x="95" y="53" textAnchor="middle" fontSize="6" fill="#fff" stroke="none">E</text>
            </svg>
          </div>
        </div>

        {/* DESKTOP — Route map with curves */}
        <div className="hidden lg:block relative reveal reveal-delay-1" style={{ minHeight: '480px' }}>
          {/* SVG curved path connecting all stops */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 480" preserveAspectRatio="none">
            <defs>
              <pattern id="dotPattern" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1" fill="#fff" opacity="0.6"/>
              </pattern>
            </defs>
            {/* Main wavy path */}
            <path
              d="M 100 280 Q 200 200, 340 240 T 600 280 Q 750 220, 900 250 T 1130 300"
              stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" strokeDasharray="6 4"
            />
            {/* Anchor drop line */}
            <line x1="100" y1="280" x2="100" y2="360" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeDasharray="3 3"/>
            <circle cx="100" cy="365" r="10" fill="#1B8A8A" stroke="#fff" strokeWidth="1.5"/>

            {/* Connection nodes (small circles on path) */}
            <circle cx="340" cy="240" r="5" fill="#1B8A8A" stroke="#fff" strokeWidth="1.5"/>
            <circle cx="600" cy="280" r="5" fill="#1B8A8A" stroke="#fff" strokeWidth="1.5"/>
            <circle cx="900" cy="250" r="5" fill="#1B8A8A" stroke="#fff" strokeWidth="1.5"/>

            {/* Drop lines to note pictures */}
            <line x1="340" y1="240" x2="340" y2="380" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="3 3"/>
            <line x1="600" y1="280" x2="600" y2="420" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="3 3"/>
          </svg>

          {/* Stop circles positioned absolutely */}
          {/* Stop 1: Catania */}
          <div className="absolute" style={{ top: '180px', left: '40px', width: '120px' }}>
            <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-white shadow-2xl mb-3">
              <img src="/lovable-uploads/Image_1.png" alt="Catania" className="w-full h-full object-cover" />
            </div>
            <div className="text-center mt-12 -ml-4">
              <p className="text-white font-bold text-sm tracking-wider mb-1" style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:600, letterSpacing:'0.08em'}}>
                BLU MARINA SRL,<br/>CATANIA
              </p>
              <p className="text-white/70 text-xs italic">Starting and<br/>return point.</p>
            </div>
          </div>

          {/* Stop 2: Ulysses Caves */}
          <div className="absolute" style={{ top: '60px', left: '270px', width: '140px' }}>
            <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-2 border-white shadow-2xl mb-3">
              <img src="/lovable-uploads/DSC02042.jpg" alt="Ulysses Caves" className="w-full h-full object-cover" />
            </div>
            <p className="text-center text-white font-bold text-sm tracking-wider mt-2" style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:600, letterSpacing:'0.08em'}}>
              ULYSSES CAVES
            </p>
            {/* Note bubble below */}
            <div className="absolute" style={{ top: '230px', left: '20px' }}>
              <p className="text-white/85 text-xs italic mb-2 text-center" style={{whiteSpace:'pre-line', minWidth:'170px'}}>
                Swim & snorkel{'\n'}between volcanic cliffs.
              </p>
              <div className="w-[90px] h-[90px] rounded-full overflow-hidden border-2 border-white shadow-xl mx-auto">
                <img src="/lovable-uploads/Image_2.png" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Stop 3: Aci Castello */}
          <div className="absolute" style={{ top: '170px', left: '540px', width: '130px' }}>
            <div className="w-[130px] h-[130px] rounded-full overflow-hidden border-2 border-white shadow-2xl mb-3">
              <img src="/lovable-uploads/DSC02042.jpg" alt="Aci Castello" className="w-full h-full object-cover" style={{objectPosition:'right center'}} />
            </div>
            <p className="text-center text-white font-bold text-sm tracking-wider mt-2" style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:600, letterSpacing:'0.08em'}}>
              ACI<br/>CASTELLO
            </p>
            {/* Note below */}
            <div className="absolute" style={{ top: '240px', left: '0' }}>
              <p className="text-white/85 text-xs italic text-center mb-2" style={{whiteSpace:'pre-line', minWidth:'180px'}}>
                Taste Sicily{'\n'}with a brunch, lunch,{'\n'}or sunset aperitif.
              </p>
              <div className="w-[90px] h-[90px] rounded-full overflow-hidden border-2 border-white shadow-xl mx-auto">
                <img src="/lovable-uploads/Image_6.png" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Stop 4: Faraglioni */}
          <div className="absolute" style={{ top: '120px', left: '830px', width: '140px' }}>
            <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-2 border-white shadow-2xl mb-3">
              <img src="/lovable-uploads/DSC02206.jpg" alt="Faraglioni" className="w-full h-full object-cover" />
            </div>
            <p className="text-center text-white font-bold text-sm tracking-wider mt-2" style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:600, letterSpacing:'0.08em'}}>
              FARAGLIONI DI<br/>ACI TREZZA
            </p>
          </div>

          {/* Boat at end */}
          <div className="absolute" style={{ top: '270px', right: '20px' }}>
            <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
              <path d="M5 45 L75 45 L65 55 L15 55 Z" fill="#fff" opacity="0.95"/>
              <path d="M40 10 L40 45 M40 10 L60 35 L40 35 Z" fill="#fff" opacity="0.9"/>
            </svg>
          </div>

          {/* Right-side note for Faraglioni */}
          <div className="absolute" style={{ top: '290px', right: '30px', width: '180px' }}>
            <p className="text-white/85 text-xs italic mb-2 text-right" style={{whiteSpace:'pre-line'}}>
              Sail into the sunset{'\n'}with music and enjoy{'\n'}dolphin watching.
            </p>
            <div className="w-[90px] h-[90px] rounded-full overflow-hidden border-2 border-white shadow-xl ml-auto">
              <img src="/lovable-uploads/DSC01915.jpg" alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* MOBILE — vertical compact version */}
        <div className="lg:hidden space-y-6 reveal reveal-delay-1">
          {stops.map((stop, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-xl flex-shrink-0">
                <img src={stop.img} alt={stop.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white font-bold text-sm" style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:600, letterSpacing:'0.06em', whiteSpace:'pre-line'}}>
                  {stop.name}
                </p>
                {stop.sub && <p className="text-white/70 text-xs italic mt-1">{stop.sub}</p>}
                {stop.note && <p className="text-white/85 text-xs italic mt-1" style={{whiteSpace:'pre-line'}}>{stop.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyclopsRoute;
