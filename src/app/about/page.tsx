import { PageHeader } from "@/components/blocks";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PlaceholderMedia } from "@/components/ui";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "About",
  description: "Discover the story, values, and studio philosophy behind MUNX.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <PageHeader eyebrow="About" title="A luxury studio shaping the future of creative intelligence." description="MUNX blends strategic thinking, fine art sensibility, and modern technology into premium experiences." />
      <Section>
        <Container className="grid gap-6 lg:grid-cols-2">
          <PlaceholderMedia title="MUNX studio" src="/images/about/team.jpg" className="h-64 w-full" />
          <Card variant="elevated" className="space-y-4">
            <Badge variant="accent">Story</Badge>
            <h2 className="text-2xl font-semibold text-foreground">Our mission</h2>
            <p className="text-sm leading-8 text-muted-foreground">We help ambitious brands create elegant, cinematic, and modern experiences that feel timeless rather than trend-driven.</p>
          </Card>
          <Card variant="glass" className="space-y-4">
            <Badge variant="accent">Values</Badge>
            <h2 className="text-2xl font-semibold text-foreground">What guides us</h2>
            <p className="text-sm leading-8 text-muted-foreground">Clarity, craft, and adaptability shape every project from initial strategy through final delivery.</p>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
