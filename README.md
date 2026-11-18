# Innovise IT — Company Website

The marketing website for **Innovise** ([innovise-it.com](https://innovise-it.com)): services, industries, careers, events, insights ("Think") and contact pages.

It is a single-page app built with **React 19 + Vite 8 + Tailwind CSS 4**, with build-time SEO (per-page meta tags and a generated `sitemap.xml`), and it is deployed on **Vercel**.

---

## Table of Contents

1. [Tech Stack](#1-tech-stack)
2. [Prerequisites](#2-prerequisites)
3. [Getting Started (Step by Step)](#3-getting-started-step-by-step)
4. [Environment Variables](#4-environment-variables)
5. [Available Scripts](#5-available-scripts)
6. [Project Structure](#6-project-structure)
7. [Routes / Pages](#7-routes--pages)
8. [How Common Tasks Are Done](#8-how-common-tasks-are-done)
9. [SEO System](#9-seo-system)
10. [Testing](#10-testing)
11. [Building & Deploying](#11-building--deploying)
12. [Troubleshooting](#12-troubleshooting)
13. [Git Workflow](#13-git-workflow)

---

## 1. Tech Stack

| Area            | Library / Tool                                              |
| --------------- | ----------------------------------------------------------- |
| UI framework    | React 19, React DOM                                         |
| Build tool      | Vite 8 (`@vitejs/plugin-react`)                             |
| Styling         | Tailwind CSS 4 (`@tailwindcss/vite`), `src/index.css`       |
| Routing         | React Router DOM 7                                          |
| Animations      | Framer Motion, `react-intersection-observer`                |
| Sliders         | Swiper                                                      |
| Icons           | React Icons                                                 |
| SEO / meta tags | `react-helmet-async` + custom build scripts                 |
| Forms / email   | EmailJS (`@emailjs/browser`)                                |
| HTTP            | `fetch` (careers API), Axios                                |
| Notifications   | `react-hot-toast` + custom `ToastContext`                   |
| Testing         | Vitest, Testing Library, jsdom                              |
| Linting         | ESLint 10 (React Hooks + React Refresh plugins)             |
| Hosting         | Vercel (SPA rewrites in `vercel.json`)                      |

---

## 2. Prerequisites

Install these before you start:

- **Node.js 20.19+ or 22.12+** (required by Vite 8; the team currently uses Node 24) — check with `node -v`
- **npm** (comes with Node) — check with `npm -v`
- **Git**
- A code editor (VS Code recommended)

---

## 3. Getting Started (Step by Step)

### Step 1 — Clone the repository

```bash
git clone https://github.com/Pavan-Mannschaft25/innoviseit_web_ui.git
cd innoviseit_web_ui
```

### Step 2 — Install dependencies

```bash
npm install
```

### Step 3 — Create the `.env` file

Create a file named `.env` in the project root (same folder as `package.json`) and add the keys listed in [Environment Variables](#4-environment-variables). Ask a team lead for the real values.

> `.env` is git-ignored. Never commit real keys.

### Step 4 — Start the development server

```bash
npm run dev
```

Open the URL printed in the terminal (usually **http://localhost:5173**). The page reloads automatically when you save a file.

### Step 5 — Check your work before committing

```bash
npm run lint     # code style / errors
npm test         # unit tests
npm run build    # make sure the production build works
```

---

## 4. Environment Variables

All variables must start with `VITE_` so Vite exposes them to the browser code.

| Variable                         | Used in                         | Purpose                                         |
| -------------------------------- | ------------------------------- | ----------------------------------------------- |
| `VITE_EMAILJS_SERVICE_ID`        | `src/pages/Contact.jsx`         | EmailJS service for the Contact form            |
| `VITE_EMAILJS_TEMPLATE_ID`       | `src/pages/Contact.jsx`         | EmailJS template for the Contact form           |
| `VITE_EMAILJS_PUBLIC_KEY`        | `src/pages/Contact.jsx`         | EmailJS public key for the Contact form         |
| `VITE_EMAILJS_REG_SERVICE_ID`    | `src/pages/InvitationPage.jsx`  | EmailJS service for event registration          |
| `VITE_EMAILJS_ADMIN_TEMPLATE_ID` | `src/pages/InvitationPage.jsx`  | Email sent to the admin on registration         |
| `VITE_EMAILJS_USER_TEMPLATE_ID`  | `src/pages/InvitationPage.jsx`  | Confirmation email sent to the registrant       |
| `VITE_EMAILJS_REG_PUBLIC_KEY`    | `src/pages/InvitationPage.jsx`  | EmailJS public key for registration             |
| `VITE_API_URL`                   | `src/constants/careersConstants.js` | Base URL of the backend Careers/Jobs API    |

Example `.env`:

```env
# Contact form
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Event registration (Reserve your invitation)
VITE_EMAILJS_REG_SERVICE_ID=your_reg_service_id
VITE_EMAILJS_ADMIN_TEMPLATE_ID=your_admin_template_id
VITE_EMAILJS_USER_TEMPLATE_ID=your_user_template_id
VITE_EMAILJS_REG_PUBLIC_KEY=your_reg_public_key

# Careers API
VITE_API_URL=https://your-api-host/api
```

> After changing `.env`, **restart** `npm run dev`. On Vercel, add the same variables under **Project → Settings → Environment Variables** and redeploy.

---

## 5. Available Scripts

| Command               | What it does                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------ |
| `npm run dev`         | Starts the Vite dev server with hot reload.                                                      |
| `npm run build`       | Production build. Runs `prebuild` (sitemap) → `vite build` → `prerender-meta` (SEO HTML per page). Output goes to `dist/`. |
| `npm run preview`     | Serves the `dist/` build locally at http://localhost:4173.                                       |
| `npm run sitemap`     | Regenerates `public/sitemap.xml` from `src/config/seoConfig.js`.                                 |
| `npm run lint`        | Runs ESLint on the whole project.                                                                |
| `npm test`            | Runs all Vitest tests once.                                                                      |
| `npm run test:seo`    | Runs only the SEO tests in `src/__tests__`.                                                      |
| `npm run check:html`  | Checks the built pages (title, canonical, meta description). Run `npm run preview` first.         |

---

## 6. Project Structure

```
innovise_It_web/
├── public/                  # Static files copied as-is (favicon, logos, fonts, robots.txt, sitemap.xml)
├── scripts/                 # Node build scripts
│   ├── generate-sitemap.mjs     # Builds public/sitemap.xml from seoConfig
│   ├── prerender-meta.mjs       # Writes dist/<route>/index.html with SEO tags for each page
│   └── check-rendered-seo.mjs   # Verifies SEO tags on a running build
├── src/
│   ├── main.jsx             # App entry: mounts React, wraps in HelmetProvider
│   ├── App.jsx              # BrowserRouter, ScrollToTop, ToastProvider, AppRoutes
│   ├── index.css            # Tailwind import + global styles / fonts
│   ├── routes/
│   │   └── AppRoutes.jsx    # All URL → page mappings
│   ├── pages/               # One component per page
│   │   ├── Home.jsx, Contact.jsx, Careers.jsx, InnoviseThink.jsx,
│   │   │   EventsPage.jsx, EventDetailPage.jsx, InvitationPage.jsx, Privacy.jsx
│   │   ├── aboutPages/      # About, Leadership, Values, Diversity, Community
│   │   ├── servicesPages/   # SAP, Guidewire, AI, App Dev, Testing/QA, Data Migration, ...
│   │   ├── industryPages/   # Aerospace, Automotive, Chemicals, Energy, Retail, ...
│   │   └── careers/         # Open positions + job details
│   ├── components/
│   │   ├── layout/          # Navbar, MegaMenu, AboutMenu, MobileMenu, Footer
│   │   ├── sections/        # Big page sections (Hero, Services, Industries, Clients, CTA, ...)
│   │   ├── common/          # Shared blocks (Button, Badge, NotFound, ScrollToTop, ...)
│   │   ├── ui/              # Small UI primitives (Card, Input, Container, VideoModal, ...)
│   │   ├── careers/         # Careers page sections + application flow
│   │   ├── think/           # Insights carousel
│   │   └── SEO/             # SEO, RouteSEO, JSON-LD schema components
│   ├── data/                # Content in JS files (services, industries, events, nav, hero slides, ...)
│   ├── config/
│   │   └── seoConfig.js     # Single source of truth for page titles, descriptions, canonicals
│   ├── api/
│   │   └── careersApi.js    # Jobs / departments API calls
│   ├── constants/           # careersConstants.js (API_BASE_URL, PAGE_SIZE, ...)
│   ├── context/             # ToastContext
│   ├── hooks/               # useCareers, useScrollAnimation, useToast
│   ├── utils/               # Helper functions and constants
│   ├── assets/              # Images & videos imported by components
│   └── __tests__/           # Vitest tests + setup
├── index.html               # HTML shell
├── vite.config.js           # Vite + React + Tailwind plugins
├── vitest.config.js         # Test config (jsdom, setup file)
├── tailwind.config.js       # Theme colors, fonts, shadows, animations
├── eslint.config.js         # Lint rules
└── vercel.json              # Rewrites all routes to index.html (SPA)
```

---

## 7. Routes / Pages

Defined in [`src/routes/AppRoutes.jsx`](src/routes/AppRoutes.jsx).

| Group      | URLs |
| ---------- | ---- |
| Main       | `/`, `/think`, `/contact`, `/careers/*`, `/events`, `/events/:eventSlug`, `/reserve-your-invitation` |
| About      | `/about`, `/about/leadership`, `/about/privacy-policy`, `/culture/values`, `/culture/diversity`, `/culture/community` |
| Services   | `/services/sap-consulting`, `/services/guidewire`, `/services/core-engineering-ai`, `/services/application-development-integration-ai`, `/services/application-development`, `/services/integration-services`, `/services/app-maintenance`, `/services/testing-quality-assurance` (also `/services/testing-qa`), `/services/code-quality-security`, `/services/data-migration`, `/services/remediation`, `/services/project-support`, `/services/staff-augmentation` |
| Industries | `/industries/aerospace-defense`, `/industries/automotive`, `/industries/chemicals`, `/industries/energy-utilities`, `/industries/construction-real-estate`, `/industries/consumer-retail`, `/industries/consumer-products`, `/industries/retail`, `/industries/industrial-manufacturing`, `/industries/public-sector` |
| Fallback   | `*` → `NotFound` |

---

## 8. How Common Tasks Are Done

### Add a new page

1. Create the component in the right folder, e.g. `src/pages/servicesPages/MyNewServicePage.jsx`.
2. Register the route in `src/routes/AppRoutes.jsx`:
   ```jsx
   import MyNewServicePage from "../pages/servicesPages/MyNewServicePage";
   // ...
   <Route path="/services/my-new-service" element={<MyNewServicePage />} />
   ```
3. Add the page's SEO entry in `src/config/seoConfig.js` (see [SEO System](#9-seo-system)).
4. Add a link to it in the navigation data (`src/data/navData.js`) and/or Footer if needed.
5. Run `npm run sitemap` (or just `npm run build`) to update `sitemap.xml`.

### Change text / content

Most content (services, industries, events, hero slides, case studies, nav links, company info) lives in **`src/data/*.js`**. Edit the data file instead of the component whenever possible.

### Add an event

1. Add the event object to `src/data/eventsData.js` (with a unique `slug`).
2. Put images in `src/assets/eventsImages/` and import them in the data file.
3. The event page is available automatically at `/events/<slug>`.

### Add images

- Images used inside components → `src/assets/<folder>/` and `import` them (Vite optimizes and hashes them). Prefer **`.webp`**.
- Files that need a fixed public URL (favicon, logos for meta tags, fonts) → `public/`.

### Change colors / fonts

- Theme tokens: `tailwind.config.js` (`primary`, `accent` palettes, `fontFamily`).
- Global styles and `@font-face`: `src/index.css`, font files in `public/fonts/`.

---

## 9. SEO System

Everything SEO-related is driven by **one file**: [`src/config/seoConfig.js`](src/config/seoConfig.js).

1. Each page has an entry created with `page(path, title, description, extra)`.
2. Duplicate/alias routes use `duplicateOf(path, primaryPath)` → `noindex` + canonical points to the main page.
3. **At runtime**, `RouteSEO` / `SEO` components read the config and set `<title>`, meta tags and JSON-LD using `react-helmet-async`.
4. **At build time**:
   - `scripts/generate-sitemap.mjs` writes `public/sitemap.xml` from all indexable pages.
   - `scripts/prerender-meta.mjs` creates `dist/<route>/index.html` for each page with the correct title, description, canonical, Open Graph and Twitter tags, so search engines and social previews work without running JavaScript.
5. Verify after building:
   ```bash
   npm run build
   npm run preview          # keep this running
   npm run check:html       # in a second terminal
   ```

The production domain is set by `BASE_URL` in `seoConfig.js` (`https://innovise-it.com`).

---

## 10. Testing

```bash
npm test             # all tests
npm run test:seo     # SEO tests only
```

- Tests live in `src/__tests__/` (`seo.config.test.js`, `seo.component.test.jsx`).
- Setup file: `src/__tests__/setup.js` (loads `@testing-library/jest-dom`).
- Environment: jsdom (configured in `vitest.config.js`).

---

## 11. Building & Deploying

### Build locally

```bash
npm run build      # creates the dist/ folder
npm run preview    # test the production build at http://localhost:4173
```

### Deploy on Vercel

1. Push your branch to GitHub.
2. In Vercel, import the repository (first time only) with these settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Install command:** `npm install`
3. Add all [environment variables](#4-environment-variables) in **Settings → Environment Variables**.
4. Every push to the connected branch triggers a deploy; pull requests get preview URLs.

`vercel.json` rewrites every URL to `index.html`, so refreshing on a deep link (e.g. `/services/guidewire`) works.

### Manual (zip) deployment

If deploying to another host, upload the **contents of `dist/`** and configure the server to fall back to `index.html` for unknown routes. Don't commit build zip files to the repo — keep them out of git (see `.gitignore`).

---

## 12. Troubleshooting

| Problem | Fix |
| ------- | --- |
| `npm install` fails / Vite won't start | Check `node -v` is 20.19+ or 22.12+. Delete `node_modules` and `package-lock.json` only as a last resort, then `npm install`. |
| Contact / registration form doesn't send | Check the `VITE_EMAILJS_*` values in `.env`, then restart `npm run dev`. |
| Careers page shows "Unable to reach the server" | Check `VITE_API_URL` and that the backend API is running and allows CORS from your origin. |
| 404 when refreshing a page in production | The host must rewrite all routes to `index.html` (already handled by `vercel.json` on Vercel). |
| Page title / meta wrong in production | Update `src/config/seoConfig.js`, rebuild, and run `npm run check:html`. |
| New page missing from sitemap | Make sure its `seoConfig.js` entry is indexable, then run `npm run sitemap`. |

---

## 13. Git Workflow

- `main` — production branch.
- Create feature branches from `main` (e.g. `feature/<name>`), commit, and open a Pull Request into `main`.
- Before opening a PR, run: `npm run lint && npm test && npm run build`.
- Never commit `.env`, `node_modules/`, `dist/` or build `.zip` files.
