import Link from "next/link";

const HEADING_ID = "coding-kerala-enroll-cta-heading";

const PLUS_GRID_SVG = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M13 8h2v12h-2zM8 13h12v2H8z" fill="white" fill-opacity="0.14"/>
</svg>`,
);

export function TechSeoCodingKeralaEnrollCtaSection() {
    return (
        <section
            className="mx-auto w-full max-w-[1440px] bg-transparent"
            aria-labelledby={HEADING_ID}
        >
            <style>{`
                .tech-seo-coding-kerala-enroll-cta {
                    background: linear-gradient(
                        165deg,
                        #1a0b42 0%,
                        #12082e 35%,
                        #0a0518 65%,
                        #000010 100%
                    );
                }
            `}</style>

            <div className="box-border flex w-full flex-col items-center gap-5 px-4 pt-5 pb-10 lg:gap-[10px] lg:px-[60px] lg:pt-10 lg:pb-20">
                <div className="tech-seo-coding-kerala-enroll-cta relative box-border flex w-full max-w-[1320px] min-h-[259px] items-center justify-center overflow-hidden rounded-[22px] px-5 py-10 lg:min-h-[400px] lg:px-10 lg:py-16">
                    <div
                        className="pointer-events-none absolute inset-0 opacity-100"
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
                                "radial-gradient(ellipse 75% 70% at 50% 42%, rgba(105, 73, 255, 0.55) 0%, rgba(105, 73, 255, 0.18) 38%, rgba(17, 6, 45, 0.4) 62%, transparent 78%)",
                        }}
                        aria-hidden
                    />

                    <div className="relative z-[1] flex w-full max-w-[313px] flex-col items-center gap-5 text-center lg:max-w-[900px] lg:gap-[10px]">
                        <h2
                            id={HEADING_ID}
                            className="m-0 w-full font-manrope text-[26px] font-semibold leading-[120%] tracking-[-0.02em] text-white lg:text-[44px]"
                        >
                            The Future is in AI
                        </h2>

                        <p className="m-0 w-full font-manrope text-sm font-normal leading-[140%] text-[#C6C6C6B2] lg:text-lg lg:leading-[33.6px]">
                            Join the top software training institute in Kerala and start your journey
                            toward a{" "}
                            <span className="font-semibold text-white">
                                high-paying tech career.
                            </span>{" "}
                            Don&apos;t wait.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-flex h-12 shrink-0 items-center justify-center rounded-[10px] bg-[#6949FF] px-[18px] py-[14px] font-manrope text-lg font-semibold leading-[110%] text-white no-underline transition-opacity hover:opacity-90 lg:h-[52px] lg:rounded-2xl lg:px-5 lg:py-4"
                        >
                            Enroll Today
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
