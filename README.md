# Nikita Velicko — Portfolio

Personal portfolio website built with Vue 3 and Vite. Showcases my projects, tech stack, and contact information.

**Live:** [nikita-velicko.dev](https://nikita-velicko.dev) *(update with your actual URL)*

---

## Stack

| Technology | Purpose |
|---|---|
| Vue 3 | UI framework (Composition API + SFCs) |
| Vite | Build tool & dev server |
| GSAP | Hero entrance animations |
| Swiper | Project carousel |
| SCSS | Styling with variables & scoped components |
| Font Awesome | Icons |

---

## Sections

- **Hero** — name, role, CTA buttons, animated visual
- **About Me** — background, skills focus, and personal traits
- **Projects** — card-based project showcase with links
- **Tech Stack** — technologies I work with
- **Contact** — phone, email, GitHub, LinkedIn

---

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── HeroSection.vue
│   │   ├── HeroVisual.vue
│   │   ├── AboutSection.vue
│   │   ├── ProjectSection.vue
│   │   ├── TechSection.vue
│   │   └── ContactSection.vue
│   └── AppFooter.vue
├── composables/
│   └── useAnimation.js
├── styles/
│   ├── _variables.scss
│   └── main.scss
└── App.vue
```

---

## License

© 2026 Nikita Velicko. All rights reserved. See [LICENSE](LICENSE) for details.
