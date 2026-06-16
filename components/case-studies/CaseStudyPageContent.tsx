"use client"

import { useState } from "react"
import { CaseStudySchoolFilter } from "@/components/case-studies/CaseStudySchoolFilter"
import { CaseStudyCardsContainer } from "@/components/case-studies/CaseStudyCardsContainer"
import { CaseStudy } from "@/lib/case-study-data"

export function CaseStudyPageContent({ items }: { items: CaseStudy[] }) {
    const [activeSchool, setActiveSchool] = useState<string>("all")

    return (
        <>
            <div className="w-full min-w-0 overflow-x-hidden">
                <CaseStudySchoolFilter value={activeSchool} onChange={setActiveSchool} />
            </div>
            <CaseStudyCardsContainer activeSchool={activeSchool} items={items} />
        </>
    )
}
