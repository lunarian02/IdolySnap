'use client'

import { useEffect, useRef, useState } from 'react'
import { Play, Volume2, Maximize } from 'lucide-react'

const thumbnailDays = Array.from({ length: 31 }, (_, i) => ({
  day: i + 1,
  hasSnap: Math.random() > 0.15,
  highlight: [3, 9, 15, 22, 28].includes(i + 1),
}))

export default function MonthlyRecapSection() {
  const [visible, setVisible] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setPlaying(false)
            return 0
          }
          return prev + 0.5
        })
      }, 50)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [playing])

  const togglePlay = () => setPlaying((p) => !p)

  const formatTime = (pct: number) => {
    const total = 180 // 3 min video
    const elapsed = Math.floor((pct / 100) * total)
    const m = Math.floor(elapsed / 60)
    const s = elapsed % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-lavender text-sm font-medium tracking-widest uppercase mb-3 block">
            ✦ Monthly Recap
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Your diary,{' '}
            <span className="gradient-text">your film.</span>
          </h2>
          <p className="text-[#d4a5f5] text-lg max-w-2xl mx-auto">
            At the end of every month, your daily snaps become a film — a moving diary of your story with your idol.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video player mockup */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="glass rounded-2xl overflow-hidden border border-lavender/20 shadow-[0_20px_60px_rgba(192,132,252,0.1)]">
              {/* Video area */}
              <div
                className="relative cursor-pointer group"
                style={{ aspectRatio: '16/9' }}
                onClick={togglePlay}
              >
                {/* Cinematic BG */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-[#0d0018] to-pink-900/40" />

                {/* Visual content — simulated film strip frames */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <div className="grid grid-cols-3 gap-2 w-full h-full p-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="rounded-lg"
                        style={{
                          background: `linear-gradient(135deg,
                            hsla(${290 + i * 20}, 60%, 30%, 0.6),
                            hsla(${250 + i * 15}, 70%, 15%, 0.8))`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Month label */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white/80 text-xs font-medium">January 2026</span>
                </div>

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className={`
                      w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30
                      flex items-center justify-center transition-all duration-300
                      group-hover:bg-white/30 group-hover:scale-110
                      shadow-[0_0_30px_rgba(192,132,252,0.4)]
                    `}
                    onClick={togglePlay}
                  >
                    {playing ? (
                      <div className="flex gap-1.5">
                        <div className="w-1.5 h-5 bg-white rounded-sm" />
                        <div className="w-1.5 h-5 bg-white rounded-sm" />
                      </div>
                    ) : (
                      <Play size={22} className="text-white ml-1" fill="currentColor" />
                    )}
                  </button>
                </div>

                {/* Scan overlay effect while playing */}
                {playing && (
                  <div className="absolute inset-0 pointer-events-none opacity-10">
                    <div
                      className="absolute left-0 right-0 h-0.5 bg-lavender/60"
                      style={{ animation: 'scanline 2s linear infinite' }}
                    />
                  </div>
                )}
              </div>

              {/* Controls bar */}
              <div className="p-4 space-y-3">
                {/* Progress bar */}
                <div
                  className="w-full h-1.5 bg-white/10 rounded-full cursor-pointer relative overflow-hidden"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    const pct = ((e.clientX - rect.left) / rect.width) * 100
                    setProgress(Math.max(0, Math.min(100, pct)))
                  }}
                >
                  <div
                    className="absolute left-0 top-0 bottom-0 rounded-full transition-all"
                    style={{ width: `${progress}%`, background: 'linear-gradient(to right, var(--pink), var(--lavender))' }}
                  />
                  {/* Thumb */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_8px_rgba(244,114,182,0.8)] transition-all"
                    style={{ left: `calc(${progress}% - 6px)` }}
                  />
                </div>

                {/* Time + controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button onClick={togglePlay} className="text-white/70 hover:text-white transition-colors">
                      {playing ? (
                        <div className="flex gap-1">
                          <div className="w-1 h-3.5 bg-current rounded-sm" />
                          <div className="w-1 h-3.5 bg-current rounded-sm" />
                        </div>
                      ) : (
                        <Play size={16} fill="currentColor" />
                      )}
                    </button>
                    <span className="text-white/40 text-xs">
                      {formatTime(progress)} / 3:00
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-white/40">
                    <Volume2 size={15} className="hover:text-white/70 cursor-pointer transition-colors" />
                    <Maximize size={14} className="hover:text-white/70 cursor-pointer transition-colors" />
                  </div>
                </div>

                {/* Title */}
                <div className="flex items-center justify-between pt-1 border-t border-white/5">
                  <div>
                    <p className="text-white text-sm font-semibold">January Memories</p>
                    <p className="text-white/40 text-xs">31 snaps · 3 min</p>
                  </div>
                  <div className="flex items-center gap-1 bg-lavender/10 border border-lavender/30 rounded-full px-2 py-0.5">
                    <span className="text-lavender text-[10px] font-bold">✦ MV</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — calendar thumbnail strip */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
            style={{ transitionDelay: '250ms' }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-white text-2xl font-bold mb-2">
                  Your diary, filling up day by day
                </h3>
                <p className="text-[#d4a5f5] text-sm leading-relaxed">
                  Every snap fills a square. Build your streak, mark your highlights, and never miss a day with your idol.
                </p>
              </div>

              {/* Calendar grid */}
              <div className="glass rounded-2xl p-4 border border-lavender/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/70 text-sm font-semibold">January 2026</span>
                  <span className="text-pink-400 text-xs">23 / 31 days</span>
                </div>

                {/* Day grid — 7 cols */}
                <div className="grid grid-cols-7 gap-1.5">
                  {['S','M','T','W','T','F','S'].map((d) => (
                    <div key={d} className="text-center text-[10px] text-white/30 pb-1">{d}</div>
                  ))}
                  {/* Offset — Jan 1, 2026 is Thursday (offset 4) */}
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={`blank-${i}`} />
                  ))}
                  {thumbnailDays.map(({ day, hasSnap, highlight }) => (
                    <div
                      key={day}
                      className={`
                        aspect-square rounded-lg flex items-center justify-center text-[10px] font-medium
                        transition-all duration-200 cursor-default
                        ${highlight
                          ? 'calendar-highlight text-white'
                          : hasSnap
                          ? 'calendar-snap text-white/70'
                          : 'bg-white/3 text-white/20'
                        }
                      `}
                    >
                      {highlight ? '✦' : hasSnap ? day : day}
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded calendar-highlight" />
                    <span className="text-[10px] text-white/40">Special day</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded calendar-snap border border-lavender/20" />
                    <span className="text-[10px] text-white/40">Snap taken</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
