import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DisclaimerBanner from '@/components/DisclaimerBanner'
import CookieConsent from '@/components/CookieConsent'
import content from '@/data/CONTENT.json'

const SITE_URL = 'https://australia.ivisaportal.com'

export const metadata: Metadata = {
  title: content.seo.defaultTitle,
  description: content.seo.defaultDescription,
  keywords: content.seo.keywords,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: content.seo.defaultTitle,
    description: content.seo.defaultDescription,
    url: SITE_URL,
    siteName: content.site.name,
    locale: 'en_AU',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD — identifies the site as a private professional service (registered
            migration agent), explicitly NOT a government entity. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              '@id': `${SITE_URL}/#organization`,
              name: content.site.name,
              legalName: content.site.legalEntity,
              description:
                'Private Australian visa and migration consultancy providing professional immigration assistance through a registered migration agent. Not affiliated with the Australian Government.',
              url: SITE_URL,
              email: content.contact.email,
              disambiguatingDescription:
                'iVisaPortal (operated by ZA Logistics Inc) is a private migration consultancy. We are NOT a government agency and are NOT affiliated with the Australian Government, the Department of Home Affairs, or the Office of the Migration Agents Registration Authority (OMARA). Immigration assistance is provided by a registered migration agent regulated under the Migration Act 1958.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: `${content.contact.address.line1}, ${content.contact.address.line2}`,
                addressLocality: content.contact.address.city,
                addressRegion: content.contact.address.state,
                postalCode: content.contact.address.zip,
                addressCountry: 'US',
              },
              areaServed: { '@type': 'Country', name: 'Australia' },
              serviceType: 'Australian visa and immigration assistance (registered migration agent)',
              knowsAbout: [
                'Australian skilled visas',
                'Partner and family visas',
                'Student visas',
                'Employer-sponsored visas',
                'Visitor visas',
                'Visa refusals and appeals',
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <DisclaimerBanner />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
