'use client'

import React, { useState, useEffect } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    quote: "Our employee survey shows wellness and morale have jumped over the past two years since launching RidgeGap.",
    author: "Sarah Chen",
    title: "VP of People Operations",
    company: "Salesforce",
    logo: "💙",
    bgColor: "from-blue-500 to-cyan-500"
  },
  {
    quote: "We've received overwhelmingly positive feedback since implementing RidgeGap at our company. Employees love the variety and choice.",
    author: "Michael Rodriguez", 
    title: "HR Director",
    company: "PepsiCo",
    logo: "🥤",
    bgColor: "from-red-500 to-pink-500"
  },
  {
    quote: "Unlike other acquisition incentives, RidgeGap's flexibility allowed us to tailor campaigns that resonated with our audience and drove meaningful results.",
    author: "Jennifer Park",
    title: "Marketing Director", 
    company: "Arccos",
    logo: "⛳",
    bgColor: "from-green-500 to-emerald-500"
  },
  {
    quote: "Recipients love that they can pick their own gift. I like that there's an array of options to choose from that you might actually want.",
    author: "David Thompson",
    title: "Employee Experience Manager",
    company: "Comcast",
    logo: "📺",
    bgColor: "from-purple-500 to-indigo-500"
  },
  {
    quote: "We are extremely pleased with the reception we've received from employees. They like to know you are thinking about them.",
    author: "Lisa Williams",
    title: "VP of Human Resources", 
    company: "Custom Assembly",
    logo: "🔧",
    bgColor: "from-orange-500 to-yellow-500"
  },
  {
    quote: "RidgeGap has definitely increased our overall employee recognition. Our employees love it, our managers love it, and it just fits perfectly.",
    author: "Robert Garcia",
    title: "Chief People Officer",
    company: "Tillamook",
    logo: "🧀",
    bgColor: "from-yellow-500 to-orange-500"
  }
]

const stats = [
  { number: "98%", label: "Customer Satisfaction", icon: "😊" },
  { number: "7M+", label: "Gifts Delivered", icon: "🎁" },
  { number: "150+", label: "Countries Served", icon: "🌍" },
  { number: "500+", label: "Enterprise Clients", icon: "🏢" }
]

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTest = testimonials[currentTestimonial]

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from the companies already transforming their relationships with meaningful gifting
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative mb-16">
          <Card className={`overflow-hidden border-0 bg-gradient-to-br ${currentTest.bgColor} text-white shadow-2xl`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Quote Side */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 text-yellow-300" />
                  ))}
                </div>
                
                <blockquote className="text-2xl lg:text-3xl font-medium mb-8 leading-relaxed italic">
                  "{currentTest.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                    {currentTest.logo}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{currentTest.author}</div>
                    <div className="text-white/80">{currentTest.title}</div>
                    <div className="text-white/60 text-sm">{currentTest.company}</div>
                  </div>
                </div>
              </div>

              {/* Visual Side */}
              <div className="p-8 lg:p-12 flex items-center justify-center">
                <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-8xl mb-6">{currentTest.logo}</div>
                    <h3 className="text-2xl font-bold mb-4">Success Story</h3>
                    <p className="text-white/80 mb-6">
                      See how {currentTest.company} transformed their employee experience with RidgeGap
                    </p>
                    <Button className="bg-white text-gray-900 hover:bg-gray-100">
                      Read Full Case Study →
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-primary-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
                "{testimonial.quote.substring(0, 120)}..."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  {testimonial.logo}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.author}</div>
                  <div className="text-gray-500 text-xs">{testimonial.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already transforming their relationships with RidgeGap.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" size="lg">
              Schedule a Demo
            </Button>
            <Button href="/case-studies" variant="secondary" size="lg">
              View All Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 