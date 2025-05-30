
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Home from "./pages/Home";
import ViewSites from "./pages/ViewSites";
import HotelBooking from "./pages/HotelBooking";
import Restaurant from "./pages/Restaurant";
import TreasureHunt from "./pages/TreasureHunt";
import NotFound from "./pages/NotFound";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  // Preload audio files for better user experience
  useEffect(() => {
    const preloadAudio = async () => {
      try {
        const audioFiles = ['/click.mp3'];
        
        for (const file of audioFiles) {
          const audio = new Audio(file);
          audio.preload = 'auto';
          
          // This is just to load the audio, we don't actually play it
          audio.volume = 0;
          audio.muted = true;
          
          // Load the audio
          await audio.load();
          console.log(`Preloaded audio: ${file}`);
        }
      } catch (error) {
        console.error('Error preloading audio:', error);
      }
    };
    
    preloadAudio();
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Home />} />
            <Route path="/view-sites" element={<ViewSites />} />
            <Route path="/hotel-booking" element={<HotelBooking />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/treasure-hunt" element={<TreasureHunt />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
