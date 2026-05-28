import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, MapPinned, FlaskConical, Music, Trophy } from 'lucide-react'

import PageHero from '../components/sections/PageHero'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import SmartImage from '../components/media/SmartImage'
import Reveal from '../components/ui/Reveal'
import { StaggerParent, StaggerItem } from '../components/ui/RevealStagger'
import CTABand from '../components/sections/CTABand'
import { slideInLeft, slideInRight } from '@/lib/motion'
import { programs } from '@/lib/data/programs'
import { photos } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Academics',
  description:
    'Explore Shrinath Shikshan Sanstha\'s Pre-Primary, Primary, and Secondary programs — bilingual instruction, modern facilities, and a curriculum that grows with your child.',
}

const COCURRICULAR = [
  { icon: Trophy, title: 'Sports & Athletics', body: 'Cricket, kabaddi, athletics and yoga — every child plays.', chip: 'bg-play-orange' },
  { icon: Music, title: 'Performing Arts', body: 'Music, dance, drama, and the annual cultural day.', chip: 'bg-play-green' },
  { icon: FlaskConical, title: 'STEM & Robotics', body: 'Hands-on labs, science fairs, and beginner robotics.', chip: 'bg-play-blue' },
  { icon: MapPinned, title: 'Field Learning', body: 'Curated trips that turn the curriculum into experience.', chip: 'bg-play-yellow' },
]

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        accent="blue"
        eyebrow="Academics"
        title={<>A curriculum that grows <span className="squiggle text-play-orange">with your child.</span></>}
        subtitle="Three stages, one philosophy — meet children where they are, and walk them to where they could be."
        image={photos.academicsHero}
        imageAlt="Hands-on learning at Shrinath"
      />

      {/* Three stage rows */}
      <Section tone="cream">
        <div className="container-x space-y-20 md:space-y-28">
          {programs.map((p, idx) => {
            const right = idx % 2 === 1
            return (
              <div key={p.slug} className="grid lg:grid-cols-12 gap-10 items-center">
                <div className={`lg:col-span-7 ${right ? 'lg:order-2' : ''}`}>
                  <Reveal variants={right ? slideInRight : slideInLeft}>
                    <SmartImage
                      src={photos[p.image]}
                      alt={`${p.name} students at Shrinath`}
                      aspect="3/2"
                      rounded="xl"
                      sizes="(min-width:1024px) 58vw, 100vw"
                      imageClassName="transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:scale-[1.03]"
                    />
                  </Reveal>
                </div>
                <div className={`lg:col-span-5 ${right ? 'lg:order-1' : ''}`}>
                  <Reveal variants={right ? slideInLeft : slideInRight}>
                    <span className="eyebrow">{p.classes}</span>
                    <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-deepblue-900">
                      {p.name}
                    </h2>
                    <p className="mt-4 text-muted leading-relaxed">{p.blurb}</p>
                    <ul className="mt-6 space-y-2 text-sm">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-2.5 items-start text-ink">
                          <span className="mt-1.5 mark-diamond shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/academics/${p.slug}`} className="btn btn-primary mt-7">
                      Inside {p.name} <ArrowUpRight size={15} />
                    </Link>
                  </Reveal>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Pedagogy */}
      <Section tone="white">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">How we teach</span>
              <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-deepblue-900">
                Activity-based, bilingual, and unhurried.
              </h2>
              <p className="mt-5 text-muted leading-relaxed">
                We start with the child, not the chapter. Lessons are built in short, varied blocks; concepts are revisited in different forms; and every class has time for play, reading, and conversation.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ink">
                {[
                  'Marathi mother-tongue foundations + English fluency from Pre-Primary',
                  'Maths labs, reading hours, and structured library periods',
                  'Continuous assessment with two formal exam blocks per year',
                  'Parent–teacher meetings every term, plus open-door communication',
                ].map((b) => (
                  <li key={b} className="flex gap-2.5 items-start">
                    <span className="mt-1.5 mark-diamond shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal variants={slideInRight}>
              <SmartImage src={photos.pedagogy} alt="Library reading session" aspect="4/3" rounded="xl" sizes="(min-width:1024px) 50vw, 100vw" />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Co-curricular */}
      <Section tone="cream-2">
        <div className="container-x">
          <SectionHeading
            eyebrow="Beyond the textbook"
            title="Co-curricular life at Shrinath."
            kicker="Sports, arts, science, and travel — woven into every week, not bolted on."
          />
          <StaggerParent className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COCURRICULAR.map(({ icon: Icon, title, body, chip }) => (
              <StaggerItem key={title} className="group rounded-[24px] bg-white border-2 border-line-2 p-7 transition-all duration-400 hover:-translate-y-1 hover:border-transparent hover:shadow-card">
                <div className={`inline-flex size-12 items-center justify-center rounded-2xl text-white transition-transform duration-400 group-hover:-rotate-6 group-hover:scale-110 ${chip}`}>
                  <Icon size={20} strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 font-display text-lg text-deepblue-900">{title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{body}</p>
              </StaggerItem>
            ))}
          </StaggerParent>
        </div>
      </Section>

      <CTABand
        eyebrow="Admissions 2026–27"
        title="Ready to apply?"
        body="Limited seats across all stages. Submit an enquiry and we will guide you through the rest."
        primaryCta={{ label: 'Apply now', href: '/admissions' }}
        secondaryCta={{ label: 'Talk to us', href: '/contact' }}
      />
    </>
  )
}
