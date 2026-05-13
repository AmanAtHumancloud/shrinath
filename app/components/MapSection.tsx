'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react'

const MapSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Visit Our Campus</h2>
          <p className="text-gray-600">
            Come visit us and experience the Shrinath Shikshan Sanstha difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-800 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-gray-600 text-sm">
                      Shrinath Shikshan Sanstha<br />
                      Near Main Road,<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="text-blue-800 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600 text-sm">+91 1234567890</p>
                    <p className="text-gray-600 text-sm">+91 9876543210</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="text-blue-800 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600 text-sm">info@shrinathsanstha.edu</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-blue-800 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Office Hours</h4>
                    <p className="text-gray-600 text-sm">Mon-Fri: 8:00 AM - 4:00 PM</p>
                    <p className="text-gray-600 text-sm">Sat: 8:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>

              <button className="btn-primary w-full mt-6 flex items-center justify-center gap-2">
                <Navigation size={20} />
                Get Directions
              </button>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="card h-full min-h-[400px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5!2d73.8!3d18.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMwJzAwLjAiTiA3M8KwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MapSection