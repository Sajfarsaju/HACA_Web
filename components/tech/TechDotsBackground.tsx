"use client"

import { useEffect, useRef } from "react"

// ── Grid ──────────────────────────────────────────────────────────────────────
const SPACING    = 22     // px between dot centres
const DOT_R      = 1.0    // resting radius (tiny, crisp)
const BASE_ALPHA = 0.28   // resting opacity

// ── Repulsion (magnet) ────────────────────────────────────────────────────────
const REPEL_RADIUS = 110  // influence radius (px)
const REPEL_FORCE  = 20   // push strength
const SPRING_K     = 0.16 // spring-back stiffness
const DAMPING      = 0.70 // velocity decay

// ── Idle flow (keeps dots moving when cursor is still) ────────────────────────
const FLOW_AMP   = 0.28   // max idle displacement amplitude (px)
const FLOW_SPEED = 0.0008 // how fast the flow wave moves (rad/ms)
const FLOW_SCALE = 0.018  // spatial frequency of the wave

export function TechDotsBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d", { alpha: true })
        if (!ctx) return

        let cols = 0, rows = 0
        let hx: Float32Array, hy: Float32Array  // home positions (canvas px)
        let dx: Float32Array, dy: Float32Array  // displacement
        let vx: Float32Array, vy: Float32Array  // velocity
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

        // ── Mouse in VIEWPORT coords (so scroll doesn't stale the value) ──────
        const mouse = { vx: -9999, vy: -9999, active: false }

        function onMove(e: MouseEvent) {
            mouse.vx = e.clientX   // viewport X — never changes on scroll
            mouse.vy = e.clientY   // viewport Y — never changes on scroll
            mouse.active = true
        }
        function onLeave() { mouse.active = false; mouse.vx = -9999; mouse.vy = -9999 }

        window.addEventListener("mousemove", onMove,  { passive: true })
        window.addEventListener("mouseleave", onLeave)

        // ── Draw loop ─────────────────────────────────────────────────────────
        let raf: number
        const startTime = performance.now()

        function draw(now: number) {
            raf = requestAnimationFrame(draw)
            if (!canvas || !ctx || !hx) return

            const W   = canvas.width
            const H   = canvas.height
            const t   = (now - startTime) * FLOW_SPEED  // time for idle flow

            // Convert viewport mouse → canvas-local coords each frame
            // getBoundingClientRect().top changes as page scrolls → always correct
            const rect = canvas.getBoundingClientRect()
            const mx   = mouse.active ? mouse.vx - rect.left : -9999
            const my   = mouse.active ? mouse.vy - rect.top  : -9999
            const act  = mouse.active

            // Visible band in canvas coords
            const viewTop = Math.max(0, -rect.top)
            const viewBot = Math.min(H, viewTop + window.innerHeight)

            // Clear union of prev + current band
            const ct = Math.max(0, Math.min(prevTop, viewTop) - SPACING)
            const cb = Math.min(H, Math.max(prevBot, viewBot) + SPACING)
            ctx.clearRect(0, ct, W, cb - ct)
            prevTop = viewTop; prevBot = viewBot

            // Simulation band (adds repel + idle buffer)
            const buf  = REPEL_RADIUS + 60 + SPACING
            const simT = Math.max(0,    Math.floor((viewTop - buf) / SPACING))
            const simB = Math.min(rows, Math.ceil( (viewBot + buf) / SPACING) + 1)

            for (let r = simT; r < simB; r++) {
                const base = r * cols
                for (let c = 0; c < cols; c++) {
                    const i = base + c

                    // ── Idle flow force ─────────────────────────────────────
                    // Two overlapping sine waves give a gentle organic drift
                    const wave1 = Math.sin(hx[i] * FLOW_SCALE + t)
                    const wave2 = Math.cos(hy[i] * FLOW_SCALE + t * 0.7)
                    let fx = wave1 * FLOW_AMP * 0.06
                    let fy = wave2 * FLOW_AMP * 0.06

                    // ── Magnet repulsion ────────────────────────────────────
                    if (act) {
                        const px = hx[i] + dx[i]
                        const py = hy[i] + dy[i]
                        const ex = px - mx
                        const ey = py - my
                        const d2 = ex * ex + ey * ey
                        if (d2 < REPEL_RADIUS * REPEL_RADIUS) {
                            const d = Math.sqrt(d2) + 0.001
                            const f = (1.0 - d / REPEL_RADIUS) * (1.0 - d / REPEL_RADIUS) * REPEL_FORCE / d
                            fx += ex * f
                            fy += ey * f
                        }
                    }

                    // ── Spring back to home ─────────────────────────────────
                    // Target is idle offset, not absolute home, so flow is smooth
                    const idleX = Math.sin(hx[i] * FLOW_SCALE * 0.5 + t * 0.8) * FLOW_AMP
                    const idleY = Math.cos(hy[i] * FLOW_SCALE * 0.5 + t * 0.6) * FLOW_AMP
                    fx += (idleX - dx[i]) * SPRING_K
                    fy += (idleY - dy[i]) * SPRING_K

                    vx[i] = (vx[i] + fx) * DAMPING
                    vy[i] = (vy[i] + fy) * DAMPING
                    dx[i] += vx[i]
                    dy[i] += vy[i]

                    // Clamp displacement
                    const dSq = dx[i] * dx[i] + dy[i] * dy[i]
                    const MAX_DISP = act ? 50 : 4
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

            for (let r = drawT; r < drawB; r++) {
                const base = r * cols
                for (let c = 0; c < cols; c++) {
                    const i = base + c
                    const x = hx[i] + dx[i]
                    const y = hy[i] + dy[i]

                    const alpha = BASE_ALPHA
                    const r2    = DOT_R

                    ctx.beginPath()
                    ctx.arc(x, y, r2, 0, 6.2832)
                    ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(3)})`
                    ctx.fill()
                }
            }
        }

        raf = requestAnimationFrame(draw)
        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener("mousemove", onMove)
            window.removeEventListener("mouseleave", onLeave)
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
