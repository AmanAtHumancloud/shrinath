import type { Metadata } from 'next'
import StagePage from '@/app/components/sections/StagePage'

export const metadata: Metadata = {
  title: 'Secondary',
  description: 'Secondary school at Shrinath Shikshan Sanstha — Class VI to X. Rigorous academics, clear board prep, and time to lead.',
}

export default function Secondary() {
  return <StagePage slug="secondary" secondaryImage="secondary2" />
}
