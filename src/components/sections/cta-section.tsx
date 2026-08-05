import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function CtaSection() {
  return (
    <Section>
      <Container>
        <Card variant="glass" className="card-glass munx-glow munx-gradient-bg border-accent/20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm uppercase tracking-[0.35em] text-accent">Ready to build something unforgettable?</p>
              <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">Let’s create a premium experience that feels inevitable.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button>Start your project</Button>
              <Button variant="secondary">Book a call</Button>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
