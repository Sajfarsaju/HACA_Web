export const metadata = {
    title: "Blogs | HACA",
    description: "Insights and tutorials on engineering, design, and marketing from the HACA team.",
}

const blogs = [
    {
        title: "The Future of Web Development in 2026",
        excerpt: "Exploring the impact of AI and edge computing on how we build the next generation of web apps.",
        date: "Feb 10, 2026",
        category: "Engineering",
    },
    {
        title: "Why Minimalist Design Still Wins",
        excerpt: "How reducing complexity can actually increase user engagement and ROI for your digital products.",
        date: "Feb 05, 2026",
        category: "Design",
    },
    {
        title: "Mastering Growth Marketing",
        excerpt: "Data-driven strategies to scale your startup from zero to one hundred thousand users.",
        date: "Jan 28, 2026",
        category: "Marketing",
    }
]

export default function BlogPage() {
    return (
        <div className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-16 text-center">
                    Latest <span className="text-primary italic">insights</span>.
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div key={blog.title} className="group p-8 rounded-3xl border bg-card hover:bg-muted/30 transition-all">
                            <div className="text-xs font-bold text-primary mb-4 uppercase tracking-widest">{blog.category}</div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors underline decoration-transparent group-hover:decoration-primary/30 underline-offset-4">
                                {blog.title}
                            </h3>
                            <p className="text-muted-foreground mb-6 line-clamp-3">
                                {blog.excerpt}
                            </p>
                            <div className="text-sm font-medium opacity-60">{blog.date}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
