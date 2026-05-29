import { TechYoutubeCarousel } from "@/components/layout/TechYoutubeCarousel";

export function TechYoutube() {
    return (
        <section className="relative -mb-[100px] flex min-h-auto w-full flex-col items-center justify-center gap-[36px] overflow-visible bg-transparent pt-[36px] pb-[60px] sm:mb-0 sm:min-h-[828px] sm:gap-[60px] sm:py-[100px]">
            <div className="z-10 flex flex-col items-center gap-4 px-6 text-center">
                <h2 className="max-w-[1440px] font-outfit text-[clamp(28px,5vw,60px)] font-normal leading-[1.1] tracking-[-0.02em] text-white">
                    Insights We Share on YouTube
                </h2>
                <p className="max-w-[1029px] font-outfit text-[clamp(14px,2vw,24px)] font-normal leading-[140%] tracking-[-0.2px] text-[#A7A7A7]">
                    Our YouTube content reflects ongoing lessons from work in progress, evolving trends,
                    experiments, and outcomes.
                </p>
            </div>

            <TechYoutubeCarousel className="z-10" />
        </section>
    );
}
