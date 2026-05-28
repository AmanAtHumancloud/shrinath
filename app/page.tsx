import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

import HomeHero from './components/sections/HomeHero'
import StatsStrip from './components/sections/StatsStrip'
import Section from './components/ui/Section'
import SectionHeading from './components/ui/SectionHeading'
import ProgramCards from './components/sections/ProgramCards'
import Features from './components/sections/Features'
import GalleryMarquee from './components/sections/GalleryMarquee'
import Testimonials from './components/sections/Testimonials'
import NewsEvents from './components/sections/NewsEvents'
import CTABand from './components/sections/CTABand'
import Reveal from './components/ui/Reveal'
import { slideInRight, slideInLeft } from '@/lib/motion'
import { photos } from '@/lib/images'

export default function Home() {
  return (
    <>
      <HomeHero
        eyebrow="Established 2005 · Maharashtra"
        title={
          <>
            Where every child<br />
            <span className="squiggle text-play-orange">becomes their best.</span>
          </>
        }
        subtitle="A co-educated day school built on Marathi, Hindi & English, modern pedagogy, and small classes — from Pre-Primary all the way to SSC (Class X)."
        tags={['Pre-Primary to SSC', 'Marathi · Hindi · English', 'Co-educated day school']}
        ctas={[
          { label: 'Apply for 2026–27', href: '/admissions', variant: 'saffron' },
          { label: 'Take a campus tour', href: '/contact', variant: 'outline' },
        ]}
        leftPhoto={photos.prePrimary1}
        leftAlt="A pre-primary child at activity time"
        rightPhoto={photos.primary1}
        rightAlt="A primary student in class"
      />

      <Section tone="cream-2" className="!py-14 md:!py-16">
        <StatsStrip />
      </Section>

      <Section tone="cream">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <Reveal variants={slideInLeft}>
              <span className="eyebrow">A school with character</span>
              <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] text-deepblue-900">
                Roots in Marathi.<br />
                Wings in English.
              </h2>
              <p className="mt-6 text-muted leading-relaxed text-base md:text-lg max-w-xl">
                Shrinath Shikshan Sanstha grew out of a simple idea — that a child should feel at home in their mother tongue and confident in the wider world. Two decades on, that idea still shapes every class period.
              </p>
              <div className="mt-7 flex gap-3 flex-wrap">
                <Link href="/about" className="btn btn-primary">
                  Our story <ArrowUpRight size={15} />
                </Link>
                <Link href="/academics" className="btn btn-ghost">
                  Browse academics
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal variants={slideInRight}>
              <div className="relative">
                <div aria-hidden className="absolute -inset-4 rounded-[28px] bg-saffron-300/30 -rotate-2" />
                <div className="relative grid grid-cols-5 gap-3">
                  <div className="col-span-3 relative aspect-[4/5] rounded-[20px] overflow-hidden border border-line shadow-card">
                    <Image src={photos.aboutCollage1} alt="Students engaged in classroom learning" fill sizes="(min-width:1024px) 30vw, 50vw" className="object-cover" placeholder="blur" />
                  </div>
                  <div className="col-span-2 grid gap-3">
                    <div className="relative aspect-square rounded-[20px] overflow-hidden border border-line shadow-card">
                      <Image src={photos.aboutMission} alt="School assembly" fill sizes="(min-width:1024px) 18vw, 25vw" className="object-cover" placeholder="blur" />
                    </div>
                    <div className="relative aspect-square rounded-[20px] overflow-hidden border border-line shadow-card">
                      <Image src={photos.pedagogy} alt="Library reading" fill sizes="(min-width:1024px) 18vw, 25vw" className="object-cover" placeholder="blur" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-5 left-6 md:left-10 bg-deepblue-900 text-cream px-4 py-3 rounded-2xl shadow-lift max-w-[220px]">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-saffron-300">SSC Board result</div>
                  <div className="font-display text-lg leading-snug">97% marks · Cluster Topper</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Three stages, one philosophy"
            title={<>A curriculum that grows <br className="hidden md:block" />with your child.</>}
            kicker="From the youngest learners exploring shapes and rhymes to Class X students preparing for boards — every stage is designed to feel like the right room at the right time."
          />
          <ProgramCards />
        </div>
      </Section>

      <Section tone="cream">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Shrinath"
            title="Six promises we keep, every term."
            kicker="The reasons families choose us — and the things we stay accountable for."
          />
          <Features />
        </div>
      </Section>

      <Section tone="cream-2" className="!py-20">
        <GalleryMarquee />
      </Section>

      <Section tone="white">
        <div className="container-x">
          <SectionHeading
            eyebrow="What families say"
            title="Voices from our school community."
            kicker="Three small windows into how Shrinath shows up for parents, students, and alumni."
          />
          <Testimonials />
        </div>
      </Section>

      <Section tone="cream">
        <div className="container-x">
          <SectionHeading
            eyebrow="Mark your calendar"
            title="Our signature events."
            kicker="Three moments the whole school looks forward to, every single year."
          />
          <NewsEvents />
        </div>
      </Section>

      <CTABand
        eyebrow="Schedule a campus visit"
        title="See our classrooms. Meet our teachers."
        body="Tours run on school-day mornings and take about 45 minutes. We will walk the grounds with you, show real classes, and answer every question — no script, no rush."
        primaryCta={{ label: 'Apply now', href: '/admissions' }}
        secondaryCta={{ label: 'Book a tour', href: '/contact' }}
      />
    </>
  )
}
