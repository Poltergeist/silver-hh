# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Silver HH is an Astro-based static site for organizing and promoting Flesh and Blood Silver Age tournaments in Hamburg, Germany. The site features event listings, registration links, and information about the Silver Age format.

## Development Commands

**Package Manager:** This project uses **pnpm** (not npm or yarn).

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview
```

## Architecture

### Content Management

This project uses Astro's **Content Collections** for managing tournament events:

- Event data lives in `src/content/events/` as markdown files (e.g., `2025-02-15.md`)
- Schema defined in `src/content/config.ts` using Zod validation
- Each event has frontmatter fields: title, date, city, venue, address, startTime, format, entryFee, playerCap, registerUrl, resultsUrl
- Events are queried using `getCollection("events")` and filtered/sorted by date

### Page Structure

- **Static pages**: `src/pages/index.astro` (homepage), `src/pages/events/index.astro` (event list)
- **Dynamic routes**: `src/pages/events/[slug].astro` generates individual event pages using `getStaticPaths()`
- **Base layout**: `src/layouts/BaseLayout.astro` provides HTML structure, nav, and footer for all pages
- **Components**: Reusable Astro components in `src/components/` (EventCard, Nav, Footer)

### Styling

- Global CSS in `public/styles/global.css` using CSS custom properties (variables)
- Dark theme with CSS variables: `--bg`, `--surface`, `--text`, `--muted`, `--silver`, `--accent`, `--border`
- No CSS framework - uses custom utility classes (`.card`, `.btn`, `.badge`, `.grid`, `.container`)
- Inline styles for component-specific layout adjustments

### Date Handling

- All dates use German locale formatting (`de-DE`)
- Homepage filters events to show only upcoming (`date >= new Date()`)
- Events sorted chronologically by date

## Adding New Events

Create a new markdown file in `src/content/events/` with format `YYYY-MM-DD.md`:

```markdown
---
title: "Silver HH #3"
date: 2026-02-14
venue: "Muster Store Hamburg"
address: "Musterstraße 12, 20095 Hamburg"
startTime: "11:00"
format: "Silver Age"
entryFee: "15€"
playerCap: 32
registerUrl: "https://example.com/register"
resultsUrl: "https://example.com/results"
---

Event description and schedule goes here...
```

## Site Configuration

- Site URL configured in `astro.config.mjs`: `https://silver-hh.click`
- No TypeScript configuration file (using Astro's defaults)
- No build tools beyond Astro's built-in Vite integration

## Git Workflow

### Conventional Commits

This project uses **Conventional Commits** for all commit messages. When creating commits, follow this format:

```
<type>(<scope>): <subject>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, whitespace, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Build system or dependency changes
- `ci`: CI/CD configuration
- `chore`: Other changes

**Common scopes for this project:**
- `events`: Event-related features
- `layout`: Layout and structure
- `styles`: CSS and styling
- `content`: Content collections

**Examples:**
```bash
feat(events): add registration deadline field
fix(layout): correct mobile navigation overflow
docs(readme): update development setup instructions
style(global): format CSS with consistent indentation
refactor(events): simplify date filtering logic
```
