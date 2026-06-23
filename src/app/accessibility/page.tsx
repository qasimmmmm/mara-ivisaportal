import PolicyPage from '@/components/PolicyPage'
import content from '@/data/CONTENT.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${content.policies.accessibility.title} - ${content.site.name}`,
  description: content.policies.accessibility.metaDescription,
}

export default function AccessibilityPage() {
  return (
    <PolicyPage
      title={content.policies.accessibility.title}
      content={content.policies.accessibility.content}
      lastUpdated="June 2026"
    />
  )
}
