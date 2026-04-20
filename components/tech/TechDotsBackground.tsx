"use client"

/*
 * TechDotsBackground — pointer-driven dot animation (tech-school hero layer)
 *
 * Desktop : reacts to mouse cursor position
 * Mobile  : reacts to touch position AND scroll momentum
 *           — dots stay active for TOUCH_LINGER_MS after finger lifts
 *           — scroll events keep dots alive at the last known touch position
 *
 * Performance (no visual compromise):
 *  - getBoundingClientRect() cached; refreshed only on resize / scroll
 *  - RAF loop self-pauses when all dots settle and pointer is inactive
 *  - Mobile capped at 30fps (imperceptible at touch speeds)
 */

import { useEffect, useRef } from "react"

// ── Grid ──────────────────────────────────────────────────────────────────────
const SPACING    = 28
const DOT_R      = 0.9
const BASE_ALPHA = 0.35

// ── Cursor / touch repulsion ──────────────────────────────────────────────────
const REPEL_RADIUS_DESKTOP = 90
const REPEL_RADIUS_MOBILE  = 200
const REPEL_FORCE          = 90
const MAX_DISP             = 130

// ── Spring back ───────────────────────────────────────────────────────────────
const SPRING_K = 0.12
const DAMPING  = 0.76

// ── Idle: pause RAF when max velocity drops below this ────────────────────────
const IDLE_VEL_SQ = 0.001 * 0.001  // (px/frame)²

// ── Mobile linger ─────────────────────────────────────────────────────────────
const TOUCH_LINGER_MS = 600

// ── Mobile 30fps cap ──────────────────────────────────────────────────────────
const MOBILE_FRAME_MS = 1000 / 30

export function TechDotsBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d", { alpha: true })
        if (!ctx) return

        const mobile = () => window.innerWidth < 768

        let cols = 0, rows = 0
        let hx: Float32Array, hy: Float32Array
        let dx: Float32Array, dy: Float32Array
        let vx: Float32Array, vy: Float32Array
        let prevTop = 0, prevBot = 0

        // ── Cached rect — avoids getBoundingClientRect() inside draw loop ─────
        // Store canvas position in document coords (doesn't change on scroll)
        let cacheLeft = 0, cacheDocTop = 0
        function refreshRect() {
            if (!canvas) return
            const r = canvas.getBoundingClientRect()
            cacheLeft   = r.left
            cacheDocTop = window.scrollY + r.top  // document-relative top (stable)
        }

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
            refreshRect()
        }

        const ro = new ResizeObserver(resize)
        ro.observe(canvas)
        resize()

        // ── Pointer state ─────────────────────────────────────────────────────
        const ptr = {
            vx: -9999, vy: -9999,
            active: false,
            isTouch: false,
            lastTouchAt: 0,
        }

        // ── Mouse ─────────────────────────────────────────────────────────────
        function onMouseMove(e: MouseEvent) {
            ptr.vx = e.clientX; ptr.vy = e.clientY
            ptr.active = true; ptr.isTouch = false
            wakeUp()
        }
        function onMouseLeave() {
            ptr.active = false; ptr.vx = -9999; ptr.vy = -9999
        }

        // ── Touch ─────────────────────────────────────────────────────────────
        function onTouchStart(e: TouchEvent) {
            const t = e.touches[0]
            if (!t) return
            ptr.vx = t.clientX; ptr.vy = t.clientY
            ptr.active = true; ptr.isTouch = true
            ptr.lastTouchAt = performance.now()
            wakeUp()
        }
        function onTouchMove(e: TouchEvent) {
            const t = e.touches[0]
            if (!t) return
            ptr.vx = t.clientX; ptr.vy = t.clientY
            ptr.active = true; ptr.isTouch = true
            ptr.lastTouchAt = performance.now()
            wakeUp()
        }
        function onTouchEnd() {
            ptr.lastTouchAt = performance.now()
        }

        // ── Scroll: refresh cached rect + keep touch dots alive ───────────────
        function onScroll() {
            refreshRect()
            if (ptr.isTouch && ptr.vx !== -9999) {
                ptr.active = true
                ptr.lastTouchAt = performance.now()
                wakeUp()
            }
        }

        window.addEventListener("mousemove",   onMouseMove,  { passive: true })
        window.addEventListener("mouseleave",  onMouseLeave)
        window.addEventListener("touchstart",  onTouchStart, { passive: true })
        window.addEventListener("touchmove",   onTouchMove,  { passive: true })
        window.addEventListener("touchend",    onTouchEnd,   { passive: true })
        window.addEventListener("touchcancel", onTouchEnd,   { passive: true })
        window.addEventListener("scroll",      onScroll,     { passive: true })

        // ── RAF with idle-pause ────────────────────────────────────────────────
        let raf = 0
        let sleeping = false
        let lastFrameTime = 0

        function wakeUp() {
            if (sleeping) {
                sleeping = false
                raf = requestAnimationFrame(draw)
            }
        }

        function draw(now: number) {
            if (!canvas || !ctx || !hx) {
                raf = requestAnimationFrame(draw)
                return
            }

            // 30fps cap on mobile (touch interaction is imperceptible above 30)
            if (mobile() && now - lastFrameTime < MOBILE_FRAME_MS) {
                raf = requestAnimationFrame(draw)
                return
            }
            lastFrameTime = now

            // Linger: deactivate touch pointer after TOUCH_LINGER_MS
            if (ptr.isTouch && ptr.active) {
                if (now - ptr.lastTouchAt > TOUCH_LINGER_MS) {
                    ptr.active = false
                    ptr.vx = -9999; ptr.vy = -9999
                }
            }

            const W = canvas.width
            const H = canvas.height

            const scrollY   = window.scrollY
            const rectTop   = cacheDocTop - scrollY  // viewport-relative top (recomputed each frame from stable doc pos)
            const viewTop   = Math.max(0, -rectTop)
            const viewBot   = Math.min(H, viewTop + window.innerHeight)

            const mx   = ptr.active ? ptr.vx - cacheLeft : -9999
            const my   = ptr.active ? ptr.vy - rectTop   : -9999
            const act  = ptr.active
            const repelR = ptr.isTouch ? REPEL_RADIUS_MOBILE : REPEL_RADIUS_DESKTOP

            const ct = Math.max(0, Math.min(prevTop, viewTop) - SPACING * 2)
            const cb = Math.min(H, Math.max(prevBot, viewBot) + SPACING * 2)
            ctx.clearRect(0, ct, W, cb - ct)
            prevTop = viewTop; prevBot = viewBot

            const buf  = REPEL_RADIUS_MOBILE + MAX_DISP + SPACING
            const simT = Math.max(0,    Math.floor((viewTop - buf) / SPACING))
            const simB = Math.min(rows, Math.ceil( (viewBot + buf) / SPACING) + 1)

            let maxVelSq = 0

            for (let r = simT; r < simB; r++) {
                const base = r * cols
                for (let c = 0; c < cols; c++) {
                    const i = base + c
                    const px = hx[i] + dx[i]
                    const py = hy[i] + dy[i]

                    let fx = -dx[i] * SPRING_K
                    let fy = -dy[i] * SPRING_K

                    if (act) {
                        const ex = px - mx
                        const ey = py - my
                        const d2 = ex * ex + ey * ey
                        if (d2 < repelR * repelR && d2 > 0) {
                            const d    = Math.sqrt(d2)
                            const norm = 1.0 - d / repelR
                            const f    = norm * norm * REPEL_FORCE / d
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

                    const velSq = vx[i] * vx[i] + vy[i] * vy[i]
                    if (velSq > maxVelSq) maxVelSq = velSq
                }
            }

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

            // ── Idle detection: sleep when dots settle and pointer is inactive ─
            if (!act && maxVelSq < IDLE_VEL_SQ) {
                sleeping = true
                return  // wakeUp() restarts on next pointer event
            }

            raf = requestAnimationFrame(draw)
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
            window.removeEventListener("scroll",      onScroll)
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
