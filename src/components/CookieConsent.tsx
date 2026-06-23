'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Cookie, X } from 'lucide-react'

const STORAGE_KEY = 'ivp_au_cookie_consent_v1'

type ConsentValue = 'accepted' | 'rejected' | 'customized'

interface ConsentRecord {
  status: ConsentValue
  analytics: boolean
  marketing: boolean
  functional: boolean
  timestamp: string
}

export default function CookieConsent() {
  const [show, setShow] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)
  const [functional, setFunctional] = useState(false)

  useEffect(() => {
    try {
      const cookies = document.cookie.split('; ').reduce<Record<string, string>>((acc, c) => {
        const [k, v] = c.split('=')
        if (k) acc[k] = v ?? ''
        return acc
      }, {})
      if (!cookies[STORAGE_KEY]) setShow(true)
    } catch {
      setShow(true)
    }
  }, [])

  const writeConsent = (record: ConsentRecord) => {
    try {
      const value = encodeURIComponent(JSON.stringify(record))
      const maxAge = 60 * 60 * 24 * 365
      document.cookie = `${STORAGE_KEY}=${value}; Max-Age=${maxAge}; Path=/; SameSite=Lax`
    } catch {
      /* ignore */
    }
  }

  const finish = (record: ConsentRecord) => {
    writeConsent(record)
    setShow(false)
  }

  const acceptAll = () =>
    finish({ status: 'accepted', analytics: true, marketing: true, functional: true, timestamp: new Date().toISOString() })
  const rejectAll = () =>
    finish({ status: 'rejected', analytics: false, marketing: false, functional: false, timestamp: new Date().toISOString() })
  const saveCustom = () =>
    finish({ status: 'customized', analytics, marketing, functional, timestamp: new Date().toISOString() })

  if (!show) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      className="fixed bottom-0 inset-x-0 z-[100] bg-white border-t-2 border-ocean-600 shadow-float"
    >
      <div className="container-custom py-5 md:py-6">
        {!showCustomize ? (
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="flex-1 flex items-start gap-3">
              <Cookie className="w-6 h-6 text-ocean-600 flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h2 id="cookie-consent-title" className="font-semibold text-ink mb-1">
                  We value your privacy
                </h2>
                <p className="text-sm text-ink/70 leading-relaxed">
                  We use cookies to operate our website, analyse how it&apos;s used, and improve our
                  service. Essential cookies are always on. See our{' '}
                  <Link href="/cookie-policy" className="text-ocean-700 underline hover:text-ocean-800">
                    Cookie Policy
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy-policy" className="text-ocean-700 underline hover:text-ocean-800">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 lg:flex-nowrap lg:flex-shrink-0">
              <button onClick={() => setShowCustomize(true)} className="px-4 py-2.5 text-sm font-medium text-ink/80 bg-sand-100 rounded-full hover:bg-sand-200 transition-colors">
                Customise
              </button>
              <button onClick={rejectAll} className="px-4 py-2.5 text-sm font-medium text-ink/80 bg-sand-100 rounded-full hover:bg-sand-200 transition-colors">
                Reject non-essential
              </button>
              <button onClick={acceptAll} className="px-5 py-2.5 text-sm font-semibold text-white bg-ocean-700 rounded-full hover:bg-ocean-800 transition-colors">
                Accept all
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-start justify-between mb-4">
              <h2 className="font-semibold text-ink text-lg">Cookie preferences</h2>
              <button onClick={() => setShowCustomize(false)} aria-label="Close cookie preferences" className="text-ink/40 hover:text-ink/70">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3 mb-5">
              <label className="flex items-start gap-3 p-3 bg-sand-50 rounded-xl cursor-not-allowed opacity-90">
                <input type="checkbox" checked disabled className="mt-1" />
                <div>
                  <p className="font-medium text-ink text-sm">Strictly necessary (always active)</p>
                  <p className="text-xs text-ink/60">Required for the website to function. Cannot be disabled.</p>
                </div>
              </label>
              {[
                { label: 'Analytics', desc: 'Helps us understand how visitors use our site so we can improve it.', val: analytics, set: setAnalytics },
                { label: 'Functional', desc: 'Enables enhanced features and personalisation (e.g. saving your language preference).', val: functional, set: setFunctional },
                { label: 'Marketing', desc: 'Used by advertising partners for conversion tracking and remarketing.', val: marketing, set: setMarketing },
              ].map((row) => (
                <label key={row.label} className="flex items-start gap-3 p-3 bg-sand-50 rounded-xl cursor-pointer hover:bg-sand-100">
                  <input type="checkbox" checked={row.val} onChange={(e) => row.set(e.target.checked)} className="mt-1" />
                  <div>
                    <p className="font-medium text-ink text-sm">{row.label}</p>
                    <p className="text-xs text-ink/60">{row.desc}</p>
                  </div>
                </label>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 justify-end">
              <button onClick={rejectAll} className="px-4 py-2.5 text-sm font-medium text-ink/80 bg-sand-100 rounded-full hover:bg-sand-200">
                Reject non-essential
              </button>
              <button onClick={saveCustom} className="px-5 py-2.5 text-sm font-semibold text-white bg-ocean-700 rounded-full hover:bg-ocean-800">
                Save preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
