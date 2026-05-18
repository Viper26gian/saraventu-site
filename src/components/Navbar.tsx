import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const close = () => setOpen(false);
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); close(); };
  const wa = 'https://wa.me/393477235208?text=' + encodeURIComponent("Hi! I found you on saraventu.it and I'd like to book a sailing experience.");

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass border-b border-white/20 shadow-sm py-3' : 'bg-transparent py-5'}`} aria-label="Main navigation">
      <div className="container-custom flex items-center justify-between">
        <a href="/" aria-label="Saraventu home">
          <img
            alt="Saraventu"
            className={`transition-all duration-300 ${scrolled ? 'h-8' : 'h-9 brightness-0 invert'}`}
            width="160" height="36"
            src="/lovable-uploads/9e99fd4c-fdea-49d8-8328-f423f0dc6b0d.png"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[['About', 'about'], ['Experiences', 'experiences'], ['Why Us', 'why-us'], ['Contact', 'contact']].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}
              className={`text-xs font-lexend tracking-widest uppercase transition-colors duration-200 ${scrolled ? 'text-[--navy] hover:text-[--teal]' : 'text-white/90 hover:text-white'}`}>
              {label}
            </button>
          ))}
          <div className={`w-px h-4 ${scrolled ? 'bg-gray-300' : 'bg-white/30'}`} />
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp py-2 px-4 text-xs">
            <MessageCircle size={13} /> WhatsApp
          </a>
          <div className="flex items-center gap-3">
            {[
              { label: 'Instagram', href: 'https://www.instagram.com/saraventu.sail/', d: <><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></> },
              { label: 'TikTok', href: 'https://www.tiktok.com/@saraventu.sail', d: <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/> },
            ].map(({ label, href, d }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className={`transition-colors ${scrolled ? 'text-[--navy] hover:text-[--teal]' : 'text-white/75 hover:text-white'}`}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{d}</svg>
              </a>
            ))}
          </div>
        </div>

        <button className={`md:hidden p-2 transition-colors ${scrolled ? 'text-[--navy]' : 'text-white'}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-white/20 animate-fade-in">
          <div className="container-custom py-6 flex flex-col gap-4">
            {[['About Us', 'about'], ['Our Experiences', 'experiences'], ['Why Choose Us', 'why-us'], ['Contact', 'contact']].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-left text-xs font-lexend tracking-widest uppercase text-[--navy] hover:text-[--teal] transition-colors py-1">{label}</button>
            ))}
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-2 text-xs self-start">
              <MessageCircle size={13} /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
