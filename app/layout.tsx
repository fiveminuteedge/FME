import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FiveMinuteEdge — Daily Training for Complex Sales',
  description: 'Five minutes a day. An edge that lasts a career. Built for mid-level SaaS AEs who are ready to sell differently.',
  metadataBase: new URL('https://fiveminuteedge.com'),
  openGraph: {
    title: 'FiveMinuteEdge',
    description: 'Five minutes a day. An edge that lasts a career.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
