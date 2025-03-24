import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
export const ValuePropositions: React.FC = () => {
  const isMobile = useIsMobile();
  return <section className="pt-12 pb-[50px] bg-green-500">
      
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="border-none bg-transparent shadow-none">
          <CardContent className="p-6">
            <div className="mb-4 flex justify-center">
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-transparent">
                <img alt="Microphone icon" className="w-24 h-24" src="/lovable-uploads/83b4e3cb-b8d0-42ac-8071-55fb98d08227.png" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 text-white">Voice Journal</h3>
            <p className="text-center text-green-100">Powered by GPT for the most accurate transcription. More thinking, less typing.</p>
          </CardContent>
        </Card>
        
        <Card className="border-none bg-transparent shadow-none">
          <CardContent className="p-6">
            <div className="mb-4 flex justify-center">
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-transparent">
                <img alt="Sunrise icon" className="w-24 h-24" src="/lovable-uploads/b2706c31-188e-4f73-830b-fb2790d663e8.png" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 text-white">Daily Threads</h3>
            <p className="text-center text-green-100">Entries organized by date, year-over-year, connecting rituals that matter most.</p>
          </CardContent>
        </Card>
        
        <Card className="border-none bg-transparent shadow-none">
          <CardContent className="p-6">
            <div className="mb-4 flex justify-center">
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-transparent">
                <img alt="Notification icon" className="w-24 h-24" src="/lovable-uploads/6201fa12-b808-44e5-a493-ea8409f73f2e.png" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 text-white">Sunday Reflection</h3>
            <p className="text-center font-normal text-green-100">A simple look back at your week, setting a course for the one ahead.</p>
          </CardContent>
        </Card>
      </div>
    </section>;
};