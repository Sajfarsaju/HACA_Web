import Image from "next/image";

const COURSES = [
    {
        title: "Advanced Data Analytics with AI",
        duration: "5 Months + 1 Month Project",
        location: "Offline/Online",
        description: "Learn how to turn raw data into powerful insights using Python, Power BI, and AI-driven analytics. You'll explore how machine learning enhances decision-making and business intelligence.",
        bgImage: "/photos/Tech/Rectangle 2.svg",
        titleWidth: "325px"
    },
    {
        title: "Advanced Python Django with GenAI",
        duration: "5 Months + 1 Month Project",
        location: "Offline",
        description: "Master backend development through real-world Django projects integrated with AI tools. You'll learn to build web applications that automate, analyse, and adapt intelligently.",
        bgImage: "/photos/Tech/Rectangle 2 (1).svg",
        titleWidth: "325px"
    },
    {
        title: "Data Science with Gen AI",
        duration: "5 months + 1 month project",
        location: "Offline/Online",
        description: "A hands-on data science program covering Python, statistics, machine learning, and Generative AI. Work with real datasets and build practical projects aligned with industry roles.",
        bgImage: "/photos/Tech/Rectangle 3.svg",
        titleWidth: "255px"
    },
    {
        title: "n8n for AI agents & Automation",
        duration: "6 Weeks",
        location: "Online",
        description: "Learn how to build no-code and low-code automations that save time and money. You'll connect tools like Slack, Google Sheets, and APIs using workflows.",
        bgImage: "/photos/Tech/Rectangle 3 (1).svg",
        titleWidth: "325px"
    },
    {
        title: "Applied AI for Beginners",
        duration: "4 Weeks",
        location: "Online",
        description: "A fast, practical introduction to how AI actually works with practical insights on technology. You'll explore tools like ChatGPT, n8n, and automation workflows to solve real tasks.",
        bgImage: "/photos/Tech/Rectangle 3 (2).svg",
        titleWidth: "325px"
    },
    {
        title: "Dashboard Mastery in Power BI + Excel Course",
        duration: "6 Weeks",
        location: "Online",
        description: "A fast, practical introduction to how AI actually works with practical insights on technology. You'll explore tools like ChatGPT, n8n, and automation workflows to solve real tasks.",
        bgImage: "/photos/Tech/Rectangle 3 (3).svg",
        titleWidth: "341px"
    }
];

export function TechPathSection() {
    return (
        <section className="tech-path-section" id="tech-paths">

            {/* Background elements */}
            <div className="tech-path-bg-layer">
                <div className="tech-path-bg-gradient">
                    <Image src="/photos/Tech/Gradient2.1.svg" alt="" fill className="object-cover" />
                </div>
                <div className="tech-path-bg-ellipse156">
                    <Image src="/photos/Tech/Ellipse 156.svg" alt="" fill className="object-cover" />
                </div>
                <div className="tech-path-bg-ellipse4">
                    <Image src="/photos/Tech/Ellipse 4.svg" alt="" fill className="object-cover" />
                </div>
            </div>

            {/* Content */}
            <div className="tech-path-content">

                {/* Header */}
                <div className="tech-path-header">
                    <h2 className="tech-path-heading">
                        Choose Your Path.<br />We&apos;ll Guide You Through It.
                    </h2>
                    <p className="tech-path-subheading">
                        Each course is packed with real-world skills and AI integration to help you build smarter, faster, and better.
                    </p>
                </div>

                {/* Course Grid */}
                <div className="tech-path-grid-wrap">
                    <div className="tech-path-grid">
                        {COURSES.map((course, idx) => (
                            <div key={idx} className="tech-path-card group">
                                {/* BG image */}
                                <Image
                                    src={course.bgImage}
                                    alt=""
                                    fill
                                    className="tech-path-card-bg"
                                />

                                <div className="tech-path-card-inner">
                                    {/* Top row: title + duration */}
                                    <div className="tech-path-card-top">
                                        <h3
                                            className="tech-path-card-title"
                                            style={{ maxWidth: course.titleWidth }}
                                        >
                                            {course.title}
                                        </h3>
                                        <div className="tech-path-card-duration">
                                            <span className="tech-path-duration-label">Duration</span>
                                            <span className="tech-path-duration-value">{course.duration}</span>
                                            <span className="tech-path-duration-mode">{course.location}</span>
                                        </div>
                                    </div>

                                    {/* Bottom: description + button */}
                                    <div className="tech-path-card-bottom">
                                        <p className="tech-path-card-desc">{course.description}</p>
                                        <div className="tech-path-card-btn-wrap">
                                            <button className="tech-path-card-btn">
                                                <Image
                                                    src="/photos/Tech/Link - Regular.svg"
                                                    width={123}
                                                    height={44}
                                                    alt="Know More"
                                                    className="object-contain"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Promo Banner */}
                <div className="tech-path-promo">
                    <h2 className="tech-path-promo-heading">
                        Get an Applied AI Course Worth <br className="tech-path-promo-br" /> ₹10,000 for Free
                    </h2>
                    <p className="tech-path-promo-sub">
                        Enrol in any flagship program like Data Analytics, Python Django, or Data Science, and get Applied AI for Beginners (₹10,000 value) included at no extra cost.
                    </p>
                    <div className="tech-path-promo-btn-wrap">
                        <button className="tech-path-promo-btn">
                            <Image
                                src="/photos/Tech/Button Container.svg"
                                width={186}
                                height={44}
                                alt="Claim Free Course"
                                className="object-contain"
                            />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
