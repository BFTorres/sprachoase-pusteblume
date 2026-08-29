# Phase 12–13: prerendering, quality assurance and demo

## Automated release gate

Run once after installing dependencies and Playwright Chromium:

```powershell
npm run test:e2e:install
npm run qa
```

The `qa` command checks formatting, linting, unit tests, the production build,
localized prerender validation, browser interactions, responsive overflow and
automatically detectable WCAG 2.1 A/AA issues.

## Manual review before publication

- Confirm the final German and English copy with Pat.
- Confirm all legal details, privacy text and consent behavior with the operator
  and, where appropriate, qualified legal counsel.
- Replace provisional portraits and other visual placeholders with approved,
  optimized assets and verify their alternative text.
- Navigate the entire site using only Tab, Shift+Tab, Enter, Space and Escape.
- Check meaningful reading order and announcements with NVDA/Firefox and
  VoiceOver/Safari.
- Review at 200% and 400% browser zoom, plus 390 px, 768 px, 1024 px and 1600 px
  viewport widths.
- Run Lighthouse against the deployed preview and review Performance,
  Accessibility, Best Practices and SEO findings. Treat scores as diagnostic,
  not as a substitute for manual accessibility testing.
- Test the final contact links, telephone number, email address, course-room
  details, canonical URLs, sitemap and robots policy on the production domain.

## Optional GitHub Pages demo

The `Validate and deploy demo` workflow is manual-only. It builds with the
repository base path and adds `noindex,nofollow` plus a disallowing robots file,
so a review deployment is kept separate from the production SEO configuration.

To use it, select **GitHub Actions** as the Pages source in the repository
settings, then run the workflow manually from the Actions tab. No deployment is
triggered by a push.

## Current limitations

- Automated accessibility checks find only a subset of accessibility problems;
  the manual keyboard and screen-reader review remains required.
- Browser automation currently targets Chromium. Final release review should
  also cover current Firefox and Safari versions on real devices where possible.
- Legal claims, personal details, course availability and visual assets remain
  subject to owner approval before production publication.
