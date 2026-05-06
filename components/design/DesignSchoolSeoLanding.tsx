import Link from "next/link";
import {
    DESIGN_SCHOOL_SEO_PAGES,
    DESIGN_SCHOOL_SEO_PATHS,
    designSchoolSeoJsonLd,
    type DesignSchoolSeoSlug,
} from "@/lib/design-school-seo";
import { DesignStatsSection } from "@/components/design/DesignStatsSection";

const vcNudge = { fontFamily: '"VC Nudge Trial Normal", sans-serif' } as const;

function slugToLabel(slug: DesignSchoolSeoSlug): string {
    return DESIGN_SCHOOL_SEO_PAGES[slug].h1.replace(/\s+/g, " ").trim();
}

export function DesignSchoolSeoLanding({ slug }: { slug: DesignSchoolSeoSlug }) {
    const page = DESIGN_SCHOOL_SEO_PAGES[slug];
    const jsonLd = designSchoolSeoJsonLd(slug);
    const others = DESIGN_SCHOOL_SEO_PATHS.filter((p) => p !== `/${slug}`);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <header className="w-full max-w-[900px] mx-auto px-6 pt-6 pb-4 md:px-[60px] md:pt-10 md:pb-8 text-center">
                {page.eyebrow ? (
                    <p
                        className="text-[14px] md:text-[16px] text-[#FF5C00] font-medium uppercase tracking-wide mb-3"
                        style={vcNudge}
                    >
                        {page.eyebrow}
                    </p>
                ) : null}
                <h1
                    className="text-[clamp(28px,5vw,48px)] leading-[105%] text-black font-semibold capitalize"
                    style={{ fontFamily: '"Darker Grotesque", sans-serif' }}
                >
                    {page.h1}
                </h1>
            </header>

            <section className="w-full max-w-[800px] mx-auto px-6 md:px-[60px] pb-8 space-y-4 text-[16px] md:text-[18px] leading-[160%] text-[#1a1a1a]">
                {page.intro.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
                {page.highlights?.length ? (
                    <ul className="list-disc pl-5 space-y-2 pt-2">
                        {page.highlights.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                ) : null}
            </section>

            <div className="w-full flex flex-col sm:flex-row gap-3 justify-center items-center px-6 pb-10">
                <Link
                    href="/contact"
                    className="inline-flex items-center justify-center min-w-[200px] h-[52px] rounded-[50px] bg-[#FF5C00] text-white text-[16px] font-medium px-8 transition-opacity hover:opacity-90"
                    style={vcNudge}
                >
                    Enquire now
                </Link>
                <Link
                    href="/design-school/courses"
                    className="inline-flex items-center justify-center min-w-[200px] h-[52px] rounded-[50px] border border-[#FF5C00] text-black text-[16px] font-medium px-8 transition-colors hover:bg-[#FF5C00]/10"
                    style={vcNudge}
                >
                    View all courses
                </Link>
            </div>

            <DesignStatsSection />

            <section className="w-full max-w-[1100px] mx-auto px-6 py-14 md:px-[60px] md:py-16">
                <h2
                    className="text-[24px] md:text-[32px] font-semibold text-center mb-8 md:mb-10"
                    style={{ fontFamily: '"Darker Grotesque", sans-serif' }}
                >
                    More design school programs
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                    {others.map((path) => {
                        const s = path.slice(1) as DesignSchoolSeoSlug;
                        return (
                            <li key={path}>
                                <Link
                                    href={path}
                                    className="block rounded-xl border border-black/10 bg-white px-4 py-4 text-[15px] md:text-[16px] font-medium text-black hover:border-[#FF5C00] hover:text-[#FF5C00] transition-colors"
                                    style={vcNudge}
                                >
                                    {slugToLabel(s)}
                                </Link>
                            </li>
                        );
                    })}
                    <li className="sm:col-span-2">
                        <Link
                            href="/design-school"
                            className="block rounded-xl border border-dashed border-[#8F56FF]/40 bg-[#8F56FF]/5 px-4 py-4 text-center text-[15px] md:text-[16px] font-medium text-[#8F56FF] hover:bg-[#8F56FF]/10 transition-colors"
                            style={vcNudge}
                        >
                            Design School home →
                        </Link>
                    </li>
                </ul>
            </section>
        </>
    );
}
