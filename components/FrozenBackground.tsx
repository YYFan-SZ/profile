"use client";

// Calm paper-like background for the portfolio. The decoration stays sparse so
// the piano and content remain the visual focus.
export default function FrozenBackground() {
  return (
    <div
      aria-hidden
      className="frozen-bg pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="frozen-archive absolute inset-0" style={{ color: "rgba(112, 83, 61, 0.34)" }}>
        <span
          className="absolute uppercase"
          style={{ top: "11%", left: "4.5%", fontSize: "10px", letterSpacing: "0.26em", opacity: 0.72 }}
        >
          ARCHIVE / 2026
        </span>
        <span
          className="absolute uppercase"
          style={{ top: "17%", right: "4.5%", fontSize: "9px", letterSpacing: "0.24em", opacity: 0.58 }}
        >
          SOUND / FORM
        </span>
        <span
          className="absolute uppercase"
          style={{ bottom: "8%", left: "4.5%", fontSize: "9px", letterSpacing: "0.2em", opacity: 0.52 }}
        >
          NO. 01 — PERSONAL WORK
        </span>

        <span
          className="absolute"
          style={{ top: "8%", right: "12%", width: "14px", height: "14px", borderTop: "1px solid currentColor", borderLeft: "1px solid currentColor", opacity: 0.55 }}
        />
        <span
          className="absolute"
          style={{ right: "8%", bottom: "9%", width: "14px", height: "14px", borderRight: "1px solid currentColor", borderBottom: "1px solid currentColor", opacity: 0.45 }}
        />
        <span
          className="absolute"
          style={{ top: "13%", left: "4.5%", width: "88px", borderTop: "1px solid currentColor", opacity: 0.38 }}
        />
        <span
          className="absolute"
          style={{ right: "4.5%", bottom: "13%", height: "70px", borderLeft: "1px solid currentColor", opacity: 0.34 }}
        />
      </div>
      <div className="frozen-sound-marks" aria-hidden="true">
        <span className="frozen-note frozen-note--one">♪</span>
        <span className="frozen-note frozen-note--two">♫</span>
        <span className="frozen-beat frozen-beat--one"><i /><i /><i /><i /></span>
        <span className="frozen-beat frozen-beat--two"><i /><i /><i /></span>
        <span className="frozen-orbit frozen-orbit--one"><i /></span>
        <span className="frozen-orbit frozen-orbit--two"><i /></span>
        <span className="frozen-spark frozen-spark--one">✦</span>
        <span className="frozen-spark frozen-spark--two">·</span>
      </div>
      <div className="frozen-vignette absolute inset-0" />
      <div className="frozen-grain absolute inset-0" />
    </div>
  );
}
