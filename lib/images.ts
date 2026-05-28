import campusFront from '@/public/campus-front.png'
import aboutCollage1 from '@/public/about-collage-1.png'
import admissionsHero from '@/public/admissions-hero.png'
import prePrimary1 from '@/public/pre-primary-1.png'
import primary1 from '@/public/primary-1.png'
import secondary1 from '@/public/secondary-1.png'
import aboutMission from '@/public/about-mission.png'
import academicsHero from '@/public/academics-hero.png'
import pedagogy from '@/public/pedagogy.png'
import prePrimary2 from '@/public/pre-primary-2.png'
import primary2 from '@/public/primary-2.png'
import secondary2 from '@/public/secondary-2.png'
import galleryHero from '@/public/gallery-hero.png'

export const photos = {
  campusFront,
  aboutCollage1,
  admissionsHero,
  prePrimary1,
  primary1,
  secondary1,
  aboutMission,
  academicsHero,
  pedagogy,
  prePrimary2,
  primary2,
  secondary2,
  galleryHero,
} as const

export type PhotoKey = keyof typeof photos

export const galleryAll = [
  { src: photos.campusFront, alt: 'Shrinath Shikshan Sanstha — campus exterior', tag: 'Campus' },
  { src: photos.aboutCollage1, alt: 'Students engaged in classroom learning', tag: 'Classroom' },
  { src: photos.admissionsHero, alt: 'Open day at Shrinath Shikshan Sanstha', tag: 'Events' },
  { src: photos.prePrimary1, alt: 'Pre-primary children at activity time', tag: 'Pre-Primary' },
  { src: photos.primary1, alt: 'Primary school session in progress', tag: 'Classroom' },
  { src: photos.secondary1, alt: 'Secondary students collaborating on a project', tag: 'Classroom' },
  { src: photos.aboutMission, alt: 'School assembly and morning gathering', tag: 'Campus' },
  { src: photos.academicsHero, alt: 'Hands-on learning at Shrinath', tag: 'Classroom' },
  { src: photos.pedagogy, alt: 'Library reading session', tag: 'Classroom' },
  { src: photos.prePrimary2, alt: 'Story circle with the youngest students', tag: 'Pre-Primary' },
  { src: photos.primary2, alt: 'Sports activity on the school grounds', tag: 'Sports' },
  { src: photos.secondary2, alt: 'Cultural performance day', tag: 'Cultural' },
] as const

export const galleryTags = ['All', 'Campus', 'Classroom', 'Pre-Primary', 'Sports', 'Cultural', 'Events'] as const
export type GalleryTag = (typeof galleryTags)[number]
