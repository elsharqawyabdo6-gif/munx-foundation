import { portfolioItems } from "@/data/site-data";
import { PageHeader } from "@/components/blocks";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PlaceholderMedia } from "@/components/ui";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Portfolio",
  description: "Selected cases showing premium creative systems, AI visuals, and cinematic digital experiences.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <main>
      <PageHeader eyebrow="Portfolio" title="Selected work across visuals, campaigns, and digital storytelling." description="A curated portfolio of premium launches, editorial experiences, and emerging brand systems." />
      <Section>
        <Container className="grid gap-6 lg:grid-cols-2">
          {portfolioItems.map((item) => (
            <Card key={item.slug} variant="elevated" className="space-y-4">
              <PlaceholderMedia title={item.title} src={item.coverImage} className="h-48 w-full" />
              <div className="flex items-center justify-between">
                <Badge variant="accent">{item.category}</Badge>
                <span className="text-sm text-muted-foreground">Featured</span>
              </div>
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">{item.title}</h2>
                <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {item.metrics.map((metric) => (
                    <li key={metric}>• {metric}</li>
                  ))}
                </ul>
              </div>
              <Link href={`/portfolio/${item.slug}`} className="text-sm font-medium text-accent">
                Explore project →
              </Link>
            </Card>
          ))}
        </Container>
      </Section>
    </main>
  );
}
