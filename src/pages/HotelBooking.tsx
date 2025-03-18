
import { useState } from 'react';
import RetroHeader from '@/components/RetroHeader';
import RetroButton from '@/components/RetroButton';
import MarqueeText from '@/components/MarqueeText';
import { Calendar, Bed, Users, Star, Check, X } from 'lucide-react';

type Room = {
  id: number;
  name: string;
  description: string;
  price: number;
  capacity: number;
  amenities: string[];
  available: boolean;
  image: string; // Using emoji as placeholder for image
  stars: number;
};

const HotelBooking = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState('1');
  const [isBooking, setIsBooking] = useState(false);
  
  const rooms: Room[] = [
    {
      id: 1,
      name: "Beach Front Suite",
      description: "Luxurious room with direct beach access and amazing views of the ocean.",
      price: 199,
      capacity: 2,
      amenities: ["Ocean View", "King Bed", "Mini Bar", "Free WiFi", "Room Service"],
      available: true,
      image: "🏖️",
      stars: 5
    },
    {
      id: 2,
      name: "Garden Bungalow",
      description: "Cozy bungalow surrounded by tropical gardens for a peaceful stay.",
      price: 149,
      capacity: 2,
      amenities: ["Garden View", "Queen Bed", "Private Patio", "Free WiFi"],
      available: true,
      image: "🌴",
      stars: 4
    },
    {
      id: 3,
      name: "Family Suite",
      description: "Spacious suite perfect for families with separate bedrooms and living area.",
      price: 249,
      capacity: 4,
      amenities: ["Partial Ocean View", "2 Bedrooms", "Kitchen", "Free WiFi", "Kids Area"],
      available: false,
      image: "👨‍👩‍👧‍👦",
      stars: 4
    },
    {
      id: 4,
      name: "Budget Room",
      description: "Comfortable and affordable option for travelers on a budget.",
      price: 99,
      capacity: 2,
      amenities: ["Garden View", "Twin Beds", "Free WiFi"],
      available: true,
      image: "💰",
      stars: 3
    },
    {
      id: 5,
      name: "Honeymoon Villa",
      description: "Romantic villa with private plunge pool and stunning sunset views.",
      price: 299,
      capacity: 2,
      amenities: ["Ocean View", "King Bed", "Private Pool", "Champagne Service", "Free WiFi"],
      available: true,
      image: "💑",
      stars: 5
    }
  ];
  
  const handleBooking = () => {
    if (!selectedRoom) return;
    
    setIsBooking(true);
    
    // Simulate booking
    setTimeout(() => {
      setIsBooking(false);
      // Show success message or navigate to confirmation
      alert(`Booking successful for ${selectedRoom.name}! Confirmation code: RET${Math.floor(1000 + Math.random() * 9000)}`);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-[#b0e0e6] p-6">
      <div className="max-w-6xl mx-auto">
        <RetroHeader title="Hotel Booking" />
        
        <MarqueeText 
          text="🏨 BOOK YOUR DREAM ROOM NOW! LIMITED AVAILABILITY! SPECIAL SUMMER RATES! 🏝️" 
          className="text-lg font-pixel text-retro-purple py-2 mb-8 bg-retro-teal/30 backdrop-blur-sm" 
        />
        
        {/* Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="windows-card p-4 sticky top-6">
              <div className="windows-header mb-4 -mx-4 -mt-4">
                <span className="font-bold">Booking_Form.exe</span>
                <div className="flex space-x-1">
                  <span className="w-3 h-3 inline-block bg-retro-red border border-white"></span>
                  <span className="w-3 h-3 inline-block bg-retro-yellow border border-white"></span>
                  <span className="w-3 h-3 inline-block bg-retro-green border border-white"></span>
                </div>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="check-in" className="block font-pixel mb-1 flex items-center gap-2">
                    <Calendar className="h-4 w-4" /> Check-in Date:
                  </label>
                  <input
                    id="check-in"
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="retro-input w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="check-out" className="block font-pixel mb-1 flex items-center gap-2">
                    <Calendar className="h-4 w-4" /> Check-out Date:
                  </label>
                  <input
                    id="check-out"
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="retro-input w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="guests" className="block font-pixel mb-1 flex items-center gap-2">
                    <Users className="h-4 w-4" /> Number of Guests:
                  </label>
                  <select
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="retro-input w-full"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                  </select>
                </div>
                
                {selectedRoom && (
                  <div className="mt-6 p-4 inset-bevel bg-retro-lavender">
                    <h3 className="font-pixel text-lg mb-2">Selected Room:</h3>
                    <p className="font-pixel">{selectedRoom.name}</p>
                    <p className="font-pixel">${selectedRoom.price} per night</p>
                    
                    <div className="mt-4 pt-4 border-t border-retro-black">
                      <RetroButton
                        onClick={handleBooking}
                        disabled={isBooking}
                        withSound={true}
                        className="w-full justify-center"
                      >
                        {isBooking ? 'PROCESSING...' : 'BOOK NOW'}
                      </RetroButton>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
          
          {/* Room Cards */}
          <div className="lg:col-span-2">
            <h2 className="font-pixel text-2xl mb-4 text-retro-purple">Available Rooms:</h2>
            
            <div className="space-y-6">
              {rooms.map((room) => (
                <div 
                  key={room.id}
                  className={`windows-card transition-transform ${selectedRoom?.id === room.id ? 'scale-[1.02]' : 'hover:scale-[1.01]'}`}
                >
                  <div className="windows-header -mx-4 -mt-4 mb-4">
                    <span className="font-bold">{room.name}.bmp</span>
                    <div className="flex space-x-1">
                      <span className="w-3 h-3 inline-block bg-retro-red border border-white"></span>
                      <span className="w-3 h-3 inline-block bg-retro-yellow border border-white"></span>
                      <span className="w-3 h-3 inline-block bg-retro-green border border-white"></span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Room Image */}
                    <div className="md:w-1/4 aspect-square flex items-center justify-center text-6xl bg-retro-lavender/30 bevel-effect">
                      {room.image}
                    </div>
                    
                    {/* Room Info */}
                    <div className="md:w-3/4 space-y-3">
                      <div className="flex justify-between items-start">
                        <h3 className="font-pixel text-xl font-bold">{room.name}</h3>
                        <div className="flex">
                          {[...Array(room.stars)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-retro-yellow text-retro-yellow" />
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Bed className="h-4 w-4" />
                        <span className="font-pixel">Capacity: {room.capacity} persons</span>
                      </div>
                      
                      <p className="font-comic text-sm">{room.description}</p>
                      
                      <div className="flex flex-wrap gap-2 my-2">
                        {room.amenities.map((amenity, index) => (
                          <span 
                            key={index} 
                            className="inline-block px-2 py-1 bg-retro-teal/20 text-xs font-pixel rounded bevel-effect"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center pt-2">
                        <div>
                          <span className="font-pixel text-lg font-bold">${room.price}</span>
                          <span className="font-pixel text-sm"> / night</span>
                        </div>
                        
                        <div className="flex items-center">
                          {room.available ? (
                            <>
                              <span className="font-pixel text-retro-green flex items-center mr-3">
                                <Check className="h-4 w-4 mr-1" /> Available
                              </span>
                              <RetroButton
                                onClick={() => setSelectedRoom(room)}
                                variant="yellow"
                                className="text-sm px-4 py-2"
                              >
                                SELECT
                              </RetroButton>
                            </>
                          ) : (
                            <span className="font-pixel text-retro-red animate-blink flex items-center">
                              <X className="h-4 w-4 mr-1" /> No Vacancy
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-10 text-center font-pixel">
          <p>© 2024 Retro Island Tours. All Rights Reserved.</p>
          <p className="text-sm mt-1">All rates subject to 10% island tax.</p>
        </footer>
      </div>
    </div>
  );
};

export default HotelBooking;
