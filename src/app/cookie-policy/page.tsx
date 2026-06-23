import PolicyPage from '@/components/PolicyPage'
import content from '@/data/CONTENT.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${content.policies.cookiePolicy.title} - ${content.site.name}`,
  description: content.policies.cookiePolicy.metaDescription,
}

export default function CookiePolicyPage() {
  return (
    <PolicyPage
      title={content.policies.cookiePolicy.title}
      content={content.policies.cookiePolicy.content}
      lastUpdated="June 2026"
    />
  )
}
