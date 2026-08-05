import Link from "next/link";

interface BreadcrumbsProps {
  items: Array<{ label: string; href?: string }>;
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border/70 bg-surface/30">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-6 py-4 text-sm text-muted-foreground lg:px-8">
        <Link href="/" className="text-foreground">Home</Link>
        {items.map((item, index) => (
          <div key={item.label} className="flex items-center gap-2">
            <span>/</span>
            {item.href ? (
              <Link href={item.href} className="text-foreground">
                {item.label}
              </Link>
            ) : (
              <span className="text-muted-foreground">{item.label}</span>
            )}
            {index < items.length - 1 && <span />}
          </div>
        ))}
      </div>
    </nav>
  );
}
