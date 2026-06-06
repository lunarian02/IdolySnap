'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  color: string
  type: 'star' | 'circle' | 'diamond'
}

const COLORS = [
  'rgba(244,114,182,',  // pink
  'rgba(192,132,252,',  // lavender
  'rgba(124,58,237,',   // purple
  'rgba(255,255,255,',  // white
]

export default function SparkleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const rafRef = useRef<number>(0)
  const lastSpawnRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const spawnParticle = () => {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)]
      const types: Particle['type'][] = ['star', 'circle', 'diamond']
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.6 - 0.2,
        life: 0,
        maxLife: 80 + Math.random() * 120,
        size: Math.random() * 3 + 1,
        color,
        type: types[Math.floor(Math.random() * types.length)],
      })
    }

    const drawStar = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      const spikes = 4
      const outer = size
      const inner = size * 0.4
      ctx.beginPath()
      for (let i = 0; i < spikes * 2; i++) {
        const r = i % 2 === 0 ? outer : inner
        const angle = (i * Math.PI) / spikes - Math.PI / 2
        if (i === 0) ctx.moveTo(x + r * Math.cos(angle), y + r * Math.sin(angle))
        else ctx.lineTo(x + r * Math.cos(angle), y + r * Math.sin(angle))
      }
      ctx.closePath()
    }

    const drawDiamond = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      ctx.beginPath()
      ctx.moveTo(x, y - size)
      ctx.lineTo(x + size * 0.6, y)
      ctx.lineTo(x, y + size)
      ctx.lineTo(x - size * 0.6, y)
      ctx.closePath()
    }

    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Spawn new particles
      if (timestamp - lastSpawnRef.current > 150) {
        spawnParticle()
        if (Math.random() > 0.6) spawnParticle()
        lastSpawnRef.current = timestamp
      }

      // Update and draw
      particlesRef.current = particlesRef.current.filter((p) => p.life < p.maxLife)

      for (const p of particlesRef.current) {
        p.life++
        p.x += p.vx
        p.y += p.vy

        const progress = p.life / p.maxLife
        const alpha = progress < 0.2
          ? progress / 0.2
          : progress > 0.7
          ? (1 - progress) / 0.3
          : 1

        ctx.globalAlpha = alpha * 0.8
        ctx.fillStyle = `${p.color}${alpha})`

        if (p.type === 'star') {
          drawStar(ctx, p.x, p.y, p.size * 2)
          ctx.fill()
        } else if (p.type === 'diamond') {
          drawDiamond(ctx, p.x, p.y, p.size * 1.5)
          ctx.fill()
        } else {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      ctx.globalAlpha = 1
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
