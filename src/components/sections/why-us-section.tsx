import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const points = [
  { title: "Precision-led craft", copy: "Every deliverable is shaped with an editorial sensibility and technical discipline." },
  { title: "Velocity with taste", copy: "Fast-turn creative systems that never sacrifice premium quality." },
  { title: "Integrated strategy", copy: "We connect brand narrative, storytelling, and conversion in one ecosystem." },
];

export function WhyUsSection() {
  return (
    <Section className="border-b border-border/70">
      <Container className="space-y-10">
        <div className="space-y-3">
          <Badge variant="accent">Why MUNX</Badge>
          <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">A modern studio built for clarity, elegance, and momentum.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {points.map((point) => (
            <Card key={point.title} variant="elevated" className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">{point.title}</h3>
              <p className="text-sm leading-7 text-muted-foreground">{point.copy}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
