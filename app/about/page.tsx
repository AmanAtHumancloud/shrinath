'use client'

import { motion } from 'framer-motion'
import { Award, Users, Target, Heart, Eye, BookOpen } from 'lucide-react'

export default function AboutPage() {
  const values = [
    { icon: Target, title: 'Our Mission', description: 'To provide quality education that empowers students to become lifelong learners and responsible citizens.' },
    { icon: Eye, title: 'Our Vision', description: 'To be a leading educational institution that sets benchmarks in academic excellence and holistic development.' },
    { icon: Heart, title: 'Our Values', description: 'Integrity, respect, excellence, and compassion form the cornerstone of our educational philosophy.' },
  ]

  const milestones = [
    { year: '1998', event: 'School Established' },
    { year: '2005', event: 'First Batch Graduation' },
    { year: '2012', event: 'New Campus Building' },
    { year: '2018', event: '20 Years of Excellence' },
    { year: '2024', event: 'Digital Learning Initiative' },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Shrinath Shikshan Sanstha
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-200 max-w-3xl mx-auto"
          >
            Over 25 years of excellence in education, shaping the leaders of tomorrow
          </motion.p>
        </div>
      </div>

      {/* Content sections */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card text-center"
            >
              <value.icon size={40} className="mx-auto mb-4 text-blue-800" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
            <div className="space-y-4">
              {milestones.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-blue-800 text-white px-3 py-1 rounded text-sm font-semibold">
                    {item.year}
                  </div>
                  <p className="text-gray-700">{item.event}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gray-100 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4">Our Achievements</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl font-bold text-amber-500">25+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl font-bold text-amber-500">5000+</div>
                <div className="text-sm text-gray-600">Alumni</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl font-bold text-amber-500">50+</div>
                <div className="text-sm text-gray-600">Awards</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl font-bold text-amber-500">100%</div>
                <div className="text-sm text-gray-600">Results</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}