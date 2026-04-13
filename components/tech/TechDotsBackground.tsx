"use client"

/*
 * TechDotsBackground — pointer-driven dot animation (tech-school hero layer)
 *
 * What it does
 *   Full-screen canvas of a regular dot grid. Dots are pushed away from the
 *   pointer (mouse or touch) within a radius, then spring back to rest when the
 *   pointer moves away. The canvas is pointer-events-none; coordinates come from
 *   window-level mousemove / touch events and are converted to canvas space each
 *   frame (getBoundingClientRect) so motion stays aligned while scrolling.
 *
 * Tuning (top of file)
 *   SPACING, DOT_R, BASE_ALPHA — grid density and dot look
 *   REPEL_RADIUS_DESKTOP / _MOBILE — how far the “bubble” extends (larger on touch)
 *   REPEL_FORCE, MAX_DISP — how strong / far dots can move before clamping
 *   SPRING_K, DAMPING — return-to-home motion (higher damping = less wobble)
 *
 * Used by: app/tech-school/page.tsx (background z-[1] behind content)
 */

import { useEffect, useRef } from "react"

// ── Grid ──────────────────────────────────────────────────────────────────────
const SPACING    = 28
const DOT_R      = 0.9
const BASE_ALPHA = 0.35

// ── Cursor / touch repulsion ──────────────────────────────────────────────────
const REPEL_RADIUS_DESKTOP = 90    // px — desktop
const REPEL_RADIUS_MOBILE  = 160   // px — bigger on mobile/touch
const REPEL_FORCE  = 90
const MAX_DISP     = 130

// ── Spring back (underdamped → bouncy snap-back, completely still at rest) ────
const SPRING_K = 0.12
const DAMPING  = 0.76

export function TechDotsBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d", { alpha: true })
        if (!ctx) return

        let cols = 0, rows = 0
        let hx: Float32Array, hy: Float32Array
        let dx: Float32Array, dy: Float32Array
        let vx: Float32Array, vy: Float32Array
        let prevTop = 0, prevBot = 0

        function buildGrid(W: number, H: number) {
            cols = Math.ceil(W / SPACING) + 2
            rows = Math.ceil(H / SPACING) + 2
            const N = cols * rows
            hx = new Float32Array(N); hy = new Float32Array(N)
            dx = new Float32Array(N); dy = new Float32Array(N)
            vx = new Float32Array(N); vy = new Float32Array(N)
            let i = 0
            for (let r = 0; r < rows; r++)
                for (let c = 0; c < cols; c++, i++) {
                    hx[i] = c * SPACING
                    hy[i] = r * SPACING
                }
        }

        function resize() {
            if (!canvas) return
            canvas.width  = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
            buildGrid(canvas.width, canvas.height)
            prevTop = 0; prevBot = 0
        }

        const ro = new ResizeObserver(resize)
        ro.observe(canvas)
        resize()

        // Pointer state — viewport coords, works for both mouse and touch
        const pointer = { vx: -9999, vy: -9999, active: false, isTouch: false }

        function onMouseMove(e: MouseEvent) {
            pointer.vx = e.clientX
            pointer.vy = e.clientY
            pointer.active = true
            pointer.isTouch = false
        }
        function onMouseLeave() {
            pointer.active = false
            pointer.vx = -9999
            pointer.vy = -9999
        }

        function onTouchStart(e: TouchEvent) {
            // Don't call preventDefault — avoids scroll bugs
            const t = e.touches[0]
            if (!t) return
            pointer.vx = t.clientX
            pointer.vy = t.clientY
            pointer.active = true
            pointer.isTouch = true
        }
        function onTouchMove(e: TouchEvent) {
            const t = e.touches[0]
            if (!t) return
            pointer.vx = t.clientX
            pointer.vy = t.clientY
            pointer.active = true
            pointer.isTouch = true
        }
        function onTouchEnd() {
            pointer.active = false
            pointer.vx = -9999
            pointer.vy = -9999
        }

        window.addEventListener("mousemove",  onMouseMove,  { passive: true })
        window.addEventListener("mouseleave", onMouseLeave)
        window.addEventListener("touchstart", onTouchStart, { passive: true })
        window.addEventListener("touchmove",  onTouchMove,  { passive: true })
        window.addEventListener("touchend",   onTouchEnd,   { passive: true })
        window.addEventListener("touchcancel",onTouchEnd,   { passive: true })

        let raf: number

        function draw() {
            raf = requestAnimationFrame(draw)
            if (!canvas || !ctx || !hx) return

            const W = canvas.width
            const H = canvas.height

            // Convert viewport pointer → canvas coords each frame (scroll-safe)
            const rect = canvas.getBoundingClientRect()
            const mx   = pointer.active ? pointer.vx - rect.left : -9999
            const my   = pointer.active ? pointer.vy - rect.top  : -9999
            const act  = pointer.active
            const repelR = pointer.isTouch ? REPEL_RADIUS_MOBILE : REPEL_RADIUS_DESKTOP

            const viewTop = Math.max(0, -rect.top)
            const viewBot = Math.min(H, viewTop + window.innerHeight)

            const ct = Math.max(0, Math.min(prevTop, viewTop) - SPACING * 2)
            const cb = Math.min(H, Math.max(prevBot, viewBot) + SPACING * 2)
            ctx.clearRect(0, ct, W, cb - ct)
            prevTop = viewTop; prevBot = viewBot

            const buf  = REPEL_RADIUS_MOBILE + MAX_DISP + SPACING
            const simT = Math.max(0,    Math.floor((viewTop - buf) / SPACING))
            const simB = Math.min(rows, Math.ceil( (viewBot + buf) / SPACING) + 1)

            for (let r = simT; r < simB; r++) {
                const base = r * cols
                for (let c = 0; c < cols; c++) {
                    const i = base + c

                    const px = hx[i] + dx[i]
                    const py = hy[i] + dy[i]

                    // Spring back to exact home — zero target → fully still at rest
                    let fx = -dx[i] * SPRING_K
                    let fy = -dy[i] * SPRING_K

                    // Repulsion when pointer is active
                    if (act) {
                        const ex = px - mx
                        const ey = py - my
                        const d2 = ex * ex + ey * ey
                        if (d2 < repelR * repelR && d2 > 0) {
                            const d = Math.sqrt(d2)
                            const norm = 1.0 - d / repelR
                            const f = norm * norm * REPEL_FORCE / d
                            fx += ex * f
                            fy += ey * f
                        }
                    }

                    vx[i] = (vx[i] + fx) * DAMPING
                    vy[i] = (vy[i] + fy) * DAMPING
                    dx[i] += vx[i]
                    dy[i] += vy[i]

                    const dSq = dx[i] * dx[i] + dy[i] * dy[i]
                    if (dSq > MAX_DISP * MAX_DISP) {
                        const s = MAX_DISP / Math.sqrt(dSq)
                        dx[i] *= s; dy[i] *= s
                        vx[i] *= s; vy[i] *= s
                    }
                }
            }

            // ── Draw ──────────────────────────────────────────────────────────
            const drawT = Math.max(0,    Math.floor((viewTop - SPACING) / SPACING))
            const drawB = Math.min(rows, Math.ceil( (viewBot + SPACING) / SPACING) + 1)

            ctx.beginPath()
            ctx.fillStyle = `rgba(255,255,255,${BASE_ALPHA})`
            for (let r = drawT; r < drawB; r++) {
                const base = r * cols
                for (let c = 0; c < cols; c++) {
                    const i = base + c
                    const x = hx[i] + dx[i]
                    const y = hy[i] + dy[i]
                    ctx.moveTo(x + DOT_R, y)
                    ctx.arc(x, y, DOT_R, 0, 6.2832)
                }
            }
            ctx.fill()
        }

        raf = requestAnimationFrame(draw)
        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener("mousemove",   onMouseMove)
            window.removeEventListener("mouseleave",  onMouseLeave)
            window.removeEventListener("touchstart",  onTouchStart)
            window.removeEventListener("touchmove",   onTouchMove)
            window.removeEventListener("touchend",    onTouchEnd)
            window.removeEventListener("touchcancel", onTouchEnd)
            ro.disconnect()
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            aria-hidden="true"
        />
    )
}
