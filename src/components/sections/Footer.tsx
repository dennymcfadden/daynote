
import React from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="flex justify-center items-center bg-[#014532] py-6 px-12">
      <div className="text-white text-xl font-normal leading-[150%] text-center">
        @{currentYear} • <a href="mailto:help@daynote.app" className="underline">help@daynote.app</a> • Made by <a href="#" className="underline">Denny</a>
      </div>
    </footer>
  );
};
