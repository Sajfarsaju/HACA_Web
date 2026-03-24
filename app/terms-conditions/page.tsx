import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms & Conditions | HACA",
    description: "Terms & Conditions for HARIS AND ACADEMY FOR SKILLS PRIVATE LIMITED (HACA).",
}

const INTRO_POINTS = [
    "This is a legal binding agreement between the user/student/learner of our programs and HARIS AND ACADEMY FOR SKILLS PRIVATE LIMITED stating the terms that govern the use of the platform as defined/stated on this page.",
    "The website Haris&co academy and the information, services, and other materials contained therein are provided and operated by Haris&Co Academy.",
    "HARIS AND ACADEMY FOR SKILLS PRIVATE LIMITED offers specially designed and curated online/offline higher education courses that are industry-relevant certification programs and career assistance services.",
    "Please review our Terms of Use, Privacy Policy, and other policies available on the Platform that govern the use of the Platform and Programs. By accepting these Terms in any manner or accessing the website, you consent, agree and undertake to abide, be bound by, and adhere to the Terms and if you do not agree to these Terms, you are not entitled to avail of/use the Programs and any use thereafter shall be unauthorized.",
    "These Terms shall apply to HACA hosted web, Recorded courses, WhatsApp/Telegram groups, Facebook groups, Instagram pages, Facebook pages, email/SMS/phone communications, and other social media forums hosted by HACA, which shall be deemed to be part of the ‘Platform’. You acknowledge that certain parts of the Platform, as mentioned above, are provided by third-party service providers, and you agree to abide by their terms and conditions. HACA shall not be responsible for any disruption of services caused by such third-party service providers.",
    "We may change these Terms from time to time without prior notice. You should review this page regularly. Your continued use of the Platform and Programs after changes have been made will be taken to indicate that you have read and accepted those changes. You should not use the Platform or Programs if you are not happy with any changes to these Terms.",
    "HACA (HARIS AND ACADEMY FOR SKILLS PRIVATE LIMITED) makes no representations that the Platform operates (or is legally permitted to operate) in all geographic areas, or that the Platform or information, services, or products offered through the Platform are appropriate or available for use in other locations. Accessing the Platform from territories where the Platform or any content or functionality of the Platform or its portions thereof is illegal, is expressly prohibited. If you choose to access the Platform, you agree and acknowledge that you do so on your own initiative and at your own risk and that you are solely responsible for compliance with all applicable laws.",
    "The minimum age to join any course at HACA is 15 years. There is no maximum age.",
    "It is the sole responsibility of the user enrolling into a Program to check the accuracy and evaluate the suitability and relevance of the Program elected.",
    "A student’s registration and enrollment for any course at HACA are a binding agreement to finish the course and to pay the full fees.",
    "The application form must be signed to show the student’s agreement to follow HACA terms and conditions.",
    "You agree that HACA shall under no circumstance be liable to you in the event of non-availability of the Platform or any portion thereof occasioned by Act of God, war, disease, revolution, epidemic, pandemic, lockdown, riot, civil commotion, strike, lockout, flood, fire, satellite failure, failure of any public utility, man-made disaster or any other cause whatsoever beyond the control of HACA.",
    "HARIS AND ACADEMY FOR SKILLS PRIVATE LIMITED reserves the right to plan and alter the curriculum and its flow as per industry requirements/standards. Choice of trainers for courses offered is at HACAs discretion.",
]

const REFUND_POLICY = [
    "Refund After Admission If a refund request is submitted any time after admission, 10% of the total course fee will be deducted. The balance amount will be refunded to the student.",
    "Refund Before Orientation If a refund request is submitted within 10 days before the scheduled orientation, 20% of the total course fee will be deducted. The remaining amount will be refunded.",
    "No Refund After Orientation Once the orientation has been conducted, no refund will be permitted under any circumstances.",
    "Batch Transfer Policy Batch transfer will be allowed only for students who have paid the full course fee and only within one month from the date of admission.",
    "Course Validity The course validity period is one year from the date of admission. Students must complete their course within this timeframe.",
]

export default function TermsAndConditionsPage() {
    return (
        <div className="w-full flex justify-center pt-[clamp(18px,6vw,24px)] md:pt-[clamp(120px,8vw,220px)] pb-[80px]">
            <div className="w-full max-w-[1440px] px-[clamp(16px,5vw,20px)] md:px-[clamp(20px,4.4vw,64px)] flex flex-col items-center gap-[50px]">
                <div className="w-full max-w-[1312px] flex flex-col items-center gap-[12px] md:gap-[30px]">
                    <h1 className="w-full max-w-[clamp(220px,70vw,520px)] md:max-w-[788px] font-rethink font-medium text-[26px] md:text-[58px] leading-[34px] tracking-[0] text-center align-middle text-white m-0">
                        Terms &amp; Conditions
                    </h1>

                    {/* Desktop */}
                    <div className="hidden md:flex w-full max-w-[1312px] flex-col gap-[20px]">
                        <div className="w-full font-rethink text-[20px] leading-[34px] tracking-[0] align-middle text-[#A7ADBE]">
                            <div className="font-semibold text-white">Introduction</div>
                            <div className="font-medium mt-[32px] flex flex-col gap-[20px]">
                                {INTRO_POINTS.map((point, idx) => (
                                    <div key={idx} className="flex gap-[12px]">
                                        <span className="shrink-0 leading-[34px]">•</span>
                                        <div className="min-w-0">{point}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full font-rethink text-[20px] leading-[34px] tracking-[0] align-middle text-[#A7ADBE] mt-[24px]">
                            <div className="font-semibold text-white">Refund Policy</div>
                            <div className="font-semibold mt-[32px] flex flex-col gap-[20px]">
                                {REFUND_POLICY.map((item, idx) => (
                                    <div key={idx}>{idx + 1}. {item}</div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile */}
                    <div className="md:hidden w-full max-w-[clamp(335px,92vw,520px)] flex flex-col gap-[20px] font-rethink text-[14px] leading-[34px] tracking-[0] align-middle text-[#A7ADBE]">
                        <div>
                            <div className="font-semibold text-white">Introduction</div>
                            <div className="font-medium mt-[32px] flex flex-col gap-[16px]">
                                {INTRO_POINTS.map((point, idx) => (
                                    <div key={idx} className="flex gap-[12px]">
                                        <span className="shrink-0 leading-[34px]">•</span>
                                        <div className="min-w-0">{point}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-[24px]">
                            <div className="font-semibold text-white">Refund Policy</div>
                            <div className="font-semibold mt-[32px] flex flex-col gap-[16px]">
                                {REFUND_POLICY.map((item, idx) => (
                                    <div key={idx}>{idx + 1}. {item}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

