import PolicyPage from '@/components/PolicyPage'
import content from '@/data/CONTENT.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${content.policies.privacyPolicy.title} - ${content.site.name}`,
  description: content.policies.privacyPolicy.metaDescription,
}

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      title={content.policies.privacyPolicy.title}
      content={content.policies.privacyPolicy.content}
      lastUpdated="June 2026"
    />
  )
}
