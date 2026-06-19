import type { Metadata } from "next"
import { CoursesPageClient } from "@/components/courses/CoursesPageClient"

export const metadata: Metadata = {
    title: "Courses | HACA",
    description:
        "Explore practical upskilling courses in digital marketing, tech, and design at HACA.",
}

export default function CoursesPage() {
    return (
        <main className="w-full min-h-screen bg-transparent text-white">
            <CoursesPageClient />
        </main>
    )
}

