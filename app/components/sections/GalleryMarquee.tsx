'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { galleryAll } from '@/lib/images'

export default function GalleryMarquee() {
  // duplicate items for seamless loop
  const loop = [...galleryAll.slice(0, 8), ...galleryAll.slice(0, 8)]
  return (
    <div className="space-y-8">
      <div className="container-x flex items-end justify-between gap-6">
        <div>
          <span className="eyebrow text-saffron-700">Glimpses · Life on campus</span>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] tracking-tight text-deepblue-900">
            Twelve frames from a Tuesday
          </h2>
        </div>
        <Link href="/gallery" className="hidden md:inline-flex link-underline text-sm font-semibold text-deepblue-900">
          View full gallery <ArrowUpRight size={15} />
        </Link>
      </div>

      <div className="marquee">
        <ul className="marquee-track">
          {loop.map((p, i) => (
            <li key={i} className="shrink-0 w-[300px] md:w-[360px]">
              <div className="relative h-44 md:h-52 rounded-[18px] overflow-hidden border border-line bg-white shadow-card">
                <Image src={p.src} alt={p.alt} fill sizes="360px" className="object-cover" placeholder="blur" />
                <span className="absolute top-3 left-3 px-2 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] bg-cream/95 text-deepblue-900">
                  {p.tag}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="container-x md:hidden">
        <Link href="/gallery" className="link-underline text-sm font-semibold text-deepblue-900 inline-flex items-center gap-1">
          View full gallery <ArrowUpRight size={15} />
        </Link>
      </div>
    </div>
  )
}
