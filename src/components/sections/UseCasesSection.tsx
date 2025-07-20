'use client'

import React, { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { 
  UserGroupIcon, 
  HeartIcon, 
  RocketLaunchIcon, 
  CodeBracketIcon,
  CheckIcon,
  ArrowRightIcon,
  ChartBarIcon,
  GiftIcon,
  TrophyIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

const useCases = [
  {
    id: 'employees',
    title: 'Employee Engagement & Recognition',
    subtitle: 'HR Teams',
    description: 'Make appreciation part of your culture, not a once-a-year event. RidgeGap helps companies automate meaningful gifting moments that drive retention, collaboration and connection.',
    icon: <UserGroupIcon className="w-8 h-8" />,
    emoji: '🎁',
    bgGradient: 'bg-gradient-to-br from-secondary-400 to-secondary-600',
    borderColor: 'border-secondary-600',
    features: [
      'Recipients choose the gift they love',
      'Automate corporate business gifts for birthdays, anniversaries, onboarding and more',
      'Control budgets with ease',
      'Send globally in a few clicks'
    ],
    stat: {
      number: '79%',
      text: 'of employees say a birthday gift makes them feel appreciated.'
    }
  },
  {
    id: 'customers',
    title: 'Customer Loyalty & Activation',
    subtitle: 'Marketing Teams',
    description: 'Acquiring customers is hard. Keeping them is harder. RidgeGap helps organizations create unforgettable moments that turn customers into brand advocates.',
    icon: <HeartIcon className="w-8 h-8" />,
    emoji: '💝',
    bgGradient: 'bg-gradient-to-br from-primary-400 to-primary-600',
    borderColor: 'border-primary-600',
    features: [
      'Celebrate customer milestones and renewals with gifts and swag',
      'Automate customer loyalty gifting across CRM workflows',
      'Curate on-brand collections and customers can choose their favorite gift'
    ],
    stat: {
      number: '73%',
      text: 'of customers say receiving quality gifts makes them view a brand more favorably.'
    }
  },
  {
    id: 'prospects',
    title: 'Pipeline Acceleration',
    subtitle: 'Sales Teams',
    description: 'Standing out in a crowded inbox is getting harder and harder. RidgeGap\'s platform helps revenue teams break through, drive engagement, and close deals faster.',
    icon: <RocketLaunchIcon className="w-8 h-8" />,
    emoji: '🚀',
    bgGradient: 'bg-gradient-to-br from-accent-400 to-accent-600',
    borderColor: 'border-accent-600',
    features: [
      'Send personalized gifts or swag to warm up cold leads',
      'Incentivize meeting attendance & follow-up',
      'Automate gifting for prospects through your sales outreach tools'
    ],
    stat: {
      number: '25%',
      text: 'increase in meeting acceptance rates with prospect gifting.'
    }
  },
  {
    id: 'partners',
    title: 'Partner Integrations',
    subtitle: 'Developers',
    description: 'RidgeGap makes it easy to build gifting into your platform, program, or experience. Drive loyalty, engagement, and new revenue streams while we handle the logistics.',
    icon: <CodeBracketIcon className="w-8 h-8" />,
    emoji: '🔗',
    bgGradient: 'bg-gradient-to-br from-green-400 to-green-600',
    borderColor: 'border-green-600',
    features: [
      'Flexible API',
      'Curated gift and swag collections',
      'Global fulfillment, fully managed'
    ],
    stat: {
      number: '150+',
      text: 'countries served with global fulfillment network.'
    }
  }
]

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState('employees')
  const activeUseCase = useCases.find(useCase => useCase.id === activeTab)

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 text-sm font-bold tracking-wider uppercase px-6 py-3 rounded-full border border-primary-200 mb-8">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse inline-block mr-2" />
            Strategic Corporate Gifting
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            CURATED GIFT{' '}
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              COLLECTIONS
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-medium">
            Our comprehensive collection of corporate gifting solutions designed for every team and business objective.
          </p>
        </div>

        {/* Colorful Business Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-primary-400 to-primary-600 p-8 rounded-3xl text-white shadow-xl transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">🎁</div>
            <h3 className="text-2xl font-black mb-2">PREMIUM GIFTS</h3>
            <p className="text-primary-100 font-medium">Employee Engagement Solutions</p>
          </div>
          
          <div className="bg-gradient-to-br from-accent-400 to-accent-600 p-8 rounded-3xl text-white shadow-xl transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-black mb-2">SWAG STORES</h3>
            <p className="text-accent-100 font-medium">Customer Loyalty Programs</p>
          </div>
          
          <div className="bg-gradient-to-br from-secondary-400 to-secondary-600 p-8 rounded-3xl text-white shadow-xl transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-black mb-2">SALES GIFTS</h3>
            <p className="text-secondary-100 font-medium">Sales Pipeline Acceleration</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {useCases.map((useCase) => (
            <button
              key={useCase.id}
              onClick={() => setActiveTab(useCase.id)}
              className={`p-6 rounded-2xl text-left transition-all duration-300 transform hover:scale-105 ${
                activeTab === useCase.id 
                  ? `${useCase.bgGradient} text-white shadow-2xl scale-105` 
                  : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-primary-300 shadow-lg'
              }`}
            >
              <div className="text-3xl mb-3">{useCase.emoji}</div>
              <div className="font-bold text-base mb-1">{useCase.subtitle}</div>
              <div className="text-sm opacity-80 font-medium">{useCase.title.split('&')[0].trim()}</div>
            </button>
          ))}
        </div>

        {/* Active Use Case Content */}
        {activeUseCase && (
          <div className={`rounded-2xl overflow-hidden shadow-2xl border-4 ${activeUseCase.borderColor}`}>
            <div className={`${activeUseCase.bgGradient} text-white`}>
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                {/* Left Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      {activeUseCase.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold opacity-90">{activeUseCase.subtitle}</div>
                      <div className="text-xs opacity-70">Solutions</div>
                    </div>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                    {activeUseCase.title}
                  </h3>
                  
                  <p className="text-lg lg:text-xl mb-8 opacity-90 leading-relaxed">
                    {activeUseCase.description}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {activeUseCase.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckIcon className="w-6 h-6 mt-0.5 flex-shrink-0" />
                        <span className="text-sm lg:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button 
                      href="/contact" 
                      className="bg-white text-gray-900 hover:bg-gray-100 flex items-center gap-2"
                    >
                      Talk to Sales
                      <ArrowRightIcon className="w-4 h-4" />
                    </Button>
                    <Button 
                      href="/gifts" 
                      variant="secondary"
                      className="border-white text-white hover:bg-white hover:text-gray-900"
                    >
                      Start Gifting Today
                    </Button>
                  </div>

                  {/* Stat */}
                  <div className="bg-white/10 rounded-xl p-6">
                    <div className="text-4xl lg:text-5xl font-bold mb-2">{activeUseCase.stat.number}</div>
                    <div className="text-sm lg:text-base opacity-90">{activeUseCase.stat.text}</div>
                    <div className="mt-3">
                      <span className="text-sm underline cursor-pointer hover:no-underline">
                        Read Article →
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Image/Visual */}
                <div className="relative p-8 lg:p-12 flex items-center justify-center">
                  <div className="w-full max-w-md">
                    <div className="aspect-square bg-white/10 rounded-3xl flex items-center justify-center relative overflow-hidden">
                      <div className="text-8xl opacity-20 absolute inset-0 flex items-center justify-center">
                        {activeUseCase.emoji}
                      </div>
                      <div className="relative z-10 text-center">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          {activeUseCase.icon}
                        </div>
                        <div className="text-xl font-semibold mb-2">
                          Transform Your {activeUseCase.subtitle}
                        </div>
                        <div className="text-sm opacity-80">
                          Discover the power of meaningful gifting
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent-400 to-accent-500 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <div className="text-3xl mb-2">🎁</div>
                  <div className="font-bold text-sm">GIFTING</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <div className="text-3xl mb-2">📈</div>
                  <div className="font-bold text-sm">GROWTH</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <div className="text-3xl mb-2">🤝</div>
                  <div className="font-bold text-sm">RELATIONSHIPS</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="font-bold text-sm">SUCCESS</div>
                </div>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-black mb-4">
                TRANSFORM YOUR BUSINESS RELATIONSHIPS
              </h3>
              <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto font-medium">
                Join thousands of companies already using RidgeGap to build stronger relationships through strategic gifting.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  href="/contact" 
                  size="lg"
                  className="bg-white text-accent-600 hover:bg-gray-100 font-bold rounded-full px-8 py-4"
                >
                  Book a Schedule 📅
                </Button>
                <Button 
                  href="/pricing" 
                  variant="secondary" 
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-accent-600 font-bold rounded-full px-8 py-4"
                >
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 