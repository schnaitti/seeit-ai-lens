import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            SeeIT
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("features")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("why-seeit")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Why SeeIT
            </button>
            <Button 
              onClick={() => scrollToSection("get-started")}
              variant="accent"
              size="sm"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
