import { ArticleNotAvailableContent } from "@/components/sections/ArticleNotAvailableContent"

export const metadata = {
    title: "Article No Longer Available | HACA Blog",
    description: "This article is no longer available. Visit our blog to explore our latest articles.",
    robots: { index: false, follow: true },
}

export default function NonCashExpensesPage() {
    return <ArticleNotAvailableContent />
}
