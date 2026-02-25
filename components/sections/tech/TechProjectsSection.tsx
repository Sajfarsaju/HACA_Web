import Image from "next/image";

export function TechProjectsSection() {
    return (
        <section className="tech-projects-section" id="tech-projects">
            <div className="tech-projects-container">

                {/* Header */}
                <div className="tech-projects-header">
                    <h2 className="tech-projects-heading">
                        Your Dream. Your Projects. Your Proof.
                    </h2>
                    <p className="tech-projects-subheading">
                        You&apos;ll build real, working projects that show what you can do, not just what you&apos;ve read about. These aren&apos;t classroom exercises. They&apos;re portfolio pieces. Proof that you&apos;ve got the skills to code, create, and contribute from day one.
                    </p>
                </div>

                {/* Content */}
                <div className="tech-projects-content">

                    {/* Two Column Layout */}
                    <div className="tech-projects-row">

                        {/* Left Card: Project Show */}
                        <div className="tech-projects-card-left">
                            <div className="tech-projects-img-wrap">
                                <Image
                                    src="/photos/Tech/Rectangle 6.svg"
                                    fill
                                    alt="Project Screenshot"
                                    className="object-cover rounded-[16px]"
                                />
                            </div>

                            <div className="tech-projects-left-bottom">
                                <p className="tech-projects-left-desc">
                                    Easily book a ride anytime and anywhere with a smooth and reliable experience.
                                </p>
                                <div className="tech-projects-arrows">
                                    <div className="tech-projects-arrow-prev">
                                        <Image src="/photos/Tech/Active Arowmark.svg" fill alt="Previous" className="object-contain" />
                                    </div>
                                    <div className="tech-projects-arrow-next">
                                        <Image src="/photos/Tech/Active Arowmark.svg" fill alt="Next" className="object-contain" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Card: Stats */}
                        <div className="tech-projects-card-right">

                            <div className="tech-projects-stat">
                                <div className="tech-projects-stat-num">10+</div>
                                <div className="tech-projects-stat-label">Projects</div>
                            </div>

                            <div className="tech-projects-divider"></div>

                            <div className="tech-projects-stat">
                                <div className="tech-projects-stat-num">250+</div>
                                <div className="tech-projects-stat-label">Hours of work</div>
                            </div>

                        </div>

                    </div>

                    {/* Bottom Button Component */}
                    <div className="tech-projects-btn-wrap">
                        <button className="tech-projects-btn">
                            <Image
                                src="/photos/Tech/Button Container (1).svg"
                                width={188}
                                height={44}
                                alt="View Projects"
                                className="object-contain"
                            />
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
}
