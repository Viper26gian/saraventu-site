import React, { useEffect, useRef } from 'react';

const VideoShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Reveal-on-scroll
    const obs = new IntersectionObserver(
      els => els.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    // Play only while in view (saves bandwidth, feels intentional)
    const vobs = new IntersectionObserver(
      els => els.forEach(e => {
        const v = videoRef.current;
        if (!v) return;
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      }),
      { threshold: 0.25 }
    );
    if (videoRef.current) vobs.observe(videoRef.current);

    return () => { obs.disconnect(); vobs.disconnect(); };
  }, []);

  return (
    <section id="film" className="section-padding bg-[--navy]" ref={ref}>
      <div className="container-custom">

        {/* Centered header */}
        <div className="text-center mb-12 md:mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="gold-rule" />
            <span className="section-label" style={{ color: 'var(--teal-light)' }}>A Glimpse Aboard</span>
            <span className="gold-rule" />
          </div>
          <h2 className="text-white"
            style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: 'clamp(2rem,4vw,3.2rem)', lineHeight: 1.1, textAlign: 'center' }}>
            The Cyclops Riviera <em style={{ color: 'var(--teal-light)' }}>in Motion</em>
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            From the faraglioni of Aci Trezza to the castle of Aci Castello — a few moments aboard Gibigiana.
          </p>
        </div>

        {/* Cinematic video frame */}
        <div className="relative max-w-4xl mx-auto reveal reveal-delay-1">
          <div className="relative overflow-hidden rounded-sm shadow-2xl aspect-video bg-black ring-1 ring-white/10">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="/lovable-uploads/saraventu-reel.mp4"
              poster="/lovable-uploads/DSC02206.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Saraventu sailing reel — Catania, Sicily"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/25 via-transparent to-black/10" />
          </div>
          <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-[--gold]/70 pointer-events-none" />
          <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-[--gold]/70 pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

export default VideoShowcase;
