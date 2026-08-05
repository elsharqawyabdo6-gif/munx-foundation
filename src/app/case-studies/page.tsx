import { caseStudies } from "@/data/site-data";
import { PageHeader } from "@/components/blocks";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PlaceholderMedia } from "@/components/ui";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Case Studies",
  description: "Editorial case studies focusing on strategy, launch design, and premium content systems.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHeader eyebrow="Case studies" title="Editorial stories of how premium launches are shaped." description="An in-depth view into the strategy, production, and outcomes behind selected partnerships." />
      <Section>
        <Container className="space-y-6">
          {caseStudies.map((caseStudy) => (
            <Card key={caseStudy.slug} variant="elevated" className="space-y-4">
              <PlaceholderMedia title={caseStudy.title} src={caseStudy.coverImage} className="h-44 w-full" />
              <div className="flex items-center justify-between">
                <Badge variant="accent">{caseStudy.category}</Badge>
                <span className="text-sm text-muted-foreground">Case study</span>
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">{caseStudy.title}</h2>
                <p className="text-sm leading-8 text-muted-foreground">{caseStudy.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {caseStudy.metrics.map((metric) => (
                    <li key={metric}>• {metric}</li>
                  ))}
                </ul>
              </div>
              <Link href={`/case-studies/${caseStudy.slug}`} className="text-sm font-medium text-accent">
                Read case study →
              </Link>
            </Card>
          ))}
        </Container>
      </Section>
    </main>
  );
}
