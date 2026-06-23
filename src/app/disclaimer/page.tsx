import PolicyPage from '@/components/PolicyPage'
import content from '@/data/CONTENT.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${content.policies.disclaimer.title} - ${content.site.name}`,
  description: content.policies.disclaimer.metaDescription,
}

export default function DisclaimerPage() {
  return (
    <PolicyPage
      title={content.policies.disclaimer.title}
      content={content.policies.disclaimer.content}
      lastUpdated="June 2026"
    />
  )
}
