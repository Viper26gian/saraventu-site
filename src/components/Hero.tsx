import React from 'react';
import { MessageCircle, ChevronDown } from 'lucide-react';

const Hero = () => {
  const wa = 'https://wa.me/393477235208?text=' + encodeURIComponent("Hi! I found you on saraventu.it and I'd like to book a sailing experience.");

  return (
    <section className="relative min-h-screen w-full flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src="/lovable-uploads/DSC02206.jpg" alt="Sailing in Sicily" className="w-full h-full object-cover object-center" fetchpriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/30 to-transparent" />
      </div>

      <div className="relative z-10 w-full container-custom pb-24 md:pb-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-in" style={{animationDelay:'0.1s'}}>
            <span className="teal-rule" />
            <span className="section-label" style={{color:'var(--teal-light)'}}>Catania, Sicily — Cyclops Riviera</span>
            <span className="teal-rule" />
          </div>

          <h1 className="text-white text-shadow-lg mb-2 animate-fade-up"
            style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontSize:'clamp(2.8rem,7.5vw,6rem)', lineHeight:1.0, animationDelay:'0.2s' }}>
            Sail, Savor
          </h1>
          <h1 className="text-shadow-lg mb-8 animate-fade-up"
            style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontSize:'clamp(2.8rem,7.5vw,6rem)', lineHeight:1.0, color:'var(--teal-light)', fontStyle:'italic', animationDelay:'0.3s' }}>
            & Swim
          </h1>

          <p className="text-white/75 text-lg md:text-xl font-light max-w-xl mb-10 leading-relaxed animate-fade-up" style={{animationDelay:'0.4s'}}>
            All-inclusive curated day trips along Catania's coast — aboard <strong className="text-white font-normal">Gibigiana</strong>, our premium Beneteau Cyclades 43.4.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up" style={{animationDelay:'0.55s'}}>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle size={16} /> Book via WhatsApp
            </a>
            <button onClick={() => document.getElementById('experiences')?.scrollIntoView({behavior:'smooth'})} className="btn-ghost">
              Our Experiences
            </button>
          </div>
        </div>
      </div>

      {/* Stats ribbon — brochure style */}
      <div className="absolute bottom-0 right-0 z-10 hidden lg:flex">
        <div className="glass-dark px-8 py-5 flex gap-10 border-t border-[--teal]/30">
          {[['Up to 10', 'Guests on board'], ['8 hrs', 'Full-day option'], ['3', 'Signature experiences']].map(([v,l]) => (
            <div key={l} className="text-center">
              <p className="text-white" style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'1.7rem', fontWeight:300}}>{v}</p>
              <p className="text-white/45 text-[0.6rem] tracking-widest uppercase mt-0.5" style={{fontFamily:"'Bebas Neue',sans-serif"}}>{l}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex flex-col items-center gap-1" style={{animation:'float-center 3s ease-in-out infinite', left:'50%', transform:'translateX(-50%)'}}>
        <span className="text-white/40 text-[0.6rem] tracking-widest uppercase" style={{fontFamily:"'Bebas Neue',sans-serif"}}>Scroll</span>
        <ChevronDown size={16} className="text-white/40" />
      </div>
    </section>
  );
};

export default Hero;
