"use client"

import { useEffect, useRef } from "react"
import type { CSSProperties } from "react"

/*
 * GradientBlobOrb
 * ──────────────────────────────────────────────────────────────────────────────
 * A single blurred gradient ellipse that:
 *   • Drifts randomly (smooth spring walk — picks a new target every 3–7 s)
 *   • Repels away from the cursor / touch point
 *   • Springs back naturally when the cursor moves away
 *
 * Positioning contract
 *   The parent div must be `position: absolute` with `left: 50%` (or similar).
 *   This component sets its own `position: absolute` and handles the
 *   `translateX(-50%)` centering so its centre aligns with the parent's
 *   left-50% anchor. Physics displacement is layered on top each frame.
 *
 * Props
 *   width / height   — blob dimensions in px (the un-blurred ellipse box)
 *   rotation         — base rotation in degrees (kept constant; only position moves)
 *   gradient         — CSS `background` value
 *   blurPx           — `filter: blur(Xpx)` value
 *   opacity          — overall opacity (default 1)
 *   whiteOverlay     — alpha of the white shimmer layer on top (default 0.2, 0 to skip)
 *   repelRadius      — cursor repulsion radius in px (default 320)
 *   maxDrift         — max random drift offset from centre in px (default 80)
 */

// ── Physics constants ────────────────────────────────────────────────────────
const DRIFT_SPRING = 0.0030   // attraction toward random drift target
const DAMPING      = 0.90     // velocity decay per frame (higher = smoother / slower)
const REPEL_FORCE  = 6.0      // peak repulsion acceleration (px / frame²)
const MIN_DRIFT_MS = 3000     // ms between new drift targets (min)
const MAX_DRIFT_MS = 7000     // ms between new drift targets (max)

// ── Types ────────────────────────────────────────────────────────────────────
interface GradientBlobOrbProps {
    className?: string
    style?: CSSProperties
    width: number
    height: number
    rotation: number
    gradient: string
    blurPx: number
    opacity?: number
    whiteOverlay?: number
    repelRadius?: number
    maxDrift?: number
}

// ── Component ────────────────────────────────────────────────────────────────
export function GradientBlobOrb({
    className = "",
    style = {},
    width,
    height,
    rotation,
    gradient,
    blurPx,
    opacity = 1,
    whiteOverlay = 0.2,
    repelRadius = 320,
    maxDrift = 80,
}: GradientBlobOrbProps) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        // ── Physics state ──────────────────────────────────────────────────
        let dx = 0, dy = 0   // displacement from natural centre (px)
        let vx = 0, vy = 0   // velocity (px / frame)

        // ── Random drift target ────────────────────────────────────────────
        let targetX = 0, targetY = 0
        let nextDriftAt = 0

        function pickNewDrift(now: number) {
            const angle = Math.random() * Math.PI * 2
            const r     = Math.random() * maxDrift
            targetX    = Math.cos(angle) * r
            targetY    = Math.sin(angle) * r
            nextDriftAt = now + MIN_DRIFT_MS + Math.random() * (MAX_DRIFT_MS - MIN_DRIFT_MS)
        }

        // ── Pointer state ──────────────────────────────────────────────────
        const ptr = { x: -9999, y: -9999, active: false, isTouch: false }

        const onMouseMove  = (e: MouseEvent) => {
            ptr.x = e.clientX; ptr.y = e.clientY
            ptr.active = true; ptr.isTouch = false
        }
        const onMouseLeave = () => {
            ptr.active = false; ptr.x = -9999; ptr.y = -9999
        }
        const onTouchMove = (e: TouchEvent) => {
            const t = e.touches[0]
            if (!t) return
            ptr.x = t.clientX; ptr.y = t.clientY
            ptr.active = true; ptr.isTouch = true
        }
        const onTouchEnd = () => { ptr.active = false }

        window.addEventListener("mousemove",   onMouseMove,  { passive: true })
        window.addEventListener("mouseleave",  onMouseLeave)
        window.addEventListener("touchmove",   onTouchMove,  { passive: true })
        window.addEventListener("touchend",    onTouchEnd,   { passive: true })
        window.addEventListener("touchcancel", onTouchEnd,   { passive: true })

        // ── Animation loop ─────────────────────────────────────────────────
        let raf: number

        function frame(now: number) {
            raf = requestAnimationFrame(frame)
            if (!el) return

            // Refresh drift target
            if (now >= nextDriftAt) pickNewDrift(now)

            // Spring force toward drift target
            let fx = (targetX - dx) * DRIFT_SPRING
            let fy = (targetY - dy) * DRIFT_SPRING

            // Cursor repulsion — use current viewport rect (scroll-safe)
            if (ptr.active) {
                const rect = el.getBoundingClientRect()
                const cx   = rect.left + rect.width  / 2
                const cy   = rect.top  + rect.height / 2
                const ex   = cx - ptr.x
                const ey   = cy - ptr.y
                const d2   = ex * ex + ey * ey
                const r    = ptr.isTouch ? repelRadius * 1.5 : repelRadius
                if (d2 < r * r && d2 > 0) {
                    const d    = Math.sqrt(d2)
                    const norm = 1 - d / r
                    const f    = norm * norm * REPEL_FORCE / d
                    fx += ex * f
                    fy += ey * f
                }
            }

            vx = (vx + fx) * DAMPING
            vy = (vy + fy) * DAMPING
            dx += vx
            dy += vy

            // Apply transform: centre the element on the parent's left:50% anchor,
            // then add physics displacement and base rotation.
            el.style.transform =
                `translateX(calc(-50% + ${dx.toFixed(2)}px)) translateY(${dy.toFixed(2)}px) rotate(${rotation}deg)`
        }

        raf = requestAnimationFrame(frame)

        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener("mousemove",   onMouseMove)
            window.removeEventListener("mouseleave",  onMouseLeave)
            window.removeEventListener("touchmove",   onTouchMove)
            window.removeEventListener("touchend",    onTouchEnd)
            window.removeEventListener("touchcancel", onTouchEnd)
        }
    }, [rotation, repelRadius, maxDrift])

    return (
        <div
            ref={ref}
            className={className}
            style={{
                ...style,
                position: "absolute",
                width,
                height,
                borderRadius: "50%",
                background: gradient,
                filter: `blur(${blurPx}px)`,
                opacity,
                /* initial transform — overwritten every frame by the RAF */
                transform: `translateX(-50%) rotate(${rotation}deg)`,
                willChange: "transform",
                pointerEvents: "none",
            }}
        >
            {whiteOverlay > 0 && (
                <div
                    aria-hidden="true"
                    style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        background: `rgba(255,255,255,${whiteOverlay})`,
                    }}
                />
            )}
        </div>
    )
}
