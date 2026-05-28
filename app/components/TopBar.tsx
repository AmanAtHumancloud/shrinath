import { Phone, Mail, MapPin } from 'lucide-react'
import { SITE } from '@/lib/site'

export default function TopBar() {
  return (
    <div className="hidden md:block bg-deepblue-950 text-cream/90">
      <div className="container-x flex items-center justify-between gap-6 py-2 text-[12px] tracking-wide">
        <div className="flex items-center gap-6">
          <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="link-underline inline-flex items-center gap-1.5 hover:text-saffron-300">
            <Phone size={13} />
            {SITE.phone}
          </a>
          <a href={`mailto:${SITE.email}`} className="link-underline inline-flex items-center gap-1.5 hover:text-saffron-300">
            <Mail size={13} />
            {SITE.email}
          </a>
        </div>
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-1.5 text-cream/70">
            <MapPin size={13} />
            Pusesavali, Maharashtra
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-saffron-400 animate-pulse" />
            Admissions open · 2026–27
          </span>
        </div>
      </div>
    </div>
  )
}
