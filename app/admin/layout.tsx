import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | HACA",
  description: "Manage placement cards and media",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-transparent text-[#E8EAED]">
      {/* Very light tint so panels still read on the global gradient — no solid black */}
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_0%,rgba(76,117,255,0.06),transparent_50%)]"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="sticky top-0 z-20 border-b border-white/10 bg-white/[0.07] backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#4C75FF] to-[#1A4FFF] text-sm font-bold tracking-tight text-white shadow-md shadow-blue-500/15 ring-1 ring-white/20">
                H
              </div>
              <div className="leading-tight">
                <p className="font-[family-name:var(--font-manrope)] text-[15px] font-semibold tracking-tight text-white">
                  HACA Admin
                </p>
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#A7ADBE]">
                  Placement studio
                </p>
              </div>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <span className="rounded-full border border-white/15 bg-white/[0.08] px-3 py-1 text-[11px] font-medium text-[#A7ADBE] backdrop-blur-sm">
                Secure session
              </span>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
