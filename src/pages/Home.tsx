
import { useNavigate } from 'react-router-dom';
import PixelCard from '@/components/PixelCard';
import MarqueeText from '@/components/MarqueeText';
import { SunMedium, MapPin, Building, Utensils, Map } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#b0e0e6] p-6 relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-dots bg-[size:20px_20px] opacity-20 pointer-events-none"
      ></div>
      
      {/* Page Content */}
      <div className="max-w-6xl mx-auto animate-fade-in">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-5xl font-pixel tracking-wide mb-4 mt-6">
            <span className="text-retro-teal">R</span>
            <span className="text-retro-pink">e</span>
            <span className="text-retro-yellow">t</span>
            <span className="text-retro-purple">r</span>
            <span className="text-retro-orange">o</span>
            <span> </span>
            <span className="text-retro-blue">I</span>
            <span className="text-retro-green">s</span>
            <span className="text-retro-red">l</span>
            <span className="text-retro-teal">a</span>
            <span className="text-retro-pink">n</span>
            <span className="text-retro-yellow">d</span>
          </h1>
          
          <div className="mb-4">
            <MarqueeText 
              text="🌴 BOOK YOUR DREAM ISLAND VACATION TODAY! EXPLORE OUR BEACHES! STAY IN LUXURY! TASTE ISLAND CUISINE! FIND HIDDEN TREASURES! 🌴" 
              className="text-lg font-pixel text-retro-purple py-2 bg-retro-teal/30 backdrop-blur-sm" 
            />
          </div>
          
          <p className="font-comic text-lg max-w-2xl mx-auto">
            Welcome to your ultimate 90s style island getaway! Click on any of the options below to start your adventure.
          </p>
        </header>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* View Sites */}
          <PixelCard 
            title="View Island Sites"
            className="bg-retro-blue/30 border-retro-blue hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)]"
            onClick={() => navigate('/view-sites')}
          >
            <div className="flex flex-col items-center p-4">
              <MapPin size={48} className="mb-4 text-retro-purple" />
              <h3 className="font-pixel text-2xl mb-2 text-retro-black">Explore Beaches</h3>
              <p className="font-comic text-center">
                Check out our amazing beaches, viewpoints, and attractions around the island.
              </p>
            </div>
          </PixelCard>
          
          {/* Hotel Booking */}
          <PixelCard 
            title="Hotel Bookings"
            className="bg-retro-pink/30 border-retro-pink hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)]"
            onClick={() => navigate('/hotel-booking')}
          >
            <div className="flex flex-col items-center p-4">
              <Building size={48} className="mb-4 text-retro-purple" />
              <h3 className="font-pixel text-2xl mb-2 text-retro-black">Book Your Stay</h3>
              <p className="font-comic text-center">
                Find the perfect accommodation for your vacation from our selection of retro-themed rooms.
              </p>
            </div>
          </PixelCard>
          
          {/* Restaurant */}
          <PixelCard 
            title="Island Cuisine"
            className="bg-retro-yellow/30 border-retro-yellow hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)]"
            onClick={() => navigate('/restaurant')}
          >
            <div className="flex flex-col items-center p-4">
              <Utensils size={48} className="mb-4 text-retro-purple" />
              <h3 className="font-pixel text-2xl mb-2 text-retro-black">Taste Paradise</h3>
              <p className="font-comic text-center">
                Discover our delicious island cuisine with a 90s twist. From seafood to tropical fruits!
              </p>
            </div>
          </PixelCard>
          
          {/* Treasure Hunt */}
          <PixelCard 
            title="Treasure Hunt"
            className="bg-retro-green/30 border-retro-green hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)]"
            isNew={true}
            onClick={() => navigate('/treasure-hunt')}
          >
            <div className="flex flex-col items-center p-4">
              <Map size={48} className="mb-4 text-retro-purple" />
              <h3 className="font-pixel text-2xl mb-2 text-retro-black">Find Treasures</h3>
              <p className="font-comic text-center">
                Join our exciting treasure hunt game! Follow the clues and discover hidden island secrets.
              </p>
            </div>
          </PixelCard>
        </div>
        
        {/* Island Weather */}
        <div className="mt-8">
          <div className="windows-card p-4">
            <div className="windows-header mb-4 -mx-4 -mt-4">
              <span className="font-bold">Island_Weather.exe</span>
              <div className="flex space-x-1">
                <span className="w-3 h-3 inline-block bg-retro-red border border-white"></span>
                <span className="w-3 h-3 inline-block bg-retro-yellow border border-white"></span>
                <span className="w-3 h-3 inline-block bg-retro-green border border-white"></span>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="flex space-x-6 items-center">
                <div className="text-center">
                  <SunMedium size={40} className="mx-auto text-retro-yellow animate-pulse" />
                  <p className="font-pixel mt-2">TODAY</p>
                  <p className="font-pixel text-xl">82°F</p>
                </div>
                
                <div className="text-center">
                  <SunMedium size={40} className="mx-auto text-retro-yellow" />
                  <p className="font-pixel mt-2">TOMORROW</p>
                  <p className="font-pixel text-xl">84°F</p>
                </div>
                
                <div className="text-center">
                  <SunMedium size={40} className="mx-auto text-retro-yellow" />
                  <p className="font-pixel mt-2">WEDNESDAY</p>
                  <p className="font-pixel text-xl">80°F</p>
                </div>
                
                <div className="text-center">
                  <SunMedium size={40} className="mx-auto text-retro-yellow" />
                  <p className="font-pixel mt-2">THURSDAY</p>
                  <p className="font-pixel text-xl">81°F</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-10 text-center font-pixel">
          <p>© 2024 Retro Island Tours. All Rights Reserved.</p>
          <p className="text-sm mt-1">Best viewed in 800x600 resolution.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
