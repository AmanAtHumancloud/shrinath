'use client'

import Image, { type StaticImageData } from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export type LightboxItem = { src: StaticImageData | string; alt: string }

export default function Lightbox({
  items,
  index,
  onClose,
  onChange,
}: {
  items: readonly LightboxItem[]
  index: number | null
  onClose: () => void
  onChange: (i: number) => void
}) {
  const open = index !== null

  const next = useCallback(() => {
    if (index === null) return
    onChange((index + 1) % items.length)
  }, [index, items.length, onChange])

  const prev = useCallback(() => {
    if (index === null) return
    onChange((index - 1 + items.length) % items.length)
  }, [index, items.length, onChange])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.documentElement.style.overflow = ''
    }
  }, [open, onClose, next, prev])

  return (
    <AnimatePresence>
      {open && index !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
          className="fixed inset-0 z-[200] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            type="button"
            aria-label="Close gallery"
            onClick={onClose}
            className="absolute top-4 right-4 p-3 rounded-full bg-white/10 text-cream hover:bg-white/20 transition"
          >
            <X size={20} />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-cream hover:bg-white/20 transition"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-cream hover:bg-white/20 transition"
          >
            <ChevronRight size={22} />
          </button>
          <motion.figure
            key={index}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-5xl w-full max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[80vh] flex items-center justify-center">
              <Image
                src={items[index].src}
                alt={items[index].alt}
                width={1600}
                height={1200}
                className="w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-lg"
                priority
              />
            </div>
            <figcaption className="text-cream/80 text-center mt-4 text-sm">
              {items[index].alt} <span className="text-cream/40 ml-2">{index + 1} / {items.length}</span>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
