import { useState } from "react";
import { ScatterPlot3D } from "./visualizations/ScatterPlot3D";
import { NetworkMapper } from "./visualizations/NetworkMapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const InteractiveDemo = () => {
  const [activeTab, setActiveTab] = useState("scatter");

  return (
    <section className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Interactive Visualization
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore real-time 3D visualizations of LLM embeddings and neural pathways. 
            These interactive tools reveal the hidden structure of your AI models.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="scatter" className="text-base">
              Embedding Space
            </TabsTrigger>
            <TabsTrigger value="network" className="text-base">
              Network Mapper
            </TabsTrigger>
          </TabsList>

          <TabsContent value="scatter" className="mt-0">
            <div className="space-y-6">
              <ScatterPlot3D />
              <div className="bg-card/30 backdrop-blur rounded-lg p-6 border border-border/50">
                <h3 className="text-lg font-semibold mb-2">3D Embedding Visualization</h3>
                <p className="text-muted-foreground">
                  Navigate through high-dimensional embedding spaces with intuitive 3D scatter plots. 
                  Each point represents a token or concept, clustered by semantic similarity. 
                  Discover hidden patterns and relationships your model has learned.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="network" className="mt-0">
            <div className="space-y-6">
              <NetworkMapper />
              <div className="bg-card/30 backdrop-blur rounded-lg p-6 border border-border/50">
                <h3 className="text-lg font-semibold mb-2">Neural Pathway Mapping</h3>
                <p className="text-muted-foreground">
                  Trace information flow through your neural network with interactive topology maps. 
                  Watch how data propagates through layers, identify bottlenecks, and understand 
                  decision pathways with unprecedented clarity.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">200+</div>
            <div className="text-sm text-muted-foreground">Data Points Visualized</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-accent mb-2">Real-time</div>
            <div className="text-sm text-muted-foreground">Interactive Updates</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">3D</div>
            <div className="text-sm text-muted-foreground">Immersive Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};
