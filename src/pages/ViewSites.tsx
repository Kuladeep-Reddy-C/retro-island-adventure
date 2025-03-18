
import { useState } from 'react';
import RetroHeader from '@/components/RetroHeader';
import MarqueeText from '@/components/MarqueeText';
import { Map, MapPin, Fish, Palmtree, Waves, Camera, Shell } from 'lucide-react';

type SiteInfo = {
  id: number;
  name: string;
  description: string;
  icon: 'palm' | 'fish' | 'waves' | 'camera' | 'shell';
  position: { top: string; left: string };
}

const ViewSites = () => {
  const [selectedSite, setSelectedSite] = useState<SiteInfo | null>(null);
  
  const sites: SiteInfo[] = [
    {
      id: 1,
      name: "Sunny Beach",
      description: "A pristine beach with golden sand and crystal clear waters. Perfect for swimming and sunbathing!",
      icon: 'palm',
      position: { top: '30%', left: '20%' }
    },
    {
      id: 2,
      name: "Coral Reef",
      description: "Home to hundreds of colorful fish species. Great for snorkeling and underwater photography!",
      icon: 'fish',
      position: { top: '50%', left: '30%' }
    },
    {
      id: 3,
      name: "Surf Point",
      description: "The best spot for catching waves! Beginners and experts welcome.",
      icon: 'waves',
      position: { top: '60%', left: '60%' }
    },
    {
      id: 4,
      name: "Scenic Viewpoint",
      description: "Climb to the top for breathtaking panoramic views of the entire island.",
      icon: 'camera',
      position: { top: '25%', left: '70%' }
    },
    {
      id: 5,
      name: "Shell Beach",
      description: "Famous for its unique shells and quiet atmosphere. A collector's paradise!",
      icon: 'shell',
      position: { top: '70%', left: '40%' }
    }
  ];
  
  const renderIcon = (icon: string) => {
    switch(icon) {
      case 'palm': return <Palmtree className="h-8 w-8 text-retro-green" />;
      case 'fish': return <Fish className="h-8 w-8 text-retro-blue" />;
      case 'waves': return <Waves className="h-8 w-8 text-retro-teal" />;
      case 'camera': return <Camera className="h-8 w-8 text-retro-purple" />;
      case 'shell': return <Shell className="h-8 w-8 text-retro-pink" />;
      default: return <MapPin className="h-8 w-8 text-retro-red" />;
    }
  };
  
  return (
    <div className="min-h-screen bg-[#b0e0e6] p-6">
      <div className="max-w-6xl mx-auto">
        <RetroHeader title="Sites Map" />
        
        <MarqueeText 
          text="🌴 EXPLORE OUR BEAUTIFUL ISLAND! CLICK ON THE ICONS TO LEARN MORE ABOUT EACH LOCATION! 🌊" 
          className="text-lg font-pixel text-retro-purple py-2 mb-8 bg-retro-teal/30 backdrop-blur-sm" 
        />
        
        {/* Map Container */}
        <div className="windows-card p-4 relative">
          <div className="windows-header mb-4 -mx-4 -mt-4">
            <span className="font-bold flex items-center gap-2">
              <Map className="h-4 w-4" />
              Island_Map.bmp
            </span>
            <div className="flex space-x-1">
              <span className="w-3 h-3 inline-block bg-retro-red border border-white"></span>
              <span className="w-3 h-3 inline-block bg-retro-yellow border border-white"></span>
              <span className="w-3 h-3 inline-block bg-retro-green border border-white"></span>
            </div>
          </div>
          
          {/* Map Area */}
          <div 
            className="h-[500px] bg-retro-blue/20 border-4 border-retro-black relative"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '150px 150px'
            }}
          >
            {/* Island shape */}
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-retro-yellow/40 border-4 border-retro-black"
              style={{
                clipPath: "polygon(30% 0%, 60% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
              }}
            ></div>
            
            {/* Site Markers */}
            {sites.map((site) => (
              <button
                key={site.id}
                className="absolute bevel-effect bg-white p-2 rounded-full transform hover:scale-110 transition-transform"
                style={{ top: site.position.top, left: site.position.left }}
                onClick={() => setSelectedSite(site)}
              >
                {renderIcon(site.icon)}
              </button>
            ))}
            
            {/* Water Animation */}
            <div className="absolute bottom-4 right-4 animate-pulse">
              <Waves className="h-10 w-10 text-retro-blue" />
            </div>
          </div>
          
          {/* Site Info Panel */}
          <div className="mt-4 inset-bevel p-4 bg-[#f0f0f0] font-pixel">
            {selectedSite ? (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-retro-purple mb-2">{selectedSite.name}</h3>
                <div className="flex items-start gap-3">
                  <div className="mt-1">{renderIcon(selectedSite.icon)}</div>
                  <p className="font-comic">{selectedSite.description}</p>
                </div>
              </div>
            ) : (
              <p className="text-center">Click on a location to see details</p>
            )}
          </div>
        </div>
        
        <div className="windows-card mt-6 p-4">
          <h3 className="font-pixel text-xl mb-2">Island Sites Operating Hours:</h3>
          <table className="w-full border-collapse bevel-effect">
            <thead>
              <tr className="bg-retro-teal/30">
                <th className="border p-2 font-pixel">Location</th>
                <th className="border p-2 font-pixel">Open</th>
                <th className="border p-2 font-pixel">Close</th>
                <th className="border p-2 font-pixel">Best Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-white odd:bg-retro-lavender/30">
                <td className="border p-2 font-pixel">Sunny Beach</td>
                <td className="border p-2 font-pixel">6:00 AM</td>
                <td className="border p-2 font-pixel">7:00 PM</td>
                <td className="border p-2 font-pixel">Morning</td>
              </tr>
              <tr className="even:bg-white odd:bg-retro-lavender/30">
                <td className="border p-2 font-pixel">Coral Reef</td>
                <td className="border p-2 font-pixel">8:00 AM</td>
                <td className="border p-2 font-pixel">5:00 PM</td>
                <td className="border p-2 font-pixel">Noon</td>
              </tr>
              <tr className="even:bg-white odd:bg-retro-lavender/30">
                <td className="border p-2 font-pixel">Surf Point</td>
                <td className="border p-2 font-pixel">7:00 AM</td>
                <td className="border p-2 font-pixel">6:00 PM</td>
                <td className="border p-2 font-pixel">Afternoon</td>
              </tr>
              <tr className="even:bg-white odd:bg-retro-lavender/30">
                <td className="border p-2 font-pixel">Scenic Viewpoint</td>
                <td className="border p-2 font-pixel">9:00 AM</td>
                <td className="border p-2 font-pixel">6:30 PM</td>
                <td className="border p-2 font-pixel">Sunset</td>
              </tr>
              <tr className="even:bg-white odd:bg-retro-lavender/30">
                <td className="border p-2 font-pixel">Shell Beach</td>
                <td className="border p-2 font-pixel">7:30 AM</td>
                <td className="border p-2 font-pixel">5:30 PM</td>
                <td className="border p-2 font-pixel">Morning</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Footer */}
        <footer className="mt-10 text-center font-pixel">
          <p>© 2024 Retro Island Tours. All Rights Reserved.</p>
          <p className="text-sm mt-1">Map data last updated on 01/01/2024</p>
        </footer>
      </div>
    </div>
  );
};

export default ViewSites;
