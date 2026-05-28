import { CalendarDays } from 'lucide-react'
import { StaggerParent, StaggerItem } from '@/app/components/ui/RevealStagger'
import { events } from '@/lib/data/news'

const CHIP = ['bg-play-orange', 'bg-play-green', 'bg-play-blue']

export default function NewsEvents() {
  return (
    <StaggerParent className="grid md:grid-cols-3 gap-6">
      {events.map((e, i) => (
        <StaggerItem
          key={e.title}
          className="group rounded-[24px] bg-cream border-2 border-line-2 p-7 flex flex-col transition-all duration-400 hover:-translate-y-1 hover:border-transparent hover:bg-white hover:shadow-card"
        >
          <div className="flex items-center justify-between text-xs">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-white font-bold uppercase tracking-[0.16em] ${CHIP[i % CHIP.length]}`}>
              <CalendarDays size={11} /> {e.badge}
            </span>
            <time className="text-muted font-semibold">{e.when}</time>
          </div>
          <h3 className="mt-5 font-display text-xl font-semibold text-deepblue-900 leading-snug">{e.title}</h3>
          <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{e.excerpt}</p>
        </StaggerItem>
      ))}
    </StaggerParent>
  )
}
