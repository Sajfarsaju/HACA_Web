"use client"

import { useState } from "react"
import { BlogCategoryFilter } from "@/components/blog/BlogCategoryFilter"
import { BlogCardsContainer } from "@/components/blog/BlogCardsContainer"

export function BlogPageContent() {
    const [activeCategory, setActiveCategory] = useState<string>("all")

    return (
        <>
            <div className="w-full min-w-0 overflow-x-hidden">
                <BlogCategoryFilter value={activeCategory} onChange={setActiveCategory} />
            </div>
            <BlogCardsContainer activeCategory={activeCategory} />
        </>
    )
}
