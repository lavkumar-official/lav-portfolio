# Portfolio Client

This folder contains the React frontend for the portfolio website. It is built with Vite and focuses on a polished single-page experience with animated sections, responsive layouts, and reusable UI components.

## What is included

- A hero section with animated typing, social links, and resume download.
- About, Skills, Projects, Certifications, Education, and Contact sections.
- Theme switching with light and dark mode support.
- Responsive navigation with mobile menu behavior.
- Contact form integration with the backend API.
- Bundled static assets such as profile images and the resume PDF.

## Tech Stack

- React 19
- Vite 8
- Font Awesome for icons
- ESLint for linting
- CSS custom properties for theming and design tokens

## Project Structure

```text
client/
	index.html
	package.json
	vite.config.js
	eslint.config.js
	public/
	src/
		App.jsx
		main.jsx
		index.css
		App.css
		assets/
		components/
			About.jsx
			Certifications.jsx
			Experience.jsx
			Hero.jsx
			Navbar.jsx
			Projects.jsx
			Skills.jsx
```

## Prerequisites

- Node.js 18 or newer
- npm 9 or newer

## Install

Install dependencies from the repository root:

```bash
npm run install-all
```

Or install only the client dependencies:

```bash
cd client
npm install
```

If you need the backend as well, install the server dependencies from the root with `npm run install-all` or from the server folder with `npm install --prefix server`.

## Available Scripts

Run these from the `client` folder unless noted otherwise.

- `npm run dev` - start the Vite development server with hot reload.
- `npm run build` - create an optimized production build in `dist/`.
- `npm run preview` - preview the production build locally.
- `npm run lint` - run ESLint across the client source files.

From the repository root:

- `npm run client` - start only the frontend.
- `npm run server` - start only the backend.
- `npm run dev` - run frontend and backend together with `concurrently`.
- `npm run build` - build the frontend.

## Development

Start the client only:

```bash
cd client
npm run dev
```

Start the full stack from the repository root:

```bash
npm run dev
```

The Vite dev server normally runs on `http://localhost:5173`, but it can move to the next free port if that port is already occupied.

## Backend and Contact Form

The contact form submits data to `POST /api/contact`.

- In development, run the Node server so form submissions are received and logged.
- In production, the server can also serve the built frontend from `client/dist` when `NODE_ENV=production`.

The backend currently defaults to port `80` through `server/index.js`, but you can override it with the `PORT` environment variable.

Example:

```bash
PORT=80 NODE_ENV=production node server/index.js
```

## Assets

- Resume PDF: `src/assets/Lav_Kumar_Resume.pdf`
- Profile image and project screenshots are bundled from `src/assets/`

Import assets directly from `src/assets` when you want Vite to include them in the final build output.

## Styling and Theme

- Theme colors, spacing, shadows, and transitions are driven by CSS variables in `src/index.css`.
- Light and dark mode are controlled by the `data-theme` attribute.
- The navbar and skills section use icon accents and reveal animations for a more expressive visual style.

## Build and Deploy

Create a production build with:

```bash
cd client
npm run build
```

The generated files are placed in `client/dist/`.

Deployment options:

- Static hosting such as Netlify, Vercel, or S3 for the client build.
- The Node server in production mode, which serves the built client and the API together.

## Linting

Run the linter before committing changes:

```bash
cd client
npm run lint
```

## Troubleshooting

- If a port is already in use, Vite will choose another available port automatically.
- If the contact form does not work, make sure the backend server is running.
- If the site looks blank after a change, check the browser console for JSX or import errors and rebuild the client.
- Do not commit `dist/` to source control because it is a generated build artifact.

## Notes

- The portfolio is designed as a single-page experience with section-based navigation.
- Keep component and asset names consistent so the resume download and project images continue to work after future updates.
