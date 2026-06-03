import Link from "next/link";

const PLUS_GRID_SVG = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M13 8h2v12h-2zM8 13h12v2H8z" fill="white" fill-opacity="0.10"/>
</svg>`,
);

export function TechSeoCodingKeralaBottomCtaSection() {
    return (
        <section
            className="mx-auto w-full max-w-[1440px] bg-transparent"
            aria-label="Start your tech career"
        >
            <style>{`
                .coding-kerala-bottom-cta {
                    background: linear-gradient(
                        165deg,
                        #1a0b42 0%,
                        #12082e 35%,
                        #0a0518 65%,
                        #000010 100%
                    );
                }
            `}</style>

            <div className="box-border flex w-full flex-col items-center gap-5 px-4 pb-14 pt-5 lg:gap-[10px] lg:px-[60px] lg:pb-20 lg:pt-10">
                <div className="coding-kerala-bottom-cta relative box-border flex w-full max-w-[1320px] min-h-[280px] items-center justify-center overflow-hidden rounded-[22px] px-5 py-10 lg:min-h-[420px] lg:px-10 lg:py-16">
                    <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,${PLUS_GRID_SVG}")`,
                            backgroundSize: "28px 28px",
                        }}
                        aria-hidden
                    />
                    <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                            background:
                                "radial-gradient(ellipse 70% 65% at 50% 42%, rgba(105,73,255,0.5) 0%, rgba(105,73,255,0.16) 40%, rgba(17,6,45,0.35) 65%, transparent 80%)",
                        }}
                        aria-hidden
                    />

                    <div className="relative z-[1] flex w-full max-w-[700px] flex-col items-center gap-5 text-center">
                        <h2
                            className="m-0 w-full font-manrope text-[26px] font-semibold leading-[120%] tracking-[-0.02em] text-white lg:text-[44px]"
                        >
                            Start Your Journey Toward a Tech Career
                        </h2>

                        <p className="m-0 w-full font-manrope text-sm font-normal leading-[150%] text-[#C6C6C6B2] lg:max-w-[580px] lg:text-lg">
                            The future belongs to developers who can combine programming with artificial intelligence.
                            Learn from one of Kerala&apos;s growing AI coding institutes and build practical skills through
                            projects, mentorship and real implementation.
                        </p>

                        <Link
                            href="/contact"
                            className="mt-2 inline-flex h-12 shrink-0 items-center justify-center rounded-[10px] bg-[#6949FF] px-[18px] py-[14px] font-manrope text-lg font-semibold leading-[110%] text-white no-underline transition-opacity hover:opacity-90 lg:h-[52px] lg:rounded-2xl lg:px-5 lg:py-4"
                        >
                            Join Today
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
