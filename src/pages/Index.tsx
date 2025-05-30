
import { ComingSoon } from "@/components/coming-soon/ComingSoon";
import { ValuePropositions } from "@/components/sections/ValuePropositions";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-[rgba(243,239,236,1)] flex flex-col">
      <div className="flex flex-col flex-grow">
        <ComingSoon />
        <ValuePropositions />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
