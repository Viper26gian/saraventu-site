import React from 'react';
import { MessageCircle } from 'lucide-react';

const Footer = () => {
  const wa = 'https://wa.me/393477235208?text=' + encodeURIComponent("Hi! I found you on saraventu.it and I'd like more information.");

  return (
    <footer className="bg-navy text-white">
      {/* Top strip */}
      <div className="gold-rule-full" />

      <div className="container-custom py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <img src="/lovable-uploads/9e99fd4c-fdea-49d8-8328-f423f0dc6b0d.png" alt="Saraventu" className="h-9 brightness-0 invert mb-6" />
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              Premium sailing experiences in Sicily — where the Mediterranean meets authentic local culture.
              Departing from Catania Marina.
            </p>
            <a href={wa} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white text-xs font-lexend tracking-widest uppercase px-5 py-3 transition-colors">
              <MessageCircle size={13} /> WhatsApp Us
            </a>
          </div>

          {/* Links */}
          <div>
            <p className="section-label mb-6">Navigate</p>
            <ul className="space-y-3">
              {[['About Us','#about'],['Experiences','#experiences'],['Why Choose Us','#why-us'],['Contact','#contact']].map(([l,h]) => (
                <li key={l}><a href={h} className="text-white/45 hover:text-[--gold] text-sm transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-6">Contact</p>
            <ul className="space-y-3 text-sm text-white/45">
              <li><a href="tel:+393477235208" className="hover:text-[--gold] transition-colors">+39 347 723 5208</a></li>
              <li><a href="mailto:info@saraventu.it" className="hover:text-[--gold] transition-colors">info@saraventu.it</a></li>
              <li><a href="https://www.saraventu.it" className="hover:text-[--gold] transition-colors">www.saraventu.it</a></li>
              <li className="text-white/30">Catania Marina, Sicily — IT</li>
            </ul>
            <div className="flex gap-4 mt-6">
              {[
                {label:'Instagram', href:'https://www.instagram.com/saraventu.sail/', d:<><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></>},
                {label:'Facebook', href:'https://www.facebook.com/profile.php?id=61579270708094', d:<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>},
                {label:'TikTok', href:'https://www.tiktok.com/@saraventu.sail', d:<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>},
              ].map(({label,href,d}) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="text-white/35 hover:text-[--gold] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{d}</svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/30 text-xs font-lexend">
          <span>© {new Date().getFullYear()} Saraventu. All rights reserved.</span>
          <span className="italic" style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'0.9rem', fontStyle:'italic'}}>Where the wind begins the story</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
