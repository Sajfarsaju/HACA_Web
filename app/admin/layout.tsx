import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | HACA",
  description: "Manage placement cards and media",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-transparent text-[#E8EAED]">
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_0%,rgba(76,117,255,0.06),transparent_50%)]"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
