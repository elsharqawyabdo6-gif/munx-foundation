import { NotFoundState } from "@/lib/errors";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-24">
      <NotFoundState />
    </main>
  );
}
