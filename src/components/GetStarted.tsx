import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, BookOpen, Mail } from "lucide-react";

export const GetStarted = () => {
  return (
    <section id="get-started" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get Started?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Join early adopters pushing the boundaries of explainable AI development with SeeIT.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all cursor-pointer group">
              <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Explore Demo</h3>
              <p className="text-sm text-muted-foreground">See SeeIT in action with interactive examples</p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all cursor-pointer group">
              <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Read Docs</h3>
              <p className="text-sm text-muted-foreground">Comprehensive developer documentation</p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all cursor-pointer group">
              <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Get Updates</h3>
              <p className="text-sm text-muted-foreground">Sign up for the latest news and releases</p>
            </Card>
          </div>

          <Button variant="hero" size="lg">
            Request Early Access
          </Button>
        </div>
      </div>
    </section>
  );
};
