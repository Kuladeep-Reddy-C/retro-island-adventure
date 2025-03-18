
import { useState } from 'react';
import RetroHeader from '@/components/RetroHeader';
import RetroButton from '@/components/RetroButton';
import MarqueeText from '@/components/MarqueeText';
import { Map, Sparkles, Footprints, X, Compass, Trophy } from 'lucide-react';

type Clue = {
  id: number;
  title: string;
  description: string;
  hint: string;
  found: boolean;
  position: { top: string; left: string };
};

const TreasureHunt = () => {
  const [clues, setClues] = useState<Clue[]>([
    {
      id: 1,
      title: "The Ancient Tree",
      description: "Near the oldest palm tree on the island, dig beneath its eastern shadow when the sun is highest.",
      hint: "Follow the trail of shells from the main beach.",
      found: false,
      position: { top: '30%', left: '25%' }
    },
    {
      id: 2,
      title: "Mermaid's Cove",
      description: "Where the rocks form a mermaid's silhouette, search the shallow waters for something that gleams.",
      hint: "Best visited during low tide in the morning.",
      found: false,
      position: { top: '60%', left: '15%' }
    },
    {
      id: 3,
      title: "Pirate's Rest",
      description: "The old captain's favorite resting spot offers more than just shade. Look for the knife mark on the third post.",
      hint: "Find the gazebo with the blue roof near the lagoon.",
      found: false,
      position: { top: '40%', left: '70%' }
    },
    {
      id: 4,
      title: "Echo Cavern",
      description: "Inside the cave where your voice returns three times, find the alcove shaped like a star.",
      hint: "Bring a flashlight - it's dark in there!",
      found: false,
      position: { top: '80%', left: '60%' }
    },
    {
      id: 5,
      title: "Summit Secret",
      description: "At the highest point of the island, beneath the weather vane, a secret awaits the determined explorer.",
      hint: "The hiking trail starts behind the resort reception.",
      found: false,
      position: { top: '20%', left: '50%' }
    }
  ]);
  
  const [selectedClue, setSelectedClue] = useState<Clue | null>(null);
  const [showClue, setShowClue] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  
  const handleClueClick = (clue: Clue) => {
    setSelectedClue(clue);
    setShowClue(false);
    
    // Add a small delay before showing the clue for animation effect
    setTimeout(() => {
      setShowClue(true);
    }, 300);
  };
  
  const markAsFound = (id: number) => {
    // Play sound effect
    const audio = new Audio('/click.mp3');
    audio.volume = 0.3;
    audio.play().catch(e => console.log('Audio play failed:', e));
    
    const updatedClues = clues.map(clue => 
      clue.id === id ? { ...clue, found: true } : clue
    );
    
    setClues(updatedClues);
    
    // Check if all clues are found
    const allFound = updatedClues.every(clue => clue.found);
    if (allFound) {
      setGameCompleted(true);
    }
  };
  
  return (
    <div className="min-h-screen bg-[#b0e0e6] p-6">
      <div className="max-w-6xl mx-auto">
        <RetroHeader title="Treasure Hunt" />
        
        <MarqueeText 
          text="🗺️ X MARKS THE SPOT! FIND ALL THE CLUES TO DISCOVER THE TREASURE! SPECIAL PRIZE AWAITS! 🏆" 
          className="text-lg font-pixel text-retro-purple py-2 mb-8 bg-retro-teal/30 backdrop-blur-sm" 
        />
        
        {gameCompleted ? (
          <div className="animate-fade-in">
            <div className="windows-card p-6 text-center">
              <div className="mb-6">
                <Trophy className="h-20 w-20 text-retro-yellow mx-auto animate-pulse" />
              </div>
              <h2 className="font-pixel text-3xl mb-4 text-retro-purple">Congratulations!</h2>
              <p className="font-pixel text-xl mb-6">You have found all the clues and completed the treasure hunt!</p>
              
              <div className="inset-bevel p-4 bg-retro-lavender mb-6">
                <p className="font-comic">
                  Present this screen at the reception desk to claim your special prize:
                  A treasure chest filled with island souvenirs and a voucher for a free sunset cruise!
                </p>
                <p className="font-pixel mt-4 text-lg animate-blink">
                  Your completion code: RETRO-X-MARKS-2024
                </p>
              </div>
              
              <div className="flex justify-center">
                <RetroButton
                  onClick={() => window.print()}
                  withSound={true}
                >
                  PRINT THIS PAGE
                </RetroButton>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Clue List */}
            <div className="lg:col-span-1">
              <div className="windows-card sticky top-6">
                <div className="windows-header -mx-4 -mt-4 mb-4">
                  <span className="font-bold flex items-center gap-2">
                    <Map className="h-4 w-4" /> Treasure_Clues.txt
                  </span>
                  <div className="flex space-x-1">
                    <span className="w-3 h-3 inline-block bg-retro-red border border-white"></span>
                    <span className="w-3 h-3 inline-block bg-retro-yellow border border-white"></span>
                    <span className="w-3 h-3 inline-block bg-retro-green border border-white"></span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {clues.map((clue) => (
                    <button
                      key={clue.id}
                      className={`w-full p-3 bevel-effect flex items-center justify-between font-pixel text-left transition-colors ${
                        selectedClue?.id === clue.id 
                          ? 'bg-retro-teal/30 font-bold' 
                          : 'hover:bg-retro-lavender/30'
                      } ${
                        clue.found ? 'text-retro-green' : ''
                      }`}
                      onClick={() => handleClueClick(clue)}
                    >
                      <span className="flex items-center gap-2">
                        <X className={`h-4 w-4 ${clue.found ? 'text-retro-green' : 'text-retro-red'}`} />
                        <span>Clue #{clue.id}: {clue.title}</span>
                      </span>
                      
                      {clue.found && <Sparkles className="h-4 w-4 text-retro-yellow" />}
                    </button>
                  ))}
                </div>
                
                <div className="mt-4 p-3 inset-bevel bg-retro-lavender font-pixel">
                  <p>Clues Found: {clues.filter(c => c.found).length} / {clues.length}</p>
                  <div className="w-full bg-retro-white mt-2 h-5 bevel-effect">
                    <div 
                      className="h-full bg-retro-green transition-all duration-500"
                      style={{ width: `${(clues.filter(c => c.found).length / clues.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Treasure Map */}
            <div className="lg:col-span-2">
              <div className="windows-card">
                <div className="windows-header -mx-4 -mt-4 mb-4">
                  <span className="font-bold flex items-center gap-2">
                    <Compass className="h-4 w-4" /> Treasure_Map.bmp
                  </span>
                  <div className="flex space-x-1">
                    <span className="w-3 h-3 inline-block bg-retro-red border border-white"></span>
                    <span className="w-3 h-3 inline-block bg-retro-yellow border border-white"></span>
                    <span className="w-3 h-3 inline-block bg-retro-green border border-white"></span>
                  </div>
                </div>
                
                {/* Map Container */}
                <div 
                  className="h-[400px] bg-retro-yellow/30 border-4 border-retro-black relative"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.09'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                  }}
                >
                  {/* Island Shape */}
                  <div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-retro-orange/40 border-4 border-retro-black"
                    style={{
                      clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
                    }}
                  ></div>
                  
                  {/* Clue Markers */}
                  {clues.map((clue) => (
                    <button
                      key={clue.id}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
                        clue.found 
                          ? 'text-retro-green animate-pulse' 
                          : 'text-retro-red animate-bounce'
                      } transition-all duration-300 hover:scale-125`}
                      style={{ 
                        top: clue.position.top, 
                        left: clue.position.left 
                      }}
                      onClick={() => handleClueClick(clue)}
                    >
                      <X className="h-8 w-8" />
                    </button>
                  ))}
                  
                  {/* Decorative Elements */}
                  <div className="absolute bottom-10 right-10 text-retro-blue">
                    <Compass className="h-10 w-10 animate-rotate" />
                  </div>
                  
                  <div className="absolute top-10 left-20">
                    <Footprints className="h-6 w-6 text-retro-purple opacity-60" />
                  </div>
                  
                  <div className="absolute bottom-20 left-40">
                    <Footprints className="h-6 w-6 text-retro-purple opacity-60" />
                  </div>
                  
                  <div className="absolute top-30 right-20">
                    <Footprints className="h-6 w-6 text-retro-purple opacity-60" />
                  </div>
                </div>
                
                {/* Selected Clue Details */}
                {selectedClue && (
                  <div className={`mt-6 transition-all duration-500 ${showClue ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="windows-card bg-retro-lavender/30">
                      <div className="windows-header -mx-4 -mt-4 mb-4">
                        <span className="font-bold">Clue #{selectedClue.id}: {selectedClue.title}</span>
                        <div className="flex space-x-1">
                          <span className="w-3 h-3 inline-block bg-retro-red border border-white"></span>
                          <span className="w-3 h-3 inline-block bg-retro-yellow border border-white"></span>
                          <span className="w-3 h-3 inline-block bg-retro-green border border-white"></span>
                        </div>
                      </div>
                      
                      <div className="space-y-4 font-comic">
                        <p className="italic">"{selectedClue.description}"</p>
                        
                        <div className="inset-bevel p-3 bg-retro-yellow/20">
                          <p className="flex items-center gap-2 font-pixel">
                            <Sparkles className="h-4 w-4 text-retro-yellow" />
                            <span>HINT: {selectedClue.hint}</span>
                          </p>
                        </div>
                        
                        {!selectedClue.found && (
                          <div className="flex justify-end">
                            <RetroButton
                              onClick={() => markAsFound(selectedClue.id)}
                              variant="secondary"
                              withSound={true}
                            >
                              MARK AS FOUND
                            </RetroButton>
                          </div>
                        )}
                        
                        {selectedClue.found && (
                          <div className="text-center text-retro-green font-pixel animate-pulse">
                            <p className="flex items-center justify-center gap-2">
                              <Sparkles className="h-4 w-4" />
                              <span>CLUE FOUND!</span>
                              <Sparkles className="h-4 w-4" />
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Treasure Hunt Rules */}
              <div className="mt-6 windows-card">
                <div className="windows-header -mx-4 -mt-4 mb-4">
                  <span className="font-bold">Treasure_Hunt_Rules.txt</span>
                  <div className="flex space-x-1">
                    <span className="w-3 h-3 inline-block bg-retro-red border border-white"></span>
                    <span className="w-3 h-3 inline-block bg-retro-yellow border border-white"></span>
                    <span className="w-3 h-3 inline-block bg-retro-green border border-white"></span>
                  </div>
                </div>
                
                <div className="font-comic space-y-2">
                  <p>1. Find all 5 clues around the island using the map above.</p>
                  <p>2. Each clue contains hints about the location of a piece of the treasure.</p>
                  <p>3. Mark each clue as "Found" once you've discovered its location.</p>
                  <p>4. When all clues are found, report to the reception desk to claim your prize!</p>
                  <p>5. The treasure hunt is available daily from 9:00 AM to 4:00 PM.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Footer */}
        <footer className="mt-10 text-center font-pixel">
          <p>© 2024 Retro Island Tours. All Rights Reserved.</p>
          <p className="text-sm mt-1">Treasure hunt designed by Captain RetroBeard.</p>
        </footer>
      </div>
    </div>
  );
};

export default TreasureHunt;
