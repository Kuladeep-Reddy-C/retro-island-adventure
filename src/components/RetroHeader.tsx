
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

interface RetroHeaderProps {
  title: string;
  showHomeButton?: boolean;
  showBackButton?: boolean;
}

const RetroHeader = ({
  title,
  showHomeButton = true,
  showBackButton = true
}: RetroHeaderProps) => {
  const navigate = useNavigate();
  
  return (
    <header className="w-full windows-card mb-6 p-2">
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          {showBackButton && (
            <button 
              onClick={() => navigate(-1)}
              className="bevel-effect p-1 hover:bg-retro-teal/20 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          )}
          {showHomeButton && (
            <button 
              onClick={() => navigate('/home')}
              className="bevel-effect p-1 hover:bg-retro-teal/20 transition-colors"
            >
              <Home className="h-5 w-5" />
            </button>
          )}
        </div>
        
        <h1 className="font-pixel text-2xl font-bold tracking-wider text-center mx-auto">
          <span className="text-retro-teal">I</span>
          <span className="text-retro-pink">s</span>
          <span className="text-retro-yellow">l</span>
          <span className="text-retro-purple">a</span>
          <span className="text-retro-orange">n</span>
          <span className="text-retro-blue">d</span>
          <span> </span>
          <span className="text-retro-green">{title}</span>
        </h1>
        
        <div className="w-14">
          {/* Spacer to balance header */}
        </div>
      </div>
    </header>
  );
};

export default RetroHeader;
