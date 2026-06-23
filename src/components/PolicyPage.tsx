import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'
import content from '@/data/CONTENT.json'

interface PolicySection {
  heading: string
  body: string
}

interface PolicyPageProps {
  title: string
  content: PolicySection[]
  lastUpdated?: string
}

export default function PolicyPage({ title, content: sections, lastUpdated }: PolicyPageProps) {
  return (
    <div className="min-h-screen bg-sand-50 py-12 md:py-16 topo">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-card p-6 md:p-10">
            <h1 className="text-3xl md:text-[2.4rem] font-extrabold text-ink mb-2 tracking-tight">{title}</h1>
            {lastUpdated && <p className="text-sm text-ink/50 mb-8">Last updated: {lastUpdated}</p>}

            {/* Standing not-a-government disclosure on every policy page */}
            <div className="bg-ochre-50 border border-ochre-300 rounded-xl p-4 mb-8 flex gap-3">
              <AlertTriangle className="w-5 h-5 text-ochre-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-ink/75 leading-relaxed">
                {content.disclaimer.notGovernment} Immigration assistance is provided by a registered
                migration agent ({content.agent.marnNote} (MARN): {content.agent.marn}).
              </p>
            </div>

            <div className="max-w-none space-y-6">
              {sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-lg md:text-xl font-bold text-ink mb-2">{section.heading}</h2>
                  <p className="text-ink/75 leading-relaxed">{section.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-sand-200 text-sm text-ink/50">
              Questions about this policy? <Link href="/contact" className="text-ocean-700 underline">Contact us</Link>.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
