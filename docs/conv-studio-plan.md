# CONV Studio Landing Plan

## 1. Product Direction

### Goal
- Primary conversion: `KakaoTalk consultation`
- Secondary conversion: `Inquiry form submission`

### Positioning
- Premium conversion-focused web studio
- Not a portfolio-first agency site
- Every section must reduce hesitation and move users toward inquiry

### Target Segments
- Small business owners
- Political campaign teams

## 2. Core Messaging

### Primary Headline
`Websites that convert.`

### Supporting Line
We build performance-driven websites that turn visitors into customers.

### Brand Promise
- Strategy before visuals
- Fast execution
- Clear conversion path
- High-trust presentation

## 3. UX Principles

- Conversion over decoration
- CTA must stay visible early and often
- Mobile-first layout and copy density
- Strong trust signals before pricing decision
- Distinct service split for business and campaign audiences
- Short sections, strong hierarchy, minimal friction

## 4. Recommended Site Map

### Single-page landing structure
1. Sticky Header
2. Hero
3. Problem
4. CONV Method
5. Service Split
6. Why CONV / Trust Signals
7. Results / Portfolio Proof
8. Pricing
9. FAQ
10. Final CTA
11. Floating Kakao CTA
12. Footer

### Future expansion structure
- `/`
- `/services/small-business`
- `/services/campaign`
- `/portfolio`
- `/blog`
- `/contact`

## 5. Section Blueprint

### 5.1 Sticky Header
Purpose:
- Keep navigation simple
- Preserve access to conversion actions

Content:
- Logo: `CONV Studio`
- Nav: `Method`, `Services`, `Results`, `Pricing`, `FAQ`
- CTA button: `Free Consultation`

Behavior:
- Transparent on top, solid on scroll
- Mobile: compact menu + fixed CTA access

### 5.2 Hero
Purpose:
- Immediate value proposition
- First CTA exposure

Content:
- Eyebrow: `Conversion-focused digital studio`
- Headline: `Websites that convert.`
- Subcopy: `We build performance-driven websites that turn visitors into customers.`
- CTA 1: `Free Consultation`
- CTA 2: `View Services`
- Supporting trust row:
  - `SEO-ready`
  - `Mobile-first`
  - `KakaoTalk optimized`
  - `Fast launch`

Visual direction:
- Clean premium layout
- Strong black/white foundation
- Red used only on conversion actions
- Blue used as structured accent, not as main CTA

### 5.3 Problem
Purpose:
- Make current pain explicit
- Frame need for redesign around missed revenue or trust

Content blocks:
- `No inquiries from your website`
- `Outdated design weakens trust`
- `Visitors leave without taking action`

Suggested close:
`A website should create demand, not just exist online.`

### 5.4 CONV Method
Purpose:
- Show process maturity
- Reduce uncertainty around execution

Steps:
1. `Business Analysis`
   - audience, offer, competitor, conversion goal
2. `Strategy-driven Design`
   - messaging, structure, CTA placement, trust flow
3. `Conversion-focused Development`
   - responsive build, performance, form and Kakao integration
4. `Optimization`
   - SEO basics, funnel improvements, content refinement

UX note:
- Use a 4-step horizontal timeline on desktop
- Convert to stacked cards on mobile

### 5.5 Service Split
Purpose:
- Speak directly to two high-intent customer types

#### A. Small Business
- Local SEO structure
- KakaoTalk integration
- Reservation or inquiry funnel
- Google Maps / Naver / contact trust section
- Outcome message: `Turn local visitors into real customers`

#### B. Political Campaign
- Trust-driven candidate presentation
- Mobile-first information delivery
- QR and SNS share support
- Fast deployment in `3-5 days`
- Outcome message: `Build credibility and mobilize supporters fast`

Layout note:
- Two-column comparison with separate CTA under each column

### 5.6 Trust Signals
Purpose:
- Reduce hesitation before proof and pricing

Recommended blocks:
- `Built for lead generation`
- `Fast communication`
- `Clear CTA architecture`
- `Performance-conscious implementation`

Optional future additions:
- client logos
- testimonial quotes
- response time promise

### 5.7 Results / Portfolio Proof
Purpose:
- Show measurable outcomes, not gallery thumbnails

Card format:
- Client type
- Challenge
- What changed
- Result metric

Example metrics:
- `+30% inquiries`
- `Lower bounce on mobile`
- `More direct KakaoTalk consultations`

Important rule:
- Avoid large visual portfolio grid
- Keep section outcome-led

### 5.8 Pricing
Purpose:
- Qualify leads without overloading them

Recommended tiers:

#### Starter
- one-page landing
- mobile responsive
- inquiry form
- basic SEO structure

#### Standard
- multi-section landing
- KakaoTalk integration
- conversion copy support
- analytics-ready structure

#### Premium
- advanced funnel structure
- campaign or business custom flow
- fast deployment priority
- extended content blocks

Pricing presentation rule:
- Lead with scope and suitability
- Real prices can be hidden as `Starting from` if needed

### 5.9 FAQ
Purpose:
- Remove common objections

Suggested questions:
- How long does a project take?
- Can you connect KakaoTalk and inquiry forms?
- Can you build for campaign deadlines?
- Will the site be mobile optimized?
- Can this be expanded later?

### 5.10 Final CTA
Purpose:
- Strong close after trust and pricing

Suggested copy:
- Headline: `Ready for a website that brings real inquiries?`
- Primary CTA: `Start on KakaoTalk`
- Secondary CTA: `Send Inquiry`

### 5.11 Floating Kakao Button
Purpose:
- Persistent conversion entry point

Rules:
- Always visible on mobile
- Subtle shadow, strong red or branded Kakao treatment
- Should not block form fields or footer CTAs

## 6. Design System Direction

### Color Tokens
- `--bg: #ffffff`
- `--fg: #111111`
- `--cta: #E61E2B`
- `--accent: #00B5E2`
- `--muted: #f5f5f5`
- `--border: #e7e7e7`

### Typography
- Headings: `Montserrat`
- Body/UI: `Inter`

### Visual Rules
- Large, bold headlines
- Tight copy, low paragraph width
- Card borders instead of heavy shadows
- Red reserved for CTA and conversion emphasis
- Blue reserved for structure, process, or trust accents

### Motion
- Header background transition on scroll
- Hero reveal sequence
- Subtle card rise/fade on section entry
- No excessive floating or generic gradient motion

## 7. Suggested Next.js App Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    layout/
      site-header.tsx
      site-footer.tsx
      floating-kakao-button.tsx
    sections/
      hero-section.tsx
      problem-section.tsx
      method-section.tsx
      services-section.tsx
      trust-section.tsx
      results-section.tsx
      pricing-section.tsx
      faq-section.tsx
      cta-section.tsx
    ui/
      section-heading.tsx
      cta-button.tsx
      badge.tsx
      pricing-card.tsx
      result-card.tsx
lib/
  constants.ts
  site-data.ts
public/
  images/
```

## 8. Content Model Draft

### `lib/site-data.ts`
Centralize:
- navigation items
- service cards
- method steps
- proof metrics
- pricing tiers
- faq items
- external CTA links

Reason:
- Easier content iteration without rewriting JSX

## 9. SEO Foundation

### Homepage target intent
- web design for lead generation
- small business website korea
- campaign landing page
- KakaoTalk inquiry website

### Homepage essentials
- metadata title with brand + conversion keyword
- clear H1/H2 structure
- descriptive CTA labels
- FAQ schema later
- Organization schema later

## 10. Implementation Priority

### Phase 1: Foundation
- initialize Next.js app with TypeScript and Tailwind
- set fonts, color tokens, spacing scale
- create global layout and container system

### Phase 2: Conversion Core
- build sticky header
- build hero
- build problem
- build final CTA
- build floating Kakao button

### Phase 3: Trust and Qualification
- build method
- build services split
- build results
- build pricing
- build FAQ

### Phase 4: Polish
- responsive tuning
- motion pass
- metadata and SEO structure
- image optimization and content cleanup

## 11. Production Checklist

- Hero shows value proposition in first viewport
- Primary CTA visible without scrolling on mobile
- Kakao CTA appears in at least 4 places
- Inquiry form CTA appears in at least 2 places
- Each section ends with a directional action or transition
- Service split clearly separates business and campaign users
- Proof section uses outcomes, not just screenshots
- Pricing helps qualify users, not create confusion
- Lighthouse-sensitive layout choices are maintained

## 12. Execution Plan

### Step 1
Set up the project foundation:
- Next.js app router
- Tailwind
- font loading
- global tokens

### Step 2
Build reusable primitives:
- section container
- heading block
- CTA button
- card styles

### Step 3
Build sections in this order:
1. Hero
2. Problem
3. Method
4. Services
5. Results
6. Pricing
7. FAQ
8. Final CTA

### Step 4
Add persistent conversion UI:
- sticky header
- floating Kakao button

### Step 5
Tune for mobile conversion:
- tighter copy
- sticky CTA behavior
- spacing reduction
- thumb-friendly buttons

### Step 6
Apply SEO and content pass:
- metadata
- semantic headings
- CTA wording refinement

## 13. Recommended First Deliverable

For the first working draft, focus only on:
- sticky header
- hero
- problem
- method
- service split
- results
- pricing
- final CTA
- floating Kakao button

This is enough to validate the landing flow before deeper content or portfolio expansion.
