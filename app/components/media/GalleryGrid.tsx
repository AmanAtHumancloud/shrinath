'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import Lightbox from './Lightbox'
import { galleryAll, galleryTags, type GalleryTag } from '@/lib/images'
import { cn } from '@/lib/cn'

type GalleryItem = (typeof galleryAll)[number]

export default function GalleryGrid() {
  const [tag, setTag] = useState<GalleryTag>('All')
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const reduced = useReducedMotion()

  const items: readonly GalleryItem[] = useMemo(() => {
    if (tag === 'All') return galleryAll
    return galleryAll.filter((p) => p.tag === tag)
  }, [tag])

  return (
    <>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {galleryTags.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTag(t)}
            className={cn(
              'px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.16em] border transition',
              tag === t
                ? 'bg-deepblue-900 text-cream border-deepblue-900'
                : 'bg-transparent text-ink border-line hover:border-deepblue-900',
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {/* CSS columns masonry */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
        {items.map((p, i) => (
          <motion.button
            type="button"
            key={(typeof p.src === 'string' ? p.src : p.src.src) + i}
            onClick={() => setOpenIndex(i)}
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55, delay: (i % 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="group relative mb-5 inline-block w-full overflow-hidden rounded-[20px] border border-line bg-white shadow-card cursor-zoom-in"
            aria-label={`Open: ${p.alt}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="block w-full h-auto object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
              placeholder="blur"
            />
            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] bg-cream/90 text-deepblue-900">
              {p.tag}
            </span>
          </motion.button>
        ))}
      </div>

      <Lightbox items={items} index={openIndex} onClose={() => setOpenIndex(null)} onChange={setOpenIndex} />
    </>
  )
}
