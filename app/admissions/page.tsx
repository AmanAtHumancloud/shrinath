import type { Metadata } from 'next'
import { ClipboardList, MapPin, FileCheck, MessageCircle, Sparkles, ChevronDown } from 'lucide-react'

import PageHero from '../components/sections/PageHero'
import Section from '../components/ui/Section'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { StaggerParent, StaggerItem } from '../components/ui/RevealStagger'
import AdmissionsForm from '../components/forms/AdmissionsForm'
import CTABand from '../components/sections/CTABand'
import { admissionsFAQs } from '@/lib/data/faqs'
import { photos } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Admissions Open · 2026–27',
  description:
    'Apply to Shrinath Shikshan Sanstha for the 2026–27 academic year. Process, eligibility, FAQs, and online enquiry form.',
}

const STEPS = [
  { icon: MessageCircle, title: 'Enquire', body: 'Submit the form below or call us — we will share program details and seat availability.', chip: 'bg-play-orange' },
  { icon: MapPin, title: 'Visit', body: 'Walk the campus, sit in on a class, meet teachers and our principal.', chip: 'bg-play-green' },
  { icon: ClipboardList, title: 'Application', body: 'Complete the application form and submit required documents.', chip: 'bg-play-blue' },
  { icon: Sparkles, title: 'Interaction', body: 'Age-appropriate conversation with the child and a parent.', chip: 'bg-play-yellow' },
  { icon: FileCheck, title: 'Confirmation', body: 'Offer letter, fee payment, and a welcome packet for the year ahead.', chip: 'bg-play-orange' },
]

const ELIGIBILITY = [
  { stage: 'Nursery', age: '3 years (by 1 June)' },
  { stage: 'Junior KG', age: '4 years (by 1 June)' },
  { stage: 'Senior KG', age: '5 years (by 1 June)' },
  { stage: 'Class I', age: '6 years (by 1 June)' },
  { stage: 'Class II – V', age: 'Age-appropriate progression' },
  { stage: 'Class VI – X', age: 'Subject + entrance interaction' },
]

const DOCUMENTS = [
  'Birth certificate of the child',
  'Two recent passport photos of the child',
  'Address proof (Aadhaar / utility bill)',
  'Parent ID proof',
  'Transfer certificate from previous school (Class I onward)',
  'Latest report card (Class II onward)',
]

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        accent="orange"
        eyebrow="Admissions · 2026–27"
        title={<>Admissions <span className="squiggle text-play-orange">are open.</span></>}
        subtitle="Limited seats across Pre-Primary, Primary, and Secondary. Submit an enquiry and we will guide you through every step."
        ctas={[
          { label: 'Start an enquiry', href: '#enquiry', variant: 'saffron' },
          { label: 'Request a tour', href: '/contact', variant: 'outline' },
        ]}
        image={photos.admissionsHero}
        imageAlt="Open day at Shrinath"
      />

      {/* Process stepper */}
      <Section tone="cream">
        <div className="container-x">
          <SectionHeading
            eyebrow="Five steps · About a week"
            title="A clear, friendly process."
            kicker="No hidden steps. We respect that families are juggling a lot — we move at your pace."
          />
          <StaggerParent className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {STEPS.map(({ icon: Icon, title, body, chip }, i) => (
              <StaggerItem key={title} className="group relative rounded-[20px] border-2 border-line-2 bg-white p-6 transition-all duration-400 hover:-translate-y-1 hover:border-transparent hover:shadow-card">
                <span className="absolute -top-3 left-6 inline-flex items-center justify-center size-8 rounded-full bg-saffron-500 text-deepblue-900 font-display text-sm shadow-soft">
                  {i + 1}
                </span>
                <div className={`mt-2 inline-flex size-10 items-center justify-center rounded-2xl text-white transition-transform duration-400 group-hover:-rotate-6 group-hover:scale-110 ${chip}`}>
                  <Icon size={18} strokeWidth={2.2} />
                </div>
                <h3 className="mt-4 font-display text-lg text-deepblue-900">{title}</h3>
                <p className="mt-1.5 text-sm text-muted leading-relaxed">{body}</p>
              </StaggerItem>
            ))}
          </StaggerParent>
        </div>
      </Section>

      {/* Eligibility */}
      <Section tone="white">
        <div className="container-x max-w-2xl">
          <SectionHeading eyebrow="Eligibility" title="Age criteria by stage." />
          <Reveal>
            <ul className="rounded-[20px] border border-line bg-cream divide-y divide-line">
              {ELIGIBILITY.map((e) => (
                <li key={e.stage} className="flex items-baseline justify-between px-5 py-4 text-sm">
                  <span className="font-display text-base text-deepblue-900">{e.stage}</span>
                  <span className="text-muted">{e.age}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Documents */}
      <Section tone="cream-2">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Documents" title="Bring (or upload) these." />
            <p className="text-muted">
              Originals for verification, photocopies for our records. We will return originals the same day.
            </p>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <ul className="grid sm:grid-cols-2 gap-3">
                {DOCUMENTS.map((d) => (
                  <li key={d} className="flex items-start gap-3 rounded-[14px] bg-white border-2 border-line-2 p-4 text-sm">
                    <span className="inline-flex size-7 items-center justify-center rounded-lg bg-play-green text-white shrink-0">
                      <FileCheck size={14} />
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Enquiry form */}
      <Section id="enquiry" tone="white">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Online enquiry"
              title="Tell us about your child."
              kicker="A short form — about two minutes. Our admissions team will get back to you within one school day."
            />
            <div className="rounded-[20px] bg-deepblue-950 text-cream p-7">
              <div className="text-saffron-300 text-xs uppercase tracking-[0.22em]">Quick contact</div>
              <p className="mt-3 text-cream/90 leading-relaxed">
                Prefer to talk first? Call <a href="tel:+919876543210" className="link-underline text-saffron-300">+91 9876543210</a> any school-day morning.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-[24px] border border-line bg-cream p-6 md:p-9">
                <AdmissionsForm />
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* FAQ accordion */}
      <Section tone="cream">
        <div className="container-x">
          <SectionHeading eyebrow="Frequently asked" title="Questions parents ask us." />
          <div className="max-w-3xl space-y-3">
            {admissionsFAQs.map((f) => (
              <details
                key={f.q}
                className="group rounded-[16px] border border-line bg-white open:bg-cream-2 open:border-saffron-300 transition"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4 p-5">
                  <span className="font-display text-lg text-deepblue-900">{f.q}</span>
                  <ChevronDown
                    size={18}
                    className="mt-1.5 text-saffron-700 transition group-open:rotate-180 shrink-0"
                  />
                </summary>
                <div className="px-5 pb-5 text-sm text-muted leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <CTABand
        eyebrow="Still have questions?"
        title="The fastest answer is a phone call."
        body="Speak to our admissions desk directly during school hours — we are happy to help."
        primaryCta={{ label: 'Talk to us', href: '/contact' }}
        secondaryCta={{ label: 'See gallery', href: '/gallery' }}
      />
    </>
  )
}
