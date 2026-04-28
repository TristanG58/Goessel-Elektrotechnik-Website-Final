import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useGSAPReveal = () => {
  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const elements = gsap.utils.toArray<HTMLElement>('.reveal')

    elements.forEach((el) => {
      const delay = parseFloat(el.style.transitionDelay) || 0

      gsap.fromTo(
        el,
        { y: isMobile ? 15 : 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: isMobile ? 0.35 : 0.6,
          delay: isMobile ? 0 : delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: isMobile ? 'top 98%' : 'top 88%',
            toggleActions: 'play none none none',
            invalidateOnRefresh: true,
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])
}
