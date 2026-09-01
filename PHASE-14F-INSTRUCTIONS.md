# Phase 14F — Hero composition and legal synchronization

Apply this overlay after Phase 14E.

## Included

- animated Pusti moved into the Hero's right visual column so he peeks from
  behind the approved photograph/card;
- the photograph remains the foreground content and retains its responsive,
  optimized image sources;
- reduced-motion and manual accessibility preferences remain supported;
- public operator details from the existing SprachOase legal notice added to
  the Impressum;
- privacy information synchronized with GitHub Pages hosting, local storage,
  WhatsApp/email/telephone contact, external links, local photographs and
  review excerpts;
- direct links to GitHub's privacy statement and the Lower Saxony complaint
  service; and
- synchronized German, English and Turkish legal content with tests.

## Important release boundary

The public source confirms proprietor, address, phone and email. It does not
justify inventing register, tax, supervisory-authority or consumer-dispute
statements. The operator must confirm those points, image releases and data
retention before production. See `docs/legal/LEGAL-SOURCE-NOTES.md`.

The legal text is an implementation draft, not a substitute for professional
legal review. The English and Turkish versions require native-language review.

## Validate

```powershell
npm run format:check
npm run lint
npm run test:run
npm run build

git status --short
git --no-pager diff --stat
```
