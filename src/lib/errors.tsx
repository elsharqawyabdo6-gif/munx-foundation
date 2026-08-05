import type { ReactNode } from "react";

export function LoadingState({ label = "Loading" }: { label?: string }) {
  return (
    <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-border/70 bg-surface/70 p-8 text-sm text-muted-foreground">
      {label}
    </div>
  );
}

export function ErrorState({ title = "Something went wrong", message }: { title?: string; message?: ReactNode }) {
  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-destructive/30 bg-surface/70 p-8 text-center text-muted-foreground">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      {message ? <p className="mt-3 max-w-md text-sm">{message}</p> : null}
    </div>
  );
}

export function NotFoundState({ title = "Page not found", message = "The requested resource does not exist." }: { title?: string; message?: string }) {
  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-border/70 bg-surface/70 p-8 text-center text-muted-foreground">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <p className="mt-3 max-w-md text-sm">{message}</p>
    </div>
  );
}

export function EmptyState({ title = "No content yet", message = "This area is ready for future content." }: { title?: string; message?: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-border/70 bg-surface/50 p-8 text-center text-sm text-muted-foreground">
      <h3 className="font-semibold text-foreground">{title}</h3>
      <p className="mt-2">{message}</p>
    </div>
  );
}
