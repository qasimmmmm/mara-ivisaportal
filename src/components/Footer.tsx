import Link from 'next/link'
import Image from 'next/image'
import { AlertTriangle, ExternalLink } from 'lucide-react'
import content from '@/data/CONTENT.json'

const policyLinks = [
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Legal Notice', href: '/legal-notice' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Accessibility', href: '/accessibility' },
]

export default function Footer() {
  const { site, contact, navigation, disclaimer, official, agent } = content

  return (
    <footer className="bg-ink text-sand-100/80">
      {/* Prominent compliance disclaimer block */}
      <div className="bg-amber-50 border-y-2 border-amber-400 text-amber-900">
        <div className="container-custom py-6 md:py-7">
          <div className="flex items-start gap-3 md:gap-4">
            <AlertTriangle className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0 text-amber-600 mt-0.5" aria-hidden="true" />
            <div className="space-y-2 text-sm md:text-[15px] leading-relaxed">
              <p className="font-bold uppercase tracking-wide text-xs md:text-sm">
                Important notice — please read
              </p>
              <p>
                <span className="font-bold">{site.name}</span> (operated by{' '}
                <span className="font-bold">{site.legalEntity}</span>) is a private migration
                consultancy. We are <span className="font-bold underline">NOT</span> the Australian
                Government and are NOT affiliated with, endorsed by, or connected to the{' '}
                {official.agency} or {official.regulator}.
              </p>
              <p>
                Immigration assistance is provided by <span className="font-bold">{agent.name}</span>, a
                registered migration agent.{' '}
                <span className="font-bold">{agent.marnNote} (MARN): {agent.marn}</span>. {disclaimer.noGuarantee}
              </p>
              <p>{disclaimer.feeNote}</p>
              <p className="text-xs md:text-sm pt-1 flex flex-wrap gap-x-4 gap-y-1">
                <Link href="/disclaimer" className="underline font-semibold hover:text-amber-700">
                  Read full disclaimer
                </Link>
                <a href={official.consumerGuideUrl} target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-amber-700 inline-flex items-center gap-1">
                  Consumer Guide <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
                <a href={official.codeOfConductUrl} target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-amber-700 inline-flex items-center gap-1">
                  Code of Conduct <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
                <a href={official.maraAgentUrl} target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-amber-700 inline-flex items-center gap-1">
                  Verify our registration on the MARA register <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.svg"
                alt={`${site.name} logo`}
                width={320}
                height={64}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sand-100/60 text-sm leading-relaxed">
              Professional immigration assistance for Australian visas, provided by a registered
              migration agent.
            </p>
            <p className="text-sand-100/45 text-xs leading-relaxed">
              Agent: {agent.name} · {agent.marnNote} (MARN): {agent.marn}
            </p>
            <a
              href={official.maraAgentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
            >
              <span className="inline-flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Verify on the MARA register</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <p className="text-sand-100/40 text-xs leading-relaxed">
              A private service of {site.legalEntity}. Not a government website.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-[15px] mb-4">Explore</h3>
            <ul className="space-y-2.5">
              {navigation.links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sand-100/60 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={navigation.cta.href} className="text-sand-100/60 hover:text-white transition-colors text-sm">
                  {navigation.cta.label}
                </Link>
              </li>
              <li>
                <a
                  href={official.deptUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sand-100/60 hover:text-white transition-colors text-sm inline-flex items-center gap-1"
                >
                  Official {official.agency} <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-[15px] mb-4">Legal &amp; policies</h3>
            <ul className="space-y-2.5">
              {policyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sand-100/60 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-[15px] mb-4">Contact</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-sand-100/40 font-semibold mb-1 text-xs uppercase tracking-wide">
                  Registered office
                </p>
                <address className="not-italic text-sand-100/60 leading-relaxed">
                  {site.legalEntity}<br />
                  {contact.address.line1}<br />
                  {contact.address.line2}<br />
                  {contact.address.city}, {contact.address.state} {contact.address.zip}<br />
                  {contact.address.country}
                </address>
              </div>
              <div>
                <p className="text-sand-100/40 font-semibold mb-1 text-xs uppercase tracking-wide">Email</p>
                <a href={`mailto:${contact.email}`} className="text-sand-100/60 hover:text-white transition-colors break-all">
                  {contact.email}
                </a>
              </div>
              <div>
                <p className="text-sand-100/40 font-semibold mb-1 text-xs uppercase tracking-wide">Phone</p>
                <a href={`tel:${contact.phoneHref}`} className="text-sand-100/60 hover:text-white transition-colors">
                  {contact.phone}
                </a>
              </div>
              <div>
                <p className="text-sand-100/40 font-semibold mb-1 text-xs uppercase tracking-wide">Support hours</p>
                <p className="text-sand-100/60 text-xs leading-relaxed">{contact.supportHours}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Image src="/images/badge-secure.svg" alt="Secure & confidential" width={170} height={48} className="h-11 w-auto" />
            <Image src="/images/badge-ssl.svg" alt="SSL encrypted" width={170} height={48} className="h-11 w-auto" />
          </div>
          <div className="text-center space-y-2">
            <p className="text-sand-100/50 text-sm">{site.copyright}</p>
            <p className="text-sand-100/35 text-xs leading-relaxed max-w-3xl mx-auto">
              {site.legalEntity} is a company with its registered office in Houston, Texas, United
              States. {site.name} is a brand name used by {site.legalEntity}. Immigration assistance is
              provided by a registered migration agent (MARN: {agent.marn}) regulated by {official.regulator}.
              This website is not affiliated with the Australian Government or any government agency.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
