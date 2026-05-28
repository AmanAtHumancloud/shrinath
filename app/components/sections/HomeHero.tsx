'use client'

import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import { cn } from '@/lib/cn'
import { fadeUp as item, staggerParent as parent, scaleIn as pop } from '@/lib/motion'
import { Balloon, Ball, PaperPlane, Sparkle, Dots, CurveArrow, Sun } from '@/app/components/ui/Doodles'

export type HeroCTA = { label: string; href: string; variant?: 'primary' | 'saffron' | 'outline' | 'ghost' }

export default function HomeHero({
  eyebrow,
  title,
  subtitle,
  ctas,
  tags = [],
  leftPhoto,
  leftAlt,
  rightPhoto,
  rightAlt,
}: {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  ctas?: HeroCTA[]
  tags?: string[]
  leftPhoto: StaticImageData | string
  leftAlt: string
  rightPhoto: StaticImageData | string
  rightAlt: string
}) {
  const reduced = useReducedMotion()

  return (
    <section className="relative isolate overflow-hidden bg-cream">
      {/* soft radial wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, color-mix(in srgb, var(--color-saffron-200) 55%, transparent), transparent 70%)',
        }}
      />

      {/* floating sticker doodles */}
      <Balloon aria-hidden className={cn('absolute left-[4%] top-[16%] w-12 md:w-16', !reduced && 'float-slow')} />
      <Ball aria-hidden className={cn('absolute right-[6%] top-[12%] w-9 md:w-12', !reduced && 'float-med')} />
      <PaperPlane aria-hidden className={cn('absolute right-[3%] top-[52%] hidden w-12 md:block', !reduced && 'float-fast')} />
      <Sun aria-hidden className={cn('absolute left-[8%] top-[58%] hidden w-12 md:block', !reduced && 'wiggle-slow')} />
      <Sparkle aria-hidden className="absolute left-1/2 top-[8%] w-7 -translate-x-1/2 text-play-orange" />
      <Dots aria-hidden className="absolute right-[18%] top-[30%] hidden w-10 text-play-blue md:block" />

      <div className="container-x relative grid min-h-[78vh] grid-cols-1 items-center gap-10 py-20 lg:min-h-[86vh] lg:grid-cols-12 lg:gap-6">
        {/* Left photo well */}
        <motion.div
          initial={reduced ? false : 'hidden'}
          animate={reduced ? undefined : 'show'}
          variants={pop}
          className="order-2 hidden lg:order-1 lg:col-span-3 lg:block"
        >
          <PhotoWell src={leftPhoto} alt={leftAlt} blockColor="var(--color-play-green)" blob="blob-1" tilt="-rotate-3" />
        </motion.div>

        {/* Center copy */}
        <motion.div
          initial={reduced ? false : 'hidden'}
          animate={reduced ? undefined : 'show'}
          variants={parent}
          className="order-1 text-center lg:order-2 lg:col-span-6"
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
            className="mt-6 font-display text-[clamp(2.6rem,6.5vw,4.8rem)] font-semibold leading-[0.98] text-deepblue-950"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p variants={item} className="mx-auto mt-6 max-w-xl text-base font-medium leading-relaxed text-muted md:text-lg">
              {subtitle}
            </motion.p>
          )}

          {tags.length > 0 && (
            <motion.ul variants={item} className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {tags.map((t) => (
                <li key={t} className="inline-flex items-center gap-2 text-sm font-bold text-deepblue-900">
                  <span className="grid size-5 place-items-center rounded-full bg-play-green text-white">
                    <Check size={12} strokeWidth={3.5} />
                  </span>
                  {t}
                </li>
              ))}
            </motion.ul>
          )}

          {ctas && ctas.length > 0 && (
            <motion.div variants={item} className="mt-9 flex flex-wrap justify-center gap-3">
              {ctas.map((c) => (
                <Link
                  key={c.href + c.label}
                  href={c.href}
                  className={cn(
                    'btn',
                    c.variant === 'outline' && 'btn-outline',
                    c.variant === 'ghost' && 'btn-ghost',
                    (!c.variant || c.variant === 'saffron') && 'btn-saffron',
                    c.variant === 'primary' && 'btn-primary',
                  )}
                >
                  {c.label}
                </Link>
              ))}
            </motion.div>
          )}

          {/* doodle arrow under CTA */}
          <CurveArrow aria-hidden className="mx-auto mt-4 hidden w-16 text-play-orange md:block" />
        </motion.div>

        {/* Right photo well */}
        <motion.div
          initial={reduced ? false : 'hidden'}
          animate={reduced ? undefined : 'show'}
          variants={pop}
          className="order-3 hidden lg:col-span-3 lg:block"
        >
          <PhotoWell src={rightPhoto} alt={rightAlt} blockColor="var(--color-play-yellow)" blob="blob-2" tilt="rotate-3" />
        </motion.div>

        {/* Mobile: two photos as a row */}
        <div className="order-4 flex gap-4 lg:hidden">
          <PhotoWell src={leftPhoto} alt={leftAlt} blockColor="var(--color-play-green)" blob="blob-1" tilt="-rotate-2" className="flex-1" />
          <PhotoWell src={rightPhoto} alt={rightAlt} blockColor="var(--color-play-yellow)" blob="blob-2" tilt="rotate-2" className="flex-1" />
        </div>
      </div>

      {/* gentle bottom wave into next section */}
      <svg aria-hidden className="absolute -bottom-px inset-x-0 w-full text-cream-2" height="44" viewBox="0 0 1440 44" preserveAspectRatio="none" fill="currentColor">
        <path d="M0,44 L0,20 C240,40 480,4 720,18 C960,32 1200,42 1440,16 L1440,44 Z" />
      </svg>
    </section>
  )
}

function PhotoWell({
  src,
  alt,
  blockColor,
  blob,
  tilt,
  className,
}: {
  src: StaticImageData | string
  alt: string
  blockColor: string
  blob: string
  tilt: string
  className?: string
}) {
  return (
    <div className={cn('relative', className)}>
      {/* color block behind */}
      <div aria-hidden className={cn('absolute -inset-2', blob, tilt)} style={{ background: blockColor }} />
      <div className={cn('relative aspect-[3/4] overflow-hidden', blob)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width:1024px) 22vw, 45vw"
          className="object-cover"
          placeholder={typeof src === 'string' ? 'empty' : 'blur'}
        />
      </div>
    </div>
  )
}
