
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface LogoProps {
  src: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ src, className = "" }) => {
  const isMobile = useIsMobile();
  
  return (
    <img
      src={src}
      alt="Daynote Logo"
      className={`${isMobile ? 'w-[60%]' : ''} object-contain ${className}`}
    />
  );
};
