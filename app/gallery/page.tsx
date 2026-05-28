import type { Metadata } from 'next'
import PageHero from '../components/sections/PageHero'
import Section from '../components/ui/Section'
import GalleryGrid from '../components/media/GalleryGrid'
import CTABand from '../components/sections/CTABand'
import { photos } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'A look at life at Shrinath Shikshan Sanstha — classrooms, sports, events, and small everyday moments.',
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        accent="orange"
        eyebrow="Life at Shrinath"
        title={<>Twelve frames <span className="squiggle text-play-orange">from a regular week.</span></>}
        subtitle="Classrooms, sports, art, and the smaller moments in between. Tap any image for a closer look."
        image={photos.galleryHero}
        imageAlt="Cultural performance day at Shrinath"
      />

      <Section tone="cream">
        <div className="container-x">
          <GalleryGrid />
        </div>
      </Section>

      <CTABand
        eyebrow="Want to see more?"
        title="Visit us in person."
        body="A 45-minute walk through campus says more than 12 photos can. Schedule any school-day morning."
        primaryCta={{ label: 'Book a tour', href: '/contact' }}
        secondaryCta={{ label: 'Apply now', href: '/admissions' }}
      />
    </>
  )
}
