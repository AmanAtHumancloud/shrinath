'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Image as ImageIcon } from 'lucide-react'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const categories = ['All', 'Campus', 'Events', 'Sports', 'Cultural', 'Academic']
  const [activeCategory, setActiveCategory] = useState('All')

  const photos = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `School Event ${i + 1}`,
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1]
  }))

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-purple-700 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Gallery
          </motion.h1>
          <p className="text-xl text-purple-200">
            Glimpses of life at Shrinath Shikshan Sanstha
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-blue-800 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {photos
              .filter(photo => activeCategory === 'All' || photo.category === activeCategory)
              .map((photo) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(photo.id)}
                  className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg 
                           flex items-center justify-center cursor-pointer hover:shadow-lg 
                           transition-shadow overflow-hidden group relative"
                >
                  <ImageIcon size={40} className="text-gray-400" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                                transition-opacity flex items-end p-4">
                    <div>
                      <h3 className="text-white font-semibold text-sm">{photo.title}</h3>
                      <p className="text-gray-300 text-xs">{photo.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center"
              >
                <ImageIcon size={60} className="text-gray-400" />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center"
                >
                  <X size={20} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}