import { BlogPageContent } from "@/components/blog/BlogPageContent"
import { BLOG_POSTS, BlogPost } from "@/lib/blog-data"

export const metadata = {
    title: "Blogs | HACA",
    description: "Insights and tutorials on engineering, design, and marketing from the HACA team.",
}

async function getDynamicBlogs(): Promise<BlogPost[]> {
    try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:5000"
        const res = await fetch(`${backendUrl}/api/admin/public-blogs`, { next: { revalidate: 0 } })
        if (!res.ok) return []
        const data = await res.json()

        return (data.items || []).map((blog: any) => ({
            id: blog._id.toString(),
            slug: blog._id.toString(), // Use ID as the string slug for dynamic routing
            category: blog.category,
            categorySlug: blog.category?.toLowerCase() || "marketing",
            date: new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
            title: blog.title,
            author: blog.authorName,
            authorRole: blog.authorRole,
            readTime: blog.readTime || "5 Mins",
            bannerUrl: blog.bannerUrl,
        }))
    } catch (e) {
        return []
    }
}

export default async function BlogPage() {
    const dynamicBlogs = await getDynamicBlogs()
    const allBlogs = [...dynamicBlogs, ...BLOG_POSTS]

    return (
        <main className="w-full min-h-screen bg-transparent text-white">
            <section className="w-full section-4k mx-auto flex flex-col gap-[10px] pt-[10px] md:pt-[80px] lg:pt-[120px] px-[clamp(20px,4vw,60px)] max-md:px-[20px]">
                {/* Heading container */}
                <div className="w-full max-w-[788px] mx-auto flex flex-col gap-[clamp(20px,2.5vw,20px)] max-md:gap-[20px] max-md:pb-5 max-md:px-5">
                    <h1 className="w-full font-rethink font-bold text-[clamp(26px,4vw,54px)] leading-[34px] text-center text-white m-0">
                        Blogs
                    </h1>
                    <p className="w-full font-rethink font-bold text-[clamp(14px,1.4vw,20px)] leading-[clamp(17px,2.1vw,34px)] text-center text-[#A7ADBE] m-0">
                        Short, clear, and helpful blogs that explain marketing, design, tech, finance, and career tips in the easiest way possible.
                    </p>
                </div>

                {/* Category filter + blog cards (filtering wired) */}
                <BlogPageContent blogs={allBlogs} />
            </section>
        </main>
    )
}
