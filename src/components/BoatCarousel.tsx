
import React from 'react';
import { Anchor } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import OrganicImageFrame from './OrganicImageFrame';
import Autoplay from 'embla-carousel-autoplay';

// Updated with actual Saraventu sailing photos
const boatPhotos = [
  {
    id: 1,
    url: "/lovable-uploads/0e617711-2548-4af2-9da3-84e66fa06dbb.png",
    alt: "Guests enjoying the sailing experience with Sicilian coastline view"
  },
  {
    id: 2,
    url: "/lovable-uploads/aeaca63e-cfed-4ba9-b5bf-16763c1a5ef1.png",
    alt: "Sailing along the volcanic Sicilian coast near Catania"
  },
  {
    id: 3,
    url: "/lovable-uploads/c0a20629-c57b-4ca0-9941-ed17eecc05ba.png",
    alt: "Swimming break during sailing excursion in crystal clear waters"
  },
  {
    id: 4,
    url: "/lovable-uploads/9ca648e9-7188-4994-a95a-e4ed84a3be53.png",
    alt: "Scenic view of Sicilian coastline from sailing yacht Gibigiana"
  },
  {
    id: 5,
    url: "/lovable-uploads/51b53f35-9703-40bb-9aea-b8a3363ba4e3.png",
    alt: "Volcanic cliffs and coastal views from yacht near Catania"
  },
  {
    id: 6,
    url: "/lovable-uploads/d7736fa6-d68b-4526-bd67-e044d1abc239.png",
    alt: "Beneteau Cyclades 43 Gibigiana deck view while sailing"
  },
  {
    id: 7,
    url: "/lovable-uploads/f26147e2-e5ef-42a5-bc82-7a00740d573d.png",
    alt: "Comfortable cockpit of sailing yacht Gibigiana with panoramic sea view"
  },
  {
    id: 8,
    url: "/lovable-uploads/8147a5fc-cfcb-485f-9746-bc8c72f0a658.png",
    alt: "Beneteau sailing yacht Gibigiana anchored in turquoise bay"
  },
  {
    id: 9,
    url: "/lovable-uploads/92ff98aa-fd2f-47e8-a3d1-fb608a297fcd.png",
    alt: "Fully equipped galley kitchen on Beneteau Cyclades 43 Gibigiana"
  }
];

const BoatCarousel = () => {
  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="section-padding bg-gradient-to-b from-white to-[#38A0ED]/5">
      <div className="container-custom max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Anchor size={32} color="#38A0ED" />
          </div>
          <h2 className="text-4xl md:text-5xl text-saraventu-dark mb-6 font-bebas">
            OUR SAILING YACHT
          </h2>
          <div className="w-24 h-1 bg-[#38A0ED] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our beautiful Beneteau Cyclades 43.4 yacht. From luxurious interiors 
            to spacious decks, discover the vessel that will be your home on the Mediterranean.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          plugins={[autoplay.current]}
          className="w-full max-w-5xl mx-auto"
          onMouseEnter={() => autoplay.current.stop()}
          onMouseLeave={() => autoplay.current.play()}
        >
          <CarouselContent>
            {boatPhotos.map((photo) => (
              <CarouselItem key={photo.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <OrganicImageFrame
                    imageUrl={photo.url}
                    altText={photo.alt}
                    className="w-full h-64"
                    aspectRatio="4/3"
                    showShadow={true}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {boatPhotos.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-[#38A0ED]/30 hover:bg-[#38A0ED]/60 cursor-pointer transition-colors"
            />
          ))}
        </div>

        {/* Yacht Specifications */}
        <div className="mt-12 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-saraventu-dark mb-6">
              Gibigiana - Beneteau Cyclades 43.4
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-sm">
              <div>
                <div className="font-medium text-[#38A0ED] mb-1">Length</div>
                <div>13.26m (43.5 ft)</div>
              </div>
              <div>
                <div className="font-medium text-[#38A0ED] mb-1">Capacity</div>
                <div>10 guests + skipper</div>
              </div>
              <div>
                <div className="font-medium text-[#38A0ED] mb-1">Cabins</div>
                <div>4 (3 + skipper)</div>
              </div>
              <div>
                <div className="font-medium text-[#38A0ED] mb-1">Year</div>
                <div>2007</div>
              </div>
              <div>
                <div className="font-medium text-[#38A0ED] mb-1">Engine</div>
                <div>Yanmar 54 HP</div>
              </div>
              <div>
                <div className="font-medium text-[#38A0ED] mb-1">Home Port</div>
                <div>Porto di Catania</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoatCarousel;
