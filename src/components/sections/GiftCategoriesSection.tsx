'use client'

import React from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const categories = [
  {
    name: 'Experiences',
    count: '15,000+',
    description: 'Virtual cooking classes to spa days',
    image: '🎭',
    bgGradient: 'from-purple-500 to-pink-500',
    examples: ['Cooking Classes', 'Spa Days', 'Concerts', 'Travel']
  },
  {
    name: 'Wellness',
    count: '25,000+', 
    description: 'Fitness gear and mindfulness products',
    image: '🧘‍♀️',
    bgGradient: 'from-green-500 to-emerald-500',
    examples: ['Yoga Mats', 'Meditation Apps', 'Fitness Trackers', 'Aromatherapy']
  },
  {
    name: 'Tech & Gadgets',
    count: '40,000+',
    description: 'Latest tech and innovative gadgets',
    image: '📱',
    bgGradient: 'from-blue-500 to-cyan-500',
    examples: ['Headphones', 'Smart Devices', 'Chargers', 'Accessories']
  },
  {
    name: 'Food & Beverages',
    count: '80,000+',
    description: 'Gourmet treats and artisan delights',
    image: '🍫',
    bgGradient: 'from-orange-500 to-red-500',
    examples: ['Artisan Chocolates', 'Coffee Blends', 'Wine Sets', 'Snack Boxes']
  },
  {
    name: 'Sports & Recreation',
    count: '35,000+',
    description: 'Athletic gear and outdoor equipment',
    image: '⚽',
    bgGradient: 'from-indigo-500 to-purple-500',
    examples: ['Team Merchandise', 'Outdoor Gear', 'Sports Equipment', 'Apparel']
  },
  {
    name: 'Home & Office',
    count: '55,000+',
    description: 'Stylish items for work and home',
    image: '🏠',
    bgGradient: 'from-teal-500 to-green-500',
    examples: ['Desk Accessories', 'Home Decor', 'Plants', 'Organizers']
  }
]

const featuredGifts = [
  { name: 'Premium Headphones', category: 'Tech', price: '$150', image: '🎧' },
  { name: 'Gourmet Chocolate Box', category: 'Food', price: '$45', image: '🍫' },
  { name: 'Yoga Starter Kit', category: 'Wellness', price: '$75', image: '🧘‍♀️' },
  { name: 'Coffee Experience', category: 'Experiences', price: '$120', image: '☕' }
]

export function GiftCategoriesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Over <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">250,000</span> Gift Options
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            From experiences to tech gadgets, wellness products to gourmet treats - find the perfect gift for every occasion and recipient.
          </p>
          <Button href="/gifts" size="lg" className="bg-primary-600 hover:bg-primary-700">
            Browse All Gifts →
          </Button>
        </div>

        {/* Gift Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-0"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-90`}></div>
              
              {/* Content */}
              <div className="relative p-8 text-white">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {category.image}
                </div>
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <div className="text-3xl font-bold mb-2 text-white/90">{category.count}</div>
                <p className="text-white/80 mb-6">{category.description}</p>
                
                {/* Examples */}
                <div className="space-y-2 mb-6">
                  {category.examples.slice(0, 3).map((example, i) => (
                    <div key={i} className="text-sm bg-white/20 rounded-full px-3 py-1 inline-block mr-2">
                      {example}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Explore Category →
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Featured Gifts */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Trending Gift Selections
            </h3>
            <p className="text-lg text-gray-600">
              Popular choices loved by recipients worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGifts.map((gift, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="p-6">
                  <div className="text-5xl mb-4 text-center">{gift.image}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{gift.name}</h4>
                  <div className="text-sm text-gray-500 mb-2">{gift.category}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary-600">{gift.price}</span>
                    <span className="text-sm text-gray-400 group-hover:text-primary-600 transition-colors duration-300">
                      View Details →
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recipient Choice Feature */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-3xl text-white overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="p-8 lg:p-12">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Recipients Choose What They Love
              </h3>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Send a collection of gifts and let recipients pick their favorite. 
                No more guessing - just guaranteed smiles.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Curated gift collections</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>No sign-up required for recipients</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Option to swap if not satisfied</span>
                </li>
              </ul>
              <Button className="bg-white text-primary-600 hover:bg-gray-100">
                See How It Works
              </Button>
            </div>
            
            <div className="p-8 lg:p-12">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-6xl mb-6">🎁</div>
                  <h4 className="text-2xl font-bold mb-4">Gift Selection Process</h4>
                  <div className="space-y-4 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <span>You send a curated collection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <span>Recipient browses and chooses</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <span>Gift ships directly to them</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Discover the Perfect Gift?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Explore our full catalog and find something special for every recipient.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/gifts" size="lg">
                Browse Gift Catalog
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Get Recommendations
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 