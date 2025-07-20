import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'RidgeGap - Corporate Gifting That Means Business',
  description: 'Build stronger connections with employees, customers, and prospects through thoughtful gifts and swag. Over 250,000 gift options with global shipping.',
  keywords: 'corporate gifting, employee engagement, customer loyalty, business gifts, swag, automation',
  authors: [{ name: 'Ridge Gap Solutions Pvt. Ltd.' }],
  creator: 'Ridge Gap Solutions',
  publisher: 'Ridge Gap Solutions Pvt. Ltd.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ridgegap.com'),
  openGraph: {
    title: 'RidgeGap - Corporate Gifting That Means Business',
    description: 'Build stronger connections with employees, customers, and prospects through thoughtful gifts and swag.',
    url: 'https://ridgegap.com',
    siteName: 'RidgeGap',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/ridgegap-logo.png',
        width: 1200,
        height: 630,
        alt: 'RidgeGap Corporate Gifting Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RidgeGap - Corporate Gifting That Means Business',
    description: 'Build stronger connections with employees, customers, and prospects through thoughtful gifts and swag.',
    images: ['/ridgegap-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 