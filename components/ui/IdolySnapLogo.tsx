'use client'

import { useState, useEffect } from 'react'

const COLORS = {
  pink: '#FFA7C4',
  rose: '#F5A0C0',
  lavender: '#E8A0D0',
  purple: '#C4A8E8',
  lilac: '#C8B8F0',
  sky: '#A8C8F0',
  softPink: '#FFD0E8',
  softPurple: '#D0C0F0',
  warmPink: '#FFB8D0',
}

interface IdolySnapLogoProps {
  width?: number
  className?: string
}

export default function IdolySnapLogo({ width = 160, className = '' }: IdolySnapLogoProps) {
  const [hovered, setHovered] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const height = Math.round(width * (300 / 800))

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)',
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&display=swap');
        @keyframes idoly-sparkle {
          0%,100% { transform: scale(1); opacity:0.5; }
          50%      { transform: scale(1.4); opacity:0.9; }
        }
        @keyframes idoly-float {
          0%,100% { transform: translateY(0); opacity:0.5; }
          50%      { transform: translateY(-5px); opacity:0.8; }
        }
        @keyframes idoly-heartbeat {
          0%,100% { transform: scale(0.5); }
          15%      { transform: scale(0.58); }
          30%      { transform: scale(0.5); }
        }
      `}</style>

      <svg
        viewBox="0 0 800 300"
        width={width}
        height={height}
        style={{ overflow: 'visible', opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease' }}
      >
        <defs>
          <linearGradient id="ls-idolyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor={COLORS.pink} />
            <stop offset="35%"  stopColor={COLORS.lavender} />
            <stop offset="65%"  stopColor={COLORS.purple} />
            <stop offset="100%" stopColor={COLORS.sky} />
          </linearGradient>
          <linearGradient id="ls-snapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor={COLORS.purple} />
            <stop offset="50%"  stopColor={COLORS.rose} />
            <stop offset="100%" stopColor={COLORS.warmPink} />
          </linearGradient>
          <linearGradient id="ls-sparkleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor={COLORS.softPink} />
            <stop offset="100%" stopColor={COLORS.softPurple} />
          </linearGradient>
          <filter id="ls-glow">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor={COLORS.lavender} floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Sparkles */}
        <g style={{ animation: 'idoly-sparkle 2.4s ease-in-out 0s infinite', transformOrigin: '95px 65px' }}>
          <path d="M95 54 L97.7 62.7 L106.4 65 L97.7 67.3 L95 76 L92.3 67.3 L83.6 65 L92.3 62.7Z"
            fill={COLORS.softPurple} opacity="0.7" />
        </g>
        <g style={{ animation: 'idoly-sparkle 2.4s ease-in-out 0.6s infinite', transformOrigin: '700px 50px' }}>
          <path d="M700 39 L702.5 47.5 L711 50 L702.5 52.5 L700 61 L697.5 52.5 L689 50 L697.5 47.5Z"
            fill={COLORS.softPink} opacity="0.7" />
        </g>
        {hovered && (
          <>
            <g style={{ animation: 'idoly-sparkle 2.4s ease-in-out 0s infinite', transformOrigin: '180px 45px' }}>
              <path d="M180 38 L181.7 43.3 L187 45 L181.7 46.7 L180 52 L178.3 46.7 L173 45 L178.3 43.3Z"
                fill={COLORS.softPink} opacity="0.6" />
            </g>
            <g style={{ animation: 'idoly-sparkle 2.4s ease-in-out 0.3s infinite', transformOrigin: '620px 240px' }}>
              <path d="M620 233 L621.7 238.3 L627 240 L621.7 241.7 L620 247 L618.3 241.7 L613 240 L618.3 238.3Z"
                fill={COLORS.lilac} opacity="0.6" />
            </g>
          </>
        )}

        {/* Floating dots */}
        <circle cx="130" cy="95" r="3" fill={COLORS.lilac}
          style={{ animation: 'idoly-float 3.5s ease-in-out 0.5s infinite', transformOrigin: '130px 95px' }} />
        <circle cx="670" cy="85" r="2.5" fill={COLORS.warmPink}
          style={{ animation: 'idoly-float 3.5s ease-in-out 1s infinite', transformOrigin: '670px 85px' }} />

        {/* IDOLY */}
        <text x="400" y="150" textAnchor="middle"
          fontFamily="'Fredoka', 'Nunito', sans-serif"
          fontSize="120" fontWeight="700" letterSpacing="8"
          filter="url(#ls-glow)" fill="url(#ls-idolyGrad)">
          IDOLY
        </text>
        <text x="400" y="150" textAnchor="middle"
          fontFamily="'Fredoka', 'Nunito', sans-serif"
          fontSize="120" fontWeight="700" letterSpacing="8"
          fill="none" stroke="white" strokeWidth="1.5" opacity="0.2">
          IDOLY
        </text>

        {/* Divider */}
        <line x1="270" y1="172" x2="530" y2="172"
          stroke="url(#ls-sparkleGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

        {/* Heart */}
        <g transform="translate(400,172) scale(0.5)" opacity="0.55"
          style={{ animation: hovered ? 'idoly-heartbeat 1.2s ease-in-out infinite' : 'none',
                   transformOrigin: '400px 172px' }}>
          <path d="M0 -5 C-3 -10,-10 -10,-10 -5 C-10 0,0 8,0 8 C0 8,10 0,10 -5 C10 -10,3 -10,0 -5Z"
            fill={COLORS.rose} />
        </g>

        {/* SNAP */}
        <text x="400" y="232" textAnchor="middle"
          fontFamily="'Fredoka', 'Nunito', sans-serif"
          fontSize="68" fontWeight="600" letterSpacing="22"
          filter="url(#ls-glow)" fill="url(#ls-snapGrad)">
          SNAP
        </text>
      </svg>
    </div>
  )
}
