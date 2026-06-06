'use client'

import { useEffect, useRef, useState } from 'react'
import { Heart, MessageCircle } from 'lucide-react'

const fanPosts = [
  {
    user: 'sana_fan_92',
    avatar: 'S',
    avatarBg: 'from-pink-500 to-rose-400',
    caption: 'Day 120 with my bias! Can\'t believe we\'ve come this far 💜',
    likes: 2847,
    comments: 142,
    days: '120',
    accent: 'pink',
    tall: true,
  },
  {
    user: 'moonkiss.kr',
    avatar: 'M',
    avatarBg: 'from-purple-500 to-violet-400',
    caption: 'Our first month recap just dropped 😭🎬',
    likes: 1923,
    comments: 87,
    days: '31',
    accent: 'purple',
    tall: false,
  },
  {
    user: 'kpop_forever',
    avatar: 'K',
    avatarBg: 'from-pink-400 to-fuchsia-500',
    caption: 'Our rainy day selfie ☔ always my fave',
    likes: 987,
    comments: 44,
    days: '55',
    accent: 'pink',
    tall: true,
  },
  {
    user: 'haerin.daily',
    avatar: 'H',
    avatarBg: 'from-indigo-500 to-purple-500',
    caption: 'Monthly recap just dropped and I\'m not okay 🎬',
    likes: 1204,
    comments: 87,
    days: '47',
    accent: 'purple',
    tall: false,
  },
  {
    user: 'bias_wrecker',
    avatar: 'B',
    avatarBg: 'from-pink-600 to-pink-400',
    caption: 'We matched outfits today?? OMG 💗',
    likes: 4201,
    comments: 289,
    days: '203',
    accent: 'pink',
    tall: false,
  },
]

const accentMap = {
  pink: {
    border: 'border-pink-400/20',
    tag: 'bg-pink-400/10 text-pink-400',
    like: 'text-pink-400',
    heart: 'text-pink-400',
  },
  purple: {
    border: 'border-purple-400/20',
    tag: 'bg-purple-400/10 text-purple-400',
    like: 'text-purple-400',
    heart: 'text-purple-400',
  },
  lavender: {
    border: 'border-lavender/20',
    tag: 'bg-lavender/10 text-lavender',
    like: 'text-lavender',
    heart: 'text-lavender',
  },
}

function formatCount(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`
  return n.toString()
}

interface FanCardProps {
  post: typeof fanPosts[number]
  index: number
  visible: boolean
}

function FanCard({ post, index, visible }: FanCardProps) {
  const acc = accentMap[post.accent as keyof typeof accentMap]

  return (
    <div
      className={`
        glass rounded-2xl overflow-hidden border ${acc.border}
        hover:border-pink-400/30 transition-all duration-500 hover:-translate-y-1
        hover:shadow-[0_10px_40px_rgba(244,114,182,0.1)]
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${post.tall ? 'row-span-2' : ''}
      `}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Photo placeholder */}
      <div
        className="relative overflow-hidden"
        style={{ height: post.tall ? '280px' : '160px' }}
      >
        {/* Gradient photo mock */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg,
              hsla(${300 + index * 30}, 60%, 20%, 0.8),
              hsla(${260 + index * 20}, 70%, 10%, 0.9))`,
          }}
        />
        {/* Character silhouette */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60">
          <div className="w-10 h-10 rounded-full bg-white/20 border border-white/20" />
          <div className="w-12 h-16 rounded-t-lg bg-white/10 border-t border-white/10" />
        </div>
        {/* "You" silhouette */}
        <div className="absolute bottom-0 right-4 flex flex-col items-center opacity-40">
          <div className="w-8 h-8 rounded-full bg-white/15" />
          <div className="w-10 h-12 rounded-t-lg bg-white/10" />
        </div>
        {/* Day badge */}
        <div className={`absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full ${acc.tag}`}>
          Day {post.days}
        </div>
        {/* Gradient bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#110020] to-transparent" />
      </div>

      {/* Card body */}
      <div className="p-4">
        {/* User */}
        <div className="flex items-center gap-2 mb-2">
          <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${post.avatarBg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
            {post.avatar}
          </div>
          <span className="text-white/70 text-xs font-medium">@{post.user}</span>
        </div>

        {/* Caption */}
        <p className="text-white/60 text-xs leading-relaxed mb-3 line-clamp-2">
          {post.caption}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className={`flex items-center gap-1 text-xs ${acc.heart} hover:scale-110 transition-transform`}>
            <Heart size={13} fill="currentColor" />
            <span>{formatCount(post.likes)}</span>
          </button>
          <button className="flex items-center gap-1 text-xs text-white/40 hover:text-white/70 transition-colors">
            <MessageCircle size={13} />
            <span>{formatCount(post.comments)}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function CommunitySection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="community" className="section-padding relative overflow-hidden" ref={ref}>
      {/* BG glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-pink-400 text-sm font-medium tracking-widest uppercase mb-3 block">
            ✦ Community
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Join the{' '}
            <span className="gradient-text">fan universe</span>
          </h2>
          <p className="text-[#d4a5f5] text-lg max-w-2xl mx-auto">
            Share your daily snaps, show off your story, and celebrate every milestone with fans who get it.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-auto">
          {fanPosts.map((post, i) => (
            <FanCard key={post.user} post={post} index={i} visible={visible} />
          ))}
        </div>

        {/* Bottom fade */}
        <div className="mt-12 text-center">
          <p className="text-white/30 text-sm">
            ✦ &nbsp;Community launches with the app &nbsp;✦
          </p>
        </div>
      </div>
    </section>
  )
}
