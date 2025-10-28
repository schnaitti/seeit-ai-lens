import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { WhySeeIT } from "@/components/WhySeeIT";
import { GetStarted } from "@/components/GetStarted";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <InteractiveDemo />
      <About />
      <Features />
      <WhySeeIT />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Index;
