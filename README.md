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

Website: https://surajdash-math.github.io

The website remains editable after publication. Edit the source, check the build and preview, commit the changes, and push to the `main` branch on GitHub. The “Publish website” workflow rebuilds the site and publishes it to GitHub Pages automatically. Local edits appear publicly only after they are pushed and that workflow succeeds.

The workflow is in `.github/workflows/deploy.yml`. It uses Node.js 24 and the official Astro and GitHub Pages actions. You can also run it manually from the repository’s Actions tab. Check the latest workflow run there if an update has not appeared.

GitHub Pages uses GitHub Actions as its publishing source. The repository is named `surajdash-math.github.io` so the website is served at the root address without a project-name suffix. The production address in `astro.config.mjs` supplies the canonical URL and social preview image address.

## Search engine discovery

The official `@astrojs/sitemap` integration generates `sitemap-index.xml` and the page sitemap during each build. New site pages are included automatically. `public/robots.txt` allows crawling and points search engines to the sitemap index.

The homepage contains the Google Search Console ownership-verification tag. Keep this tag in place after verification, because Google checks it again. The Search Console URL-prefix property is `https://surajdash-math.github.io/`; submit `sitemap-index.xml` in its Sitemaps section and use URL Inspection to check indexing or request a crawl.

If the production domain changes, update both `astro.config.mjs` and the sitemap address in `public/robots.txt`, then verify the new property in Search Console.
