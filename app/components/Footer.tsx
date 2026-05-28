import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { SITE } from '@/lib/site'

const SocialIcon = {
  facebook: (size = 16) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
  ),
  instagram: (size = 16) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
  ),
  youtube: (size = 16) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
  ),
  twitter: (size = 16) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  ),
} as const

export default function Footer() {
  const quickLinks = SITE.navLinks.filter((l) => l.href !== '/')
  const programs = [
    { href: '/academics/pre-primary', label: 'Pre-Primary' },
    { href: '/academics/primary', label: 'Primary' },
    { href: '/academics/secondary', label: 'Secondary' },
    { href: '/academics', label: 'Co-curricular' },
  ]

  return (
    <footer className="relative isolate bg-deepblue-950 text-cream overflow-hidden">
      {/* decorative top wave */}
      <svg className="absolute -top-px inset-x-0 w-full text-cream" height="42" viewBox="0 0 1440 42" preserveAspectRatio="none" fill="currentColor" aria-hidden>
        <path d="M0,42 L0,18 C240,42 480,0 720,12 C960,24 1200,42 1440,18 L1440,42 Z" />
      </svg>

      {/* large faded display word */}
      <div aria-hidden className="absolute -bottom-12 left-1/2 -translate-x-1/2 font-display text-[18vw] leading-none text-cream/[0.04] whitespace-nowrap select-none pointer-events-none">
        Shrinath
      </div>

      <div className="container-x pt-28 pb-12 relative">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <span className="relative inline-flex size-14 items-center justify-center rounded-full bg-cream/10 ring-1 ring-cream/20 overflow-hidden">
                <Image src="/logo.png" alt="Shrinath Shikshan Sanstha" width={48} height={54} className="object-contain" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-2xl text-cream">Shrinath Shikshan</span>
                <span className="text-[10px] uppercase tracking-[0.28em] text-saffron-300">Sanstha · Est. {SITE.founded}</span>
              </span>
            </Link>
            <p className="text-cream/70 max-w-sm leading-relaxed">
              {SITE.tagline} A co-educated day school in Pusesavali, Maharashtra — raising thoughtful citizens since 2005 through Marathi, Hindi & English and lived values.
            </p>
            <div className="flex gap-2 mt-7">
              {(Object.keys(SITE.socials) as (keyof typeof SITE.socials)[]).map((k) => (
                <a
                  key={k}
                  href={SITE.socials[k]}
                  aria-label={`Visit our ${k}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-cream/15 text-cream/80 hover:bg-saffron-500 hover:text-ink hover:border-saffron-500 transition"
                >
                  {SocialIcon[k](16)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-base text-cream mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-cream/70 hover:text-saffron-300 link-underline text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-base text-cream mb-4">Programs</h4>
            <ul className="space-y-2.5">
              {programs.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-cream/70 hover:text-saffron-300 link-underline text-sm">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-base text-cream mb-4">Reach us</h4>
            <ul className="space-y-3 text-sm text-cream/75">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 text-saffron-400" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-saffron-400" />
                <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="hover:text-saffron-300">{SITE.phone}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-saffron-400" />
                <a href={`mailto:${SITE.email}`} className="hover:text-saffron-300">{SITE.email}</a>
              </li>
              <li className="text-cream/55 text-xs uppercase tracking-[0.2em] mt-4">Hours</li>
              <li className="text-cream/80">{SITE.hours}</li>
            </ul>
            <Link href="/admissions" className="btn btn-saffron mt-6 text-xs px-4 py-2.5">
              Apply Now <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-cream/55">
          <p>© {new Date().getFullYear()} Shrinath Shikshan Sanstha. All rights reserved.</p>
          <p>Built with care · Maharashtra, India</p>
        </div>
      </div>
    </footer>
  )
}
