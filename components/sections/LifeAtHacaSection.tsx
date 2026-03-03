"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function LifeAtHacaSection() {
    return (
        /* ─── Outer Section: 1440×868 desktop, 375×510 mobile ─── */
        <section className="w-full section-4k mx-auto bg-[#000210] p-[36px_60px] flex flex-col items-center gap-[36px] box-border max-md:p-[20px] max-md:gap-[26px]" aria-label="Life at HACA">

            {/* ─── Header Container: 1312×141 desktop, 335×88 mobile ─── */}
            <motion.div
                className="w-full max-w-[min(1312px,91vw)] flex flex-col items-center gap-[20px] max-md:gap-[7.97px]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* ─── Pill Button: 158×42 (desktop) / 113×32 (mobile) ─── */}
                {/* We use width 180 to ensure the internal pill is exactly 158px wide */}
                <motion.button
                    className="bg-transparent border-none p-0 cursor-pointer flex items-center justify-center w-[180px] h-[64px] transition-transform duration-200 ease-in-out max-md:w-[128.73px] max-md:h-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Life @ HACA"
                >
                    <Image
                        src="/photos/main/life@haca.svg"
                        alt="Life at HACA"
                        width={180}
                        height={64}
                        className="w-full h-auto block object-contain"
                        priority
                    />
                </motion.button>

                {/* ─── Heading ─── */}
                <h2 className="font-rethink font-bold text-[32px] leading-[110%] tracking-[0%] text-center text-[#ffffff] m-0 max-w-[453px] max-md:text-[22px] max-md:max-w-[317px]">
                    This Is What Learning Here Looks Like
                </h2>
            </motion.div>

            {/* ─── Photo Grid: 1320×619 desktop, 335×357 mobile ─── */}
            <div className="w-full max-w-[min(1320px,91vw)] flex flex-col gap-[15px] max-md:gap-[10.14px]">

                {/* ─── Row 1: 3 photos desktop / 2 photos mobile — event photos ─── */}
                <div className="w-full flex flex-row justify-between gap-0 max-md:gap-[10.14px]">
                    {/* Photo 1: 449×302 desktop / 196×174 mobile */}
                    <div className="border border-[#25317d] rounded-[10px] bg-cover bg-center overflow-hidden bg-[url('/photos/main/events/DSC05453%201.png')] shrink-0 w-[calc(449/1320*100%)] aspect-[449/302] max-md:rounded-[5.76px] max-md:border-[0.58px] max-md:w-[calc((100%-10.14px)*(196.42/324.15))] max-md:aspect-[196.42/173.95]" aria-hidden="true" />

                    {/* Photo 2: 341×302 desktop / 128×174 mobile */}
                    <div className="border border-[#25317d] rounded-[10px] bg-cover bg-center overflow-hidden bg-[url('/photos/main/events/DSC09981.JPG')] shrink-0 w-[calc(341/1320*100%)] aspect-[341/302] max-md:rounded-[5.76px] max-md:border-[0.58px] max-md:w-[calc((100%-10.14px)*(127.73/324.15))] max-md:aspect-[127.73/174.37]" aria-hidden="true" />

                    {/* Photo 3: 490×302 desktop only */}
                    <div className="border border-[#25317d] rounded-[10px] bg-cover bg-center overflow-hidden bg-[url('/photos/main/events/Rectangle%2012.png')] shrink-0 w-[calc(490/1320*100%)] aspect-[490/302] max-md:hidden" aria-hidden="true" />
                </div>

                {/* ─── Row 2: 4 photos desktop / 2 photos mobile — event photos ─── */}
                <div className="w-full flex flex-row justify-between gap-0 max-md:gap-[10.14px]">
                    {/* Photo 1: 214×305 desktop / 123×176 mobile */}
                    <div className="border border-[#25317d] rounded-[10px] bg-cover bg-center overflow-hidden bg-[url('/photos/main/events/DSC03240%201.png')] shrink-0 w-[calc(214/1320*100%)] aspect-[214/305] max-md:rounded-[5.76px] max-md:border-[0.58px] max-md:w-[calc((100%-10.14px)*(123.26/324.86))] max-md:aspect-[123.26/175.68]" aria-hidden="true" />

                    {/* Photo 2: 350×305 desktop / 202×176 mobile */}
                    <div className="border border-[#25317d] rounded-[10px] bg-cover bg-center overflow-hidden bg-[url('/photos/main/events/DSC04963%201.png')] shrink-0 w-[calc(350/1320*100%)] aspect-[350/305] max-md:rounded-[5.76px] max-md:border-[0.58px] max-md:w-[calc((100%-10.14px)*(201.60/324.86))] max-md:aspect-[201.60/175.68]" aria-hidden="true" />

                    {/* Photo 3: 350×305 desktop only */}
                    <div className="border border-[#25317d] rounded-[10px] bg-cover bg-center overflow-hidden bg-[url('/photos/main/events/DSC08138%201.png')] shrink-0 w-[calc(350/1320*100%)] aspect-[350/305] max-md:hidden" aria-hidden="true" />

                    {/* Photo 4: 350×305 desktop only */}
                    <div className="border border-[#25317d] rounded-[10px] bg-cover bg-center overflow-hidden bg-[url('/photos/main/events/kattan.jpeg')] shrink-0 w-[calc(350/1320*100%)] aspect-[350/305] max-md:hidden" aria-hidden="true" />
                </div>

            </div>

        </section>
    )
}
