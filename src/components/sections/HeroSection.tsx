'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { StarIcon, GlobeAltIcon, TrophyIcon } from '@heroicons/react/24/solid'

export function HeroSection() {
  return (
    <section className="bg-gray-900 text-white section-padding relative overflow-hidden min-h-screen flex items-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>

      <div className="container-main relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-6 animate-fade-in-up">
            <span className="inline-block bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-semibold tracking-wider uppercase px-4 py-2 rounded-full">
              Corporate Gifting
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in-up leading-tight text-white">
            Transform Relationships Through{' '}
            <span className="bg-gradient-to-r from-primary-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-extrabold">
              Strategic Gifting
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto animate-fade-in-up leading-relaxed font-medium" style={{ animationDelay: '0.1s' }}>
            Boost employee engagement by 31%, increase customer retention by 25%, and accelerate sales pipelines with our automated corporate gifting platform. Choose from 250,000+ curated gifts delivered globally.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              href="/contact" 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg"
            >
              Talk to Sales →
            </Button>
            <Button 
              href="/signup" 
              variant="secondary" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg transition-all duration-300"
            >
              Start Gifting Today
            </Button>
          </div>

          {/* Enhanced Social Proof */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 text-gray-200 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                <TrophyIcon className="h-6 w-6 text-primary-400" />
              </div>
                              <div>
                  <div className="text-2xl lg:text-3xl font-bold text-white">7M+</div>
                  <div className="text-sm text-gray-200 font-medium">gifts delivered globally!</div>
                </div>
            </div>
            
            <div className="hidden lg:block w-px h-12 bg-gray-600"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <div className="flex">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                </div>
              </div>
                             <div>
                 <div className="text-2xl lg:text-3xl font-bold text-white">4.9</div>
                 <div className="text-sm text-gray-200 font-medium">rating</div>
               </div>
            </div>
            
            <div className="hidden lg:block w-px h-12 bg-gray-600"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <GlobeAltIcon className="h-6 w-6 text-green-400" />
              </div>
                             <div>
                 <div className="text-lg lg:text-xl font-bold text-white">Global</div>
                 <div className="text-sm text-gray-200 font-medium">Shipping</div>
               </div>
            </div>
          </div>
        </div>

        {/* Use Case Tabs Preview */}
        <div className="mt-24 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-600 p-6 rounded-xl text-white hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-3xl mb-2">🎁</div>
                <div className="font-semibold text-white">HR Teams</div>
                <div className="text-sm text-blue-100 font-medium">Employee Engagement</div>
              </div>
              <div className="bg-pink-600 p-6 rounded-xl text-white hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-3xl mb-2">💝</div>
                <div className="font-semibold text-white">Marketing Teams</div>
                <div className="text-sm text-pink-100 font-medium">Customer Loyalty</div>
              </div>
              <div className="bg-yellow-600 p-6 rounded-xl text-white hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-3xl mb-2">🚀</div>
                <div className="font-semibold text-white">Sales Teams</div>
                <div className="text-sm text-yellow-100 font-medium">Pipeline Acceleration</div>
              </div>
              <div className="bg-green-600 p-6 rounded-xl text-white hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-3xl mb-2">🔗</div>
                <div className="font-semibold text-white">Developers</div>
                <div className="text-sm text-green-100 font-medium">Partner Integrations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 