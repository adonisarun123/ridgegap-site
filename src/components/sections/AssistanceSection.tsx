'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'

export function AssistanceSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-accent-400 to-accent-500 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
      
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left - Product Packages */}
          <div className="grid grid-cols-3 gap-4">
            {/* Package 1 - Green */}
            <div className="bg-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="bg-green-500 rounded-xl p-4 mb-4">
                <div className="text-white text-center">
                  <div className="text-xs font-bold mb-1">NEW JOINER</div>
                  <div className="text-lg font-black">KITS</div>
                  <div className="text-xs">WELCOME SETS</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-600 font-medium">Popular Choice</div>
                <div className="text-lg font-black text-gray-900">✨ Premium</div>
              </div>
            </div>

            {/* Package 2 - Red */}
            <div className="bg-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="bg-red-500 rounded-xl p-4 mb-4">
                <div className="text-white text-center">
                  <div className="text-xs font-bold mb-1">CUSTOMISED</div>
                  <div className="text-lg font-black">T-SHIRTS</div>
                  <div className="text-xs">APPARELS</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-600 font-medium">High Quality</div>
                <div className="text-lg font-black text-gray-900">🎨 Custom</div>
              </div>
            </div>

            {/* Package 3 - Blue */}
            <div className="bg-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="bg-blue-500 rounded-xl p-4 mb-4">
                <div className="text-white text-center">
                  <div className="text-xs font-bold mb-1">LUXURY</div>
                  <div className="text-lg font-black">CXO</div>
                  <div className="text-xs">GIFTING</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-600 font-medium">Executive Level</div>
                <div className="text-lg font-black text-gray-900">💎 Luxury</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-2 text-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              WHAT DO WE{' '}
              <span className="bg-white text-accent-600 px-4 py-2 rounded-2xl inline-block transform -rotate-2">
                CARE
              </span>{' '}
              ABOUT?
            </h2>
            
            <p className="text-xl text-accent-100 mb-8 max-w-2xl font-medium leading-relaxed">
              At ridgegap.com we understand the importance of finding the best corporate gifting solutions for clients and employees. We strengthen relationships and enhance your brand identity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                href="/contact" 
                size="lg"
                className="bg-white text-accent-600 hover:bg-gray-100 font-bold"
              >
                Get Free Quote 💼
              </Button>
              <Button 
                href="tel:+918296813621" 
                variant="secondary"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-accent-600 font-bold"
              >
                Call Now: +91 82968 13621
              </Button>
            </div>

            {/* Features list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="font-medium">10 years of experience</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="font-medium">Pan India delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="font-medium">Custom branding & personalization</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="font-medium">Budget-friendly solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 