import { cn } from '@/lib/cn'

type Tone = 'cream' | 'cream-2' | 'white' | 'deep' | 'gradient'

const toneClass: Record<Tone, string> = {
  cream: 'bg-cream text-ink',
  'cream-2': 'bg-cream-2 text-ink',
  white: 'bg-white text-ink',
  deep: 'bg-deepblue-950 text-cream',
  gradient: 'bg-gradient-to-b from-cream via-cream-2/40 to-cream text-ink',
}

export default function Section({
  id,
  tone = 'cream',
  children,
  className,
}: {
  id?: string
  tone?: Tone
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn('section relative', toneClass[tone], className)}>
      {children}
    </section>
  )
}
