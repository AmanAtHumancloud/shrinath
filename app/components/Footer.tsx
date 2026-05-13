'use client'

import Link from 'next/link'
import {
  GraduationCap,
  Facebook,      // Correct (not FacebookIcon)
  Instagram,     // Correct name
  Youtube,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'
const Footer = () => {
  const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/academics', label: 'Academics' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ]

  const programs = [
    'Pre-Primary',
    'Primary School',
    'Middle School',
    'Secondary School',
    'Activities',
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-amber-400" />
              <div>
                <h3 className="text-xl font-bold">Shrinath Shikshan</h3>
                <p className="text-xs text-gray-400">Sanstha</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 text-sm">
              Nurturing minds and building futures through quality education since 1998.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center 
                           hover:bg-amber-400 hover:text-gray-900 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program}>
                  <Link
                    href="/academics"
                    className="text-gray-400 hover:text-amber-400 transition text-sm"
                  >
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Near Main Road, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                <span>info@shrinathsanstha.edu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; 2024 Shrinath Shikshan Sanstha. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <Link href="#" className="  hover:text-amber-400">Privacy Policy</Link>
              <Link href="#" className="hover:text-amber-400">Terms of Service</Link>
              <Link href="#" className="hover:text-amber-400">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer