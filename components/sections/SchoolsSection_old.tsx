import Image from "next/image"

const schools = [
    {
        id: 1,
        logo: "/photos/main/degital marketing.svg",
        alt: "Digital Marketing School",
    },
    {
        id: 2,
        logo: "/photos/main/design school.svg",
        alt: "Design School",
    },
    {
        id: 3,
        logo: "/photos/main/tech school.svg",
        alt: "Tech School",
    },
    {
        id: 4,
        logo: "/photos/main/FINANCE SCHOOL.svg",
        alt: "Finance School",
    },
]

export function SchoolsSection() {
    return (
        <section className="schools-section">
            {/* Header */}
            <div className="schools-header">
                {/* Badge Button */}
                <button className="schools-badge-btn" aria-label="Explore Schools">
                    <Image
                        src="/photos/main/school arrow.svg"
                        alt="Schools"
                        width={152}
                        height={64}
                        className="schools-badge-img"
                    />
                </button>

                {/* Heading */}
                <h2 className="schools-heading">Pick What Feels Right</h2>
            </div>

            {/* Cards Grid */}
            <div className="schools-cards">
                {schools.map((school) => (
                    <div key={school.id} className="schools-card">
                        {/* School Logo ΓÇö top left */}
                        <div className="schools-card-logo-wrap">
                            <Image
                                src={school.logo}
                                alt={school.alt}
                                width={158}
                                height={65}
                                className="schools-card-logo"
                            />
                        </div>

                        {/* Explore Button ΓÇö bottom right */}
                        <div className="schools-card-cta">
                            <Image
                                src="/photos/main/explore course arrow.svg"
                                alt="Explore Course"
                                width={162}
                                height={26}
                                className="schools-card-cta-img"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
