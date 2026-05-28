import type { Metadata } from 'next'
import StagePage from '@/app/components/sections/StagePage'

export const metadata: Metadata = {
  title: 'Pre-Primary',
  description: 'Pre-Primary at Shrinath Shikshan Sanstha — Nursery, Junior KG, and Senior KG. Activity-based, bilingual, and warm.',
}

export default function PrePrimary() {
  return <StagePage slug="pre-primary" secondaryImage="prePrimary2" />
}
