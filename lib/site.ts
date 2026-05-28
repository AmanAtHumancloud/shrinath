export const SITE = {
  name: 'Shrinath Shikshan Sanstha',
  shortName: 'Shrinath',
  tagline: 'Where every child becomes their best.',
  defaultDescription:
    'Shrinath Shikshan Sanstha — a co-educated Marathi · Hindi · English day school in Pusesavali, Maharashtra, nurturing minds since 2005. Pre-Primary through SSC (Class X).',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  founded: 2005,
  founderName: 'Mr. Jitendra Natha Pawar',
  phone: '+91 9876543210',
  phoneSecondary: '+91 9123456780',
  email: 'admissions@shrinathsanstha.edu',
  address: 'Karad–Vaduj Rd, Pusesavali, Maharashtra 415512, India',
  hours: 'Mon–Sat · 10:00 AM – 4:00 PM',
  // Real operational facts (from school records)
  schoolType: 'Co-educated day school',
  schoolTimings: '10:00 AM – 4:00 PM',
  officeTimings: '9:30 AM – 4:30 PM',
  parentVisiting: 'Last Saturday of every month',
  languages: ['Marathi', 'Hindi', 'English'],
  medium: 'Marathi · Hindi · English',
  campus: '2 buildings · 22,000 sq.ft built-up + 65,120 sq.ft ground',
  achievement: 'SSC Board 97% · Cluster Topper',
  // Managing committee — Shrinath Shikshan Sanstha
  management: [
    { name: 'Mr. Jitendra Natha Pawar', role: 'Founder' },
    { name: 'Mr. Uday Jitendra Pawar', role: 'Chairman' },
    { name: 'Mr. Amar Sanjay Pawar', role: 'Secretary · Vice-Chairman' },
    { name: 'Mr. Sudhir Rangrao Pawar', role: 'Treasurer' },
    { name: 'Mr. Tushar Sanjerao Kodam', role: 'Vice-Chairman' },
  ],
  mapShortLink: 'https://maps.app.goo.gl/URSqGYWzeTBCGPrq8?g_st=iw',
  // Keyless embeddable form (short links are blocked by X-Frame-Options inside iframes).
  mapEmbedSrc:
    'https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sF75X%2BXWJ+Pusesavali!6i16',
  socials: {
    facebook: '#',
    instagram: '#',
    youtube: '#',
    twitter: '#',
  },
  navLinks: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/academics', label: 'Academics' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ],
} as const

export type NavLink = (typeof SITE.navLinks)[number]
