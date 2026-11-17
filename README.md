# MedQuant LLC website

The public website for MedQuant LLC, an independent healthcare technology practice helping healthcare organizations implement, integrate, modernize, and optimize EHR systems and the clinical workflows, applications, interfaces, information, and data that support care delivery. It presents MedQuant’s capabilities, team experience, created solutions, and platform experience without publishing confidential work or unsupported business claims.

The homepage presents EHR implementation and optimization, workflow implementation, application development, revenue cycle and claims management, integration, data migration, HL7 and FHIR, architecture, document intelligence, and healthcare AI and innovation. It highlights the team’s combined direct patient care and healthcare technology experience. The About section states that MedQuant LLC was established in 2012 and is based in the New York / New Jersey region. It preserves practical EHR experience and training involving Epic and Oracle Health / Cerner PowerChart without claiming vendor certifications or relationships.

## Structure

```text
index.html                     Homepage, About, Capabilities, Innovation, Contact
experience.html                Selected team experience, with attribution boundaries
solutions.html                 MedQuant solutions; currently features CDB Constellation
platforms.html                 Categorized platform and technology experience
assets/css/styles.css          Shared responsive styles and accessibility preferences
assets/js/main.js              Shared mobile navigation and current copyright year
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

- Edit homepage text and sections in `index.html`; preserve section IDs used by navigation links. Keep shared page navigation and footer links consistent across all HTML pages.
- Adjust colors, typography, and layouts in `assets/css/styles.css`.
- Add future experience entries as factual, high-level cards in `experience.html`. Attribute historical work to “our team” or “our experience”; do not imply a direct MedQuant contract, name past employers or confidential clients, or invent dates, counts, metrics, or outcomes.
- Add future MedQuant-created solutions to `solutions.html` using the existing solution-intro and capability-card pattern. Describe public capabilities at a high level and avoid client examples or implementation internals.
- Keep CDB Constellation public content focused on the healthcare problems it addresses and its high-level capabilities. Do not publish internal architecture, schemas, database or table details, APIs, security configuration, algorithms, source code, engineering records, or other proprietary implementation information. Do not imply that every capability is production-ready, autonomous, certified, or clinically validated.
- Describe vendor and platform experience as experience or training only. Do not claim affiliation, partnership, certification, endorsement, employment, or authorization; do not add vendor logos without separate approval.
- Place approved, original images in `assets/images/`. The supplied SVG artwork is original decorative artwork, not a diagram of any MedQuant system. Replace it with approved MedQuant or Canva-designed artwork if desired; provide meaningful alternative text for informative images and empty alternative text for decorative images.
- The Contact section intentionally contains no email address, phone number, or form. Replace its marked placeholder only after business contact details have been validated for public use.
- Keep claims factual. Do not publish unapproved client names, partnerships, certifications, outcomes, proprietary designs, credentials, or confidential project information.
- The copyright year updates automatically, with an HTML fallback for visitors without JavaScript. Update that fallback during annual content reviews.

Before publishing, check the page on mobile, tablet, and desktop; test navigation with keyboard and JavaScript disabled; check contrast and reduced-motion behavior; and verify all asset paths and public-facing content.
