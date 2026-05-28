'use client'

import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { fadeUp as item, staggerParent as parent, scaleIn as pop } from '@/lib/motion'
import { Sparkle, Dots, Spiral, Sun } from '@/app/components/ui/Doodles'

export type HeroCTA = { label: string; href: string; variant?: 'primary' | 'saffron' | 'outline' | 'ghost' }

const ACCENTS: Record<string, { block: string; blob: string }> = {
  orange: { block: 'var(--color-play-orange)', blob: 'blob-1' },
  green: { block: 'var(--color-play-green)', blob: 'blob-2' },
  blue: { block: 'var(--color-play-blue)', blob: 'blob-3' },
  yellow: { block: 'var(--color-play-yellow)', blob: 'blob-1' },
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  ctas,
  image,
  imageAlt,
  accent = 'orange',
}: {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  ctas?: HeroCTA[]
  image?: StaticImageData | string
  imageAlt?: string
  accent?: keyof typeof ACCENTS
}) {
  const reduced = useReducedMotion()
  const a = ACCENTS[accent]

  return (
    <section className="relative isolate overflow-hidden bg-cream">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(55% 60% at 30% 0%, color-mix(in srgb, var(--color-saffron-200) 50%, transparent), transparent 70%)',
        }}
      />
      {/* doodles */}
      <Sparkle aria-hidden className="absolute left-[6%] top-[22%] w-7 text-play-orange" />
      <Dots aria-hidden className="absolute right-[44%] top-[14%] hidden w-9 text-play-blue md:block" />
      <Sun aria-hidden className={cn('absolute right-[8%] bottom-[16%] hidden w-12 md:block', !reduced && 'wiggle-slow')} />
      <Spiral aria-hidden className="absolute left-[40%] bottom-[12%] hidden w-10 text-play-green lg:block" />

      <div className="container-x grid min-h-[52vh] grid-cols-1 items-center gap-10 py-16 md:min-h-[58vh] md:py-20 lg:grid-cols-12">
        <motion.div
          initial={reduced ? false : 'hidden'}
          animate={reduced ? undefined : 'show'}
          variants={parent}
          className={cn('text-center lg:text-left', image ? 'lg:col-span-7' : 'lg:col-span-12 lg:text-center')}
        >
          {eyebrow && (
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border-2 border-deepblue-900/10 bg-white px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-deepblue-900 shadow-soft"
            >
              <span className="mark-diamond" />
              {eyebrow}
            </motion.span>
          )}
          <motion.h1
            variants={item}
            className="mt-5 font-display text-[clamp(2.4rem,5.5vw,4rem)] font-bold leading-[1.02] text-deepblue-950"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              variants={item}
              className={cn('mt-5 max-w-xl text-base font-medium leading-relaxed text-muted md:text-lg', !image && 'mx-auto')}
            >
              {subtitle}
            </motion.p>
          )}
          {ctas && ctas.length > 0 && (
            <motion.div variants={item} className={cn('mt-8 flex flex-wrap gap-3', image ? 'justify-center lg:justify-start' : 'justify-center')}>
              {ctas.map((c) => (
                <Link
                  key={c.href + c.label}
                  href={c.href}
                  className={cn(
                    'btn',
                    c.variant === 'outline' && 'btn-outline',
                    c.variant === 'ghost' && 'btn-ghost',
                    c.variant === 'primary' && 'btn-primary',
                    (!c.variant || c.variant === 'saffron') && 'btn-saffron',
                  )}
                >
                  {c.label}
                </Link>
              ))}
            </motion.div>
          )}
        </motion.div>

        {image && (
          <motion.div
            initial={reduced ? false : 'hidden'}
            animate={reduced ? undefined : 'show'}
            variants={pop}
            className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none"
          >
            <div aria-hidden className={cn('absolute -inset-3 rotate-3', a.blob)} style={{ background: a.block }} />
            <div className={cn('relative aspect-[4/3] overflow-hidden', a.blob)}>
              <Image
                src={image}
                alt={imageAlt ?? ''}
                fill
                priority
                sizes="(min-width:1024px) 40vw, 90vw"
                className="object-cover"
                placeholder={typeof image === 'string' ? 'empty' : 'blur'}
              />
            </div>
          </motion.div>
        )}
      </div>

      {/* bottom wave into next section */}
      <svg aria-hidden className="absolute -bottom-px inset-x-0 w-full text-cream" height="40" viewBox="0 0 1440 40" preserveAspectRatio="none" fill="currentColor">
        <path d="M0,40 L0,18 C240,38 480,4 720,16 C960,28 1200,38 1440,14 L1440,40 Z" />
      </svg>
    </section>
  )
}
