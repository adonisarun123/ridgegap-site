'use client'

import React from 'react'

const logos = [
  // Using simple text as placeholders for logos
  { name: 'Microsoft' },
  { name: 'Meta' },
  { name: 'T-Mobile' },
  { name: 'Uber' },
  { name: 'Salesforce' },
  { name: 'Ebay' },
  { name: 'Amazon' },
  { name: 'HubSpot' },
  { name: 'Gillette' },
  { name: 'PepsiCo' },
  { name: 'Comcast' }
]

const LogoCloud = () => {
  return (
    <div className="bg-white py-8 sm:py-12">
      <div className="container-main">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by leading organizations, including 56% of the Fortune 100
        </h2>
        <div className="mt-10 w-full overflow-hidden">
          <div className="animate-infinite-scroll flex w-max">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="mx-8 flex w-40 items-center justify-center text-2xl font-bold text-gray-500"
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoCloud 