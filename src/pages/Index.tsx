
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RetroButton from '@/components/RetroButton';
import MarqueeText from '@/components/MarqueeText';

const Index = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      navigate('/home');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#b0e0e6] relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-retro-pattern bg-[size:50px_50px] opacity-30"
        style={{ backgroundPosition: '0 0, 25px 25px' }}
      ></div>
      
      {/* Marquee Text */}
      <div className="absolute top-10 w-full z-10">
        <MarqueeText 
          text="✨ WELCOME TO RETRO ISLAND ADVENTURES! DISCOVER THE 90'S PARADISE! SURF'S UP! BOOK NOW! ✨" 
          className="text-xl font-pixel text-retro-purple py-2 bg-retro-teal/30 backdrop-blur-sm" 
        />
      </div>
      
      <div className="animate-fade-in flex flex-col items-center z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-pixel tracking-wide mb-2">
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
          <div className="animate-blink">
            <h2 className="text-2xl font-pixel text-retro-purple">
              Welcome Back to Paradise!
            </h2>
          </div>
          <p className="text-md font-comic mt-2 text-retro-black">Sign in to continue your retro adventure</p>
        </div>
        
        {/* Login Form */}
        <div className="windows-card p-8 w-96 max-w-full">
          <div className="windows-header mb-5 -mx-8 -mt-8">
            <span className="font-bold">Login.exe</span>
            <div className="flex space-x-1">
              <span className="w-3 h-3 inline-block bg-retro-red border border-white"></span>
              <span className="w-3 h-3 inline-block bg-retro-yellow border border-white"></span>
              <span className="w-3 h-3 inline-block bg-retro-green border border-white"></span>
            </div>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="username" className="block font-pixel text-lg mb-1">
                Username:
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="retro-input w-full"
                placeholder="Enter username"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block font-pixel text-lg mb-1">
                Password:
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="retro-input w-full"
                placeholder="Enter password"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                className="bevel-effect w-5 h-5 appearance-none checked:bg-retro-teal checked:border-retro-black cursor-pointer"
              />
              <label htmlFor="remember" className="font-pixel">
                Remember me
              </label>
            </div>
            
            <div className="flex justify-center pt-2">
              <RetroButton
                type="submit"
                disabled={isLoading}
                withSound={true}
                className="w-full justify-center"
              >
                {isLoading ? 'LOGGING IN...' : 'LOGIN'}
              </RetroButton>
            </div>
            
            <div className="text-center mt-4">
              <p className="font-pixel text-sm">
                No account? <span className="text-retro-pink cursor-pointer underline">Sign Up</span>
              </p>
              <p className="font-pixel text-sm mt-1">
                <span className="text-retro-teal cursor-pointer">Forgot Password?</span>
              </p>
            </div>
          </form>
        </div>
        
        {/* Copyright */}
        <p className="mt-8 font-pixel text-sm text-retro-black">
          © 2024 Retro Island Tours. Best viewed in Netscape Navigator.
        </p>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-5 left-5 animate-bounce">
        <div className="font-pixel text-5xl transform -rotate-12">🌴</div>
      </div>
      
      <div className="absolute top-20 right-10 animate-pulse">
        <div className="font-pixel text-4xl transform rotate-12">🏝️</div>
      </div>
      
      <div className="absolute bottom-10 right-10 animate-rotate">
        <div className="font-pixel text-4xl">🌞</div>
      </div>
    </div>
  );
};

export default Index;
