# Niranjan Portfolio

Responsive personal portfolio built with React, TypeScript, and Vite. The app is organized by feature so page sections can grow independently while sharing a small set of layout and UI components.

The header theme control switches between light and dark appearances. The first visit follows the operating system preference; a manual selection is saved in local storage.

## Getting started

```sh
npm install
npm run dev
```

Create a production bundle with `npm run build` and preview it with `npm run preview`.

## Deploying to GitHub Pages

For the root personal site URL, create a GitHub repository named `<your-github-username>.github.io`. In that repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The workflow in `.github/workflows/deploy.yml` builds and deploys the site whenever `main` is updated.

The Vite base path is `/`, which matches a user site at `https://<your-github-username>.github.io/`. A project site under `/niranjan-portfolio/` needs that repository path configured as the Vite base instead.

## Source layout

```text
src/
├── app/                 # Application composition
├── components/
│   ├── illustrations/   # Decorative, reusable visuals
│   ├── layout/          # Site header and footer
│   └── ui/               # Shared presentational components
├── data/                 # Portfolio copy, navigation, and content types
├── features/
│   ├── about/
│   ├── contact/
│   ├── credentials/
│   ├── experience/
│   ├── hero/
│   ├── projects/
│   └── skills/
└── styles/               # Global styles and design tokens
```

Each feature owns its section component and CSS module. Shared UI belongs in `components/ui`; site-wide content is defined in `data/siteContent.ts`; colors and typography tokens live in `styles/tokens.css`.

## Adding portfolio content

- Update confirmed copy and navigation in `src/data/siteContent.ts`.
- Update the resume-derived timeline, professional project cards, technologies, certifications, education, and contact links in `src/data/siteContent.ts`.
- Add independent work to `projects.personal.entries` in `src/data/siteContent.ts`.
- Project cards are rendered from data so new personal or professional projects can be added without duplicating section markup.

## GroundNest project page

GroundNest has a dedicated page at `/projects/groundnest/`. Vite builds its HTML entry at `projects/groundnest/index.html`, so GitHub Pages can serve the page directly and on refresh.

Edit the project description, features, and download URLs in `src/data/groundNestProject.ts`. To activate a V1 download, replace the matching platform's `href: null` with its public release asset URL, for example a GitHub Releases download link. Until a URL is supplied, that platform shows “V1 link coming soon” without a clickable download. The supported slots are macOS Apple Silicon, Windows x64, and Ubuntu x64. Keep large installers in release storage rather than this website repository.
