import PolicyPage from '@/components/PolicyPage'
import content from '@/data/CONTENT.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${content.policies.legalNotice.title} - ${content.site.name}`,
  description: content.policies.legalNotice.metaDescription,
}

export default function LegalNoticePage() {
  return (
    <PolicyPage
      title={content.policies.legalNotice.title}
      content={content.policies.legalNotice.content}
      lastUpdated="June 2026"
    />
  )
}
