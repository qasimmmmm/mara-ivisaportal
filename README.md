# iVisaPortal — Australian Visa & Migration Consultancy

A professional, Google Ads–compliant Next.js website for a **registered migration agent** providing immigration assistance for Australian visas. Operated by **ZA Logistics Inc** and deployed at **australia.ivisaportal.com**.

> **Positioning matters for compliance.** This site advertises *professional migration consultancy services* (advice, eligibility assessment, application preparation, and representation by a registered migration agent) — **not** the "direct acquisition" of any government document. That distinction is central to passing Google's *Government documents and services* policy review.

---

## Business & regulatory details

- **Brand:** iVisaPortal
- **Legal entity:** ZA Logistics Inc
- **Registered office:** 2601 Woodland Park Drive, Apt 8209, Houston, TX 77077, USA
- **Email:** support@ivisaportal.com  ·  **Phone:** +1 413 241 9088
- **Registered migration agent:** Chanpreet Singh
- **MARN (Migration Agents Registration Number):** 2318249 — *Registered*, commenced 29 September 2025
- **Regulator:** Office of the Migration Agents Registration Authority (OMARA), part of the Australian Department of Home Affairs
- **Public register entry:** verifiable on the MARA Register of Migration Agents

## Tech stack

Next.js 15 (App Router) · React 18 · TypeScript · Tailwind CSS · **Inter** font. Design system matches the main **ivisaportal.com** brand exactly: blue-600 (#2563eb) primary, emerald accent, slate neutrals, lucide **Globe** logo.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start
```

## Content is data-driven

Almost all copy lives in **`src/data/CONTENT.json`** (business details, services, FAQ, policies, disclaimers). Edit there; components read from it.

## Pages

- **Home** — hero with registered-agent credential card, visa-service overview, "why a registered agent", 4-step process, FAQ
- **Visa Services** (`/services`) — detailed pathways: Skilled (189/190/491), Partner & Family (820/801, 309/100, 300), Student & Graduate (500/485), Employer-Sponsored & Work (482/186/494), Visitor (600/651/601), Refusals/Cancellations/ART appeals, Citizenship & PR
- **Free Assessment** (`/free-assessment`) — a no-obligation *eligibility assessment / consultation request* (a lead form for professional services, **not** a visa-application checkout)
- **About** (`/about`) — company + a verifiable registered-agent credential block (name, MARN, status, MARA verify link)
- **Contact** (`/contact`) — enquiry form + direct contact + "for official government matters" routing notice
- **Thank-you**, **404**, and 7 policy pages (Disclaimer, Legal Notice, Privacy, Terms, Refund, Cookie, Accessibility)

## What a registered migration agent may lawfully do

Under the Migration Act 1958 (Part 3, s276), a registered migration agent may, for a fee, provide *immigration assistance*: advise on visa options/eligibility, prepare and lodge visa applications, act as authorised representative with the Department of Home Affairs, prepare and represent clients in merits review at the **Administrative Review Tribunal (ART)** (which replaced the AAT/IAA on 14 Oct 2024), assist employers with nomination/sponsorship, prepare Ministerial Intervention requests, and assist with citizenship. The site's services map directly to this scope.

## Google Ads compliance — *Government documents and services*

Built to satisfy the policy ( support.google.com/adspolicy/answer/13156083 ):

1. **Professional-services positioning** — the site sells the agent's regulated expertise, not "get a visa here". No "official", "government-authorised", or "government portal" language.
2. **"Not a government website" disclosures** on every page — top banner, footer compliance block, and on the assessment form. (Google also auto-appends this disclosure to Search ads in this category.)
3. **Verifiable credential** — the named registered migration agent and MARN are displayed and linked to the public MARA register throughout. This is the legitimacy basis for certification.
4. **Fee transparency** — professional service fees are clearly stated as *separate from and additional to* any Australian Government Visa Application Charges (VACs), with an explicit statement that applicants may deal with the Department directly or choose any agent.
5. **No outcome guarantees** — honest-advice language consistent with the MARA Code of Conduct; decisions are made solely by the Department.
6. **Official-source links** — immi.homeaffairs.gov.au and the MARA register linked throughout.
7. **Consumer protection** — links to the OMARA Consumer Guide and Code of Conduct.

### To actually run ads, you still must:

1. **Apply for certification** under the Government documents & services policy via Google's [application form](https://support.google.com/adspolicy/contact/godos_certification). For a regulated professional advisory service, select the option that best reflects your case (e.g. that you provide professional consultancy services rather than direct acquisition of a government document, or apply for the relevant business exclusion). Provide your MARA registration as supporting evidence.
2. **Complete Google's advertiser verification program** — business details submitted must match this entity (ZA Logistics Inc) exactly.
3. A warning is issued at least 7 days before any suspension, so respond promptly to any policy notice.

> This is general implementation guidance, not legal advice. Have your policy pages and ad copy reviewed by your own adviser before going live.

## Before you go live

- Wire up `src/app/api/lead/route.ts` to your email/CRM (it currently logs to console).
- Confirm all details on the Legal Notice page.
- Point DNS for `australia.ivisaportal.com`.
- Review every policy page with your own counsel.

## Company

**ZA Logistics Inc** · 2601 Woodland Park Drive, Apt 8209, Houston, TX 77077, USA · support@ivisaportal.com · +1 413 241 9088
Registered migration agent: Chanpreet Singh (MARN 2318249).
