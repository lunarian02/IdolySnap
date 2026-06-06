import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Idoly Snap — Your Idol. Now Real.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0d0018 0%, #1a0035 50%, #0d0018 100%)',
          position: 'relative',
        }}
      >
        {/* Glow orbs */}
        <div style={{
          position: 'absolute', top: '80px', left: '200px',
          width: '300px', height: '300px',
          borderRadius: '50%',
          background: 'rgba(244,114,182,0.12)',
          filter: 'blur(80px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '80px', right: '200px',
          width: '280px', height: '280px',
          borderRadius: '50%',
          background: 'rgba(192,132,252,0.12)',
          filter: 'blur(80px)',
        }} />

        {/* Logo block */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* IDOLY */}
          <div style={{
            fontSize: '140px',
            fontWeight: '700',
            color: '#FFA7C4',
            letterSpacing: '12px',
            lineHeight: 1,
          }}>
            IDOLY
          </div>

          {/* Divider */}
          <div style={{
            width: '360px', height: '2px',
            background: 'rgba(196,168,232,0.35)',
            margin: '12px 0',
          }} />

          {/* SNAP */}
          <div style={{
            fontSize: '72px',
            fontWeight: '600',
            color: '#C4A8E8',
            letterSpacing: '28px',
            lineHeight: 1,
          }}>
            SNAP
          </div>
        </div>

        {/* Tagline */}
        <div style={{
          fontSize: '30px',
          color: 'rgba(212,165,245,0.65)',
          marginTop: '56px',
          letterSpacing: '3px',
        }}>
          Your Idol. Now Real.
        </div>

        {/* URL */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          fontSize: '20px',
          color: 'rgba(255,255,255,0.2)',
          letterSpacing: '2px',
        }}>
          idolysnap.com
        </div>
      </div>
    ),
    { ...size }
  )
}
