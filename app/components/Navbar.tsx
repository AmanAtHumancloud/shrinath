'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, GraduationCap, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/academics', label: 'Academics' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6 text-sm">
            <span className="flex items-center">
              <Phone size={14} className="mr-1" /> +91 1234567890
            </span>
            <span className="flex items-center">
              <Mail size={14} className="mr-1" /> info@shrinathsanstha.edu
            </span>
          </div>
          <div className="flex space-x-4 text-sm">
            <Link href="/admissions" className="hover:text-amber-400 transition">
              Online Admission
            </Link>
            <Link href="/contact" className="hover:text-amber-400 transition">
              Enquiry
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-800" />
              <div>
                <h1 className="text-xl font-bold text-blue-900 leading-tight">
                  Shrinath Shikshan
                </h1>
                <p className="text-xs text-gray-600 -mt-1">Sanstha</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-gray-700 hover:text-blue-800 font-medium 
                           transition-colors duration-200 rounded-lg hover:bg-blue-50"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/admissions" className="btn-primary ml-4 text-sm">
                Apply Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-4 py-2 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-gray-700 hover:text-blue-800 
                             hover:bg-blue-50 rounded-lg transition"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/admissions"
                  className="block w-full text-center btn-primary mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}

export default Navbar