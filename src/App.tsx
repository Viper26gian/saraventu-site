
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScuolaDiVela from "./pages/ScuolaDiVela";
import LezioniDiVela from "./pages/LezioniDiVela";
import EscursioniBarcaVela from "./pages/EscursioniBarcaVela";
import ItinerariBarcaVela from "./pages/ItinerariBarcaVela";
import DolphinWatchingSnorkeling from "./pages/DolphinWatchingSnorkeling";
import "./App.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/scuola-di-vela" element={<ScuolaDiVela />} />
            <Route path="/lezioni-di-vela" element={<LezioniDiVela />} />
            <Route path="/escursioni-barca-vela" element={<EscursioniBarcaVela />} />
            <Route path="/itinerari-barca-vela" element={<ItinerariBarcaVela />} />
            <Route path="/dolphin-watching-snorkeling" element={<DolphinWatchingSnorkeling />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
