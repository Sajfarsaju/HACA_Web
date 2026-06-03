"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const HIDE_ON_PATHS = ["/tech-school/tech-courses"] as const;

const INTRO_SECTION_ID = "tech-intro-section";
const FOOTER_ID = "tech-school-footer";

function isPastIntro(intro: HTMLElement | null): boolean {
    if (!intro) return false;
    return intro.getBoundingClientRect().bottom <= 0;
}

function isFooterReached(footer: HTMLElement | null): boolean {
    if (!footer) return false;
    const vh = window.innerHeight || 0;
    return footer.getBoundingClientRect().top < vh;
}

export function TechReserveBottomBar() {
    const pathname = usePathname();
    const hidden = HIDE_ON_PATHS.some(
        (path) => pathname === path || pathname?.startsWith(`${path}/`)
    );
    const [visible, setVisible] = useState(false);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        if (hidden) return;
        const update = () => {
            const intro = document.getElementById(INTRO_SECTION_ID);
            const footer = document.getElementById(FOOTER_ID);

            if (!footer) {
                setVisible(false);
                return;
            }

            if (isFooterReached(footer)) {
                setVisible(false);
                return;
            }

            if (intro) {
                setVisible(isPastIntro(intro));
                return;
            }

            setVisible(window.scrollY > 120);
        };

        const onScrollOrResize = () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScrollOrResize, { passive: true });
        window.addEventListener("resize", onScrollOrResize);
        return () => {
            window.removeEventListener("scroll", onScrollOrResize);
            window.removeEventListener("resize", onScrollOrResize);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [hidden]);

    if (hidden) return null;

    return (
        <div
            className={[
                "fixed inset-x-0 bottom-0 z-[60] flex justify-center px-4 pb-[max(16px,env(safe-area-inset-bottom))] pt-2 md:px-10 md:pb-6",
                "pointer-events-none transition-all duration-300 ease-out",
                visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
            ].join(" ")}
            aria-hidden={!visible}
        >
            <div
                className="pointer-events-auto flex w-full max-w-[1440px] min-h-[72px] flex-row items-center justify-between gap-2 rounded-[20px] border border-white/25 px-3 py-3 sm:gap-3 sm:px-4 sm:py-4 md:min-h-[84px] md:gap-6 md:px-10 md:py-5"
                style={{
                    background: "transparent",
                    backdropFilter: "blur(51.4px)",
                    WebkitBackdropFilter: "blur(51.4px)",
                }}
            >
                <p className="m-0 min-w-0 flex-1 pr-1 text-left font-outfit font-medium leading-[110%] text-white text-[clamp(12px,3.5vw,18px)] sm:text-[clamp(14px,3.8vw,20px)] md:w-[225px] md:max-w-[225px] md:flex-none md:pr-0 md:text-[24px]">
                    Reserve Your Place in
                    <br />
                    the Next Batch
                </p>

                <div
                    className="flex h-[clamp(34px,9.5vw,40px)] w-[min(201px,calc(50%-0.5rem))] min-w-[min(148px,42vw)] shrink-0 items-stretch rounded-[10px] p-[0.87px] sm:min-w-[160px] sm:w-[min(201px,46%)] md:h-[44px] md:w-[173px] md:min-w-[173px] md:rounded-[12px] md:p-px"
                    style={{
                        background: "linear-gradient(110.55deg, #CDA4FF 12.15%, #8831F2 115.98%)",
                    }}
                >
                    <div
                        className="flex h-full w-full items-center justify-center overflow-hidden rounded-[9.13px] md:rounded-[11px]"
                        style={{
                            background: "radial-gradient(71.34% 136.68% at 50% 14.3%, #927DF7 0%, #694AFF 100%)",
                        }}
                    >
                        <Link
                            href="/tech-school/tech-courses"
                            className="group relative flex h-full w-full min-h-0 items-center justify-center overflow-hidden px-2 py-2 sm:px-[14px] sm:py-3 md:px-5 md:py-[15px]"
                        >
                            <span className="pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center whitespace-nowrap text-center font-outfit font-semibold leading-[100%] text-white transition-transform duration-300 ease-out will-change-transform transform-gpu group-hover:-translate-y-full group-active:-translate-y-full group-focus-visible:-translate-y-full text-[clamp(11px,3.2vw,16px)] md:font-medium md:text-[20px]">
                                Select a course
                            </span>
                            <span className="pointer-events-none absolute inset-0 flex h-full w-full translate-y-full items-center justify-center whitespace-nowrap text-center font-outfit font-semibold leading-[100%] text-white transition-transform duration-300 ease-out will-change-transform transform-gpu group-hover:translate-y-0 group-active:translate-y-0 group-focus-visible:translate-y-0 text-[clamp(11px,3.2vw,16px)] md:font-medium md:text-[20px]">
                                Select a course
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
