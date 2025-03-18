
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface PixelCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  isNew?: boolean;
  onClick?: () => void;
}

const PixelCard = ({ 
  children, 
  className, 
  title, 
  isNew = false,
  onClick
}: PixelCardProps) => {
  return (
    <div 
      className={cn(
        "retro-card relative transition-transform hover:scale-[1.02] cursor-pointer", 
        className
      )}
      onClick={onClick}
    >
      {title && (
        <div className="windows-header mb-3 -mx-4 -mt-4">
          <span className="font-pixel">{title}</span>
          <div className="flex space-x-1">
            <span className="w-3 h-3 inline-block bg-retro-red border border-white"></span>
            <span className="w-3 h-3 inline-block bg-retro-yellow border border-white"></span>
            <span className="w-3 h-3 inline-block bg-retro-green border border-white"></span>
          </div>
        </div>
      )}
      {isNew && (
        <div className="new-badge animate-pulse">NEW!</div>
      )}
      {children}
      <div className="screen-effect rounded-sm"></div>
    </div>
  );
};

export default PixelCard;
