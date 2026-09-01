# Phase 14D — Pusti website moments

Apply this overlay after Phase 14C.

## Included

- reusable viewport-triggered `MascotMoment` orchestration;
- a separate waving Pusti beneath the Hero actions;
- a listening Pusti inside the Method spotlight;
- a thinking Pusti beside the FAQ introduction;
- short play-once entrance, wave, sound and thought animations;
- static fallbacks for operating-system and website reduced-motion settings;
- responsive reserved space that avoids layout shifts; and
- updated component tests and mascot documentation.

The approved Hero and About photographs are not replaced or modified.

## Apply from the repository root in PowerShell

```powershell
$zip = Get-ChildItem "$env:USERPROFILE\Downloads" `
  -Filter "SprachOase-Pusteblume-Phase14D-Mascot-Moments*.zip" |
  Sort-Object LastWriteTime -Descending |
  Select-Object -First 1

if (-not $zip) {
  throw "Phase 14D ZIP was not found in Downloads."
}

Expand-Archive `
  -LiteralPath $zip.FullName `
  -DestinationPath .\phase14d-temp `
  -Force

Copy-Item `
  -Path .\phase14d-temp\* `
  -Destination . `
  -Recurse `
  -Force

Remove-Item .\phase14d-temp -Recurse -Force
```

## Validate

```powershell
npm run format:check
npm run lint
npm run test:run
npm run build

git status --short
git --no-pager diff --stat
```
