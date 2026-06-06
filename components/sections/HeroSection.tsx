'use client'

import { useState, FormEvent } from 'react'
import dynamic from 'next/dynamic'
import GlowButton from '../ui/GlowButton'
import PhoneMockup from '../ui/PhoneMockup'

const SparkleCanvas = dynamic(() => import('../ui/SparkleCanvas'), { ssr: false })

export default function HeroSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

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
        setMessage('You\'re on the list! We\'ll be in touch soon. 💜')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }

    setTimeout(() => {
      if (status !== 'success') setStatus('idle')
    }, 4000)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Sparkle canvas background */}
      <SparkleCanvas />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lavender/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-pink-400/10 border border-pink-400/30 rounded-full px-3 py-1.5 mb-5 animate-fade-up">
              <span className="text-pink-400 text-xs">✦</span>
              <span className="text-pink-400 text-xs font-medium tracking-wide">Daily Idol Diary · Coming 2026</span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-5 animate-fade-up"
              style={{ animationDelay: '0.1s', opacity: 0 }}
            >
              <span className="text-white">One Snap.</span>
              <br />
              <span className="gradient-text">Every Day.</span>
              <br />
              <span className="text-white">With Your Idol.</span>
            </h1>

            {/* Subtext */}
            <p
              className="text-[#d4a5f5] text-base sm:text-xl leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-up"
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              Your bias, your story. Upload a photo of your favorite idol — our AI crafts a unique figurine, then you snap one photo together every single day.
            </p>

            {/* Email form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0 animate-fade-up"
              style={{ animationDelay: '0.3s', opacity: 0 }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                required
                className="flex-1 px-5 py-3 rounded-full bg-white/5 border border-pink-400/30 text-white placeholder-white/30 focus:outline-none focus:border-pink-400/70 focus:bg-white/10 transition-all duration-200 text-sm"
              />
              <GlowButton type="submit" loading={status === 'loading'}>
                Notify Me
              </GlowButton>
            </form>

            {/* Status message */}
            {message && (
              <p
                className={`mt-3 text-sm animate-fade-up ${
                  status === 'success' ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {message}
              </p>
            )}

          </div>

          {/* Right — phone mockups */}
          <div className="flex items-end justify-center gap-6 lg:gap-10">
            {/* Female — featured & elevated */}
            <div className="animate-float -translate-y-4 scale-[1.05] origin-bottom z-10">
              <PhoneMockup variant="2d" imageSrc="/hero-female.png" label="🏯 Day 23" dayCount="23" />
            </div>
            {/* Male */}
            <div className="animate-float-delay origin-bottom" style={{ animationDelay: '1.2s' }}>
              <PhoneMockup variant="2d" imageSrc="/hero-male.png" label="🗼 Day 47" dayCount="47" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#08000f] to-transparent pointer-events-none" />
    </section>
  )
}
