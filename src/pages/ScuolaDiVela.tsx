import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Toaster } from '../components/ui/toaster';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Anchor, Award, Users, Clock, Star, Phone } from 'lucide-react';

const ScuolaDiVela = () => {
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
    "name": "Scuola di Vela Saraventu",
    "description": "Corsi di vela professionali a Catania con istruttori qualificati. Lezioni per principianti e avanzati con certificazioni internazionali.",
    "provider": {
      "@type": "Organization",
      "name": "Saraventu",
      "url": "https://www.saraventu.it",
      "telephone": "+39 347 723 5208"
    },
    "courseMode": "OnSite",
    "educationalLevel": "Beginner to Advanced",
    "teaches": ["Sailing techniques", "Navigation", "Safety procedures", "Weather reading"],
    "location": {
      "@type": "Place",
      "name": "Catania Marina",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Catania",
        "addressRegion": "Sicily",
        "addressCountry": "IT"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Scuola di Vela Catania - Corsi Certificati con Istruttori Qualificati | Saraventu</title>
        <meta name="description" content="Scuola di vela professionale a Catania. Corsi certificati per principianti e avanzati con istruttori qualificati. Impara a navigare in sicurezza nelle acque siciliane." />
        <meta name="keywords" content="scuola di vela catania, corsi di vela sicilia, lezioni di vela catania, istruttore vela qualificato, certificazioni vela catania, corso base vela, corso avanzato vela" />
        <meta property="og:title" content="Scuola di Vela Catania | Corsi Professionali di Vela" />
        <meta property="og:description" content="Impara a navigare con la scuola di vela più qualificata di Catania. Corsi per tutti i livelli con istruttori certificati." />
        <link rel="canonical" href="https://www.saraventu.it/scuola-di-vela" />
        <link rel="alternate" hrefLang="en" href="https://www.saraventu.it/en/sailing-school" />
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
                  Scuola di Vela Saraventu
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Impara l'arte della vela con istruttori qualificati nelle acque cristalline di Catania
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={scrollToContact} className="text-lg px-8">
                    <Phone className="mr-2 h-5 w-5" />
                    Prenota il Tuo Corso
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8">
                    <Award className="mr-2 h-5 w-5" />
                    Certificazioni
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">La Scuola di Vela più Qualificata di Catania</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    La <strong>Scuola di Vela Saraventu</strong> è il punto di riferimento per l'apprendimento della vela a Catania e in tutta la Sicilia. 
                    Con oltre 20 anni di esperienza nelle acque siciliane, i nostri <strong>istruttori qualificati</strong> ti guideranno 
                    in un percorso formativo completo e sicuro.
                  </p>
                  <p>
                    Offriamo <strong>corsi di vela per principianti e avanzati</strong>, con programmi didattici strutturati che combinano 
                    teoria e pratica. Le nostre lezioni si svolgono a bordo della nostra Beneteau Cyclades 43.4 "Gibigiana", 
                    perfetta per l'apprendimento grazie ai suoi spazi ampi e alla dotazione di sicurezza completa.
                  </p>
                  <p>
                    I nostri <strong>corsi di vela</strong> includono navigazione costiera, manovre avanzate, meteorologia nautica, 
                    sicurezza in mare e regolamento di regata. Al termine del corso riceverai certificazioni riconosciute 
                    internazionalmente che ti permetteranno di navigare in autonomia.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Courses Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">I Nostri Corsi di Vela</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="h-full">
                  <CardHeader>
                    <Users className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Corso Base Principianti</CardTitle>
                    <CardDescription>Per chi inizia da zero</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Teoria della vela e nomenclatura</li>
                      <li>• Prime manovre di base</li>
                      <li>• Sicurezza e equipaggiamento</li>
                      <li>• 10 ore di lezione pratica</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <Anchor className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Corso Intermedio</CardTitle>
                    <CardDescription>Perfeziona la tua tecnica</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Manovre avanzate e regolazioni</li>
                      <li>• Navigazione costiera</li>
                      <li>• Lettura delle condizioni meteo</li>
                      <li>• 15 ore di pratica intensiva</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <Award className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Corso Skipper</CardTitle>
                    <CardDescription>Diventa un velista esperto</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Comando dell'equipaggio</li>
                      <li>• Navigazione d'altura</li>
                      <li>• Emergenze e salvataggio</li>
                      <li>• Certificazione internazionale</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Perché Scegliere Saraventu</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">20+ Anni di Esperienza</h3>
                  <p className="text-muted-foreground">Istruttori con esperienza consolidata nelle acque siciliane</p>
                </div>
                <div className="text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Certificazioni Riconosciute</h3>
                  <p className="text-muted-foreground">Rilasciamo certificazioni valide internazionalmente</p>
                </div>
                <div className="text-center">
                  <Anchor className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Barca Scuola Professionale</h3>
                  <p className="text-muted-foreground">Beneteau Cyclades 43.4 attrezzata per la didattica</p>
                </div>
                <div className="text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Corsi Personalizzati</h3>
                  <p className="text-muted-foreground">Programmi adattati al tuo livello e disponibilità</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Pronto a Imparare l'Arte della Vela?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Unisciti ai nostri corsi di vela e scopri la libertà di navigare in autonomia nelle acque più belle del Mediterraneo
              </p>
              <Button size="lg" onClick={scrollToContact} className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Contattaci per Informazioni
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

export default ScuolaDiVela;