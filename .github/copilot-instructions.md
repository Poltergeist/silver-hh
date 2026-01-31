# Copilot Instructions for Silver HH

## Project Overview

Silver HH is an Astro-based static site for organizing Flesh and Blood Silver Age tournaments in Hamburg, Germany. The site is deployed to GitHub Pages with a custom domain and features bilingual content (German/English).

## Build, Test, and Lint Commands

**Package Manager:** This project uses **pnpm** exclusively (enforced via preinstall hook).

```bash
# Install dependencies
pnpm install

# Start development server (typically http://localhost:4321)
pnpm dev

# Build for production (outputs to dist/)
pnpm build

# Preview production build locally
pnpm preview
```

**Important:** There are no test or lint commands configured. Do not add testing/linting tools unless explicitly requested.

## Architecture

### Internationalization (i18n)

The site uses Astro's built-in i18n routing with **German as the default locale**:

- **Locales:** German (`de`) and English (`en`)
- **Routing:** Prefix-based with `prefixDefaultLocale: true` (e.g., `/de/events`, `/en/events`)
- **Page structure:** All pages live in `src/pages/[lang]/` (dynamic lang parameter)
- **Translation files:** `src/i18n/de.json` and `src/i18n/en.json` contain UI strings
- **Configuration:** `src/i18n/config.ts` defines language mappings (`de` → `de-DE`, `en` → `en-US`)

### Content Collections

Event data is managed via Astro Content Collections:

- **Location:** `src/content/events/` as markdown files
- **Naming:** Files named `YYYY-MM-DD.md` (ISO date format)
- **Schema:** Defined in `src/content/config.ts` using Zod validation
- **Required frontmatter fields:**
  - `title`: Event name (e.g., "Silver HH #3")
  - `date`: Event date (Date object, parsed from frontmatter)
  - `venue`: Venue name
  - `address`: Full address string
  - `startTime`: Time string (e.g., "11:00")
  - `lang`: Language enum (`"de"` or `"en"`)
- **Optional fields:** `entryFee`, `playerCap`, `registerUrl`, `resultsUrl`
- **Defaults:** `city: "Hamburg"`, `format: "Silver Age"`

**Querying events:**
```astro
import { getCollection } from "astro:content";
const events = await getCollection("events");
```

### Page Structure

- **Static pages:** `src/pages/index.astro` redirects to `/de` (default locale)
- **Localized pages:** `src/pages/[lang]/index.astro`, `about.astro`, `events/index.astro`, etc.
- **Dynamic routes:** `src/pages/[lang]/events/[slug].astro` generates individual event pages
- **404 handling:** `src/pages/404.astro`
- **Base layout:** `src/layouts/BaseLayout.astro` provides HTML structure, nav, and footer
- **Components:** Reusable Astro components in `src/components/` (EventCard, Nav, Footer, etc.)

### Date Handling Conventions

- All event dates use **ISO date strings** in frontmatter: `date: 2026-02-14`
- Date formatting uses German locale (`de-DE`) by default via `toLocaleDateString()`
- Events filtered by date: `upcomingEvents = events.filter(e => e.data.date >= new Date())`
- Events sorted chronologically: `events.sort((a, b) => a.data.date - b.data.date)`

### Styling System

- **Global CSS:** `public/styles/global.css` with CSS custom properties (no framework)
- **Dark theme variables:**
  - Colors: `--bg`, `--surface`, `--text`, `--muted`, `--silver`, `--accent`, `--border`
  - Typography: `--font-sans`, `--font-mono`
  - Spacing: `--radius`, `--shadow`
- **Utility classes:** `.card`, `.btn`, `.badge`, `.grid`, `.container`
- **No CSS framework** – custom utility classes and component-specific inline styles
- **Responsive design:** Mobile-first approach with explicit media queries

## Key Conventions

### Adding New Events

1. Create markdown file in `src/content/events/` with format `YYYY-MM-DD.md`
2. Include all required frontmatter fields (title, date, venue, address, startTime, lang)
3. Event date must match filename date
4. Use German locale strings for German events, English for English events
5. File must validate against schema in `src/content/config.ts`

### Translation Management

- UI strings live in `src/i18n/de.json` and `src/i18n/en.json`
- Translation keys use nested objects (e.g., `nav.home`, `events.title`)
- Import translations via `src/i18n/utils.ts` helper functions
- Always add new strings to both language files
- German is the primary language – translate to German first

### Git Commit Messages

This project uses **Conventional Commits** format:

```
<type>(<scope>): <subject>
```

**Common scopes:**
- `events`: Event-related features
- `layout`: Layout and structure
- `styles`: CSS and styling
- `content`: Content collections
- `i18n`: Internationalization

**Example commits:**
```bash
feat(events): add registration deadline field
fix(layout): correct mobile navigation overflow
docs(readme): update development setup instructions
refactor(i18n): simplify translation helper functions
```

## Deployment

The site auto-deploys to GitHub Pages via `.github/workflows/deploy.yml`:

- **Trigger:** Push to `main` branch or manual workflow dispatch
- **Build command:** `pnpm build`
- **Output:** `dist/` directory
- **Live URL:** https://www.silver-hh.click

**Do not modify the deployment workflow** unless explicitly requested – it's a working production setup.

## Technology Requirements

- **Node.js:** ≥22.0.0 (enforced via package.json engines)
- **pnpm:** ≥8.0.0 (enforced via package.json engines and preinstall hook)
- **Astro:** Currently 5.15.8 (check package.json for exact version)

## Common Pitfalls

- **Do not use npm or yarn** – the preinstall hook will prevent it
- **Do not modify i18n routing config** without understanding the impact on all URLs
- **Do not change event filename format** – `YYYY-MM-DD.md` is required for slug generation
- **Do not skip the `lang` field** in event frontmatter – it's required by schema
- **Do not add TypeScript config** – Astro's defaults work for this project
