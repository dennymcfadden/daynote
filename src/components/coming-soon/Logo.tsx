
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  const isMobile = useIsMobile();
  
  return (
    <img
      src="/lovable-uploads/3b45bd1f-3515-4a3c-b203-75a5e5792bfa.png"
      alt="Daynote Logo"
      className={`${isMobile ? 'w-[60%]' : 'w-56'} object-contain ${className}`}
    />
  );
};
