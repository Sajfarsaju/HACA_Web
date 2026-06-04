import { TechMentorsCarousel, type TechMentorCard } from "@/components/layout/TechMentorsCarousel";

type Props = {
    mentors: TechMentorCard[];
};

export function TechMentors({ mentors }: Props) {
    return (
        <section className="relative -mb-[120px] flex h-auto min-h-[828px] w-full flex-col items-center gap-[60px] overflow-hidden bg-transparent px-[clamp(16px,4vw,60px)] pb-[80px] pt-0 sm:mb-0 lg:pt-[10px] xl:pt-[60px]">
            <div className="relative z-10 flex w-full flex-col items-center gap-[60px]">
                <div className="flex max-w-[938px] flex-col items-center gap-6 text-center">
                    <h2 className="m-0 font-outfit text-[clamp(32px,5vw,60px)] font-normal capitalize leading-[62px] tracking-[-0.02em] text-white">
                        Your Mentors
                    </h2>
                    <p className="m-0 max-w-[800px] font-outfit text-[clamp(16px,2vw,24px)] font-normal leading-[33.6px] tracking-[-0.2px] text-[#A7A7A7]">
                        You&apos;ll learn from people who&apos;ve built products, written code, and solved
                        real problems.
                    </p>
                </div>

                <TechMentorsCarousel className="w-full" initialMentors={mentors} />
            </div>
        </section>
    );
}
