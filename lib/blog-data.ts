import type { TocItem } from "@/lib/blog-types"

export type BlogPost = {
    id: number | string
    slug: string
    category: string
    categorySlug: string
    date: string
    title: string
    author: string
    authorRole?: string
    readTime: string
    toc?: TocItem[]
    bannerUrl?: string
    content?: string
}

const DEFAULT_TOC = [
    { number: "1", label: "Introduction" },
    { number: "2", label: "Key Concepts" },
    { number: "3", label: "Best Practices" },
    { number: "4", label: "Conclusion" },
]

export const BLOG_POSTS: BlogPost[] = [
    { id: 1, slug: "design-logo-photoshop", category: "Graphic Design", categorySlug: "design", date: "Aug 19, 2025", title: "A Complete Guide on How to Design a Logo in Photoshop", author: "Deepna K V", readTime: "5 Mins", toc: DEFAULT_TOC },
    { id: 2, slug: "uiux-logo-design", category: "UI/UX Design", categorySlug: "design", date: "Sep 04, 2025", title: "A Complete Guide on How to Design a Logo in Photoshop", author: "Deepna K V", readTime: "5 Mins", toc: DEFAULT_TOC },
    {
        id: 3,
        slug: "quality-score-google-ads",
        category: "Marketing",
        categorySlug: "marketing",
        date: "Oct 12, 2025",
        title: "What is Quality Score in Google Ads & How to Improve It",
        author: "Deepna K V",
        authorRole: "SEO Content Writer",
        readTime: "5 Mins",
        toc: [
            { number: "1", label: "So, What is Quality Score in Google Ads?" },
            { number: "2", label: "Why Should You Care About Quality Score?" },
            { number: "3", label: "How to Check Quality Score in Google Ads" },
            {
                number: "4",
                label: "A Checklist for Improving Your Quality Score",
                subItems: [
                    { number: "4.1", label: "To Improve Expected CTR" },
                    { number: "4.2", label: "To Improve Ad Relevance" },
                    { number: "4.3", label: "To Improve Landing Page Experience" },
                ],
            },
            { number: "5", label: "Wrapping Up" },
            { number: "6", label: "FAQs" },
            { number: "7", label: "Share This Article" },
        ],
    },
    { id: 4, slug: "tech-guide-1", category: "Tech", categorySlug: "tech", date: "Nov 01, 2025", title: "A Complete Guide on How to Design a Logo in Photoshop", author: "Deepna K V", readTime: "5 Mins", toc: DEFAULT_TOC },
    { id: 5, slug: "finance-basics", category: "Finance", categorySlug: "finance", date: "Nov 15, 2025", title: "A Complete Guide on How to Design a Logo in Photoshop", author: "Deepna K V", readTime: "5 Mins", toc: DEFAULT_TOC },
    { id: 6, slug: "career-guidance-1", category: "Career Guidance", categorySlug: "career-guidance", date: "Dec 01, 2025", title: "A Complete Guide on How to Design a Logo in Photoshop", author: "Deepna K V", readTime: "5 Mins", toc: DEFAULT_TOC },
    { id: 7, slug: "marketing-automation", category: "Marketing", categorySlug: "marketing", date: "Dec 10, 2025", title: "A Complete Guide on How to Design a Logo in Photoshop", author: "Deepna K V", readTime: "5 Mins", toc: DEFAULT_TOC },
    { id: 8, slug: "design-branding", category: "Design", categorySlug: "design", date: "Dec 20, 2025", title: "A Complete Guide on How to Design a Logo in Photoshop", author: "Deepna K V", readTime: "5 Mins", toc: DEFAULT_TOC },
    { id: 9, slug: "tech-guide-2", category: "Tech", categorySlug: "tech", date: "Jan 05, 2026", title: "A Complete Guide on How to Design a Logo in Photoshop", author: "Deepna K V", readTime: "5 Mins", toc: DEFAULT_TOC },
]

export function getBlogBySlug(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find((p) => p.slug === slug)
}
