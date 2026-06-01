import Image from "next/image";

const HEADING_ID = "ae-success-stories-heading";

const ACCENT_GRADIENTS = [
    "linear-gradient(145deg, #D9F967 0%, #9fcc4a 55%, #7fb032 100%)",
    "linear-gradient(145deg, #F48E28 0%, #d97218 55%, #b85a12 100%)",
    "linear-gradient(145deg, #1DA1F2 0%, #178cd8 55%, #0f6fab 100%)",
] as const;

const ROW1_NAMES = ["Muhammed Shibili K", "Sanila Sherin", "Rasika", "Amina Fathima", "Nihal Rahman", "Devika S", "Arjun Varma", "Sneha Mol"] as const;
const ROW2_NAMES = ["Rasika", "Muhammed Shibili K", "Sanila Sherin", "Fathima N", "Kiran S Kumar", "Anjali Menon", "Rohit Nair", "Meera Joseph"] as const;

const ROW1_LOOP = [...ROW1_NAMES, ...ROW1_NAMES];
const ROW2_LOOP = [...ROW2_NAMES, ...ROW2_NAMES];

function PlacementCard({ name, accentIndex }: { name: string; accentIndex: number }) {
    const bg = ACCENT_GRADIENTS[accentIndex % ACCENT_GRADIENTS.length];

    return (
        <article
            className="flex h-[186.022px] w-[161.847px] shrink-0 flex-col overflow-hidden rounded-[5.24px] bg-white text-black shadow-sm lg:h-[279.697px] lg:w-[243.348px] lg:rounded-[7.88px]"
            aria-label={`Placement success story: ${name}, Digital Marketing Executive`}
        >
            <div className="flex shrink-0 items-center justify-center px-1.5 pt-1.5 lg:px-2 lg:pt-2">
                <div className="relative h-[10px] w-[72px] opacity-90 lg:h-[14px] lg:w-[100px]">
                    <Image
                        src="/photos/schools/marketing/marketing%20school%20logo.svg"
                        alt=""
                        fill
                        className="object-contain object-center"
                        sizes="100px"
                    />
                </div>
            </div>

            <div className="flex min-h-0 flex-1 gap-1 px-1.5 pb-1 pt-0.5 lg:gap-1.5 lg:px-2 lg:pb-1.5 lg:pt-1">
                <div className="flex min-w-0 flex-1 flex-col justify-center text-[7px] font-medium leading-[120%] text-black/80 lg:text-[9px]">
                    <p className="m-0 font-medium text-black/90">Upskill ചെയ്‌തു നേടിയ Career</p>
                    <p className="m-0 mt-0.5 text-[6px] text-black/55 lg:text-[8px]">From training to placement—your next chapter starts here.</p>
                </div>
                <div
                    className="relative w-[38%] shrink-0 overflow-hidden rounded-[3px] lg:w-[40%] lg:rounded-[4px]"
                    style={{ background: bg }}
                    aria-hidden
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                    <div className="absolute bottom-1 left-1 grid h-[22px] w-[22px] place-items-center rounded-full bg-[#0066FF] text-[5px] font-bold uppercase leading-none text-white shadow-sm lg:bottom-1.5 lg:left-1.5 lg:h-[28px] lg:w-[28px] lg:text-[6px]">
                        Placed
                    </div>
                </div>
            </div>

            <div
                className="grid shrink-0 grid-cols-2 gap-0 border-t border-white/25 text-white"
                style={{ background: bg }}
            >
                <div className="flex flex-col justify-center border-r border-white/25 px-1.5 py-1.5 lg:px-2 lg:py-2">
                    <span className="text-[5px] font-medium uppercase tracking-wide text-white/80 lg:text-[6px]">Name</span>
                    <span className="text-[8px] font-semibold leading-tight lg:text-[10px]">{name}</span>
                    <div className="mt-1 h-[12px] max-w-[56px] rounded bg-white/90 lg:mt-1.5 lg:h-[14px] lg:max-w-[72px]" aria-hidden />
                </div>
                <div className="flex flex-col justify-center px-1.5 py-1.5 lg:px-2 lg:py-2">
                    <span className="text-[5px] font-medium uppercase tracking-wide text-white/80 lg:text-[6px]">Placed as</span>
                    <span className="text-[8px] font-semibold leading-tight lg:text-[10px]">Digital Marketing Executive</span>
                </div>
            </div>
        </article>
    );
}

export function AeSuccessStoriesSection() {
    return (
        <section className="w-full bg-black text-white" aria-labelledby={HEADING_ID}>
            <style>{`
                @keyframes ae-ss-marquee-right {
                    0%   { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                @keyframes ae-ss-marquee-left {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .ae-ss-row1-track {
                    animation: ae-ss-marquee-right 48s linear infinite;
                    will-change: transform;
                }
                .ae-ss-row2-track {
                    animation: ae-ss-marquee-left 52s linear infinite;
                    will-change: transform;
                }
                .ae-ss-row1-track:hover,
                .ae-ss-row2-track:hover { animation-play-state: paused; }
                @media (prefers-reduced-motion: reduce) {
                    .ae-ss-row1-track, .ae-ss-row2-track {
                        animation: none; transform: none;
                    }
                }
            `}</style>

            <div className="mx-auto box-border flex w-full max-w-[1440px] flex-col gap-[30px] px-5 py-[10px] lg:px-[60px] lg:pb-[60px] lg:pt-[30px]">
                <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-[30px] lg:min-h-[122px] lg:justify-end">
                    <div className="flex w-full flex-col gap-5 lg:mx-0 lg:min-h-[122px] lg:max-w-[1320px] lg:flex-row lg:items-end lg:justify-between lg:gap-[30px]">
                        <h2
                            id={HEADING_ID}
                            className="m-0 max-w-[558px] text-left font-semibold tracking-[-0.01em] text-white [text-rendering:geometricPrecision] lg:min-w-0 lg:shrink-0"
                            style={{ fontFamily: "Darker Grotesque, serif" }}
                        >
                            <span className="flex flex-col text-[36px] leading-[95%] lg:hidden">
                                <span className="block">How HACA Students Turned</span>
                                <span className="block">Skills Into Careers</span>
                                <span className="block">Across UAE</span>
                            </span>
                            <span className="hidden flex-col text-[clamp(28px,3.8vw,55px)] leading-[110%] lg:flex">
                                <span className="block whitespace-nowrap">How HACA Students Turned</span>
                                <span className="block whitespace-nowrap">Skills Into Careers Across UAE</span>
                            </span>
                        </h2>

                        <p
                            className="m-0 w-full max-w-[335px] text-left text-[16px] font-medium leading-[150%] tracking-[-0.05em] text-[#FFFFFFB2] lg:max-w-[458px] lg:min-h-0 lg:shrink-0 lg:text-[18px]"
                            style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500 }}
                        >
                            Meet HACA learners who secured opportunities across different parts of the UAE
                            through practical learning, placement support, resume guidance, and mock interview training.
                        </p>
                    </div>
                </div>

                <p className="sr-only">
                    Animated showcase of student placement success stories across the UAE.
                </p>

                <div className="relative w-full overflow-x-hidden lg:min-h-[599px]">
                    <div className="flex w-full flex-col gap-[30px]" aria-hidden="true">
                        <div className="w-full min-w-0 overflow-hidden">
                            <div className="ae-ss-row1-track flex w-max flex-row gap-[19.95px] lg:gap-[30px]">
                                {ROW1_LOOP.map((name, i) => (
                                    <PlacementCard key={`r1-${i}-${name}`} name={name} accentIndex={i % ROW1_NAMES.length} />
                                ))}
                            </div>
                        </div>
                        <div className="w-full min-w-0 overflow-hidden">
                            <div className="ae-ss-row2-track flex w-max flex-row gap-[19.95px] lg:gap-[30px]">
                                {ROW2_LOOP.map((name, i) => (
                                    <PlacementCard key={`r2-${i}-${name}`} name={name} accentIndex={(i + 1) % ROW2_NAMES.length} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
