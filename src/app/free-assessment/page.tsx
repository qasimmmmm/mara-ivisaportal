'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  ChevronRight, ChevronLeft, Check, ShieldCheck, ScrollText, Headphones,
  AlertTriangle, ExternalLink, Info, Lock,
} from 'lucide-react'
import { clsx } from 'clsx'
import content from '@/data/CONTENT.json'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  nationality: string
  location: string
  visaInterest: string
  timeframe: string
  situation: string
}

const initialFormData: FormData = {
  firstName: '', lastName: '', email: '', phone: '',
  nationality: '', location: '', visaInterest: '', timeframe: '', situation: '',
}

const steps = content.assessment.steps

export default function FreeAssessmentPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [acknowledgement, setAcknowledgement] = useState(false)
  const [acknowledgementError, setAcknowledgementError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validateStep = (step: number): boolean => {
    const e: Partial<FormData> = {}
    if (step === 1) {
      if (!formData.firstName.trim()) e.firstName = 'Required'
      if (!formData.lastName.trim()) e.lastName = 'Required'
      if (!formData.email.trim()) e.email = 'Required'
      else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Invalid email'
    }
    if (step === 2) {
      if (!formData.nationality.trim()) e.nationality = 'Required'
      if (!formData.location) e.location = 'Required'
    }
    if (step === 3) {
      if (!formData.visaInterest) e.visaInterest = 'Required'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((p) => Math.min(p + 1, 4))
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  const handleBack = () => {
    setCurrentStep((p) => Math.max(p - 1, 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(currentStep)) return
    if (!acknowledgement) {
      setAcknowledgementError('Please confirm you understand this is a request for an assessment.')
      return
    }
    setAcknowledgementError('')
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'assessment' }),
      })
      if (res.ok) router.push('/thank-you')
      else alert('Something went wrong. Please try again or email us directly.')
    } catch {
      alert('Something went wrong. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-sand-50 py-8 md:py-12 topo">
      <div className="container-custom">
        {/* Disclosure */}
        <div className="max-w-3xl mx-auto mb-6">
          <div className="bg-ochre-50 border-2 border-ochre-300 rounded-2xl p-4 md:p-5">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-ochre-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-ink/80">
                <p className="font-bold mb-1 text-ink">This is a request for an assessment — not a visa application</p>
                <p className="leading-relaxed">
                  {content.assessment.intro} {content.disclaimer.notGovernment}{' '}
                  <a href={content.official.deptUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline font-semibold hover:text-ochre-700">
                    Official {content.official.agency} <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-8 md:mb-12">
          <span className="eyebrow mb-3">No obligation · Free</span>
          <h1 className="section-title mt-3 mb-3">{content.assessment.title}</h1>
          <p className="text-ink/65 max-w-2xl mx-auto text-lg">
            A registered migration agent will review your details and give you an honest view of your
            options. Takes about three minutes.
          </p>
        </div>

        {/* Progress */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            {steps.map((label, idx) => {
              const id = idx + 1
              return (
                <div key={label} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center">
                    <div className={clsx(
                      'w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300',
                      currentStep > id ? 'bg-ocean-600 text-white' :
                      currentStep === id ? 'bg-ocean-700 text-white ring-4 ring-ocean-100' : 'bg-sand-200 text-ink/40'
                    )}>
                      {currentStep > id ? <Check className="w-5 h-5" /> : id}
                    </div>
                    <span className={clsx('text-xs mt-2 hidden sm:block font-medium', currentStep >= id ? 'text-ink' : 'text-ink/40')}>{label}</span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className={clsx('flex-1 h-1 mx-2 sm:mx-3 rounded-full transition-colors duration-300', currentStep > id ? 'bg-ocean-600' : 'bg-sand-200')} />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-card p-6 md:p-8">
              {/* Step 1 — About you */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-ink mb-6">About you</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-ink/80 mb-2">First Name *</label>
                      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter first name" className={clsx(errors.firstName && '!border-red-500')} />
                      {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink/80 mb-2">Last Name *</label>
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter last name" className={clsx(errors.lastName && '!border-red-500')} />
                      {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink/80 mb-2">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" className={clsx(errors.email && '!border-red-500')} />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink/80 mb-2">Phone / WhatsApp (Optional)</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
              )}

              {/* Step 2 — Your situation */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-ink mb-6">Your situation</h2>
                  <div>
                    <label className="block text-sm font-medium text-ink/80 mb-2">Country of citizenship *</label>
                    <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} placeholder="e.g. India, United Kingdom, Philippines" className={clsx(errors.nationality && '!border-red-500')} />
                    {errors.nationality && <p className="mt-1 text-sm text-red-500">{errors.nationality}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink/80 mb-2">Where are you now? *</label>
                    <select name="location" value={formData.location} onChange={handleChange} className={clsx(errors.location && '!border-red-500')}>
                      <option value="">Select an option</option>
                      <option value="onshore">I am currently in Australia (onshore)</option>
                      <option value="offshore">I am outside Australia (offshore)</option>
                    </select>
                    {errors.location && <p className="mt-1 text-sm text-red-500">{errors.location}</p>}
                  </div>
                  <div className="bg-ocean-50 border border-ocean-200 rounded-xl p-4 flex gap-3">
                    <Info className="w-5 h-5 text-ocean-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-ocean-900 leading-relaxed">
                      We assist clients both onshore and offshore. Your location and citizenship help us
                      identify which pathways are open to you.
                    </p>
                  </div>
                </div>
              )}

              {/* Step 3 — Your goal */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-ink mb-6">Your goal</h2>
                  <div>
                    <label className="block text-sm font-medium text-ink/80 mb-2">Which best describes what you need? *</label>
                    <select name="visaInterest" value={formData.visaInterest} onChange={handleChange} className={clsx(errors.visaInterest && '!border-red-500')}>
                      <option value="">Select an option</option>
                      {content.assessment.fields.visaInterest.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                    {errors.visaInterest && <p className="mt-1 text-sm text-red-500">{errors.visaInterest}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink/80 mb-2">Ideal timeframe (Optional)</label>
                    <select name="timeframe" value={formData.timeframe} onChange={handleChange}>
                      <option value="">Select an option</option>
                      <option value="asap">As soon as possible</option>
                      <option value="3-6m">In the next 3–6 months</option>
                      <option value="6-12m">In the next 6–12 months</option>
                      <option value="exploring">Just exploring my options</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink/80 mb-2">Tell us briefly about your situation (Optional)</label>
                    <textarea
                      name="situation"
                      value={formData.situation}
                      onChange={handleChange}
                      rows={4}
                      placeholder="e.g. occupation, qualifications, family in Australia, study plans, or a previous refusal."
                      className="w-full px-4 py-3 bg-white border border-sand-200 rounded-xl text-ink placeholder:text-sand-400 focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none transition-all duration-200 resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Step 4 — Review */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-ink mb-6">Review &amp; submit</h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-sand-50 rounded-2xl grid sm:grid-cols-2 gap-3 text-sm">
                      <p><span className="text-ink/50">Name:</span> {formData.firstName} {formData.lastName}</p>
                      <p><span className="text-ink/50">Email:</span> {formData.email}</p>
                      {formData.phone && <p><span className="text-ink/50">Phone:</span> {formData.phone}</p>}
                      <p><span className="text-ink/50">Citizenship:</span> {formData.nationality}</p>
                      <p><span className="text-ink/50">Location:</span> {formData.location === 'onshore' ? 'In Australia' : 'Outside Australia'}</p>
                      <p><span className="text-ink/50">Interest:</span> {formData.visaInterest}</p>
                    </div>

                    {/* Required acknowledgement */}
                    <div className="p-4 bg-ochre-50 rounded-2xl border-2 border-ochre-300">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={acknowledgement}
                          onChange={(e) => { setAcknowledgement(e.target.checked); if (e.target.checked) setAcknowledgementError('') }}
                          className="w-5 h-5 mt-0.5 accent-ochre-500 flex-shrink-0"
                        />
                        <span className="text-sm text-ink/85 leading-relaxed">
                          I understand that {content.site.name} (operated by {content.site.legalEntity}) is a
                          private migration consultancy and is <strong>not the Australian Government</strong> or
                          affiliated with it. {content.assessment.submitNote}
                        </span>
                      </label>
                      {acknowledgementError && <p className="mt-2 ml-8 text-sm text-red-600 font-medium">{acknowledgementError}</p>}
                    </div>
                  </div>
                  <p className="text-sm text-ink/50">
                    See our{' '}
                    <a href="/terms-and-conditions" className="text-ocean-700 underline">Terms</a>,{' '}
                    <a href="/privacy-policy" className="text-ocean-700 underline">Privacy Policy</a> and{' '}
                    <a href="/disclaimer" className="text-ocean-700 underline">Disclaimer</a>.
                  </p>
                </div>
              )}

              {/* Nav */}
              <div className="flex justify-between mt-8 pt-6 border-t border-sand-200">
                {currentStep > 1 ? (
                  <button type="button" onClick={handleBack} className="flex items-center gap-2 px-6 py-3 text-ink/60 hover:text-ink transition-colors font-medium">
                    <ChevronLeft className="w-5 h-5" /> Back
                  </button>
                ) : <div />}
                {currentStep < 4 ? (
                  <button type="button" onClick={handleNext} className="btn-primary">
                    Continue <ChevronRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-50">
                    {isSubmitting ? 'Submitting...' : 'Request my free assessment'}
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-28">
            <div className="bg-white rounded-3xl shadow-card p-6">
              <h3 className="font-semibold text-ink mb-4">What you get</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-xl bg-ocean-50 flex items-center justify-center flex-shrink-0"><ScrollText className="w-5 h-5 text-ocean-700" /></span>
                  <div>
                    <p className="font-medium text-ink">Honest eligibility view</p>
                    <p className="text-sm text-ink/50">A realistic read on your options — no false promises.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-xl bg-ocean-50 flex items-center justify-center flex-shrink-0"><ShieldCheck className="w-5 h-5 text-ocean-700" /></span>
                  <div>
                    <p className="font-medium text-ink">A registered agent</p>
                    <p className="text-sm text-ink/50">Reviewed by a registered migration agent, not a bot.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-xl bg-ocean-50 flex items-center justify-center flex-shrink-0"><Headphones className="w-5 h-5 text-ocean-700" /></span>
                  <div>
                    <p className="font-medium text-ink">No pressure</p>
                    <p className="text-sm text-ink/50">A fixed-fee quote only if you choose to proceed.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration disclosure */}
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <h3 className="font-semibold text-ink">Verify our registration</h3>
              </div>
              <p className="text-sm text-ink/75 leading-relaxed mb-3">
                Immigration assistance is provided by <strong>{content.agent.name}</strong>, a registered
                migration agent ({content.agent.marnNote} (MARN): <strong>{content.agent.marn}</strong>).
              </p>
              <a href={content.official.maraAgentUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-ocean-700 underline hover:text-ocean-800">
                {content.official.maraAgentLabel} <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-ocean-700 text-white rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-4 h-4 text-emerald-300" />
                <h3 className="font-semibold">Prefer to reach us directly?</h3>
              </div>
              <p className="text-sm text-white/70 mb-3">Our team is happy to help by email or phone.</p>
              <a href={`mailto:${content.contact.email}`} className="block text-emerald-200 font-medium hover:underline break-all">{content.contact.email}</a>
              <a href={`tel:${content.contact.phoneHref}`} className="block text-emerald-200 font-medium hover:underline mt-1">{content.contact.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
