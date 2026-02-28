"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   The design canvas is 1440 × 1044 px (Figma spec).
   We scale the whole canvas uniformly so it always fills the viewport width,
   then set the outer wrapper's height to match the scaled canvas height.
   This keeps every element's proportions perfect on any desktop screen.
───────────────────────────────────────────────────────────────────────────── */

const DESIGN_W = 1440;
const DESIGN_H = 1044;
const MOBILE_DESIGN_W = 375;
const MOBILE_DESIGN_H = 706; // nav 63 + content 643

export default function TechHero() {
    const [desktopScale, setDesktopScale] = useState(1);
    const [mobileScale, setMobileScale] = useState(1);

    useEffect(() => {
        const update = () => {
            const containerWidth = window.innerWidth;
            setDesktopScale(containerWidth / DESIGN_W);
            setMobileScale(containerWidth / MOBILE_DESIGN_W);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);
    return (
        <>
            {/* ══════════════════════════════════════════════
                DESKTOP HERO (hidden on mobile <= 768px)
                ══════════════════════════════════════════════ */}
            <div
                className="hidden md:block w-full overflow-hidden relative z-20 bg-[#000000]"
                style={{
                    height: `${DESIGN_H * desktopScale}px`,
                }}
            >
                {/* ── Inner canvas — scaled from top-left corner ── */}
                <section
                    className="w-[1440px] h-[1044px] absolute top-0 left-1/2"
                    style={{
                        transform: `translateX(-50%) scale(${desktopScale})`,
                        transformOrigin: "top center",
                    }}
                >
                    {/* ... (rest of desktop content) ... */}
                    {/* ── GRADIENT + ELLIPSE layer ── */}
                    <div className="absolute w-[1593.45px] h-[304px] top-[-29px] left-[-36px] opacity-100 z-0 pointer-events-none">
                        {/* Base gradient */}
                        <Image
                            src="/photos/Tech/Gradiant.svg"
                            alt="Gradient"
                            fill
                            className="!object-cover"
                            priority
                        />

                        {/* Ellipse 2 — layered on top of the gradient */}
                        <div className="absolute inset-0 z-[1]">
                            <Image
                                src="/photos/Tech/Ellipse 2.svg"
                                alt="Ellipse Gradient"
                                fill
                                className="tech-main-hero-bg-img"
                                priority
                            />
                        </div>
                    </div>

                    {/* ── HEADER ── */}
                    <header className="absolute w-[1320px] h-[44px] top-[55px] left-[60px] flex justify-between items-center z-10">
                        {/* Logo */}
                        <div className="w-[203px] h-[36px] relative shrink-0">
                            <Image
                                src="/photos/Tech/tech PW 1.svg"
                                alt="Tech PW Logo"
                                fill
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </div>

                        {/* Nav links */}
                        <div className="w-[500px] h-[20px] flex items-center gap-[50px] relative shrink-0">
                            <Image
                                src="/photos/Tech/Frame 1984078067.svg"
                                alt="Navigation Links"
                                width={500}
                                height={20}
                                style={{ objectFit: "contain" }}
                            />
                        </div>

                        {/* Join Now CTA */}
                        <div className="w-[118px] h-[44px] rounded-[8px] border border-transparent p-[10px] flex items-center justify-center gap-[8px] relative shrink-0">
                            <Image
                                src="/photos/Tech/Join Now.svg"
                                alt="Join Now"
                                width={118}
                                height={44}
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </header>

                    {/* ── HERO TEXT SECTION ── */}
                    <div className="absolute w-[472px] h-[320px] top-[249px] left-[151px] flex flex-col gap-[6px] z-[5]">
                        {/* Sub-heading */}
                        <div className="w-[472px] h-[24px] font-outfit font-light text-[20px] leading-[1.2] text-white whitespace-nowrap">
                            School for the Tech Evolution
                        </div>

                        {/* Main heading + button wrapper */}
                        <div className="w-[472px] h-[286px] flex flex-col gap-[20px]">
                            {/* Main heading */}
                            <div className="w-[411px] h-[222px] font-outfit font-normal text-[74px] leading-none tracking-[-0.02em] text-white">
                                Be Part of <br />
                                What&apos;s Next in Tech
                            </div>

                            {/* Button */}
                            <div className="w-[200px] h-[64px] gap-[12px] opacity-100 border-[1.5px] border-solid border-transparent rounded-[14px] px-[30px] py-[20px] flex items-center justify-center relative rotate-0">
                                <Image
                                    src="/photos/Tech/Button Container (2).svg"
                                    alt="Get Started"
                                    width={200}
                                    height={64}
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* ── HERO IMAGE (bust) ── */}
                    <div className="absolute w-[500px] h-[589px] top-[280.34px] left-[829px] z-[4]">
                        <Image
                            src="/photos/Tech/freepik__a-closeup-profile-shot-shows-a-dark-metallic-bust-__44477 (1) 1.png"
                            alt="Tech Bust"
                            fill
                            style={{ objectFit: "contain" }}
                            priority
                        />
                    </div>

                    {/* ── SOCIAL ICONS (left sidebar) ── */}
                    <div className="absolute w-[36px] h-[157.5px] top-[411px] left-[51px] flex flex-col gap-[24.75px] items-center z-[6]">
                        {/* Instagram */}
                        <div className="w-[36px] h-[36px] rounded-[55px] border-[0.38px] border-white/40 opacity-80 flex items-center justify-center p-[9px]">
                            <Image
                                src="/photos/Tech/Social Icons.svg"
                                alt="Instagram"
                                width={18}
                                height={18}
                                style={{ objectFit: "contain" }}
                            />
                        </div>

                        {/* Facebook */}
                        <div className="w-[36px] h-[36px] rounded-[55px] border-[0.38px] border-white/40 opacity-80 flex items-center justify-center p-[9px]">
                            <Image
                                src="/photos/Tech/uil_facebook.svg"
                                alt="Facebook"
                                width={18}
                                height={18}
                                style={{ objectFit: "contain" }}
                            />
                        </div>

                        {/* YouTube */}
                        <div className="w-[36px] h-[36px] rounded-[55px] border-[0.38px] border-white/40 opacity-80 flex items-center justify-center p-[9px]">
                            <Image
                                src="/photos/Tech/mdi_youtube.svg"
                                alt="YouTube"
                                width={18}
                                height={18}
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </div>

                    {/* ── COHORT / SKILLS INFO BLOCK ── */}
                    <div className="absolute w-[254.5px] h-[133px] top-[603px] left-[542px] z-[6]">
                        {/* "Practical Tech Skills" label */}
                        <div className="absolute w-[120px] h-[36px] top-0 left-[3px] font-outfit font-normal text-[14px] leading-[1.1] text-white flex items-center">
                            Practical <br /> Tech Skills
                        </div>

                        {/* Vector line 1 */}
                        <div className="absolute pointer-events-none w-[254.5px] h-[30px] top-[23px] left-0">
                            <Image
                                src="/photos/Tech/Vector 3 (1).svg"
                                alt="Vector 1"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>

                        {/* Arrow 2 */}
                        <div className="absolute pointer-events-none w-[12.73px] h-[12.73px] top-[5px] left-[238.5px]">
                            <Image
                                src="/photos/Tech/Arrow 2.svg"
                                alt="Arrow 2"
                                width={13}
                                height={13}
                                style={{ objectFit: "contain" }}
                            />
                        </div>

                        {/* "Cohort Learning" label */}
                        <div className="absolute w-[143px] h-[36px] top-[80px] left-[2.5px] font-outfit font-normal text-[14px] leading-none text-white flex items-center">
                            Cohort <br /> Learning
                        </div>

                        {/* Vector line 3 */}
                        <div className="absolute pointer-events-none w-[254.5px] h-[30px] top-[103px] left-0">
                            <Image
                                src="/photos/Tech/Vector 3.svg"
                                alt="Vector 3"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>

                        {/* Arrow 1 */}
                        <div className="absolute pointer-events-none w-[12.73px] h-[12.73px] top-[91.5px] left-[236.64px] rotate-0">
                            <Image
                                src="/photos/Tech/Arrow 1.svg"
                                alt="Arrow 1"
                                width={13}
                                height={13}
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </div>

                    {/* ── WHATSAPP FLOATING BUTTON ── */}
                    <div className="absolute w-[100px] h-[100px] rounded-[200px] border border-white/30 top-[719px] left-[1302px] flex items-center justify-center py-[15px] px-[20px] gap-[10px] z-[8] cursor-pointer bg-white/5 rotate-0 opacity-100">
                        <Image
                            src="/photos/Tech/ic_baseline-whatsapp.svg"
                            alt="WhatsApp"
                            width={40}
                            height={40}
                            style={{ objectFit: "contain" }}
                        />
                    </div>

                    {/* ── BOTTOM STATS BAR ── */}
                    <div className="absolute w-[1322px] h-[90px] rounded-[20px] border border-solid top-[826px] left-[60px] flex justify-center items-center py-[20px] px-[40px] gap-[80px] z-[7] bg-[#A3A3A3]/[.15] backdrop-blur-[51.4px] rotate-0 opacity-100" style={{ borderImage: "linear-gradient(90deg, rgba(255, 86, 0, 0.68) 0%, rgba(105, 74, 255, 0.68) 100%) 1" }}>
                        {/* Stat 1 */}
                        <div className="flex items-center gap-[12px] relative opacity-100 rotate-0 w-auto h-[50px]">
                            <Image src="/photos/Tech/200+.svg" alt="200+" width={95} height={30} style={{ objectFit: "contain" }} priority />
                            <span className="flex items-center font-outfit font-normal text-[18px] leading-none tracking-[-0.2px] text-[#F7F7F7] opacity-100">Students Learned</span>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex items-center gap-[12px] relative opacity-100 rotate-0 w-auto h-[50px]">
                            <Image src="/photos/Tech/100-percent.svg" alt="100%" width={93} height={30} style={{ objectFit: "contain" }} priority />
                            <span className="flex items-center font-outfit font-normal text-[18px] leading-none tracking-[-0.2px] text-[#F7F7F7] opacity-100">Placement Support</span>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex items-center gap-[12px] relative opacity-100 rotate-0 w-auto h-[50px]">
                            <Image src="/photos/Tech/500+.svg" alt="500+" width={95} height={30} style={{ objectFit: "contain" }} priority />
                            <span className="flex items-center font-outfit font-normal text-[18px] leading-none tracking-[-0.2px] text-[#F7F7F7] opacity-100">Projects Completed</span>
                        </div>
                    </div>

                </section>
            </div>

            {/* ══════════════════════════════════════════════
                MOBILE HERO (visible only on <= 768px)
                ══════════════════════════════════════════════ */}
            <div
                className="block md:hidden relative w-full bg-black overflow-hidden"
                style={{
                    height: `${MOBILE_DESIGN_H * mobileScale}px`,
                }}
            >
                <div
                    className="absolute top-0 left-0 w-[375px]"
                    style={{
                        transform: `translateX(-50%) scale(${mobileScale})`,
                        transformOrigin: "top center",
                        left: "50%",
                    }}
                >
                    {/* ── Mobile Background ellipses ── */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none z-0" aria-hidden="true">
                        <div className="absolute w-[561.55px] h-[105px] top-0 left-[-93px] rotate-0 opacity-100">
                            <Image
                                src="/photos/Tech/Gradient.svg"
                                alt=""
                                width={562}
                                height={132}
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </div>
                        <div className="absolute w-[557.16px] h-[119px] top-[-14px] left-[-93px] -rotate-[179.33deg] opacity-80 blur-[44.86px] pointer-events-none bg-[linear-gradient(261.66deg,#FF5600_17.08%,#694AFF_72.9%)]">
                            <Image
                                src="/photos/Tech/Ellipse 1.svg"
                                alt=""
                                fill
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </div>
                        <div className="absolute w-[345.93px] h-[90px] top-[14.65px] left-[0.91px] -rotate-[177.88deg] opacity-60 blur-[57.16px] z-[2]">
                            <Image
                                src="/photos/Tech/Ellipse 2 (1).svg"
                                alt=""
                                fill
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </div>
                    </div>

                    {/* ── Mobile Navbar (375 × 63) ── */}
                    <nav className="relative z-10 w-[375px] max-w-full h-[63px] flex justify-between items-center px-[16px] py-[20px] box-border">
                        <div className="w-[130px] h-[23px] relative shrink-0">
                            <Image
                                src="/photos/Tech/tech PW 1.svg"
                                alt="HACA Tech School"
                                width={130}
                                height={23}
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </div>
                        <div className="w-[16px] h-[16px] flex items-center justify-center gap-[4px] shrink-0">
                            <Image
                                src="/photos/Tech/Frame 68.svg"
                                alt="Menu"
                                width={16}
                                height={16}
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </nav>

                    {/* ── Mobile content area (374 × 643) ── */}
                    <div className="relative z-[2] w-[374px] max-w-full h-[643px] mx-auto overflow-hidden">

                        {/* ── Top block: text + button (374 × 184) ── */}
                        <div className="relative w-[373px] h-[184px] pt-[20px] px-[16px] pb-0 flex flex-col items-center gap-[15px] box-border">
                            <div className="w-[341px] h-[109px] flex flex-col items-center gap-[10px]">
                                {/* Subheading (341 × 19) */}
                                <div className="w-[341px] h-[19px] font-outfit font-light text-[13px] leading-none text-white whitespace-nowrap overflow-hidden text-center">
                                    School for the Tech Evolution
                                </div>
                                {/* Main title (341 × 80) */}
                                <div className="w-[341px] h-[80px] font-outfit font-normal text-[32px] leading-none tracking-[-0.02em] text-white text-center">
                                    Be Part of <br />What&apos;s Next in Tech
                                </div>
                            </div>

                            {/* CTA Button (107 × 40) */}
                            <div className="w-[207px] h-[40px] rounded-[10px] border-[0.87px] border-solid border-transparent px-[18px] py-[14px] flex items-center justify-center gap-[8px] box-border relative shrink-0 rotate-0 opacity-100">
                                <Image
                                    src="/photos/Tech/Button Container (2).svg"
                                    alt="I&apos;m Ready"
                                    width={107}
                                    height={40}
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        </div>

                        {/* ── Bust image (230 × 271) ── */}
                        <div className="absolute w-[230px] h-[270.94px] top-[210.84px] left-[131.5px] z-[3]">
                            <Image
                                src="/photos/Tech/freepik__a-closeup-profile-shot-shows-a-dark-metallic-bust-__44477 (1) 1.png"
                                alt="Tech Bust"
                                fill
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </div>

                        {/* ── Info block (125 × 90) ── */}
                        <div className="absolute w-[125px] h-[90px] top-[362.95px] left-[14.5px] z-[4]">
                            <div className="absolute w-[60px] h-[24px] text-[9px] top-0 left-0 font-outfit font-normal leading-[1.1] text-white flex items-center">
                                Practical <br /> Tech Skills
                            </div>
                            <div className="absolute pointer-events-none w-[110px] h-[15px] top-[12px] left-0">
                                <Image src="/photos/Tech/Vector 3 (1).svg" alt="Vector 1" fill style={{ objectFit: "cover" }} />
                            </div>
                            <div className="absolute pointer-events-none w-[8px] h-[8px] top-[3px] left-[100px]">
                                <Image src="/photos/Tech/Arrow 2.svg" alt="Arrow 2" width={13} height={13} style={{ objectFit: "contain" }} />
                            </div>
                            <div className="absolute w-[70px] h-[24px] font-outfit font-normal text-[9px] leading-none text-white flex items-center top-[44px] left-0">
                                Cohort <br /> Learning
                            </div>
                            <div className="absolute pointer-events-none w-[110px] h-[15px] top-[60px] left-0">
                                <Image src="/photos/Tech/Vector 3.svg" alt="Vector 3" fill style={{ objectFit: "cover" }} />
                            </div>
                            <div className="absolute pointer-events-none w-[8px] h-[8px] top-[52px] left-[100px] rotate-0">
                                <Image src="/photos/Tech/Arrow 1.svg" alt="Arrow 1" width={13} height={13} style={{ objectFit: "contain" }} />
                            </div>
                        </div>

                        {/* ── Mobile Stats Bar (345 × 174) ── */}
                        <div className="absolute w-[345px] h-[174px] top-[468.95px] left-[14.5px] rounded-[20px] border border-solid border-[#A3A3A3]/40 px-[40px] py-[20px] gap-[40px] box-border flex items-center justify-center z-[5] bg-[#A3A3A3]/[.15] backdrop-blur-[51.4px] rotate-0 opacity-100">
                            <div className="w-[235px] h-[134px] flex flex-col gap-[10px]">
                                <div className="w-[220px] h-[38px] flex gap-[10px] items-center opacity-100 rotate-0">
                                    <Image src="/photos/Tech/200+.svg" alt="200+" width={72} height={22} style={{ objectFit: "contain" }} priority />
                                    <span className="flex items-center h-[23px] font-outfit font-normal text-[18px] leading-none tracking-[-0.2px] text-[#F7F7F7] opacity-100 w-[138px]">Students Learned</span>
                                </div>
                                <div className="w-[231px] h-[38px] flex gap-[11px] items-center opacity-100 rotate-0">
                                    <Image src="/photos/Tech/100-percent.svg" alt="100%" width={70} height={22} style={{ objectFit: "contain" }} priority />
                                    <span className="flex items-center h-[23px] font-outfit font-normal text-[18px] leading-none tracking-[-0.2px] text-[#F7F7F7] opacity-100 w-[150px]">Placement Support</span>
                                </div>
                                <div className="w-[235px] h-[38px] flex gap-[8px] items-center opacity-100 rotate-0">
                                    <Image src="/photos/Tech/500+.svg" alt="500+" width={73} height={22} style={{ objectFit: "contain" }} priority />
                                    <span className="flex items-center h-[23px] font-outfit font-normal text-[18px] leading-none tracking-[-0.2px] text-[#F7F7F7] opacity-100 w-[154px]">Projects Completed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Mobile Background Image (below hero, mobile only) ── */}
            <div className="block md:hidden w-full">
                <Image
                    src="/photos/Tech/Image.png"
                    alt="Tech Background"
                    width={1442}
                    height={200}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    priority
                />
            </div>
        </>
    );
}