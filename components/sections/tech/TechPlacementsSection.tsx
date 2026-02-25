import Image from "next/image";

export function TechPlacementsSection() {
    return (
        <section className="tech-placements-section" id="tech-placements">
            {/* Background Ellipses */}
            <div className="tech-placements-bg-layer">
                <div className="tech-placements-ellipse-159">
                    <Image src="/photos/Tech/Ellipse 159.svg" fill alt="" />
                </div>
                <div className="tech-placements-ellipse-158">
                    <Image src="/photos/Tech/Ellipse 158.svg" fill alt="" />
                </div>
            </div>

            <div className="tech-placements-container">
                {/* Header */}
                <div className="tech-placements-header">
                    <h2 className="tech-placements-heading">
                        <span className="desktop-text">Placements We’re Proud Of</span>
                        <span className="mobile-text">Placements We’re <br /> Proud Of</span>
                    </h2>

                    {/* Desktop Subheadings */}
                    <div className="tech-placements-sub-desktop">
                        <p className="tech-placements-sub1">
                            Over 80% of Tech School students come from non-IT backgrounds.
                        </p>
                        <p className="tech-placements-sub2">
                            Career switchers, fresh graduates, and professionals from other fields have successfully moved into tech with the right skills, projects, and mentorship.
                        </p>
                    </div>

                    {/* Mobile Subheading */}
                    <div className="tech-placements-sub-mobile">
                        <p>Our students graduate job-ready, equipped with portfolio-worthy projects, AI expertise, and industry-relevant experience.</p>
                    </div>
                </div>

                {/* Cards Row */}
                <div className="tech-placements-cards-wrap">
                    <div className="tech-placements-cards-bg">
                        <Image src="/photos/Tech/Group 46.svg" fill alt="" />
                    </div>
                    <div className="tech-placements-cards-row">
                        {/* Left Card */}
                        <div className="tech-placements-card-side tech-placements-card">
                            <div className="tech-placements-glass"></div>
                            <div className="tech-placements-img-wrap">
                                <Image src="/photos/Tech/Instagram post - 18137 1.svg" fill alt="Placement Story" className="object-cover" />
                            </div>
                        </div>

                        {/* Center Card */}
                        <div className="tech-placements-card-center tech-placements-card">
                            <div className="tech-placements-glass"></div>
                            <div className="tech-placements-img-wrap">
                                <Image src="/photos/Tech/Instagram post - 18137 1.svg" fill alt="Placement Story" className="object-cover" />
                            </div>
                        </div>

                        {/* Right Card */}
                        <div className="tech-placements-card-side tech-placements-card">
                            <div className="tech-placements-glass"></div>
                            <div className="tech-placements-img-wrap">
                                <Image src="/photos/Tech/Instagram post - 18137 1.svg" fill alt="Placement Story" className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="tech-placements-controls">
                    <button className="tech-placements-btn-prev">
                        <Image src="/photos/Tech/Arrow mark (2).svg" fill alt="Previous" className="object-contain" />
                    </button>
                    <button className="tech-placements-btn-next">
                        <Image src="/photos/Tech/Active Arowmark (1).svg" fill alt="Next" className="object-contain" />
                    </button>
                </div>
            </div>
        </section>
    );
}
