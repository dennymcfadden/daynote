
import React from "react";
import { Separator } from "@/components/ui/separator";
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="px-5 sm:px-8 md:px-12 lg:px-32 xl:px-48 2xl:px-64 py-6 bg-green-800 text-center">
      
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white">
        <div className="mb-4 md:mb-0">
          © {currentYear} Daynote. Made by <a href="https://www.denny.nyc" target="_blank" rel="noopener noreferrer" className="text-white underline">Denny</a>.
        </div>
        <div className="flex gap-6">
          
          
          
        </div>
      </div>
    </footer>;
};
