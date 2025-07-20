'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'

export function BestProductSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-primary-50">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            {/* Circular background */}
            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full mx-auto relative overflow-hidden shadow-2xl">
              {/* Person placeholder - in real implementation you'd use next/image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-6xl">🧑‍💼</span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-accent-400 rounded-full animate-bounce"></div>
              <div className="absolute bottom-8 left-8 w-6 h-6 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              THE BEST GIFTS{' '}
              <br />
              FOR{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                  YOUR
                </span>
                <div className="absolute -right-4 -top-2 w-8 h-8 bg-accent-400 rounded-full flex items-center justify-center transform rotate-12">
                  <span className="text-white text-lg">🎯</span>
                </div>
              </span>{' '}
              <br />
              BUSINESS RELATIONSHIPS
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
              To generate trust and balanced and healthy business connections, for sustained growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                href="/gifts" 
                size="lg"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold"
              >
                Order Now 📦
              </Button>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600 font-medium">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Trusted by 5,000+ companies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 