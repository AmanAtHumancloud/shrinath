import AnimatedCounter from './AnimatedCounter'
import { cn } from '@/lib/cn'

export default function Stat({
  value,
  suffix,
  prefix,
  label,
  invert = false,
}: {
  value: number
  suffix?: string
  prefix?: string
  label: string
  invert?: boolean
}) {
  return (
    <div className="flex flex-col">
      <span
        className={cn(
          'font-display text-[clamp(2.4rem,5.4vw,4rem)] leading-none tracking-tight',
          invert ? 'text-cream' : 'text-deepblue-900',
        )}
      >
        <AnimatedCounter to={value} suffix={suffix} prefix={prefix} />
      </span>
      <span
        className={cn(
          'mt-3 text-xs font-semibold uppercase tracking-[0.2em]',
          invert ? 'text-saffron-300' : 'text-saffron-700',
        )}
      >
        {label}
      </span>
    </div>
  )
}
