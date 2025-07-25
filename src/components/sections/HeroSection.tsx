'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { StarIcon, GlobeAltIcon, TrophyIcon } from '@heroicons/react/24/solid'

export function HeroSection() {
  return (
    <section className="relative bg-white pt-24 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-secondary-400 to-secondary-600 rounded-full blur-3xl opacity-15" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent-400 rounded-full blur-3xl opacity-10" />
      
      {/* Floating shapes */}
      <div className="absolute top-32 left-20 w-6 h-6 bg-accent-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
      <div className="absolute top-64 right-32 w-4 h-4 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/3 w-8 h-8 bg-secondary-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />

      <div className="container-main relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column - Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="mb-8 animate-fade-in-up">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 text-sm font-bold tracking-wider uppercase px-6 py-3 rounded-full border border-primary-200">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                #1 Corporate Gifting Solutions
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 animate-fade-in-up leading-[0.9] text-gray-900">
              YOUR{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                  #1 SOURCE
                </span>
                <div className="absolute -right-6 -top-6 w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full flex items-center justify-center transform rotate-12 shadow-lg">
                  <span className="text-white font-bold text-xl">🎁</span>
                </div>
              </span>{' '}
              FOR CUSTOMIZED CORPORATE{' '}
              <span className="bg-gradient-to-r from-secondary-500 to-secondary-600 bg-clip-text text-transparent">
                GIFTING SOLUTIONS
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up font-medium leading-relaxed" style={{ animationDelay: '0.1s' }}>
              The Perfect Corporate Gift Makes Anyone Feel Special – Gifting Solutions for Employees, Clients and Business Partners to recognise and reward success in the workplace.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Button 
                href="/contact" 
                size="lg" 
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 text-lg font-bold shadow-xl rounded-full transform hover:scale-105 transition-all duration-300 border-0"
              >
                Book a Schedule 📅
              </Button>
              <div className="flex items-center gap-2 text-gray-600 font-medium">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 border-2 border-white" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-500 border-2 border-white" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-400 to-accent-500 border-2 border-white" />
                </div>
                <span className="ml-2">Join 5,000+ happy customers</span>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="flex-1 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto lg:max-w-none">
              {/* Card 1 */}
              <div className="bg-gradient-to-br from-secondary-400 to-secondary-500 p-6 rounded-3xl text-white shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2">EMPLOYEE ENGAGEMENT</h3>
                <p className="text-secondary-100 mb-4 font-medium">Boost retention & satisfaction</p>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-bold inline-block">
                  Learn More
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border-2 border-gray-100 p-6 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">31%</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Engagement Boost</h3>
                <p className="text-gray-600 font-medium">Average improvement</p>
              </div>

              {/* Card 3 - Full Width */}
              <div className="md:col-span-2 bg-gradient-to-r from-primary-500 to-primary-600 p-8 rounded-3xl text-white shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">CURATED GIFT COLLECTIONS</h3>
                    <p className="text-primary-100 font-medium">From premium swag to luxury experiences</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black">250K+</div>
                    <div className="text-primary-100 font-medium">Gift Options</div>
                  </div>
                </div>
                <Button 
                  variant="secondary" 
                  className="mt-6 bg-white text-primary-600 hover:bg-gray-100 font-bold rounded-full px-6 py-2"
                >
                  Browse Gifts →
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">200+</span>
                </div>
                <div className="text-3xl font-black text-gray-900 mb-1">Projects</div>
                <div className="text-gray-600 font-medium">Completed</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">20K+</span>
                </div>
                <div className="text-3xl font-black text-gray-900 mb-1">Packages</div>
                <div className="text-gray-600 font-medium">Delivered</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">5K+</span>
                </div>
                <div className="text-3xl font-black text-gray-900 mb-1">Products</div>
                <div className="text-gray-600 font-medium">Available</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">10</span>
                </div>
                <div className="text-3xl font-black text-gray-900 mb-1">Years</div>
                <div className="text-gray-600 font-medium">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 