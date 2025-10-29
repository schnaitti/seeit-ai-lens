import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    features: [
      "Personal projects",
      "Up to 2 datasets",
      "Basic 3D embedding viewer",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    features: [
      "Unlimited datasets",
      "Linguistic pattern explorer",
      "Export & share views",
      "Priority support",
    ],
    cta: "Start Pro",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$79",
    period: "/mo",
    features: [
      "Up to 10 seats",
      "Projects & org workspaces",
      "SSO (Google, GitHub)",
      "Role-based access",
    ],
    cta: "Contact Sales",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div aria-hidden className="h-[80px]" />

      <section className="pt-8 pb-16 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-5xl font-bold mb-4">Pricing</h1>
            <p className="text-lg text-muted-foreground">
              Simple plans that scale with your team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                className={
                  "p-8 bg-card/60 backdrop-blur border-border/60 shadow-2xl " +
                  (tier.highlighted ? "ring-1 ring-accent/40" : "")
                }
              >
                <div className="flex items-baseline justify-between mb-6">
                  <h2 className="text-2xl font-bold">{tier.name}</h2>
                  <div className="text-3xl font-bold">
                    {tier.price}
                    <span className="text-base font-medium text-muted-foreground ml-1">
                      {tier.period}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6 text-muted-foreground">
                  {tier.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
                <Button variant={tier.highlighted ? "accent" : "default"} className="w-full">
                  {tier.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;


