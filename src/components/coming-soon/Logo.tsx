
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  const isMobile = useIsMobile();
  
  return (
    <img
      src="/lovable-uploads/a26d07ac-11d9-4c48-9666-2165c737185c.png"
      alt="Daynote Logo"
      className={`${isMobile ? 'w-[60%]' : 'w-56'} object-contain ${className}`}
    />
  );
};
