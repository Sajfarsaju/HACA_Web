"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    display: "swap",
});

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

const seoAsset = (file: string) =>
    `/photos/schools/design/seo/${encodeURIComponent(file)}`;

const QUOTE_MARK_SRC = seoAsset("\u201d.svg");

const HEADING_ID = "video-editing-testimonials-heading";

type Testimonial = {
    id: string;
    quote: string;
    name: string;
    role: string;
    imageSrc?: string;
};

const TESTIMONIALS: Testimonial[] = [
    {
        id: "ajmal",
        quote:
            "HACA is more than just a design school it's a space where creativity finds direction and imagination meets discipline. The faculty here are not only talented professionals but also incredibly supportive mentors who encourage pushing boundaries and thinking beyond trends.",
        name: "CK Ajmal Ali",
        role: "UI/UX Designer",
    },
    {
        id: "anas",
        quote:
            "I'm truly grateful to HACA Design School for the learning, guidance, and support I received throughout my journey. The mentors were patient, encouraging, and always ready to help, which made the learning process comfortable and motivating.",
        name: "Muhammed Anas",
        role: "Video Editor",
        imageSrc: "/photos/schools/design/seo/muhammed-anas.webp",
    },
    {
        id: "fathima",
        quote:
            "HACA Design School changed the way I think about design. The structured curriculum and hands-on projects helped me build a strong portfolio in just a few months. The mentors are industry professionals who genuinely care about your growth.",
        name: "Fathima Nizar",
        role: "Graphic Designer",
        imageSrc: "/photos/schools/design/seo/student-2.webp",
    },
];

function ChevronLeftIcon() {
    return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ChevronRightIcon() {
    return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

const navBtnClass =
    "grid h-10 w-8 shrink-0 cursor-pointer place-items-center border-0 bg-transparent p-0 text-black transition-opacity hover:opacity-70 active:opacity-50 lg:h-11 lg:w-11";

function TestimonialAvatar({
    src,
    name,
    size,
}: {
    src?: string;
    name: string;
    size: number;
}) {
    const [err, setErr] = useState(false);
    const initials = name
        .split(" ")
        .map((w) => w[0] ?? "")
        .join("")
        .slice(0, 2)
        .toUpperCase();
    const showImage = Boolean(src) && !err;

    return (
        <div
            className="relative shrink-0 overflow-hidden rounded-full bg-[#E8E8E8]"
            style={{ width: size, height: size }}
        >
            {showImage ? (
                <Image
                    src={src!}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes={`${size}px`}
                    onError={() => setErr(true)}
                />
            ) : (
                <span
                    className="absolute inset-0 flex items-center justify-center text-[#999]"
                    style={{
                        fontFamily: vc,
                        fontWeight: 600,
                        fontSize: size * 0.32,
                        letterSpacing: "0.04em",
                    }}
                    aria-hidden
                >
                    {initials}
                </span>
            )}
        </div>
    );
}

export function VideoEditingCalicutTestimonialsSection() {
    const [active, setActive] = useState(0);
    const total = TESTIMONIALS.length;
    const t = TESTIMONIALS[active];

    const next = useCallback(() => {
        setActive((i) => (i + 1) % total);
    }, [total]);

    const prev = useCallback(() => {
        setActive((i) => (i - 1 + total) % total);
    }, [total]);

    return (
        <section
            className="w-full bg-white"
            aria-labelledby={HEADING_ID}
        >
            <div className="mx-auto box-border flex w-full max-w-[1440px] flex-col gap-6 px-4 py-10 sm:px-6 lg:gap-10 lg:px-[60px] lg:py-[60px]">
                <h2 id={HEADING_ID} className="m-0 w-full text-black">
                    {/* Mobile — 3 lines */}
                    <span
                        className="flex flex-col items-start lg:hidden"
                        style={{
                            fontFamily: vc,
                            fontWeight: 500,
                            fontStyle: "normal",
                            fontSize: "clamp(30px, 8.75vw, 35px)",
                            lineHeight: 1.1,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        <span className="whitespace-nowrap">Experiences Shared</span>
                        <span className="whitespace-nowrap">by HACA Design</span>
                        <span className="whitespace-nowrap">Students</span>
                    </span>

                    {/* Desktop — 2 lines */}
                    <span
                        className="hidden flex-col items-start lg:flex"
                        style={{
                            fontFamily: vc,
                            fontWeight: 500,
                            fontStyle: "normal",
                            fontSize: "45px",
                            lineHeight: 1.1,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        <span className="whitespace-nowrap">Experiences Shared by HACA</span>
                        <span className="whitespace-nowrap">Design Students</span>
                    </span>
                </h2>

                <div className="flex w-full min-w-0 flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
                    <figure className="m-0 flex min-w-0 flex-1 flex-col gap-4 lg:gap-5">
                        <Image
                            src={QUOTE_MARK_SRC}
                            alt=""
                            width={60}
                            height={48}
                            className="h-auto w-[48px] shrink-0 sm:w-[60px]"
                            aria-hidden
                        />
                        <blockquote className="m-0 w-full max-w-[836px] border-0 p-0">
                            <p
                                key={t.id}
                                className={[
                                    "m-0 w-full max-w-[836px] text-left text-[#000000]",
                                    dmSans.className,
                                ].join(" ")}
                                style={{
                                    fontWeight: 500,
                                    fontStyle: "normal",
                                    fontSize: "clamp(17px, 2.08vw, 30px)",
                                    lineHeight: "120%",
                                    letterSpacing: "-0.02em",
                                }}
                                aria-live="polite"
                            >
                                {t.quote}
                            </p>
                        </blockquote>
                    </figure>

                    <div className="flex w-full flex-col gap-8 lg:ml-auto lg:w-auto lg:min-w-[280px] lg:flex-row lg:items-center lg:gap-10">
                        <div className="flex min-w-0 items-center gap-4">
                            <TestimonialAvatar
                                src={t.imageSrc}
                                name={t.name}
                                size={64}
                            />
                            <cite className="not-italic">
                                <span
                                    className={["block text-black", dmSans.className].join(" ")}
                                    style={{
                                        fontWeight: 700,
                                        fontSize: "clamp(16px, 1.5vw, 20px)",
                                        lineHeight: "120%",
                                    }}
                                >
                                    {t.name}
                                </span>
                                <span
                                    className={["mt-1 block text-black", dmSans.className].join(
                                        " "
                                    )}
                                    style={{
                                        fontWeight: 400,
                                        fontSize: "clamp(14px, 1.2vw, 16px)",
                                        lineHeight: "120%",
                                    }}
                                >
                                    {t.role}
                                </span>
                            </cite>
                        </div>

                        {/* Mobile — centered prev / next chevrons */}
                        <nav
                            className="flex w-full items-center justify-center gap-1 pt-2 lg:hidden"
                            aria-label="Testimonial navigation"
                        >
                            <button
                                type="button"
                                onClick={prev}
                                aria-label="Previous testimonial"
                                className={navBtnClass}
                            >
                                <ChevronLeftIcon />
                            </button>
                            <button
                                type="button"
                                onClick={next}
                                aria-label="Next testimonial"
                                className={navBtnClass}
                            >
                                <ChevronRightIcon />
                            </button>
                        </nav>

                        {/* Desktop — next chevron beside profile */}
                        <button
                            type="button"
                            onClick={next}
                            aria-label="Next testimonial"
                            className={`${navBtnClass} hidden lg:grid`}
                        >
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
