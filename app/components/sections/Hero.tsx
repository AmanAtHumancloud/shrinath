'use client'

import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { cn } from '@/lib/cn'

export type HeroCTA = { label: string; href: string; variant?: 'primary' | 'saffron' | 'outline' | 'ghost' }

export default function Hero({
  eyebrow,
  title,
  subtitle,
  ctas,
  bg,
  bgAlt,
  compact = false,
  align = 'left',
}: {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  ctas?: HeroCTA[]
  bg: StaticImageData | string
  bgAlt: string
  compact?: boolean
  align?: 'left' | 'center'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yBg = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 100])
  const yText = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -40])

  const heightClass = compact
    ? 'min-h-[58vh] md:min-h-[60vh]'
    : 'min-h-[88vh]'

  return (
    <section
      ref={ref}
      className={cn(
        'relative isolate overflow-hidden bg-deepblue-950 text-cream',
        heightClass,
      )}
    >
      {/* Image layer */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10">
        <Image src={bg} alt={bgAlt} fill priority sizes="100vw" placeholder={typeof bg === 'string' ? 'empty' : 'blur'} className="object-cover" />
        {/* Color overlays */}
        <div className="absolute inset-0 bg-deepblue-950/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-deepblue-950/40 via-deepblue-950/10 to-deepblue-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-deepblue-950/70 via-transparent to-transparent" />
      </motion.div>

      {/* Decorative SVG sun + stamp marks */}
      <svg
        aria-hidden
        className="absolute -right-20 -top-20 size-[420px] opacity-30 text-saffron-400"
        viewBox="0 0 200 200"
      >
        <g fill="none" stroke="currentColor" strokeWidth="0.7">
          {Array.from({ length: 36 }).map((_, i) => {
            const angle = (i * 360) / 36
            return (
              <line
                key={i}
                x1="100"
                y1="100"
                x2="100"
                y2="20"
                transform={`rotate(${angle} 100 100)`}
              />
            )
          })}
        </g>
        <circle cx="100" cy="100" r="34" fill="currentColor" opacity="0.45" />
      </svg>

      {/* Diagonal saffron stripe (bottom-left) */}
      <div aria-hidden className="absolute -bottom-40 -left-40 size-[520px] rounded-full bg-saffron-500/15 blur-3xl" />

      {/* Foreground */}
      <motion.div
        style={{ y: yText }}
        className={cn(
          'container-x relative z-10 flex flex-col justify-center',
          heightClass,
          align === 'center' ? 'items-center text-center' : 'items-start text-left',
        )}
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className={cn('max-w-3xl', align === 'center' && 'mx-auto')}
        >
          {eyebrow && (
            <motion.span
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
              className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 backdrop-blur px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-saffron-300"
            >
              <Sparkles size={12} />
              {eyebrow}
            </motion.span>
          )}

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } }}
            className={cn(
              'mt-6 font-display tracking-[-0.02em] leading-[0.98]',
              compact
                ? 'text-[clamp(2.6rem,6vw,4.4rem)]'
                : 'text-[clamp(2.8rem,7.2vw,5.4rem)]',
              'text-cream',
            )}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
              className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-cream/85"
            >
              {subtitle}
            </motion.p>
          )}

          {ctas && ctas.length > 0 && (
            <motion.div
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
              className={cn('mt-9 flex flex-wrap gap-3', align === 'center' && 'justify-center')}
            >
              {ctas.map((c) => (
                <Link
                  key={c.href + c.label}
                  href={c.href}
                  className={cn(
                    'btn',
                    c.variant === 'saffron' && 'btn-saffron',
                    c.variant === 'outline' && 'btn-outline border-cream/30 text-cream hover:bg-cream hover:text-deepblue-900',
                    (!c.variant || c.variant === 'primary') && 'btn-primary',
                  )}
                >
                  {c.label}
                  <ArrowUpRight size={15} />
                </Link>
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Bottom edge curve */}
      {!compact && (
        <svg
          aria-hidden
          className="absolute -bottom-px inset-x-0 w-full text-cream"
          height="48"
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,48 L0,18 C200,42 400,0 720,18 C1040,36 1240,40 1440,12 L1440,48 Z" />
        </svg>
      )}
    </section>
  )
}
