'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'

export function ServicesSection() {
  const services = [
    { icon: '🎁', name: 'New Joiner Kits', description: 'Welcome packages for new employees' },
    { icon: '📦', name: 'Curated Gift Boxes', description: 'Premium gift collections' },
    { icon: '👕', name: 'Custom Apparels', description: 'Branded t-shirts and clothing' },
    { icon: '💎', name: 'Luxury Gifting', description: 'Executive and CXO gifts' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Services List */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              OUR PRODUCT{' '}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                CATEGORIES
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 font-medium">
              We offer a comprehensive range of 5000+ innovative products across multiple categories to suit all your corporate gifting needs and budgets.
            </p>

            {/* Services List */}
            <div className="space-y-6 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{service.name}</h3>
                    <p className="text-gray-600 font-medium">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              href="/services" 
              size="lg"
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold"
            >
              Learn More About Our Services →
            </Button>
          </div>

          {/* Right - Category Cards */}
          <div className="space-y-4">
            {/* Header Card */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black mb-2">BUSINESS CATEGORIES</h3>
                  <p className="text-gray-300 font-medium">Specialized solutions for every industry</p>
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-2xl">🏢</span>
                </div>
              </div>
            </div>

            {/* Category Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Apparels Card */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl mb-2">👕</div>
                  <div className="font-black text-lg">APPARELS</div>
                  <div className="text-xs text-blue-100 font-medium">T-shirts, Shirts & Clothing</div>
                </div>
              </div>

              {/* Backpacks Card */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl mb-2">🎒</div>
                  <div className="font-black text-lg">BACKPACKS</div>
                  <div className="text-xs text-green-100 font-medium">Corporate Bags & Laptop Bags</div>
                </div>
              </div>

              {/* Technology Card */}
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl mb-2">📱</div>
                  <div className="font-black text-lg">TECH GADGETS</div>
                  <div className="text-xs text-red-100 font-medium">Electronics & Accessories</div>
                </div>
              </div>

              {/* Drinkware Card */}
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl mb-2">☕</div>
                  <div className="font-black text-lg">DRINKWARE</div>
                  <div className="text-xs text-purple-100 font-medium">Mugs, Bottles & Flasks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 