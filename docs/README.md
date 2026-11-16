# Prakhar Khokhar — Portfolio

A lightweight, responsive portfolio built with plain HTML, CSS, and JavaScript. Its visual language follows the dark technical style of the ULLI-Next project site, with a light/dark theme switch and mobile navigation.

## Publish with GitHub Pages

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Select branch **main** and folder **/docs**, then save.
4. GitHub Pages should publish the site at:

   https://prakhar-khokhar.github.io/aboutme/

The root README remains the detailed text profile; this folder contains the website.

## Structure

- index.html — page content and metadata
- assets/css/style.css — design tokens, layout, responsive styles, and theme variants
- assets/js/main.js — theme persistence, mobile navigation, and current footer year
- assets/favicon.svg — site icon
- robots.txt and sitemap.xml — basic search-engine discovery files

## Updating content

Keep project states accurate. The ULLI-Next Qt/C++ rewrite is experimental and not ready for real disk installations; the KNewStuff work is in progress; KPackage !139 and PorteuX #135 are merged contributions. Update the corresponding page sections when those states change.

No build step or external JavaScript dependency is required.
