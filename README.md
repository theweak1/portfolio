# Lenier Ortiz Portfolio

Personal portfolio website for showcasing software engineering, automation, and technical systems projects.

The site is built with [Astro](https://astro.build/) and focuses on clear project case studies, practical engineering work, and a simple content-driven structure.

## Overview

This portfolio presents selected work across software development, automation tooling, backend development, CLI tools, and technical workflow improvement.

Current featured projects include:

- **File Maintenance Automation Tool** — a Go-based cleanup and backup automation tool with configurable rules.
- **Backdrop CLI Wallpaper Manager** — an open-source Go CLI contribution for desktop wallpaper management.
- **Portfolio Manager Capstone** — a full-stack portfolio management application using Node.js, Express, React, Prisma, MongoDB, and API integration work.

## Tech Stack

- **Framework:** Astro
- **Language:** JavaScript
- **Styling:** CSS
- **Content:** JavaScript data files
- **Build Output:** Static site
- **Package Manager:** npm

## Pages

```txt
/
├── /                 Home
├── /projects         Project list
├── /projects/[slug]  Individual project case studies
├── /about            About page
├── /contact          Contact page
└── /404              Custom 404 page
```

## Project Structure

```txt
.
├── public/
│   └── js/
│       └── main.js
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── Nav.astro
│   │   └── ProjectCard.astro
│   ├── data/
│   │   ├── profile.js
│   │   └── projects.js
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   └── projects/
│   │       └── [slug].astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

Install Node.js and npm.

To verify they are available:

```bash
node --version
npm --version
```

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Astro will start the local development server. By default, the site is usually available at:

```txt
http://localhost:4321
```

### Build for Production

```bash
npm run build
```

The production-ready static files are generated in:

```txt
dist/
```

### Preview the Production Build

```bash
npm run preview
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Astro development server. |
| `npm run start` | Alias for `npm run dev`. |
| `npm run build` | Builds the site for production. |
| `npm run preview` | Serves the production build locally for review. |

## Updating Portfolio Content

Most portfolio content is controlled from the data files below.

### Profile Information

Update name, role, headline, location, email, social links, and skills in:

```txt
src/data/profile.js
```

### Project Information

Update project case studies in:

```txt
src/data/projects.js
```

Each project supports:

- `title`
- `slug`
- `summary`
- `problem`
- `solution`
- `description`
- `tech`
- `highlights`
- `githubUrl`
- `liveUrl`
- `featured`

The `slug` value controls the case study URL:

```txt
/projects/example-project-slug
```

## Adding a New Project

Add a new object to the `projects` array in `src/data/projects.js`:

```js
{
  title: "Project Name",
  slug: "project-name",
  summary: "Short project summary.",
  problem: "What problem the project solved.",
  solution: "How the project solved the problem.",
  description: "Longer project description.",
  tech: ["Astro", "JavaScript", "CSS"],
  highlights: [
    "Key accomplishment one",
    "Key accomplishment two",
  ],
  githubUrl: "https://github.com/username/repository",
  liveUrl: "",
  featured: true,
}
```

Astro uses the `slug` field to generate the individual case study page through:

```txt
src/pages/projects/[slug].astro
```

## Styling

Global styling is located in:

```txt
src/styles/global.css
```

The project uses reusable CSS classes for layout, project cards, buttons, tech badges, case-study panels, and responsive navigation.

Tech stacks are displayed as wrapping badges so project cards and case-study pages can grow naturally based on the number of technologies listed.

## Deployment

This site builds to static files, so it can be deployed to static hosting platforms such as:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

Before deploying, run:

```bash
npm run build
```

Then deploy the generated `dist/` folder according to the hosting provider's instructions.

## Repository Notes

Do not commit generated or local-only files such as:

```txt
node_modules/
dist/
.astro/
.env
*.zip
```

These are already covered in `.gitignore`.

## Author

**Lenier Ortiz**

- GitHub: [theweak1](https://github.com/theweak1)
- LinkedIn: [Lenier Ortiz Rodriguez](https://pr.linkedin.com/in/lenier-ortiz-rodriguez-089b3a26b)
