import React, { useState, useEffect, useRef } from 'react';
import { X, ZoomIn } from 'lucide-react';

const photos = [
  { src: "/lovable-uploads/DSC01915.jpg",  alt: "Guest enjoying the sail" },
  { src: "/lovable-uploads/DSC02197.jpg",  alt: "At the helm of Gibigiana" },
  { src: "/lovable-uploads/DSC02251.jpg",  alt: "Skipper and crew laughing" },
  { src: "/lovable-uploads/DSC01946.jpg",  alt: "Couple on board" },
  { src: "/lovable-uploads/DSC02399.jpg",  alt: "Guests at the bow" },
  { src: "/lovable-uploads/Image_1.png",   alt: "Blue Sicilian sea" },
  { src: "/lovable-uploads/Image_2.png",   alt: "Swimming stop at Aci Trezza" },
  { src: "/lovable-uploads/Image_3.jpg",   alt: "Group on the floating mat" },
  { src: "/lovable-uploads/DSC02042.jpg",  alt: "Aci Castello from the sea" },
  { src: "/lovable-uploads/DSC02206.jpg",  alt: "Golden hour Aci Trezza" },
  { src: "/lovable-uploads/Image_6.png",   alt: "Aperitivo spritz on deck" },
  { src: "/lovable-uploads/DSC02084.jpg",  alt: "Floating rings in the sea" },
];

const PhotoGallery = () => {
  const [lb, setLb] = useState<string|null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(els => els.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:0.05});
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => { if(e.key==='Escape') setLb(null); };
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, []);

  return (
    <section className="section-padding bg-ice" ref={ref}>
      <div className="container-custom">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="gold-rule" />
            <span className="section-label">Gallery</span>
            <span className="gold-rule" />
          </div>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontSize:'clamp(2rem,4vw,3rem)', lineHeight:1.1, color:'var(--navy)'}}>
            Life on Board
          </h2>
        </div>

        {/* Masonry grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i%3)+1} break-inside-avoid img-hover cursor-pointer group relative`}
              onClick={() => setLb(photo.src)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto block"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[--navy]/0 group-hover:bg-[--navy]/30 transition-all duration-400 flex items-center justify-center">
                <ZoomIn size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lb && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setLb(null)}>
          <button className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors p-2" onClick={() => setLb(null)}>
            <X size={26} />
          </button>
          <img src={lb} alt="" className="max-w-full max-h-[90vh] object-contain shadow-2xl" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
