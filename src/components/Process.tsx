
  import React from 'react';
import { Calendar, Car, Activity, Coffee, Share2 } from 'lucide-react';
import OrganicImageFrame from './OrganicImageFrame';
import { Card } from './ui/card';

type Step = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: <Calendar className="w-7 h-7" />,
    title: "Booking",
    description: "Simple online booking with clear details and instant confirmation."
  },
  {
    icon: <Car className="w-7 h-7" />,
    title: "Pickup",
    description: "Pickup service from your accommodation to the experience location."
  },
  {
    icon: <Activity className="w-7 h-7" />,
    title: "Activity",
    description: "Professional guidance and top-quality equipment for your adventure."
  },
  {
    icon: <Coffee className="w-7 h-7" />,
    title: "Food & Relax",
    description: "Authentic Sicilian cuisine and relaxation in carefully selected locations."
  },
  {
    icon: <Share2 className="w-7 h-7" />,
    title: "Drop-off & Photos",
    description: "Return transport and a photo recap of your experience."
  }
];

const Process = () => {
  return (
    <section className="section-padding bg-saraventu-light" id="process">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl text-saraventu-dark mb-4">OUR PROCESS</h2>
          <p className="text-lg">
            We think of everything so you can simply enjoy the experience. 
            From the moment you book until after your adventure, every detail is taken care of.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <OrganicImageFrame 
              imageUrl="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=3945&auto=format&fit=crop"
              altText="Person enjoying watersports in Sicily - Saraventu watersports experience"
              className="w-full"
              borderWidth={0}
              borderColor="transparent"
              aspectRatio="16/9"
              roundedCorners={true}
              showShadow={true}
            />
          </div>

          <div className="text-left">
            <span className="bg-[#38A0ED] text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">THE SARAVENTU EXPERIENCE</span>
            <h3 className="text-2xl md:text-3xl font-bebas text-[#333333] mb-4">TAILORED ADVENTURES <span className="text-[#38A0ED]">FOR EVERYONE</span></h3>
            <p className="mb-6">
              Our carefully designed process ensures that every detail of your experience is taken care of, 
              allowing you to fully immerse yourself in the beauty of Sicily's coastlines and the thrill of 
              watersports without any hassle or stress.
            </p>
            <a href="#experiences" className="bg-[#38A0ED] hover:bg-[#38A0ED]/80 text-white px-6 py-3 rounded inline-flex items-center gap-2 transition-all">
              Explore Our Experiences
            </a>
          </div>
        </div>

        <div className="relative mb-16">
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-gradient-to-r from-[#a5d8f3] via-[#38A0ED] to-[#187ebd] z-0 rounded-full"></div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
                <div className="relative mb-4">
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#38A0ED] border-2 border-white flex items-center justify-center text-sm font-bold text-white shadow z-10">
                    {index + 1}
                  </div>
                  <div className="w-20 h-20 rounded-full bg-[#38A0ED] text-white flex items-center justify-center shadow">
                    {step.icon}
                  </div>
                </div>

                <Card className="relative w-full bg-white shadow-sm border-l-4 border-[#38A0ED] px-6 pt-6 pb-8 min-h-[260px] flex flex-col justify-start transition-shadow duration-300 hover:shadow-lg">
                  <div className="flex flex-col items-center mb-4">
                    <h3 className="text-xl font-bebas text-[#333333] mb-2">{step.title}</h3>
                    <div className="w-12 h-1 bg-[#38A0ED] mb-3"></div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed text-center mt-2">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
