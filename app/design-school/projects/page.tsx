import type { Metadata } from "next";
import { DesignSchoolIntroAnimation } from "@/components/design/DesignSchoolIntroAnimation";
import { DesignSchoolNavbar } from "@/components/design/DesignSchoolNavbar";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Design School Projects | HACA",
    description: "Design School projects.",
};

export default function DesignSchoolProjectsPage() {
    const projects = Array.from({ length: 6 }, (_, i) => ({ id: i + 1 }));

    return (
        <div className="w-full bg-[#FCFCFC] min-h-screen">
            <DesignSchoolIntroAnimation />
            <DesignSchoolNavbar />

            {/* Title block (same layout as Success Story) */}
            <section className="max-w-[1440px] mx-auto w-full h-[301px] pt-[40px] pr-[60px] pb-[40px] pl-[60px] flex flex-col gap-[40px]">
                <h1
                    className="w-[335px] h-[142px] md:w-[759px] md:h-[165px] text-[40px] md:text-[70px] leading-[120%] text-black"
                    style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 500 }}
                >
                    This Page Is All About <br />
                    Their{" "}
                    <span style={{ fontFamily: '"IvyPresto Display", serif', fontWeight: 300 }} className="italic">
                        Projects
                    </span>
                </h1>
            </section>

            {/* Projects cards section */}
            <section className="w-full h-auto lg:h-[2355.6084px] pt-[40px] pb-[40px] px-6 lg:px-[60px] flex flex-col gap-[60px]">
                <div className="w-full max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[clamp(24px,3vw,60px)] justify-items-center">
                        {projects.map((p) => (
                            <article
                                key={p.id}
                                className="
                                    w-full max-w-[648px]
                                    lg:max-w-[min(100%,560px)] min-[1320px]:lg:max-w-[648px]
                                    h-auto lg:h-auto
                                    flex flex-col gap-[20px]
                                "
                            >
                                {/* Card top image */}
                                <div className="w-full h-[442px] lg:h-[clamp(340px,32vw,442px)] relative overflow-hidden bg-[#EDEDED]">
                                    <Image
                                        src="/photos/schools/design/projects/Rectangle 244.png"
                                        alt=""
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, (max-width: 1320px) 560px, 648px"
                                        priority={p.id <= 2}
                                    />
                                </div>

                                {/* Card content */}
                                <div className="w-full h-auto flex flex-col gap-[10px] text-black">
                                    <h2
                                        className="w-full h-auto text-[40px] lg:text-[clamp(32px,2.6vw,40px)] leading-[100%] m-0"
                                        style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 500 }}
                                    >
                                        Be the vazhikaatti
                                    </h2>

                                    <p
                                        className="w-full h-auto text-[16px] leading-[120%] m-0"
                                        style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 400 }}
                                    >
                                        A UI/ UX-focused project, built on the belief that good design is a real solution.
                                        Our students create produc ts and solve problems by understanding what people
                                        struggle with and treating those struggles as oppor tunities for change. There’s
                                        no magic, just a well-planned, well-executed idea that delivers a clear solution.
                                        Kerigo, a well branded and designed auto-booking app for Calicut city, was built
                                        in the ver y first edition of this projec t.
                                    </p>

                                    <h3
                                        className="w-full h-auto text-[20px] leading-[100%] m-0"
                                        style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 500 }}
                                    >
                                        Outcomes
                                    </h3>

                                    <div className="w-full h-auto flex flex-wrap gap-[6.77px]">
                                        <span
                                            className="inline-flex items-center justify-center w-[99.5361px] h-[30.5361px] rounded-[20.3px] px-[6.77px] text-white text-[12px] leading-[100%]"
                                            style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 500, backgroundColor: "#FF5659" }}
                                        >
                                            User Research
                                        </span>
                                        <span
                                            className="inline-flex items-center justify-center w-[181.5361px] h-[30.5361px] rounded-[20.3px] px-[6.77px] text-white text-[12px] leading-[100%]"
                                            style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 500, backgroundColor: "#8F56FF" }}
                                        >
                                            Identification of real problem
                                        </span>
                                        <span
                                            className="inline-flex items-center justify-center w-[109.5361px] h-[30.5361px] rounded-[20.3px] px-[6.77px] text-white text-[12px] leading-[100%]"
                                            style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 500, backgroundColor: "#FF5C00" }}
                                        >
                                            Product building
                                        </span>
                                        <span
                                            className="inline-flex items-center justify-center w-[157.5361px] h-[30.5361px] rounded-[20.3px] px-[6.77px] text-white text-[12px] leading-[100%]"
                                            style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 500, backgroundColor: "#29C76B" }}
                                        >
                                            Design Thinking Solution
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

