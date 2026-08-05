import { PageHeader } from "@/components/blocks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import { PlaceholderMedia } from "@/components/ui";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Contact",
  description: "Get in touch with MUNX for premium AI creative production and brand experiences.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <PageHeader eyebrow="Contact" title="Let’s shape something extraordinary together." description="Share your goals, timeline, and ambition and we’ll respond with a tailored creative direction." />
      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <PlaceholderMedia title="Contact illustration" src="/images/contact/illustration.jpg" className="h-64 w-full" />
          <Card variant="elevated" className="space-y-5">
            <div className="space-y-2">
              <Badge variant="accent">Start a conversation</Badge>
              <h2 className="text-2xl font-semibold text-foreground">Project inquiry</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input placeholder="Name" />
              <Input placeholder="Email" type="email" />
            </div>
            <Input placeholder="Project type" />
            <Input placeholder="Budget range" />
            <textarea className="min-h-32 w-full rounded-[1.25rem] border border-border bg-surface px-4 py-4 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/25" placeholder="Tell us about your vision" />
            <Button className="w-full">Send inquiry</Button>
          </Card>
          <Card variant="glass" className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Reach us</h3>
            <p className="text-sm leading-8 text-muted-foreground">hello@munx.studio • +1 800 555 0182 • London • New York</p>
            <div className="rounded-2xl border border-border/70 bg-background/70 p-4 text-sm text-muted-foreground">
              WhatsApp and email support available for rapid collaboration and launch planning.
            </div>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
