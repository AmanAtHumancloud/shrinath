import SmartImage from './SmartImage'
import { cn } from '@/lib/cn'

export default function ImageCard({
  src,
  alt,
  title,
  caption,
  aspect = '4/3',
  className,
}: {
  src: Parameters<typeof SmartImage>[0]['src']
  alt: string
  title?: string
  caption?: string
  aspect?: Parameters<typeof SmartImage>[0]['aspect']
  className?: string
}) {
  return (
    <figure className={cn('group relative overflow-hidden rounded-[20px] bg-white shadow-card border border-line', className)}>
      <SmartImage
        src={src}
        alt={alt}
        aspect={aspect}
        rounded="none"
        imageClassName="transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
      />
      {(title || caption) && (
        <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent">
          {title && <div className="text-cream font-display text-xl leading-tight">{title}</div>}
          {caption && <div className="text-cream/80 text-sm mt-1">{caption}</div>}
        </figcaption>
      )}
    </figure>
  )
}
