'use client'

import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

interface DropdownItem {
  label: string
  href?: string
  onClick?: () => void
  icon?: React.ReactNode
  disabled?: boolean
}

interface DropdownProps {
  trigger: React.ReactNode
  items: DropdownItem[]
  align?: 'left' | 'right'
  className?: string
}

export function Dropdown({ trigger, items, align = 'left', className }: DropdownProps) {
  return (
    <Menu as="div" className={cn('relative inline-block text-left', className)}>
      <Menu.Button className="inline-flex items-center">
        {trigger}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={cn(
            'absolute z-50 mt-2 w-56 origin-top bg-white shadow-dropdown rounded-lg border border-gray-200 focus:outline-none',
            align === 'right' ? 'right-0' : 'left-0'
          )}
        >
          <div className="py-1">
            {items.map((item, index) => (
              <Menu.Item key={index} disabled={item.disabled}>
                {({ active }) => (
                  item.href ? (
                    <a
                      href={item.href}
                      className={cn(
                        'flex items-center px-4 py-2 text-sm transition-colors duration-200',
                        active ? 'bg-gray-50 text-gray-900' : 'text-gray-700',
                        item.disabled && 'opacity-50 cursor-not-allowed'
                      )}
                    >
                      {item.icon && <span className="mr-3">{item.icon}</span>}
                      {item.label}
                    </a>
                  ) : (
                    <button
                      onClick={item.onClick}
                      disabled={item.disabled}
                      className={cn(
                        'flex w-full items-center px-4 py-2 text-sm text-left transition-colors duration-200',
                        active ? 'bg-gray-50 text-gray-900' : 'text-gray-700',
                        item.disabled && 'opacity-50 cursor-not-allowed'
                      )}
                    >
                      {item.icon && <span className="mr-3">{item.icon}</span>}
                      {item.label}
                    </button>
                  )
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

interface NavDropdownProps {
  label: string
  items: DropdownItem[]
  className?: string
}

export function NavDropdown({ label, items, className }: NavDropdownProps) {
  return (
    <Dropdown
      trigger={
        <span className={cn('nav-link flex items-center', className)}>
          {label}
          <ChevronDownIcon className="ml-1 h-4 w-4" />
        </span>
      }
      items={items}
      className="relative"
    />
  )
} 