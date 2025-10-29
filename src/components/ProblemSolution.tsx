import { Card } from "@/components/ui/card";
import { AlertCircle, Lightbulb } from "lucide-react";

export const ProblemSolution = () => {
  return (
    <section id="problem-solution" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Why SeeIT?</h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Problem */}
          <Card className="relative p-10 bg-card/60 backdrop-blur border-border/60 shadow-2xl">
            <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-destructive/10 to-transparent pointer-events-none" />
            <div className="relative flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive">
                <AlertCircle className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">The Problem</h3>
                <p className="text-lg md:text-xl leading-8 text-muted-foreground">
                  Tracking metrics isn't enough — modern AI models are black boxes. You see accuracy go down, but have no idea <span className="font-semibold text-foreground">why</span> it's happening.
                </p>
              </div>
            </div>
          </Card>

          {/* Solution */}
          <Card className="relative p-10 bg-card/60 backdrop-blur border-border/60 shadow-2xl">
            <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-primary/10 via-accent/10 to-transparent pointer-events-none" />
            <div className="relative flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Lightbulb className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">The Solution</h3>
                <p className="text-lg md:text-xl leading-8 text-muted-foreground">
                  SeeIT visualizes <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">embedding spaces</span>, <span className="bg-gradient-to-r from-fuchsia-400 to-violet-300 bg-clip-text text-transparent">linguistic patterns</span>, and model reasoning paths, helping you uncover what your model actually encodes and how it behaves.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};


