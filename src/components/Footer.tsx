import { Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    'Elektroinstallation',
    'Smart Home',
    'Photovoltaik',
    'Notdienst',
  ]

  const legal = [
    { label: 'Impressum', href: '#impressum' },
    { label: 'Datenschutz', href: '#datenschutz' },
  ]

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-10 md:py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center mb-4 md:mb-6">
              <img
                src="/logo.png"
                alt="Gössel Elektrotechnik Logo"
                className="h-10 md:h-12"
              />
            </div>
            <p className="text-sm md:text-base text-white/70 leading-relaxed mb-4 md:mb-6 max-w-md">
              Ihr Elektromeister in Balve und Umgebung. Persönlich, zuverlässig
              und immer für Sie da – seit über 15 Jahren.
            </p>
            <div className="space-y-2 md:space-y-3">
              <a
                href="https://maps.google.com/?q=Ringstraße+2b,+58802+Balve"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-white/70 hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                <span>Ringstraße 2b, 58802 Balve</span>
              </a>
              <a
                href="tel:+492375205268"
                className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                <span>02375 205268</span>
              </a>
              <a
                href="mailto:info@goessel-elektrotechnik.de"
                className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                <span>info@goessel-elektrotechnik.de</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm md:text-lg mb-3 md:mb-6">Leistungen</h3>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#leistungen"
                    className="text-xs md:text-base text-white/70 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-sm md:text-lg mb-3 md:mb-6">Rechtliches</h3>
            <ul className="space-y-2 md:space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-xs md:text-base text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-4 md:py-6">
          <div className="flex items-center justify-center text-xs md:text-sm text-white/50">
            <p>© {currentYear} Gössel Elektrotechnik. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer