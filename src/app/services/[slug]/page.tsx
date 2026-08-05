import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/site-data";
import { PageHeader } from "@/components/blocks";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { constructMetadata } from "@/lib/seo";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return constructMetadata({ title: "Service not found", path: `/services/${slug}` });
  }

  return constructMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  return (
    <main>
      <PageHeader eyebrow="Service detail" title={service.title} description={service.description} />
      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Card variant="elevated" className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
            <p className="text-sm leading-8 text-muted-foreground">A tailored service experience built to support premium launches, brand systems, and internationally-minded campaigns.</p>
            <div className="space-y-3">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="rounded-2xl border border-border/70 bg-background/70 p-4 text-sm text-foreground">
                  {benefit}
                </div>
              ))}
            </div>
          </Card>
          <Card variant="glass" className="space-y-4">
            <Badge variant="accent">What’s included</Badge>
            <h3 className="text-xl font-semibold text-foreground">Process, deliverables, and refinement.</h3>
            <p className="text-sm leading-7 text-muted-foreground">We combine strategic direction, editorial craft, and AI-powered production to create work that performs and endures.</p>
            <Link href="/contact" className="text-sm font-medium text-accent">
              Start your service request →
            </Link>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
