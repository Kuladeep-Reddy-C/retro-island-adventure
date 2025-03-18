
import { cn } from '@/lib/utils';

interface MarqueeTextProps {
  text: string;
  className?: string;
  speed?: 'slow' | 'normal' | 'fast';
  direction?: 'left' | 'right';
}

const MarqueeText = ({ 
  text, 
  className,
  speed = 'normal',
  direction = 'left'
}: MarqueeTextProps) => {
  const speedClass = {
    slow: 'animate-[marquee_20s_linear_infinite]',
    normal: 'animate-[marquee_15s_linear_infinite]',
    fast: 'animate-[marquee_10s_linear_infinite]',
  }[speed];
  
  const directionClass = direction === 'right' ? 'flex-row-reverse' : 'flex-row';
  
  return (
    <div className={cn("marquee-container", className)}>
      <div className={cn("flex gap-4", directionClass)}>
        <span className={speedClass}>
          {text} &nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span className={speedClass}>
          {text} &nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </div>
    </div>
  );
};

export default MarqueeText;
