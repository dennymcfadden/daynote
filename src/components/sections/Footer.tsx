
import React from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="flex justify-center items-center bg-[#014532] py-6 px-12">
      <div className="text-[#9C908C] text-l font-normal leading-[150%] text-center">
        made by <a href="http://www.denny.nyc" className="underline">denny</a>
      </div>
    </footer>
  );
};
