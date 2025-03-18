
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface RetroButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'yellow';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  withSound?: boolean;
}

const RetroButton = ({
  children,
  onClick,
  variant = 'primary',
  className,
  type = 'button',
  disabled = false,
  withSound = false,
}: RetroButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  
  const handleClick = () => {
    if (disabled) return;
    
    setIsPressed(true);
    
    if (withSound) {
      try {
        const audio = new Audio('/click.mp3');
        audio.volume = 0.3;
        audio.play().catch(e => console.log('Audio play failed:', e));
      } catch (error) {
        console.error('Error playing sound:', error);
      }
    }
    
    setTimeout(() => {
      setIsPressed(false);
      if (onClick) onClick();
    }, 100);
  };
  
  const variantClass = {
    'primary': 'retro-button-primary',
    'secondary': 'retro-button-secondary',
    'yellow': 'retro-button-yellow',
  }[variant];
  
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        variantClass,
        isPressed && 'translate-y-1',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {children}
    </button>
  );
};

export default RetroButton;
