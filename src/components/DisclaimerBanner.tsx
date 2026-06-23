import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'
import content from '@/data/CONTENT.json'

/**
 * Government-affiliation disclaimer banner rendered at the very top of every
 * page, above the header, so the "not a government website" disclosure is
 * visible above the fold — required by Google Ads policy and consistent with
 * the MARA Code of Conduct (must not imply a relationship with the Government).
 */
export default function DisclaimerBanner() {
  return (
    <div
      role="region"
      aria-label="Important disclaimer"
      className="bg-amber-50 border-b border-amber-300 text-amber-900"
    >
      <div className="container-custom py-2 md:py-2.5">
        <div className="flex items-start gap-2.5 text-[12px] md:text-[13px] leading-snug">
          <AlertTriangle
            className="w-4 h-4 md:w-[18px] md:h-[18px] flex-shrink-0 mt-0.5 text-amber-600"
            aria-hidden="true"
          />
          <p>
            <span className="font-bold">Important:</span> {content.disclaimer.shortBanner}{' '}
            <Link href="/disclaimer" className="underline font-semibold hover:text-amber-700">
              Read full disclaimer
            </Link>
            {' · '}
            <a
              href={content.official.deptUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold hover:text-amber-700"
            >
              Official {content.official.agency}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
