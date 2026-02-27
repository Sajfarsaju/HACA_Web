import Image from "next/image"

const mentors = [
    {
        id: 1,
        photo: "/photos/main/mentor 1.png",
        name: "Abu Nabhan",
        position: "CEO Design School",
    },
    {
        id: 2,
        photo: "/photos/main/mentor 2.png",
        name: "Safwan",
        position: "Branding Mentor",
    },
    {
        id: 3,
        photo: "/photos/main/mentor 3.png",
        name: "Pressly",
        position: "Graphic Design Mentor",
    },
    {
        id: 4,
        photo: "/photos/main/mentor 4.png",
        name: "Nanditha",
        position: "Motion Graphics Mentor",
    },
]

export function MentorsSection() {
    return (
        <section className="mentors-section">
            {/* Header */}
            <div className="mentors-header">
                {/* Badge Button */}
                <div className="mentors-badge-btn">
                    <Image
                        src="/photos/main/top mentors arrow.svg"
                        alt="Top Mentors"
                        width={184}
                        height={64}
                        className="mentors-badge-img"
                    />
                </div>

                {/* Heading */}
                <h2 className="mentors-heading">Taught by the Top 1%</h2>
            </div>

            {/* Cards Grid */}
            <div className="mentors-cards">
                {mentors.map((mentor) => (
                    <div key={mentor.id} className="mentors-card">
                        {/* Photo Card */}
                        <div className="mentors-photo-card">
                            <Image
                                src={mentor.photo}
                                alt={mentor.name}
                                fill
                                className="mentors-photo"
                                sizes="(max-width: 767px) 100vw, 317px"
                            />
                        </div>

                        {/* Name & Position */}
                        <div className="mentors-info">
                            <p className="mentors-position">{mentor.position}</p>
                            <p className="mentors-name">{mentor.name}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* View More Button */}
            <div className="mentors-footer">
                <button className="mentors-view-more-btn">
                    <Image
                        src="/photos/main/view more mentors.svg"
                        alt="View More Mentors"
                        width={198}
                        height={55}
                        className="mentors-view-more-img"
                    />
                </button>
            </div>
        </section>
    )
}
