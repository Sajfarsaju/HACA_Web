import Image from "next/image";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

const SIDE_TEXT_COLOR = "#00000099";
const ACCENT = "#29C76B";

const seoIcon = (file: string) =>
    `/photos/schools/design/seo/${encodeURIComponent(file)}`;

type Row = {
    title: string;
    description: string;
    iconSrc: string;
};

const ROWS: Row[] = [
    {
        title: "Creative Learning Platform",
        description: "Access projects, assignments, and resources through a platform designed for visual learners.",
        iconSrc: seoIcon("Vector.svg"),
    },
    {
        title: "Learn from Designers",
        description: "Get mentorship from professionals who understand real creative challenges.",
        iconSrc: seoIcon("Vector (1).svg"),
    },
    {
        title: "Portfolio-Driven Learning",
        description: "Build practical work throughout the course rather than waiting until the end.",
        iconSrc: seoIcon("Vector (2).svg"),
    },
    {
        title: "Learn Through Practice",
        description: "Work on assignments and exercises that mirror actual design tasks.",
        iconSrc: seoIcon("Abstract 232.svg"),
    },
    {
        title: "Learning Beyond Software",
        description: "Develop creative thinking, communication skills, and design reasoning.",
        iconSrc: seoIcon("Vector (3).svg"),
    },
    {
        title: "Placement & Career Guidance",
        description: "Receive support with resumes, portfolios, interviews, and opportunities.",
        iconSrc: seoIcon("Vector (4).svg"),
    },
];

function RowDivider() {
    return (
        <div
            className="w-full border-t border-solid"
            style={{ borderWidth: "1px", borderColor: ACCENT }}
            aria-hidden
        />
    );
}

function WhyRow({ row }: { row: Row }) {
    return (
        <div className="flex w-full flex-col gap-[18px] lg:gap-[24px]">
            <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
                <div className="flex min-w-0 items-center gap-[18px] lg:shrink-0 lg:gap-[50px]">
                    <div className="relative h-10 w-10 shrink-0 lg:h-[50px] lg:w-[50px]" aria-hidden>
                        <Image
                            src={row.iconSrc}
                            alt=""
                            aria-hidden="true"
                            width={50}
                            height={50}
                            className="h-full w-full object-contain"
                            style={{ filter: "brightness(0) saturate(100%) invert(59%) sepia(85%) saturate(459%) hue-rotate(95deg) brightness(95%) contrast(101%)" }}
                        />
                    </div>

                    <h3
                        className="m-0 min-w-0 text-left text-black"
                        style={{
                            fontFamily: vc,
                            fontWeight: 500,
                            fontSize: "clamp(20px, 2.1vw, 30px)",
                            lineHeight: "115%",
                            letterSpacing: "0",
                        }}
                    >
                        {row.title}
                    </h3>
                </div>

                <p
                    className={[
                        dmSans.className,
                        "m-0 w-full min-w-0 text-left lg:ml-auto lg:w-[485px] lg:max-w-[485px] lg:shrink-0",
                    ].join(" ")}
                    style={{
                        fontWeight: 400,
                        fontStyle: "normal",
                        fontSize: "clamp(15px, 1.25vw, 18px)",
                        lineHeight: "28px",
                        letterSpacing: "0",
                        color: SIDE_TEXT_COLOR,
                    }}
                >
                    {row.description}
                </p>
            </div>

            <RowDivider />
        </div>
    );
}

export function GraphicDesignOnlineWhyDesignSchoolSection() {
    return (
        <section className="w-full bg-white" aria-labelledby="gd-online-why-ds-heading">
            <div className="mx-auto box-border w-full max-w-[1440px] px-4 pt-4 pb-10 sm:px-6 sm:pt-6 lg:px-[60px] lg:pt-6 lg:pb-[60px]">
                <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-10 lg:gap-[80px]">

                    <h2
                        id="gd-online-why-ds-heading"
                        className="m-0 w-full max-w-[700px] text-left text-black"
                        style={{
                            fontFamily: vc,
                            fontWeight: 500,
                            fontSize: "clamp(35px, 3.5vw, 45px)",
                            lineHeight: "110%",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Why Students Learn with Design School by HACA
                    </h2>

                    <div className="flex w-full flex-col gap-[26px] lg:gap-[34px]">
                        {ROWS.map((row) => (
                            <WhyRow key={row.title} row={row} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
