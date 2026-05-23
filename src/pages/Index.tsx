import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import VideoShowcase from '../components/VideoShowcase';
import CyclopsRoute from '../components/CyclopsRoute';
import SailingExperiences from '../components/SailingExperiences';
import OnBoard from '../components/OnBoard';
import CustomPackages from '../components/CustomPackages';
import WhyChooseUs from '../components/WhyChooseUs';
import BoatSpotlight from '../components/BoatSpotlight';
import PhotoGallery from '../components/PhotoGallery';
import BookingSection from '../components/BookingSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import { useIsMobile } from '../hooks/use-mobile';
import { Toaster } from '../components/ui/toaster';

const Index = () => {
  const isMobile = useIsMobile();

  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => {
    document.body.style.paddingTop = isMobile ? '0px' : '0px';
    return () => { document.body.style.paddingTop = '0px'; };
  }, [isMobile]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["TouristAttraction", "TourOperator", "LocalBusiness"],
    "name": "Saraventu - Sailing Catania | All-Inclusive Curated Day Trips Sicily",
    "description": "Premium all-inclusive sailing experiences aboard Gibigiana, our Beneteau Cyclades 43.4. Full-day, half-day and sunset cruises along Catania's Cyclops Riviera — Aci Trezza, Aci Castello, Ulysses Caves.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Blu Marina SRL, Marina di Catania",
      "addressLocality": "Catania",
      "addressRegion": "Sicily",
      "postalCode": "95100",
      "addressCountry": "IT"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": "37.5079", "longitude": "15.0830" },
    "telephone": "+39 347 723 5208",
    "email": "info@saraventu.it",
    "url": "https://www.saraventu.it",
    "priceRange": "€€-€€€",
    "openingHours": "Mo-Su 09:00-18:00",
    "sameAs": [
      "https://www.instagram.com/saraventu.sail/",
      "https://www.facebook.com/profile.php?id=61579270708094",
      "https://www.tiktok.com/@saraventu.sail"
    ],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "134", "bestRating": "5" }
  };

  return (
    <>
      <Helmet>
        <title>Saraventu Sailing — All-Inclusive Day Trips Catania Sicily | Sail, Savor & Swim</title>
        <meta name="description" content="All-inclusive curated sailing day trips along Catania's Cyclops Riviera. Full-day, half-day and sunset cruises aboard Gibigiana, our Beneteau Cyclades 43.4. Swim, dine, and sail in Sicily." />
        <meta name="keywords" content="sailing catania, boat trip catania sicily, cyclops riviera tour, aci trezza boat tour, beneteau cyclades 43 sicily, all inclusive sailing sicily, sunset cruise catania, private sailing sicily, day trip catania, saraventu" />
        <meta property="og:title" content="Saraventu Sailing — All-Inclusive Day Trips Catania Sicily" />
        <meta property="og:description" content="Sail, Savor & Swim. All-inclusive curated sailing experiences along Catania's legendary Cyclops Riviera." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.saraventu.it" />
        <link rel="canonical" href="https://www.saraventu.it" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <About />
          <VideoShowcase />
          <CyclopsRoute />
          <SailingExperiences />
          <OnBoard />
          <CustomPackages />
          <WhyChooseUs />
          <BoatSpotlight />
          <PhotoGallery />
          <BookingSection />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
};
export default Index;
