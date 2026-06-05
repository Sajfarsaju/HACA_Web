import type { TocItem } from "@/lib/blog-types"
import type { BlogBlock } from "@/lib/blog-blocks"

export type FaqItem = {
    question: string
    answer: string
}

export type BlogPost = {
    id: number | string
    slug: string
    category: string
    categorySlug: string
    date: string
    title: string
    author: string
    authorRole?: string
    authorPhotoUrl?: string
    authorBio?: string
    readTime: string
    toc?: TocItem[]
    bannerUrl?: string
    bannerAlt?: string
    content?: string
    blocks?: BlogBlock[]
    faqs?: FaqItem[]
    metaTitle?: string
    metaDescription?: string
}
