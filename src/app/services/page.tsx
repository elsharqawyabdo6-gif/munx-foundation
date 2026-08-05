import Link from "next/link";
import { services } from "@/data/site-data";
import { PageHeader } from "@/components/blocks";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Services",
  description: "Luxury AI services for video, branding, motion, strategy, and digital storytelling.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main>
      <PageHeader eyebrow="Services" title="A premium service stack for modern launches." description="Every engagement is designed to feel refined, cinematic, and built for momentum." />
      <Section>
        <Container className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card key={service.slug} variant="elevated" className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="accent">{service.category}</Badge>
                <span className="text-sm text-muted-foreground">{service.badge}</span>
              </div>
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">{service.title}</h2>
                <p className="text-sm leading-7 text-muted-foreground">{service.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {service.benefits.map((benefit) => (
                    <li key={benefit}>• {benefit}</li>
                  ))}
                </ul>
              </div>
              <Link href={`/services/${service.slug}`} className="text-sm font-medium text-accent">
                View service →
              </Link>
            </Card>
          ))}
        </Container>
      </Section>
    </main>
  );
}
