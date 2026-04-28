import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    // Check initial scroll position on mount
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#leistungen', label: 'Leistungen' },
    { href: '#ueber-uns', label: 'Über uns' },
    { href: '#termin', label: 'Kontakt' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  isScrolled
    ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 md:py-3'
    : 'bg-transparent py-4 md:py-5'
}`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center group"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <img
                src={isScrolled ? '/logo.png' : '/logo-light.png'}
                alt="Gössel Elektrotechnik Logo"
                width={3543}
                height={832}
                className="transition-all duration-300"
                decoding="sync"
                loading="eager"
                style={{
  height: isScrolled ? '48px' : '72px',
  width: 'auto',
  willChange: 'filter',
  filter: isScrolled
    ? 'none'
    : 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.4)) drop-shadow(0 0 20px rgba(245, 158, 11, 0.25))',
  transition: 'filter 300ms ease, height 300ms ease',
}}
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`font-medium transition-colors duration-200 link-underline ${
                    isScrolled
                      ? 'text-text-body hover:text-primary'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#termin')}
                className="btn-primary !py-3 !px-6"
              >
                <Phone className="w-4 h-4" />
                Termin anfragen
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-primary hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Menü öffnen"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-primary transition-transform duration-500 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-8">
            <img
              src="/logo-light.png"
              alt="Gössel Elektrotechnik Logo"
              width={3543}
              height={832}
              className="h-12 w-auto"
              decoding="sync"
              loading="eager"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Menü schließen"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col gap-6 flex-1">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-3xl font-bold text-white hover:text-accent transition-colors text-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="space-y-4">
            <button
              onClick={() => scrollToSection('#termin')}
              className="w-full btn-primary text-lg"
            >
              Termin anfragen
            </button>
            <a
              href="tel:+492375205268"
              className="flex items-center justify-center gap-2 w-full py-4 text-white/80 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              02375 205268
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar