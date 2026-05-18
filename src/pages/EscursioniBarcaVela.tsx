import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Toaster } from '../components/ui/toaster';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Clock, Users, Sun, Sunset, MapPin, Phone, Waves } from 'lucide-react';

const EscursioniBarcaVela = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Escursioni in Barca a Vela da Catania",
    "description": "Scopri il mare di Catania con escursioni in barca a vela. Tour di mezza giornata, giornata intera o al tramonto con soste per nuotare e snorkeling.",
    "provider": {
      "@type": "Organization",
      "name": "Saraventu",
      "url": "https://www.saraventu.it"
    },
    "duration": "PT4H",
    "price": "70",
    "priceCurrency": "EUR",
    "includesObject": [
      "Skipper professionale",
      "Aperitivo e snack",
      "Attrezzatura snorkeling",
      "Carburante incluso"
    ],
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Place",
          "name": "Marina di Catania"
        },
        {
          "@type": "Place", 
          "name": "Aci Trezza"
        },
        {
          "@type": "Place",
          "name": "Riviera dei Ciclopi"
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Escursioni in Barca a Vela da Catania – Mezza Giornata e Tramonto | Saraventu</title>
        <meta name="description" content="Vivi il mare di Sicilia con un'escursione in barca a vela. Tour di mezza giornata, giornata intera o al tramonto con skipper. Soste per nuotare e snorkeling." />
        <meta name="keywords" content="escursioni barca vela catania, tour barca vela sicilia, gita barca vela aci trezza, escursione tramonto catania, boat tour sicilia, sailing trip catania" />
        <meta property="og:title" content="Escursioni in Barca a Vela | Tour Giornalieri da Catania" />
        <meta property="og:description" content="Scopri la costa siciliana con le nostre escursioni in barca a vela. Tour personalizzati con skipper esperto." />
        <link rel="canonical" href="https://www.saraventu.it/escursioni-barca-vela" />
        <link rel="alternate" hrefLang="en" href="https://www.saraventu.it/en/sailing-trips" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Escursioni in Barca a Vela
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Scopri il mare di Catania con tour di mezza giornata, giornata intera o al tramonto
                </p>
                <Button size="lg" onClick={scrollToContact} className="text-lg px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Prenota la Tua Escursione
                </Button>
              </div>
            </div>
          </section>

          {/* About Excursions */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Vivi il Mare di Sicilia</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Scopri il mare di Catania con le nostre <strong>escursioni in barca a vela</strong>. Scegli tra tour di mezza giornata, 
                    giornata intera o al tramonto, con soste per nuotare, fare snorkeling e gustare un aperitivo in mare.
                  </p>
                  <p>
                    Le nostre <strong>escursioni in barca a vela</strong> ti porteranno alla scoperta della costa etnea, dalla suggestiva 
                    <strong>Riviera dei Ciclopi</strong> ai pittoreschi <strong>Faraglioni di Aci Trezza</strong>. Navigherai a bordo 
                    della Beneteau Cyclades 43.4 "Gibigiana", accompagnato da uno skipper esperto che ti racconterà la storia e le 
                    leggende di questi luoghi magici.
                  </p>
                  <p>
                    Durante l'escursione avrai l'opportunità di fare <strong>snorkeling</strong> nelle acque cristalline, rilassarti 
                    al sole sul ponte e gustare un aperitivo con prodotti locali siciliani mentre ammiri il tramonto sul mare.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Excursion Types */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Le Nostre Escursioni</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="h-full">
                  <CardHeader>
                    <Sun className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Escursione Mattutina</CardTitle>
                    <CardDescription>Mezza giornata al mare</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>09:30 - 13:30</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <span>Max 8 persone</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>Aci Trezza</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Colazione siciliana a bordo</li>
                        <li>• Snorkeling ai Faraglioni</li>
                        <li>• Aperitivo analcolico</li>
                        <li>• 70€/persona</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <Sunset className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Escursione al Tramonto</CardTitle>
                    <CardDescription>Romantica serata in mare</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>17:00 - 21:00</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <span>Max 8 persone</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>Costa Etnea</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Aperitivo al tramonto</li>
                        <li>• Prodotti locali siciliani</li>
                        <li>• Bagno serale</li>
                        <li>• 85€/persona</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <Waves className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Escursione Giornata Intera</CardTitle>
                    <CardDescription>Un'intera giornata in mare</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>09:30 - 17:30</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <span>Max 6 persone</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>Isole Eolie</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Pranzo siciliano a bordo</li>
                        <li>• Snorkeling multiplo</li>
                        <li>• Visite a terra</li>
                        <li>• 150€/persona</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* What's Included */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Cosa è Incluso</h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Servizi Inclusi</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Skipper professionale qualificato</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Carburante e ormeggi inclusi</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Attrezzatura per snorkeling</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Aperitivo e prodotti locali</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Assicurazione navigazione</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">A Bordo Troverai</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Beneteau Cyclades 43.4 "Gibigiana"</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Ampi spazi per il relax</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Doccia di acqua dolce</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Sistema audio bluetooth</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Frigorifero e ghiaccio</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Prenota la Tua Escursione in Barca a Vela</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Vivi un'esperienza indimenticabile nelle acque cristalline di Catania. Scegli la tua escursione ideale e lasciati conquistare dalla magia del mare siciliano
              </p>
              <Button size="lg" onClick={scrollToContact} className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Contattaci per Prenotare
              </Button>
            </div>
          </section>
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
};

export default EscursioniBarcaVela;