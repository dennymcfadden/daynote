import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
export const ValuePropositions: React.FC = () => {
  const isMobile = useIsMobile();
  return <section className="pt-0 pb-[50px] bg-green-500">
      
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="border-none bg-transparent shadow-none">
          <CardContent className="p-6">
            <div className="mb-4 flex justify-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F9F5F2]">
                <img src="/lovable-uploads/445428ae-d077-4000-b7de-e88d888f2fdb.png" alt="Microphone icon" className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Voice Journal</h3>
            <p className="text-gray-600 text-center">Powered by GPT for the most accurate transcription. More thinking, less typing.</p>
          </CardContent>
        </Card>
        
        <Card className="border-none bg-transparent shadow-none">
          <CardContent className="p-6">
            <div className="mb-4 flex justify-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F9F5F2]">
                <img src="/lovable-uploads/1aedc711-d076-4723-846c-f9933d4f7679.png" alt="Sunrise icon" className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Daily Threads</h3>
            <p className="text-gray-600 text-center">Entries organized by date, year-over-year, connecting rituals that matter most.</p>
          </CardContent>
        </Card>
        
        <Card className="border-none bg-transparent shadow-none">
          <CardContent className="p-6">
            <div className="mb-4 flex justify-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F9F5F2]">
                <img src="/lovable-uploads/293d3e35-6d50-4cd3-a514-27f5f8e1d1a0.png" alt="Notification icon" className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Sunday Look-Back</h3>
            <p className="text-gray-600 text-center">A simple reflection on the week that passed, setting a course for the week to come.</p>
          </CardContent>
        </Card>
      </div>
    </section>;
};