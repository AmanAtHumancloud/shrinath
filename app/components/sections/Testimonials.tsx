import { Quote } from 'lucide-react'
import { StaggerParent, StaggerItem } from '@/app/components/ui/RevealStagger'
import { testimonials } from '@/lib/data/testimonials'

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

export default function Testimonials() {
  return (
    <StaggerParent className="grid md:grid-cols-3 gap-6">
      {testimonials.map((t) => (
        <StaggerItem
          key={t.name}
          className="relative rounded-[24px] bg-white border border-line shadow-card p-8 flex flex-col"
        >
          <Quote size={28} className="text-saffron-500" />
          <p className="mt-4 text-ink/85 leading-relaxed text-[15px] flex-1">“{t.quote}”</p>
          <div className="mt-7 flex items-center gap-3 pt-5 border-t border-line">
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-deepblue-900 text-saffron-300 font-display text-sm tracking-wider">
              {initials(t.name)}
            </span>
            <div>
              <div className="font-semibold text-sm text-deepblue-900">{t.name}</div>
              <div className="text-xs text-muted">{t.role}</div>
            </div>
          </div>
        </StaggerItem>
      ))}
    </StaggerParent>
  )
}
