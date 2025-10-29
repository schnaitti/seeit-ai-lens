import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhySeeIT } from "@/components/WhySeeIT";
import { About } from "@/components/About";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        <WhySeeIT />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;


