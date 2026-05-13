'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play, Star, Users, Award, BookOpen } from 'lucide-react'

const HeroSection = () => {
  const stats = [
    { icon: Users, value: '5000+', label: 'Students' },
    { icon: Award, value: '25+', label: 'Years of Excellence' },
    { icon: BookOpen, value: '100+', label: 'Expert Faculty' },
    { icon: Star, value: '95%', label: 'Success Rate' },
  ]

  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-700">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-amber-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              🎓 Admissions Open 2024-25
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nurturing Minds,
              <br />
              <span className="text-amber-400">Building Futures</span>
            </h1>
            
            <p className="text-lg text-blue-100 mb-8 max-w-lg">
              Shrinath Shikshan Sanstha provides a nurturing environment where students 
              excel academically, develop critical thinking skills, and grow into 
              responsible global citizens.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/admissions" className="btn-secondary flex items-center justify-center gap-2">
                Enroll Now
                <ArrowRight size={20} />
              </Link>
              <Link href="/about" className="flex items-center justify-center gap-2 px-6 py-3 
                                             border-2 border-white text-white rounded-lg 
                                             hover:bg-white/10 transition font-semibold">
                <Play size={20} />
                Virtual Tour
              </Link>
            </div>
          </motion.div>

          {/* Right Content - 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="glass-effect rounded-2xl p-8 text-white">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Upcoming Events</h3>
                <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
              </div>

              <div className="space-y-4">
                {[
                  { date: '15 June', event: 'New Academic Year Begins', type: 'Academic' },
                  { date: '20 July', event: 'Annual Sports Meet', type: 'Sports' },
                  { date: '15 August', event: 'Independence Day Celebration', type: 'Cultural' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition cursor-pointer"
                  >
                    <div className="text-center">
                      <div className="text-amber-400 font-bold text-sm">{item.date}</div>
                    </div>
                    <div>
                      <div className="font-semibold">{item.event}</div>
                      <div className="text-xs text-blue-200">{item.type}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <stat.icon className="mx-auto mb-2 text-amber-400" size={24} />
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-blue-200">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection