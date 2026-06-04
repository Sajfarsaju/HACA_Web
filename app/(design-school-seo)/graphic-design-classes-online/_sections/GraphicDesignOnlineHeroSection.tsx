import Link from "next/link";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

const ARROW_PATH =
    "M30.5555 16.6667L20.8333 26.3889L18.8541 24.4444L25.243 18.0555L15.2777 18.0555L15.2777 15.2778L25.243 15.2778L18.8888 8.88888L20.8333 6.94444L30.5555 16.6667ZM12.4999 18.0555L8.33327 18.0555L8.33327 15.2778L12.4999 15.2778L12.4999 18.0555ZM5.55549 18.0555L2.77771 18.0555L2.77771 15.2778L5.55549 15.2778L5.55549 18.0555Z";

export function GraphicDesignOnlineHeroSection() {
    return (
        <section className="w-full bg-white" aria-labelledby="gd-online-hero-heading">
            <div className="mx-auto box-border w-full max-w-[1440px] px-5 pt-8 pb-10 lg:px-[60px] lg:pt-[60px] lg:pb-[50px]">
                <div className="flex w-full flex-col items-center gap-5 text-center">
                    {/* Eyebrow */}
                    <p
                        className="m-0 text-[14px] font-medium uppercase tracking-[0.1em] text-[#FF5C00] lg:text-[16px]"
                        style={{ fontFamily: vc }}
                    >
                        Ready to Turn Creativity Into a Career?
                    </p>

                    {/* H1 */}
                    <h1
                        id="gd-online-hero-heading"
                        className="m-0 w-full max-w-[800px] text-black"
                        style={{
                            fontFamily: vc,
                            fontWeight: 600,
                            fontSize: "clamp(32px, 5.5vw, 62px)",
                            lineHeight: "108%",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Join One of the Best Online Graphic Design Courses at HACA
                    </h1>

                    {/* Duration badge */}
                    <span
                        className="inline-flex items-center gap-3 rounded-full border border-[#FF5C00]/30 bg-[#FF5C00]/06 px-5 py-2 text-[14px] text-[#FF5C00] lg:text-[15px]"
                        style={{ fontFamily: vc, fontWeight: 500, background: "rgba(255,92,0,0.06)" }}
                    >
                        <span>Duration: 3 Months</span>
                        <span className="h-1 w-1 rounded-full bg-[#FF5C00]" aria-hidden />
                        <span>Mode: Online</span>
                    </span>

                    {/* CTAs */}
                    <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                        <div className="flex items-center gap-2.5 group">
                            <Link
                                href="/enquire"
                                className="inline-flex h-[50px] items-center justify-center rounded-full border border-[#FF5C00] bg-transparent px-7 text-[15px] font-medium text-black transition-colors duration-300 group-hover:bg-[#FF5C00] group-hover:text-white no-underline lg:h-[56px] lg:px-8 lg:text-[17px]"
                                style={{ fontFamily: vc }}
                            >
                                Join Now
                            </Link>
                            <Link
                                href="/enquire"
                                className="relative flex h-[46px] w-[46px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FF5C00] lg:h-[52px] lg:w-[52px]"
                                aria-label="Join Now"
                            >
                                <span className="absolute inset-0 flex items-center justify-center -translate-x-[36px] transition-transform duration-300 group-hover:translate-x-0">
                                    <svg viewBox="0 0 34 34" fill="none" style={{ width: 22, height: 22 }}>
                                        <path d={ARROW_PATH} fill="white" />
                                    </svg>
                                </span>
                                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-[36px]">
                                    <svg viewBox="0 0 34 34" fill="none" style={{ width: 22, height: 22 }}>
                                        <path d={ARROW_PATH} fill="white" />
                                    </svg>
                                </span>
                            </Link>
                        </div>

                        <Link
                            href="/enquire"
                            className="inline-flex h-[50px] items-center justify-center rounded-full bg-black px-7 text-[15px] font-medium text-white no-underline transition-opacity hover:opacity-80 lg:h-[56px] lg:px-8 lg:text-[17px]"
                            style={{ fontFamily: vc }}
                        >
                            Get a Free Demo
                        </Link>
                    </div>

                    {/* Intro paragraphs */}
                    <div
                        className="mt-4 flex w-full max-w-[780px] flex-col gap-4 text-left text-[15px] leading-[160%] text-black/70 lg:text-[17px]"
                        style={{ fontFamily: vc, fontWeight: 400 }}
                    >
                        <p className="m-0">
                            Design School by HACA offers one of the best online graphic design courses for beginners, students, and aspiring creatives who want practical design experience without depending on traditional classroom learning.
                        </p>
                        <p className="m-0">
                            This online graphic designing course is designed to help learners understand design thinking, creative execution, AI-powered workflows, and portfolio development through a structured learning approach.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
