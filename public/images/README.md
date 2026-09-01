# Approved photography

These production images were exported from the client-supplied files
`pat-hero.JPG` and `pat-about.jpg`.

- `pat-hero-*`: landscape photograph used only in the hero section;
- `pat-about-*`: portrait photograph used only in the About Pat section;
- AVIF and WebP files provide responsive modern formats; and
- the unnumbered JPEG files are optimized fallbacks.

The hero image is intentionally eager-loaded with high fetch priority. The
about image is lazy-loaded because it appears much farther down the page.
Preserve the intrinsic 4:3 and 3:4 aspect ratios respectively to avoid layout
shift and unintended cropping.
