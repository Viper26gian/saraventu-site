
import React, { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Sailboat, Wind, Waves, Utensils } from "lucide-react";
import { useIsMobile } from '../hooks/use-mobile';

// Service data structure
interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  location: string;
  icon: React.ReactNode;
  isPremium?: boolean;
}

// Reordering services to put Sailing first as the premium experience
const services: Service[] = [
  {
    id: 4,
    title: "Sailing Experience",
    description: "Explore the breathtaking Catanian coastline aboard our premium sailing yacht with experienced skippers, enjoying the Mediterranean sea in its most authentic form.",
    image: "https://i.ibb.co/jPhHC1pD/Schermata-2025-04-06-alle-09-10-27.png", // Using image from About Us section
    duration: "3 hours",
    location: "Catania Coast",
    icon: <Sailboat className="h-5 w-5" />,
    isPremium: true, // Marking this as premium
  },
  {
    id: 1,
    title: "Ride the Wind",
    description: "Experience windsurfing with professional instructors in the beautiful waters of Sicily.",
    image: "https://i.ibb.co/7xKN11Dh/windsurf.jpg", // Using actual image from windsurf section
    duration: "Full Day (09:30–17:00)",
    location: "Playa di Catania",
    icon: <Waves className="h-5 w-5" />,
  },
  {
    id: 2,
    title: "Wingstart",
    description: "Learn wingfoiling with our expert instructors in ideal conditions for beginners.",
    image: "https://i.ibb.co/GvLB3h0w/Schermata-2025-04-09-alle-18-49-43.png", // Using actual image from wingfoil section
    duration: "Half Day (09:30–14:00)",
    location: "Playa di Catania",
    icon: <Wind className="h-5 w-5" />,
  },
  {
    id: 3,
    title: "Paddle & Plates",
    description: "Explore the Sicilian coast by SUP or kayak and enjoy fresh seafood afterward.",
    image: "https://i.ibb.co/XXXxxx/paddle-plates.jpg", // Using placeholder for now
    duration: "Full Day (09:30–17:00)",
    location: "Various Locations",
    icon: <Utensils className="h-5 w-5" />,
  },
];

const ServiceCarousel = () => {
  const isMobile = useIsMobile();
  const [autoPlay, setAutoPlay] = useState(true);
  const [autoPlaySpeed, setAutoPlaySpeed] = useState(3000); // Normal speed: 3 seconds per slide
  const [api, setApi] = useState<any>(null);
  
  // Auto rotation effect
  useEffect(() => {
    if (!api || !autoPlay) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, autoPlaySpeed); // Change slide based on current speed
    
    return () => clearInterval(interval);
  }, [api, autoPlay, autoPlaySpeed]);

  // Enhanced hover interactions
  const handleMouseEnter = () => {
    setAutoPlay(false);
  };
  
  const handleMouseLeave = () => {
    setAutoPlay(true);
    setAutoPlaySpeed(3000); // Reset to normal speed
  };
  
  const handleMouseMove = () => {
    if (!autoPlay) return; // Only change speed when autoplay is active
    setAutoPlaySpeed(1500); // Accelerate on continued interaction
  };
  
  const handleTouchStart = () => setAutoPlay(false);
  const handleTouchEnd = () => setAutoPlay(true);

  return (
    <section id="our-package" className="section-padding bg-saraventu-light">
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#222222] mb-2 text-left">
          OUR PACKAGES
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8 md:mb-12 text-left">
          Explore our premium water experiences across Sicily's most beautiful locations, 
          featuring our signature sailing adventures
        </p>

        <div className="w-24 h-1 bg-[#38A0ED] rounded-full mb-10"></div>

        <div 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {services.map((service) => (
                <CarouselItem key={service.id} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                  <Card className={`overflow-hidden border-none shadow-lg ${service.isPremium ? 'ring-2 ring-[#38A0ED] ring-offset-2' : ''}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      {service.isPremium && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-[#38A0ED] text-white">
                            Premium Experience
                          </Badge>
                        </div>
                      )}
                    </div>

                    <CardHeader>
                      <CardTitle className={`text-2xl font-bebas text-left flex items-center gap-2 ${service.isPremium ? 'text-[#38A0ED]' : ''}`}>
                        {service.icon}
                        {service.title}
                      </CardTitle>
                      <div className="flex flex-col space-y-1 mt-2 text-left">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-1" /> 
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-4 w-4 mr-1" /> 
                          <span>{service.location}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <CardDescription className={`text-sm text-left ${service.isPremium ? 'font-medium' : ''}`}>
                        {service.description}
                      </CardDescription>
                    </CardContent>

                    <CardFooter className="text-left pt-0">
                      <Button 
                        className={`${service.isPremium 
                          ? 'bg-[#38A0ED] hover:bg-[#38A0ED]/80 text-white' 
                          : 'bg-white border border-[#38A0ED] text-[#38A0ED] hover:bg-[#F1F5F9]'}`}
                      >
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex items-center justify-end gap-2 mt-8">
              <CarouselPrevious className="static transform-none bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 h-10 w-10 rounded-full" />
              <CarouselNext className="static transform-none bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 h-10 w-10 rounded-full" />
            </div>
          </Carousel>
          
          {/* Auto-rotation indicator */}
          <div className="flex justify-center mt-4">
            <div className={`h-1 bg-[#38A0ED] rounded-full transition-all duration-300 ${autoPlay ? 'w-16 animate-pulse' : 'w-8'}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;
