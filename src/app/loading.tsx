import { LoadingState } from "@/lib/errors";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-24">
      <LoadingState label="Preparing the MUNX foundation" />
    </main>
  );
}
