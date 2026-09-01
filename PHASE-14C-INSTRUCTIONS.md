# Phase 14C — approved photography and dandelion launcher icon

This ZIP is an overlay for the existing `sprachoase-pusteblume` repository.
Apply it after Phase 14B.

## Included work

- `pat-hero.JPG` replaces the former hero illustration/mascot slot;
- `pat-about.jpg` replaces the former Pat portrait placeholder;
- responsive AVIF and WebP exports with optimized JPEG fallbacks;
- localized, descriptive alternative text and updated captions;
- removal of outdated “portrait needed” copy;
- Pusti remains available as a reusable mascot but is not placed in photo
  positions; and
- standard, maskable and Apple launcher icons now give Pusti a short outlined
  green stem so the puff reads as a dandelion.

## Apply in PowerShell

Download the ZIP, then run this from the repository root:

```powershell
$zip = Get-ChildItem "$env:USERPROFILE\Downloads" `
  -Filter "SprachOase-Pusteblume-Phase14C-Photography*.zip" |
  Sort-Object LastWriteTime -Descending |
  Select-Object -First 1

if (-not $zip) {
  throw "Phase 14C ZIP was not found in Downloads."
}

Expand-Archive -LiteralPath $zip.FullName -DestinationPath .\phase14c-temp -Force
Copy-Item -Path .\phase14c-temp\* -Destination . -Recurse -Force
Remove-Item .\phase14c-temp -Recurse -Force

npm run format:check
npm run lint
npm run test:run
npm run build
git status --short
git --no-pager diff --stat
```

Review both images at desktop and mobile sizes. The hero photograph should load
immediately; the about photograph should load only as the user approaches that
section.
