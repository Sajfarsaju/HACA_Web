"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function HeroBottom() {
  return (
    /* ─── Outer Section: 1440 × 428, padding 32px 60px, border-radius 20px ─── */
    <section
      className="w-full flex items-center justify-center p-[32px_60px] bg-[#000210] rounded-[20px] max-md:p-[32px_20px] max-md:min-h-[170px] max-md:h-auto max-md:rounded-[5.08px]"
      aria-label="Enquire CTA"
    >
      {/* ─── Inner Container: 1320 × 364, padding 25px / 29px, gap 474px, border-radius 20px ─── */}
      <div className="relative w-full max-w-[1320px] min-h-[364px] flex items-center justify-center p-[25px_29px] rounded-[20px] overflow-hidden max-md:max-w-[352px] max-md:min-h-[150px] max-md:h-auto max-md:p-0 max-md:rounded-[5.08px]">

        {/* ─── Background radial gradient ─── */}
        <div className="absolute w-full h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-[radial-gradient(40%_50%_at_50%_50%,rgba(18,67,228,1)_0%,rgba(0,0,0,0.6)_100%)] z-0 max-md:w-[355px] max-md:h-[380px] max-md:bottom-auto max-md:right-auto max-md:rounded-[5.08px] max-md:bg-[radial-gradient(40%_50%_at_50%_50%,#1A4FFF_0%,#000210_100%)] max-md:backdrop-blur-[41.72px]" aria-hidden="true" />

        {/* ─── Content Container: 569 × 167, gap 20px ─── */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center gap-[20px] max-w-[900px] text-center max-md:w-full max-md:max-w-[352px] max-md:gap-[16px]"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* ─── Headline ─── */}
          <p className="w-full max-w-[750px] font-manrope font-normal text-[42px] leading-[110%] text-center text-[#FFFFFF] m-0 max-md:font-semibold max-md:text-[20px]">
            Everyone starts somewhere. The smart ones start here.
          </p>

          {/* ─── Enquire Button ─── */}
          <motion.button
            className="w-auto h-auto p-0 rounded-[100px] border-none bg-transparent cursor-pointer flex items-center justify-center max-md:rounded-[82px]"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            aria-label="Enquire Now"
          >
            <Image
              src="/photos/main/book call.svg"
              alt="Enquire Now"
              width={272}
              height={55}
              className="block w-[272px] h-auto object-contain max-md:w-[116px] max-md:h-[46px]"
            />
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}
