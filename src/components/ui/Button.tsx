'use client'

import React, { forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  showArrow?: boolean
  href?: string
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    isLoading = false,
    showArrow = false,
    href,
    children, 
    disabled, 
    ...props 
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95'
    
    const variants = {
      primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 focus:ring-primary-500 shadow-xl hover:shadow-2xl',
      secondary: 'border-2 border-primary-500 text-primary-500 bg-white hover:bg-primary-500 hover:text-white focus:ring-primary-500 shadow-lg hover:shadow-xl',
      text: 'text-primary-500 hover:text-primary-600 focus:ring-primary-500 p-0 transform-none hover:scale-100'
    }
    
    const sizes = {
      sm: 'px-6 py-3 text-sm rounded-full',
      md: 'px-8 py-4 text-base rounded-full',
      lg: 'px-10 py-5 text-lg rounded-full'
    }

    const variantClasses = variants[variant]
    const sizeClasses = variant === 'text' ? '' : sizes[size]

    const buttonContent = (
      <>
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          <>
            {children}
            {showArrow && (
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            )}
          </>
        )}
      </>
    )

    if (href) {
      return (
        <Link
          href={href}
          className={cn(
            baseClasses,
            variantClasses,
            sizeClasses,
            isLoading && 'cursor-wait',
            className
          )}
        >
          {buttonContent}
        </Link>
      )
    }

    return (
      <button
        className={cn(
          baseClasses,
          variantClasses,
          sizeClasses,
          isLoading && 'cursor-wait',
          className
        )}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
      >
        {buttonContent}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button } 