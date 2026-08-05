import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const stats = [
  { value: "120+", label: "Launches delivered" },
  { value: "94%", label: "Repeat clients" },
  { value: "18", label: "Countries served" },
  { value: "4.9/5", label: "Client satisfaction" },
];

export function StatsSection() {
  return (
    <Section className="border-b border-border/70 bg-surface/40">
      <Container className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-[1.5rem] border border-border/70 bg-background/70 p-8 text-center">
            <p className="font-serif text-4xl font-semibold text-foreground">{stat.value}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.24em] text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </Container>
    </Section>
  );
}
