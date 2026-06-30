# Plant Monitoring System

A React-based dashboard concept for monitoring indoor plant health — sensor-style moisture/temperature readouts, per-plant detail views, historical trends, and configurable alert thresholds.

**Tech stack:** React 19, Vite, React Router, Tailwind CSS, lucide-react icons

## Features

- **Dashboard** — overview cards for each plant showing moisture, temperature, and health status
- **Plant Detail** — dynamic per-plant view using `useParams`, showing care metadata (watering schedule, light needs, humidity)
- **Health History** — historical trends, recent alerts, and aggregate system stats
- **System Config** — adjustable alert thresholds for moisture and temperature
- **Plant Collection / About / Contact** — supporting marketing-style pages

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

Then open the local URL Vite prints in your terminal (usually `http://localhost:5173`).

To build for production:

\`\`\`bash
npm run build
\`\`\`

## Notes

This is a front-end prototype — all plant data is currently mocked/hardcoded rather than pulled from a live sensor or database, which would be the natural next step (e.g. via a small Node/Express API or Firebase).
