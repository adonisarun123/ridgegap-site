import React from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import {
  GiftIcon,
  CursorArrowRaysIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline'

const steps = [
  {
    icon: <GiftIcon className="w-10 h-10 text-primary-500" />,
    title: 'Choose Your Gifts',
    description:
      'Select from over 250,000+ top-brand gifts, experiences, and more. Or, let your recipients choose what they want.',
  },
  {
    icon: <CursorArrowRaysIcon className="w-10 h-10 text-primary-500" />,
    title: 'Personalize Your Message',
    description:
      "Add your branding, a personal message, and a custom video or image to make every gift special. It's all about the personal touch.",
  },
  {
    icon: <TrophyIcon className="w-10 h-10 text-primary-500" />,
    title: 'Send & Track',
    description:
      'Send gifts instantly via email or link. Track everything in real-time with our analytics dashboard.',
  },
]

const HowItWorksSection = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-main">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Gifting in Three Easy Steps
          </h2>
          <p className="text-xl text-gray-600">
            It's never been easier to send joy and build connections.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-8 text-center flex flex-col items-center"
            >
              <div className="bg-primary-100 rounded-full p-4 mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/contact" size="lg">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection 