import PolicyPage from '@/components/PolicyPage'
import content from '@/data/CONTENT.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${content.policies.refundPolicy.title} - ${content.site.name}`,
  description: content.policies.refundPolicy.metaDescription,
}

export default function RefundPolicyPage() {
  return (
    <PolicyPage
      title={content.policies.refundPolicy.title}
      content={content.policies.refundPolicy.content}
      lastUpdated="June 2026"
    />
  )
}
