import { fetchPublicMentors } from "@/lib/mentors-api";
import { MentorsAutoScroll } from "./MentorsAutoScroll";
import type { MentorItem } from "./MentorsAutoScroll";

const FALLBACK_MENTORS: MentorItem[] = [
    {
        id: "hima",
        name: "Hima",
        role: "Google Ads Mentor",
        imageSrc: "/photos/schools/marketing/mentors/hima.svg",
    },
    {
        id: "arshad",
        name: "Arshad",
        role: "Business Development Mentor",
        imageSrc: "/photos/schools/marketing/mentors/arshad.svg",
    },
    {
        id: "jawadha",
        name: "Jawadha",
        role: "Social Media Marketing Mentor",
        imageSrc: "/photos/schools/marketing/mentors/jawadha.svg",
    },
    {
        id: "minhaj",
        name: "Minhaj",
        role: "Creative Strategy Mentor",
        imageSrc: "/photos/schools/marketing/mentors/minhaj.svg",
    },
];

const INTRO_COPY =
    "Your mentors aren't just teachers, they're digital marketers who've built brands and delivered results for companies like Kairali TMT, Walkaroo, TCS, Care n Cure Pharmacy, Volkswagen and more.";

export async function MarketingMentorsSectionShared() {
    const apiMentors = await fetchPublicMentors("Marketing School");

    const mentors: MentorItem[] =
        apiMentors.length > 0
            ? apiMentors.map((m) => ({
                  id: m._id,
                  name: m.name,
                  role: m.designation,
                  imageSrc: m.photoUrl,
              }))
            : FALLBACK_MENTORS;

    return (
        <section
            id="marketing-seo-mentors"
            className="w-full bg-white text-black"
            role="region"
            aria-labelledby="marketing-seo-mentors-heading"
        >
            <div
                className="
                    mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col gap-[clamp(28px,4vw,48px)]
                    px-[clamp(16px,4.16vw,60px)] py-[clamp(32px,4vw,48px)]
                    md:px-[clamp(24px,5vw,48px)]
                    lg:gap-12 lg:px-[60px] lg:py-[60px]
                "
            >
                <header className="flex w-full min-w-0 flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
                    <h2
                        id="marketing-seo-mentors-heading"
                        className="
                            m-0 max-w-[min(100%,520px)] text-left font-semibold tracking-[-0.04em] text-black
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[clamp(1.75rem,5vw,3.125rem)] leading-[1.05] [text-rendering:geometricPrecision]
                            lg:max-w-[min(100%,560px)] lg:text-[55px] lg:leading-[1.08]
                        "
                    >
                        <span className="block">Learn From the Best,</span>
                        <span className="block">Become the Best</span>
                    </h2>
                    <p
                        className="
                            m-0 max-w-[min(100%,560px)] text-left font-normal leading-[1.55] text-[#4A4A4A]
                            text-[clamp(15px,2vw,17px)]
                            [font-family:'Satoshi',sans-serif]
                            lg:max-w-[720px] lg:shrink-0 lg:pt-1 lg:text-left lg:text-[18px] lg:leading-[1.6]
                        "
                    >
                        <span className="lg:hidden">{INTRO_COPY}</span>
                        <span className="hidden text-left lg:inline">
                            Your mentors aren&apos;t just teachers, they&apos;re digital marketers who&apos;ve built brands and
                            <br />
                            delivered results for companies like Kairali TMT, Walkaroo, TCS, Care n Cure Pharmacy,
                            <br />
                            Volkswagen and more.
                        </span>
                    </p>
                </header>

                <MentorsAutoScroll mentors={mentors} />
            </div>
        </section>
    );
}
