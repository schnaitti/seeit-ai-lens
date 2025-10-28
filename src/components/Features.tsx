import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Shield, Microscope, Map } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Visualize Embeddings",
    description: "Illuminate the high-dimensional world of LLM embeddings with intuitive mapper graphs, clusters, and trajectories. Navigate your model's semantic space visually rather than through opaque numbers or black-box outputs."
  },
  {
    icon: Shield,
    title: "Explain and Verify",
    description: "Uncover the \"why\" behind your model's answers with explanation agents that analyze node connections and semantic coherence. Apply perturbation-based verification to test robustness and prevent hallucinations or blind-spots."
  },
  {
    icon: Microscope,
    title: "Debugging Microscope",
    description: "SeeIT acts as a microscope in your development process, letting you zoom into specific token clusters or decision pathways to pinpoint and resolve unexpected model behaviors."
  },
  {
    icon: Map,
    title: "Interactive Maps & Plots",
    description: "Engage with dynamic, interactive plots that bring your model's inner workings to life. Slice, dice, and zoom through layers of complexity while maintaining clarity and control."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI Transparency
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to understand, debug, and improve your AI models
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-2xl hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
