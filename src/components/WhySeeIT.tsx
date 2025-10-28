import { Card } from "@/components/ui/card";
import { Zap, Target, TrendingUp } from "lucide-react";

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
    <section id="why-seeit" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SeeIT?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            In the race to innovate AI rapidly, model transparency and trustworthiness are paramount. 
            SeeIT offers a radically new approach that complements traditional model monitoring tools by 
            focusing on semantic explanation and direct developer interaction with LLM internals.
          </p>
          <p className="text-xl font-semibold text-foreground">
            By making the invisible visible, SeeIT accelerates debugging cycles, empowers safer AI deployments, 
            and fuels confident innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="p-8 text-center bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
