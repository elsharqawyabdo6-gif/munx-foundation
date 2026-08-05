import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/30 min-h-[90vh] flex items-center">
      {/* Cinematic video background */}
      <video
        className="absolute inset-0 hidden w-full h-full object-cover opacity-40 sm:block"
        src="/videos/hero-background.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero/hero-poster.jpg"
      />

      {/* Layered purple atmospheric overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020005]/80 via-[#120224]/60 to-[#020005]/90 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(123,60,255,0.22),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(180,92,255,0.14),transparent_55%)] pointer-events-none" />

      {/* Grain texture */}
      <div className="munx-noise absolute inset-0 pointer-events-none" />

      {/* Content */}
      <Container className="relative z-10 grid gap-12 py-32 lg:grid-cols-[1.1fr_0.9fr] lg:py-40">
        <div className="space-y-8">
          <Badge variant="accent">Luxury AI Creative Agency</Badge>
          <div className="space-y-5">
            <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-[0.95] text-foreground sm:text-6xl lg:text-7xl glow-heading">
              Premium creative systems for a cinematic AI future.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              MUNX blends strategy, motion, and intelligence into elegant experiences designed to move culture, commerce, and attention.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button>Book a consultation</Button>
            <Button variant="secondary">Explore services</Button>
          </div>
        </div>

        {/* Glassmorphism card */}
        <div className="rounded-[2rem] border border-border/50 p-8 shadow-lg munx-glass munx-glow">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-border/50 pb-4">
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Featured Focus</p>
              <Badge variant="muted">AI Video</Badge>
            </div>
            <div className="space-y-3">
              <p className="text-3xl font-semibold text-foreground">Launch-ready creative systems</p>
              <p className="text-muted-foreground">From cinematic campaigns to premium product storytelling, each experience is sculpted for excellence.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {['Brand systems', 'Motion design', 'Social content', 'Web experiences'].map((item) => (
                <div key={item} className="rounded-2xl border border-border/50 bg-surface/60 p-4 text-sm text-foreground backdrop-blur-sm hover:border-[rgba(180,92,255,0.4)] transition-colors duration-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

