# MedQuant LLC website

The public website for MedQuant LLC, an independent healthcare technology and clinical information architecture practice. This initial site introduces the practice and its areas of focus without publishing confidential work or unsupported business claims.

## Structure

```text
index.html                     Public single-page website
assets/css/styles.css          Responsive styles and accessibility preferences
assets/js/main.js              Mobile navigation and current copyright year
assets/images/architecture.svg Original decorative information architecture illustration
assets/images/favicon.svg      Original MedQuant monogram
```

The site uses semantic HTML, CSS, system fonts, and a small vanilla JavaScript file. It has no build step, external frameworks, analytics, backend, database, or contact form. Navigation and content remain available without JavaScript.

## GitHub Pages

The existing GitHub Pages configuration publishes the **root of the `main` branch**. Once changes are merged or pushed to that branch, GitHub Pages publishes the static files directly. Deployment status is available in the repository's Actions tab and Settings > Pages.

Keep `index.html` at the repository root. Asset paths are relative (for example, `assets/css/styles.css`), so the site works under the repository's GitHub Pages path as well as a local server. No custom domain or DNS configuration is required or included.

To preview locally, run from the repository root:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`. Stop the server with Ctrl+C.

## Maintenance

- Edit section text and navigation in `index.html`; preserve section IDs used by the navigation links.
- Adjust colors, typography, and layouts in `assets/css/styles.css`.
- Place approved, original images in `assets/images/`. The supplied SVG artwork is original decorative artwork, not a diagram of any MedQuant system. Replace it with approved MedQuant or Canva-designed artwork if desired; provide meaningful alternative text for informative images and empty alternative text for decorative images.
- The Contact section intentionally contains no email address, phone number, or form. Replace its marked placeholder only after business contact details have been validated for public use.
- Keep claims factual. Do not publish unapproved client names, partnerships, certifications, outcomes, proprietary designs, credentials, or confidential project information.
- The copyright year updates automatically, with an HTML fallback for visitors without JavaScript. Update that fallback during annual content reviews.

Before publishing, check the page on mobile, tablet, and desktop; test navigation with keyboard and JavaScript disabled; check contrast and reduced-motion behavior; and verify all asset paths and public-facing content.
