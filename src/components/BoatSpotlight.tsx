import React from 'react';
import { Anchor, Users, Bed, Wind, Star, MessageCircle } from 'lucide-react';

const BoatSpotlight = () => {
  const specifications = [
    { icon: Anchor, label: "Length", value: "43.4 ft" },
    { icon: Users, label: "Max Guests", value: "8 people" },
    { icon: Bed, label: "Cabins", value: "4 cabins" },
    { icon: Wind, label: "Sail Area", value: "85 m²" },
    { icon: Star, label: "Comfort", value: "Premium" },
  ];

  const whatsappUrl = 'https://wa.me/393477235208?text=' + encodeURIComponent("Hi! I'd like to book a sailing experience on Gibigiana. Can you help me?");

  return (
    <section className="section-padding bg-gradient-to-br from-saraventu-light to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#38A0ED]/10 px-6 py-3 rounded-full mb-6">
            <Anchor className="text-[#38A0ED] w-6 h-6 mr-3" />
            <span className="text-lg font-medium text-[#38A0ED]">Meet Our Sailing Yacht</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bebas text-saraventu-dark mb-6">GIBIGIANA</h2>
          <div className="w-24 h-1 bg-[#38A0ED] rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our premium <strong>Beneteau Cyclades 43.4</strong> sailing yacht combines elegance,
            comfort, and performance for the ultimate Sicilian sailing experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
          {/* Left: photos grid */}
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-3">
            {/* Boat with full sails — wide shot */}
            <div className="col-span-2 rounded-2xl overflow-hidden shadow-lg h-56 md:h-72">
              <img
                src="/lovable-uploads/Image_4.png"
                alt="Gibigiana sailing yacht with full sails"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Interior */}
            <div className="rounded-xl overflow-hidden shadow-md h-40">
              <img
                src="/lovable-uploads/Image_5.png"
                alt="Comfortable cabin interior of Gibigiana"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Aperitivo on deck */}
            <div className="rounded-xl overflow-hidden shadow-md h-40">
              <img
                src="/lovable-uploads/Image_6.png"
                alt="Aperitivo spritz on sailing deck"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: specs */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bebas text-saraventu-dark mb-6">BENETEAU CYCLADES 43.4</h3>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {specifications.map((spec, index) => {
                  const IconComponent = spec.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#38A0ED]/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-[#38A0ED]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{spec.label}</p>
                        <p className="font-semibold text-saraventu-dark">{spec.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-saraventu-dark mb-3">Key Features:</h4>
                {[
                  "Large cockpit with comfortable seating for 8 guests",
                  "Fully equipped galley with refrigerator and stove",
                  "Swimming platform for easy sea access",
                  "SUP board, floats & snorkeling gear included",
                  "Professional sailing equipment and safety gear",
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600 list-none">
                    <div className="w-2 h-2 bg-[#38A0ED] rounded-full mr-3 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#38A0ED] to-[#2A92D8] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bebas mb-4">READY TO SAIL WITH GIBIGIANA?</h3>
            <p className="text-lg mb-6 opacity-90">
              Experience the perfect blend of comfort and adventure aboard our premium sailing yacht
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <MessageCircle size={18} />
              Book via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoatSpotlight;
