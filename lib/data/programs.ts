import type { PhotoKey } from '@/lib/images'

export type Program = {
  slug: 'pre-primary' | 'primary' | 'secondary'
  name: string
  ages: string
  classes: string
  blurb: string
  image: PhotoKey
  highlights: string[]
}

export const programs: Program[] = [
  {
    slug: 'pre-primary',
    name: 'Pre-Primary',
    ages: 'Ages 3 – 6',
    classes: 'Nursery · Jr. KG · Sr. KG',
    blurb: 'Play, wonder, and routine — built for the youngest learners stepping into school for the first time.',
    image: 'prePrimary1',
    highlights: ['Activity-based curriculum', 'Phonics & numeracy foundations', 'Music, dance & art every week', 'Trained early-years educators'],
  },
  {
    slug: 'primary',
    name: 'Primary',
    ages: 'Ages 6 – 11',
    classes: 'Class I – V',
    blurb: 'A confident next step — strong literacy, numeracy, and a love of asking questions.',
    image: 'primary1',
    highlights: ['Bilingual instruction (Marathi + English)', 'Reading library + storytelling', 'Maths labs + STEM kits', 'Inter-house sports'],
  },
  {
    slug: 'secondary',
    name: 'Secondary',
    ages: 'Ages 11 – 16',
    classes: 'Class VI – X',
    blurb: 'Rigorous academics paired with leadership, service, and clear board-exam preparation.',
    image: 'secondary1',
    highlights: ['Board-aligned curriculum', 'Career & subject counselling', 'Olympiads & competitions', 'Community service projects'],
  },
]

// quick lookup
export const programBySlug: Record<Program['slug'], Program> = Object.fromEntries(
  programs.map((p) => [p.slug, p]),
) as Record<Program['slug'], Program>

// supporting data for stage detail pages
export const sampleSchedule: Record<Program['slug'], { time: string; activity: string }[]> = {
  'pre-primary': [
    { time: '8:30 – 9:00', activity: 'Welcome circle & morning rhyme' },
    { time: '9:00 – 9:45', activity: 'Phonics & language play' },
    { time: '9:45 – 10:15', activity: 'Snack & free play' },
    { time: '10:15 – 11:00', activity: 'Numbers & shapes' },
    { time: '11:00 – 11:45', activity: 'Art / music / movement' },
    { time: '11:45 – 12:15', activity: 'Story time & wind down' },
  ],
  'primary': [
    { time: '8:00 – 8:15', activity: 'Assembly' },
    { time: '8:15 – 9:45', activity: 'Languages (Marathi / English)' },
    { time: '9:45 – 10:30', activity: 'Mathematics' },
    { time: '10:30 – 10:50', activity: 'Recess' },
    { time: '10:50 – 12:20', activity: 'EVS / Science / Social Studies' },
    { time: '12:20 – 1:30', activity: 'Lunch + house activities' },
    { time: '1:30 – 2:30', activity: 'Sports / Art / Library' },
  ],
  'secondary': [
    { time: '7:45 – 8:00', activity: 'Assembly + house news' },
    { time: '8:00 – 9:30', activity: 'Core: Maths / Science' },
    { time: '9:30 – 10:30', activity: 'Languages' },
    { time: '10:30 – 10:50', activity: 'Recess' },
    { time: '10:50 – 12:20', activity: 'Social Sciences / IT' },
    { time: '12:20 – 1:00', activity: 'Lunch' },
    { time: '1:00 – 2:30', activity: 'Labs / Sports / Counselling' },
  ],
}

export const cocurricular: { title: string; blurb: string }[] = [
  { title: 'Sports & Athletics', blurb: 'Cricket, kabaddi, athletics, yoga — every child plays.' },
  { title: 'Performing Arts', blurb: 'Music, dance, drama and the annual cultural day.' },
  { title: 'STEM & Robotics', blurb: 'Hands-on labs, science fairs, and beginner robotics.' },
  { title: 'Field Learning', blurb: 'Curated trips that turn the curriculum into experience.' },
]
