# Silver HH

An Astro-based static site for organizing and promoting Flesh and Blood Silver Age tournaments in Hamburg, Germany.

**Live Site:** [https://silver-hh.click](https://silver-hh.click)

## Features

- Event listings with upcoming tournament schedules
- Individual event pages with venue details, start times, and registration links
- Responsive design optimized for mobile and desktop
- Dark theme with custom CSS variables
- Tournament results tracking (when available)
- German locale date formatting
- Fast static site generation with Astro

## Tech Stack

- **Framework:** [Astro](https://astro.build) 4.x - Static site generator
- **Content Management:** Astro Content Collections with Zod schema validation
- **Styling:** Custom CSS with CSS variables (no framework)
- **Deployment:** Static hosting (configure based on your platform)
- **Node.js:** 18.14.1 or higher required

### Key Technologies

- **Content Collections:** Type-safe markdown content with frontmatter validation
- **CSS Custom Properties:** Theming system using CSS variables for consistent styling
- **Static Generation:** All pages pre-rendered at build time for optimal performance

## Prerequisites

Before you begin, ensure you have:

- **Node.js** version 18.14.1 or higher
- **pnpm** version 8.0.0 or higher

Install pnpm if you don't have it:
```bash
npm install -g pnpm
# or
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

Check your versions:
```bash
node --version  # Should be v18.14.1 or higher
pnpm --version  # Should be 8.0.0 or higher
```

## Development

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

## Project Structure

```
/
├── public/
│   └── styles/
│       └── global.css       # Global styles with CSS variables
├── src/
│   ├── components/          # Reusable Astro components
│   ├── content/
│   │   ├── config.ts        # Content collection schema
│   │   └── events/          # Event markdown files (YYYY-MM-DD.md)
│   ├── layouts/
│   │   └── BaseLayout.astro # Base HTML layout
│   └── pages/
│       ├── index.astro      # Homepage
│       └── events/          # Event pages
└── package.json
```

## Adding New Events

Create a new markdown file in `src/content/events/` with the format `YYYY-MM-DD.md`:

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

## Commit Messages

This project uses **Conventional Commits** for commit messages. This helps maintain a clear and consistent git history.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semi-colons, etc.)
- `refactor`: Code refactoring without changing functionality
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Changes to build system or dependencies
- `ci`: CI/CD configuration changes
- `chore`: Other changes that don't modify src or test files

### Examples

```bash
feat(events): add event registration deadline field
fix(layout): correct mobile navigation overflow
docs(readme): update installation instructions
style(global): format CSS with consistent indentation
```

### Scope (Optional)

Common scopes for this project:
- `events`: Event-related features
- `layout`: Layout and structure
- `styles`: CSS and styling
- `content`: Content collections

## Deployment

This is a static site deployed to **GitHub Pages** with a custom domain.

### Automated Deployment (GitHub Pages)

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

**Setup Requirements:**

1. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions
   
2. **Configure Custom Domain** (already configured):
   - Custom domain: `silver-hh.click`
   - CNAME file in `public/CNAME` (automatically deployed)
   - DNS configuration: Add CNAME record pointing to `poltergeist.github.io`

3. **Workflow** (`.github/workflows/deploy.yml`):
   - Triggers on push to `main` branch
   - Can also be manually triggered from Actions tab
   - Builds site with `pnpm build`
   - Deploys to GitHub Pages automatically

**Manual Deployment:**
You can manually trigger deployment from the GitHub Actions tab by selecting "Deploy to GitHub Pages" and clicking "Run workflow".

### Build for Production

```bash
pnpm build
```

This generates static files in the `dist/` directory.

### Alternative Deployment Platforms

This site is also compatible with:
- **Netlify** - Connect Git repository (build command: `pnpm build`)
- **Vercel** - Import project and set build command to `pnpm build`
- **Cloudflare Pages** - Connect repository with build command `pnpm build`
- Any static hosting service

### Site Configuration

The site URL is configured in `astro.config.mjs` as `https://silver-hh.click`. Update this if deploying to a different domain.

## Contributing

Contributions are welcome! Here's how to contribute:

### Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/silver-hh.git`
3. Install dependencies: `pnpm install`
4. Create a feature branch: `git checkout -b feat/your-feature-name`
5. Make your changes
6. Test locally with `pnpm dev` and `pnpm build`
7. Commit using conventional commits: `git commit -m "feat(events): add new feature"`
8. Push to your fork: `git push origin feat/your-feature-name`
9. Open a Pull Request

### Pull Request Guidelines

- Use **pnpm** as the package manager (not npm or yarn)
- Follow the conventional commits format for all commits
- Ensure the site builds successfully (`pnpm build`)
- Test your changes in development mode (`pnpm dev`)
- Keep changes focused - one feature or fix per PR
- Update documentation if you're changing functionality
- Provide a clear description of what your PR does and why

### Code Style

- Use consistent indentation (tabs/spaces as per existing files)
- Follow existing CSS variable naming conventions
- Keep component structure consistent with existing patterns
- Use German locale for date formatting

## License

MIT
