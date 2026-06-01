import Link from "next/link";

import { TechSeoSectionBottomRule } from "./TechSeoSectionBottomRule";

const HEADING_ID = "python-calicut-cta-heading";

export function TechSeoPythonCalicutCtaSection() {
    return (
        <section
            className="mx-auto w-full max-w-[1440px] bg-transparent"
            aria-labelledby={HEADING_ID}
        >
            <style>{`
                .tech-seo-python-cta-card::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: 16px;
                    padding: 0.26px;
                    background: linear-gradient(
                        220.46deg,
                        rgba(143, 55, 255, 0) 0%,
                        #000010 94.09%
                    );
                    -webkit-mask:
                        linear-gradient(#fff 0 0) content-box,
                        linear-gradient(#fff 0 0);
                    mask:
                        linear-gradient(#fff 0 0) content-box,
                        linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    pointer-events: none;
                    z-index: 1;
                }
                @media (min-width: 1024px) {
                    .tech-seo-python-cta-card::before {
                        border-radius: 22px;
                        padding: 1px;
                    }
                }
            `}</style>

            <div className="box-border flex w-full min-h-[279px] flex-col items-center gap-5 px-4 py-5 lg:min-h-[644px] lg:gap-10 lg:p-[60px]">
                <div
                    className="tech-seo-python-cta-card relative box-border flex w-full max-w-[343px] min-h-[259px] items-center justify-center rounded-2xl bg-[#D9D9D91A] p-[7.82px] shadow-[0px_1.04px_1.04px_0px_#00000040] backdrop-blur-[3.13px] lg:max-w-[1323px] lg:min-h-[524px] lg:rounded-[22px] lg:p-[30px] lg:shadow-[0px_4px_4px_0px_#00000040] lg:backdrop-blur-[12px]"
                >
                    <div className="relative z-[2] flex w-full max-w-[313px] flex-col items-center gap-7 text-center lg:max-w-[1200px] lg:gap-5">
                        <h2
                            id={HEADING_ID}
                            className="m-0 w-full font-manrope text-2xl font-semibold leading-[120%] text-white lg:max-w-[1014px] lg:text-[44px]"
                        >
                            Don&apos;t just learn to code — build real-world applications, smart
                            solutions, and a future-ready career.
                        </h2>

                        <Link
                            href="/contact"
                            className="inline-flex h-12 shrink-0 items-center justify-center rounded-[10px] bg-[#6949FF] px-[18px] py-[14px] font-manrope text-lg font-semibold leading-[110%] text-white no-underline transition-opacity hover:opacity-90 lg:h-[52px] lg:rounded-2xl lg:px-5 lg:py-4"
                        >
                            Join Now
                        </Link>
                    </div>
                </div>

                <TechSeoSectionBottomRule inset />
            </div>
        </section>
    );
}
