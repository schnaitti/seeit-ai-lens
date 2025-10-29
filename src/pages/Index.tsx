import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { ProblemSolution } from "@/components/ProblemSolution";
import { WhySeeIT } from "@/components/WhySeeIT";
import { GetStarted } from "@/components/GetStarted";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WhySeeIT />
      <ProblemSolution />
      <InteractiveDemo />
      {/* <About /> */}
      <Features />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Index;
