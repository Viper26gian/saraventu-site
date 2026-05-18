
import React from 'react';
import { Check, MessageCircle, Mail } from 'lucide-react';
import { Badge } from './ui/badge';
import OrganicImageFrame from './OrganicImageFrame';
import { Experience } from '../types/experience';

interface ExperienceDetailsProps {
  experience: Experience;
}

const ExperienceDetails: React.FC<ExperienceDetailsProps> = ({ experience }) => {
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the "${experience.title}" experience. Can you give me more information?`
  );
  const whatsappUrl = `https://wa.me/393477235208?text=${whatsappMessage}`;

  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
      <div className="order-2 md:order-1">
        <h3 className="text-2xl sm:text-3xl font-bebas text-[#222222] mb-3 md:mb-4 text-left">
          {experience.title}
          {experience.isPremium && (
            <Badge className="ml-3 bg-[#38A0ED] text-white">Premium</Badge>
          )}
        </h3>

        <div className="mb-4 text-left">
          <Badge className="bg-[#38A0ED] hover:bg-[#38A0ED] text-white font-medium px-4 py-1.5 text-sm rounded-full mb-3">
            {experience.schedule}
          </Badge>
          <p className="text-base sm:text-lg mb-4">{experience.description}</p>

          <div className="flex items-start flex-wrap gap-3 mb-4 md:mb-6">
            <Badge className="bg-[#F1F5F9] text-[#222222] font-medium px-3 py-1 rounded-full flex items-center gap-2">
              <span role="img" aria-label="Age">🎯</span>{experience.suitableFor.split('·')[0].trim()}
            </Badge>
            <Badge className="bg-[#F1F5F9] text-[#222222] font-medium px-3 py-1 rounded-full flex items-center gap-2">
              <span role="img" aria-label="Level">📈</span>{experience.suitableFor.split('·')[1]?.trim()}
            </Badge>
          </div>

          {experience.availableIn && (
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-1">Available in:</p>
              <p className="text-sm text-gray-600">{experience.availableIn}</p>
            </div>
          )}
        </div>

        <div className="mb-6 md:mb-8 text-left">
          <h4 className="font-bebas text-xl text-[#222222] mb-2 md:mb-3">INCLUDES:</h4>
          <ul className="space-y-2">
            {experience.includes.map((item, index) => (
              <li key={index} className="flex items-center">
                <Check size={16} className="text-[#38A0ED] mr-3 stroke-[2.5] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold px-6 py-3 rounded transition-colors"
          >
            <MessageCircle size={18} />
            Book via WhatsApp
          </a>
          <a
            href="mailto:info@saraventu.it"
            className="inline-flex items-center gap-2 bg-[#38A0ED] hover:bg-[#2880c8] text-white font-semibold px-6 py-3 rounded transition-colors"
          >
            <Mail size={18} />
            Book via Email
          </a>
        </div>
      </div>
      <div className="order-1 md:order-2 mb-6 md:mb-0">
        <OrganicImageFrame
          imageUrl={experience.image}
          altText={`${experience.title} experience - Saraventu water sports in Sicily`}
          className="w-full h-full"
          removeBackground={false}
          removeShadow={false}
          borderWidth={experience.isPremium ? 2 : 0}
          borderColor={experience.isPremium ? "#38A0ED" : "transparent"}
          aspectRatio="16/9"
          roundedCorners={true}
          showShadow={true}
        />
      </div>
    </div>
  );
};

export default ExperienceDetails;
