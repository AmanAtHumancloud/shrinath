'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      name: 'Rajesh Patel',
      role: 'Parent',
      content: 'Shrinath Shikshan Sanstha has transformed my child\'s learning experience. The dedicated teachers and excellent facilities have made a remarkable difference.',
      rating: 5,
      image: '👨‍👧'
    },
    {
      name: 'Priya Sharma',
      role: 'Alumni - Class of 2020',
      content: 'The foundation I received at this school has been invaluable. The values and education continue to guide me in my professional journey.',
      rating: 5,
      image: '🎓'
    },
    {
      name: 'Anita Deshmukh',
      role: 'Teacher',
      content: 'Working here has been a wonderful experience. The school\'s commitment to holistic education creates an amazing environment for both students and teachers.',
      rating: 5,
      image: '📚'
    }
  ]

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What People Say
          </h2>
          <p className="text-blue-200">Testimonials from our community</p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-2xl p-8 md:p-12 text-center relative"
            >
              <Quote className="absolute top-4 left-4 text-blue-100" size={40} />
              <div className="text-6xl mb-6">{testimonials[current].image}</div>
              <p className="text-gray-600 text-lg mb-6 italic">
                "{testimonials[current].content}"
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-amber-400 fill-current" />
                ))}
              </div>
              <h3 className="font-semibold text-gray-800">{testimonials[current].name}</h3>
              <p className="text-gray-500 text-sm">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white 
                     rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white 
                     rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current ? 'bg-amber-400 w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials