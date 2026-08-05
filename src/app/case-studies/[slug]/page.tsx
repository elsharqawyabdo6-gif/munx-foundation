import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/site-data";
import { PageHeader } from "@/components/blocks";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { PlaceholderMedia } from "@/components/ui";
import { Section } from "@/components/ui/section";
import { constructMetadata } from "@/lib/seo";

interface CaseStudyDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CaseStudyDetailPageProps) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) {
    return constructMetadata({ title: "Case study not found", path: `/case-studies/${slug}` });
  }

  return constructMetadata({ title: caseStudy.title, description: caseStudy.description, path: `/case-studies/${caseStudy.slug}` });
}

export default async function CaseStudyDetailPage({ params }: CaseStudyDetailPageProps) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) notFound();

  return (
    <main>
      <PageHeader eyebrow="Case study" title={caseStudy.title} description={caseStudy.description} />
      <PlaceholderMedia title={caseStudy.title} src={caseStudy.coverImage} className="h-72 w-full mb-8 rounded-2xl" />
      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card variant="elevated" className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Timeline</h2>
            <p className="text-sm leading-8 text-muted-foreground">A deliberate production path from brand definition to launch-ready content and performance optimization.</p>
          </Card>
          <Card variant="glass" className="space-y-4">
            <Badge variant="accent">Results</Badge>
            <p className="text-sm leading-7 text-muted-foreground">{caseStudy.metrics.join(" • ")}</p>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
