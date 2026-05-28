import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/cn'

export default function CTABand({
  eyebrow = 'Take the next step',
  title,
  body,
  primaryCta,
  secondaryCta,
  className,
}: {
  eyebrow?: string
  title: string
  body?: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  className?: string
}) {
  return (
    <section className={cn('section relative isolate overflow-hidden bg-saffron-500 text-ink grain', className)}>
      <div aria-hidden className="absolute inset-0 sun-rays opacity-40 pointer-events-none" />
      <div aria-hidden className="absolute -bottom-24 -left-12 size-72 rounded-full bg-deepblue-900/10 blur-3xl" />
      <div className="container-x relative z-10 grid lg:grid-cols-12 items-center gap-10">
        <div className="lg:col-span-8">
          <span className="eyebrow !text-deepblue-900/70">{eyebrow}</span>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] text-deepblue-950">
            {title}
          </h2>
          {body && <p className="mt-4 max-w-2xl text-deepblue-950/80 text-base md:text-lg">{body}</p>}
        </div>
        <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3">
          <Link href={primaryCta.href} className="btn btn-primary">
            {primaryCta.label} <ArrowUpRight size={15} />
          </Link>
          {secondaryCta && (
            <Link href={secondaryCta.href} className="btn btn-outline border-deepblue-900/30">
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
