
import React from 'react';
import { MapPin } from 'lucide-react';
import OrganicImageFrame from './OrganicImageFrame';

const Location = () => {
  return (
    <section id="location" className="section-padding bg-saraventu-light">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl text-saraventu-dark mb-4">WHERE WE ARE</h2>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <p className="text-base text-gray-700 mb-4">
              Saraventu is based in Catania, Sicily. We operate in the most iconic spots on the east coast:
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center group">
                <div className="bg-[#00B3B3] group-hover:bg-[#00A89D] transition-colors duration-300 p-2 rounded-full text-white mr-3">
                  <MapPin size={16} />
                </div>
                <div>
                  <h3 className="font-bebas text-lg text-saraventu-dark group-hover:underline decoration-[#00B3B3] decoration-2 underline-offset-4">PLAYA DI CATANIA – LIDO LA CUCARACHA</h3>
                  <p className="text-sm text-gray-600">Windsurf, wingfoil, e-foil</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="bg-[#00B3B3] group-hover:bg-[#00A89D] transition-colors duration-300 p-2 rounded-full text-white mr-3">
                  <MapPin size={16} />
                </div>
                <div>
                  <h3 className="font-bebas text-lg text-saraventu-dark group-hover:underline decoration-[#00B3B3] decoration-2 underline-offset-4">ACI TREZZA</h3>
                  <p className="text-sm text-gray-600">SUP & kayak tours</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-3/4">
              <OrganicImageFrame 
                imageUrl="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2070&auto=format&fit=crop" 
                altText="Sicilian Coast - Saraventu watersports locations in Catania" 
                className="aspect-square"
                borderWidth={0}
                borderColor="transparent"
                aspectRatio="4/3"
                roundedCorners={true}
                showShadow={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
