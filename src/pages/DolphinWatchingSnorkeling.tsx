import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Toaster } from '../components/ui/toaster';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Waves, Fish, Camera, Clock, Users, Phone, Binoculars } from 'lucide-react';

const DolphinWatchingSnorkeling = () => {
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
    "@type": "TouristActivity",
    "name": "Dolphin Watching e Snorkeling Catania",
    "description": "Avvistamento delfini e snorkeling nelle acque cristalline di Catania. Esperienza marina sostenibile con whale watching e immersioni guidate.",
    "provider": {
      "@type": "Organization",
      "name": "Saraventu",
      "url": "https://www.saraventu.it"
    },
    "duration": "PT4H",
    "price": "75",
    "priceCurrency": "EUR",
    "location": {
      "@type": "Place",
      "name": "Acque di Catania e Riviera dei Ciclopi",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Catania",
        "addressRegion": "Sicily"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Dolphin Watching Catania | Avvistamento Delfini e Snorkeling Sicilia | Saraventu</title>
        <meta name="description" content="Avvistamento delfini e whale watching nelle acque di Catania. Snorkeling guidato, immersioni sicure e osservazione della fauna marina siciliana. Esperienza eco-sostenibile." />
        <meta name="keywords" content="dolphin watching catania, avvistamento delfini sicilia, whale watching sicilia, snorkeling catania, immersioni guidate sicilia, fauna marina catania, eco turismo marino" />
        <meta property="og:title" content="Dolphin Watching Catania | Snorkeling e Avvistamento Cetacei" />
        <meta property="og:description" content="Vivi l'emozione dell'avvistamento delfini e del snorkeling nelle acque cristalline di Catania. Esperienza marina indimenticabile." />
        <link rel="canonical" href="https://www.saraventu.it/dolphin-watching-snorkeling" />
        <link rel="alternate" hrefLang="en" href="https://www.saraventu.it/en/dolphin-watching-snorkeling" />
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
                  Dolphin Watching & Snorkeling
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Avvistamento delfini e snorkeling nelle acque cristalline della Sicilia orientale
                </p>
                <Button size="lg" onClick={scrollToContact} className="text-lg px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Prenota la Tua Avventura Marina
                </Button>
              </div>
            </div>
          </section>

          {/* About Activity */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Incontra i Delfini del Mediterraneo</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Vivi l'emozione dell'<strong>avvistamento delfini</strong> nelle acque cristalline di Catania. Le nostre escursioni di 
                    <strong>dolphin watching</strong> ti porteranno nelle zone marine più ricche di vita, dove gruppi di delfini comuni e 
                    stenelle cacciano e giocano nelle acque siciliane.
                  </p>
                  <p>
                    Combiniamo l'<strong>avvistamento delfini</strong> con sessioni di <strong>snorkeling guidato</strong> nei migliori spot 
                    della Riviera dei Ciclopi. Esplorerai fondali vulcanici unici, grotte sottomarine e praterie di posidonia che ospitano 
                    una ricca biodiversità marina.
                  </p>
                  <p>
                    Le nostre escursioni di <strong>whale watching</strong> e <strong>dolphin watching</strong> seguono protocolli eco-sostenibili 
                    per rispettare la fauna marina. Il nostro equipaggio esperto ti guiderà nell'osservazione responsabile dei cetacei e 
                    nell'immersione sicura nei siti di snorkeling più spettacolari.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Activities */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Le Nostre Attività Marine</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="h-full">
                  <CardHeader>
                    <Binoculars className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Dolphin Watching</CardTitle>
                    <CardDescription>Avvistamento responsabile</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>4 ore di ricerca</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <span>Max 8 persone</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Ricerca attiva dei cetacei</li>
                        <li>• Binocoli professionali</li>
                        <li>• Guide marine esperte</li>
                        <li>• Fotografia wildlife</li>
                        <li>• 75€/persona</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <Fish className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Snorkeling Guidato</CardTitle>
                    <CardDescription>Immersioni sicure</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>2-3 immersioni</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <span>Tutti i livelli</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Attrezzatura inclusa</li>
                        <li>• Istruttore qualificato</li>
                        <li>• Fondali vulcanici</li>
                        <li>• Fauna marina ricca</li>
                        <li>• Sicurezza garantita</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <Waves className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Whale Watching</CardTitle>
                    <CardDescription>Escursioni speciali</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>6 ore in mare</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <span>Piccoli gruppi</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Ricerca balenottere</li>
                        <li>• Acque profonde</li>
                        <li>• Stagione migratoria</li>
                        <li>• Documentazione scientifica</li>
                        <li>• 120€/persona</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Marine Life */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Fauna Marina del Golfo di Catania</h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Binoculars className="h-6 w-6 text-primary" />
                      Cetacei Osservabili
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span><strong>Delfini comuni (Delphinus delphis)</strong> - Gruppi numerosi, molto sociali</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span><strong>Stenelle (Stenella coeruleoalba)</strong> - Acrobatici e giocosi</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span><strong>Tursiopi (Tursiops truncatus)</strong> - I più grandi delfini del Mediterraneo</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span><strong>Balenottere minori</strong> - Durante la migrazione (maggio-ottobre)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Fish className="h-6 w-6 text-primary" />
                      Vita Sottomarina
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span><strong>Pesci colorati</strong> - Saraghi, occhiate, donzelle</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span><strong>Polpi e seppie</strong> - Maestri del mimetismo</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span><strong>Ricci e stelle marine</strong> - Sui fondali rocciosi</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span><strong>Praterie di Posidonia</strong> - Ecosistemi protetti UNESCO</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Best Seasons */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Periodi Migliori per l'Avvistamento</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Primavera</CardTitle>
                    <CardDescription className="text-center">Marzo - Maggio</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Inizio migrazione cetacei</li>
                      <li>• Mare calmo e cristallino</li>
                      <li>• Temperature ideali</li>
                      <li>• Fauna marina attiva</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Estate</CardTitle>
                    <CardDescription className="text-center">Giugno - Agosto</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Picco avvistamenti delfini</li>
                      <li>• Snorkeling ottimale</li>
                      <li>• Visibilità massima</li>
                      <li>• Whale watching possibile</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Autunno</CardTitle>
                    <CardDescription className="text-center">Settembre - Novembre</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Migrazione di ritorno</li>
                      <li>• Gruppi più numerosi</li>
                      <li>• Mare ancora caldo</li>
                      <li>• Meno affollamento</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Scopri la Magia del Mare Siciliano</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Vivi un'esperienza indimenticabile a contatto con i delfini e la ricca fauna marina di Catania. 
                Un'avventura eco-sostenibile per tutta la famiglia.
              </p>
              <Button size="lg" onClick={scrollToContact} className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Prenota il Tuo Dolphin Watching
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

export default DolphinWatchingSnorkeling;