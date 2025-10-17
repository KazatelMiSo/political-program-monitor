# Political Program Monitor

This repository contains the skeleton for a full‑stack application that monitors
political party programmes, tracks parliamentary bills and votes, and provides
a dynamic, themeable front‑end.  It is split into two folders:

* **`frontend`** – a Next.js 13/14 app (using the new App Router) with
  TypeScript and Tailwind CSS.  It includes basic dark‑mode support and
  demonstrates how to load per‑party themes from a configuration file.
* **`backend`** – a minimal NestJS application that exposes a single
  controller (`/`) returning a welcome message.  It is ready to be
  extended with program points, promises and bill tracking logic.

## Usage

These steps outline how to set up the project on your machine.  They assume
that you have a recent version of Node.js (≥ 18) and npm installed.  The
commands below do not execute inside this repository because network access
was disabled during scaffolding; however, you should run them locally to
install dependencies and start the apps.

```bash
# install dependencies for both parts
cd frontend
npm install

cd ../backend
npm install

# run the back‑end on port 3001
npm run start

# in a separate terminal, run the front‑end on port 3000
cd ../frontend
npm run dev

```

## Dynamic Theming

The front‑end uses Tailwind CSS and CSS variables to support both light and
dark modes.  In addition, you can define per‑party themes in
`src/theme/partyThemes.ts`.  Each theme specifies a primary colour,
secondary colour and font.  The `RootLayout` component loads the global
styles and sets the body classes (`dark` vs. default).  Within your pages
and components you can read the current party theme and apply its values to
Tailwind classes or inline styles.

## Structure

```
political-program-monitor/
│
├── frontend/
│   ├── package.json         # dependencies and scripts for Next.js
│   ├── tsconfig.json        # TypeScript compiler options
│   ├── next.config.js       # Next.js configuration
│   ├── postcss.config.js    # PostCSS configuration (Tailwind)
│   ├── tailwind.config.js   # Tailwind configuration
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx   # root layout component
│   │   │   ├── page.tsx     # example home page
│   │   │   └── globals.css  # global CSS imports for Tailwind
│   │   └── theme/
│   │       └── partyThemes.ts  # list of party themes
│   └── ...
│
└── backend/
    ├── package.json         # dependencies and scripts for NestJS
    ├── tsconfig.json        # TypeScript compiler options
    ├── nest-cli.json        # Nest CLI configuration
    └── src/
        ├── main.ts          # application entry point
        ├── app.module.ts    # root module
        ├── app.controller.ts# example controller
        └── app.service.ts   # example service
```

## Next Steps

* Extend the **backend** data model to include entities for `Party`,
  `ProgramPoint`, `Promise`, `Bill`, `Vote`, etc.
* Implement ETL scripts to scrape programmes and parliamentary data and
  store them in a database (e.g. PostgreSQL).
* Expand the **frontend** with pages to display lists of parties,
  program points, details of promises and votes, and a comparison dashboard.
* Use the per‑party themes to automatically adjust colours and fonts based
  on the selected party.
