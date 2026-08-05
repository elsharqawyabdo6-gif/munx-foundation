import Link from "next/link";
import { portfolioItems } from "@/data/site-data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function PortfolioSection() {
  return (
    <Section className="border-b border-border/70">
      <Container className="space-y-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <Badge variant="accent">Featured portfolio</Badge>
            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">Work that feels cinematic, premium, and unmistakably modern.</h2>
          </div>
          <Link href="/portfolio" className="text-sm font-medium text-accent">View portfolio</Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {portfolioItems.map((item) => (
            <Card key={item.slug} variant="glass" className="space-y-4">
              <div className="rounded-[1.5rem] border border-border/70 bg-background/70 p-8">
                <div className="flex items-center justify-between">
                  <Badge variant="muted">{item.category}</Badge>
                  <span className="text-sm text-muted-foreground">Featured</span>
                </div>
                <div className="mt-6 space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {item.metrics.map((metric) => (
                      <li key={metric}>• {metric}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <Link href={`/portfolio/${item.slug}`} className="text-sm font-medium text-accent">
                Explore case →
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
