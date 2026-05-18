import React, { useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';

const addons = [
  { icon: '📸', label: 'Professional photographer' },
  { icon: '🎂', label: 'Birthday cake or extra catering' },
  { icon: '🚗', label: 'Private transfers' },
  { icon: '🥂', label: 'Champagne packages' },
  { icon: '🦞', label: 'Caviar & raw fish menu' },
  { icon: '🎊', label: 'Special decoration' },
  { icon: '🎵', label: 'Onboard entertainment' },
  { icon: '✨', label: 'And many more upon request' },
];

const CustomPackages = () => {
  const ref = useRef<HTMLDivElement>(null);
  const wa = 'https://wa.me/393477235208?text=' + encodeURIComponent("Hi! I'd like to discuss a custom sailing package with Saraventu.");
  useEffect(() => {
    const obs = new IntersectionObserver(els => els.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:0.08});
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section-padding bg-cream" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — photos */}
          <div className="grid grid-cols-2 gap-1 h-[420px] reveal">
            <div className="img-hover overflow-hidden row-span-2">
              <img src="/lovable-uploads/DSC02399.jpg" alt="Custom sailing" className="w-full h-full object-cover" />
            </div>
            <div className="img-hover overflow-hidden">
              <img src="/lovable-uploads/DSC02197.jpg" alt="Sailing experience" className="w-full h-full object-cover" />
            </div>
            <div className="img-hover overflow-hidden">
              <img src="/lovable-uploads/Image_6.png" alt="Aperitivo" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right — content */}
          <div>
            <div className="flex items-center gap-3 mb-6 reveal">
              <span className="teal-rule" />
              <span className="section-label">Bespoke</span>
            </div>
            <h2 className="text-navy mb-4 reveal reveal-delay-1"
              style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontSize:'clamp(2rem,4vw,3rem)', lineHeight:1.05}}>
              Custom Packages
            </h2>
            <span className="teal-rule-full mb-6 reveal reveal-delay-1" />
            <p className="text-gray-600 leading-relaxed mb-8 text-sm reveal reveal-delay-2">
              Upon request, we can curate a custom or themed experience — from romantic getaways to birthday celebrations. Tell us your vision and we'll make it happen on the water.
            </p>

            {/* Add-ons grid */}
            <div className="grid grid-cols-2 gap-3 mb-8 reveal reveal-delay-2">
              {addons.map((a, i) => (
                <div key={i} className="flex items-center gap-3 bg-white border border-gray-100 px-4 py-3">
                  <span className="text-lg">{a.icon}</span>
                  <span className="text-sm text-gray-600">{a.label}</span>
                </div>
              ))}
            </div>

            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary reveal reveal-delay-3">
              <MessageCircle size={15} /> Request Custom Package
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CustomPackages;
