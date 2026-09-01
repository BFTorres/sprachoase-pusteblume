# Phase 14B — approved Pusti mascot and home-screen icon

> Phase 14C supersedes the original hero placement: approved photography now
> occupies the hero and about image positions. Pusti remains available for
> launcher icons and future interaction states.

This package is an overlay for the existing `sprachoase-pusteblume` project,
not a separate application.

## Apply in PowerShell

From the project root:

```powershell
Expand-Archive -Path .\SprachOase-Pusteblume-Phase14B-Mascot.zip -DestinationPath .\phase14b-temp -Force
Copy-Item -Path .\phase14b-temp\* -Destination . -Recurse -Force
Remove-Item .\phase14b-temp -Recurse -Force
npm run format:check
npm run lint
npm run test:run
npm run build
git status --short
git --no-pager diff --stat
```

Review the hero in both themes and at desktop/mobile widths. Also install the
site to a mobile home screen, or inspect the Application → Manifest panel in
browser developer tools, to confirm the regular and maskable icons.

## Included work

- one React mascot component with eight consistent poses rebuilt from the
  approved soft-cloud reference sheet;
- individual SVG and transparent PNG pose exports;
- standard, maskable and Apple home-screen icons;
- a localized, accessible mascot component for future interaction states;
- original CSS/SVG welcome motion with reduced-motion fallbacks; and
- placement and brand-usage guidance.
