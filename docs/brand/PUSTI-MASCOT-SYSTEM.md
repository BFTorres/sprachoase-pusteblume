# Pusti mascot system

## Canonical construction

Pusti is an original, deliberately simple SprachOase character. The approved
construction has five memorable ingredients:

1. one soft cream cloud silhouette with two large crown lobes, three broad side
   lobes per side and rounded lower lobes;
2. a medium navy outline that follows the organic contour without spikes;
3. two tall navy eyes with one white highlight each;
4. one short curved smile and two widely spaced yellow circular cheeks; and
5. thin navy noodle limbs, circular hands and shoe-like feet tucked under the
   body.

The canonical visual reference is
`docs/brand-concepts/pusti-v2-simple-master.png`. These proportions, colours
and facial spacing are locked across every pose.
Do not add forehead symbols, individual dandelion seeds, leaf structures,
clothing or detailed fingers to the base character. Props may be used only
when they communicate a specific activity.

## Included poses

| Pose        | Primary use                            | Expression or prop                  |
| ----------- | -------------------------------------- | ----------------------------------- |
| `neutral`   | Small explanatory placements           | Friendly resting pose               |
| `wave`      | Hero and first welcome                 | Raised waving arm                   |
| `celebrate` | Confirmed milestones                   | Raised arms and short accent rays   |
| `think`     | FAQ and learning prompts               | Hand near chin and one thought loop |
| `read`      | Course or literacy content             | One simple blue book                |
| `encourage` | Trial-lesson or next-step prompt       | Raised point and one star           |
| `surprised` | New discovery or reveal                | Open mouth and outward arms         |
| `listen`    | Listening and pronunciation activities | Hand near ear and two sound lines   |

The poses use broad animation-language principles found across educational
products—wave, celebrate, think, read, listen—while retaining Pusti's own
silhouette, anatomy and brand palette.

## Website placement assessment

### Implemented now

- **Home-screen app icon:** a close-up Pusti face and short stem are used for
  iOS and normal launchers; Android receives a padded maskable export. The
  browser favicon remains the compact flower logo.
- **Hero welcome:** the wave pose appears as a separate brand companion below
  the calls to action. It does not overlap or replace the approved photograph.
- **Method spotlight:** the listen pose supports the section's listening and
  speaking message without being repeated across the method cards.
- **FAQ prompt:** the think pose appears once beside the section introduction,
  outside the accordion content.
- **Reusable code and assets:** `MascotMoment` starts each animation only when
  its reserved layout area enters the viewport. Motion plays once while the
  mascot remains available as a static illustration afterward.

### Recommended when the related interaction exists

- **Trial-lesson success state:** use celebrate after an enquiry is genuinely
  submitted, not before the user acts.
- **Listening exercise:** use listen when audio or pronunciation activities
  are added.
- **Learning progress:** use encourage for an earned next-step message.

### Avoid

- Do not place a mascot on every course card or every section; repetition would
  weaken both the information hierarchy and the character's impact.
- Do not replace supplied hero, teacher, classroom or travel photography with
  Pusti. The mascot supports the brand; it does not substitute evidence and
  personal context.
- Do not use Pusti inside the privacy notice or consent controls. Legal choices
  should remain neutral and must not use a friendly character to influence a
  decision.
- Do not substitute the mascot for a real teacher photo where personal trust
  and proof are the purpose of the image.
- Do not animate Pusti near long reading passages, forms or error messages.

## Motion system

`PustiMascot` accepts an `animated` prop, while `MascotMoment` adds
viewport-triggered, play-once orchestration. The current motion is authored in
CSS and SVG, so it stays sharp at every size and adds no video dependency:

- a short entrance when the reserved area enters the viewport;
- a short three-cycle wave on the welcome pose;
- an occasional blink; and
- a two-cycle sound or thought accent for the related poses.

This is an original implementation rather than a copy of Duolingo animation.
Both the operating-system `prefers-reduced-motion` setting and the website's
manual reduced-motion preference disable all mascot motion. Avoid autoplaying
sound and keep future movements short, purposeful and interruptible.

## Accessibility

- Give the inline component a localized `label` when the character conveys a
  welcome, instruction or status.
- Omit `label` when the character is purely decorative; the component then
  hides itself from assistive technology.
- Never place essential instructions only inside an illustration.
- Preserve the supplied high-contrast navy outline and do not recolour the
  cream body to match the page background.

## Asset map

All production assets live in `public/brand/mascot/`.

- Each pose is supplied as an SVG and a transparent 1024 × 1024 PNG.
- `pusti-app-icon.svg`, 192 px and 512 px PNGs are standard launcher assets and
  include the small stem used only in launcher contexts.
- `pusti-app-icon-maskable.svg` and its 512 px PNG preserve Android's safe zone.
- `pusti-apple-touch-icon-180.png` is the iOS home-screen asset.
- `pusti-pose-sheet.png` is a review-only overview; use individual files in the
  website.

SVG is the source of truth. Do not manually redraw PNG exports.
