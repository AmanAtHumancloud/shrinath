'use client'

import { motion } from 'framer-motion'
import { BookOpen, Calendar, Clock, Award, Users, ChevronRight } from 'lucide-react'

export default function AcademicsPage() {
  const programs = [
    {
      level: 'Pre-Primary',
      ageGroup: '3-5 years',
      description: 'Play-based learning focusing on cognitive and social development',
      subjects: ['Language', 'Math Readiness', 'Art & Craft', 'Physical Activity']
    },
    {
      level: 'Primary School',
      ageGroup: '6-10 years',
      description: 'Foundation building with emphasis on core subjects and values',
      subjects: ['Mathematics', 'Science', 'English', 'Hindi', 'Social Studies']
    },
    {
      level: 'Middle School',
      ageGroup: '11-13 years',
      description: 'Comprehensive curriculum preparing students for higher education',
      subjects: ['Advanced Math', 'Physics', 'Chemistry', 'Biology', 'Computer Science']
    },
    {
      level: 'Secondary School',
      ageGroup: '14-16 years',
      description: 'Board examination preparation with career guidance',
      subjects: ['All Major Subjects', 'Career Counseling', 'Life Skills']
    }
  ]

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Academic Programs
          </motion.h1>
          <p className="text-xl text-emerald-200">
            Comprehensive education from Pre-Primary to Secondary School
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card hover:border-blue-200 border-2 border-transparent"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="text-3xl font-bold text-blue-800">{program.level}</div>
                  <div className="text-gray-500 text-sm mt-1">Age: {program.ageGroup}</div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-700 mb-4">{program.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {program.subjects.map((subject, i) => (
                      <span key={i} className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="text-blue-800 self-center">
                  <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}