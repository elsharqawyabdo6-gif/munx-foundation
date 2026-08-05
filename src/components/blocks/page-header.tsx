import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <Section className="border-b border-border/70">
      <Container className="space-y-6">
        <Badge variant="accent">{eyebrow}</Badge>
        <div className="max-w-3xl space-y-4">
          <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">{title}</h1>
          <p className="text-lg leading-8 text-muted-foreground">{description}</p>
        </div>
      </Container>
    </Section>
  );
}
