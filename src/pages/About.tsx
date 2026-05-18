import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';
import { Toaster } from '../components/ui/toaster';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Saraventu | Professional Sailing Crew & Yacht Charter Sicily</title>
        <meta name="description" content="Meet the experienced sailing professionals behind Saraventu. 20+ years navigating Sicily's waters, offering premium boat tours from Catania to Aci Trezza, Taormina, Ortigia & Aeolian Islands." />
        <meta name="keywords" content="saraventu sailing crew, yacht charter sicily professionals, catania boat tour experts, sicily sailing experience, professional skipper catania, sailing catania team" />
        <meta property="og:title" content="About Saraventu | Authentic Sailing Experiences from Catania" />
        <meta property="og:description" content="Meet the experienced sailors behind Saraventu. 20+ years on Sicily's waters, sharing authentic sailing experiences from Catania." />
        <link rel="canonical" href="https://www.saraventu.it/about" />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-16">
          <About />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
};

export default AboutPage;