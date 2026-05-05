import Image from "next/image"
import React from "react"

const ACCENT = "#0066FF"
const CARD_BG = "#E8F1FF"

type Mentor = {
    name: string
    role: string
    imageSrc: string
}

const MENTORS: Mentor[] = [
    { name: "Hima", role: "Google Ads Mentor", imageSrc: "/photos/schools/marketing/mentors/hima.svg" },
    { name: "Arshad", role: "Business Development Mentor", imageSrc: "/photos/schools/marketing/mentors/arshad.svg" },
    { name: "Jawadha", role: "Social Media Marketing Mentor", imageSrc: "/photos/schools/marketing/mentors/jawadha.svg" },
    { name: "Minhaj", role: "Creative Strategy Mentor", imageSrc: "/photos/schools/marketing/mentors/minhaj.svg" },
]

export function MarketingMentorsSection() {
    return (
        <section
            id="marketing-mentors"
            className="w-full opacity-100"
            style={{ backgroundColor: "var(--cm-bg, #000000)" }}
            aria-labelledby="marketing-mentors-heading"
        >
            <div
                className="
                    mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col gap-7
                    px-[clamp(16px,4.16vw,60px)]
                    pb-10 pt-6
                    lg:gap-9 lg:pb-14 lg:pt-10
                "
            >
                <div
                    className="w-full border-t"
                    style={{ borderColor: "var(--cm-text, #ffffff)" }}
                    aria-hidden
                />
                <header className="flex w-full min-w-0 flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
                    <div className="flex shrink-0 items-center gap-[clamp(10px,1.5vw,14px)] lg:pt-1">
                        <span
                            className="h-[10px] w-[10px] shrink-0 rounded-full lg:h-3 lg:w-3"
                            style={{ backgroundColor: ACCENT }}
                            aria-hidden
                        />
                        <p
                            className="font-['Satoshi',sans-serif] text-[clamp(14px,1.5vw,16px)] font-medium leading-none tracking-normal"
                            style={{ color: "var(--cm-text, #ffffff)" }}
                        >
                            Mentors
                        </p>
                    </div>
                    <h2
                        id="marketing-mentors-heading"
                        className="
                            w-full min-w-0 max-w-full text-left font-semibold tracking-normal
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.05]
                            lg:w-auto lg:ml-auto lg:max-w-[min(100%,640px)] lg:text-left lg:leading-[1.08]
                        "
                        style={{ color: "var(--cm-text, #ffffff)" }}
                    >
                        The Right People to
                        <br />
                        Learn From
                    </h2>
                </header>

                <ul
                    className="
                        m-0 grid w-full list-none grid-cols-1 gap-8 p-0
                        sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10
                        lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10
                        xl:grid-cols-4
                    "
                >
                    {MENTORS.map((mentor) => (
                        <li
                            key={mentor.name}
                            className={[
                                "min-w-0",
                                mentor.name !== "Hima" ? "hidden sm:block" : "",
                            ].join(" ")}
                        >
                            <article className="mx-auto flex w-full max-w-[308px] flex-col gap-[10px] max-lg:h-auto lg:h-[415px]">
                                <div
                                    className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl max-lg:h-[260px] lg:h-[308px]"
                                    style={{ backgroundColor: CARD_BG }}
                                >
                                    <Image
                                        src={mentor.imageSrc}
                                        alt={`${mentor.name}, ${mentor.role}`}
                                        fill
                                        className="object-contain object-bottom"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>
                                <div className="flex min-h-0 flex-col gap-1 text-left">
                                    <h3
                                        className="
                                            m-0 font-bold tracking-normal
                                            [font-family:'Darker_Grotesque',sans-serif]
                                            text-[clamp(1.25rem,2.6vw,1.5rem)] leading-[1.05]
                                        "
                                        style={{ color: "var(--cm-text, #ffffff)" }}
                                    >
                                        {mentor.name}
                                    </h3>
                                    <p className="m-0 font-['Satoshi',sans-serif] text-[clamp(13px,1.4vw,15px)] font-bold leading-snug text-[#6B6B6B]">
                                        {mentor.role}
                                    </p>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
