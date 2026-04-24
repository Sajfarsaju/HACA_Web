import Link from "next/link";

const ARROW_PATH =
    "M30.5555 16.6667L20.8333 26.3889L18.8541 24.4444L25.243 18.0555L15.2777 18.0555L15.2777 15.2778L25.243 15.2778L18.8888 8.88888L20.8333 6.94444L30.5555 16.6667ZM12.4999 18.0555L8.33327 18.0555L8.33327 15.2778L12.4999 15.2778L12.4999 18.0555ZM5.55549 18.0555L2.77771 18.0555L2.77771 15.2778L5.55549 15.2778L5.55549 18.0555Z";

type ExploreButton = {
    label: string;
    borderColor: string;
    href: string;
    mobileWidth: number;
};

const BUTTONS: ExploreButton[] = [
    { label: "Creative Design & Communication", borderColor: "#FF5C00", href: "/design-school/courses/creative-design", mobileWidth: 340 },
    { label: "AI Integrated Graphic Design", borderColor: "#8F56FF", href: "/design-school/courses/ai-graphic-design", mobileWidth: 297 },
    { label: "Branding & Identity Design Mastery", borderColor: "#FF5659", href: "/design-school/courses/program-3", mobileWidth: 348 },
    { label: "UI/UX Design + AI Program", borderColor: "#29C76B", href: "/design-school/courses/program-4", mobileWidth: 281 },
    { label: "AI Integrated Video Editing Mastery", borderColor: "#2592FF", href: "/design-school/courses/program-5", mobileWidth: 350 },
];

export function DesignPickOneToExploreSection() {
    const font = '"VC Nudge Trial Normal", sans-serif';
    const serif = '"IvyPresto Display", serif';

    return (
        <section
            className="w-full bg-black flex flex-col items-center justify-center
                       gap-[30px] lg:gap-[60px]
                       px-[20px] lg:px-[54px]
                       py-[40px] lg:py-[214px]"
        >
            <h2
                className="m-0 text-white text-center"
                style={{
                    fontFamily: font,
                    fontWeight: 500,
                    lineHeight: "100%",
                    fontSize: "clamp(36px,4.86vw,70px)",
                }}
            >
                Pick One to{" "}
                <span style={{ fontFamily: serif, fontWeight: 300, fontStyle: "italic" }}>
                    Explore
                </span>
            </h2>

            {/* Desktop: 2 rows (3 + 2). Mobile: stacked */}
            <div className="w-full max-w-[1332px] flex flex-col gap-[20px] lg:gap-[30px]">
                <div className="hidden lg:flex w-full gap-[15px]">
                    {BUTTONS.slice(0, 3).map((b) => (
                        <ExplorePill key={b.label} {...b} />
                    ))}
                </div>

                <div className="hidden lg:flex w-full gap-[15px] justify-center">
                    {BUTTONS.slice(3).map((b) => (
                        <ExplorePill key={b.label} {...b} />
                    ))}
                </div>

                <div className="lg:hidden w-full flex flex-col gap-[20px] items-center">
                    {BUTTONS.map((b) => (
                        <ExplorePill key={b.label} {...b} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ExplorePill({ label, borderColor, href, mobileWidth }: ExploreButton) {
    const font = '"VC Nudge Trial Normal", sans-serif';

    return (
        <Link
            href={href}
            className="group inline-flex items-center justify-between
                       w-[var(--mobileW)] max-w-full lg:w-auto
                       rounded-[30px] border-[2px]
                       px-[20px]
                       h-[56px] lg:h-[63px]
                       gap-[8px]
                       transition-colors"
            style={{
                borderColor,
                ["--mobileW" as never]: `${mobileWidth}px`,
                // Desktop: responsive width, cap like design
                maxWidth: "440px",
            }}
        >
            <span
                className="text-[#FCFCFC] whitespace-nowrap overflow-hidden text-ellipsis"
                style={{
                    fontFamily: font,
                    fontWeight: 500,
                    // Prevent slight font clipping on fixed-height pills
                    lineHeight: "110%",
                    fontSize: "clamp(16px,1.53vw,22px)",
                }}
            >
                {label}
            </span>

            <svg
                viewBox="0 0 34 34"
                fill="none"
                className="shrink-0"
                style={{ width: "clamp(18px,1.67vw,24px)", height: "clamp(18px,1.67vw,24px)" }}
                aria-hidden="true"
            >
                <path d={ARROW_PATH} fill="white" />
            </svg>
        </Link>
    );
}

