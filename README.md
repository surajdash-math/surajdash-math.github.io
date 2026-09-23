# Suraj Dash’s mathematics website

A static website built with Astro, with research, teaching, seminars, and travel pages. The site includes light and dark themes and layouts for phones and larger screens.

## Requirements

Use Node.js 22.12 or newer. The current website has been built successfully with Node.js 24.

## Run locally

```sh
npm ci
npm run dev
```

Open the local address printed by Astro. Changes to the source files appear in the development preview.

## Edit the website

| Content | File |
| --- | --- |
| Homepage, research interests, and contact information | `src/pages/index.astro` |
| Research and theses | `src/pages/research.astro` |
| Teaching and Directed Reading Program | `src/pages/teaching.astro` |
| Learning seminars and expository talks | `src/pages/learning-seminars.astro` |
| Research talks and conferences | `src/pages/travel.astro` |
| Shared navigation, themes, footer, and homepage gallery | `src/components/` |

Images served by the website are in `public/`. Original images retained for future editing are in `source-assets/`.

Expository talks dated after the build date receive an “Upcoming” label. The labels and footer modification date are refreshed when the site is rebuilt.

## Build and preview

```sh
npm run build
npm run preview
```

The build creates the complete static website in `dist/`. Generated output and installed dependencies are excluded from Git because they can be recreated from the committed source and package lockfile.

For visible changes, inspect the rebuilt pages at phone and desktop widths and in both themes.

## Publish updates

The website remains editable after publication. Edit the source, check the build, commit the changes, and push them to GitHub. Once a hosting deployment workflow is configured, it can rebuild and publish the updated website automatically.

The production website address should be set in `astro.config.mjs` when hosting is configured, so the canonical address and social preview image use the public website URL.
