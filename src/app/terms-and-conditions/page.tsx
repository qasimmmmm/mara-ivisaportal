import PolicyPage from '@/components/PolicyPage'
import content from '@/data/CONTENT.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${content.policies.termsAndConditions.title} - ${content.site.name}`,
  description: content.policies.termsAndConditions.metaDescription,
}

export default function TermsAndConditionsPage() {
  return (
    <PolicyPage
      title={content.policies.termsAndConditions.title}
      content={content.policies.termsAndConditions.content}
      lastUpdated="June 2026"
    />
  )
}
