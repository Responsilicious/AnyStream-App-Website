# AnyStream promotional website

A single-page promotional site for AnyStream, a personal-media player in development for Amazon Vega OS with Jellyfin and Plex support planned.

It is a static site: plain HTML, CSS and a small amount of JavaScript in `public/`. There is no build step and no third-party scripts, fonts or trackers.

```
public/
  index.html            the whole page
  assets/css/site.css   styles (colour tokens at the top)
  assets/js/site.js     mobile menu and screenshot lightbox
  assets/img/screens/   app screenshots (WebP + JPEG fallback, full 16:9)
  assets/img/brand/     logo (transparent PNG master + 96px-high web copy) and icons
  robots.txt            blocks indexing until launch
```

## Preview locally

```sh
cd public && python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy on Laravel Forge

1. In Forge, create a new site on your server and choose the **Static HTML** project type (or "Other" / plain PHP; no PHP is used).
2. Connect this GitHub repository and the branch you want to deploy.
3. Set the site's **Web Directory** to `/public`.
4. Leave the deploy script as a simple `git pull` (no Composer or npm steps are needed).
5. Enable a Let's Encrypt certificate under **SSL**.

Do not deploy until the pre-publish checklist below is complete.

## Before publishing

These are deliberately left as placeholders. Search the code for `SCREENSHOT NEEDED:`, `OWNER-SUPPLIED:` and `PRE-LAUNCH:`.

- [ ] **Screenshots**: add the Genres (horizontal title rows), Series and Connected Servers screens in place of the placeholders in the gallery. Export at 1672×941 (16:9) as `name-1672.webp`, `name-960.webp` and `name-1672.jpg`.
- [ ] **Privacy and contact**: replace the `#privacy-placeholder` and `#contact-placeholder` links with the owner-supplied pages, and remove `data-placeholder-link`.
- [ ] **Indexing**: remove the `noindex` meta tag in `index.html` and allow crawling in `robots.txt`.
- [ ] Review all copy against confirmed release information. The site currently describes features as planned and gives no release date, pricing or download links.
