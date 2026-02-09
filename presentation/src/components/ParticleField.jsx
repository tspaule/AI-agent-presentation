import { useEffect, useRef } from 'react'
import { useTheme } from '../hooks/useTheme'

export default function ParticleField() {
  const canvasRef = useRef(null)
  const { isDark } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.2
        this.speedY = (Math.random() - 0.5) * 0.2
        this.opacity = Math.random() * 0.4 + 0.1
        this.pulseSpeed = Math.random() * 0.015 + 0.003
        this.pulseOffset = Math.random() * Math.PI * 2
      }
      update(time) {
        this.x += this.speedX
        this.y += this.speedY
        this.currentOpacity = this.opacity * (0.5 + 0.5 * Math.sin(time * this.pulseSpeed + this.pulseOffset))
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
      }
      draw(ctx, dark) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        const o = this.currentOpacity * (dark ? 1 : 0.6)
        ctx.fillStyle = `rgba(236, 72, 153, ${o})`
        ctx.fill()
      }
    }

    const count = Math.min(50, Math.floor((canvas.width * canvas.height) / 30000))
    for (let i = 0; i < count; i++) particles.push(new Particle())

    let time = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time++
      particles.forEach(p => { p.update(time); p.draw(ctx, isDark) })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 140) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            const lineOpacity = (isDark ? 0.05 : 0.03) * (1 - dist / 140)
            ctx.strokeStyle = `rgba(236, 72, 153, ${lineOpacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: isDark ? 0.5 : 0.35 }}
    />
  )
}
