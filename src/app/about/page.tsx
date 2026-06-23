import content from '@/data/CONTENT.json'
import type { Metadata } from 'next'
import { AlertTriangle, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: `${content.about.title} - ${content.site.name}`,
  description: content.about.metaDescription,
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-sand-50 py-12 md:py-16 topo">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-card p-6 md:p-10">
            <span className="eyebrow mb-3">About us</span>
            <h1 className="text-3xl md:text-[2.4rem] font-extrabold text-ink mt-3 mb-2 tracking-tight">
              {content.about.title}
            </h1>
            <p className="text-ink/60 mb-8">{content.about.intro}</p>

            {/* Top-of-page disclosure */}
            <div className="bg-ochre-50 border-2 border-ochre-300 rounded-2xl p-4 md:p-5 mb-8">
              <div className="flex gap-3">
                <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-ochre-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-ink/80">
                  <p className="font-bold mb-1 text-ink">Not affiliated with the Australian Government</p>
                  <p className="leading-relaxed">
                    {content.disclaimer.shortBanner} You are free to deal directly with the {content.official.agency} yourself. Immigration assistance is provided by a registered migration agent ({content.agent.marnNote} (MARN): {content.agent.marn}).{' '}
                    <a
                      href={content.official.maraRegisterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 underline font-semibold hover:text-ochre-700"
                    >
                      Verify on the MARA register <ExternalLink className="w-3 h-3" />
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Registered agent credential — verifiable */}
            <div className="bg-gradient-to-br from-ocean-50 to-white border border-ocean-200 rounded-2xl p-5 md:p-6 mb-8">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="eyebrow mb-2">Registered migration agent</p>
                  <p className="text-xl font-bold text-ink">{content.agent.name}</p>
                  <p className="text-sm text-ink/60 mt-0.5">Authorised to provide immigration assistance under the Migration Act 1958</p>
                </div>
                <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {content.agent.status}
                </span>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mt-5 pt-5 border-t border-ocean-100">
                <div>
                  <p className="text-xs uppercase tracking-wide text-ink/45 font-semibold mb-1">MARN</p>
                  <p className="font-semibold text-ink">{content.agent.marn}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-ink/45 font-semibold mb-1">Registered since</p>
                  <p className="font-semibold text-ink">{content.agent.registeredSince}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-ink/45 font-semibold mb-1">Regulator</p>
                  <p className="font-semibold text-ink">{content.agent.regulatorShort}</p>
                </div>
              </div>
              <a
                href={content.official.maraAgentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-ocean-700 hover:text-ocean-800"
              >
                Verify this registration on the official MARA register <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="max-w-none space-y-6">
              {content.about.sections.map((section, idx) => (
                <div key={idx}>
                  <h2 className="text-xl font-bold text-ink mt-6 mb-3 first:mt-0">
                    {section.heading}
                  </h2>
                  <p className="text-ink/75 leading-relaxed whitespace-pre-line">{section.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-sand-200">
              <h3 className="text-lg font-semibold text-ink mb-3">Have a question?</h3>
              <p className="text-ink/60 mb-4">
                Our customer support team is available to answer questions about our optional assistance service.
              </p>
              <a href="/contact" className="btn-primary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
