import { NotAvailableContent } from "@/components/sections/NotAvailableContent"

export const metadata = {
    title: "No Longer Available | HACA",
    description: "This service is no longer available. Explore other services at HACA.",
    robots: { index: false, follow: true },
}

export default function CreatorsClubPage() {
    return <NotAvailableContent />
}
