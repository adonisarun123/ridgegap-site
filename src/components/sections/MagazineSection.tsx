'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'

export function MagazineSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-main">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Card - Main Feature */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-full">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
                      <span className="text-white text-2xl">🎯</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">Featured</div>
                      <div className="text-lg font-black text-gray-900">Client Testimonial</div>
                    </div>
                  </div>

                  <h3 className="text-3xl font-black text-gray-900 mb-4 leading-tight">
                    WHAT WE CARE{' '}
                    <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                      THE MOST?
                    </span>
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed font-medium">
                    "RidgeGap has transformed how we approach corporate gifting. Their platform makes it effortless to show appreciation to our employees and clients while maintaining our brand standards and staying within budget."
                  </p>

                  <div className="border-l-4 border-primary-500 pl-4 mb-6">
                    <p className="text-gray-700 italic font-medium">
                      "We've seen a 40% increase in employee satisfaction and 25% improvement in client retention since partnering with RidgeGap."
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">JD</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Jane Doe</div>
                      <div className="text-sm text-gray-600 font-medium">HR Director, Tech Corp</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column */}
            <div className="lg:col-span-4 space-y-8">
              {/* Stats Card */}
              <div className="bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-3xl p-8 text-white shadow-xl">
                <div className="text-center">
                  <div className="text-5xl font-black mb-2">01</div>
                  <div className="text-lg font-bold mb-4">BUSINESS METRIC</div>
                  <div className="text-secondary-100 font-medium mb-4">
                    Companies report significant improvement in business relationships
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                    <div className="text-3xl font-black">92%</div>
                    <div className="text-sm text-secondary-100 font-medium">Success Rate</div>
                  </div>
                </div>
              </div>

              {/* Achievement Card */}
              <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🏆</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">AWARD WINNING</h4>
                  <p className="text-gray-600 text-sm font-medium">
                    Recognized as the leading corporate gifting platform by industry experts
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-accent-400 to-accent-500 rounded-3xl p-6 text-white shadow-xl h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-white text-xl">🎁</span>
                  </div>
                  <h4 className="text-xl font-black mb-2">SHANNON PUPPET</h4>
                  <div className="text-xs text-accent-100 font-bold uppercase tracking-wider mb-4">
                    Adventure Traveler
                  </div>
                  <p className="text-accent-100 text-sm font-medium leading-relaxed">
                    Discover how leading companies use our platform to create meaningful connections through strategic gifting.
                  </p>
                </div>

                <div className="mt-auto">
                  <Button 
                    href="/case-studies" 
                    className="bg-white text-accent-600 hover:bg-gray-100 font-bold w-full"
                  >
                    Book a Schedule 📅
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 