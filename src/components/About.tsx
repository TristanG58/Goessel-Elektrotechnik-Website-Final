import { CheckCircle2 } from 'lucide-react'

const About = () => {
  const highlights = [
    { text: 'Meisterbrief seit 2008' },
    { text: 'Über 500 zufriedene Kunden' },
    { text: 'Balve und Umgebung' },
  ]

  return (
    <section id="ueber-uns" className="py-12 md:py-20 lg:py-28 bg-bg-light">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative reveal">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
              <img
                src="/chef.jpg"
                alt="Falk Gössel - Elektromeister"
                className="w-full h-full object-cover object-top"
              />
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 md:w-32 h-24 md:h-32 bg-accent rounded-2xl -z-10" />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-xl shadow-xl p-4 md:p-6">
              <div className="text-3xl md:text-4xl font-extrabold text-accent mb-1">15+</div>
              <div className="text-xs md:text-sm text-text-body font-medium">Jahre Erfahrung</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="reveal mt-8 lg:mt-0" style={{ transitionDelay: '0.2s' }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary mb-4 md:mb-6">
              Ihr Meisterbetrieb in Balve.{' '}
              <span className="text-accent">Seit über 15 Jahren.</span>
            </h2>

            <div className="space-y-3 md:space-y-4 text-base md:text-lg text-text-body leading-relaxed mb-6 md:mb-8 text-justify">
              <p>
                Gewerbliche und private Kunden im Balver Stadtgebiet und der näheren Umgebung werden von uns bei der Realisierung Ihrer Bauvorhaben unterstützt.
              </p>
              <p>
                Bei uns erhalten Sie alles aus einer Hand! Von der Beratung und Projektierung bis hin zur Installation und Inbetriebnahme legen wir großen Wert auf Qualität und perfekten Kundenservice.
              </p>
              <p className="font-medium text-primary">
                Unser Versprechen: Faire Preise, saubere Arbeit, und ein Elektriker, dem Sie vertrauen können.
              </p>
            </div>

            {/* Highlight Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white border border-gray-100"
                >
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-primary">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About