import type { TocItem } from "@/lib/blog-types"
import type { BlogBlock } from "@/lib/blog-blocks"

export type CaseStudy = {
    id: number | string
    slug: string
    school: string
    schoolSlug: string
    date: string
    title: string
    author: string
    authorRole?: string
    authorPhotoUrl?: string
    authorBio?: string
    readTime: string
    studentName?: string
    batch?: string
    youtubeUrl?: string
    toc?: TocItem[]
    bannerUrl?: string
    bannerAlt?: string
    content?: string
    blocks?: BlogBlock[]
    metaTitle?: string
    metaDescription?: string
}
