
import React from 'react';
import { Experience } from '../types/experience';

interface ExperienceCardProps {
  experience: Experience;
  isActive: boolean;
  onClick: () => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, isActive, onClick }) => {
  const IconComponent = experience.icon;
  
  return (
    <div
      className={`p-4 sm:p-6 rounded-lg cursor-pointer transition-all ${
        isActive
          ? 'bg-[#38A0ED] text-white shadow-lg'
          : experience.isPremium 
            ? 'bg-[#38A0ED]/10 hover:bg-[#38A0ED]/20' 
            : 'bg-saraventu-light hover:bg-saraventu-gray'
      } ${experience.isPremium ? 'border border-[#38A0ED]/50' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-center mb-3 md:mb-4">
        <div
          className={`mr-3 ${
            isActive ? 'text-white' : experience.isPremium ? 'text-[#38A0ED]' : 'text-[#38A0ED]'
          }`}
        >
          <IconComponent className="w-8 h-8 md:w-10 md:h-10" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bebas text-left">
          {experience.title}
        </h3>
      </div>
      <div
        className={`inline-block px-3 py-1 rounded-full text-xs mb-2 ${
          isActive
            ? 'bg-white text-[#38A0ED]'
            : experience.isPremium
              ? 'bg-[#38A0ED]/20 text-[#38A0ED]'
              : 'bg-white text-gray-800'
        }`}
      >
        {experience.location}
      </div>
      {experience.isPremium && !isActive && (
        <div className="mt-2 text-xs font-medium text-[#38A0ED]">Premium Experience</div>
      )}
    </div>
  );
};

export default ExperienceCard;
