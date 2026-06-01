import React from "react";
import Link from "next/link";

const SWITZER = "'Switzer', var(--font-outfit), sans-serif";

export function UiUxDesignCalicutCtaSection() {
    return (
        <section className="w-full bg-white">
            {/* Outer padding wrapper */}
            <div
                className="mx-auto box-border w-full max-w-[1440px]"
                style={{
                    padding: "clamp(10.42px,2.78vw,40px) clamp(15.62px,4.17vw,60px)",
                }}
            >
                {/* Inner card */}
                <div
                    className="flex w-full items-center justify-center"
                    style={{
                        borderRadius: "clamp(5.21px,1.39vw,20px)",
                        backgroundColor: "#F5F5F5",
                        padding: "clamp(40px,6.94vw,100px) clamp(20px,4.17vw,60px)",
                    }}
                >
                    {/* Text + button stack */}
                    <div
                        className="flex flex-col items-center"
                        style={{ gap: "clamp(5.21px,1.39vw,20px)", width: "100%", maxWidth: 595 }}
                    >
                        {/* Heading */}
                        <h2
                            className="m-0 text-center text-black"
                            style={{
                                fontFamily: SWITZER,
                                fontWeight: 600,
                                fontStyle: "normal",
                                fontSize: "clamp(35px,3.13vw,45px)",
                                lineHeight: "clamp(100%,1,110%)",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Build Skills That Actually Get You Hired
                        </h2>

                        {/* Paragraph */}
                        <p
                            className="m-0 text-center"
                            style={{
                                fontFamily: SWITZER,
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontSize: "clamp(12px,1.11vw,16px)",
                                lineHeight: "clamp(120%,1,110%)",
                                letterSpacing: "clamp(0em,-0.005em,-0.01em)",
                                color: "#000000B2",
                                maxWidth: 595,
                            }}
                        >
                            Join the most practical and beginner-friendly UI UX Design Course in Calicut
                            and start creating work that speaks for you.
                        </p>

                        {/* Join Now button */}
                        <Link
                            href="/design-school/courses/program-2"
                            className="inline-flex items-center justify-center no-underline"
                            style={{
                                gap: 5,
                                backgroundColor: "#E7E7E7",
                                borderRadius: 20,
                                padding: "clamp(10px,0.83vw,12px) 10px",
                                height: "clamp(41px,3.33vw,48px)",
                                minWidth: "clamp(110.68px,8.31vw,119.68px)",
                            }}
                        >
                            {/* Blue dot */}
                            <span
                                aria-hidden
                                style={{
                                    display: "inline-block",
                                    width: 5,
                                    height: 5,
                                    borderRadius: 9999,
                                    backgroundColor: "#14BCFF",
                                    flexShrink: 0,
                                }}
                            />
                            {/* Label */}
                            <span
                                style={{
                                    fontFamily: SWITZER,
                                    fontWeight: 500,
                                    fontStyle: "normal",
                                    fontSize: "clamp(16px,1.25vw,18px)",
                                    lineHeight: "100%",
                                    letterSpacing: "0",
                                    color: "#000000",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                Join Now
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
