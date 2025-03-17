import React from "react";

interface LogoProps {
  src: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ src, className = "" }) => {
  return (
    <img
      src={src}
      alt="Daynote Logo"
      className={`object-contain ${className}`}
    />
  );
};
