# SprachOase brand assets

## Logo

The supplied JPEG resolves to a regular geometric mark: a yellow centre with
three rings of equal dots (8 + 16 + 16). These files rebuild that construction
without JPEG artefacts.

- `logo-original`: sampled near-original dark and yellow colours
- `logo-light`: design-system navy/yellow for light backgrounds
- `logo-dark`: cream/yellow for dark backgrounds
- `logo-primary`: optional royal-blue/yellow campaign variant

The matching PNG files are transparent 1024 × 1024 exports. In the React app,
`BrandMark` renders the same geometry inline and the default `auto` variant
inherits the active theme. The compact favicon deliberately uses only the
inner eight-dot ring so the mark stays legible below 32 px.

Do not stretch, rotate, add effects, change individual dot spacing or combine
different variants in one lock-up. Keep clear space of at least one dot
diameter around the full mark.

## Pusti mascot

`mascot/` contains the approved simplified Pusti construction in eight poses.
Every pose uses the same cloud body, face spacing, navy outline, cream fill,
blue and yellow accents. SVG is the source format; the transparent PNG export
of each pose is 1024 × 1024.

The app-icon assets are intentionally separate from `favicon.svg`. The browser
favicon continues to use the compact logo mark, while mobile home-screen and
installed-app contexts use Pusti's close-up face:

- `pusti-app-icon.svg`, 192 px and 512 px PNGs: regular home-screen icon
- `pusti-app-icon-maskable.svg` and 512 px PNG: Android safe-zone variant
- `pusti-apple-touch-icon-180.png`: iOS home-screen icon

Only the launcher-icon variants add the short outlined green stem beneath the
puff. It makes the small icon read as a dandelion rather than a generic cloud
without adding detail to the reusable mascot poses.

The close-up composition is an original Pusti asset. It follows the general
mobile-icon convention of a large recognizable face, not another brand's
character geometry.
