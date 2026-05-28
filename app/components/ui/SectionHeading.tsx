import Eyebrow from './Eyebrow'
import { cn } from '@/lib/cn'

export default function SectionHeading({
  eyebrow,
  title,
  kicker,
  align = 'left',
  invert = false,
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  kicker?: React.ReactNode
  align?: 'left' | 'center'
  invert?: boolean
  className?: string
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <div className={cn('max-w-3xl mb-10 md:mb-16', alignClass, className)}>
      {eyebrow && (
        <div className={cn(align === 'center' && 'flex justify-center')}>
          <Eyebrow tone={invert ? 'cream' : 'saffron'}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={cn(
          'mt-4 font-display tracking-tight',
          'text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.05]',
          invert ? 'text-cream' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {kicker && (
        <p
          className={cn(
            'mt-5 text-base md:text-lg leading-relaxed',
            invert ? 'text-cream/80' : 'text-muted',
          )}
        >
          {kicker}
        </p>
      )}
    </div>
  )
}
