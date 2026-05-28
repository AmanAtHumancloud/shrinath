import Image, { type StaticImageData } from 'next/image'
import { cn } from '@/lib/cn'

type Aspect = '1/1' | '4/3' | '3/2' | '16/9' | '21/9' | '3/4' | '4/5'

const aspectClass: Record<Aspect, string> = {
  '1/1': 'aspect-square',
  '4/3': 'aspect-[4/3]',
  '3/2': 'aspect-[3/2]',
  '16/9': 'aspect-video',
  '21/9': 'aspect-[21/9]',
  '3/4': 'aspect-[3/4]',
  '4/5': 'aspect-[4/5]',
}

export default function SmartImage({
  src,
  alt,
  aspect = '4/3',
  className,
  imageClassName,
  priority = false,
  sizes = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
  rounded = 'lg',
}: {
  src: StaticImageData | string
  alt: string
  aspect?: Aspect
  className?: string
  imageClassName?: string
  priority?: boolean
  sizes?: string
  rounded?: 'none' | 'md' | 'lg' | 'xl' | '2xl'
}) {
  const radius = rounded === 'none'
    ? ''
    : rounded === 'md'
    ? 'rounded-md'
    : rounded === 'xl'
    ? 'rounded-[28px]'
    : rounded === '2xl'
    ? 'rounded-[36px]'
    : 'rounded-[20px]'
  return (
    <div className={cn('relative overflow-hidden bg-cream-2', aspectClass[aspect], radius, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        placeholder={typeof src === 'string' ? 'empty' : 'blur'}
        className={cn('object-cover', imageClassName)}
      />
    </div>
  )
}
