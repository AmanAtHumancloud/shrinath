import type { Metadata } from 'next'
import StagePage from '@/app/components/sections/StagePage'

export const metadata: Metadata = {
  title: 'Primary',
  description: 'Primary school at Shrinath Shikshan Sanstha — Class I to V. A confident next step with strong literacy, numeracy, and curiosity.',
}

export default function Primary() {
  return <StagePage slug="primary" secondaryImage="primary2" />
}
