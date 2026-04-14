"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

/** Filenames in `public/photos/main/` include spaces — encode for URLs */
function aboutWhyLogoSrc(index: number) {
    const name = `about why haca logos ${index}.svg`
    return `/photos/main/${encodeURIComponent(name)}`
}

const aboutWhyCards = [
    {
        title: "Agency-backed learning ecosystem",
        body: "Learn from people who actually work in the industry.",
    },
    {
        title: "Practical, job-focused curriculum",
        body: "Everything you learn is designed to help you get hired.",
    },
    {
        title: "Training inside a real working environment",
        body: "Experience how real work happens, not just theory.",
    },
    {
        title: "Global learner community",
        body: "Connect and grow with learners from different backgrounds.",
    },
    {
        title: "Strong focus on placement readiness",
        body: "We prepare you for interviews and career opportunities.",
    },
    {
        title: "Apply easily with EMI options",
        body: "Invest in your future with our easy instalment options.",
    },
    {
        title: "Flexible offline and online learning options",
        body: "Learn online or offline, whichever works best for you.",
    },
] as const

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
    cardIndex,
    delay,
}: {
    card: (typeof aboutWhyCards)[number]
    cardIndex: number
    delay: number
}) {
    const logoSrc = aboutWhyLogoSrc(cardIndex + 1)

    return (
        <motion.article
            className="box-border flex w-full max-w-[clamp(300px,25vw,360px)] flex-col gap-4 overflow-hidden rounded-[20px] border border-solid border-[#232D6B] bg-[#000319] p-[clamp(16px,1.5vw,20px)] aspect-[360/260] max-md:max-w-[345px] max-md:gap-[15.33px] max-md:rounded-[19.17px] max-md:border-[0.96px] max-md:p-[19.17px] max-md:aspect-[345/258] transition-all duration-300"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-32px 0px -32px 0px", amount: 0.15 }}
            transition={{
                duration: 0.55,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
        >
            <div className="relative h-[clamp(50px,5vw,70px)] w-[clamp(50px,5vw,70px)] shrink-0 max-md:h-[67.08px] max-md:w-[67.08px]">
                <Image
                    src={logoSrc}
                    alt=""
                    fill
                    className="object-contain object-left"
                    sizes="(max-width: 768px) 67px, 70px"
                />
            </div>

            <div className="flex min-h-0 w-full flex-1 flex-col gap-[clamp(6px,0.8vw,10px)] overflow-hidden max-md:gap-[9.58px]">
                <h3 className="m-0 w-full font-rethink font-semibold text-[clamp(20px,1.8vw,26px)] leading-[110%] tracking-[-0.02em] text-white max-md:text-[20px] max-md:leading-[110%] max-md:tracking-[-0.02em] break-words">
                    {card.title === "Global learner community" ? (
                        <>
                            <span className="block">Global learner</span>
                            <span className="block">community</span>
                        </>
                    ) : (
                        card.title
                    )}
                </h3>
                <p className="m-0 w-full max-w-[295px] font-rethink font-normal text-[clamp(16px,1.4vw,20px)] leading-[110%] tracking-normal text-[#A7ADBE] max-md:max-w-none max-md:text-[19.17px] max-md:leading-[110%] line-clamp-3">
                    {card.body}
                </p>
            </div>
        </motion.article>
    )
}

export function AboutWhyHacaSection() {
    const [cardDelays] = useState<number[]>(() => shuffleDelays(aboutWhyCards.length))

    return (
        <section className="w-full section-4k mx-auto bg-[#000210] px-[clamp(20px,4vw,60px)] py-[40px] flex flex-col items-center gap-[30px] lg:px-[clamp(20px,3.2vw,52px)] lg:py-[34px] lg:gap-[24px] xl:px-[clamp(20px,4vw,60px)] xl:py-[40px] xl:gap-[30px]">
            <motion.h2
                className="w-full max-w-[1320px] font-rethink font-semibold text-[clamp(26px,2.2vw,36px)] leading-[110%] text-center text-white m-0 max-md:max-w-[335px] lg:text-[clamp(22px,1.85vw,30px)] xl:text-[clamp(26px,2.2vw,36px)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px 0px" }}
                transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
                Why HACA?
            </motion.h2>

            <div className="w-full max-w-[1320px] flex flex-col gap-4 max-md:gap-[15.33px] md:gap-4">
                {/* Mobile: single column — same card structure & aspect ratio */}
                <div className="flex md:hidden w-full flex-col items-center gap-[15.33px]">
                    {aboutWhyCards.map((card, i) => (
                        <AboutWhyCard
                            key={card.title}
                            card={card}
                            cardIndex={i}
                            delay={cardDelays[i]}
                        />
                    ))}
                </div>

                {/* md -> xl: keep 2 columns (prevents 3rd card dropping) */}
                <div className="hidden md:grid w-full grid-cols-2 gap-4 xl:hidden">
                    {aboutWhyCards.map((card, i) => (
                        <AboutWhyCard
                            key={card.title}
                            card={card}
                            cardIndex={i}
                            delay={cardDelays[i]}
                        />
                    ))}
                </div>

                {/* xl+: keep your original 2 / 3 / 2 staggered rows */}
                <div className="hidden xl:flex w-full flex-col items-center gap-4">
                    <div className="flex w-full justify-center gap-4">
                        {aboutWhyCards.slice(0, 2).map((card, i) => (
                            <AboutWhyCard
                                key={card.title}
                                card={card}
                                cardIndex={i}
                                delay={cardDelays[i]}
                            />
                        ))}
                    </div>
                    <div className="flex w-full justify-center gap-4">
                        {aboutWhyCards.slice(2, 5).map((card, i) => (
                            <AboutWhyCard
                                key={card.title}
                                card={card}
                                cardIndex={i + 2}
                                delay={cardDelays[i + 2]}
                            />
                        ))}
                    </div>
                    <div className="flex w-full justify-center gap-4">
                        {aboutWhyCards.slice(5, 7).map((card, i) => (
                            <AboutWhyCard
                                key={card.title}
                                card={card}
                                cardIndex={i + 5}
                                delay={cardDelays[i + 5]}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
