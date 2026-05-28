import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import PageHero from '../components/sections/PageHero'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import ContactForm from '../components/forms/ContactForm'
import MapEmbed from '../components/sections/MapEmbed'
import { SITE } from '@/lib/site'
import { photos } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Reach Shrinath Shikshan Sanstha — phone, email, address, school hours, location map, and a contact form.',
}

const DETAILS = [
  { icon: MapPin, label: 'Address', value: SITE.address, chip: 'bg-play-orange' },
  { icon: Phone, label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, '')}`, chip: 'bg-play-green' },
  { icon: Phone, label: 'Admissions desk', value: SITE.phoneSecondary, href: `tel:${SITE.phoneSecondary.replace(/\s/g, '')}`, chip: 'bg-play-blue' },
  { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}`, chip: 'bg-play-yellow' },
  { icon: Clock, label: 'School hours', value: SITE.hours, chip: 'bg-play-orange' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        accent="yellow"
        eyebrow="Get in touch"
        title={<>We&apos;d love to <span className="squiggle text-play-orange">hear from you.</span></>}
        subtitle="Questions, tours, admissions — we read every message and reply within one school day."
        image={photos.aboutCollage1}
        imageAlt="Reception area at Shrinath"
      />

      <Section tone="cream">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          {/* Left details */}
          <aside className="lg:col-span-4 space-y-8">
            <SectionHeading eyebrow="Reach us" title="The simple way." className="!mb-4" />

            <ul className="space-y-4">
              {DETAILS.map((d) => (
                <li key={d.label} className="flex gap-3 items-start">
                  <span className={`inline-flex size-10 items-center justify-center rounded-2xl text-white shrink-0 ${d.chip}`}>
                    <d.icon size={16} strokeWidth={2.2} />
                  </span>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-saffron-700 font-semibold">{d.label}</div>
                    {d.href ? (
                      <a href={d.href} className="mt-1 block text-deepblue-900 link-underline text-base">{d.value}</a>
                    ) : (
                      <div className="mt-1 text-ink text-base">{d.value}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="rounded-[20px] bg-deepblue-950 text-cream p-6">
              <div className="text-[10px] uppercase tracking-[0.22em] text-saffron-300 font-semibold">Admissions 2026–27</div>
              <p className="mt-3 text-cream/90 leading-relaxed text-sm">
                Seats are filling for the next academic year. Submit an enquiry and we&apos;ll fast-track your tour.
              </p>
              <Link href="/admissions" className="btn btn-saffron mt-5 text-xs px-4 py-2.5">
                Apply now <ArrowUpRight size={14} />
              </Link>
            </div>
          </aside>

          {/* Right form */}
          <div className="lg:col-span-8">
            <Reveal>
              <div className="rounded-[24px] border border-line bg-white p-6 md:p-9 shadow-card">
                <SectionHeading
                  eyebrow="Send us a message"
                  title="What can we help with?"
                  kicker="No drop-down purgatory — just a short form. We read every one."
                  className="!mb-6"
                />
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="cream-2" className="!pt-0">
        <div className="container-x">
          <SectionHeading eyebrow="Find us" title="On the map." />
          <MapEmbed />
        </div>
      </Section>
    </>
  )
}
