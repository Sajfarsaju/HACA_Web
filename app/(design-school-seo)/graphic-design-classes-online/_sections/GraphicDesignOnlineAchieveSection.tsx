import Image from "next/image";

const vc = '"VC Nudge Trial Normal", sans-serif' as const;

const ITEMS = [
    {
        key: "1",
        icon: "/photos/schools/design/tools 2/achivement 1.svg",
        label: "Strong understanding of design fundamentals",
    },
    {
        key: "2",
        icon: "/photos/schools/design/tools 2/achivement 2.svg",
        label: "Ability to create social media and marketing creatives",
    },
    {
        key: "3",
        icon: "/photos/schools/design/tools 2/achivement 3.svg",
        label: "Hands-on experience with industry-standard tools",
    },
    {
        key: "4",
        icon: "/photos/schools/design/tools 2/achivement 4.svg",
        label: "AI-supported design workflow skills",
    },
    {
        key: "5",
        icon: "/photos/schools/design/tools 2/achivement 5.svg",
        label: "Beginner portfolio for jobs and freelance work",
    },
    {
        key: "6",
        icon: "/photos/schools/design/tools 2/achivement 6.svg",
        label: "A graphic design certificate upon successful completion",
    },
] as const;

function AchieveCard({ icon, label }: { icon: string; label: string }) {
    return (
        <div
            className="flex flex-col gap-[20px] rounded-[20px] bg-white p-[20px]"
            style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
        >
            <Image
                src={icon}
                alt=""
                aria-hidden
                width={60}
                height={60}
                className="shrink-0"
                style={{ width: "60px", height: "60px", objectFit: "contain" }}
            />
            {/* text: desktop 24px / mobile 20px — weight 500 / 120% / -2% */}
            <p
                className="m-0 text-black text-[20px] lg:text-[24px]"
                style={{ fontFamily: vc, fontWeight: 500, lineHeight: "120%", letterSpacing: "-2%" }}
            >
                {label}
            </p>
        </div>
    );
}

export function GraphicDesignOnlineAchieveSection() {
    return (
        <section className="w-full bg-white" aria-labelledby="gd-online-achieve-heading">
            <div className="mx-auto box-border w-full max-w-[1440px] px-5 py-10 lg:px-[60px] lg:py-[60px]">
                <div className="flex flex-col items-center gap-[40px] lg:gap-[50px]">

                    {/* Heading + paragraph — centered */}
                    <div className="flex flex-col items-center gap-[12px] text-center">
                        {/* heading: mobile 32px / desktop 45px */}
                        <h2
                            id="gd-online-achieve-heading"
                            className="m-0 text-center text-black text-[32px] lg:text-[45px]"
                            style={{ fontFamily: vc, fontWeight: 500, lineHeight: "120%", letterSpacing: "-1%" }}
                        >
                            What You&apos;ll Achieve by the End of the Course
                        </h2>
                        {/* paragraph: mobile 14px/100%/-2% / desktop 20px/120%/-1% */}
                        <p
                            className="m-0 max-w-[720px] text-center text-black/60 text-[14px] lg:text-[20px]"
                            style={{
                                fontFamily: vc,
                                fontWeight: 400,
                                lineHeight: "120%",
                                letterSpacing: "-1%",
                            }}
                        >
                            After completing one of the best online graphic design courses with certificates, you&apos;ll walk away with:
                        </p>
                    </div>

                    {/* Mobile: single column, max-w 345px */}
                    <div className="flex w-full max-w-[345px] flex-col gap-[20px] lg:hidden">
                        {ITEMS.map((item) => (
                            <AchieveCard key={item.key} icon={item.icon} label={item.label} />
                        ))}
                    </div>

                    {/* Desktop: 3-col grid, max-w 1075px */}
                    <div className="hidden w-full max-w-[1075px] grid-cols-3 gap-[20px] lg:grid">
                        {ITEMS.map((item) => (
                            <AchieveCard key={item.key} icon={item.icon} label={item.label} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
