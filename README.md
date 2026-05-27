# N7 — Modern Banking Landing Page

A responsive, single-page marketing site for **N7**, a fictional modern banking platform. Built with React and Vite, styled with Tailwind CSS v4, and animated with Framer Motion.

The layout is fully responsive across mobile, tablet, and desktop breakpoints.

## Tech Stack

| Concern        | Tool                                            |
| -------------- | ----------------------------------------------- |
| Framework      | [React 19](https://react.dev) (React Compiler)  |
| Build tool     | [Vite 8](https://vite.dev)                      |
| Styling        | [Tailwind CSS v4](https://tailwindcss.com)      |
| Animation      | [Framer Motion](https://www.framer.com/motion/) |
| Routing        | [React Router 7](https://reactrouter.com)       |
| UI primitives  | [Radix UI](https://www.radix-ui.com) + shadcn   |
| Icons          | [lucide-react](https://lucide.dev)              |
| Linting        | [ESLint 10](https://eslint.org)                 |

## Prerequisites

- **Node.js 18+** (Node 20 LTS recommended)
- **npm** (ships with Node)

## Getting Started

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd assignment
npm install
```

Start the development server:

```bash
npm run dev
```

The app runs at **http://localhost:5173** with hot module replacement enabled.

## Available Scripts

| Command           | Description                                          |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR                   |
| `npm run build`   | Produce an optimized production build in `dist/`     |
| `npm run preview` | Serve the production build locally for verification  |
| `npm run lint`    | Run ESLint across the project                        |

To preview a production build:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── assets/                 # Images, icons, and other static media
├── components/
│   ├── layout/             # Header, Footer, and page Layout shell
│   ├── sections/           # Page sections (Hero, Solutions, CaseStudies, …)
│   └── ui/                 # Reusable primitives (Button, Container, Marquee)
├── lib/                    # Utilities and hooks (cn, useIsDesktop)
├── pages/                  # Route-level pages (Home)
├── App.jsx                 # Router setup
├── main.jsx                # Application entry point
└── index.css               # Tailwind layers, theme tokens, and base styles
```

## Path Aliases

Imports use the `@` alias mapped to the `src/` directory (configured in `vite.config.js` and `jsconfig.json`):

```js
import { Button } from "@/components/ui/Button";
```

## Notes

- **Theme:** The site renders in dark mode by default (`class="dark"` on `<html>`). The color palette and radii are defined as CSS custom properties in `src/index.css`.
- **Fonts:** Archivo and Chivo Mono are loaded from Google Fonts in `index.html`.
- **Responsiveness:** Desktop layouts are tuned at the `lg` breakpoint (≥1024px) and gracefully stack down for tablet and mobile.
