# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Vikram Bala's personal website/portfolio (www.vikrambala.com) — a static, no-build multi-page HTML site. There is no package manager, bundler, or build step: pages are plain HTML files that link directly to `css/style.css`.

## Running locally

No build/install/test commands exist. To preview, either open an HTML file directly in a browser or serve the directory statically, e.g.:

```
python3 -m http.server
```

## Architecture

- **Pages** (`index.html`, `projects.html`, `blog.html`, `contact.html`) are each self-contained HTML documents that share an identical `<head>` (favicons/manifest links, `css/style.css`) and identical `<nav class="site-nav">` / `<footer class="site-footer">` markup, hand-copied across files. There is no templating — updating nav, footer, or head metadata means editing every page individually and keeping them in sync (e.g. the `active` class on the current page's `nav-link`).
- **Styling** lives entirely in `css/style.css`, a single hand-written stylesheet (no SASS/build step, no CSS framework).
- **`assets/`** is a leftover legacy template (jQuery + SASS-based "Editorial"-style HTML5UP theme: `assets/js`, `assets/sass`, `assets/css/main.css`, etc.) that is no longer referenced by any current page. Don't wire new pages into it; it's effectively dead code pending cleanup.
- **`images/`** holds page images plus resume PDFs; top-level files (`favicon*.png`, `apple-touch-icon.png`, `site.webmanifest`, `browserconfig.xml`, etc.) are standard favicon/PWA metadata referenced from every page's `<head>`.
- Content sections on `index.html` (Experience, Education) and `projects.html` (Projects) are static hand-written HTML entries — adding a new job/project/post means adding a new markup block matching the existing `.entry` / `.project` structure, not editing a data file.
