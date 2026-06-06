'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'
import GlowButton from '../ui/GlowButton'

export default function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setMessage('You\'re on the list! We\'ll reach out soon. 💜')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  return (
    <section id="waitlist" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`
            glass rounded-3xl p-8 sm:p-14 text-center border border-pink-400/20
            shadow-[0_0_60px_rgba(244,114,182,0.08)]
            transition-all duration-700
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-pink-400/10 border border-pink-400/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
            <span className="text-pink-400 text-sm font-medium">Early Access</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Start your diary.{' '}
            <span className="gradient-text">Day one starts here.</span>
          </h2>

          <p className="text-[#d4a5f5] text-lg mb-8 max-w-lg mx-auto">
            Join the waitlist and be the first to start your daily idol diary — one snap at a time.
          </p>

          {/* Early access note */}
          <div className="mb-8">
            <p className="text-white/50 text-sm">
              ✦ Be among the first fans to get access
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-5 py-3.5 rounded-full bg-white/5 border border-pink-400/30 text-white placeholder-white/30 focus:outline-none focus:border-pink-400/70 focus:bg-white/10 transition-all duration-200"
            />
            <GlowButton type="submit" loading={status === 'loading'} size="md">
              Join Waitlist
            </GlowButton>
          </form>

          {/* Status */}
          {message && (
            <p
              className={`mt-4 text-sm animate-fade-up ${
                status === 'success' ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {message}
            </p>
          )}

          {/* Social proof note */}
          <p className="text-white/30 text-xs mt-6">
            No spam. Ever. Unsubscribe anytime. 💜
          </p>
        </div>
      </div>
    </section>
  )
}
