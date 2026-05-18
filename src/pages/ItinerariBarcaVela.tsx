import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Toaster } from '../components/ui/toaster';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { MapPin, Clock, Users, Camera, Phone, Compass } from 'lucide-react';

const ItinerariBarcaVela = () => {
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
    "name": "Itinerari in Barca a Vela Sicilia",
    "description": "Esplora gli itinerari in barca a vela più belli della Sicilia. Da Catania ad Aci Trezza e Siracusa, con skipper esperti.",
    "provider": {
      "@type": "Organization",
      "name": "Saraventu",
      "url": "https://www.saraventu.it"
    },
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Place",
          "name": "Catania",
          "description": "Porto di partenza per le escursioni in barca a vela"
        },
        {
          "@type": "Place",
          "name": "Aci Trezza",
          "description": "Famosi Faraglioni e Riviera dei Ciclopi"
        },
        {
          "@type": "Place",
          "name": "Siracusa",
          "description": "Ortigia e costa archeologica siciliana"
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Itinerari in Barca a Vela in Sicilia – Catania, Aci Trezza, Siracusa | Saraventu</title>
        <meta name="description" content="Esplora gli itinerari in barca a vela più belli della Sicilia. Da Catania ad Aci Trezza e Siracusa, con skipper esperti. Scopri paesaggi mozzafiato e acque cristalline." />
        <meta name="keywords" content="itinerari barca vela sicilia, tour barca vela catania siracusa, navigazione aci trezza, rotte barca vela sicilia, crociere vela sicilia, sailing routes sicily" />
        <meta property="og:title" content="Itinerari Barca a Vela Sicilia | Rotte Panoramiche e Storiche" />
        <meta property="og:description" content="Scopri i migliori itinerari in barca a vela della Sicilia orientale. Rotte personalizzate tra storia, natura e mare cristallino." />
        <link rel="canonical" href="https://www.saraventu.it/itinerari-barca-vela" />
        <link rel="alternate" hrefLang="en" href="https://www.saraventu.it/en/sailing-itineraries" />
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
                  Itinerari in Barca a Vela
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Scopri le rotte più affascinanti della Sicilia orientale tra storia, natura e mare cristallino
                </p>
                <Button size="lg" onClick={scrollToContact} className="text-lg px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Pianifica il Tuo Itinerario
                </Button>
              </div>
            </div>
          </section>

          {/* About Itineraries */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Rotte Uniche nella Sicilia Orientale</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Proponiamo <strong>itinerari unici in barca a vela</strong>, dalla costa etnea ai borghi marinari. Scopri <strong>Catania</strong>, 
                    i <strong>Faraglioni di Aci Trezza</strong> e <strong>Siracusa</strong> navigando tra acque cristalline e paesaggi mozzafiato.
                  </p>
                  <p>
                    I nostri <strong>itinerari in barca a vela</strong> sono pensati per farti vivere la Sicilia dal mare, combinando navigazione, 
                    cultura e relax. Ogni rotta è attentamente studiata per offrirti il meglio della costa siciliana, dalle suggestive scogliere 
                    laviche dell'Etna alle baie nascoste e ai siti archeologici marini.
                  </p>
                  <p>
                    Naviga attraverso la <strong>Riviera dei Ciclopi</strong>, esplora i pittoreschi borghi di pescatori e immergiti nella storia 
                    millenaria di questi luoghi, accompagnato dal nostro skipper esperto che conosce ogni angolo di questa costa straordinaria.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Itineraries */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">I Nostri Itinerari</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="h-full">
                  <CardHeader>
                    <Compass className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Riviera dei Ciclopi</CardTitle>
                    <CardDescription>Da Catania ad Aci Trezza</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>4-6 ore</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>15 miglia nautiche</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Marina di Catania</li>
                        <li>• Faraglioni dei Ciclopi</li>
                        <li>• Baia di Aci Trezza</li>
                        <li>• Isola Lachea</li>
                        <li>• Porto di Aci Castello</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <Camera className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Costa Etnea</CardTitle>
                    <CardDescription>Paesaggi vulcanici dal mare</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>6-8 ore</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>25 miglia nautiche</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Catania Porto</li>
                        <li>• Costa lavica dell'Etna</li>
                        <li>• Capo Mulini</li>
                        <li>• Torre Archirafi</li>
                        <li>• Riposto Marina</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <MapPin className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Siracusa e Ortigia</CardTitle>
                    <CardDescription>Storia e archeologia marina</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>Giornata intera</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>45 miglia nautiche</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Marina di Catania</li>
                        <li>• Navigazione costiera</li>
                        <li>• Isola di Ortigia</li>
                        <li>• Porto Grande Siracusa</li>
                        <li>• Siti archeologici marini</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <Users className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Augusta e Megara</CardTitle>
                    <CardDescription>Porto naturale e storia antica</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>8 ore</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>35 miglia nautiche</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Catania Marina</li>
                        <li>• Golfo di Augusta</li>
                        <li>• Porto Megarese</li>
                        <li>• Siti archeologici</li>
                        <li>• Baie protette</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <Compass className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Isole Eolie</CardTitle>
                    <CardDescription>Arcipelago vulcanico UNESCO</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>2-3 giorni</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>80 miglia nautiche</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Partenza da Catania</li>
                        <li>• Vulcano e acque termali</li>
                        <li>• Lipari centro storico</li>
                        <li>• Stromboli attivo</li>
                        <li>• Panarea esclusiva</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <Camera className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Taormina Mare</CardTitle>
                    <CardDescription>La perla del Mediterraneo</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>6 ore</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>20 miglia nautiche</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Marina di Catania</li>
                        <li>• Baia di Taormina</li>
                        <li>• Isola Bella</li>
                        <li>• Capo Taormina</li>
                        <li>• Grotte marine</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* What to Expect */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Cosa Aspettarti</h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Esperienza di Navigazione</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Navigazione in sicurezza con skipper qualificato</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Spiegazioni su rotte, venti e tecniche di vela</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Soste per bagni in acque cristalline</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Snorkeling in spots esclusivi</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Cultura e Storia</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Racconti su leggende locali e storia siciliana</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Visite a borghi marinari autentici</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Degustazione prodotti locali a bordo</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Fotografie dei panorami più belli</span>
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
              <h2 className="text-3xl font-bold mb-6">Scopri la Sicilia dal Mare</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Scegli il tuo itinerario ideale e lasciati guidare alla scoperta delle meraviglie della costa siciliana. 
                Ogni rotta è un'avventura unica tra natura, storia e tradizione.
              </p>
              <Button size="lg" onClick={scrollToContact} className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Personalizza il Tuo Itinerario
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

export default ItinerariBarcaVela;