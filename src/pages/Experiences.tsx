import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import SailingExperiences from '../components/SailingExperiences';
import Footer from '../components/Footer';
import { Toaster } from '../components/ui/toaster';

const ExperiencesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Boat Tours Sicily | Sailing Experiences Catania to Aeolian Islands | Saraventu</title>
        <meta name="description" content="Premium boat tours from Catania to Aci Trezza, Taormina, Ortigia & Aeolian Islands. Morning sailing with Sicilian brunch, romantic sunset tours with aperitivo. Private yacht charters available." />
        <meta name="keywords" content="boat tours sicily, sailing experiences catania, aci trezza boat trip, taormina sailing, ortigia boat excursions, aeolian islands boat tour, private yacht charter sicily, romantic sunset sailing" />
        <meta property="og:title" content="Sailing Experiences | Morning & Sunset Tours from Catania" />
        <meta property="og:description" content="Join our morning sailing with Sicilian brunch or sunset sailing with aperitif. Authentic 4-hour experiences from Catania aboard our Beneteau Cyclades." />
        <link rel="canonical" href="https://www.saraventu.it/experiences" />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-16">
          <SailingExperiences />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
};

export default ExperiencesPage;