'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { clsx } from 'clsx'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className={clsx(
              'rounded-2xl border transition-colors overflow-hidden',
              isOpen ? 'bg-white border-ocean-200 shadow-card' : 'bg-sand-50 border-sand-200'
            )}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between gap-4 p-5 md:px-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-ink text-[15px] md:text-base">{item.question}</span>
              <span
                className={clsx(
                  'flex-shrink-0 w-7 h-7 rounded-full grid place-items-center transition-all duration-300',
                  isOpen ? 'bg-ocean-700 text-white rotate-45' : 'bg-white text-ocean-700 border border-sand-200'
                )}
              >
                <Plus className="w-4 h-4" />
              </span>
            </button>
            <div
              className={clsx(
                'grid transition-all duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 md:px-6 pb-5 md:pb-6 text-ink/70 leading-relaxed text-[15px]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
