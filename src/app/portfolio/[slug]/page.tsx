import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioItems } from "@/data/site-data";
import { PageHeader } from "@/components/blocks";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PlaceholderMedia } from "@/components/ui";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { constructMetadata } from "@/lib/seo";

interface PortfolioDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PortfolioDetailPageProps) {
  const { slug } = await params;
  const project = portfolioItems.find((item) => item.slug === slug);

  if (!project) {
    return constructMetadata({ title: "Project not found", path: `/portfolio/${slug}` });
  }

  return constructMetadata({ title: project.title, description: project.description, path: `/portfolio/${project.slug}` });
}

export default async function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const { slug } = await params;
  const project = portfolioItems.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main>
      <PageHeader eyebrow="Project detail" title={project.title} description={project.description} />
      <PlaceholderMedia title={project.title} src={project.coverImage} className="h-72 w-full mb-8 rounded-2xl" />
      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card variant="elevated" className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Story</h2>
            <p className="text-sm leading-8 text-muted-foreground">A premium experience combining strategy, environment, motion, and polished visual systems into one presentable experience.</p>
          </Card>
          <Card variant="glass" className="space-y-4">
            <Badge variant="accent">Results</Badge>
            <p className="text-sm leading-7 text-muted-foreground">{project.metrics.join(" • ")}</p>
            <Link href="/contact" className="text-sm font-medium text-accent">
              Discuss a similar project →
            </Link>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
