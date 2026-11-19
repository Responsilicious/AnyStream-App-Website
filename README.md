# AnyStream promotional website

A single-page promotional site for AnyStream, a free TV app for Jellyfin, Emby and Plex on Amazon Fire TV (Vega OS and Fire OS), available on the [Amazon Appstore](https://www.amazon.com/gp/product/B0HPRPN3NP).

It is a static site: plain HTML, CSS and a small amount of JavaScript in `public/`. There is no build step and no third-party scripts, fonts or trackers.

```
public/
  index.html            the whole page
  assets/css/site.css   styles (colour tokens at the top)
  assets/js/site.js     mobile menu and screenshot lightbox
  assets/img/screens/   app screenshots (WebP + JPEG fallback, full 16:9)
  assets/video/         feature tour and set-up walkthrough (H.264 MP4, no audio) with poster frames
  assets/img/brand/     logo (transparent PNG master + 96px-high web copy) and icons
  robots.txt            allows indexing
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

## Media

- **Design preview** screenshots (Home, Movie details, Sign in with Plex) are from the original design mockups.
- **Real app** screenshots and both videos were recorded from the AnyStream app (the shared app code running in a browser) against a demo Jellyfin and Emby server with a made-up library. Titles, artwork and the demo film are fictional; the page says so next to each one.
- Every Appstore link has `data-appstore` so it can be found and changed in one go.

## Still to do

Search the code for `OWNER-SUPPLIED:`.

- [ ] **Privacy and contact**: replace the `#privacy-placeholder` and `#contact-placeholder` links with the owner-supplied pages, and remove `data-placeholder-link`.
