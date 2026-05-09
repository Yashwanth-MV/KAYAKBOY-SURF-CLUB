import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import '../styles/globals.css'
import SmoothScroll from '@/components/ui/SmoothScroll'

export const metadata: Metadata = {
  title: 'Kayakboy Surf Club — World-Class Surf School',
  description: 'Kayakboy Surf Club is the premier surfing school in Mulki, India. Join us for an unforgettable ocean adventure.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
