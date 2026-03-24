import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy | HACA",
    description: "Privacy Policy for HARIS AND ACADEMY FOR SKILLS PRIVATE LIMITED (HACA).",
}

const CONTACT_EMAIL = "info@harisandcoacdemy.com"

const DESKTOP_TEXT_BEFORE_EMAIL = `At HARIS AND ACADEMY FOR SKILLS PRIVATE LIMITED, we are committed to protecting the privacy and security of our users. This Privacy Policy outlines the types of information we collect, how we use and protect that information, and your rights and choices regarding your personal data. Please read this policy carefully to understand our practices regarding your personal information.
1. Information We Collect:
We may collect the following types of information when you use our website:
– Personal information: Name, email address, contact details, and any other information you voluntarily provide to us.
– Non-personal information: Anonymous usage data, IP addresses, browser type, operating system, and other technical information.
NB: When you voluntarily send us electronic mail / fillup the form, we will keep a record of this information so that we can respond to you. We only collect information from you when you register on our site or fill out a form. Also, when filling out a form on our site, you may be asked to enter your: name, e-mail address or phone number. You may, however, visit our site anonymously. In case you have submitted your personal information and contact details, we reserve the rights to Call, SMS, Email or WhatsApp about our products and offers, even if your number has DND activated on it.
2. Use of Information:
We may use the collected information for the following purposes:
– To provide and improve our services, including personalized content and recommendations.
– To communicate with you regarding updates, announcements, and marketing materials related to our academy.
– To analyze and monitor website usage, trends, and statistics.
– To comply with legal obligations or enforce our terms of service.
3. Data Sharing and Disclosure:
We may share your information with third parties in the following circumstances:
– With your consent or as instructed by you.
– With service providers who assist us in operating our website and providing our services.
– In response to a legal request or to comply with applicable laws, regulations, or court orders.
– If we believe it is necessary to protect our rights, property, or safety, or the rights, property, or safety of others.
4. Data Security:
We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
5. Your Rights and Choices:
You have certain rights regarding your personal information, including the right to access, update, or delete your data. You may also have the right to object to or restrict certain data processing activities. To exercise these rights or make inquiries, please contact us using the information provided below.
6. Cookies and Tracking Technologies:
We may use cookies and similar tracking technologies to enhance your browsing experience and gather information about how you use our website. You can adjust your browser settings to refuse cookies or indicate when a cookie is being sent.
7. Third-Party Links:
Our website may contain links to third-party websites that are not under our control. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of those third parties.
8. Updates to this Privacy Policy:
We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant updates by posting a prominent notice on our website or sending you a direct communication.
9. Contact Us:
If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at `

const AFTER_EMAIL = `.
By using our website, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your personal information as described herein.`

const MOBILE_TEXT_BEFORE_EMAIL = `At HARIS AND ACADEMY FOR SKILLS PRIVATE LIMITED, we are committed to protecting the privacy and security of our users. This Privacy Policy outlines the types of information we collect, how we use and protect that information, and your rights and choices regarding your personal data. Please read this policy carefully to understand our practices regarding your personal information.

1. Information We Collect:
We may collect the following types of information when you use our website:
– Personal information: Name, email address, contact details, and any other information you voluntarily provide to us.
– Non-personal information: Anonymous usage data, IP addresses, browser type, operating system, and other technical information.

NB: When you voluntarily send us electronic mail / fillup the form, we will keep a record of this information so that we can respond to you. We only collect information from you when you register on our site or fill out a form. Also, when filling out a form on our site, you may be asked to enter your: name, e-mail address or phone number. You may, however, visit our site anonymously. In case you have submitted your personal information and contact details, we reserve the rights to Call, SMS, Email or WhatsApp about our products and offers, even if your number has DND activated on it.

2. Use of Information:
We may use the collected information for the following purposes:
– To provide and improve our services, including personalized content and recommendations.
– To communicate with you regarding updates, announcements, and marketing materials related to our academy.
– To analyze and monitor website usage, trends, and statistics.
– To comply with legal obligations or enforce our terms of service.

3. Data Sharing and Disclosure:
We may share your information with third parties in the following circumstances:
– With your consent or as instructed by you.
– With service providers who assist us in operating our website and providing our services.
– In response to a legal request or to comply with applicable laws, regulations, or court orders.
– If we believe it is necessary to protect our rights, property, or safety, or the rights, property, or safety of others.

4. Data Security:
We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.

5. Your Rights and Choices:
You have certain rights regarding your personal information, including the right to access, update, or delete your data. You may also have the right to object to or restrict certain data processing activities. To exercise these rights or make inquiries, please contact us using the information provided below.

6. Cookies and Tracking Technologies:
We may use cookies and similar tracking technologies to enhance your browsing experience and gather information about how you use our website. You can adjust your browser settings to refuse cookies or indicate when a cookie is being sent.

7. Third-Party Links:
Our website may contain links to third-party websites that are not under our control. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of those third parties.

8. Updates to this Privacy Policy:
We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant updates by posting a prominent notice on our website or sending you a direct communication.

9. Contact Us:
If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at `

export default function PrivacyPolicyPage() {
    return (
        <div className="w-full flex justify-center pt-[clamp(18px,6vw,24px)] md:pt-[clamp(120px,8vw,220px)] pb-[80px]">
            <div className="w-full max-w-[1440px] px-[clamp(16px,5vw,20px)] md:px-[clamp(20px,4.4vw,64px)] flex flex-col items-center gap-[50px]">
                <div className="w-full max-w-[1312px] flex flex-col items-center gap-[12px] md:gap-[30px]">
                    <h1 className="w-full max-w-[clamp(161px,60vw,360px)] md:max-w-[788px] font-rethink font-bold text-[26px] md:text-[58px] leading-[34px] tracking-[0] text-center align-middle text-white m-0">
                        Privacy Policy
                    </h1>

                    {/* Desktop: keep the exact previous flow */}
                    <div className="hidden md:block w-full max-w-[1312px] font-rethink font-medium text-[20px] leading-[34px] tracking-[0] align-middle text-[#A7ADBE] whitespace-pre-line">
                        {DESKTOP_TEXT_BEFORE_EMAIL}
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="underline underline-offset-2 decoration-current"
                        >
                            {CONTACT_EMAIL}
                        </a>
                        {AFTER_EMAIL}
                    </div>

                    {/* Mobile: responsive formatting with clearer breaks */}
                    <div className="md:hidden w-full max-w-[clamp(335px,92vw,520px)] font-rethink font-medium text-[14px] leading-[34px] tracking-[0] align-middle text-[#A7ADBE] whitespace-pre-line">
                        {MOBILE_TEXT_BEFORE_EMAIL}
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="underline underline-offset-2 decoration-current"
                        >
                            {CONTACT_EMAIL}
                        </a>
                        {AFTER_EMAIL}
                    </div>
                </div>
            </div>
        </div>
    )
}

