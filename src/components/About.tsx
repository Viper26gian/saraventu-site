import React, { useEffect, useRef } from 'react';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(els => els.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:0.12});
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding bg-cream" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ── Images ─────────────────────────────── */}
          <div className="relative h-[520px] lg:h-[620px] reveal">
            {/* Main — skipper */}
            <div className="absolute top-0 left-0 w-[68%] h-[72%] img-hover rounded-sm overflow-hidden shadow-2xl">
              <img src="/lovable-uploads/DSC02251.jpg" alt="Saraventu skipper and crew" className="w-full h-full object-cover object-top" />
            </div>
            {/* Second — helm */}
            <div className="absolute bottom-0 right-0 w-[56%] h-[54%] img-hover rounded-sm overflow-hidden shadow-xl border-2 border-white">
              <img src="/lovable-uploads/DSC02197.jpg" alt="Guest at the helm" className="w-full h-full object-cover object-top" />
            </div>
            {/* Gold rule accent */}
            <div className="absolute top-[69%] left-[65%] w-12 h-12 border border-[--gold] rounded-full opacity-60" />
            <div className="absolute top-[72%] left-[62%] w-5 h-5 border border-[--gold] rounded-full opacity-40" />
          </div>

          {/* ── Text ───────────────────────────────── */}
          <div>
            <div className="flex items-center gap-3 mb-6 reveal reveal-delay-1">
              <span className="gold-rule" />
              <span className="section-label">Our Story</span>
            </div>

            <h2 className="text-navy mb-6 reveal reveal-delay-1"
              style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontSize:'clamp(2rem,4vw,3.2rem)', lineHeight:1.1}}>
              We Live<br /><em>for the Wind</em>
            </h2>

            <span className="gold-rule-full mb-8 block reveal reveal-delay-1" />

            <div className="inline-flex items-center gap-2 bg-white border border-[--gold]/30 px-4 py-2 mb-8 reveal reveal-delay-2">
              <span className="text-xs font-lexend tracking-widest uppercase text-[--gold]">Gibigiana · Beneteau Cyclades 43.4 · Catania</span>
            </div>

            <p className="text-[--navy-mid] leading-relaxed mb-5 reveal reveal-delay-2" style={{fontSize:'1.05rem'}}>
              Saraventu was founded by two sea lovers with more than 20 years of experience in sailing,
              windsurfing, and water sports. What started as a passion became a mission: to share the
              beauty and freedom of Sicily's sea in a relaxed and authentic way.
            </p>
            <p className="text-[--navy-mid] leading-relaxed mb-10 reveal reveal-delay-2" style={{fontSize:'1.05rem'}}>
              We are not a big tour company. We're locals who care about creating meaningful moments
              on the water — every detail, from the anchor spot to the aperitif, is designed to make
              you feel part of something real.
            </p>

            <div className="flex gap-10 reveal reveal-delay-3">
              <div className="border-l border-[--gold] pl-5">
                <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'2rem', fontWeight:300, color:'var(--navy)'}}>20+</p>
                <p className="text-xs font-lexend tracking-widest uppercase text-gray-500">Years on Sicily's waters</p>
              </div>
              <div className="border-l border-[--gold] pl-5">
                <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'2rem', fontWeight:300, color:'var(--navy)'}}>500+</p>
                <p className="text-xs font-lexend tracking-widest uppercase text-gray-500">Happy guests</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
