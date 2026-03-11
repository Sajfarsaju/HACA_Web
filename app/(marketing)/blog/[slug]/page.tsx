import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, User } from "lucide-react"
import { InThisArticle } from "@/components/blog/InThisArticle"
import { BlogAuthorBio } from "@/components/blog/BlogAuthorBio"
import { BlogShareButtons } from "@/components/blog/BlogShareButtons"
import { BLOG_POSTS, getBlogBySlug } from "@/lib/blog-data"

const BLOG_COVER_IMAGE = "/photos/main/blog cover.png"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const post = getBlogBySlug(slug)
    if (!post) return { title: "Blog | HACA" }
    return {
        title: `${post.title} | HACA Blog`,
        description: `Read ${post.title} on the HACA blog.`,
    }
}

export default async function BlogDetailPage({ params }: Props) {
    const { slug } = await params
    const post = getBlogBySlug(slug)
    if (!post) notFound()

    return (
        <div className="w-full min-h-screen bg-transparent overflow-x-hidden flex flex-col gap-2.5 md:gap-2.5 pt-2.5 md:pt-10 lg:pt-0">
            {/* Inner container */}
            <div className="flex-grow w-full max-w-[1320px] mx-auto flex flex-col gap-5 sm:gap-6 md:gap-8 lg:gap-10 pt-6 sm:pt-12 md:pt-20 lg:pt-[120px] pb-6 sm:pb-8 md:pb-10 lg:pb-10 px-4 sm:px-5 md:px-8 lg:px-[60px]">
                {/* First container: upper section + photo */}
                <div className="flex flex-col gap-5 sm:gap-8 md:gap-12 lg:gap-[67px] w-full">
                    {/* Upper container: tag + heading + author meta - mobile: px-20 */}
                    <div className="flex flex-col items-center gap-4 w-full max-w-full px-5 sm:px-0 md:px-0">
                        {/* Tag pill - mobile: py-1 px-3, desktop: py-2 px-3 - horizontally centered */}
                        <div className="w-fit inline-flex items-center gap-2.5 py-1 px-3 md:py-2 md:px-3 rounded-[100px] bg-[#FFFFFF1A] backdrop-blur-[6px] shadow-[0px_1px_1px_0px_rgba(0,3,18,0.30),0px_8px_10.9px_0px_rgba(0,3,18,0.12)]">
                            <span className="font-rethink font-semibold text-[14px] md:text-[16px] leading-[25.5px] text-center text-[#A7ADBE]">
                                Blog &gt; {post.category}
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="font-rethink font-bold text-white text-center m-0 w-full text-[26px] sm:text-[36px] md:text-[48px] lg:text-[58px] leading-[34px] sm:leading-[40px] md:leading-[52px] lg:leading-[110%] tracking-[0%] max-w-[335px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[938px] mx-auto">
                            {post.title}
                        </h1>

                        {/* Author / date / time container */}
                        <div className="flex flex-row items-center justify-between md:justify-center gap-3 md:gap-5 w-full max-w-[335px] md:max-w-[422px] mx-auto md:mx-auto">
                            <div className="flex items-center gap-2 md:gap-2.5 shrink-0">
                                <User className="w-4 h-4 md:w-5 md:h-5 text-[#A7ADBE] shrink-0" strokeWidth={1.5} />
                                <span className="font-rethink font-medium text-[#A7ADBE] text-[12px] sm:text-[14px] md:text-[16px] leading-[25.5px] whitespace-nowrap">
                                    {post.author}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 md:gap-2.5 shrink-0">
                                <Calendar className="w-4 h-4 md:w-5 md:h-5 text-[#A7ADBE] shrink-0" strokeWidth={1.5} />
                                <span className="font-rethink font-medium text-[#A7ADBE] text-[12px] sm:text-[14px] md:text-[16px] leading-[25.5px] whitespace-nowrap">
                                    {post.date}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 md:gap-2.5 shrink-0">
                                <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#A7ADBE] shrink-0" strokeWidth={1.5} />
                                <span className="font-rethink font-medium text-[#A7ADBE] text-[12px] sm:text-[14px] md:text-[16px] leading-[25.5px] whitespace-nowrap">
                                    {post.readTime}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Desktop: [Image + Article] | [In this article]. Mobile: [Image] [In this article] [Article] */}
                    <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 lg:gap-10 w-full items-start">
                        {/* Left column (desktop) / stacks first on mobile */}
                        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full lg:flex-1 min-w-0">
                            {/* Blog photo - card style */}
                            <div className="w-full max-w-[871px] mx-auto lg:mx-0">
                                <div className="relative w-full aspect-[871/514] overflow-hidden rounded-[10.63px] sm:rounded-[14px] md:rounded-[18px] lg:rounded-[20px] bg-white shadow-lg">
                                    <Image
                                        src={BLOG_COVER_IMAGE}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 871px"
                                        priority
                                    />
                                </div>
                            </div>
                            {/* Third container - main blog content (desktop) */}
                            <div className="hidden lg:flex flex-col gap-[30px] w-full max-w-[878px] mx-auto lg:mx-0">
                                {/* Top container: intro paragraphs */}
                                <div className="flex flex-col gap-[20px]">
                                    <p className="font-rethink font-medium text-[20px] leading-[34px] text-[#A7ADBE] m-0">
                                        Let’s be honest. We’ve all been there. You’ve set up your Google Ads campaign, your ads are finally live, but you’re tense every time you check the dashboard. The clicks are costing a fortune, and your ads are stuck on page two, getting ignored. You start to wonder if this is even worth it.
                                    </p>
                                    <p className="font-rethink font-medium text-[20px] leading-[34px] text-[#A7ADBE] m-0">
                                        Before you give up, it is time to learn about this powerful tool. A single metric that Google uses to decide whether to reward you with cheaper clicks and better ad positions.
                                        <br />
                                        It’s called Quality Score.
                                        <br />
                                        Understanding this score is like having a key to achieve better performance and a higher return on investment. So, what is Quality Score in Google Ads?
                                        <br />
                                        In this guide, we’ll understand this crucial metric, show you how to find it, and provide actionable steps to improve it, transforming your campaigns into lead-generating machines.
                                    </p>
                                </div>

                                {/* Center container: What is Quality Score */}
                                <div className="flex flex-col gap-[30px]">
                                    <h2 className="font-rethink font-bold text-[40px] leading-[110%] text-white m-0 max-w-[730px]">
                                        So, What is Quality Score in Google Ads?
                                    </h2>

                                    <div className="flex flex-col gap-[10px] text-[#A7ADBE] font-rethink font-medium text-[20px] leading-[34px]">
                                        <p className="m-0">
                                            Think of Quality Score as a credit score for your ads. Google gives each of your keywords a score from 1 to 10. A high score tells Google, “Hey, this ad is high-quality, relevant, and genuinely helpful to users!” A low score, well, it does the opposite.
                                        </p>
                                        <p className="m-0">
                                            It’s Google’s way of ensuring that people who use their search engine have a good experience. They want to show great ads that lead to great websites. Your Quality Score is their internal report card on how well you’re doing that.
                                        </p>
                                        <p className="m-0">This grade is based on three key things:</p>
                                        <ul className="m-0 pl-6 list-disc flex flex-col gap-[6px]">
                                            <li>
                                                <span className="font-semibold text-white">
                                                    Expected Click-Through Rate (CTR):
                                                </span>{" "}
                                                This is Google’s prediction of how likely someone is to click your ad when it’s shown for a particular keyword. It’s based on your past CTR performance. If your ad is compelling and matches what people are searching for, it’ll naturally get more clicks.
                                            </li>
                                            <li>
                                                <span className="font-semibold text-white">Ad Relevance:</span> This one’s simple. Is your ad a good match for the keyword? If someone searches for “women’s hiking boots,” your ad shouldn’t be talking about men’s dress shoes. Google checks for this alignment to ensure users find what they’re looking for.
                                            </li>
                                            <li>
                                                <span className="font-semibold text-white">Landing Page Experience:</span> This component evaluates how relevant, transparent, and easy-to-navigate your landing page is for users who click your ad. A good landing page delivers on the promise made in the ad, loads quickly, is mobile-friendly, and provides a smooth user experience.
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Illustration + source */}
                                    <div className="flex flex-col gap-[10px] w-full">
                                        <div className="w-full max-w-[878px]">
                                            <div className="relative w-full aspect-[878/473] overflow-hidden rounded-[20px] bg-[#11152B]">
                                                <Image
                                                    src={BLOG_COVER_IMAGE}
                                                    alt="Quality Score illustration"
                                                    fill
                                                    className="object-cover"
                                                    sizes="878px"
                                                />
                                            </div>
                                        </div>
                                        <p className="font-rethink font-medium text-[20px] leading-[34px] text-[#A7ADBE] m-0">
                                            Source
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom container: Why you should care */}
                                <div className="flex flex-col gap-[30px]">
                                    <h2 className="font-rethink font-bold text-[40px] leading-[110%] text-white m-0">
                                        Why Should You Care About Quality Score?
                                    </h2>
                                    <p className="font-rethink font-medium text-[20px] leading-[34px] text-[#A7ADBE] m-0">
                                        Ignoring your Quality Score is like trying to drive with the handbrake on. A low score actively works against you, while a high score provides two big advantages:
                                        <br />
                                        <br />
                                        <span className="font-semibold text-white">Higher Ad Rank:</span> Your ad’s position on the search results page is based on its Max CPC Bid and Quality Score. This means that you can beat a competitor even if they bid more than you if you have a higher Quality Score!
                                        <br />
                                        <span className="font-semibold text-white">Lower Cost-Per-Click (CPC):</span> Google gives advertisers with high Quality Scores a break on their CPC. You may pay less per click than a rival with a low score, which would help your budget go further and provide you with a better return on investment.
                                    </p>

                                    <div className="flex flex-col gap-[10px] w-full">
                                        <div className="w-full max-w-[878px]">
                                            <div className="relative w-full aspect-[878/473] overflow-hidden rounded-[20px] bg-[#11152B]">
                                                <Image
                                                    src={BLOG_COVER_IMAGE}
                                                    alt="Quality Score performance chart"
                                                    fill
                                                    className="object-cover"
                                                    sizes="878px"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right sidebar: In this article + author bio + share buttons (desktop only) */}
                        <aside className="w-full lg:w-[384px] lg:min-w-[384px] shrink-0 flex flex-col items-center lg:items-start gap-5 lg:gap-8 lg:sticky lg:top-24">
                            {post.toc && post.toc.length > 0 && (
                                <div className="w-full flex justify-center lg:justify-start">
                                    <InThisArticle items={post.toc} />
                                </div>
                            )}
                            {/* Center container: author card (desktop) */}
                            <BlogAuthorBio author={post.author} authorRole={post.authorRole} />
                            {/* Bottom container: share buttons (desktop) */}
                            <BlogShareButtons />
                        </aside>

                        {/* Article content - mobile/tablet version of third container */}
                        <div className="flex lg:hidden flex-col gap-4 w-full px-5">
                            {/* Top container */}
                            <div className="flex flex-col gap-[10px]">
                                <p className="font-rethink font-medium text-[16px] leading-[27px] text-[#A7ADBE] m-0">
                                    Let’s be honest. We’ve all been there. You’ve set up your Google Ads campaign, your ads are finally live, but you’re tense every time you check the dashboard. The clicks are costing a fortune, and your ads are stuck on page two, getting ignored. You start to wonder if this is even worth it.
                                </p>
                                <p className="font-rethink font-medium text-[16px] leading-[27px] text-[#A7ADBE] m-0">
                                    Before you give up, it is time to learn about this powerful tool. A single metric that Google uses to decide whether to reward you with cheaper clicks and better ad positions.
                                    <br />
                                    It’s called Quality Score.
                                    <br />
                                    Understanding this score is like having a key to achieve better performance and a higher return on investment. So, what is Quality Score in Google Ads?
                                    <br />
                                    In this guide, we’ll understand this crucial metric, show you how to find it, and provide actionable steps to improve it, transforming your campaigns into lead-generating machines.
                                </p>
                            </div>

                            {/* Center container */}
                            <div className="flex flex-col gap-[14px]">
                                <h2 className="font-rethink font-bold text-[20px] leading-[110%] text-white m-0 max-w-[249px]">
                                    So, What is Quality Score in Google Ads?
                                </h2>
                                <div className="flex flex-col gap-[8px] text-[#A7ADBE] font-rethink font-medium text-[16px] leading-[27px]">
                                    <p className="m-0">
                                        Think of Quality Score as a credit score for your ads. Google gives each of your keywords a score from 1 to 10. A high score tells Google, “Hey, this ad is high-quality, relevant, and genuinely helpful to users!” A low score, well, it does the opposite. It’s Google’s way of ensuring that people who use their search engine have a good experience. They want to show great ads that lead to great websites. Your Quality Score is their internal report card on how well you’re doing that.
                                    </p>
                                    <p className="m-0">This grade is based on three key things:</p>
                                    <ul className="m-0 pl-5 list-disc flex flex-col gap-[4px]">
                                        <li>
                                            <span className="font-semibold text-white">
                                                Expected Click-Through Rate (CTR):
                                            </span>{" "}
                                            This is Google’s prediction of how likely someone is to click your ad when it’s shown for a particular keyword. It’s based on your past CTR performance. If your ad is compelling and matches what people are searching for, it’ll naturally get more clicks.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-white">Ad Relevance:</span> This one’s simple. Is your ad a good match for the keyword? If someone searches for “women’s hiking boots,” your ad shouldn’t be talking about men’s dress shoes. Google checks for this alignment to ensure users find what they’re looking for.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-white">
                                                Landing Page Experience:
                                            </span>{" "}
                                            This component evaluates how relevant, transparent, and easy-to-navigate your landing page is for users who click your ad. A good landing page delivers on the promise made in the ad, loads quickly, is mobile-friendly, and provides a smooth user experience.
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-[10px]">
                                    <div className="w-full max-w-[335px]">
                                        <div className="relative w-full aspect-[335/180.47] overflow-hidden rounded-[8.62px] bg-[#11152B]">
                                            <Image
                                                src={BLOG_COVER_IMAGE}
                                                alt="Quality Score illustration"
                                                fill
                                                className="object-cover"
                                                sizes="335px"
                                            />
                                        </div>
                                    </div>
                                    <p className="font-rethink font-medium text-[18px] leading-[34px] text-[#A7ADBE] m-0">
                                        Source
                                    </p>
                                </div>
                            </div>

                            {/* Bottom container */}
                            <div className="flex flex-col gap-[16px]">
                                <h2 className="font-rethink font-bold text-[20px] leading-[110%] text-white m-0">
                                    Why Should You Care About Quality Score?
                                </h2>
                                <p className="font-rethink font-medium text-[16px] leading-[27px] text-[#A7ADBE] m-0">
                                    Ignoring your Quality Score is like trying to drive with the handbrake on. A low score actively works against you, while a high score provides two big advantages:
                                    <br />
                                    <br />
                                    <span className="font-semibold text-white">Higher Ad Rank:</span> Your ad’s position on the search results page is based on its Max CPC Bid and Quality Score. This means that you can beat a competitor even if they bid more than you if you have a higher Quality Score!
                                    <br />
                                    <span className="font-semibold text-white">Lower Cost-Per-Click (CPC):</span> Google gives advertisers with high Quality Scores a break on their CPC. You may pay less per click than a rival with a low score, which would help your budget go further and provide you with a better return on investment.
                                </p>

                                <div className="flex flex-col gap-[10px]">
                                    <div className="w-full max-w-[335px]">
                                        <div className="relative w-full aspect-[335/180.47] overflow-hidden rounded-[8.62px] bg-[#11152B]">
                                            <Image
                                                src={BLOG_COVER_IMAGE}
                                                alt="Quality Score performance chart"
                                                fill
                                                className="object-cover"
                                                sizes="335px"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
