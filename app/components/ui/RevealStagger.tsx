'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { staggerParent, fadeUp, reducedIdentity } from '@/lib/motion'

export function StaggerParent({
  children,
  className,
  variants,
  amount = 0.15,
  once = true,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  variants?: Variants
  amount?: number
  once?: boolean
  as?: 'div' | 'ul' | 'ol' | 'section'
}) {
  const reduced = useReducedMotion()
  const v = reduced ? reducedIdentity : (variants ?? staggerParent)
  const Comp = motion[Tag] as typeof motion.div
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={v}
    >
      {children}
    </Comp>
  )
}

export function StaggerItem({
  children,
  className,
  variants,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  variants?: Variants
  as?: 'div' | 'li' | 'article' | 'section'
}) {
  const reduced = useReducedMotion()
  const v = reduced ? reducedIdentity : (variants ?? fadeUp)
  const Comp = motion[Tag] as typeof motion.div
  return (
    <Comp className={className} variants={v}>
      {children}
    </Comp>
  )
}
