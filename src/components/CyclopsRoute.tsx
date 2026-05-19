import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

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
    img: '/lovable-uploads/ulysses-caves.jpg',
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
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [pathDraw, setPathDraw] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(els => els.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        if ((e.target as HTMLElement).dataset?.routeTrigger === '1') {
          setPathDraw(true);
        }
      }
    }), { threshold: 0.15 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    const trigger = ref.current?.querySelector('[data-route-trigger="1"]');
    if (trigger) obs.observe(trigger);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, []);

  return (
    <>
      <style>{`
        @keyframes cyclops-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes cyclops-float-soft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes cyclops-wave-shift {
          0% { background-position: 0 0; }
          100% { background-position: 200px 0; }
        }
        @keyframes draw-route {
          to { stroke-dashoffset: 0; }
        }
        @keyframes shimmer-ring {
          0%, 100% { box-shadow: 0 0 0 0 rgba(44, 173, 168, 0); }
          50% { box-shadow: 0 0 0 6px rgba(44, 173, 168, 0.18); }
        }
        .cyclops-stop-circle {
          animation: cyclops-float 6s ease-in-out infinite;
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.6s ease, border-color 0.6s ease;
          will-change: transform;
        }
        .cyclops-stop-card:hover .cyclops-stop-circle {
          transform: scale(1.08) translateY(-14px);
          box-shadow: 0 0 50px rgba(44, 173, 168, 0.6), 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          border-color: rgba(44, 173, 168, 0.95);
        }
        .cyclops-stop-card:hover .cyclops-stop-name {
          color: var(--teal-light);
          letter-spacing: 0.12em;
        }
        .cyclops-stop-card:hover .cyclops-stop-number {
          color: var(--teal-light);
          opacity: 1;
        }
        .cyclops-note-circle {
          animation: cyclops-float-soft 7s ease-in-out infinite;
          transition: transform 0.5s ease;
        }
        .cyclops-stop-card:hover .cyclops-note-circle {
          transform: scale(1.05);
        }
        .cyclops-water {
          animation: cyclops-wave-shift 18s linear infinite;
        }
        .cyclops-route-path {
          stroke-dasharray: 1400;
          stroke-dashoffset: 1400;
        }
        .cyclops-route-path.draw {
          animation: draw-route 3s cubic-bezier(0.65, 0, 0.35, 1) 0.3s forwards;
        }
        .cyclops-pulse-ring {
          animation: shimmer-ring 4s ease-in-out infinite;
        }
        .cyclops-stop-name {
          transition: color 0.5s ease, letter-spacing 0.5s ease;
        }
        .cyclops-stop-number {
          transition: color 0.4s ease, opacity 0.4s ease;
        }
      `}</style>

      <section className="relative py-16 md:py-24 overflow-hidden" ref={ref}
        style={{
          background: 'linear-gradient(135deg, #0D1B2A 0%, #1F4E5C 50%, #0D1B2A 100%)',
        }}>
        {/* Animated water texture overlay */}
        <div className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none cyclops-water"
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

          {/* Wrapper for path + grid */}
          <div className="relative reveal" data-route-trigger="1">
            {/* Animated connecting path (desktop only, behind cards) */}
            <div className="hidden lg:block absolute inset-x-0 pointer-events-none" style={{ top: '38%', zIndex: 0 }}>
              <svg className="w-full" height="60" viewBox="0 0 1200 60" preserveAspectRatio="none">
                <path
                  className={`cyclops-route-path ${pathDraw ? 'draw' : ''}`}
                  d="M 60 30 Q 280 0, 460 30 T 740 30 Q 920 0, 1140 30"
                  stroke="rgba(44, 173, 168, 0.65)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="10 6"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Stops grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 relative z-10">
              {stops.map((stop, i) => (
                <div
                  key={i}
                  className="cyclops-stop-card flex flex-col items-center text-center group cursor-pointer"
                  onClick={() => setLightbox(stop.img)}
                >
                  {/* Step number indicator */}
                  <div className="cyclops-stop-number text-white/40 text-xs tracking-[0.3em] mb-3" style={{fontFamily:"'Bebas Neue', sans-serif"}}>
                    STOP {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Name */}
                  <p className="cyclops-stop-name text-white text-base tracking-wider mb-1 px-2" style={{
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

                  {/* Main photo with float + hover scale */}
                  <div className="relative cyclops-pulse-ring rounded-full" style={{ animationDelay: `${i * 1.0}s` }}>
                    <div
                      className="cyclops-stop-circle w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-white/90 shadow-2xl"
                      style={{ animationDelay: `${i * 0.7}s` }}
                    >
                      <img src={stop.img} alt={stop.name.replace('\n', ' ')} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </div>

                  {/* Note (only if present) */}
                  {stop.note && (
                    <div className="mt-6 flex flex-col items-center">
                      <p className="text-white/80 text-xs italic mb-3 max-w-[180px] leading-relaxed">
                        {stop.note}
                      </p>
                      {stop.noteImg && (
                        <div
                          className="cyclops-note-circle w-20 h-20 rounded-full overflow-hidden border-2 border-white/70 shadow-xl"
                          style={{ animationDelay: `${0.4 + i * 0.7}s` }}
                        >
                          <img src={stop.noteImg} alt="" className="w-full h-full object-cover" loading="lazy" />
                        </div>
                      )}
                    </div>
                  )}

                  {/* Subtle hint of interactivity */}
                  <span className="text-white/30 text-[0.6rem] tracking-widest uppercase mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{fontFamily:"'Bebas Neue', sans-serif"}}>
                    Click to zoom
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox modal */}
        {lightbox && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in cursor-zoom-out"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors p-2"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <img
              src={lightbox}
              alt=""
              className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-lg"
              onClick={e => e.stopPropagation()}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default CyclopsRoute;
