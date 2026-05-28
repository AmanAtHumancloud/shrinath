import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes: { path: string; priority: number; changeFrequency: 'monthly' | 'weekly' | 'yearly' }[] = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.8, changeFrequency: 'yearly' },
    { path: '/academics', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/academics/pre-primary', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/academics/primary', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/academics/secondary', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/admissions', priority: 0.95, changeFrequency: 'monthly' },
    { path: '/gallery', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
  ]
  return routes.map((r) => ({
    url: new URL(r.path, SITE.url).toString(),
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
