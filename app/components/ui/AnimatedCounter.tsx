'use client'

import { animate, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function AnimatedCounter({
  to,
  duration = 1.6,
  suffix = '',
  prefix = '',
}: {
  to: number
  duration?: number
  suffix?: string
  prefix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const reduced = useReducedMotion()
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduced) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVal(to)
      return
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
    })
    return () => controls.stop()
  }, [inView, reduced, to, duration])

  const formatted = Number.isInteger(to) ? Math.round(val).toLocaleString('en-IN') : val.toFixed(1)

  return (
    <span ref={ref} aria-label={`${prefix}${to}${suffix}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
