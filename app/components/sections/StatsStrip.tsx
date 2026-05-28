'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { CalendarHeart, Trophy, Languages } from 'lucide-react'
import AnimatedCounter from '@/app/components/ui/AnimatedCounter'
import { PaperPlane } from '@/app/components/ui/Doodles'

const STATS = [
  { value: 20, suffix: '+', label: 'Years rooted · since 2005', Icon: CalendarHeart, chip: 'var(--color-play-orange)' },
  { value: 97, suffix: '%', label: 'SSC Board marks · Cluster Topper', Icon: Trophy, chip: 'var(--color-play-yellow)' },
  { value: 3, suffix: '', label: 'Languages · Marathi, Hindi, English', Icon: Languages, chip: 'var(--color-play-green)' },
]

export default function StatsStrip() {
  const reduced = useReducedMotion()
  return (
    <div className="container-x">
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 28 }}
        whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[28px] bg-cocoa px-6 py-9 text-cream shadow-lift md:px-10"
      >
        {/* sticker */}
        <PaperPlane aria-hidden className={`absolute -right-2 -top-2 w-14 opacity-90 ${reduced ? '' : 'wiggle-slow'}`} />

        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 sm:divide-x sm:divide-white/10">
          {STATS.map(({ value, suffix, label, Icon, chip }) => (
            <li key={label} className="flex flex-col items-start gap-3 md:px-6 md:first:pl-0">
              <span className="grid size-11 place-items-center rounded-xl text-cocoa" style={{ background: chip }}>
                <Icon size={22} strokeWidth={2.2} />
              </span>
              <span className="font-display text-4xl font-semibold leading-none text-cream md:text-5xl">
                <AnimatedCounter to={value} suffix={suffix} />
              </span>
              <span className="text-sm font-medium leading-snug text-cream/70">{label}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}
