# Premium dumpster rental and junk removal website

## Direction
Build a mobile-first local-service website inspired by the references, with a distinctive high-visibility lime, warm white, charcoal, and safety-orange palette. Use strong editorial typography, real service imagery, compact trust cues, and restrained motion. The first screen will immediately show the service offer, location input, pricing clarity, and primary actions without feeling crowded.

## What I’ll build
- Responsive header with simple section navigation, phone action, and booking button
- High-impact opening section with service imagery, location entry, trust rating, and clear quote/booking actions
- Four service choices: Dumpster Rental, Junk Removal, Moving, and Cleanouts
- Guided six-step booking/quote flow: service, location, size, date, contact, confirmation
- Dumpster size cards with transparent starting prices and practical capacity guidance
- Junk-removal quote option with photo upload and preview
- Trust section, customer reviews, before/after gallery, service-area coverage, FAQs, and final CTA
- Sticky mobile bar for Call, Quote, and Book
- Accessible forms, large touch targets, keyboard-friendly controls, responsive menu, and reduced-motion support
- Route-specific search and social metadata

## Interaction details
- Selecting a service or size advances the quote flow while retaining prior answers
- Quote flow validates required fields and shows clear inline feedback
- Photo uploads stay in the browser for preview only; no data will be stored or sent because no backend was requested
- Quote and booking submissions end in a polished confirmation state
- Navigation scrolls to relevant page sections

## Technical details
- Use TanStack Start and reusable React components
- Use semantic design tokens in the global stylesheet and existing project conventions
- Add generated, locally bundled visual assets for the main service scene and gallery
- Verify the central booking path and key mobile/desktop layouts in the live preview
