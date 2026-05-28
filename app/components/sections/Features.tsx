import { BookOpen, FlaskConical, Users, HeartHandshake, Trophy, Languages } from 'lucide-react'
import { StaggerParent, StaggerItem } from '@/app/components/ui/RevealStagger'

const FEATURES = [
  { icon: BookOpen, title: 'Holistic curriculum', body: 'Beyond textbooks — projects, debates, and real-world problems.', chip: 'bg-play-orange' },
  { icon: Languages, title: 'Marathi · Hindi · English', body: 'Trilingual instruction that honours mother tongue and unlocks fluency.', chip: 'bg-play-green' },
  { icon: Users, title: 'Tight-knit classes', body: 'Single-division stages and small sections — every child seen, every voice heard.', chip: 'bg-play-blue' },
  { icon: FlaskConical, title: 'Modern facilities', body: 'Science, computer, and language labs across the campus.', chip: 'bg-play-yellow' },
  { icon: Trophy, title: 'Sports & arts', body: 'Inter-house athletics, music, drama, and the annual cultural day.', chip: 'bg-play-green' },
  { icon: HeartHandshake, title: 'Values first', body: 'Empathy, service, and integrity woven into school life.', chip: 'bg-play-orange' },
]

export default function Features() {
  return (
    <StaggerParent className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {FEATURES.map(({ icon: Icon, title, body, chip }) => (
        <StaggerItem
          key={title}
          className="group rounded-[24px] border-2 border-line-2 bg-white p-7 transition-all duration-400 hover:-translate-y-1 hover:border-transparent hover:shadow-card"
        >
          <div className={`inline-flex size-12 items-center justify-center rounded-2xl text-white transition-transform duration-400 group-hover:-rotate-6 group-hover:scale-110 ${chip}`}>
            <Icon size={22} strokeWidth={2.2} />
          </div>
          <h3 className="mt-5 font-display text-xl font-semibold text-deepblue-900">{title}</h3>
          <p className="mt-2 text-sm font-medium leading-relaxed text-muted">{body}</p>
        </StaggerItem>
      ))}
    </StaggerParent>
  )
}
