import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: 'Was kostet ein Elektriker?',
      answer:
        'Die Kosten hängen vom jeweiligen Auftrag ab. Faktoren wie Umfang der Arbeiten, benötigtes Material und Anfahrt spielen eine Rolle. Für eine erste Einschätzung rufen Sie mich einfach an – die Beratung ist kostenlos und unverbindlich.',
    },
    {
      question: 'Wie schnell können Sie kommen?',
      answer:
        'In den meisten Fällen kann ich innerhalb von 2-3 Werktagen einen Termin anbieten. Bei Notfällen wie Stromausfällen bin ich natürlich schnellstmöglich – oft noch am selben Tag – bei Ihnen.',
    },
    {
      question: 'Machen Sie auch kleine Aufträge?',
      answer:
        'Selbstverständlich! Ob eine einzelne Steckdose, ein defekter Schalter oder eine komplette Renovierung – kein Auftrag ist zu klein. Gerade die persönliche Betreuung bei jedem Anliegen macht meinen Service aus.',
    },
    {
      question: 'Arbeiten Sie auch am Wochenende?',
      answer:
        'Nach Absprache ist auch ein Termin am Samstag möglich. Für echte Notfälle bin ich selbstverständlich 24/7 erreichbar. Rufen Sie einfach an, und wir finden gemeinsam eine Lösung.',
    },
    {
      question: 'Bieten Sie auch Smart Home Beratung an?',
      answer:
        'Ja, ich berate Sie gerne zu allen Möglichkeiten der intelligenten Haussteuerung – von einfachen Lösungen wie smarten Steckdosen bis hin zu umfassenden Systemen für Licht, Heizung und Sicherheit.',
    },
  ]

  return (
    <section id="kontakt" className="py-12 md:py-20 lg:py-28 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary mb-3 md:mb-6 reveal">
              Häufige <span className="text-accent">Fragen</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-text-body reveal" style={{ transitionDelay: '0.1s' }}>
              Hier finden Sie Antworten auf die wichtigsten Fragen.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-2 md:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg md:rounded-xl overflow-hidden reveal"
                style={{ transitionDelay: `${(index + 2) * 0.1}s` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 md:p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-sm md:text-base text-primary pr-3 md:pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-4 pb-4 md:px-6 md:pb-6 text-sm md:text-base text-text-body leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="mt-8 md:mt-12 text-center reveal" style={{ transitionDelay: '0.7s' }}>
            <p className="text-sm md:text-base text-text-body mb-3 md:mb-4">
              Haben Sie eine andere Frage? Rufen Sie mich einfach an!
            </p>
            <a
              href="tel:+492375205268"
              className="inline-flex items-center gap-2 text-lg md:text-xl font-bold text-accent hover:text-accent-hover transition-colors"
            >
              02375 205268
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ