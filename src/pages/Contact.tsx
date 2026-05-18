import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Toaster } from '../components/ui/toaster';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Book Boat Tours Sicily | Contact Saraventu Sailing Catania | +39 347 723 5208</title>
        <meta name="description" content="Book your sailing experience in Sicily! Contact Saraventu for boat tours to Aci Trezza, Taormina, Ortigia & Aeolian Islands. Call +39 347 723 5208 or email info@saraventu.it" />
        <meta name="keywords" content="book boat tours sicily, contact saraventu sailing, catania yacht charter booking, sailing sicily reservation, boat trip booking catania, private yacht charter contact" />
        <meta property="og:title" content="Contact Saraventu | Book Your Sailing Experience" />
        <meta property="og:description" content="Get in touch to book your authentic sailing experience from Catania. Professional crew, Beneteau Cyclades, unforgettable Sicily sailing." />
        <link rel="canonical" href="https://www.saraventu.it/contact" />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-16">
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
};

export default ContactPage;