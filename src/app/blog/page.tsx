import Link from "next/link";
import { posts } from "@/data/site-data";
import { PageHeader } from "@/components/blocks";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PlaceholderMedia } from "@/components/ui";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Blog",
  description: "Insights on AI branding, creative systems, and cinematic strategy.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main>
      <PageHeader eyebrow="Blog" title="Perspectives on AI, motion, and premium creative systems." description="Stories and ideas for modern brands building lasting cultural impact." />
      <Section>
        <Container className="grid gap-6 lg:grid-cols-2">
          {posts.map((post) => (
            <Card key={post.slug} variant="elevated" className="space-y-4">
              <PlaceholderMedia title={post.title} src={(post as any).coverImage} className="h-40 w-full" />
              <div className="flex items-center justify-between">
                <Badge variant="accent">{post.category}</Badge>
                <span className="text-sm text-muted-foreground">{post.readingTime}</span>
              </div>
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">{post.title}</h2>
                <p className="text-sm leading-7 text-muted-foreground">{post.excerpt}</p>
              </div>
              <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-accent">
                Read article →
              </Link>
            </Card>
          ))}
        </Container>
      </Section>
    </main>
  );
}
