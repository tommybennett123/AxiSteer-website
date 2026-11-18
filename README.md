# AxiSteer website

Plain HTML, CSS and JavaScript. No build step.

## Put it on GitHub Pages
1. Upload everything in this folder to a GitHub repository (keep `index.html` at the top level).
2. Repository **Settings → Pages → Build from branch → main / root → Save**.
3. Your site appears at `https://YOUR-USERNAME.github.io/YOUR-REPO/`.

## Change text
Open `index.html`. Comments marked `EDIT` show what to change.

## Add or replace images
1. Drop the file in the `images` folder (use short names, no spaces, e.g. `prototype-2.png`).
2. In `index.html`, copy a whole `<figure>…</figure>` block in the Images section and change:
   - `src` to the new file name
   - `alt` to a short description (one sentence)
   - the text in "Full description" (what a person who cannot see it needs to know)
3. Keep `alt` filled in. Screen reader users depend on it.

## Change colours
Top of `style.css`: each theme is one block of named colours.
Keep text-to-background contrast at 7:1 or better (check at webaim.org/resources/contrastchecker).

## Accessibility built in
Skip link, headings in order, landmarks, descriptions for every image, keyboard focus outlines,
text-size buttons (A−, A, A+), three colour themes (dark, yellow-on-black, black-on-white),
respects the device's high-contrast and reduced-motion settings, works at 200% zoom.
