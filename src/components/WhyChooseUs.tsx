import React, { useEffect, useRef } from 'react';
import { Users, CheckCircle2, Map } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    num: '01',
    title: 'Authentic Local Expertise',
    body: "Our instructors are born and raised on Sicily's coast, bringing decades of deep local knowledge that tourists rarely experience.",
  },
  {
    icon: CheckCircle2,
    num: '02',
    title: 'All-Inclusive Adventures',
    body: 'From pickup to equipment, gourmet meals to photos — everything is handled so you can focus entirely on creating memories.',
  },
  {
    icon: Map,
    num: '03',
    title: 'Exclusive Secret Locations',
    body: "We access hidden gems and secret spots that mass tourism hasn't discovered, offering pristine waters and breathtaking backdrops.",
  },
];

const WhyChooseUs = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(els => els.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:0.1});
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="why-us" className="section-padding bg-navy text-white" ref={ref}>
      <div className="container-custom">

        {/* Centered header */}
        <div className="text-center mb-16 md:mb-20 reveal max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="gold-rule" />
            <span className="section-label">Why Saraventu</span>
            <span className="gold-rule" />
          </div>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontSize:'clamp(2rem,4vw,3.2rem)', lineHeight:1.1}}>
            Not Just Another <em style={{color:'var(--teal-light)'}}>Boat Rental</em>
          </h2>
          <p className="text-white/60 mt-6 max-w-lg mx-auto leading-relaxed">
            We craft premium, authentic Sicilian experiences that combine exceptional seamanship
            with insider access to the island's hidden treasures.
          </p>
        </div>

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-px bg-white/10">
          {benefits.map(({ icon: Icon, num, title, body }, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i+1} bg-navy p-10 group hover:bg-[--navy-mid] transition-colors duration-300`}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 border border-[--gold]/40 flex items-center justify-center group-hover:border-[--gold] transition-colors">
                  <Icon size={20} className="text-[--gold]" strokeWidth={1.5} />
                </div>
                <span style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'4rem', fontWeight:300, lineHeight:1, color:'rgba(27,138,138,0.15)'}}>{num}</span>
              </div>
              <h3 className="text-white mb-4" style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:'1.4rem'}}>{title}</h3>
              <p className="text-white/55 leading-relaxed text-sm">{body}</p>
              <div className="mt-8 w-8 h-px bg-[--gold]/40 group-hover:w-16 group-hover:bg-[--gold] transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* bottom image strip (no faces) */}
        <div className="mt-px grid grid-cols-3 gap-px h-48 overflow-hidden">
          {['/lovable-uploads/20250801_192926.jpg','/lovable-uploads/DSC02399.jpg','/lovable-uploads/Image_1.png'].map((src,i) => (
            <div key={i} className="img-hover overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
