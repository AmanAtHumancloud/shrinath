import type { Metadata } from 'next'
import Image from 'next/image'
import { Compass, Sparkles, HeartHandshake, Sprout, ShieldCheck, Cctv, TreePine, Droplets, Clock, CalendarDays, Languages, MapPin } from 'lucide-react'
import { SITE } from '@/lib/site'

import PageHero from '../components/sections/PageHero'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { StaggerParent, StaggerItem } from '../components/ui/RevealStagger'
import Timeline from '../components/sections/Timeline'
import CTABand from '../components/sections/CTABand'
import { photos } from '@/lib/images'
import { slideInLeft, slideInRight } from '@/lib/motion'

export const metadata: Metadata = {
  title: 'About',
  description:
    'The story of Shrinath Shikshan Sanstha — two decades of Marathi, Hindi & English learning in Pusesavali, Maharashtra: our founder, mission, values, and timeline.',
}

const VALUES = [
  { icon: Compass, title: 'Integrity', body: 'Honest work, honest words — modelled first by every adult on campus.', chip: 'bg-play-orange' },
  { icon: Sparkles, title: 'Inquiry', body: 'Children who ask better questions become adults who solve harder problems.', chip: 'bg-play-blue' },
  { icon: HeartHandshake, title: 'Inclusion', body: 'Every background, every learning pace — held with the same care.', chip: 'bg-play-green' },
  { icon: Sprout, title: 'Growth', body: 'Small daily steps over big overnight leaps. Patience is curriculum.', chip: 'bg-play-yellow' },
]

const LEADERS = [
  { name: 'Mr. Jitendra Natha Pawar', role: 'Founder', bio: 'Founded Shrinath Shikshan Sanstha in 2005 and set its course.' },
  { name: 'Mr. Uday Jitendra Pawar', role: 'Chairman', bio: 'Chairs the managing committee and stewards the institution.' },
  { name: 'Mr. Amar Sanjay Pawar', role: 'Secretary · Vice-Chairman', bio: 'Oversees day-to-day administration and school affairs.' },
  { name: 'Mr. Sudhir Rangrao Pawar', role: 'Treasurer', bio: 'Manages the finances that keep the campus running.' },
  { name: 'Mr. Tushar Sanjerao Kodam', role: 'Vice-Chairman', bio: 'Supports governance across the school’s programmes.' },
]

const FACTS = [
  { icon: Sparkles, label: 'Type', value: SITE.schoolType, chip: 'bg-play-orange' },
  { icon: Languages, label: 'Languages', value: SITE.medium, chip: 'bg-play-green' },
  { icon: Clock, label: 'School hours', value: SITE.schoolTimings, chip: 'bg-play-blue' },
  { icon: Clock, label: 'Office hours', value: SITE.officeTimings, chip: 'bg-play-yellow' },
  { icon: CalendarDays, label: 'Parent visiting', value: SITE.parentVisiting, chip: 'bg-play-green' },
  { icon: MapPin, label: 'Campus', value: SITE.campus, chip: 'bg-play-orange' },
]

const CARE = [
  { icon: Cctv, title: 'Secure campus', body: 'CCTV surveillance and fire extinguishers across both buildings.', chip: 'bg-play-blue' },
  { icon: ShieldCheck, title: 'Student Safety Committee', body: 'A dedicated committee oversees child protection and well-being.', chip: 'bg-play-orange' },
  { icon: TreePine, title: 'Greener every year', body: 'Students plant trees on campus each year — care you can watch grow.', chip: 'bg-play-green' },
  { icon: Droplets, title: 'Clean habits', body: 'Hand-wash routines and personal cleanliness, guided daily by teachers.', chip: 'bg-play-yellow' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        accent="green"
        eyebrow="Our Story"
        title={<>Two decades of <span className="squiggle text-play-orange">building character.</span></>}
        subtitle="Founded in 2005 by Mr. Jitendra Natha Pawar, Shrinath grew from a single idea into a full co-educated day school — Pre-Primary to SSC — and never lost sight of why."
        image={photos.galleryHero}
        imageAlt="Shrinath students together on a school day"
      />

      {/* Mission + Vision */}
      <Section tone="cream">
        <div className="container-x grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <Reveal variants={slideInLeft}>
              <span className="eyebrow">Mission &amp; Vision</span>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-deepblue-900">
                A school for the long arc of childhood.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <Reveal variants={slideInRight}>
              <div className="rounded-[24px] border border-line bg-white p-7 md:p-9 shadow-card">
                <div className="text-[10px] uppercase tracking-[0.22em] text-saffron-700 font-semibold">Our mission</div>
                <p className="mt-3 text-lg text-ink leading-relaxed">
                  To raise capable, curious, kind young people — through bilingual learning, small classes, and a culture that prizes questions as highly as answers.
                </p>
              </div>
            </Reveal>
            <Reveal variants={slideInRight} delay={0.08}>
              <div className="rounded-[24px] border border-line bg-cream-2 p-7 md:p-9">
                <div className="text-[10px] uppercase tracking-[0.22em] text-deepblue-700 font-semibold">Our vision</div>
                <p className="mt-3 text-lg text-ink leading-relaxed">
                  A neighbourhood school that families across generations choose because they trust the people inside the classroom — not just the marks on a sheet.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Mission image strip */}
      <Section tone="white" className="!py-12">
        <div className="container-x">
          <Reveal>
            <div className="relative aspect-[16/7] rounded-[28px] overflow-hidden border border-line shadow-card">
              <Image src={photos.aboutMission} alt="School morning assembly" fill sizes="100vw" className="object-cover" placeholder="blur" />
              <div className="absolute inset-0 bg-gradient-to-t from-deepblue-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 max-w-md">
                <p className="font-display text-cream text-2xl md:text-3xl leading-tight">
                  &ldquo;Children are not vessels to fill — they are fires to kindle.&rdquo;
                </p>
                <div className="mt-3 text-cream/80 text-sm">— Plutarch · paraphrased on our staffroom wall</div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* At a glance */}
      <Section tone="cream">
        <div className="container-x">
          <SectionHeading
            eyebrow="At a glance"
            title="The quick facts."
            kicker="Everything a parent usually asks in the first phone call."
          />
          <StaggerParent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FACTS.map(({ icon: Icon, label, value, chip }) => (
              <StaggerItem key={label} className="flex items-start gap-4 rounded-[20px] border-2 border-line-2 bg-white p-6">
                <span className={`inline-flex size-11 items-center justify-center rounded-2xl text-white shrink-0 ${chip}`}>
                  <Icon size={20} strokeWidth={2.2} />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-saffron-700 font-bold">{label}</div>
                  <div className="mt-1 font-display text-base text-deepblue-900 leading-snug">{value}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerParent>
        </div>
      </Section>

      {/* Timeline */}
      <Section tone="white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our timeline"
            title="From one idea to a full school."
            kicker="A few chapters of how Shrinath grew — from 2005 to today."
            align="center"
          />
          <Timeline />
        </div>
      </Section>

      {/* Leadership */}
      <Section tone="cream">
        <div className="container-x">
          <SectionHeading
            eyebrow="Leadership"
            title="The Pawar family & managing committee."
            kicker="The founders and trustees who carry the day-to-day care of Shrinath Shikshan Sanstha."
          />
          <StaggerParent className="grid md:grid-cols-3 gap-6">
            {LEADERS.map((l) => (
              <StaggerItem key={l.name} className="rounded-[24px] border-2 border-line-2 bg-cream p-7 transition-all duration-400 hover:-translate-y-1 hover:border-transparent hover:shadow-card">
                <div className="size-16 rounded-2xl bg-play-blue text-white inline-flex items-center justify-center font-display text-xl">
                  {l.name.replace(/^Mr\.?\s+/, '')[0]}
                </div>
                <h3 className="mt-5 font-display text-xl text-deepblue-900">{l.name}</h3>
                <div className="text-xs uppercase tracking-[0.18em] text-saffron-700 font-semibold mt-1">{l.role}</div>
                <p className="mt-3 text-sm text-muted leading-relaxed">{l.bio}</p>
              </StaggerItem>
            ))}
          </StaggerParent>
        </div>
      </Section>

      {/* Values */}
      <Section tone="cream-2">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our values"
            title="Four words we keep close."
            align="center"
          />
          <StaggerParent className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, body, chip }) => (
              <StaggerItem key={title} className="group rounded-[24px] bg-white border-2 border-line-2 p-7 text-center transition-all duration-400 hover:-translate-y-1 hover:border-transparent hover:shadow-card">
                <div className={`mx-auto inline-flex size-12 items-center justify-center rounded-2xl text-white transition-transform duration-400 group-hover:-rotate-6 group-hover:scale-110 ${chip}`}>
                  <Icon size={20} strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 font-display text-lg text-deepblue-900">{title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{body}</p>
              </StaggerItem>
            ))}
          </StaggerParent>
        </div>
      </Section>

      {/* Safe, green & cared-for */}
      <Section tone="white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Safe, green & cared-for"
            title="The bits that aren't on a report card."
            kicker="How we look after children beyond the lesson plan."
          />
          <StaggerParent className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CARE.map(({ icon: Icon, title, body, chip }) => (
              <StaggerItem key={title} className="group rounded-[24px] border-2 border-line-2 bg-cream p-7 transition-all duration-400 hover:-translate-y-1 hover:border-transparent hover:shadow-card">
                <div className={`inline-flex size-12 items-center justify-center rounded-2xl text-white transition-transform duration-400 group-hover:-rotate-6 group-hover:scale-110 ${chip}`}>
                  <Icon size={20} strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-deepblue-900">{title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{body}</p>
              </StaggerItem>
            ))}
          </StaggerParent>
        </div>
      </Section>

      <CTABand
        eyebrow="Visit us"
        title="The best way to know us is to walk in."
        body="Schedule a tour any school-day morning — we will show you classrooms in motion, not slides."
        primaryCta={{ label: 'Book a tour', href: '/contact' }}
        secondaryCta={{ label: 'See admissions', href: '/admissions' }}
      />
    </>
  )
}
