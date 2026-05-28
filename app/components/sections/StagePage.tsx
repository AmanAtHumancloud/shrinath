import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import PageHero from './PageHero'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import SmartImage from '../media/SmartImage'
import Reveal from '../ui/Reveal'
import { StaggerParent, StaggerItem } from '../ui/RevealStagger'
import CTABand from './CTABand'
import { programBySlug, sampleSchedule, type Program } from '@/lib/data/programs'
import { photos, type PhotoKey } from '@/lib/images'
import { slideInRight } from '@/lib/motion'

const STAGE_ACCENT: Record<Program['slug'], 'orange' | 'green' | 'blue'> = {
  'pre-primary': 'orange',
  primary: 'green',
  secondary: 'blue',
}

export default function StagePage({ slug, secondaryImage }: { slug: Program['slug']; secondaryImage: PhotoKey }) {
  const p = programBySlug[slug]
  const schedule = sampleSchedule[slug]

  return (
    <>
      <PageHero
        accent={STAGE_ACCENT[slug]}
        eyebrow={`Academics · ${p.classes}`}
        title={<>{p.name} <span className="squiggle text-play-orange">{p.ages}</span></>}
        subtitle={p.blurb}
        image={photos[p.image]}
        imageAlt={`${p.name} students at Shrinath`}
      />

      {/* Highlights */}
      <Section tone="cream">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">What makes it ours</span>
              <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-deepblue-900">
                The Shrinath approach to {p.name}.
              </h2>
              <p className="mt-5 text-muted leading-relaxed">
                A snapshot of the things parents tell us they value most about this stage at our school.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <StaggerParent className="grid sm:grid-cols-2 gap-4">
              {p.highlights.map((h) => (
                <StaggerItem key={h} className="rounded-[18px] border border-line bg-white p-5">
                  <span className="mark-diamond" />
                  <p className="mt-3 text-ink/90 text-[15px] leading-relaxed">{h}</p>
                </StaggerItem>
              ))}
            </StaggerParent>
          </div>
        </div>
      </Section>

      {/* Sample schedule */}
      <Section tone="white">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="A day at Shrinath"
              title="Sample schedule."
              kicker="Times shift slightly by class but the rhythm holds — focused mornings, active afternoons, and breathing room in between."
            />
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-[20px] border border-line bg-cream overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {schedule.map((row, i) => (
                      <tr key={row.time} className={i % 2 === 0 ? 'bg-cream' : 'bg-cream-2/60'}>
                        <th scope="row" className="text-left px-4 sm:px-5 py-4 font-display text-deepblue-900 w-28 sm:w-44 align-top whitespace-nowrap">
                          {row.time}
                        </th>
                        <td className="px-5 py-4 text-ink/90">{row.activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Photo collage */}
      <Section tone="cream-2" className="!py-16">
        <div className="container-x grid md:grid-cols-2 gap-5">
          <Reveal>
            <SmartImage src={photos[p.image]} alt={`${p.name} classroom`} aspect="4/3" rounded="xl" sizes="(min-width:768px) 50vw, 100vw" />
          </Reveal>
          <Reveal variants={slideInRight}>
            <SmartImage src={photos[secondaryImage]} alt={`${p.name} activity`} aspect="4/3" rounded="xl" sizes="(min-width:768px) 50vw, 100vw" />
          </Reveal>
        </div>
      </Section>

      {/* Closing prompt */}
      <Section tone="white">
        <div className="container-x grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Faculty"
              title="Trained, kind, and in it for the long haul."
              kicker="Every Shrinath teacher is here because they believe small school years compound. Most have taught with us for over five years."
            />
          </div>
          <div className="lg:col-span-5 flex flex-wrap gap-3">
            <Link href="/admissions" className="btn btn-primary">
              Apply for {p.name} <ArrowUpRight size={15} />
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Talk to us
            </Link>
          </div>
        </div>
      </Section>

      <CTABand
        eyebrow="Next stage"
        title={
          slug === 'pre-primary'
            ? 'Looking ahead to Primary.'
            : slug === 'primary'
            ? 'Looking ahead to Secondary.'
            : 'Continuing the journey.'
        }
        body="Each Shrinath stage hands off to the next with deliberate care — same school, same values, different room."
        primaryCta={{
          label:
            slug === 'pre-primary'
              ? 'Explore Primary'
              : slug === 'primary'
              ? 'Explore Secondary'
              : 'See all academics',
          href:
            slug === 'pre-primary'
              ? '/academics/primary'
              : slug === 'primary'
              ? '/academics/secondary'
              : '/academics',
        }}
        secondaryCta={{ label: 'Visit campus', href: '/contact' }}
      />
    </>
  )
}
