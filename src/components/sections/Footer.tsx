import React from "react";
import { Separator } from "@/components/ui/separator";
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="px-5 sm:px-8 md:px-12 lg:px-32 xl:px-48 2xl:px-64 py-6 bg-green-800">
      
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div className="mb-4 md:mb-0">
          © {currentYear} Daynote. Made by <a href="https://www.denny.nyc" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">Denny</a>.
        </div>
        <div className="flex gap-6">
          
          
          <a href="mailto:hello@daynote.app" className="hover:text-gray-800 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </footer>;
};