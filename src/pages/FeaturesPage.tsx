import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Features } from "@/components/Features";
import { InteractiveDemo } from "@/components/InteractiveDemo";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        <InteractiveDemo />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;


