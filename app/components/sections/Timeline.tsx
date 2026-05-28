import { StaggerParent, StaggerItem } from '@/app/components/ui/RevealStagger'
import { milestones } from '@/lib/data/timeline'

export default function Timeline() {
  return (
    <StaggerParent className="relative">
      <div aria-hidden className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-line md:-translate-x-1/2" />
      <ul className="space-y-10">
        {milestones.map((m, idx) => {
          const right = idx % 2 === 0
          return (
            <StaggerItem key={m.year} as="li" className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12">
              <span className="absolute left-2 md:left-1/2 md:-translate-x-1/2 top-1.5 inline-flex items-center justify-center size-5 rounded-full bg-saffron-500 ring-4 ring-cream" />
              <div className={right ? 'md:col-start-1 md:text-right md:pr-8' : 'md:col-start-2 md:pl-8'}>
                <span className="font-display text-3xl md:text-4xl text-deepblue-900">{m.year}</span>
                <h3 className="mt-2 font-display text-xl text-ink">{m.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed max-w-md md:ml-auto">
                  {m.body}
                </p>
              </div>
            </StaggerItem>
          )
        })}
      </ul>
    </StaggerParent>
  )
}
