import { BlogPageContent } from "@/components/blog/BlogPageContent"

export const metadata = {
    title: "Blogs | HACA",
    description: "Insights and tutorials on engineering, design, and marketing from the HACA team.",
}

export default function BlogPage() {
    return (
        <main className="w-full min-h-screen bg-transparent text-white">
            <section className="w-full section-4k mx-auto flex flex-col gap-[10px] pt-[10px] px-[clamp(20px,4vw,60px)] max-md:px-[20px]">
                {/* Heading container */}
                <div className="w-full max-w-[788px] mx-auto flex flex-col gap-[clamp(20px,2.5vw,20px)] max-md:gap-[36px] max-md:pb-5 max-md:px-5">
                    <h1 className="w-full font-rethink font-bold text-[clamp(26px,4vw,58px)] leading-[34px] text-center text-white m-0">
                        Blogsss
                    </h1>
                    <p className="w-full font-rethink font-bold text-[clamp(14px,1.4vw,20px)] leading-[clamp(17px,2.1vw,34px)] text-center text-[#A7ADBE] m-0">
                        Short, clear, and helpful blogs that explain marketing, design, tech, finance, and career tips in the easiest way possible.
                    </p>
                </div>

                {/* Category filter + blog cards (filtering wired) */}
                <BlogPageContent />
            </section>
        </main>
    )
}
