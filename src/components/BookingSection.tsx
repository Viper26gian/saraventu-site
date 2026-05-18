import React, { useEffect, useRef } from 'react';
import { MessageCircle, Mail, Anchor } from 'lucide-react';

const BookingSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(els => els.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:0.1});
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const wa = 'https://wa.me/393477235208?text=' + encodeURIComponent("Hi! I'd like to book a sailing experience with Saraventu. Can you help me?");

  return (
    <section id="booking" className="relative section-padding overflow-hidden" ref={ref}>
      {/* full-bleed photo background */}
      <div className="absolute inset-0">
        <img src="/lovable-uploads/DSC02399.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/90 via-[#0D1B2A]/70 to-transparent" />
      </div>

      <div className="relative z-10 container-custom">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6 reveal">
            <span className="gold-rule" />
            <span className="section-label">Reserve Your Experience</span>
          </div>

          <h2 className="text-white mb-4 reveal reveal-delay-1"
            style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontSize:'clamp(2rem,4.5vw,3.5rem)', lineHeight:1.05}}>
            Ready to Set Sail?
          </h2>

          <div className="flex items-center gap-2 mb-6 reveal reveal-delay-1">
            <Anchor size={14} className="text-[--gold]" />
            <span className="text-white/60 text-sm font-lexend tracking-wider uppercase">Membership included with every booking</span>
          </div>

          <p className="text-white/70 leading-relaxed mb-10 max-w-lg reveal reveal-delay-2">
            All activities are reserved for Saraventu members — registration is included as part of the booking process.
            Choose your experience and secure your spot by reaching out directly.
          </p>

          <div className="flex flex-wrap gap-4 reveal reveal-delay-2">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle size={15} /> Book via WhatsApp
            </a>
            <a href="mailto:info@saraventu.it" className="btn-ghost">
              <Mail size={15} /> Book via Email
            </a>
          </div>

          <p className="text-white/40 text-xs mt-6 font-lexend tracking-widest uppercase reveal reveal-delay-3">
            We usually reply within 1 hour · info@saraventu.it
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
