import { BlogPageContent } from "@/components/blog/BlogPageContent"
import { BLOG_POSTS, BlogPost } from "@/lib/blog-data"

export const metadata = {
  title: "Blog - Haris & Co Academy",
  description:
    "Fuel your creative and professional fire with insights on digital marketing, tech, design, and careers.",
  openGraph: {
    title: "Blog - Haris & Co Academy",
    description:
      "Fuel your creative and professional fire with insights on digital marketing, tech, design, and careers.",
    url: "https://harisandcoacademy.com/blog",
    siteName: "Haris & Co Academy",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Haris & Co Academy",
    description:
      "Fuel your creative and professional fire with insights on digital marketing, tech, design, and careers.",
  },
}

async function getDynamicBlogs(): Promise<BlogPost[]> {
    try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:5000"
        const res = await fetch(`${backendUrl}/api/admin/public-blogs`, { next: { revalidate: 0 } })
        if (!res.ok) return []
        const data: { items?: unknown[] } = await res.json()

        return (data.items || []).flatMap((blog): BlogPost[] => {
            if (!blog || typeof blog !== "object") return []
            const b = blog as Record<string, unknown>
            const idRaw = b._id
            const id = typeof idRaw === "string" || typeof idRaw === "number" ? String(idRaw) : null
            if (!id) return []

            const title = typeof b.title === "string" ? b.title : ""
            const authorName = typeof b.authorName === "string" ? b.authorName : ""
            if (!title || !authorName) return []

            const category = typeof b.category === "string" ? b.category : "Marketing"
            const createdAt =
                typeof b.createdAt === "string" || typeof b.createdAt === "number" ? new Date(b.createdAt) : new Date()

            return [
                {
                    id,
                    slug: typeof b.slug === "string" && b.slug ? b.slug : id,
                    category,
                    categorySlug: category.toLowerCase() || "marketing",
                    date: createdAt.toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }),
                    title,
                    author: authorName,
                    authorRole: typeof b.authorRole === "string" ? b.authorRole : undefined,
                    readTime: typeof b.readTime === "string" && b.readTime ? b.readTime : "5 Mins",
                    bannerUrl: typeof b.bannerUrl === "string" ? b.bannerUrl : undefined,
                },
            ]
        })
    } catch {
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
