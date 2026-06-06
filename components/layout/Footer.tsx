import Image from "next/image"
import Link from "next/link"
import { WHATSAPP_CHAT_URL } from "@/lib/whatsapp"
import { BackToTopButton } from "./BackToTopButton"

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Success Story", href: "/success-story" },
    { label: "Blog", href: "/blog" },
]

const schools = [
    { label: "Marketing School", href: "/marketing-school" },
    { label: "Design School", href: "/design-school" },
    { label: "Tech School", href: "/tech-school" },
]

const contactIndia = {
    heading: "India",
    address: "HACA (Haris&Co. Academy), Second Floor, 4 Wing Avenue, Panniyankara, Kozhikode, Kerala 673003",
    phone: "+91 08031332470",
}
const contactUAE = {
    heading: "UAE",
    address: "HACA (Haris&Co. Academy) Abdullah Kamber Business Centre Near Aboobacker Siddeeque Metro Station, Deira, Dubai, UAE",
    phone: "+971 52 230 1767",
}
const contactEmail = "info@harisandcoacademy.com"
const contactWhatsApp = "+91 7736779775"

export function Footer() {
    return (
        <footer className="w-full bg-[#000210] overflow-hidden flex flex-col relative">
            {/* Gradient overlay: desktop 1113×898, mobile 460×482, center anchored to footer bottom */}
            <div
                className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 w-[clamp(460px,77.3vw,1113px)] h-[clamp(482px,62.4vw,898px)] lg:h-[clamp(360px,45vw,660px)] pointer-events-none backdrop-blur-[131px] max-md:backdrop-blur-[54px]"
                style={{
                    background: "radial-gradient(50% 50% at 50% 50%, #1A4FFF 0%, #000210 100%)",
                }}
                aria-hidden
            />
            <div
                className="relative z-10 w-full section-4k mx-auto flex flex-col px-[clamp(20px,4.4vw,63px)] pt-[clamp(20px,4.2vw,40px)] pb-[clamp(20px,4.2vw,40px)] gap-[clamp(20px,3.5vw,40px)] min-h-[300px] lg:min-h-[250px]"
            >
                <div className="absolute right-[clamp(20px,4.4vw,63px)] top-[clamp(20px,4.2vw,40px)] md:top-1/2 md:-translate-y-1/2 flex justify-end">
                    <BackToTopButton />
                </div>
                {/* Desktop: wrapper with logo (left) + first container (right). Mobile: separate with order */}
                <div className="hidden md:flex md:w-full md:max-w-[1314px] md:min-h-[clamp(120px,12.6vw,181px)] md:flex-row md:justify-between md:items-start">
                    <Link href="/" className="block shrink-0">
                        <Image
                            src="/photos/common/haca logo.svg"
                            alt="HACA Logo"
                            width={171}
                            height={50}
                            className="w-[clamp(120px,11.9vw,171px)] h-[clamp(35px,3.5vw,50px)] object-contain"
                        />
                    </Link>
                    <div className="flex flex-col gap-[clamp(20px,2.5vw,36px)] w-[clamp(260px,20.6vw,296px)]">
                        <div className="flex gap-[clamp(20px,2.5vw,36px)] flex-row">
                            <div className="flex flex-col gap-[clamp(8px,1vw,10px)] w-[clamp(100px,9vw,130px)]">
                                <h4 className="font-rethink font-semibold text-[clamp(16px,1.4vw,20px)] leading-[100%] tracking-[-0.02em] text-[#FFFFFF] m-0">
                                    Quick Links
                                </h4>
                                <ul className="flex flex-col gap-[clamp(8px,1vw,10px)] w-full list-none p-0 m-0">
                                    {quickLinks.map((item) => (
                                        <li key={item.label}>
                                            <Link
                                                href={item.href}
                                                className="font-rethink font-medium text-[clamp(14px,1.1vw,16px)] leading-[100%] tracking-[0] text-[#A7ADBE] hover:text-white transition-colors"
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col gap-[clamp(8px,1vw,10px)] w-[clamp(100px,9vw,130px)]">
                                <h4 className="font-rethink font-semibold text-[clamp(16px,1.4vw,20px)] leading-[100%] tracking-[-0.02em] text-[#FFFFFF] m-0">
                                    Schools
                                </h4>
                                <ul className="flex flex-col gap-[clamp(8px,1vw,10px)] w-full list-none p-0 m-0">
                                    {schools.map((item) => (
                                        <li key={item.label}>
                                            <Link
                                                href={item.href}
                                                className="font-rethink font-medium text-[clamp(14px,1.1vw,16px)] leading-[100%] tracking-[0] text-[#A7ADBE] hover:text-white transition-colors"
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <Link href="/" className="block shrink-0 md:hidden max-md:order-1">
                    <Image
                        src="/photos/common/haca logo.svg"
                        alt="HACA Logo"
                        width={171}
                        height={50}
                        className="w-[clamp(90px,30vw,113.68px)] h-[clamp(26px,8.8vw,33px)] object-contain"
                    />
                </Link>

                <div className="flex flex-col gap-[clamp(20px,2.5vw,36px)] w-[clamp(260px,80vw,296px)] max-md:order-3 md:hidden">
                    <div className="flex gap-[clamp(20px,2.5vw,36px)] flex-row">
                        {/* Left container - Quick Links */}
                        <div className="flex flex-col gap-[clamp(8px,1vw,10px)] w-[clamp(100px,35vw,130px)]">
                            <h4 className="font-rethink font-semibold text-[clamp(16px,4vw,20px)] leading-[100%] tracking-[-0.02em] text-[#FFFFFF] m-0">
                                Quick Links
                            </h4>
                            <ul className="flex flex-col gap-[clamp(8px,1vw,10px)] w-full list-none p-0 m-0">
                                {quickLinks.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="font-rethink font-medium text-[clamp(14px,3.7vw,16px)] leading-[100%] tracking-[0] text-[#A7ADBE] hover:text-white transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right container - Schools */}
                        <div className="flex flex-col gap-[clamp(8px,1vw,10px)] w-[clamp(100px,35vw,130px)]">
                            <h4 className="font-rethink font-semibold text-[clamp(16px,4vw,20px)] leading-[100%] tracking-[-0.02em] text-[#FFFFFF] m-0">
                                Schools
                            </h4>
                            <ul className="flex flex-col gap-[clamp(8px,1vw,10px)] w-full list-none p-0 m-0">
                                {schools.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="font-rethink font-medium text-[clamp(14px,3.7vw,16px)] leading-[100%] tracking-[0] text-[#A7ADBE] hover:text-white transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Second container - Contact */}
                <div className="flex flex-row gap-[clamp(16px,2vw,20px)] w-full max-w-[clamp(252px,58.4vw,841px)] max-md:flex-col max-md:gap-[clamp(16px,4vw,20px)] max-md:order-2">
                    <div className="flex flex-col gap-[clamp(8px,1vw,10px)] flex-1 min-w-0 max-md:gap-[clamp(12px,3vw,20px)]">
                        <h4 className="font-rethink font-semibold text-[clamp(16px,1.4vw,20px)] leading-[120%] tracking-[-0.02em] text-[#FFFFFF] m-0">
                            {contactIndia.heading}
                        </h4>
                        <div className="flex flex-col gap-[clamp(8px,1vw,10px)] max-md:gap-[clamp(10px,2.5vw,14px)]">
                            <p className="font-rethink font-medium text-[clamp(14px,1.1vw,16px)] leading-[140%] tracking-[0] text-[#A7ADBE] m-0">
                                {contactIndia.address}
                            </p>
                            <p className="font-rethink font-semibold text-[clamp(16px,1.4vw,20px)] leading-[120%] tracking-[-0.02em] text-[#FFFFFF] m-0">
                                {contactIndia.phone}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[clamp(8px,1vw,10px)] flex-1 min-w-0 max-md:gap-[clamp(12px,3vw,20px)]">
                        <h4 className="font-rethink font-semibold text-[clamp(16px,1.4vw,20px)] leading-[120%] tracking-[-0.02em] text-[#FFFFFF] m-0">
                            {contactUAE.heading}
                        </h4>
                        <div className="flex flex-col gap-[clamp(8px,1vw,10px)] max-md:gap-[clamp(10px,2.5vw,14px)]">
                            <p className="font-rethink font-medium text-[clamp(14px,1.1vw,16px)] leading-[140%] tracking-[0] text-[#A7ADBE] m-0">
                                {contactUAE.address}
                            </p>
                            <p className="font-rethink font-semibold text-[clamp(16px,1.4vw,20px)] leading-[120%] tracking-[-0.02em] text-[#FFFFFF] m-0">
                                {contactUAE.phone}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[clamp(8px,1vw,10px)] flex-1 min-w-0 max-md:gap-[clamp(16px,3vw,20px)]">
                        <div className="flex flex-col gap-[clamp(8px,1vw,10px)]">
                            <h4 className="font-rethink font-semibold text-[clamp(16px,1.4vw,20px)] leading-[120%] tracking-[-0.02em] text-[#FFFFFF] m-0">
                                Email
                            </h4>
                            <Link
                                href={`mailto:${contactEmail}`}
                                className="font-rethink font-medium text-[clamp(14px,1.1vw,16px)] leading-[140%] tracking-[0] text-[#A7ADBE] hover:text-white transition-colors"
                            >
                                {contactEmail}
                            </Link>
                        </div>
                        <div className="flex flex-col gap-[clamp(8px,1vw,10px)]">
                            <h4 className="font-rethink font-semibold text-[clamp(16px,1.4vw,20px)] leading-[120%] tracking-[-0.02em] text-[#FFFFFF] m-0">
                                WhatsApp us at
                            </h4>
                            <Link
                                href={WHATSAPP_CHAT_URL}
                                className="font-rethink font-medium text-[clamp(14px,1.1vw,16px)] leading-[140%] tracking-[0] text-[#A7ADBE] hover:text-white transition-colors"
                            >
                                {contactWhatsApp}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Third container - Line + Copyright & Legal */}
                <div className="flex flex-col gap-[clamp(10px,2.1vw,30px)] w-full max-w-[clamp(335px,91.3vw,1314px)] min-h-[clamp(46px,3.1vw,45px)] max-md:order-[4] max-md:mt-auto">
                    <div className="w-full border-t border-[#A7ADBE]/30" />
                    <div className="flex flex-row flex-wrap items-center justify-between gap-[clamp(10px,2.1vw,30px)] w-full max-md:flex-col max-md:items-center max-md:text-center">
                        <p className="font-rethink font-medium text-[clamp(12px,1.1vw,16px)] leading-[100%] tracking-[0] text-[#A7ADBE] m-0">
                            © {new Date().getFullYear()} HACA. All rights reserved
                        </p>
                        <div className="flex flex-row items-center gap-[clamp(10px,2.1vw,30px)]">
                            <Link
                                href="/terms-conditions"
                                className="font-rethink font-medium text-[clamp(12px,1.1vw,16px)] leading-[100%] tracking-[0] text-[#A7ADBE] hover:text-white transition-colors"
                            >
                                Terms & Conditions
                            </Link>
                            <Link
                                href="/privacy-policy"
                                className="font-rethink font-medium text-[clamp(12px,1.1vw,16px)] leading-[100%] tracking-[0] text-[#A7ADBE] hover:text-white transition-colors"
                            >
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
