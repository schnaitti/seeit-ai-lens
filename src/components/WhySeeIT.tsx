import { Card } from "@/components/ui/card";
import { Zap, Target, TrendingUp, Quote } from "lucide-react";
import { ProblemSolution } from "@/components/ProblemSolution";

const benefits = [
  {
    icon: Zap,
    title: "Accelerate Development",
    description: "Speed up debugging cycles and reduce time spent on model troubleshooting"
  },
  {
    icon: Target,
    title: "Enhance Trust",
    description: "Build confidence in your AI systems with transparent model insights"
  },
  {
    icon: TrendingUp,
    title: "Drive Innovation",
    description: "Discover patterns and opportunities for model improvement you never knew existed"
  }
];

export const WhySeeIT = () => {
  return (
    <section id="why-seeit" className="pt-16 pb-8 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-5xl mx-auto text-center"> 
          {/* Quote Card */}
          <Card className="rounded-3xl p-8 md:p-12 bg-card/60 backdrop-blur border-border/60 shadow-2xl">
            <div className="space-y-6">
              <p className="text-2xl md:text-4xl font-semibold leading-snug">
                "Metrics show <span className="underline underline-offset-4 decoration-2">what</span> happened"
              </p>
              <p className="text-2xl md:text-4xl font-semibold leading-snug">
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">"Visualization shows <span className="underline underline-offset-4 decoration-2">why</span>"</span>
              </p>
            </div>
          </Card>
        </div>
    </section>
  );
};
