'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'

export function ServicesSection() {
  const services = [
    { icon: '🎁', name: 'Gift Curation', description: 'Expert selection of premium gifts' },
    { icon: '📦', name: 'Fulfillment', description: 'Global shipping and logistics' },
    { icon: '🛍️', name: 'Swag Stores', description: 'Branded merchandise solutions' },
    { icon: '📊', name: 'Analytics', description: 'Real-time tracking and insights' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Services List */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              HOW WE SERVE OUR{' '}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                BUSINESS PARTNERS
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 font-medium">
              Building and nurturing business for your clients, partners, and employees with comprehensive gifting solutions.
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
              {/* Tech Card */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl mb-2">💻</div>
                  <div className="font-black text-lg">TECH</div>
                  <div className="text-xs text-blue-100 font-medium">Startups & Tech Companies</div>
                </div>
              </div>

              {/* Finance Card */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl mb-2">💰</div>
                  <div className="font-black text-lg">FINANCE</div>
                  <div className="text-xs text-green-100 font-medium">Financial Services</div>
                </div>
              </div>

              {/* Healthcare Card */}
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl mb-2">🏥</div>
                  <div className="font-black text-lg">HEALTHCARE</div>
                  <div className="text-xs text-red-100 font-medium">Medical & Wellness</div>
                </div>
              </div>

              {/* Enterprise Card */}
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl mb-2">🏭</div>
                  <div className="font-black text-lg">ENTERPRISE</div>
                  <div className="text-xs text-purple-100 font-medium">Large Corporations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 