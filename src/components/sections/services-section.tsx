import Link from "next/link";
import { services } from "@/data/site-data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function ServicesSection() {
  return (
    <Section className="border-b border-border/70">
      <Container className="space-y-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <Badge variant="accent">Featured services</Badge>
            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">Elegant services designed for modern ambition.</h2>
          </div>
          <Link href="/services" className="text-sm font-medium text-accent">View all services</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <Card key={service.slug} variant="elevated" className="group transition hover:-translate-y-1">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="muted">{service.category}</Badge>
                  <span className="text-sm text-muted-foreground">0{services.indexOf(service) + 1}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{service.description}</p>
                </div>
                <Link href={`/services/${service.slug}`} className="text-sm font-medium text-accent">
                  Explore service →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
