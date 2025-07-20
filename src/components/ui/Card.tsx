'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'feature' | 'product'
  children: React.ReactNode
}

export function Card({ 
  className, 
  variant = 'default', 
  children, 
  ...props 
}: CardProps) {
  const variants = {
    default: 'bg-white rounded-card shadow-card border border-gray-200',
    elevated: 'bg-white rounded-card shadow-card-elevated hover:shadow-card-hover transition-shadow duration-300 border border-gray-200',
    feature: 'bg-white rounded-card shadow-card-elevated hover:shadow-card-hover transition-shadow duration-300 p-8 text-center border border-gray-200',
    product: 'bg-white rounded-card shadow-card hover:shadow-card-hover transition-shadow duration-300 p-4 border border-gray-200'
  }

  return (
    <div
      className={cn(variants[variant], className)}
      {...props}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div className={cn('p-6 pb-0', className)} {...props}>
      {children}
    </div>
  )
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div className={cn('p-6', className)} {...props}>
      {children}
    </div>
  )
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function CardFooter({ className, children, ...props }: CardFooterProps) {
  return (
    <div className={cn('p-6 pt-0', className)} {...props}>
      {children}
    </div>
  )
} 