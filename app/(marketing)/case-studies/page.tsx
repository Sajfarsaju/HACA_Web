import { CaseStudyPageContent } from "@/components/case-studies/CaseStudyPageContent"
import { fetchPublicCaseStudies } from "@/lib/case-study-api"
import { buildSitePageMetadata } from "@/lib/site-page-metadata"

export const metadata = buildSitePageMetadata({
  title: "Case Studies - Haris & Co Academy",
  description:
    "Real student success stories — see how HACA students turned learning into results.",
  canonical: "https://harisandcoacademy.com/case-studies",
})

export default async function CaseStudiesPage() {
    const allCaseStudies = await fetchPublicCaseStudies()

    return (
        <main className="w-full min-h-screen bg-transparent text-white">
            <section className="w-full section-4k mx-auto flex flex-col gap-[10px] pt-[10px] md:pt-[80px] lg:pt-[120px] px-[clamp(20px,4vw,60px)] max-md:px-[20px]">
                {/* Heading container */}
                <div className="w-full max-w-[788px] mx-auto flex flex-col gap-[clamp(20px,2.5vw,20px)] max-md:gap-[20px] max-md:pb-5 max-md:px-5">
                    <h1 className="w-full font-rethink font-bold text-[clamp(26px,4vw,54px)] leading-[34px] text-center text-white m-0">
                        Case Studies
                    </h1>
                    <p className="w-full font-rethink font-bold text-[clamp(14px,1.4vw,20px)] leading-[clamp(17px,2.1vw,34px)] text-center text-[#A7ADBE] m-0">
                        Real student journeys — explore how HACA students built skills, projects, and careers.
                    </p>
                </div>

                <CaseStudyPageContent items={allCaseStudies} />
            </section>
        </main>
    )
}
