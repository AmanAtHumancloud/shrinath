import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { StaggerParent, StaggerItem } from '@/app/components/ui/RevealStagger'
import { Scribble, Spiral, Sparkle } from '@/app/components/ui/Doodles'
import { programs } from '@/lib/data/programs'
import { photos } from '@/lib/images'
import { cn } from '@/lib/cn'

const THEME: Record<string, { bg: string; doodle: React.ReactNode }> = {
  'pre-primary': { bg: 'bg-play-orange', doodle: <Scribble className="absolute right-5 top-5 w-16 text-white/35" /> },
  'primary': { bg: 'bg-play-green', doodle: <Spiral className="absolute right-5 top-5 w-12 text-white/35" /> },
  'secondary': { bg: 'bg-play-blue', doodle: <Sparkle className="absolute right-5 top-5 w-9 text-white/40" /> },
}

export default function ProgramCards() {
  return (
    <StaggerParent className="grid gap-6 md:grid-cols-3">
      {programs.map((p) => {
        const t = THEME[p.slug]
        return (
          <StaggerItem
            key={p.slug}
            className={cn(
              'group relative flex flex-col overflow-hidden rounded-[28px] text-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift',
              t.bg,
            )}
          >
            {t.doodle}

            {/* photo */}
            <div className="relative m-4 mb-0 aspect-[4/3] overflow-hidden rounded-[20px]">
              <Image
                src={photos[p.image]}
                alt={`${p.name} at Shrinath`}
                fill
                sizes="(min-width:768px) 30vw, 90vw"
                placeholder="blur"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-deepblue-900">
                {p.ages}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/80">{p.classes}</span>
              <h3 className="mt-1.5 font-display text-3xl font-semibold leading-tight">{p.name}</h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-white/90">{p.blurb}</p>
              <Link
                href={`/academics/${p.slug}`}
                className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur transition hover:bg-white hover:text-deepblue-900"
              >
                Explore {p.name} <ArrowUpRight size={15} />
              </Link>
            </div>
          </StaggerItem>
        )
      })}
    </StaggerParent>
  )
}
