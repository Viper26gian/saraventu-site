import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Toaster } from '../components/ui/toaster';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Clock, Users, Euro, CheckCircle, Phone, BookOpen } from 'lucide-react';

const LezioniDiVela = () => {
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
    "@type": "Course",
    "name": "Lezioni di Vela Personalizzate",
    "description": "Lezioni di vela individuali e di gruppo a Catania. Corsi personalizzati per principianti ed esperti con skipper qualificati.",
    "provider": {
      "@type": "Organization",
      "name": "Saraventu",
      "url": "https://www.saraventu.it"
    },
    "courseMode": "OnSite",
    "duration": "PT4H",
    "price": "80",
    "priceCurrency": "EUR",
    "location": {
      "@type": "Place",
      "name": "Marina di Catania",
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
        <title>Lezioni di Vela a Catania – Corsi Principianti e Avanzati | Saraventu</title>
        <meta name="description" content="Corsi di vela per ogni livello a Catania. Lezioni pratiche e teoriche con skipper esperti. Scopri come navigare in sicurezza nelle acque siciliane." />
        <meta name="keywords" content="lezioni di vela catania, corsi di vela principianti, lezioni vela avanzate, corso vela privato, gruppo vela catania, imparare vela sicilia" />
        <meta property="og:title" content="Lezioni di Vela Catania | Corsi per Principianti e Avanzati" />
        <meta property="og:description" content="Impara a navigare con lezioni di vela personalizzate. Corsi per principianti ed esperti con skipper qualificati a Catania." />
        <link rel="canonical" href="https://www.saraventu.it/lezioni-di-vela" />
        <link rel="alternate" hrefLang="en" href="https://www.saraventu.it/en/sailing-lessons" />
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
                  Lezioni di Vela a Catania
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Corsi personalizzati per principianti ed esperti con sessioni teoriche e pratiche a bordo
                </p>
                <Button size="lg" onClick={scrollToContact} className="text-lg px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Prenota la Tua Lezione
                </Button>
              </div>
            </div>
          </section>

          {/* About Lessons */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Lezioni di Vela Personalizzate</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Offriamo <strong>lezioni di vela personalizzate</strong> per principianti ed esperti, con sessioni teoriche e pratiche a bordo. 
                    Imparerai manovre, regolazione delle vele, sicurezza e navigazione costiera, esplorando la Riviera dei Ciclopi e la costa etnea.
                  </p>
                  <p>
                    Le nostre <strong>lezioni di vela</strong> si svolgono a bordo della Beneteau Cyclades 43.4 "Gibigiana", con istruttori qualificati 
                    che ti seguiranno passo dopo passo nell'apprendimento delle tecniche di navigazione. Ogni lezione è strutturata per massimizzare 
                    l'apprendimento pratico in condizioni di sicurezza.
                  </p>
                  <p>
                    Durante le sessioni pratiche navigherai tra <strong>Catania</strong>, <strong>Aci Trezza</strong> e la <strong>costa etnea</strong>, 
                    imparando a leggere il vento, gestire le vele e manovrare in diverse condizioni meteorologiche.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Lesson Types */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Tipologie di Lezioni</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="h-full">
                  <CardHeader>
                    <Users className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Lezioni Private</CardTitle>
                    <CardDescription>Uno o due allievi</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>4 ore di lezione</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Euro className="h-5 w-5 text-primary" />
                        <span>120€/persona</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Attenzione personalizzata</li>
                        <li>• Programma su misura</li>
                        <li>• Progressi accelerati</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <Users className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Lezioni di Gruppo</CardTitle>
                    <CardDescription>3-6 partecipanti</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>4 ore di lezione</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Euro className="h-5 w-5 text-primary" />
                        <span>80€/persona</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Socializzazione</li>
                        <li>• Costo contenuto</li>
                        <li>• Apprendimento collaborativo</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <BookOpen className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Corso Intensivo</CardTitle>
                    <CardDescription>Weekend completo</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>2 giorni / 16 ore</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Euro className="h-5 w-5 text-primary" />
                        <span>280€/persona</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Immersione totale</li>
                        <li>• Teoria + pratica intensiva</li>
                        <li>• Certificato finale</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Program Content */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Programma delle Lezioni</h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <BookOpen className="h-6 w-6 text-primary" />
                      Teoria Nautica
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Nomenclatura della barca a vela</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Teoria del vento e andature</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Meteorologia nautica di base</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Sicurezza e equipaggiamenti</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Regolamento di navigazione</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Users className="h-6 w-6 text-primary" />
                      Pratica a Bordo
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Manovre di partenza e arrivo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Regolazione delle vele</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Virata e strambata</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Navigazione costiera</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Gestione delle emergenze</span>
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
              <h2 className="text-3xl font-bold mb-6">Inizia la Tua Avventura Velica</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Prenota subito la tua lezione di vela personalizzata e scopri il piacere di navigare nelle acque cristalline di Catania
              </p>
              <Button size="lg" onClick={scrollToContact} className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Richiedi Informazioni
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

export default LezioniDiVela;