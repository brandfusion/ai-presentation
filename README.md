# Agentic AI in Truvio Commerce: Web-Native Presentation Deck

A modern, web-native 5-slide presentation engine engineered for **Truvio Commerce** and deployable to **Netlify** with zero friction.

Slides are driven entirely by a separate Markdown file (`slides.md`). When you are ready to update the presentation content, simply edit `slides.md`!

---

## 🚀 Quick Start (Local Run)

You can run the presentation locally with zero dependencies (using Node built-ins):

```bash
node server.js
```
or
```bash
npm start
```

Then open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## ⚡ Slide Controls & Keyboard Shortcuts

| Key | Action |
| :--- | :--- |
| `→` / `Space` / `↓` / `PgDn` | **Next Slide** (Directional slide animation) |
| `←` / `Backspace` / `↑` / `PgUp` | **Previous Slide** |
| `Home` / `End` | Jump to **First / Last Slide** |
| `O` or `Esc` | Toggle **Slide Overview Grid** |
| `S` | Toggle **Speaker Notes Drawer & Presentation Timer** |
| `F` | Toggle **Fullscreen Mode** |
| `?` | Show **Keyboard Shortcuts Help** |
| `Ctrl + P` | **Print / Export Clean PDF** of all slides |
| *Touch Swipe* | Swipe left/right on mobile or tablet |

---

## 📝 How to Edit Slides (`slides.md`)

All slides reside in `slides.md`.

### Slide Separation
Separate each slide with three dashes on a line by itself:

```markdown
# Slide 1 Title
Slide 1 content...

---

# Slide 2 Title
Slide 2 content...
```

### Speaker Notes
Add speaker notes at the end of any slide using:

```markdown
<!-- notes:
Your private speaker notes here.
These appear in the Speaker Notes drawer (press S).
-->
```

### Layouts & Components Available

- **Badges**:
  - `<div class="slide-badge">⚡ Title</div>`
  - Variants: `red`, `blue`, `purple`, `green`
- **Grids**:
  - `<div class="grid grid-3">...</div>` (3 columns)
  - `<div class="grid grid-4">...</div>` (4 columns)
- **Cards**:
  - `<div class="card">...</div>`
  - `<div class="card warning">...</div>`
  - `<div class="card agent-card">...</div>`
  - `<div class="card metric-card">...</div>`
- **Callout boxes**:
  - `<div class="callout warning-callout">...</div>`
  - `<div class="callout info-callout">...</div>`

---

## 🌐 Deploying to Netlify

This project is pre-configured for **Netlify** via `netlify.toml`.

### Method A: Connect via Git (Recommended)
1. Push this folder to a GitHub/GitLab repository.
2. Log into [Netlify](https://app.netlify.com) and click **"Add new site" > "Import an existing project"**.
3. Select your repository.
4. Netlify will auto-detect `netlify.toml`:
   - **Build command:** *(leave empty)*
   - **Publish directory:** `.`
5. Click **Deploy Site**.

### Method B: Netlify Drop (Instant Drag & Drop)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop this entire presentation folder.
3. Your web presentation is live on an SSL URL in 5 seconds!
