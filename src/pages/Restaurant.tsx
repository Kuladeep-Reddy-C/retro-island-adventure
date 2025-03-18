
import { useState } from 'react';
import RetroHeader from '@/components/RetroHeader';
import MarqueeText from '@/components/MarqueeText';
import { Utensils, Coffee, Fish, Pizza, SalternateContainer, Beef, Dessert, Banana } from 'lucide-react';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'breakfast' | 'lunch' | 'dinner' | 'dessert' | 'drinks';
  icon: string;
  isSpecial?: boolean;
};

const Restaurant = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('breakfast');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  
  const menuItems: MenuItem[] = [
    // Breakfast
    {
      id: 1,
      name: "Island Pancakes",
      description: "Fluffy pancakes with tropical fruit topping and coconut syrup",
      price: 9.95,
      category: 'breakfast',
      icon: "🥞"
    },
    {
      id: 2,
      name: "Surfer's Omelette",
      description: "Three-egg omelette with cheese, ham, and fresh vegetables",
      price: 12.95,
      category: 'breakfast',
      icon: "🍳"
    },
    {
      id: 3,
      name: "Tropical Fruit Bowl",
      description: "Fresh seasonal fruits with honey yogurt and granola",
      price: 8.95,
      category: 'breakfast',
      icon: "🍇"
    },
    // Lunch
    {
      id: 4,
      name: "Catch of the Day Sandwich",
      description: "Grilled fresh fish with lettuce, tomato, and tartar sauce on toasted bread",
      price: 14.95,
      category: 'lunch',
      icon: "🐟",
      isSpecial: true
    },
    {
      id: 5,
      name: "Island Burger",
      description: "Beef patty with pineapple, bacon, and our special sauce",
      price: 15.95,
      category: 'lunch',
      icon: "🍔"
    },
    {
      id: 6,
      name: "Tropical Salad",
      description: "Mixed greens with mango, avocado, and citrus dressing",
      price: 11.95,
      category: 'lunch',
      icon: "🥗"
    },
    // Dinner
    {
      id: 7,
      name: "Seafood Platter",
      description: "Grilled fish, shrimp, and calamari with island spices",
      price: 24.95,
      category: 'dinner',
      icon: "🦐",
      isSpecial: true
    },
    {
      id: 8,
      name: "Coconut Curry Chicken",
      description: "Tender chicken in coconut curry sauce with steamed rice",
      price: 18.95,
      category: 'dinner',
      icon: "🍛"
    },
    {
      id: 9,
      name: "Vegetable Stir Fry",
      description: "Fresh island vegetables stir-fried with tofu and teriyaki sauce",
      price: 16.95,
      category: 'dinner',
      icon: "🥦"
    },
    // Desserts
    {
      id: 10,
      name: "Pineapple Upside Down Cake",
      description: "Classic cake with caramelized pineapple topping",
      price: 7.95,
      category: 'dessert',
      icon: "🍰"
    },
    {
      id: 11,
      name: "Coconut Ice Cream",
      description: "Homemade coconut ice cream with chocolate sauce",
      price: 6.95,
      category: 'dessert',
      icon: "🍦"
    },
    // Drinks
    {
      id: 12,
      name: "Tropical Punch",
      description: "Refreshing mix of tropical fruit juices",
      price: 5.95,
      category: 'drinks',
      icon: "🧃"
    },
    {
      id: 13,
      name: "Island Sunrise",
      description: "Orange juice, pineapple juice, and grenadine",
      price: 6.95,
      category: 'drinks',
      icon: "🍹"
    },
    {
      id: 14,
      name: "Coconut Coffee",
      description: "Coffee with coconut milk and cinnamon",
      price: 4.95,
      category: 'drinks',
      icon: "☕"
    }
  ];
  
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'breakfast': return <Coffee className="h-4 w-4" />;
      case 'lunch': return <Pizza className="h-4 w-4" />;
      case 'dinner': return <Utensils className="h-4 w-4" />;
      case 'dessert': return <Banana className="h-4 w-4" />;
      case 'drinks': return <SalternateContainer className="h-4 w-4" />;
      default: return <Utensils className="h-4 w-4" />;
    }
  };
  
  return (
    <div className="min-h-screen bg-[#b0e0e6] p-6">
      <div className="max-w-6xl mx-auto">
        <RetroHeader title="Restaurant" />
        
        <MarqueeText 
          text="🍽️ TASTE OUR DELICIOUS ISLAND CUISINE! NEW SPECIALS EVERY DAY! OPEN 7AM-10PM! 🍹" 
          className="text-lg font-pixel text-retro-purple py-2 mb-8 bg-retro-teal/30 backdrop-blur-sm" 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Category Menu */}
          <div className="lg:col-span-1">
            <div className="windows-card sticky top-6">
              <div className="windows-header -mx-4 -mt-4 mb-4">
                <span className="font-bold">Menu_Categories.exe</span>
                <div className="flex space-x-1">
                  <span className="w-3 h-3 inline-block bg-retro-red border border-white"></span>
                  <span className="w-3 h-3 inline-block bg-retro-yellow border border-white"></span>
                  <span className="w-3 h-3 inline-block bg-retro-green border border-white"></span>
                </div>
              </div>
              
              <div className="space-y-2">
                {['breakfast', 'lunch', 'dinner', 'dessert', 'drinks'].map((category) => (
                  <button
                    key={category}
                    className={`w-full p-3 bevel-effect flex items-center gap-2 font-pixel text-left transition-colors ${
                      selectedCategory === category 
                        ? 'bg-retro-teal/30 font-bold' 
                        : 'hover:bg-retro-lavender/30'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {getCategoryIcon(category)}
                    <span className="capitalize">{category}</span>
                  </button>
                ))}
              </div>
              
              {selectedItem && (
                <div className="mt-6 p-4 inset-bevel bg-retro-lavender">
                  <div className="text-center text-5xl mb-2">{selectedItem.icon}</div>
                  <h3 className="font-pixel text-lg text-center mb-2">{selectedItem.name}</h3>
                  <p className="font-comic text-sm mb-3">{selectedItem.description}</p>
                  <p className="font-pixel text-center text-lg">${selectedItem.price.toFixed(2)}</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Menu Items */}
          <div className="lg:col-span-2">
            <h2 className="font-pixel text-2xl mb-4 capitalize flex items-center">
              {getCategoryIcon(selectedCategory)}
              <span className="ml-2">{selectedCategory} Menu</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuItems
                .filter(item => item.category === selectedCategory)
                .map(item => (
                  <div
                    key={item.id}
                    className={`windows-card p-4 cursor-pointer transition-transform hover:scale-[1.02] ${
                      selectedItem?.id === item.id ? 'border-retro-purple border-4' : ''
                    }`}
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="flex items-center">
                      <div className="text-4xl mr-3">{item.icon}</div>
                      <div>
                        <h3 className="font-pixel text-lg">
                          {item.name}
                          {item.isSpecial && (
                            <span className="inline-block ml-2 px-1 animate-pulse text-xs bg-retro-red text-white">
                              SPECIAL
                            </span>
                          )}
                        </h3>
                        <p className="font-comic text-sm truncate">{item.description}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-2 pt-2 border-t border-retro-black/20">
                      <span className="font-pixel text-lg">${item.price.toFixed(2)}</span>
                      <span className="font-pixel text-xs px-2 py-1 bg-retro-yellow/30 bevel-effect">
                        Click for details
                      </span>
                    </div>
                  </div>
                ))}
            </div>
            
            {/* Daily Special */}
            <div className="mt-8 windows-card p-4 border-retro-pink border-4 bg-retro-pink/10">
              <div className="windows-header -mx-4 -mt-4 mb-4">
                <span className="font-bold flex items-center gap-2">
                  <span className="animate-pulse">⭐</span> Today's Special
                </span>
                <div className="flex space-x-1">
                  <span className="w-3 h-3 inline-block bg-retro-red border border-white"></span>
                  <span className="w-3 h-3 inline-block bg-retro-yellow border border-white"></span>
                  <span className="w-3 h-3 inline-block bg-retro-green border border-white"></span>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="text-7xl">🍤</div>
                <div>
                  <h3 className="font-pixel text-xl text-retro-purple">Island Seafood Bonanza</h3>
                  <p className="font-comic my-2">
                    A delicious assortment of the freshest seafood, including lobster, shrimp, and fish,
                    served with island rice and seasonal vegetables.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="font-pixel">
                      <span className="text-retro-red line-through">$34.95</span>
                      <span className="text-xl ml-2">$29.95</span>
                    </div>
                    <div className="font-pixel text-sm px-2 py-1 bg-retro-yellow animate-pulse">
                      LIMITED AVAILABILITY
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Restaurant Hours */}
        <div className="mt-8 windows-card p-4">
          <h3 className="font-pixel text-xl mb-2">Restaurant Hours:</h3>
          <table className="w-full border-collapse bevel-effect">
            <thead>
              <tr className="bg-retro-teal/30">
                <th className="border p-2 font-pixel">Day</th>
                <th className="border p-2 font-pixel">Breakfast</th>
                <th className="border p-2 font-pixel">Lunch</th>
                <th className="border p-2 font-pixel">Dinner</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-white odd:bg-retro-lavender/30">
                <td className="border p-2 font-pixel">Monday-Friday</td>
                <td className="border p-2 font-pixel">7:00 AM - 10:30 AM</td>
                <td className="border p-2 font-pixel">11:30 AM - 2:30 PM</td>
                <td className="border p-2 font-pixel">6:00 PM - 10:00 PM</td>
              </tr>
              <tr className="even:bg-white odd:bg-retro-lavender/30">
                <td className="border p-2 font-pixel">Saturday-Sunday</td>
                <td className="border p-2 font-pixel">7:00 AM - 11:00 AM</td>
                <td className="border p-2 font-pixel">12:00 PM - 3:00 PM</td>
                <td className="border p-2 font-pixel">6:00 PM - 11:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Footer */}
        <footer className="mt-10 text-center font-pixel">
          <p>© 2024 Retro Island Tours. All Rights Reserved.</p>
          <p className="text-sm mt-1">All prices include island tax.</p>
        </footer>
      </div>
    </div>
  );
};

export default Restaurant;
