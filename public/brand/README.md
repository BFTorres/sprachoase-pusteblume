# SprachOase logo assets

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
