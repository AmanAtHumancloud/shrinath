'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { SITE } from '@/lib/site'
import { cn } from '@/lib/cn'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // close mobile menu after navigation
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-cream/85 backdrop-blur-md shadow-soft border-b border-line'
          : 'bg-cream/0',
      )}
    >
      <div className="container-x flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="relative inline-flex size-12 items-center justify-center rounded-full bg-cream-2 ring-1 ring-saffron-300/60 overflow-hidden">
            <Image src="/logo.png" alt="Shrinath Shikshan Sanstha" width={42} height={48} className="object-contain" priority />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-[19px] text-deepblue-900 tracking-tight">
              {SITE.shortName} Shikshan
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-saffron-700">
              Sanstha · Est. {SITE.founded}
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {SITE.navLinks.map((l) => {
            const active = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href))
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition rounded-full',
                  active ? 'text-deepblue-900' : 'text-ink/70 hover:text-deepblue-900',
                )}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-saffron-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 38 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/admissions" className="hidden sm:inline-flex btn btn-saffron text-xs px-4 py-2.5">
            Apply Now <ArrowUpRight size={14} />
          </Link>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center size-11 rounded-full border border-line text-ink hover:bg-cream-2 transition"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-line bg-cream"
          >
            <div className="container-x py-6">
              <ul className="flex flex-col divide-y divide-line">
                {SITE.navLinks.map((l) => {
                  const active = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href))
                  return (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className={cn(
                          'flex items-center justify-between py-3 font-display text-2xl tracking-tight',
                          active ? 'text-deepblue-900' : 'text-ink/80',
                        )}
                      >
                        <span>{l.label}</span>
                        <ArrowUpRight size={18} className="text-saffron-600" />
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <Link href="/admissions" className="btn btn-saffron mt-6 w-full">
                Apply Now <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
