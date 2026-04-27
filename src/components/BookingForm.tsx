import { useState } from 'react'
import { Send, Phone, Clock, Calendar, CreditCard, CheckCircle } from 'lucide-react'

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    type: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', phone: '', email: '', address: '', type: '', message: '' })
    }, 3000)
  }

  const benefits = [
    { icon: Clock, text: 'Antwort innerhalb 24h' },
    { icon: Calendar, text: 'Flexible Terminauswahl' },
    { icon: CreditCard, text: 'Kostenlose Erstberatung' },
    { icon: CheckCircle, text: 'Unverbindlich' },
  ]

  return (
    <section id="termin" className="py-12 md:py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="booking-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#booking-grid)" />
        </svg>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="text-white reveal">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 md:mb-6">
              Termin buchen –{' '}
              <span className="text-accent">ganz einfach online</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/80 mb-6 md:mb-10 leading-relaxed">
              Kein Anrufbeantworter, kein Warten. Füllen Sie das Formular aus und
              wir melden uns schnellstmöglich bei Ihnen.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-2 md:gap-4 mb-6 md:mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3 text-white/80">
                  <benefit.icon className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                  <span className="text-xs md:text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Phone Alternative */}
            <div className="p-4 md:p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-white/60 text-xs md:text-sm mb-2 md:mb-3">Lieber direkt sprechen?</p>
              <a
                href="tel:+492375205268"
                className="inline-flex items-center gap-2 md:gap-3 text-lg md:text-2xl font-bold text-white hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
                02375 205268
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-white rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl">
              {isSubmitted ? (
                <div className="text-center py-8 md:py-12">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 md:mb-3">
                    Anfrage gesendet!
                  </h3>
                  <p className="text-sm md:text-base text-text-body">
                    Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs md:text-sm font-medium text-primary mb-1 md:mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3.5 rounded-lg bg-white border border-gray-200 text-sm md:text-base text-primary placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs md:text-sm font-medium text-primary mb-1 md:mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3.5 rounded-lg bg-white border border-gray-200 text-sm md:text-base text-primary placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs md:text-sm font-medium text-primary mb-1 md:mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3.5 rounded-lg bg-white border border-gray-200 text-sm md:text-base text-primary placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                      placeholder="ihre@email.de"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-xs md:text-sm font-medium text-primary mb-1 md:mb-2">
                      Anschrift *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3.5 rounded-lg bg-white border border-gray-200 text-sm md:text-base text-primary placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                      placeholder="Straße, Hausnr., PLZ, Ort"
                    />
                  </div>

                  <div>
                    <label htmlFor="type" className="block text-xs md:text-sm font-medium text-primary mb-1 md:mb-2">
                      Art der Anfrage *
                    </label>
                    <select
                      id="type"
                      name="type"
                      required
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3.5 rounded-lg bg-white border border-gray-200 text-sm md:text-base text-primary placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%236b7280%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.293%207.293a1%201%200%20011.414%200L10%2010.586l3.293-3.293a1%201%200%20111.414%201.414l-4%204a1%201%200%2001-1.414%200l-4-4a1%201%200%20010-1.414z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_0.75rem_center] md:bg-[position:right_1rem_center] bg-[size:1rem] md:bg-[size:1.25rem]"
                    >
                      <option value="">Bitte auswählen</option>
                      <option value="installation">Installation / Neuinstallation</option>
                      <option value="reparatur">Reparatur</option>
                      <option value="beratung">Beratung</option>
                      <option value="notfall">Notfall</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs md:text-sm font-medium text-primary mb-1 md:mb-2">
                      Ihre Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3.5 rounded-lg bg-white border border-gray-200 text-sm md:text-base text-primary placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-none"
                      placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full text-sm md:text-lg !py-3 md:!py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 md:w-5 md:h-5" />
                        Termin anfragen
                      </>
                    )}
                  </button>

                  <p className="text-[10px] md:text-xs text-text-body text-center">
                    Mit dem Absenden stimmen Sie unserer{' '}
                    <a href="#datenschutz" className="text-accent hover:underline">
                      Datenschutzerklärung
                    </a>{' '}
                    zu.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingForm