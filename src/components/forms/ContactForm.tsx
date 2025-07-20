'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  title: string
  phone: string
  employees: string
  use_case: string
  message: string
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  title: '',
  phone: '',
  employees: '',
  use_case: '',
  message: ''
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData(initialFormData)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank you!</h3>
        <p className="text-gray-600 mb-4">
          We've received your message and will get back to you within 24 hours.
        </p>
        <Button 
          onClick={() => setSubmitStatus('idle')}
          variant="secondary"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="First Name *"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
          placeholder="John"
        />
        <Input
          label="Last Name *"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
          placeholder="Doe"
        />
      </div>

      {/* Email */}
      <Input
        label="Work Email *"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        required
        placeholder="john.doe@company.com"
      />

      {/* Company Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Company *"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          required
          placeholder="Your Company"
        />
        <Input
          label="Job Title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Your Title"
        />
      </div>

      {/* Phone */}
      <Input
        label="Phone Number"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleInputChange}
        placeholder="+1 (555) 123-4567"
      />

      {/* Company Size */}
      <div>
        <label htmlFor="employees" className="form-label">
          Number of Employees *
        </label>
        <select
          id="employees"
          name="employees"
          value={formData.employees}
          onChange={handleInputChange}
          required
          className="form-input"
        >
          <option value="">Select company size</option>
          <option value="1-10">1-10 employees</option>
          <option value="11-50">11-50 employees</option>
          <option value="51-200">51-200 employees</option>
          <option value="201-500">201-500 employees</option>
          <option value="501-1000">501-1,000 employees</option>
          <option value="1000+">1,000+ employees</option>
        </select>
      </div>

      {/* Use Case */}
      <div>
        <label htmlFor="use_case" className="form-label">
          Primary Use Case *
        </label>
        <select
          id="use_case"
          name="use_case"
          value={formData.use_case}
          onChange={handleInputChange}
          required
          className="form-input"
        >
          <option value="">Select primary use case</option>
          <option value="employee-engagement">Employee Engagement & Recognition</option>
          <option value="customer-loyalty">Customer Loyalty & Activation</option>
          <option value="pipeline-acceleration">Sales Pipeline Acceleration</option>
          <option value="partner-integrations">Partner Integrations</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Tell us about your gifting needs and goals..."
          className="form-input resize-none"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button
          type="submit"
          isLoading={isSubmitting}
          disabled={isSubmitting}
          size="lg"
          className="w-full"
        >
          {isSubmitting ? 'Sending...' : 'Get Started'}
        </Button>
        
        {submitStatus === 'error' && (
          <p className="text-red-600 text-sm mt-2">
            Something went wrong. Please try again or email us directly.
          </p>
        )}
        
        <p className="text-sm text-gray-600 mt-4 text-center">
          By submitting this form, you agree to our{' '}
          <a href="/privacy" className="text-primary-600 hover:text-primary-700">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="/terms" className="text-primary-600 hover:text-primary-700">
            Terms of Service
          </a>.
        </p>
      </div>
    </form>
  )
} 