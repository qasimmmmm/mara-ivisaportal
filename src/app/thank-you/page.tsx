import Link from 'next/link'
import { CheckCircle, Mail, Clock, ArrowRight, AlertTriangle, ExternalLink } from 'lucide-react'
import content from '@/data/CONTENT.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Request received - ${content.site.name}`,
  description: 'Your free assessment request has been received.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  const { official, agent } = content
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-ocean-50 to-sand-50 py-16 topo">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-ocean-100 mb-8 animate-scale-in">
            <CheckCircle className="w-12 h-12 text-ocean-600" />
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-ink mb-4 animate-fade-in tracking-tight">
            {content.thankYou.title}
          </h1>
          <p className="text-lg text-ink/65 mb-8 animate-fade-in">{content.thankYou.message}</p>

          <div className="bg-white rounded-3xl shadow-card p-6 md:p-8 mb-8 text-left animate-slide-up">
            <h2 className="text-xl font-semibold text-ink mb-6">What happens next?</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-ocean-100 flex items-center justify-center"><span className="text-ocean-700 font-semibold">1</span></div>
                <div>
                  <h3 className="font-medium text-ink">We review your details</h3>
                  <p className="text-sm text-ink/60">A registered migration agent looks at your situation and the pathways that may fit.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-ocean-100 flex items-center justify-center"><span className="text-ocean-700 font-semibold">2</span></div>
                <div>
                  <h3 className="font-medium text-ink">We contact you</h3>
                  <p className="text-sm text-ink/60">We&apos;ll reach out with an honest assessment and answer your questions — no obligation.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-ocean-100 flex items-center justify-center"><span className="text-ocean-700 font-semibold">3</span></div>
                <div>
                  <h3 className="font-medium text-ink">You decide</h3>
                  <p className="text-sm text-ink/60">If you choose to proceed, we provide a Consumer Guide, a services agreement and a fixed-fee quote before any work begins.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8 animate-fade-in">
            <div className="bg-ocean-50 rounded-2xl p-5 text-left">
              <Mail className="w-6 h-6 text-ocean-700 mb-3" />
              <h3 className="font-medium text-ink mb-1">Check your email</h3>
              <p className="text-sm text-ink/60">We&apos;ll be in touch at the address you provided.</p>
            </div>
            <div className="bg-ochre-50 rounded-2xl p-5 text-left">
              <Clock className="w-6 h-6 text-ochre-600 mb-3" />
              <h3 className="font-medium text-ink mb-1">Typical response</h3>
              <p className="text-sm text-ink/60">Usually within 24 business hours.</p>
            </div>
          </div>

          <Link href={content.thankYou.cta.href} className="inline-flex items-center gap-2 text-ocean-700 font-semibold hover:text-ocean-800 transition-colors">
            {content.thankYou.cta.text} <ArrowRight className="w-5 h-5" />
          </Link>

          <p className="mt-8 text-sm text-ink/50">
            Questions? Email{' '}
            <a href={`mailto:${content.contact.email}`} className="text-ocean-700 hover:underline">{content.contact.email}</a>
          </p>

          {/* Compliance disclosure */}
          <div className="mt-10 bg-ochre-50 border-2 border-ochre-300 rounded-2xl p-5 text-left">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-ochre-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-ink/80 leading-relaxed">
                <p className="font-semibold mb-1 text-ink">A reminder</p>
                <p className="mb-2">
                  {content.site.name} is a private migration consultancy operated by {content.site.legalEntity}.
                  We are <strong>not</strong> the Australian Government or affiliated with the {official.agency}.
                  Immigration assistance is provided by a registered migration agent ({agent.marnNote} (MARN): {agent.marn}).
                  {' '}{content.disclaimer.noGuarantee}
                </p>
                <a href={official.deptUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline font-semibold hover:text-ochre-700">
                  Official {official.agency} <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
