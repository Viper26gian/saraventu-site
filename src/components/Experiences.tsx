
import React, { useState } from 'react';
import ExperienceCard from './ExperienceCard';
import ExperienceDetails from './ExperienceDetails';
import { experiences } from '../data/experiences';

const Experiences = () => {
  // Set sailing as the default active experience
  const [activeExperience, setActiveExperience] = useState(experiences[0]);

  return (
    <section id="experiences" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#222222] mb-2 text-left">
          OUR EXPERIENCES
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8 md:mb-12 text-left">
          Premium adventures combining water sports, nature and local flavors, with sailing as our signature experience
        </p>

        <div className="w-24 h-1 bg-[#38A0ED] rounded-full mb-6"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 md:mb-12">
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              isActive={activeExperience.id === exp.id}
              onClick={() => setActiveExperience(exp)}
            />
          ))}
        </div>

        <ExperienceDetails experience={activeExperience} />
      </div>
    </section>
  );
};

export default Experiences;
