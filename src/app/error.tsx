"use client";

import { ErrorState } from "@/lib/errors";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-24">
      <ErrorState
        title="Foundation initialization failed"
        message={
          <span>
            The architecture layer encountered an issue. <button className="text-accent underline" onClick={() => reset()}>Try again</button>.
          </span>
        }
      />
    </main>
  );
}
