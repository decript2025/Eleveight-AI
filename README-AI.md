## Eleveight New — AI Change Guide and Component Reference

This document is the single source of truth for component responsibilities, props, styling rules, and change workflow. Before coding changes, update this file first; then implement. This avoids duplicate or conflicting work.

### Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript + React
- **Styling**: Tailwind CSS
- **UI Primitives**: Shadcn-inspired components in `src/components/ui`

## Global Conventions
- **Styling**: Prefer Tailwind utilities; keep custom colors consistent with the current palette (e.g., `#111`, `#323135`, `#ADADAD`, `#D1D5DB`).
- **Accessibility**: Provide `aria-label`s for icon-only buttons, associate `Label` with inputs via `htmlFor`/`id`.
- **Naming**: Components PascalCase; files follow component names.
- **Data flow**: Client-only UI; no server-side data dependencies at this time.

## App Components (`src/app`)

### `layout.tsx`
- **Role**: Root layout wrapper; sets global styles via `globals.css` and Tailwind providers.
- **Change Rules**: Add global providers here only; avoid feature logic.

### `page.tsx`
- **Role**: Home page composition.
- **Contains**: `header`, `hero`, marketing sections, `ReservationDialog`.
- **Change Rules**: Reorder sections carefully; keep page lightweight.

### `header.tsx`
- **Role**: Top navigation and brand.
- **Props**: None.
- **Styling**: Dark background; responsive spacing.
- **Notes**: Navigation items should correspond to existing sections.

### `hero.tsx`
- **Role**: Above-the-fold hero with marketing copy and CTA to open reservation dialog.
- **Props**: None.
- **Styling**: Responsive imagery (`public/hero-*.jpg`).

### `about.tsx`
- **Role**: “Most advanced infrastructure…” informational section.
- **Props**: None.
- **Styling**: Copy-focused block; follow spacing rhythm used in hero/partners.

### `features.tsx`
- **Role**: Why Eleveight features grid (icons + headings + copy).
- **Props**: None.
- **Styling**: Grid responsive: 4/2/1 columns at desktop/tablet/mobile.

### `partners.tsx`
- **Role**: Partners carousel strip.
- **Props**: None.
- **Styling**: Utilize Tailwind animations or CSS keyframes for marquee effect; images from `public/partners`.

### `footer.tsx`
- **Role**: Contact/location info with email/phone.
- **Props**: None.
- **Styling**: Dark theme; readable at 12–14px on mobile.

### `ReservationDialog.tsx`
- **Role**: Contact/reservation modal dialog.
- **Dependencies**: `src/components/ui` primitives, `PhoneInputWithSearch`.
- **Key Behavior**:
  - Opens via `DialogTrigger` button.
  - Sticky header with close button.
  - Form fields: first name, last name, email, phone (intl), company, job title, selects for needs/contract/timing/workload, optional comment, subscription checkbox.
  - Submit button; optional submit disclaimer text.
- **Styling**: Tailwind-adapted MicroModal design
  - Container: `max-w-[500px] max-h-[80vh] bg-[#111] rounded-[14px] shadow-[0_12px_40px_rgba(0,0,0,0.6)] px-8 pb-8`
  - Inputs: `bg-[#323135] text-[#ADADAD] rounded-[6px] focus:border-[#D1D5DB]`
  - Labels: `text-[#ccc] text-[12px]`
  - CTA: white button with hover scale
- **Change Rules**:
  - Keep fields and order aligned with business requirements.
  - If adding fields, update disclaimer and any submission logic accordingly.

### `PhoneInputWithSearch.tsx`
- **Role**: International phone input with country search support.
- **Props**:
  - `value: string | undefined`
  - `onChange: (value: string) => void`
  - Optional `defaultCountry`, `international`, `placeholder`
- **Styling**: Integrates with dark form fields; ensure contrast.

## UI Primitives (`src/components/ui`)
- These are thin wrappers around headless/shadcn-like primitives, themed for the project.

### `button.tsx`
- Variants: at least `default`, `no-border`.
- Use for CTAs/forms; supports `size="icon"` for icon-only buttons.

### `checkbox.tsx`
- Accessible checkbox; supports controlled/uncontrolled usage.

### `dialog.tsx`
- Composition components: `Dialog`, `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogTitle`, `DialogDescription`, `DialogFooter`, `DialogClose`.
- Used by `ReservationDialog` for modal behavior.

### `input.tsx`, `textarea.tsx`
- Standard text inputs and multiline text area; accept `className` for Tailwind overrides.

### `label.tsx`
- HTML label; pair via `htmlFor` and target `id`.

### `select.tsx`
- Composition: `Select`, `SelectTrigger`, `SelectValue`, `SelectContent`, `SelectItem`.
- Used for controlled/uncontrolled simple selects.

### `popover.tsx`, `command.tsx`, `scroll-area.tsx`, `sonner.tsx`
- Utility primitives for overlays, command palette, scrollable containers, toasts.
- Adopt as needed; keep styling consistent with dark theme.

## Utilities (`src/lib/utils.ts`)
- Generic helpers; keep small and composable. Avoid cross-cutting concerns here.

## Assets
- `public/*` used by Next.js for static assets.
- `eleveight/*` contains legacy static prototype; used as visual reference only.

## Styling Tokens
- Dark surfaces: `#111`, `#2a2a2a`, `#323135`
- Text/subtle: `#fff`, `#ADADAD`, `#ccc`
- Focus/border: `#D1D5DB`
- Rounded: 6px inputs, 14px modal container

## Change Workflow (Mandatory)
1. Update this file first when proposing changes:
   - Add/modify the relevant component section with the intended changes.
   - Specify props, structure, and styling implications.
2. Implement the code changes to match this spec.
3. If behavior affects multiple components, document each impacted component here.
4. Keep this file in sync with the code after merges.

## Examples of Allowed Changes
- Add a new select to `ReservationDialog`: document field name, options, validation, and how it is submitted.
- Adjust theming: list updated colors/tokens here and align all related components.

## Out of Scope
- Server APIs and persistence are handled elsewhere; if submission endpoints or payloads change, note it here briefly and link to API docs if available.

## Appendix: MicroModal Style Parity
- Dialog overlay/content animations can be added using Tailwind transitions if needed; current design mirrors the original’s sizes, spacing, and palette.


