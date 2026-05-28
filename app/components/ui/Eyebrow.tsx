import { cn } from '@/lib/cn'

export default function Eyebrow({
  children,
  className,
  tone = 'saffron',
}: {
  children: React.ReactNode
  className?: string
  tone?: 'saffron' | 'blue' | 'cream'
}) {
  const color =
    tone === 'blue' ? 'text-deepblue-700' : tone === 'cream' ? 'text-saffron-200' : 'text-saffron-700'
  return <span className={cn('eyebrow', color, className)}>{children}</span>
}
