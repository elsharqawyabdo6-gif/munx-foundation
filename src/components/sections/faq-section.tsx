import { faqs } from "@/data/site-data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function FaqSection() {
  return (
    <Section className="border-b border-border/70">
      <Container className="space-y-10">
        <div className="space-y-3">
          <Badge variant="accent">FAQ</Badge>
          <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">Questions that often shape the first conversation.</h2>
        </div>
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <Card key={faq.question} variant="elevated" className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
              <p className="text-sm leading-7 text-muted-foreground">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
