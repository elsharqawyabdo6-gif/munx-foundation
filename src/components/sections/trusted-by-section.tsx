import { Container } from "@/components/ui/container";

const brands = ["Aether", "Northstar", "Lumen", "Crest", "Aurelia", "NOVA"];

export function TrustedBySection() {
  return (
    <section className="border-b border-border/70 bg-surface/40">
      <Container className="flex flex-col gap-6 py-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Trusted by ambitious names</p>
        <div className="flex flex-wrap justify-center gap-3 lg:justify-end">
          {brands.map((brand) => (
            <div key={brand} className="rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm font-medium text-muted-foreground">
              {brand}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
