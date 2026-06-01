const HEADING_ID = "dubai-student-results-heading";

const GRADIENTS = [
    "linear-gradient(145deg, #E6EFFF 0%, #C5DBFF 45%, #8BB8FF 100%)",
    "linear-gradient(145deg, #D9F967 0%, #9fcc4a 55%, #7fb032 100%)",
    "linear-gradient(145deg, #F48E28 0%, #d97218 55%, #b85a12 100%)",
    "linear-gradient(145deg, #1DA1F2 0%, #178cd8 55%, #0f6fab 100%)",
    "linear-gradient(145deg, #E8F1FF 0%, #0066FF 70%, #0047B3 100%)",
    "linear-gradient(145deg, #FFE8F0 0%, #FF6B9D 50%, #C9184A 100%)",
    "linear-gradient(145deg, #F5F0FF 0%, #9B7EDE 50%, #5E35B1 100%)",
    "linear-gradient(145deg, #FFF4E6 0%, #FFB347 50%, #E65100 100%)",
] as const;

const PHOTOS = GRADIENTS.map((gradient, i) => ({
    id: `student-result-${i + 1}`,
    gradient,
    alt: `HACA student result placeholder ${i + 1}`,
}));

export function DubaiStudentResultsSection() {
    return (
        <section
            id="dubai-student-results"
            className="w-full bg-white text-black"
            role="region"
            aria-labelledby={HEADING_ID}
        >
            <div
                className="
                    mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col
                    gap-6 py-5
                    lg:gap-[60px] lg:py-[50px]
                "
            >
                {/* Heading + description — centered */}
                <header
                    className="
                        mx-auto flex w-full max-w-[375px] flex-col items-center gap-[10px] px-5
                        lg:max-w-[800px] lg:px-0
                    "
                >
                    <h2
                        id={HEADING_ID}
                        className="
                            m-0 w-full text-center font-semibold tracking-[-0.05em] text-black
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[36px] leading-[0.95] [text-rendering:geometricPrecision]
                            lg:text-[55px] lg:leading-[1.1] lg:tracking-[-0.01em]
                        "
                    >
                        Results That Reflect Practical Learning
                    </h2>
                    <p
                        className="
                            m-0 w-full text-center font-medium text-[#000000B2]
                            text-[16px] leading-[1.2] tracking-normal
                            [font-family:'Satoshi',sans-serif]
                            lg:text-[18px]
                        "
                    >
                        Results-driven and practice-focused, our students&apos; success stories say it all.
                    </p>
                </header>

                {/* Horizontal scroll photo strip */}
                <div
                    className="
                        relative w-full overflow-x-auto overflow-y-hidden
                        [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                        max-lg:left-1/2 max-lg:w-screen max-lg:max-w-[100vw] max-lg:-translate-x-1/2
                        lg:static lg:left-auto lg:w-full lg:max-w-none lg:translate-x-0
                    "
                >
                    <ul
                        className="
                            m-0 flex w-max list-none flex-row p-0
                            gap-[7.77px] px-5
                            lg:gap-4 lg:mx-auto lg:max-w-[2512px] lg:px-0
                        "
                        aria-label="Student results and success stories"
                    >
                        {PHOTOS.map((photo) => (
                            <li
                                key={photo.id}
                                className="
                                    h-[218px] w-[194px] shrink-0
                                    lg:h-[450px] lg:w-[400px]
                                "
                            >
                                <div
                                    className="h-full w-full rounded-[3.88px] lg:rounded-[8px]"
                                    style={{ background: photo.gradient }}
                                    aria-label={photo.alt}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
