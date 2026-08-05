import { testimonials } from "@/data/site-data";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

export function TestimonialsSection() {
  return (
    <Section className="border-b border-border/70">
      <Container className="space-y-10">
        <div className="space-y-3">
          <Badge variant="accent">Testimonials</Badge>
          <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">Selected voices from ambitious partners.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} variant="elevated" className="space-y-4">
              <p className="text-lg leading-8 text-foreground">“{testimonial.quote}”</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
