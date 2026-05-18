import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'' });
  const [status, setStatus] = useState<'idle'|'sending'|'sent'>('idle');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(els => els.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:0.08});
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const wa = 'https://wa.me/393477235208?text=' + encodeURIComponent("Hi! I found you on saraventu.it and I'd like more information about your sailing experiences.");

  const handle = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setForm(p => ({...p, [e.target.name]: e.target.value}));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const s = encodeURIComponent(`New inquiry from ${form.name} - saraventu.it`);
    const b = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone||'—'}\n\n${form.message}`);
    window.location.href = `mailto:info@saraventu.it?subject=${s}&body=${b}`;
    setTimeout(() => { setStatus('sent'); setForm({name:'',email:'',phone:'',message:''}); }, 500);
  };

  const inputClass = "w-full bg-white border border-gray-200 px-4 py-3 text-sm font-lexend text-navy focus:outline-none focus:border-[--ocean] transition-colors placeholder:text-gray-400";

  return (
    <section id="contact" className="section-padding bg-cream" ref={ref}>
      <div className="container-custom">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="gold-rule" />
            <span className="section-label">Get in Touch</span>
            <span className="gold-rule" />
          </div>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontSize:'clamp(2rem,4vw,3rem)', lineHeight:1.1, color:'var(--navy)'}}>
            Questions? Custom Requests?
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Planning a private event, birthday, or romantic escape at sea? We love to craft personalized experiences.
          </p>
        </div>

        {/* WhatsApp CTA strip */}
        <div className="bg-navy text-white flex flex-col sm:flex-row items-center justify-between gap-5 px-8 py-6 mb-14 reveal reveal-delay-1">
          <div>
            <p className="text-white font-light mb-1" style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'1.3rem'}}>Fastest response via WhatsApp</p>
            <p className="text-white/50 text-xs font-lexend tracking-widest uppercase">We usually reply within 1 hour</p>
          </div>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp whitespace-nowrap">
            <MessageCircle size={15} /> Chat on WhatsApp
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 reveal reveal-delay-2">

          {/* Contact info */}
          <div>
            <h3 className="text-navy mb-8" style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:'1.5rem'}}>Other Ways to Reach Us</h3>
            <div className="space-y-1">
              {[
                { icon: Phone, label: 'Phone', value: '+39 347 723 5208', href: 'tel:+393477235208' },
                { icon: Mail,  label: 'Email', value: 'info@saraventu.it',   href: 'mailto:info@saraventu.it' },
                { icon: MapPin,label: 'Location', value: 'Catania Marina, Sicily', href: 'https://maps.app.goo.gl/X9RNFmmXwfDLSAYZ6' },
              ].map(({icon:Icon, label, value, href}) => (
                <a key={label} href={href} target={href.startsWith('http')?'_blank':undefined} rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 bg-white hover:bg-white shadow-sm hover:shadow-md transition-all group">
                  <div className="w-10 h-10 border border-[--teal]/40 group-hover:border-[--teal] flex items-center justify-center transition-colors flex-shrink-0">
                    <Icon size={16} className="text-[--teal]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-lexend tracking-widest uppercase text-gray-400 mb-0.5">{label}</p>
                    <p className="text-navy text-sm">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white shadow-sm p-8">
            <h3 className="text-navy mb-6" style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:'1.5rem'}}>Send a Message</h3>

            {status === 'sent' ? (
              <div className="flex flex-col items-center py-12 text-center">
                <CheckCircle size={40} className="text-[#25D366] mb-4" />
                <p className="text-navy font-light" style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'1.4rem'}}>Message sent!</p>
                <p className="text-gray-500 text-sm mt-2">Your email client has opened. We'll get back to you soon.</p>
                <button onClick={() => setStatus('idle')} className="mt-5 text-xs font-lexend tracking-widest uppercase text-[--ocean] underline">Send another</button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-lexend tracking-widest uppercase text-gray-400 mb-1.5">Name *</label>
                    <input name="name" required value={form.name} onChange={handle} placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-lexend tracking-widest uppercase text-gray-400 mb-1.5">Phone</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handle} placeholder="+39..." className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-lexend tracking-widest uppercase text-gray-400 mb-1.5">Email *</label>
                  <input name="email" type="email" required value={form.email} onChange={handle} placeholder="you@email.com" className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-lexend tracking-widest uppercase text-gray-400 mb-1.5">Message *</label>
                  <textarea name="message" required rows={4} value={form.message} onChange={handle}
                    placeholder="Tell us your ideal experience, dates, group size..." className={`${inputClass} resize-none`} />
                </div>
                <button type="submit" disabled={status==='sending'}
                  className="w-full flex items-center justify-center gap-2 bg-navy hover:bg-[--navy-mid] disabled:opacity-60 text-white text-xs font-lexend tracking-widest uppercase px-6 py-4 transition-colors">
                  <Send size={14} />
                  {status==='sending' ? 'Opening…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
