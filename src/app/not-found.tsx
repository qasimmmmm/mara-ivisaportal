'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import content from '@/data/CONTENT.json'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-sand-50 topo">
      <div className="container-custom text-center">
        <h1 className="text-8xl font-extrabold text-ocean-700 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-4">
          Page not found
        </h2>
        <p className="text-ink/60 mb-8 max-w-md mx-auto">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <Home className="w-5 h-5" /> Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary"
          >
            <ArrowLeft className="w-5 h-5" /> Go Back
          </button>
        </div>

        <div className="mt-12 max-w-lg mx-auto text-xs text-ink/50 leading-relaxed">
          <p>
            iVisaPortal is a private third-party service operated by {content.site.legalEntity}. We are not affiliated with the Australian Government.{' '}
            <Link href="/disclaimer" className="text-ocean-700 hover:underline">View full disclaimer</Link>
            {' · '}
            <a
              href={content.official.deptUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ocean-700 hover:underline"
            >
              Official Department of Home Affairs
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
