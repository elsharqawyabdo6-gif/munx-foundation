import { cn } from "@/lib/utils";
import type { ReactNode, ElementType } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function Section({ children, className, as: Component = "section" }: SectionProps) {
  return (
    <Component className={cn("px-6 py-20 lg:px-8 lg:py-28", className)}>
      {children}
    </Component>
  );
}
