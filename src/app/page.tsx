import Link from 'next/link'
import {
  ShieldCheck, ScrollText, GraduationCap, Briefcase, Plane, Scale, BadgeCheck,
  Users, ArrowRight, Check, ExternalLink, Info, Award, BookOpen, Lock, ShieldCheck as Shield,
} from 'lucide-react'
import AustraliaMap from '@/components/AustraliaMap'
import FAQAccordion from '@/components/FAQAccordion'
import content from '@/data/CONTENT.json'

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  skilled: BadgeCheck,
  'partner-family': Users,
  student: GraduationCap,
  work: Briefcase,
  visitor: Plane,
  appeals: Scale,
  citizenship: Award,
}

const whyIcons = [ShieldCheck, ScrollText, BookOpen, Lock]
const commitmentIcons = [ShieldCheck, ScrollText, Lock, Info, BadgeCheck, Scale]

export default function HomePage() {
  const { home, official, agent, site } = content

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sand-50 via-white to-white">
        <div className="container-custom pt-12 md:pt-20 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in">
              {/* MARA verified pill with direct verification link */}
              <a
                href={official.maraAgentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-ocean-200 rounded-full pl-2 pr-3.5 py-1.5 shadow-sm hover:border-ocean-300 hover:shadow-card transition-all mb-6 group"
              >
                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-[11px] font-bold px-2 py-0.5 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" /> MARA REGISTERED
                </span>
                <span className="text-[13px] font-medium text-ink/70 group-hover:text-ink">
                  Agent MARN {agent.marn} · verify
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-ink/40 group-hover:text-ocean-600" aria-hidden="true" />
              </a>

              <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-ink leading-[1.05] tracking-tight mb-5 text-balance">
                {home.hero.title}
              </h1>
              <p className="text-lg text-ink/65 leading-relaxed mb-8 max-w-xl">
                {home.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <Link href={home.hero.primaryCta.href} className="btn-primary text-base">
                  {home.hero.primaryCta.label} <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href={home.hero.secondaryCta.href} className="btn-secondary text-base">
                  {home.hero.secondaryCta.label}
                </Link>
              </div>
              {/* Conversion microcopy */}
              <p className="text-sm text-ink/50 mb-8 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                Free &amp; no-obligation · Honest eligibility view · We typically reply within 24 hours
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {home.hero.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-ink/70 font-medium">
                    <Check className="w-4 h-4 text-emerald-600" aria-hidden="true" /> {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hero visual */}
            <div className="relative animate-scale-in">
              <div className="relative rounded-[2rem] bg-gradient-to-br from-ocean-700 to-ocean-900 p-6 md:p-8 shadow-float overflow-hidden">
                <AustraliaMap className="w-full h-auto opacity-95" />
                {/* Floating registered-agent card */}
                <div className="absolute left-4 right-4 bottom-4 md:left-6 md:right-6 md:bottom-6 bg-white/95 backdrop-blur rounded-2xl p-4 md:p-5 shadow-card">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ocean-700">
                      {home.hero.card.title}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {home.hero.card.status}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {home.hero.card.lines.map((l) => (
                      <div key={l.label} className="flex items-center justify-between text-sm">
                        <span className="text-ink/50">{l.label}</span>
                        <span className="font-semibold text-ink">{l.value}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={official.maraAgentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 pt-3 border-t border-sand-200 flex items-center justify-between text-[12px] text-ocean-700 font-semibold hover:text-ocean-800"
                  >
                    Verify on the MARA register <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-sand-200 bg-white">
        <div className="container-custom py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink/60">
            {home.trustStrip.map((t) => (
              <span key={t} className="inline-flex items-center gap-2 font-medium">
                <Check className="w-4 h-4 text-ocean-600" aria-hidden="true" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow mb-3">{home.servicesIntro.eyebrow}</span>
            <h2 className="section-title mt-3 mb-4">{home.servicesIntro.title}</h2>
            <p className="text-lg text-ink/60">{home.servicesIntro.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {home.services.map((s) => {
              const Icon = serviceIcons[s.id] ?? BadgeCheck
              return (
                <Link
                  key={s.id}
                  href="/services"
                  className="card group hover:-translate-y-1 hover:border-ocean-200 block"
                >
                  <span className="inline-flex w-12 h-12 rounded-xl bg-ocean-50 items-center justify-center mb-4 group-hover:bg-ocean-600 transition-colors">
                    <Icon className="w-6 h-6 text-ocean-700 group-hover:text-white transition-colors" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold text-ink mb-2">{s.name}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed mb-4">{s.summary}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {s.examples.map((ex) => (
                      <span key={ex} className="text-[11px] font-medium text-ocean-700 bg-ocean-50 px-2 py-1 rounded-md">
                        {ex}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ocean-700 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </Link>
              )
            })}
          </div>
          <div className="mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 text-ocean-700 font-semibold hover:text-ocean-800">
              See full visa services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* VERIFICATION — direct OMARA link, the key trust section */}
      <section className="bg-ink text-white">
        <div className="container-custom py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-emerald-400 uppercase mb-4">
                <ShieldCheck className="w-4 h-4" aria-hidden="true" /> {home.verify.eyebrow}
              </span>
              <h2 className="text-3xl md:text-[2.4rem] font-extrabold tracking-tight leading-[1.1] mb-4">
                {home.verify.title}
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">{home.verify.subtitle}</p>
              <a
                href={official.maraAgentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-ink bg-white rounded-xl hover:bg-sand-50 transition-colors"
              >
                {home.verify.buttonLabel} <ExternalLink className="w-4.5 h-4.5" aria-hidden="true" />
              </a>
              <p className="text-xs text-white/45 mt-3">{home.verify.note}</p>
            </div>
            {/* Credential panel */}
            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-white/50">Registration record</span>
                <span className="inline-flex items-center gap-1.5 bg-emerald-500/15 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {agent.status}
                </span>
              </div>
              <dl className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <dt className="text-white/50 text-sm">Registered migration agent</dt>
                  <dd className="font-semibold text-white">{agent.name}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <dt className="text-white/50 text-sm">MARN</dt>
                  <dd className="font-semibold text-white">{agent.marn}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <dt className="text-white/50 text-sm">Registered since</dt>
                  <dd className="font-semibold text-white">{agent.registeredSince}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-white/50 text-sm">Regulator</dt>
                  <dd className="font-semibold text-white">{agent.regulatorShort}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* WHY REGISTERED */}
      <section className="bg-sand-50">
        <div className="container-custom py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow mb-3">{home.whyRegistered.eyebrow}</span>
              <h2 className="section-title mt-3 mb-4">{home.whyRegistered.title}</h2>
              <p className="text-lg text-ink/60 mb-6">{home.whyRegistered.subtitle}</p>
              <div className="bg-white border border-sand-200 rounded-2xl p-5 shadow-card">
                <p className="text-sm text-ink/70 leading-relaxed">
                  You can verify any registered migration agent on the official public register before
                  you engage them — including us.
                </p>
                <a href={official.maraAgentUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-ocean-700 font-semibold text-sm underline">
                  {official.maraAgentLabel} <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
            <div className="space-y-5">
              {home.whyRegistered.points.map((p, i) => {
                const Icon = whyIcons[i % whyIcons.length]
                return (
                  <div key={p.title} className="flex gap-4 bg-white border border-sand-200 rounded-2xl p-5 md:p-6 shadow-card">
                    <span className="inline-flex w-11 h-11 rounded-xl bg-emerald-50 items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-emerald-700" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-bold text-ink mb-1">{p.title}</h3>
                      <p className="text-sm text-ink/60 leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow mb-3">{home.process.eyebrow}</span>
            <h2 className="section-title mt-3">{home.process.title}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {home.process.steps.map((s, i) => (
              <div key={s.number} className="relative bg-sand-50 rounded-2xl p-6 border border-sand-200">
                <span className="text-4xl font-extrabold text-ocean-200">{s.number}</span>
                <h3 className="font-bold text-ink mt-2 mb-2">{s.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{s.body}</p>
                {i < home.process.steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-7 -right-3 w-5 h-5 text-sand-300" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/free-assessment" className="btn-primary">
              Start with a free assessment <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-ocean-700 text-white">
        <div className="container-custom py-14 md:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {home.stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-none bg-gradient-to-br from-white to-ocean-200 bg-clip-text text-transparent">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENTS — replaces testimonials, truthful Code-of-Conduct based */}
      <section className="bg-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow mb-3">{home.commitments.eyebrow}</span>
            <h2 className="section-title mt-3 mb-4">{home.commitments.title}</h2>
            <p className="text-lg text-ink/60">{home.commitments.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {home.commitments.items.map((c, i) => {
              const Icon = commitmentIcons[i % commitmentIcons.length]
              return (
                <div key={c.title} className="bg-sand-50 border border-sand-200 rounded-2xl p-6">
                  <span className="inline-flex w-10 h-10 rounded-lg bg-white border border-sand-200 items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-ocean-700" aria-hidden="true" />
                  </span>
                  <h3 className="font-bold text-ink mb-1.5">{c.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{c.body}</p>
                </div>
              )
            })}
          </div>
          <p className="mt-6 text-xs text-ink/45 max-w-2xl">
            {home.commitments.footnote}{' '}
            <a href={official.codeOfConductUrl} target="_blank" rel="noopener noreferrer" className="text-ocean-700 underline">
              Read the Code of Conduct
            </a>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand-50">
        <div className="container-custom py-16 md:py-24">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <span className="eyebrow mb-3">FAQ</span>
              <h2 className="section-title mt-3 mb-4">Questions, answered honestly</h2>
              <p className="text-ink/60">
                Still unsure about something? <Link href="/contact" className="text-ocean-700 font-semibold underline">Contact us</Link> and we&apos;ll help.
              </p>
            </div>
            <div className="lg:col-span-2">
              <FAQAccordion items={home.faq} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-gradient-to-br from-ocean-700 to-ocean-900 text-white">
        <div className="container-custom py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 max-w-2xl mx-auto text-balance">
            {home.ctaBand.title}
          </h2>
          <p className="text-lg text-white/75 mb-8 max-w-2xl mx-auto">{home.ctaBand.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={home.ctaBand.primaryCta.href} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-ocean-800 bg-white rounded-xl hover:bg-sand-50 transition-colors">
              {home.ctaBand.primaryCta.label} <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href={home.ctaBand.secondaryCta.href} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white border border-white/30 rounded-xl hover:bg-white/10 transition-colors">
              {home.ctaBand.secondaryCta.label}
            </Link>
          </div>
          <p className="text-sm text-white/55 mt-5">Free · No obligation · Your information is kept confidential</p>
        </div>
      </section>
    </>
  )
}
