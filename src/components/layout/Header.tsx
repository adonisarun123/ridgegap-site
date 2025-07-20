'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'
import { NavDropdown } from '@/components/ui/Dropdown'
import { cn } from '@/lib/utils'

const solutionsItems = [
  {
    label: 'Employee Engagement & Recognition',
    href: '/solutions/employee-engagement'
  },
  {
    label: 'Customer Loyalty & Activation',
    href: '/solutions/customer-loyalty'
  },
  {
    label: 'Pipeline Acceleration',
    href: '/solutions/pipeline-acceleration'
  },
  {
    label: 'Partner Integrations',
    href: '/solutions/partner-integrations'
  }
]

const industriesItems = [
  { label: 'Technology', href: '/industries/technology' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'Retail & E-commerce', href: '/industries/retail' },
  { label: 'Casinos & Gaming', href: '/industries/gaming' },
  { label: 'Manufacturing & Construction', href: '/industries/manufacturing' }
]

const productsItems = [
  { label: 'Automated Gifting', href: '/products/automated-gifting' },
  { label: 'Swag Stores', href: '/products/swag-stores' },
  { label: 'API Suite', href: '/products/api' },
  { label: 'Tracking & Reporting', href: '/products/reporting' },
  { label: 'Global Shipping', href: '/products/shipping' }
]

const giftsItems = [
  { label: 'Experiences', href: '/gifts/experiences' },
  { label: 'Wellness', href: '/gifts/wellness' },
  { label: 'Tech & Gadgets', href: '/gifts/tech' },
  { label: 'Food & Beverages', href: '/gifts/food' },
  { label: 'Sports Memorabilia', href: '/gifts/sports' },
  { label: 'Donations', href: '/gifts/donations' }
]

const resourcesItems = [
  { label: 'Help Center', href: '/help' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Webinars', href: '/webinars' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' }
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container-main">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/ridgegap-logo.png"
                alt="RidgeGap"
                width={180}
                height={40}
                className="h-8 lg:h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavDropdown label="Solutions" items={solutionsItems} />
            <NavDropdown label="Products" items={productsItems} />
            <NavDropdown label="Gifts" items={giftsItems} />
            <Link href="/pricing" className="nav-link">
              Pricing
            </Link>
            <NavDropdown label="Resources" items={resourcesItems} />
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-primary-500 font-medium">
              Login
            </Link>
            <Button href="/contact" className="btn-primary">
              Talk to Sales
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-primary-500 hover:bg-gray-50 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavSection title="Solutions" items={solutionsItems} />
              <MobileNavSection title="Products" items={productsItems} />
              <MobileNavSection title="Gifts" items={giftsItems} />
              <Link
                href="/pricing"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <MobileNavSection title="Resources" items={resourcesItems} />
              
              <div className="pt-4 border-t border-gray-200 mt-4">
                <Link
                  href="/login"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <div className="px-3 pt-2">
                  <Button 
                    href="/contact" 
                    className="w-full btn-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Talk to Sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

interface MobileNavSectionProps {
  title: string
  items: Array<{ label: string; href: string }>
}

function MobileNavSection({ title, items }: MobileNavSectionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="space-y-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-md"
      >
        {title}
        <svg
          className={cn('h-4 w-4 transition-transform duration-200', isOpen && 'rotate-180')}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pl-4 space-y-1">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-500 hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
} 