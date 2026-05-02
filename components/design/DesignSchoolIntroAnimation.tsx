// Server component — no "use client".
// Pure CSS animation; starts on first paint, no JS flash.

const COLORS     = ["#FF5C00", "#8F56FF", "#FF5659", "#29C76B", "#2592FF"] as const;
const STAGGER    = 70;   // ms between columns
const ENTER      = 580;  // ms per column to rise
// HOLD is ENTER-stagger-spread + desired pause so all columns are visible together:
// column 4 finishes entering at 280+580=860ms; column 0 needs to hold from 580ms → 860ms
const HOLD       = 500;  // ms  (280 stagger-spread + 220 desired pause)
const EXIT       = 500;  // ms per column to exit upward
const DUR        = ENTER + HOLD + EXIT;               // 1580ms per column
const LAST_DELAY = STAGGER * (COLORS.length - 1);     // 280ms
const TOTAL      = LAST_DELAY + DUR;                  // 1860ms (last column done)

// White background fades out exactly when the first column starts exiting,
// so the page is visible through the columns during the second half.
const BG_FADE_START = ENTER + HOLD;   // 1080ms — column 0 begins to exit
const BG_FADE_DUR   = LAST_DELAY;     // 280ms  — transparent by the time last column exits

const EP = (ENTER / DUR * 100).toFixed(2);            // 36.71% — enter done
const HP = ((ENTER + HOLD) / DUR * 100).toFixed(2);   // 68.35% — hold done

const css = `
.haca-intro {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    overflow: hidden;
    /* Hide + release pointer-events 50ms after last column finishes */
    animation: haca-intro-hide 1ms linear ${TOTAL + 50}ms forwards;
}
@keyframes haca-intro-hide {
    to { opacity: 0; visibility: hidden; pointer-events: none; }
}

/* White layer — covers the page during enter, fades away at exit start */
.haca-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
    background: #FCFCFC;
    animation: haca-bg-fade ${BG_FADE_DUR}ms ease-in-out ${BG_FADE_START}ms both;
}
@keyframes haca-bg-fade {
    from { opacity: 1; }
    to   { opacity: 0; }
}

/* Columns: rise from below, hold, exit upward */
@keyframes haca-col {
    0%      { transform: translateY(100%);  animation-timing-function: cubic-bezier(0.16,1,0.3,1); }
    ${EP}%  { transform: translateY(0);     animation-timing-function: linear; }
    ${HP}%  { transform: translateY(0);     animation-timing-function: cubic-bezier(0.76,0,0.24,1); }
    100%    { transform: translateY(-100%); }
}
.haca-col {
    flex: 1 1 0%;
    height: 100%;
    position: relative;
    z-index: 1;
    will-change: transform;
    animation-name: haca-col;
    animation-duration: ${DUR}ms;
    animation-timing-function: linear;
    animation-fill-mode: both;
}
`.trim();

export function DesignSchoolIntroAnimation() {
    return (
        <>
            {/* eslint-disable-next-line react/no-danger */}
            <style dangerouslySetInnerHTML={{ __html: css }} />

            <div className="haca-intro" aria-hidden="true">
                {/* White background — hides page during first half, fades at exit */}
                <div className="haca-bg" />

                {COLORS.map((color, i) => (
                    <div
                        key={color}
                        className="haca-col"
                        style={{
                            backgroundColor: color,
                            animationDelay: `${i * STAGGER}ms`,
                        }}
                    />
                ))}
            </div>
        </>
    );
}
