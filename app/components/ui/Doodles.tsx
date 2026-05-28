/**
 * Hand-drawn doodle decorations (Edukids-style).
 * Pure inline SVG — no deps. Each accepts className for sizing/position/color.
 * Stroke uses currentColor so callers set color via text-* classes.
 */
import type { SVGProps } from 'react'

type D = SVGProps<SVGSVGElement>

const base = { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' } as const

/** Loose energetic scribble loop */
export function Scribble(props: D) {
  return (
    <svg viewBox="0 0 120 80" aria-hidden {...props}>
      <path
        {...base}
        strokeWidth={4}
        d="M14 54c-8-10-6-26 8-30s30 8 24 22-26 14-30 0 8-30 26-30 30 18 24 30"
      />
    </svg>
  )
}

/** Four-point sparkle / twinkle */
export function Sparkle(props: D) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden {...props}>
      <path
        {...base}
        strokeWidth={3}
        d="M20 4c1 8 7 14 15 16-8 2-14 8-15 16-1-8-7-14-15-16 8-2 14-8 15-16Z"
      />
    </svg>
  )
}

/** Curved arrow pointing down-right (guides the eye) */
export function CurveArrow(props: D) {
  return (
    <svg viewBox="0 0 90 70" aria-hidden {...props}>
      <path {...base} strokeWidth={3.5} d="M6 8c30 6 52 24 60 50" />
      <path {...base} strokeWidth={3.5} d="M48 56l18 4 2-19" />
    </svg>
  )
}

/** Spiral swirl */
export function Spiral(props: D) {
  return (
    <svg viewBox="0 0 60 60" aria-hidden {...props}>
      <path
        {...base}
        strokeWidth={3.5}
        d="M30 30c0-6 9-6 9 0s-12 9-15 0 9-18 21-12 12 24-3 30-30 0-24-30 18-21 30 0"
      />
    </svg>
  )
}

/** Hot-air balloon sticker */
export function Balloon(props: D) {
  return (
    <svg viewBox="0 0 60 80" aria-hidden {...props}>
      <path d="M30 4C16 4 8 16 8 30c0 14 14 24 22 28 8-4 22-14 22-28C52 16 44 4 30 4Z" fill="#EE7A3C" />
      <path d="M30 4c-7 0-9 14-9 28s4 24 9 28" fill="#F5B731" opacity=".55" />
      <path d="M30 4c7 0 9 14 9 28s-4 24-9 28" fill="#C4582A" opacity=".4" />
      <path d="M24 60h12l-2 10h-8z" fill="#2B1D14" />
      <path d="M26 70h8" stroke="#2B1D14" strokeWidth={2} strokeLinecap="round" fill="none" />
    </svg>
  )
}

/** Paper plane sticker */
export function PaperPlane(props: D) {
  return (
    <svg viewBox="0 0 60 60" aria-hidden {...props}>
      <path d="M54 6 6 28l18 6 4 18 8-14 14 6Z" fill="#3D6FB4" />
      <path d="M54 6 28 38l0 14 8-14Z" fill="#2B548F" />
      <path {...base} stroke="#2B1D14" strokeWidth={2} strokeDasharray="2 5" d="M6 50c8-4 14-10 18-16" opacity=".5" />
    </svg>
  )
}

/** Bouncy ball */
export function Ball(props: D) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden {...props}>
      <circle cx="24" cy="24" r="20" fill="#4C9A5A" />
      <path {...base} stroke="#fff" strokeWidth={2.5} d="M9 17c10 6 20 6 30 0M9 31c10-6 20-6 30 0M24 4v40" opacity=".8" />
    </svg>
  )
}

/** Little burst of dots */
export function Dots(props: D) {
  return (
    <svg viewBox="0 0 50 50" aria-hidden {...props}>
      {[
        [25, 6], [42, 16], [44, 35], [30, 46], [10, 42], [4, 22], [12, 8],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i % 2 ? 3 : 4} fill="currentColor" />
      ))}
    </svg>
  )
}

/** Smiling sun */
export function Sun(props: D) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden {...props}>
      <circle cx="32" cy="32" r="14" fill="#F5B731" />
      <g stroke="#F5B731" strokeWidth={3} strokeLinecap="round">
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4
          return (
            <line
              key={i}
              x1={32 + Math.cos(a) * 20}
              y1={32 + Math.sin(a) * 20}
              x2={32 + Math.cos(a) * 27}
              y2={32 + Math.sin(a) * 27}
            />
          )
        })}
      </g>
    </svg>
  )
}
