import Image from 'next/image'

export function AboutHacaSection() {
    return (
        <section className="about-haca-section">
            <div className="about-haca-inner">
                {/* Left Content */}
                <div className="about-haca-left">
                    <div className="about-haca-badge-container">
                        <button className="about-haca-badge-btn">
                            <span className="about-haca-badge-inner">
                                <Image
                                    src="/photos/main/aboutHaca.svg"
                                    alt="About HACA"
                                    width={165}
                                    height={42}
                                    className="about-haca-badge-img"
                                />
                            </span>
                        </button>
                    </div>
                    <h2 className="about-haca-heading">
                        We Started Small.<br />Now We’re Building Futures.
                    </h2>
                </div>

                {/* Right Content */}
                <div className="about-haca-right">
                    <div className="about-haca-content-wrap">
                        <p className="about-haca-text">
                            What began as Haris’s idea to train young talents inside his own agency,
                            Haris&Co., has grown into an agency-based academy with 600+ active students
                            across four schools: Digital Marketing, Graphic Design, Tech, and Finance.
                            From that tiny room to a 10,000 sq. ft campus in Calicut and a new campus
                            in Dubai, HACA continues to shape real careers through real experiences.
                        </p>
                        <button className="know-more-btn">
                            <Image
                                src="/photos/main/know more about haca.svg"
                                alt="Know More About HACA"
                                width={212}
                                height={55}
                                className="know-more-img"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
