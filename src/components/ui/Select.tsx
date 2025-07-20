'use client'

import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

interface SelectProps {
  options: string[]
  placeholder?: string
  value?: string
  onSelect: (value: string) => void
  className?: string
  disabled?: boolean
}

export function Select({ 
  options, 
  placeholder = "Select an option", 
  value, 
  onSelect, 
  className,
  disabled = false 
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<string>(value || '')

  const handleSelect = (option: string) => {
    setSelectedValue(option)
    onSelect(option)
    setIsOpen(false)
  }

  return (
    <div className={cn("relative", className)}>
      <button
        type="button"
        className={cn(
          "relative w-full bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm",
          disabled && "bg-gray-50 text-gray-500 cursor-not-allowed"
        )}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
      >
        <span className="block truncate">
          {selectedValue || placeholder}
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Options */}
          <div className="absolute z-20 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {options.map((option, index) => (
              <div
                key={index}
                className={cn(
                  "cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-primary-50 hover:text-primary-600",
                  selectedValue === option ? "bg-primary-100 text-primary-600" : "text-gray-900"
                )}
                onClick={() => handleSelect(option)}
              >
                <span className="block truncate">
                  {option}
                </span>
                {selectedValue === option && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-primary-600">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
} 