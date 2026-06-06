import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Idoly Snap — Your Idol. Now Real.',
  description:
    'Upload a photo of your favorite idol. Our AI crafts a unique figurine — then you take photos together, every single day.',
  keywords: ['idol figurine', 'AI figurine', 'fan app', 'daily selfie', 'idol photo', 'fan experience'],
  authors: [{ name: 'Idoly Snap Team' }],
  openGraph: {
    title: 'Idoly Snap — Your Idol. Now Real.',
    description: 'Your Idol. Now Real. In Your Hands.',
    type: 'website',
    siteName: 'Idoly Snap',
    url: 'https://idolysnap.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Idoly Snap — Your Idol. Now Real.',
    description: 'Your Idol. Now Real. In Your Hands.',
  },
}

export const viewport: Viewport = {
  themeColor: '#08000f',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="bg-[var(--bg)] text-[var(--text)] antialiased overflow-x-hidden transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
