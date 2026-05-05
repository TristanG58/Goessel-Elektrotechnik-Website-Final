import { useEffect, useState } from 'react'
import { MapPin } from 'lucide-react'

const STORAGE_KEY = 'goessel.maps.consent'

interface MapWithConsentProps {
  src: string
  title: string
  /** Adresse als Fallback im Platzhalter */
  fallbackAddress?: string
}

/**
 * Datenschutz-konforme Google-Maps-Einbindung.
 *
 * Standard: zeigt nur einen Platzhalter mit Adresse — keine Datenübertragung an Google.
 * Erst nach explizitem Klick auf „Karte aktivieren" wird der iframe geladen.
 * Die Einwilligung wird in localStorage gespeichert.
 *
 * Widerruf: clearMapsConsent() oder localStorage.removeItem(STORAGE_KEY)
 */
const MapWithConsent = ({ src, title, fallbackAddress }: MapWithConsentProps) => {
  const [consented, setConsented] = useState(false)

  // Beim ersten Mount: persistierte Einwilligung prüfen
  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY) === 'granted') {
        setConsented(true)
      }
    } catch {
      // localStorage nicht verfügbar (Privacy-Mode etc.) — Standard-Verhalten ist OK
    }
  }, [])

  const handleAccept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, 'granted')
    } catch {
      // ignore
    }
    setConsented(true)
  }

  if (consented) {
    return (
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className="grayscale hover:grayscale-0 transition-all duration-500"
      />
    )
  }

  // Platzhalter — KEINE Daten an Google
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
      {/* dezenter dekorativer Hintergrund (kein externes Asset) */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 40%, rgba(245,158,11,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(30,58,95,0.10) 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 text-center max-w-xs">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-3">
          <MapPin className="w-6 h-6 text-accent" />
        </div>

        {fallbackAddress && (
          <p className="text-sm text-text-body mb-4 whitespace-pre-line">
            {fallbackAddress}
          </p>
        )}

        <p className="text-xs text-text-body/80 mb-4 leading-relaxed">
          Karte wird von Google bereitgestellt. Beim Aktivieren werden Daten
          (u.&nbsp;a. IP-Adresse) an Google übertragen.{' '}
          <a
            href="#datenschutz"
            className="text-accent underline hover:no-underline"
          >
            Datenschutzerklärung
          </a>
        </p>

        <button
          onClick={handleAccept}
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
          aria-label="Google Maps aktivieren"
        >
          Karte aktivieren
        </button>
      </div>
    </div>
  )
}

/** Hilfsfunktion für die Datenschutzerklärung — Einwilligung widerrufen */
export const clearMapsConsent = () => {
  try {
    window.localStorage.removeItem(STORAGE_KEY)
    window.location.reload()
  } catch {
    // ignore
  }
}

export default MapWithConsent
