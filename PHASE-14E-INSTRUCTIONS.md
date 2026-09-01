# Phase 14E — Hero, Turkish and contact channels

Apply this overlay after Phase 14D.

## Included

- Pusti moved from a separate Hero content row into a softly faded, animated
  background position that peeks in from the left edge;
- complete Turkish translation resources and a three-option language selector;
- `/tr/` routing, canonical URL, hreflang, Open Graph locale, structured data,
  sitemap, SSR and prerender support;
- SMS replaced with a user-initiated WhatsApp click-to-chat link;
- localized, URL-encoded email subjects and message templates in German,
  English and Turkish;
- the same prepared email link in the Contact section and Footer;
- transparent contact and privacy notices; and
- updated unit, prerender and browser-test coverage.

## Privacy status

WhatsApp is linked, not embedded. No WhatsApp resource loads before the user
activates the link, so this change does not add an optional website service or
require a consent toggle by itself. Once the external link opens, WhatsApp's
terms apply.

The email template is handed to the visitor's local email program. The website
does not transmit or store its contents. Because the template asks for
information about a child, the operator must still review data minimisation,
secure handling, access and retention before production. In particular, the
necessity of the gender field should be confirmed.

The Turkish translation should receive a native-language review before the
production release, especially the provisional legal and privacy text.

## Apply from the repository root in PowerShell

```powershell
$zip = Get-ChildItem "$env:USERPROFILE\Downloads" `
  -Filter "SprachOase-Pusteblume-Phase14E-Hero-Turkish-Contact*.zip" |
  Sort-Object LastWriteTime -Descending |
  Select-Object -First 1

if (-not $zip) {
  throw "Phase 14E ZIP was not found in Downloads."
}

Expand-Archive `
  -LiteralPath $zip.FullName `
  -DestinationPath .\phase14e-temp `
  -Force

Copy-Item `
  -Path .\phase14e-temp\* `
  -Destination . `
  -Recurse `
  -Force

Remove-Item .\phase14e-temp -Recurse -Force
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
