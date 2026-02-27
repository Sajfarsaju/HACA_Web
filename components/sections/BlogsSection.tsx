import Image from "next/image"

/* ── Blog card data — same cover for all until real content provided ── */
const blogs = [
    {
        id: 1,
        category: "Graphic Design",
        date: "Aug 19, 2025",
        title: "A Complete Guide on How to Design a Logo in Photoshop",
    },
    {
        id: 2,
        category: "UI/UX Design",
        date: "Sep 04, 2025",
        title: "A Complete Guide on How to Design a Logo in Photoshop",
    },
    {
        id: 3,
        category: "Digital Marketing",
        date: "Oct 12, 2025",
        title: "A Complete Guide on How to Design a Logo in Photoshop",
    },
]

export function BlogsSection() {
    return (
        <section className="blg-outer" aria-label="The Learning Space">

            {/* ─── Header ─── */}
            <div className="blg-header">
                {/* Pill button — viewBox 133×64, inner pill 111×42 */}
                <button className="blg-pill-btn" aria-label="Blogs">
                    <Image
                        src="/photos/main/blogs arrow.svg"
                        alt="Blogs"
                        width={133}
                        height={64}
                        className="blg-pill-img"
                        priority
                    />
                </button>

                <h2 className="blg-heading">The Learning Space</h2>
            </div>

            {/* ─── Cards grid ─── */}
            <div className="blg-cards">
                {blogs.map((blog) => (
                    <article key={blog.id} className="blg-card">

                        {/* Cover image — 387×287.72 desktop, proportional mobile */}
                        <div className="blg-cover-wrap">
                            <Image
                                src="/photos/main/blog cover.png"
                                alt={blog.title}
                                fill
                                className="blg-cover-img"
                                sizes="(max-width: 767px) 100vw, 33vw"
                            />
                        </div>

                        {/* Card body */}
                        <div className="blg-body">

                            {/* Meta row + title */}
                            <div className="blg-content-group">

                                {/* Meta: category tag + date */}
                                <div className="blg-meta-row">
                                    <span className="blg-category">{blog.category}</span>
                                    <span className="blg-date">{blog.date}</span>
                                </div>

                                {/* Title */}
                                <h3 className="blg-title">{blog.title}</h3>
                            </div>

                            {/* Read Full Blog link — viewBox from SVG */}
                            <a href="#" className="blg-read-link" aria-label="Read full blog">
                                <Image
                                    src="/photos/main/read full blog.svg"
                                    alt="Read Full Blog"
                                    width={123}
                                    height={26}
                                    className="blg-read-img"
                                />
                            </a>

                        </div>
                    </article>
                ))}
            </div>

            {/* ─── Bottom CTA ─── */}
            <div className="blg-cta-wrap">
                <a href="#" className="blg-cta-btn" aria-label="Read more blogs">
                    <Image
                        src="/photos/main/read more blogs.svg"
                        alt="Read More Blogs"
                        width={176}
                        height={55}
                        className="blg-cta-img"
                    />
                </a>
            </div>

        </section>
    )
}
