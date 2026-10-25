# Glorious Morning Consulting

Independent data analysis, research, and geospatial visualization practice.

**Live site:** https://johbry17.github.io/Glorious-Morning/ *(once deployed)*

---

## Local Preview

No build step required — this is a static HTML/CSS/JS site.

**Option A — Python**
```sh
cd "path/to/Glorious-Morning"
python -m http.server 8080
```
Then open http://localhost:8080

**Option B — VS Code**
Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), right-click `index.html`, and select *Open with Live Server*.

> Opening `index.html` directly with `file://` works for most content but may block certain browser security features. A local server is preferred.

---

## GitHub Pages Deployment

1. Push this repository to GitHub (repo name: `Glorious-Morning`).
2. In repository **Settings → Pages**, set:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `(root)`
3. The site will be published at `https://johbry17.github.io/Glorious-Morning/`.

The `.nojekyll` file at the repository root prevents GitHub Pages from processing the site through Jekyll.

---

## File Structure

```
/
├── index.html          Home
├── services.html       Services
├── work.html           Selected Work
├── about.html          About
├── contact.html        Contact
├── css/
│   └── main.css        Complete stylesheet (design tokens, components, responsive)
├── js/
│   └── main.js         Mobile nav toggle + Formspree AJAX form handler
├── favicon.svg         SVG favicon (sunrise mark)
├── .nojekyll           Prevents Jekyll processing on GitHub Pages
└── resources/
    ├── images/
    │   ├── Engraved Globe and Golden Sunburst.png   Primary brand emblem
    │   └── Antique Globe on Stacked Books.png       Secondary illustration
    └── thumbnails/
        ├── floodlines-thumb.webp
        ├── capital-crashpad-thumb.webp
        ├── walk-to-mordor-thumb.webp
        └── waypoints-thumb.webp
```

---

## Design System

| Token | Value | Use |
|---|---|---|
| `--navy`  | `#11263a` | Primary text, nav, footer, buttons |
| `--slate` | `#44697a` | Links, secondary headers, research accent |
| `--sage`  | `#5c6e43` | Geospatial service accent |
| `--gold`  | `#cf9d47` | Eyebrows, ornaments, sunburst, highlights |
| `--terra` | `#a55935` | Data analysis service accent |
| `--cream` | `#f0ece0` | Nav, hero, page headers, aside notes |
| `--paper` | `#faf7f2` | Body background, section alternates |

**Fonts (Google Fonts):**
- **Playfair Display** — headlines, display text
- **Source Serif 4** — body text
- **Inter** — labels, nav, UI elements

---

## Placeholders Requiring Your Input

Before launch, replace the following:

### 1. Contact email address
**File:** `contact.html`, line ~75
```html
<a href="mailto:bryan.johns@informedwanderer.com">
```
Replace with a dedicated Glorious Morning email address (e.g., a masked alias or `hello@gloriousmorningconsulting.com`).

### 2. Formspree endpoint
**File:** `contact.html`, line ~108
```html
<form action="https://formspree.io/f/xwpezyqg"
```
Create a new Formspree form at https://formspree.io and replace this URL with the new endpoint. The current endpoint belongs to the informedwanderer.com portfolio.

### 3. Open Graph image URL
**File:** All HTML `<head>` sections
```html
<meta property="og:image" content="resources/images/Engraved%20Globe%20and%20Golden%20Sunburst.png">
```
Once the site is live, update to an absolute URL: `https://johbry17.github.io/Glorious-Morning/resources/images/...`

### 4. Custom domain (optional)
If using a custom domain, add a `CNAME` file to the repository root containing the domain name (e.g., `gloriousmorningconsulting.com`), and configure DNS per GitHub's instructions.

---

## Future Enhancements (not built)

- Field Notes / blog section (work.html is designed to grow into this)
- Founder photograph on the About page
- Dedicated Glorious Morning email and Formspree endpoint
- Custom domain
- Analytics (e.g., Plausible — privacy-respecting, no cookies)
- Additional project cards as new work is completed
- Open Graph image (a standalone branded PNG for social sharing)

---

*Glorious Morning Consulting — Independent by nature. Analytical by profession. Glorious by aspiration.*
