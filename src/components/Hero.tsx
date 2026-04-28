import { Phone, Calendar, Award, Clock, Shield } from 'lucide-react'
import { useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

// Particle interface with lifecycle for smooth fade in/out
interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  baseOpacity: number
  lifecycle: number      // 0-1 progress through fade cycle
  lifecycleSpeed: number // How fast it cycles (slower = smoother)
  delay: number          // Initial delay before starting
}

// Lightning Particles Component with smooth fade in/out
const LightningParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const isInitializedRef = useRef(false)

  // Initialize particles with staggered delays
  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = []
    const isMobile = window.innerWidth < 768
    const count = isMobile ? 12 : 30
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.8, // Size: 0.8-2.3
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: (Math.random() - 0.5) * 0.25,
        baseOpacity: Math.random() * 0.3 + 0.2, // 0.2-0.5
        lifecycle: Math.random(), // Start at random point in cycle
        lifecycleSpeed: 0.0008 + Math.random() * 0.0006, // 8-12 seconds per cycle
        delay: i * 0.15 // Staggered delays
      })
    }
    return particles
  }, [])

  useEffect(() => {
    if (window.innerWidth < 768) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      if (!isInitializedRef.current) {
        particlesRef.current = initParticles(canvas.width, canvas.height)
        isInitializedRef.current = true
      }
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas, { passive: true })

    if (!isInitializedRef.current) {
      particlesRef.current = initParticles(canvas.width, canvas.height)
      isInitializedRef.current = true
    }

    // Calculate smooth fade opacity based on lifecycle (0-1)
    // 0-20%: fade in, 20-80%: fully visible, 80-100%: fade out
    const getFadeOpacity = (lifecycle: number): number => {
      if (lifecycle < 0.2) {
        // Fade in: 0 to 1 over first 20%
        return lifecycle / 0.2
      } else if (lifecycle > 0.8) {
        // Fade out: 1 to 0 over last 20%
        return (1 - lifecycle) / 0.2
      }
      // Fully visible in middle
      return 1
    }

    // Animation function
    const draw = () => {
      const w = canvas.width
      const h = canvas.height

      ctx.clearRect(0, 0, w, h)

      particlesRef.current.forEach(p => {
        // Update position continuously
        p.x += p.speedX
        p.y += p.speedY

        // Update lifecycle (loops from 0 to 1)
        p.lifecycle += p.lifecycleSpeed
        if (p.lifecycle >= 1) {
          p.lifecycle = 0
          // Respawn at new random position when cycle completes
          p.x = Math.random() * w
          p.y = Math.random() * h
        }

        // Wrap around screen edges smoothly
        if (p.x < -20) p.x = w + 20
        if (p.x > w + 20) p.x = -20
        if (p.y < -20) p.y = h + 20
        if (p.y > h + 20) p.y = -20

        // Calculate opacity with smooth fade
        const fadeMultiplier = getFadeOpacity(p.lifecycle)
        const currentOpacity = p.baseOpacity * fadeMultiplier

        // Skip drawing if nearly invisible
        if (currentOpacity < 0.01) return

        const glowSize = p.size

        // Draw outer glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowSize * 3)
        gradient.addColorStop(0, `rgba(245, 158, 11, ${currentOpacity})`)
        gradient.addColorStop(0.4, `rgba(245, 158, 11, ${currentOpacity * 0.4})`)
        gradient.addColorStop(1, 'rgba(245, 158, 11, 0)')

        ctx.beginPath()
        ctx.arc(p.x, p.y, glowSize * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Draw bright core
        ctx.beginPath()
        ctx.arc(p.x, p.y, glowSize * 0.6, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 220, 130, ${currentOpacity * 1.3})`
        ctx.fill()
      })
    }

    // Use only requestAnimationFrame for smoother animation
    let rafId: number
    const animate = () => {
      draw()
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(rafId)
    }
  }, [initParticles])

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: 'screen', willChange: 'transform' }}
    />
  )
}

const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null)

  const scrollToBooking = () => {
    const element = document.querySelector('#termin')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (!headlineRef.current) return

    if (window.innerWidth < 768) {
      gsap.from(headlineRef.current, {
        opacity: 0,
        y: 12,
        duration: 0.45,
        ease: 'power2.out',
        delay: 0.05,
      })
      return
    }

    const split = new SplitText(headlineRef.current, {
      type: 'lines, words',
    })

    split.lines.forEach((line) => {
      const el = line as HTMLElement
      el.style.overflow = 'hidden'
      el.style.paddingBottom = '0.12em'
      el.style.marginBottom = '-0.12em'
    })

    gsap.set(split.words, { yPercent: 115, opacity: 0, rotate: 4 })
    gsap.to(split.words, {
      yPercent: 0,
      opacity: 1,
      rotate: 0,
      duration: 1,
      stagger: 0.07,
      ease: 'expo.out',
      delay: 0.15,
    })

    return () => split.revert()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Gradient Orbs */}
        {/* Small Neon Accent Dots */}
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-accent/35 rounded-full blur-lg md:blur-xl md:animate-pulse-slow" />
        <div className="absolute top-1/2 right-12 w-8 h-8 bg-accent/35 rounded-full blur-lg md:blur-xl md:animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-2/3 right-1/3 w-10 h-10 bg-accent/35 rounded-full blur-lg md:blur-xl md:animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/40 rounded-full blur-2xl md:blur-3xl md:animate-pulse-slow" style={{ animationDelay: '1s' }} />

        {/* Circuit Lines Decoration */}
        <div className="absolute top-20 right-20 w-64 h-64 opacity-20 hidden lg:block">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 100 H80 V40 H140" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
            <path d="M60 160 H100 V100 H160 V60" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="80" cy="40" r="6" fill="#F59E0B"/>
            <circle cx="160" cy="60" r="6" fill="#F59E0B"/>
            <circle cx="20" cy="100" r="4" fill="#F59E0B"/>
            <circle cx="60" cy="160" r="4" fill="#F59E0B"/>
          </svg>
        </div>
        <div className="absolute top-20 left-20 w-64 h-64 opacity-20 hidden lg:block" style={{ transform: 'scaleX(-1)' }}>
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 100 H80 V40 H140" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
            <path d="M60 160 H100 V100 H160 V60" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="80" cy="40" r="6" fill="#F59E0B"/>
            <circle cx="160" cy="60" r="6" fill="#F59E0B"/>
            <circle cx="20" cy="100" r="4" fill="#F59E0B"/>
            <circle cx="60" cy="160" r="4" fill="#F59E0B"/>
          </svg>
        </div>

        {/* Lightning Particles */}
        <LightningParticles />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4 pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 ref={headlineRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight tracking-tight text-white mb-4 md:mb-6">
            Ihr Meisterbetrieb für{' '}
            <span className="text-accent">zuverlässige</span>{' '}
            Elektrotechnik.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 font-light mb-5 md:mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Von der Beratung bis zur Installation – Qualität und perfekter Service aus einer Hand.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-6 md:mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button onClick={scrollToBooking} className="btn-primary text-sm md:text-lg w-full sm:w-auto !py-3 !px-5 md:!py-4 md:!px-8">
              <Calendar className="w-4 h-4 md:w-5 md:h-5" />
              Kostenlosen Termin buchen
            </button>
            <a
              href="tel:+492375205268"
              className="btn-ghost w-full sm:w-auto !py-2.5 !px-4 md:!py-3 md:!px-6 text-sm md:text-base"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              02375 205268
            </a>
          </div>

          {/* Trust Elements */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10 text-white/70 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-1.5 md:gap-2">
              <Award className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              <span className="text-xs md:text-sm font-medium">Meisterbetrieb</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              <span className="text-xs md:text-sm font-medium">Faire Preise</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              <span className="text-xs md:text-sm font-medium">Schnelle Termine</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero