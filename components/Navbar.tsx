'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import GlowButton from './ui/GlowButton'
import { useTheme } from './ThemeProvider'
import IdolySnapLogo from './ui/IdolySnapLogo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'dark:bg-[#08000f]/80 bg-[#fdf4f8]/80 backdrop-blur-xl border-b border-pink-400/10 shadow-[0_4px_30px_rgba(244,114,182,0.08)]'
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <IdolySnapLogo width={120} />
            <span className="hidden sm:inline-block text-[10px] text-pink-400/60 border border-pink-400/30 rounded-full px-2 py-0.5 tracking-widest uppercase">
              Beta
            </span>
          </div>

          {/* Nav links — desktop */}
          <div className="hidden md:flex items-center gap-8 text-sm text-[var(--text)] opacity-60">
            <a href="#features" className="hover:text-pink-400 hover:opacity-100 transition-colors duration-200">Features</a>
            <a href="#how-it-works" className="hover:text-pink-400 hover:opacity-100 transition-colors duration-200">How it works</a>
            <a href="#community" className="hover:text-pink-400 hover:opacity-100 transition-colors duration-200">Community</a>
          </div>

          {/* Right: theme toggle + CTA */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className={`
                w-9 h-9 rounded-full border flex items-center justify-center
                transition-all duration-300
                border-pink-400/30 hover:border-pink-400/60
                hover:shadow-[0_0_12px_rgba(244,114,182,0.3)]
                ${theme === 'dark'
                  ? 'bg-white/5 text-yellow-300'
                  : 'bg-pink-400/10 text-purple-600'
                }
              `}
            >
              {theme === 'dark'
                ? <Sun size={15} />
                : <Moon size={15} />
              }
            </button>

            <GlowButton size="sm" onClick={scrollToWaitlist}>
              Join Waitlist
            </GlowButton>
          </div>
        </div>
      </div>
    </nav>
  )
}
