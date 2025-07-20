'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'

export function LearnCardsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Learn How To Card */}
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4 leading-tight">
                  LEARN HOW TO{' '}
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                    BUILD RELATIONSHIPS
                  </span>
                </h3>
                <p className="text-gray-600 font-medium mb-6">
                  Corporate gifting is a great way to say "thanks" to employees, clients & partners. And builds goodwill, loyalty, & brand recognition.
                </p>
                <Button 
                  href="/blog" 
                  variant="secondary"
                  className="font-bold text-sm"
                >
                  Read Article
                </Button>
              </div>
              <div className="ml-6">
                <div className="w-24 h-24 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-3xl">📚</span>
                </div>
              </div>
            </div>
          </div>

          {/* Nutrition/Pricing Card */}
          <div className="bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-3xl p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
            {/* Price Badge */}
            <div className="absolute top-6 right-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-black text-secondary-600">$15</div>
                  <div className="text-xs font-bold text-secondary-600">per gift</div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl lg:text-3xl font-black mb-4 leading-tight">
                BASIC GIFTING MEAL PLAN
              </h3>
              <p className="text-secondary-100 font-medium mb-6">
                Essential corporate gifting packages designed to nourish business relationships and drive engagement.
              </p>
              <Button 
                href="/pricing" 
                className="bg-white text-secondary-600 hover:bg-gray-100 font-bold"
              >
                Shop Now
              </Button>
            </div>

            {/* Decorative Element */}
            <div className="absolute bottom-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 