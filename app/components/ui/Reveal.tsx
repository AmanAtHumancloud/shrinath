'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { fadeUp, reducedIdentity } from '@/lib/motion'

export default function Reveal({
  children,
  variants,
  delay,
  className,
  once = true,
  amount = 0.2,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  variants?: Variants
  delay?: number
  className?: string
  once?: boolean
  amount?: number
  as?: 'div' | 'section' | 'article' | 'li' | 'span' | 'h2' | 'h3' | 'p'
}) {
  const reduced = useReducedMotion()
  const v = reduced ? reducedIdentity : (variants ?? fadeUp)
  const Comp = motion[Tag] as typeof motion.div
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={v}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </Comp>
  )
}
