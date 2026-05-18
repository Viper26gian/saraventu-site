import React, { useEffect, useRef } from "react";
import { MessageCircle, Clock, Users } from "lucide-react";

const experiences = [
  {
    tag: "8 Hours",
    title: "Full-Day Boutique Sailing",
    tagline: "A complete Sicilian escape",
    desc: "Sail, swim, dine, and watch the sunset. A full day immersed in Sicily coast — from volcanic sea stacks to secluded bays, culminating in a golden-hour return to Catania.",
    perfect: "Couples, honeymooners, small groups seeking authentic elevated local experiences.",
    img: "/lovable-uploads/DSC01946.jpg",
    accent: "var(--teal)",
    guests: "Up to 10",
  },
  {
    tag: "4 Hours",
    title: "Half-Day Brunch & Swim Tour",
    tagline: "A refreshing coastal morning",
    desc: "A refreshing coastal sail with authentic Sicilian brunch and swim stop. Perfect for spontaneous adventurers who want to taste Sicily by sea in half a day.",
    perfect: "Young travelers, day-trippers, cruise guests, short-stay visitors.",
    img: "/lovable-uploads/Image_2.png",
    accent: "var(--teal-light)",
    guests: "Up to 10",
  },
  {
    tag: "4 Hours",
    title: "Sunset Aperitif Cruise",
    tagline: "La Dolce Vita on water",
    desc: "Sail into the golden hour with music, a Sicilian aperitif spread, and the possibility of dolphin watching along the Cyclops Riviera.",
    perfect: "Travelers who seek comfort, storytelling, and the feeling of La Dolce Vita.",
    img: "/lovable-uploads/DSC01915.jpg",
    accent: "var(--gold)",
    guests: "Up to 10",
  },
];

const SailingExperiences = () => {
  const ref = useRef<HTMLDivElement>(null);
  const wa = (title: string) => "https://wa.me/393477235208?text=" + encodeURIComponent("Hi! I am interested in the " + title + " experience. Can you give me more info?");

  useEffect(() => {
    const obs = new IntersectionObserver(els => els.forEach(e => { if(e.isIntersecting) e.target.classList.add("visible"); }), {threshold:0.08});
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experiences" className="section-padding bg-cream" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="teal-rule" />
            <span className="section-label">Signature Experiences</span>
            <span className="teal-rule" />
          </div>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontSize:"clamp(2rem,4vw,3.2rem)", lineHeight:1.05, color:"var(--navy)"}}>
            Our Curated Sailings
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Three distinct ways to experience Sicily legendary Cyclops Riviera — each all-inclusive, each unforgettable.
          </p>
        </div>

        <div className="space-y-2">
          {experiences.map((exp, i) => (
            <div key={i} className={"reveal reveal-delay-" + (i+1) + " grid md:grid-cols-2 gap-0 overflow-hidden" + (i%2===1 ? " md:[&>*:first-child]:order-2" : "")}>
              <div className="img-hover h-72 md:h-auto min-h-[320px]">
                <img src={exp.img} alt={exp.title} className="w-full h-full object-cover" />
              </div>
              <div className="bg-white p-10 md:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-lexend tracking-widest uppercase border"
                    style={{color: exp.accent, borderColor: exp.accent}}>
                    <Clock size={11} /> {exp.tag}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-lexend tracking-widest uppercase border border-gray-200 text-gray-400">
                    <Users size={11} /> {exp.guests}
                  </span>
                </div>
                <h3 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:"clamp(1.6rem,2.5vw,2.2rem)", color:"var(--navy)", lineHeight:1.1}} className="mb-2">
                  {exp.title}
                </h3>
                <p className="italic mb-5 text-sm" style={{color: exp.accent, fontFamily:"'Cormorant Garamond',serif", fontSize:"1.05rem"}}>{exp.tagline}</p>
                <div className="w-10 h-px mb-6" style={{background: exp.accent}} />
                <p className="text-gray-600 leading-relaxed mb-5 text-sm">{exp.desc}</p>
                <div className="bg-gray-50 border-l-2 p-4 mb-8 text-sm" style={{borderColor: exp.accent}}>
                  <p className="text-xs font-lexend tracking-widest uppercase text-gray-400 mb-1">Perfect for</p>
                  <p className="text-gray-600 italic" style={{fontFamily:"'Cormorant Garamond',serif"}}>{exp.perfect}</p>
                </div>
                <a href={wa(exp.title)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp self-start">
                  <MessageCircle size={14} /> Book This Experience
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2 bg-[--navy] text-white flex flex-wrap items-center justify-center gap-10 py-6 px-8 reveal">
          <div className="flex items-center gap-3">
            <span className="text-xs font-lexend tracking-widest uppercase text-white/40">Languages</span>
            <span className="text-white font-light" style={{fontFamily:"'Cormorant Garamond',serif", fontSize:"1.1rem"}}>English & Italian</span>
          </div>
          <div className="w-px h-5 bg-white/20" />
          <div className="flex items-center gap-3">
            <span className="text-xs font-lexend tracking-widest uppercase text-white/40">Capacity</span>
            <span className="text-white font-light" style={{fontFamily:"'Cormorant Garamond',serif", fontSize:"1.1rem"}}>Up to 10 people</span>
          </div>
          <div className="w-px h-5 bg-white/20" />
          <div className="flex items-center gap-3">
            <span className="text-xs font-lexend tracking-widest uppercase text-white/40">Departure</span>
            <span className="text-white font-light" style={{fontFamily:"'Cormorant Garamond',serif", fontSize:"1.1rem"}}>Blu Marina SRL, Catania</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SailingExperiences;
