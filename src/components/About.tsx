import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 bg-card/50 backdrop-blur border-border/50 shadow-2xl">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              What is SeeIT?
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                SeeIT empowers AI developers, data scientists, and machine learning engineers to peer deeply 
                into their large language models (LLMs). Using advanced visualization and mapper-driven 
                explanations inspired by cutting-edge research, SeeIT transforms complex LLM embedding spaces 
                into interactive maps that reveal hidden semantic clusters, relationships, and pathways.
              </p>
              <p>
                This tool enables developers to discover underlying patterns, verify model reasoning, and 
                confidently debug AI systems — ensuring transparency, robustness, and trust in the AI they build.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
