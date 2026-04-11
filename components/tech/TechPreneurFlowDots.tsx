"use client"

import { useEffect, useRef } from "react"

// ─────────────────────────────────────────────────────────────────────────────
// Dots travel LEFT → RIGHT along curved paths.
// All paths converge to a single focal point in the centre, then diverge.
// Top streams are shortest (fan), bottom streams reach full width.
// ─────────────────────────────────────────────────────────────────────────────

const NUM_STREAMS = 10

// Focal point — where all streams touch/cross
const FOCAL_X_FRAC = 0.46   // fraction of W
const FOCAL_Y_FRAC = 0.62   // fraction of H

// Left-edge spread (x = 0)
const Y_START_TOP = 0.04    // fraction of H, topmost stream
const Y_START_BOT = 0.96    // fraction of H, bottommost stream

// Right-edge spread (x = W) — streams diverge again after focal point
const Y_END_TOP   = 0.30    // topmost stream, right side
const Y_END_BOT   = 0.88    // bottommost stream, right side

// Fan: top streams end near focal, bottom streams reach full width
const XMAX_TOP_FRAC = 0.54
const XMAX_BOT_FRAC = 1.00

// Appearance: bottom = largest, brightest (foreground)
const DOT_R_TOP  = 0.70
const DOT_R_BOT  = 2.60
const ALPHA_TOP  = 0.11
const ALPHA_BOT  = 0.86

// Dot spacing along path (px)
const DOT_SPACING = 12

// Edge fade (px)
const FADE_IN  = 55
const FADE_OUT = 80

// Flow speed: fraction of canvas W that dots travel per second
const FLOW_SPEED = 0.055

// Slow breathing so the ribbon feels alive
const BREATHE_AMP   = 0.013   // fraction of H
const BREATHE_SPEED = 0.00016 // rad/ms

// ─── path Y for a dot at canvas-x on stream s ─────────────────────────────
// All streams pass through (focalX, focalY).
// Left segment:  startY → focalY  (smooth ease)
// Right segment: focalY → endY    (smooth ease)
function pathY(
    x: number,
    startY: number, endY: number,
    focalX: number, focalY: number,
    W: number,
): number {
    if (x <= focalX) {
        const t = x / focalX
        const e = t * t * (3 - 2 * t)          // smoothstep
        return startY + (focalY - startY) * e
    }
    const t = (x - focalX) / (W - focalX)
    const e = t * t * (3 - 2 * t)
    return focalY + (endY - focalY) * e
}

export function TechPreneurFlowDots() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d", { alpha: true })
        if (!ctx) return

        function resize() {
            if (!canvas) return
            canvas.width  = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }

        const ro = new ResizeObserver(resize)
        ro.observe(canvas)
        resize()

        let raf: number
        const t0 = performance.now()

        function draw(now: number) {
            raf = requestAnimationFrame(draw)
            if (!canvas || !ctx) return

            const W = canvas.width
            const H = canvas.height
            if (!W || !H) return

            ctx.clearRect(0, 0, W, H)

            const elapsed = now - t0
            const focalX  = FOCAL_X_FRAC * W
            const focalY  = FOCAL_Y_FRAC * H

            // Shared slow-breathing shift
            const breathe = Math.sin(elapsed * BREATHE_SPEED) * BREATHE_AMP * H

            for (let s = 0; s < NUM_STREAMS; s++) {
                const frac = s / (NUM_STREAMS - 1)   // 0 = top, 1 = bottom

                const startY = (Y_START_TOP + (Y_START_BOT - Y_START_TOP) * frac) * H
                const endY   = (Y_END_TOP   + (Y_END_BOT   - Y_END_TOP)   * frac) * H
                const xMax   = (XMAX_TOP_FRAC + (XMAX_BOT_FRAC - XMAX_TOP_FRAC) * frac) * W
                const dotR   = DOT_R_TOP  + (DOT_R_BOT  - DOT_R_TOP)  * frac
                const alpha  = ALPHA_TOP  + (ALPHA_BOT  - ALPHA_TOP)  * frac

                // How far dots have traveled to the right since t=0 (wraps every xMax)
                const flowX  = (elapsed * FLOW_SPEED * W / 1000) % xMax

                const nDots  = Math.ceil(xMax / DOT_SPACING) + 2

                // Per-stream tiny breathing variance
                const streamBreathe = breathe * (0.5 + 0.5 * frac)

                for (let j = 0; j < nDots; j++) {
                    // x advances with time → dots travel LEFT TO RIGHT
                    const x = (j * DOT_SPACING + flowX) % xMax

                    // y follows the converge→diverge path for this stream
                    const y = pathY(x, startY, endY, focalX, focalY + streamBreathe, W)

                    // Edge fade
                    const fadeL = x < FADE_IN  ? x / FADE_IN  : 1
                    const fadeR = x > xMax - FADE_OUT ? (xMax - x) / FADE_OUT : 1
                    const fade  = Math.max(0, Math.min(fadeL, fadeR))
                    if (fade <= 0) continue

                    ctx.beginPath()
                    ctx.arc(x, y, dotR, 0, 6.2832)
                    ctx.fillStyle = `rgba(132,0,255,${(alpha * fade).toFixed(3)})`
                    ctx.fill()
                }
            }
        }

        raf = requestAnimationFrame(draw)
        return () => {
            cancelAnimationFrame(raf)
            ro.disconnect()
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
        />
    )
}
