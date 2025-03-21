
import React from "react";
import { Separator } from "@/components/ui/separator";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="px-5 sm:px-8 md:px-12 lg:px-32 xl:px-48 2xl:px-64 py-6">
      <Separator className="mb-6" />
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div className="mb-4 md:mb-0">
          © {currentYear} Daynote. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-800 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-800 transition-colors">
            Terms of Service
          </a>
          <a href="mailto:hello@daynote.app" className="hover:text-gray-800 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};
