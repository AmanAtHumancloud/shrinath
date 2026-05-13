'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const NewsEvents = () => {
  const [activeTab, setActiveTab] = useState('news')
  
  const news = [
    {
      date: 'May 10, 2024',
      title: 'Annual Science Exhibition',
      description: 'Students showcase innovative projects at the annual science fair',
      image: '/images/news1.jpg',
      category: 'Academic'
    },
    {
      date: 'May 5, 2024',
      title: 'Sports Championship Victory',
      description: 'Our school team wins the inter-school cricket tournament',
      image: '/images/news2.jpg',
      category: 'Sports'
    },
    {
      date: 'April 28, 2024',
      title: 'Cultural Fest 2024',
      description: 'A grand celebration of art, music, and dance',
      image: '/images/news3.jpg',
      category: 'Cultural'
    }
  ]

  const events = [
    {
      date: '15',
      month: 'JUN',
      title: 'New Academic Year Begins',
      time: '8:00 AM',
      location: 'School Assembly Hall'
    },
    {
      date: '20',
      month: 'JUL',
      title: 'Annual Sports Meet',
      time: '9:00 AM',
      location: 'School Ground'
    },
    {
      date: '15',
      month: 'AUG',
      title: 'Independence Day Celebration',
      time: '7:30 AM',
      location: 'School Campus'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">News & Events</h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1 inline-flex">
            <button
              onClick={() => setActiveTab('news')}
              className={`px-6 py-2 rounded-md transition-all ${
                activeTab === 'news' ? 'bg-blue-800 text-white' : 'text-gray-600'
              }`}
            >
              Latest News
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-6 py-2 rounded-md transition-all ${
                activeTab === 'events' ? 'bg-blue-800 text-white' : 'text-gray-600'
              }`}
            >
              Upcoming Events
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'news' ? (
            <motion.div
              key="news"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {news.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="card overflow-hidden group cursor-pointer"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                    <Calendar size={40} className="text-blue-400" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-amber-600 mb-2">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-800 transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <button className="text-blue-800 font-semibold flex items-center gap-1 text-sm group-hover:gap-2 transition-all">
                    Read More <ArrowRight size={16} />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="events"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4 max-w-3xl mx-auto"
            >
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card flex items-center gap-6 hover:bg-blue-50 transition cursor-pointer"
                >
                  <div className="text-center bg-blue-800 text-white rounded-lg p-3 min-w-[60px]">
                    <div className="text-2xl font-bold">{event.date}</div>
                    <div className="text-xs uppercase">{event.month}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{event.title}</h3>
                    <div className="text-gray-600 text-sm">
                      {event.time} • {event.location}
                    </div>
                  </div>
                  <ArrowRight className="text-blue-800" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default NewsEvents