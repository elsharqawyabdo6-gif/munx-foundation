import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PlaceholderMediaProps {
  title?: string;
  src?: string; // local public src (e.g. /assets/hero-poster.svg)
  className?: string;
}

export function PlaceholderMedia({ title, src, className }: PlaceholderMediaProps) {
  const baseClass = cn(
    "relative overflow-hidden rounded-lg bg-gradient-to-br from-[rgba(123,60,255,0.14)] via-[rgba(180,92,255,0.06)] to-transparent",
    className,
  );

  const imageSrc = src ?? "/images/hero/hero-poster.jpg";

  return (
    <figure role="img" aria-label={title ?? "MUNX project media"} className={baseClass}>
      <div className="absolute inset-0 opacity-95">
        <Image src={imageSrc} alt={title ?? "MUNX media"} fill sizes="(min-width:1024px) 1200px, 800px" className="object-cover" priority={false} />
      </div>

      <div className="absolute inset-0 munx-noise pointer-events-none" />

      <figcaption className="relative z-10 p-6">
        <div className="flex items-end justify-between">
          <div>
            {title ? <h3 className="text-lg font-semibold text-foreground">{title}</h3> : <div className="h-5 w-40 rounded bg-white/10" />}
            <p className="mt-2 text-sm text-muted-foreground">Cinematic visual — MUNX</p>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

export default PlaceholderMedia;
