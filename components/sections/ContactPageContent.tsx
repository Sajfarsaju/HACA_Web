"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { WHATSAPP_CHAT_URL } from "@/lib/whatsapp"

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
})

function MapPinIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#4C75FF" strokeWidth="1.8" strokeLinejoin="round" />
            <circle cx="12" cy="9" r="2.5" stroke="#4C75FF" strokeWidth="1.8" />
        </svg>
    )
}
function PhoneIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" stroke="#4C75FF" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
    )
}
function MailIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="2" y="4" width="20" height="16" rx="2" stroke="#4C75FF" strokeWidth="1.8" />
            <path d="M2 7l10 7 10-7" stroke="#4C75FF" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
    )
}
function WhatsAppIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#25D366" />
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.413A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" stroke="#25D366" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
    )
}

function ContactCard({
    icon, label, heading, lines, href, mapHref, delay,
}: {
    icon: React.ReactNode
    label?: string
    heading: string
    lines: { text: string; sub?: boolean; href?: string }[]
    href?: string
    mapHref?: string
    delay: number
}) {
    const Inner = (
        <div className="h-full flex flex-col gap-5 p-7 md:p-8 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:border-white/[0.14] hover:bg-white/[0.05] transition-all duration-300 group">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[rgba(26,79,255,0.12)] border border-[rgba(26,79,255,0.2)] flex items-center justify-center shrink-0">
                    {icon}
                </div>
                {label && (
                    <span className="font-rethink text-[12px] uppercase tracking-widest text-[#A7ADBE]">{label}</span>
                )}
            </div>
            <div className="flex flex-col gap-1.5">
                <h3 className="m-0 font-rethink font-bold text-white text-[clamp(18px,2vw,22px)] leading-tight">{heading}</h3>
                <div className="w-8 h-[2px] rounded-full bg-[linear-gradient(90deg,#1A4FFF,#4C75FF)]" aria-hidden />
            </div>
            <div className="flex flex-col gap-2.5 flex-1">
                {lines.map((l, i) =>
                    l.href ? (
                        <Link
                            key={i}
                            href={l.href}
                            className={`font-rethink no-underline leading-[160%] transition-colors ${l.sub ? "text-[clamp(13px,1.2vw,15px)] text-[#A7ADBE] group-hover:text-white/80" : "text-[clamp(14px,1.3vw,16px)] font-semibold text-[#7B9FFF] hover:text-white"}`}
                        >
                            {l.text}
                        </Link>
                    ) : (
                        <p key={i} className={`m-0 font-rethink leading-[160%] ${l.sub ? "text-[clamp(13px,1.2vw,15px)] text-[#A7ADBE]" : "text-[clamp(14px,1.3vw,16px)] font-semibold text-white"}`}>
                            {l.text}
                        </p>
                    )
                )}
            </div>
            {mapHref && (
                <Link
                    href={mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline mt-auto inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-[rgba(26,79,255,0.3)] bg-[rgba(26,79,255,0.08)] font-rethink text-[12px] text-[#7B9FFF] hover:border-[rgba(26,79,255,0.6)] hover:bg-[rgba(26,79,255,0.16)] hover:text-white transition-all duration-200"
                    onClick={(e) => e.stopPropagation()}
                >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    Open in Google Maps
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            )}
        </div>
    )

    return (
        <motion.div {...fadeUp(delay)} className="h-full">
            {href ? (
                <Link href={href} className="no-underline block h-full">{Inner}</Link>
            ) : Inner}
        </motion.div>
    )
}

export function ContactPageContent() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden px-5 md:px-10 lg:px-16 py-20 md:py-28">

            {/* Ambient glow */}
            <div
                className="pointer-events-none absolute left-1/2 top-[20%] -translate-x-1/2 rounded-full"
                style={{
                    width: "min(800px, 90vw)", height: "min(600px, 60vw)",
                    background: "radial-gradient(ellipse, rgba(26,79,255,0.11) 0%, transparent 70%)",
                }}
                aria-hidden
            />

            <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col gap-16 md:gap-20">

                {/* Hero */}
                <div className="flex flex-col items-center text-center gap-5">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const }}
                    >
                        <span className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.10] px-4 py-2 rounded-full font-rethink text-[12px] uppercase tracking-widest text-[#A7ADBE]">
                            Contact Us
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] as const }}
                        className="m-0 font-rethink font-bold text-white leading-[110%]"
                        style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
                    >
                        Let&apos;s{" "}
                        <span className="bg-[linear-gradient(90deg,#4C75FF,#7B9FFF)] bg-clip-text text-transparent">
                            Connect
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] as const }}
                        className="m-0 font-rethink text-[#A7ADBE] max-w-[500px]"
                        style={{ fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: "170%" }}
                    >
                        Reach out to our team across India and UAE — we&apos;re here to help you find your path.
                    </motion.p>
                </div>

                {/* Location cards */}
                <div className="flex flex-col gap-4">
                    <motion.p {...fadeUp(0)} className="m-0 font-rethink text-[12px] uppercase tracking-widest text-[#6B7280]">
                        Our Locations
                    </motion.p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ContactCard
                            delay={0.05}
                            icon={<MapPinIcon />}
                            label="India"
                            heading="Kozhikode, Kerala"
                            lines={[
                                { text: "HACA (Haris&Co. Academy), Second Floor, 4 Wing Avenue, Panniyankara, Kozhikode, Kerala 673003", sub: true },
                                { text: "+91 08031332470", href: "tel:+910803133247" },
                            ]}
                            mapHref="https://www.google.com/maps/place/HACA/@11.2256875,75.7892322,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba6593a6edc0001:0x498526eef1bf3530!8m2!3d11.2256875!4d75.7918125!16s%2Fg%2F11khsj1x3k?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                        />
                        <ContactCard
                            delay={0.12}
                            icon={<MapPinIcon />}
                            label="UAE"
                            heading="Dubai, UAE"
                            lines={[
                                { text: "HACA (Haris&Co. Academy), Abdullah Kamber Business Centre, Near Aboobacker Siddeeque Metro Station, Deira, Dubai, UAE", sub: true },
                                { text: "+971 52 230 1767", href: "tel:+971522301767" },
                            ]}
                            mapHref="https://www.google.com/maps/place/HACA+UAE+(formerly+Haris%26Co.+Academy)/@25.2708788,55.3288717,17z/data=!4m7!3m6!1s0x3e5f5daecba2846d:0xbe655d3f8333934!4b1!8m2!3d25.2708788!4d55.331452!16s%2Fg%2F11y5fqw2yb?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                        />
                    </div>
                </div>

                {/* Reach us cards */}
                <div className="flex flex-col gap-4">
                    <motion.p {...fadeUp(0)} className="m-0 font-rethink text-[12px] uppercase tracking-widest text-[#6B7280]">
                        Reach Us
                    </motion.p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <ContactCard
                            delay={0.05}
                            icon={<MailIcon />}
                            heading="Email Us"
                            lines={[
                                { text: "We'll reply within one business day.", sub: true },
                                { text: "info@harisandcoacademy.com", href: "mailto:info@harisandcoacademy.com" },
                            ]}
                        />
                        <ContactCard
                            delay={0.12}
                            icon={<WhatsAppIcon />}
                            heading="WhatsApp"
                            lines={[
                                { text: "Chat with us directly — fastest way to reach our team.", sub: true },
                                { text: "+91 7736779775", href: WHATSAPP_CHAT_URL },
                            ]}
                        />
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div {...fadeUp(0.1)} className="flex flex-col items-center gap-6 text-center pt-4 border-t border-white/[0.07]">
                    <p className="m-0 font-rethink text-[#A7ADBE]" style={{ fontSize: "clamp(14px, 1.6vw, 17px)" }}>
                        Want to explore our programmes first?
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { label: "Design School", href: "/design-school" },
                            { label: "Marketing School", href: "/marketing-school" },
                            { label: "Tech School", href: "/tech-school" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="no-underline inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.10] bg-white/[0.03] font-rethink text-[13px] text-[#A7ADBE] hover:border-[rgba(26,79,255,0.5)] hover:text-white hover:bg-[rgba(26,79,255,0.08)] transition-all duration-200"
                            >
                                {link.label}
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
