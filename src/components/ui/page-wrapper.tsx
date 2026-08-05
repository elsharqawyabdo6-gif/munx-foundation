import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import CursorDot from "./cursor-dot";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <div className={cn("min-h-screen bg-background text-foreground", className)}>
      {children}
      <CursorDot />
    </div>
  );
}
