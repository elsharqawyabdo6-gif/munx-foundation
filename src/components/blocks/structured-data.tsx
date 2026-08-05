import { generateJsonLd } from "@/lib/seo";

interface StructuredDataProps {
  schema: Record<string, unknown>;
}

export function StructuredData({ schema }: StructuredDataProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={generateJsonLd(schema)} />;
}
