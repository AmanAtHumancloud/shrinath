'use client'

import { motion } from 'framer-motion'
import { 
  BookOpen, 
  FlaskConical, 
  Monitor, 
  Dumbbell, 
  Music, 
  Palette,
  Heart,
  Globe
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description: 'Rigorous curriculum designed to challenge and inspire students',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: FlaskConical,
      title: 'Science Labs',
      description: 'State-of-the-art laboratories for hands-on learning',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Monitor,
      title: 'Computer Lab',
      description: 'Modern computer facilities with latest technology',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Dumbbell,
      title: 'Sports Facilities',
      description: 'Comprehensive sports programs and athletic facilities',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Music,
      title: 'Music & Arts',
      description: 'Creative arts program for holistic development',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: Heart,
      title: 'Student Wellness',
      description: 'Focus on mental and physical well-being',
      color: 'bg-amber-100 text-amber-600'
    },
    {
      icon: Palette,
      title: 'Art Studio',
      description: 'Dedicated space for creative expression',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'International exchange and cultural programs',
      color: 'bg-teal-100 text-teal-600'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Why Choose Shrinath Shikshan Sanstha?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a nurturing environment that fosters academic excellence, 
            creativity, and personal growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="card group cursor-pointer"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features