# Portfolio polish review

## Scope and design decisions

Preserves DM Sans / Instrument Serif, the three existing projects and screenshots, profile content, section anchors, React/Vite, and the GitHub Pages deployment workflow. The checked-out source used purple; this change applies the pink accent requested in the brief using theme tokens.

- Clear identity, internship availability, work/contact CTAs, and interactive discipline shortcuts.
- Mobile, Web, UX/UI and Full-stack filters with counts and announced results. Full-stack matches CareKids; UponAtime remains Web/UX/UI because its stated contribution is frontend and design.
- Existing project cards now support screenshot dialogs and shared action rendering. Presentation/prototype links retain their actual destinations and are not labeled as deployed apps.
- CareKids has nine expandable chapters, chapter navigation, deep links, expand/collapse controls, a stack diagram, and a larger screenshot view. Narrative stays within the existing project's documented scope and does not invent research samples, outcomes, clinical validation, or database/security implementation details.
- Six keyboard-operable workflow tabs connect activities to outputs.
- Recruiter quick view includes roles, availability, projects, skills, contact, portfolio and résumé access.
- Searchable Ctrl/Cmd+K command palette, native dialogs, persistent light/dark mode, skip link, focus styling, responsive layouts, and reduced-motion support.
- Shared project actions avoid duplicated link logic. No new application dependencies.
- Added pull-request build validation; existing main-branch Pages deployment is unchanged.

## Content limitations

The résumé field was `#` and no résumé asset exists in the repository. The action therefore says **Request résumé** and opens a pre-addressed email. Set `profile.resume` in `src/data/portfolio.js` to a real asset or URL to enable direct viewing.

The portfolio repository describes medication synchronization, but the implementation could not be independently inspected. The new copy uses **shared medication records**, avoiding a promise of real-time screen updates. The architecture describes only the documented Flutter/Dart → Supabase → PostgreSQL stack.

Internship availability preserves the existing claim. No start date is invented; the quick view says it is by arrangement.

## Verification performed

- Initial checkout build failed because tracked node_modules contained macOS-specific native packages. A fresh `npm ci --ignore-scripts` from the unchanged lockfile restored the Linux build.
- Baseline production build passed: JavaScript 203.04 KB / 64.46 KB gzip.
- Build passed after navigation/theme/project filtering/quick-view changes.
- Build passed after case study, workflow, palette and screenshot integration.
- Final production JavaScript: approximately 227.23 KB / 71.57 KB gzip (about 7.1 KB gzip added).
- DOM simulation against the compiled production bundle passed: five filters, light/dark and saved preference, menu expansion/Escape, palette search/empty state/Enter, Ctrl+K and Cmd+K, dialog closing and scroll restoration, all nine chapters, chapter deep links, workflow arrow navigation, internal anchors, image alternatives, and unique IDs.
- No runtime errors were reported by that DOM harness. It stubs native dialog opening and scrolling; it is not a real-browser accessibility or layout test.
- Existing screenshots and the `/` Vite base are retained. Main deployment remains triggered only by pushes to main.

## Required before approval / merge

**Browser QA is blocked, not passed.** The supervised local preview server ran, but the browser refused access with `net::ERR_BLOCKED_BY_CLIENT` on two attempts. No alternative browser route was used.

This implementation must not be represented as fully verified. Inspect at 1440px desktop, 768px tablet, and 390px / 320px mobile, including:

1. All sections, both themes, screenshot dialogs, and expanded case-study chapters; check overflow, readability, image loading and Google Fonts loading.
2. Menu and command palette with keyboard only; native dialog focus containment, Escape and focus return.
3. Every category filter, hero discipline shortcut, project deep link, and workflow tab.
4. Reduced-motion preference and 200% text zoom.
5. Browser console for application errors and broken asset requests.
6. External project/prototype destinations and the résumé request action.

The initial GitHub write attempt returned HTTP 403. The owner subsequently installed the connector for Natchanan001, resolving the missing personal-account installation. Changes are being submitted on a review branch. No merge or production deployment has been performed. The owner has viewed the local site; agent-run responsive browser QA remains outstanding.
