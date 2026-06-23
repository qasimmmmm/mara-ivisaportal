import Link from 'next/link'
import type { Metadata } from 'next'
import { Check, ArrowRight, AlertTriangle, ExternalLink } from 'lucide-react'
import content from '@/data/CONTENT.json'

export const metadata: Metadata = {
  title: `${content.servicesPage.title} - ${content.site.name}`,
  description:
    'Professional immigration assistance across Australian visa pathways — skilled, partner and family, student, employer-sponsored, visitor, business visas, and visa refusals and appeals.',
}

export default function ServicesPage() {
  const { servicesPage, official, agent } = content
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-sand-50 to-white">
        <div className="container-custom pt-14 md:pt-20 pb-10 md:pb-14">
          <div className="max-w-3xl">
            <span className="eyebrow mb-3">Visa services</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-ink leading-[1.07] tracking-tight mt-3 mb-5">
              {servicesPage.title}
            </h1>
            <p className="text-lg text-ink/65 leading-relaxed">{servicesPage.intro}</p>
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <section className="bg-white">
        <div className="container-custom">
          <div className="max-w-4xl bg-ochre-50 border-2 border-ochre-300 rounded-2xl p-5 md:p-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-ochre-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-ink/80 leading-relaxed">
                <p className="font-bold mb-1 text-ink">Independent, regulated assistance</p>
                <p>
                  {content.disclaimer.shortBanner} Immigration assistance is provided by a registered
                  migration agent ({agent.marnNote} (MARN): {agent.marn}). {content.disclaimer.noGuarantee}{' '}
                  <a href={official.maraRegisterUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline font-semibold hover:text-ochre-700">
                    Verify on the MARA register <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white">
        <div className="container-custom py-14 md:py-20 space-y-6">
          {servicesPage.categories.map((c, i) => (
            <div
              key={c.id}
              id={c.id}
              className="scroll-mt-28 grid lg:grid-cols-3 gap-6 lg:gap-10 bg-sand-50 border border-sand-200 rounded-3xl p-6 md:p-8"
            >
              <div className="lg:col-span-1">
                <span className="text-xs font-bold text-ocean-600">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="text-2xl font-bold text-ink mt-1 mb-3">{c.name}</h2>
                <p className="text-ink/65 leading-relaxed text-sm">{c.body}</p>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl border border-sand-200 p-5 md:p-6 h-full">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink/40 mb-4">
                    How we can help
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                    {c.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fees note */}
      <section className="bg-sand-50">
        <div className="container-custom py-12 md:py-14">
          <div className="max-w-4xl mx-auto bg-white border border-ocean-200 rounded-2xl p-6 md:p-8 shadow-card">
            <h2 className="text-xl font-bold text-ink mb-3">How our fees work</h2>
            <p className="text-ink/70 leading-relaxed mb-3">{content.disclaimer.feeNote}</p>
            <p className="text-ink/70 leading-relaxed text-sm">
              Before any work begins, we provide a written services agreement, the Department&apos;s
              Consumer Guide, and a fixed-fee quote for your specific matter — so you always know exactly
              what you are paying for.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <a href={official.consumerGuideUrl} target="_blank" rel="noopener noreferrer" className="text-ocean-700 font-semibold underline inline-flex items-center gap-1">
                Consumer Guide <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a href={official.codeOfConductUrl} target="_blank" rel="noopener noreferrer" className="text-ocean-700 font-semibold underline inline-flex items-center gap-1">
                Code of Conduct <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-ocean-700 to-ocean-900 text-white">
        <div className="container-custom py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Ready to find your pathway?</h2>
          <p className="text-lg text-white/75 mb-8 max-w-xl mx-auto">
            Start with a free, no-obligation assessment from a registered migration agent.
          </p>
          <Link href="/free-assessment" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-ocean-800 bg-white rounded-xl hover:bg-sand-50 transition-colors">
            Get your free assessment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
