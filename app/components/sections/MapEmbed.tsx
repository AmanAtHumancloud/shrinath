import { ExternalLink, MapPin } from 'lucide-react'
import { SITE } from '@/lib/site'

export default function MapEmbed() {
  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] md:aspect-[16/9] rounded-[20px] overflow-hidden border border-line shadow-card bg-cream-2">
        {/*
          Uses keyless output=embed form — short links (maps.app.goo.gl) are blocked
          inside iframes by X-Frame-Options and render blank.
        */}
        <iframe
          src={SITE.mapEmbedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${SITE.name} — campus location`}
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted inline-flex items-center gap-2">
          <MapPin size={14} className="text-saffron-600" />
          {SITE.address}
        </p>
        <a
          href={SITE.mapShortLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-deepblue-900 link-underline"
        >
          Open in Google Maps <ExternalLink size={14} />
        </a>
      </div>
    </div>
  )
}
