
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

export const ValuePropositions: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className={`px-5 sm:px-8 md:px-12 lg:px-32 xl:px-48 2xl:px-64 py-16 ${isMobile ? 'py-12' : 'py-20'}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Daynote?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover why Daynote is the most intuitive journaling app you'll ever use
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="border-none bg-transparent shadow-none">
          <CardContent className="p-6">
            <div className="mb-4 flex justify-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F9F5F2]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                  <path d="M12 8a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0v-5a3 3 0 0 0-3-3Z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" x2="12" y1="19" y2="22"></line>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Voice Journal</h3>
            <p className="text-gray-600 text-center">
              Simply talk, and we'll record and transcribe your thoughts. No typing needed.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-none bg-transparent shadow-none">
          <CardContent className="p-6">
            <div className="mb-4 flex justify-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F9F5F2]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M12 18v-6"></path>
                  <path d="M8 15h8"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Daily Habit</h3>
            <p className="text-gray-600 text-center">
              One entry per day makes journaling a simple, sustainable habit that sticks.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-none bg-transparent shadow-none">
          <CardContent className="p-6">
            <div className="mb-4 flex justify-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F9F5F2]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Smart Reminders</h3>
            <p className="text-gray-600 text-center">
              Gentle nudges help you maintain your journaling streak without feeling intrusive.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
