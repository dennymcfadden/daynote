import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  // This component is now redundant as we're using inline SVG in ComingSoon
  // Keeping it for backward compatibility
  return null;
};
