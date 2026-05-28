export type EventItem = {
  when: string
  badge: 'Annual' | 'Event' | 'Trip'
  title: string
  excerpt: string
}

// Signature annual events at Shrinath Shikshan Sanstha
export const events: EventItem[] = [
  {
    when: 'Every academic year',
    badge: 'Annual',
    title: 'Annual Function',
    excerpt: 'A full-school celebration — music, dance and theatre by every grade, with families welcome.',
  },
  {
    when: 'Every academic year',
    badge: 'Event',
    title: 'Annual Sports Day',
    excerpt: 'Inter-house athletics and team games where every child takes the field and cheers the rest on.',
  },
  {
    when: 'Every academic year',
    badge: 'Trip',
    title: 'Educational Trip',
    excerpt: 'A curated outing that turns the syllabus into lived experience — learning beyond the classroom walls.',
  },
]
