import React, { useEffect, useRef } from 'react';

const categories = [
  {
    label: 'Food & Beverages',
    img: '/lovable-uploads/Image_6.png',
    items: ['Welcome drinks & light bites', 'Cocktails, Wine & Beer', 'Soft drinks & Water', 'Freshly prepared Sicilian-style lunch', 'Aperitif & light dinner'],
  },
  {
    label: 'Comfort & Amenities',
    img: '/lovable-uploads/DSC02084.jpg',
    items: ['Cushions & shaded areas', 'Soft towels', 'Sunscreen', 'Waterproof phone cases', 'Bathrooms & WCs', 'Music & ambiance'],
  },
  {
    label: 'Activities & Equipment',
    img: '/lovable-uploads/Image_2.png',
    items: ['Comfortable floaties & mattresses', 'Paddleboard (SUP)', 'Snorkels', 'Life vests', 'Dinghy'],
  },
  {
    label: 'Crew & Services',
    img: '/lovable-uploads/DSC02251.jpg',
    items: ['Professional skipper', 'Hostess on board', 'Fuel included', 'Safety briefing'],
  },
];

const OnBoard = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(els => els.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:0.08});
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section-padding bg-ice" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="teal-rule" />
            <span className="section-label">All-Inclusive</span>
            <span className="teal-rule" />
          </div>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontSize:'clamp(2rem,4vw,3rem)', lineHeight:1.05, color:'var(--navy)'}}>
            Available on Board
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Everything is included — so you can focus entirely on enjoying the sea.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-1 reveal reveal-delay-1">
          {categories.map((cat, i) => (
            <div key={i} className="group overflow-hidden bg-white">
              {/* Photo header */}
              <div className="h-44 img-hover overflow-hidden relative">
                <img src={cat.img} alt={cat.label} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[--navy]/50 group-hover:bg-[--teal]/50 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-xs font-lexend tracking-widest uppercase">{cat.label}</p>
                </div>
              </div>
              {/* List */}
              <div className="p-5">
                <ul className="space-y-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[--teal] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-1 bg-[--navy] text-white px-8 py-4 text-center reveal reveal-delay-2">
          <p className="text-xs font-lexend tracking-widest uppercase text-white/40">Not Included</p>
          <p className="text-white/70 text-sm mt-1">Tips & Gratuities (discretionary)</p>
        </div>
      </div>
    </section>
  );
};
export default OnBoard;
