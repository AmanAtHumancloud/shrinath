import HeroSection from './components/HeroSection'
import Features from './components/Features'
import NewsEvents from './components/NewsEvents'
import Testimonials from './components/Testimonials'
import MapSection from './components/MapSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <NewsEvents />
      <Testimonials />
      <MapSection />
    </>
  )
}