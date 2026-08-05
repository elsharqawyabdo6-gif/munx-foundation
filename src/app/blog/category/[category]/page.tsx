import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/site-data";
import { PageHeader } from "@/components/blocks";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { constructMetadata } from "@/lib/seo";

interface BlogCategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: BlogCategoryPageProps) {
  const { category } = await params;
  return constructMetadata({ title: `Category: ${category}`, description: `Articles in the ${category} category.`, path: `/blog/category/${category}` });
}

export default async function BlogCategoryPage({ params }: BlogCategoryPageProps) {
  const { category } = await params;
  const filteredPosts = posts.filter((post) => post.category.toLowerCase() === category.toLowerCase());

  if (filteredPosts.length === 0) notFound();

  return (
    <main>
      <PageHeader eyebrow="Category" title={category} description={`Articles focused on ${category}.`} />
      <Section>
        <Container className="space-y-6">
          {filteredPosts.map((post) => (
            <Card key={post.slug} variant="elevated" className="space-y-3">
              <Badge variant="accent">{post.category}</Badge>
              <h2 className="text-xl font-semibold text-foreground">{post.title}</h2>
              <p className="text-sm leading-7 text-muted-foreground">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-accent">Read article →</Link>
            </Card>
          ))}
        </Container>
      </Section>
    </main>
  );
}
