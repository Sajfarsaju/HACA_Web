"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLayoutEffect, useState } from "react"

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

const STAGGER_SEC = 0.12

function shuffleDelays(length: number): number[] {
    const order = Array.from({ length }, (_, i) => i)
    for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[order[i], order[j]] = [order[j], order[i]]
    }
    const delays = new Array(length).fill(0)
    order.forEach((cardIndex, step) => {
        delays[cardIndex] = step * STAGGER_SEC
    })
    return delays
}

function AboutWhyCard({
    card,
    delay,
}: {
    card: (typeof aboutWhyCards)[number]
    delay: number
}) {
    return (
        <motion.article
            className="w-full max-w-[360px] aspect-[360/260] rounded-[20px] border border-[#25317D] overflow-hidden max-md:max-w-[345px] max-md:aspect-[345/249.17]"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-32px 0px -32px 0px", amount: 0.15 }}
            transition={{
                duration: 0.55,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
        >
            <Image
                src={card.icon}
                alt={card.title}
                width={360}
                height={260}
                className="w-full h-full object-cover"
            />
        </motion.article>
    )
}

export function AboutWhyHacaSection() {
    const [cardDelays, setCardDelays] = useState<number[]>(() =>
        aboutWhyCards.map((_, i) => i * STAGGER_SEC)
    )

    useLayoutEffect(() => {
        setCardDelays(shuffleDelays(aboutWhyCards.length))
    }, [])

    return (
        <section className="w-full section-4k mx-auto bg-[#000210] px-[clamp(20px,4vw,60px)] py-[40px] flex flex-col items-center gap-[30px]">
            <motion.h2
                className="w-full max-w-[1320px] font-rethink font-semibold text-[clamp(26px,2.2vw,36px)] leading-[110%] text-center text-white m-0 max-md:max-w-[335px]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px 0px" }}
                transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
                Why HACA?
            </motion.h2>

            <div className="w-full max-w-[1320px] flex flex-col gap-[20px]">
                {/* Desktop layout (lg+): 2 / 3 / 2 cards */}
                <div className="hidden lg:flex w-full justify-center gap-[20px]">
                    {aboutWhyCards.slice(0, 2).map((card, i) => (
                        <AboutWhyCard key={card.title} card={card} delay={cardDelays[i]} />
                    ))}
                </div>
                <div className="hidden lg:flex w-full justify-center gap-[20px]">
                    {aboutWhyCards.slice(2, 5).map((card, i) => (
                        <AboutWhyCard key={card.title} card={card} delay={cardDelays[i + 2]} />
                    ))}
                </div>
                <div className="hidden lg:flex w-full justify-center gap-[20px]">
                    {aboutWhyCards.slice(5, 7).map((card, i) => (
                        <AboutWhyCard key={card.title} card={card} delay={cardDelays[i + 5]} />
                    ))}
                </div>

                {/* Tablet layout (md to <lg): 2-column grid */}
                <div className="hidden md:grid lg:hidden w-full grid-cols-2 gap-[20px] place-items-center">
                    {aboutWhyCards.map((card, i) => (
                        <AboutWhyCard key={card.title} card={card} delay={cardDelays[i]} />
                    ))}
                </div>

                {/* Mobile: single column */}
                <div className="flex md:hidden w-full flex-col items-center gap-[20px]">
                    {aboutWhyCards.map((card, i) => (
                        <AboutWhyCard key={card.title} card={card} delay={cardDelays[i]} />
                    ))}
                </div>
            </div>
        </section>
    )
}
