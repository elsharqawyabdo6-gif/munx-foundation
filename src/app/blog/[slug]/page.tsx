import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/site-data";
import { PageHeader } from "@/components/blocks";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { PlaceholderMedia } from "@/components/ui";
import { Section } from "@/components/ui/section";
import { constructMetadata } from "@/lib/seo";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return constructMetadata({ title: "Post not found", path: `/blog/${slug}` });
  }

  return constructMetadata({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}` });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) notFound();

  return (
    <main>
      <PageHeader eyebrow="Article" title={post.title} description={post.excerpt} />
      <PlaceholderMedia title={post.title} src={(post as any).coverImage} className="h-64 w-full mb-8 rounded-2xl" />
      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card variant="elevated" className="space-y-4">
            <Badge variant="accent">{post.category}</Badge>
            <h2 className="text-2xl font-semibold text-foreground">Article</h2>
            <p className="text-sm leading-8 text-muted-foreground">A premium editorial article covering the emerging intersection of AI, creativity, and brand systems.</p>
          </Card>
          <Card variant="glass" className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Reading Time</h3>
            <p className="text-sm leading-7 text-muted-foreground">{post.readingTime}</p>
            <Link href="/contact" className="text-sm font-medium text-accent">
              Discuss a custom content system →
            </Link>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
