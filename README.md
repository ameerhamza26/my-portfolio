# Ameer Hamza · Portfolio

Source code for my personal portfolio: **[ameerhamza.me](https://www.ameerhamza.me)**

A single-page site covering my experience, projects, skills, writing and contact
details. I'm a Technical Lead working on backend and cloud platforms (Java, Go,
AWS, Kubernetes).

## Tech stack

- **React 18** + **TypeScript**
- **Vite** for development and builds
- **Tailwind CSS** for styling
- **lucide-react** for icons

## Project structure

```
src/
├── data/profile.ts      # All site content: profile, jobs, projects, articles
├── components/          # Page sections (Hero, About, Experience, Projects, ...)
│   └── ui/              # Shared UI pieces (Section, SocialLinks)
├── hooks/useInView.ts   # Scroll-reveal animations
└── App.tsx
public/
├── resume.pdf
├── robots.txt
└── sitemap.xml
```

All content lives in `src/data/profile.ts`. To update the site, edit that file
and leave the components alone.

## Running locally

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build in dist/
npm run preview   # preview the production build
npm run lint
```

## Contact

- Website: [ameerhamza.me](https://www.ameerhamza.me)
- LinkedIn: [engineerameerhamza](https://www.linkedin.com/in/engineerameerhamza/)
- Medium: [@ameerhamza_6048](https://medium.com/@ameerhamza_6048)
