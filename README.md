# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```
ai-travel-planner
├─ .shadcn.json
├─ components.json
├─ eslint.config.js
├─ index.html
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ postcss.config.cjs
├─ public
│  ├─ logo.svg
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  │  ├─ custom
│  │  │  ├─ Header.jsx
│  │  │  ├─ Hero.jsx
│  │  │  └─ LocationSearch.jsx
│  │  └─ ui
│  │     ├─ button.jsx
│  │     └─ input.jsx
│  ├─ constants
│  │  └─ options.jsx
│  ├─ create-trip
│  │  └─ index.jsx
│  ├─ index.css
│  ├─ Layout.jsx
│  ├─ lib
│  │  └─ utils.js
│  └─ main.jsx
├─ tailwind.config.js
└─ vite.config.js

```