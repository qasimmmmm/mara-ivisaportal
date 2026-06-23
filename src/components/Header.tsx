'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Globe } from 'lucide-react'
import content from '@/data/CONTENT.json'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-sand-100">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 md:h-[72px]">
          <Link href="/" className="flex items-center gap-2.5" aria-label="iVisaPortal home">
            <Image
              src="/images/logo.svg"
              alt={`${content.site.name} — Australian visa & migration consultancy`}
              width={320}
              height={64}
              className="h-9 md:h-10 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {content.navigation.links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] text-ink/80 font-medium hover:text-ocean-700 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <span className="flex items-center gap-1.5 text-ink/50 text-sm font-medium border-l border-sand-200 pl-5">
              <Globe className="w-4 h-4" aria-hidden="true" /> EN
            </span>
            <Link href={content.navigation.cta.href} className="btn-primary !px-5 !py-2.5 !text-[15px]">
              {content.navigation.cta.label}
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 -mr-2 text-ink/70 hover:text-ink"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-sand-100">
            <div className="flex flex-col gap-1">
              {content.navigation.links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-ink/80 font-medium hover:text-ocean-700 transition-colors py-2.5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={content.navigation.cta.href}
                className="btn-primary mt-3 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                {content.navigation.cta.label}
              </Link>
              <Link
                href="/disclaimer"
                className="text-amber-700 font-medium hover:text-amber-800 transition-colors py-2.5 mt-1 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Disclaimer
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
