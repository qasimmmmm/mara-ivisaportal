'use client'

import { useState } from 'react'
import content from '@/data/CONTENT.json'
import { AlertTriangle, ExternalLink, Mail, MapPin, Clock, Send, Phone } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill out all required fields.')
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'contact' }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('There was a problem sending your message. Please email us directly.')
      }
    } catch {
      setError('There was a problem sending your message. Please email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-sand-50 py-12 md:py-16 topo">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="eyebrow mb-3">Contact</span>
            <h1 className="section-title mt-3 mb-3">{content.contactPage.title}</h1>
            <p className="text-ink/60 max-w-2xl mx-auto text-lg">{content.contactPage.intro}</p>
          </div>

          {/* Government routing notice */}
          <div className="bg-ochre-50 border-2 border-ochre-300 rounded-2xl p-4 md:p-5 mb-8">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-ochre-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-ink/80 leading-relaxed">
                <p className="font-bold mb-1 text-ink">For official Australian Government inquiries</p>
                <p>
                  {content.contactPage.officialNote}{' '}
                  <a
                    href={content.official.deptUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 underline font-semibold hover:text-ochre-700"
                  >
                    {content.official.deptLabel} <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-card p-6 md:p-8">
                <h2 className="text-xl font-bold text-ink mb-6">Send us a message</h2>

                {submitted ? (
                  <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-6 text-center">
                    <p className="font-semibold text-ocean-900 mb-2">Thank you for reaching out.</p>
                    <p className="text-sm text-ocean-800">
                      We have received your message and will respond within 24 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-ink/80 mb-2">
                        {content.contactPage.fields.name} *
                      </label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink/80 mb-2">
                        {content.contactPage.fields.email} *
                      </label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink/80 mb-2">
                        {content.contactPage.fields.subject}
                      </label>
                      <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="What is your message about?" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink/80 mb-2">
                        {content.contactPage.fields.message} *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 bg-white border border-sand-200 rounded-xl text-ink placeholder:text-sand-400 focus:ring-2 focus:ring-ocean-400 focus:border-ocean-400 outline-none transition-all duration-200 resize-none"
                        required
                      />
                    </div>
                    {error && <p className="text-sm text-red-600">{error}</p>}
                    <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-50">
                      {submitting ? 'Sending...' : (
                        <>
                          {content.contactPage.fields.submit} <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Direct contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-3xl shadow-card p-6">
                <h3 className="font-semibold text-ink mb-5">{content.contactPage.directContact.heading}</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-ocean-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase text-ink/50 font-semibold tracking-wider mb-1">
                        {content.contactPage.directContact.emailLabel}
                      </p>
                      <a href={`mailto:${content.contact.email}`} className="text-ocean-700 hover:underline break-all">
                        {content.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-ocean-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase text-ink/50 font-semibold tracking-wider mb-1">
                        Phone
                      </p>
                      <a href={`tel:${content.contact.phoneHref}`} className="text-ocean-700 hover:underline">
                        {content.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-ocean-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase text-ink/50 font-semibold tracking-wider mb-1">
                        {content.contactPage.directContact.addressLabel}
                      </p>
                      <p className="text-ink/75 text-sm leading-relaxed">
                        {content.site.legalEntity}<br />
                        {content.contact.address.line1}<br />
                        {content.contact.address.line2}<br />
                        {content.contact.address.city}, {content.contact.address.state} {content.contact.address.zip}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-ocean-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase text-ink/50 font-semibold tracking-wider mb-1">
                        {content.contactPage.directContact.hoursLabel}
                      </p>
                      <p className="text-ink/75 text-sm">{content.contact.supportHours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-ocean-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase text-ink/50 font-semibold tracking-wider mb-1">
                        {content.contactPage.directContact.responseLabel}
                      </p>
                      <p className="text-ink/75 text-sm">{content.contact.responseTime}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-ocean-50 border border-ocean-200 rounded-3xl p-6">
                <h3 className="font-semibold text-ink mb-2">Operating entity</h3>
                <p className="text-sm text-ink/75 leading-relaxed">
                  iVisaPortal is a brand of <strong>{content.site.legalEntity}</strong>, a private limited liability company registered in the United States. We are not a government agency and we are not authorised to act on behalf of any government.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
