'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const solutionLinks = [
  { name: 'Employee Engagement & Recognition', href: '/solutions/employee-engagement' },
  { name: 'Customer Loyalty & Activation', href: '/solutions/customer-loyalty' },
  { name: 'Pipeline Acceleration', href: '/solutions/pipeline-acceleration' },
  { name: 'Partner Integrations', href: '/solutions/partner-integrations' }
]

const productLinks = [
  { name: 'Automated Gifting', href: '/products/automated-gifting' },
  { name: 'Swag Stores', href: '/products/swag-stores' },
  { name: 'API Suite', href: '/products/api' },
  { name: 'Tracking & Reporting', href: '/products/reporting' },
  { name: 'Global Shipping', href: '/products/shipping' }
]

const giftLinks = [
  { name: 'Experiences', href: '/gifts/experiences' },
  { name: 'Wellness', href: '/gifts/wellness' },
  { name: 'Tech & Gadgets', href: '/gifts/tech' },
  { name: 'Food & Beverages', href: '/gifts/food' },
  { name: 'Sports Memorabilia', href: '/gifts/sports' },
  { name: 'Donations', href: '/gifts/donations' }
]

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Careers', href: '/careers' },
  { name: 'News', href: '/news' },
  { name: 'Contact Us', href: '/contact' }
]

const supportLinks = [
  { name: 'Help Center', href: '/help' },
  { name: 'Blog', href: '/blog' },
  { name: 'Webinars', href: '/webinars' },
  { name: 'Downloads & How-Tos', href: '/resources' },
  { name: 'Legal Center', href: '/legal' }
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Colorful Top Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-12">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-2">🎁</div>
              <div className="font-black text-sm">GIFTING</div>
            </div>
            <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-2">📈</div>
              <div className="font-black text-sm">GROWTH</div>
            </div>
            <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-2">🤝</div>
              <div className="font-black text-sm">RELATIONSHIPS</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-2">❤️</div>
              <div className="font-black text-sm">LOVE</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-black text-sm">SUCCESS</div>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-2">🚀</div>
              <div className="font-black text-sm">GROWTH</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-main">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center mb-6">
                <Image
                  src="/ridgegap-logo.png"
                  alt="RidgeGap"
                  width={180}
                  height={40}
                  className="h-10 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-gray-300 mb-6 max-w-sm">
                Build stronger connections with employees, customers, and prospects through thoughtful gifts and swag.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-6">
                Solutions
              </h3>
              <ul className="space-y-4">
                {solutionLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-6">
                Products
              </h3>
              <ul className="space-y-4">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gifts */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-6">
                Gifts
              </h3>
              <ul className="space-y-4">
                {giftLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company & Support */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-6">
                Company
              </h3>
              <ul className="space-y-4 mb-8">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-6">
                Support
              </h3>
              <ul className="space-y-4">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <p className="text-base text-gray-400">
                © 2025 Ridge Gap Solutions Pvt. Ltd. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Notice
                </Link>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  Cookie Settings
                </Link>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-400">
                Bengaluru, Karnataka • India
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 