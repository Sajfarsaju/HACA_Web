"use client"

import Image from "next/image"

const aboutWhyCards = [
    {
        icon: "/photos/main/why haca about 1.svg",
        title: "Agency-backed learning ecosystem",
        body: "Learn from people who actually work in the industry.",
    },
    {
        icon: "/photos/main/why haca about 2.svg",
        title: "Practical, job-focused curriculum",
        body: "Everything you learn is designed to help you get hired.",
    },
    {
        icon: "/photos/main/why haca about 3.svg",
        title: "Training inside a real working environment",
        body: "Experience how real work happens, not just theory.",
    },
    {
        icon: "/photos/main/why haca about 4.svg",
        title: "Global learner community",
        body: "Connect and grow with learners from different backgrounds.",
    },
    {
        icon: "/photos/main/why haca about 5.svg",
        title: "Strong focus on placement readiness",
        body: "We prepare you for interviews and career opportunities.",
    },
    {
        icon: "/photos/main/why haca about 6.svg",
        title: "Apply easily with EMI options",
        body: "Invest in your future with our easy instalment options.",
    },
    {
        icon: "/photos/main/why haca about 7.svg",
        title: "Flexible offline and online learning options",
        body: "Learn online or offline, whichever works best for you.",
    },
]

function AboutWhyCard({ icon, title, body }: (typeof aboutWhyCards)[number]) {
    return (
        <article className="w-full max-w-[360px] aspect-[360/260] rounded-[20px] border border-[#25317D] overflow-hidden max-md:max-w-[345px] max-md:aspect-[345/249.17]">
            <Image
                src={icon}
                alt={title}
                width={360}
                height={260}
                className="w-full h-full object-cover"
            />
        </article>
    )
}

export function AboutWhyHacaSection() {
    return (
        <section className="w-full section-4k mx-auto bg-[#000210] px-[clamp(20px,4vw,60px)] py-[40px] flex flex-col items-center gap-[30px]">
            {/* Heading */}
            <h2 className="w-full max-w-[1320px] font-rethink font-semibold text-[clamp(26px,2.2vw,36px)] leading-[110%] text-center text-white m-0 max-md:max-w-[335px]">
                Why HACA?
            </h2>

            {/* Cards container */}
            <div className="w-full max-w-[1320px] flex flex-col gap-[20px]">
                {/* Desktop layout (lg+): 2 / 3 / 2 cards */}
                <div className="hidden lg:flex w-full justify-center gap-[20px]">
                    {aboutWhyCards.slice(0, 2).map((card) => (
                        <AboutWhyCard key={card.title} {...card} />
                    ))}
                </div>
                <div className="hidden lg:flex w-full justify-center gap-[20px]">
                    {aboutWhyCards.slice(2, 5).map((card) => (
                        <AboutWhyCard key={card.title} {...card} />
                    ))}
                </div>
                <div className="hidden lg:flex w-full justify-center gap-[20px]">
                    {aboutWhyCards.slice(5, 7).map((card) => (
                        <AboutWhyCard key={card.title} {...card} />
                    ))}
                </div>

                {/* Tablet layout (md to <lg): 2-column grid */}
                <div className="hidden md:grid lg:hidden w-full grid-cols-2 gap-[20px] place-items-center">
                    {aboutWhyCards.map((card) => (
                        <AboutWhyCard key={card.title} {...card} />
                    ))}
                </div>

                {/* Mobile: single column */}
                <div className="flex md:hidden w-full flex-col items-center gap-[20px]">
                    {aboutWhyCards.map((card) => (
                        <AboutWhyCard key={card.title} {...card} />
                    ))}
                </div>
            </div>
        </section>
    )
}

