"use client"

import { useState } from "react"
import { BlogCategoryFilter } from "@/components/blog/BlogCategoryFilter"
import { BlogCardsContainer } from "@/components/blog/BlogCardsContainer"
import { BlogPost } from "@/lib/blog-data"

export function BlogPageContent({ blogs }: { blogs: BlogPost[] }) {
    const [activeCategory, setActiveCategory] = useState<string>("all")

    return (
        <>
            <div className="w-full min-w-0 overflow-x-hidden">
                <BlogCategoryFilter value={activeCategory} onChange={setActiveCategory} />
            </div>
            <BlogCardsContainer activeCategory={activeCategory} blogs={blogs} />
        </>
    )
}
