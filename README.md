# Portfolio v4

This is the fourth iteration of my personal portfolio, built with a focus on accessibility, performance, and "zero-friction" UX.

## 🏗 Tech Stack

* **Framework:** Next.js 16 (App Router)
* **Language:** TypeScript (Strict Mode)
* **Styling:** Tailwind CSS v4
* **Motion:** Framer Motion
* **Icons:** Lucide React
* **Deployment:** Vercel Edge Network

## ⚡ Performance Strategy

The site is engineered for a perfect **100/100 Lighthouse score**.

1. **Zero Layout Shift (CLS):** Fonts are preloaded via `next/font`.
2. **Interactive Spotlight:** Uses direct DOM manipulation via `useMotionValue` to avoid React render cycles on mouse movement.
3. **Accessibility:** Fully navigable via keyboard, correct semantic HTML5 tags, and ARIA labels for screen readers.

## 🎨 Design Philosophy

### Obsidian Theme
- **Background:** Deep charcoal (`#0a0a0a`) - not pure black for reduced eye strain
- **Surface:** Slightly lighter (`#111111`) for cards/sections
- **Primary:** Emerald (`#10b981`) - Software Stability
- **Typography:** Refined slate colors for optimal contrast and readability

### Senior-Level Features
- **Spotlight Effect:** Dynamic mouse-tracking radial gradient for premium feel
- **40/60 Layout:** Tighter grid system for better visual hierarchy
- **Hover Interactions:** Experience cards dim others on hover for focus
- **Max-width Constraints:** Text never exceeds 60-75 characters for readability

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## 🏛️ Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx             # Main portfolio page
│   │   └── globals.css          # Global styles & Tailwind
│   ├── components/
│   │   ├── About.tsx            # About section component
│   │   ├── ExperienceCard.tsx   # Reusable experience component
│   │   └── Spotlight.tsx        # Mouse-tracking spotlight effect
│   └── lib/
│       └── utils.ts             # Utility functions (cn helper)
├── tailwind.config.ts           # Tailwind configuration
└── package.json
```

## ✨ Key Features

- **Responsive Design:** Mobile-first approach with sticky sidebar on desktop
- **Smooth Animations:** Framer Motion for scroll-triggered animations
- **Accessibility:** Semantic HTML, ARIA labels, keyboard navigation
- **Performance:** Optimized fonts, code splitting, zero layout shift
- **SEO:** OpenGraph metadata for social sharing
- **Type Safety:** Full TypeScript coverage

## 🎯 Experience Card Format

Uses the **XYZ Formula** for descriptions:
> "Accomplished [X] as measured by [Y], by doing [Z]"

Example:
> "Spearheaded the migration of a legacy jQuery monolith to Next.js 14, reducing page load times by 40% and improving SEO rankings."

## 🔧 Customization

1. **Update Personal Info:** Edit `src/app/page.tsx`
2. **Modify About Section:** Edit `src/components/About.tsx`
3. **Add Experience:** Add more `ExperienceCard` components
4. **Change Colors:** Update `src/app/globals.css` and `tailwind.config.ts`
5. **Update Metadata:** Edit `src/app/layout.tsx`

## 🚢 Deployment

Deploy easily to:
- **Vercel** (recommended for Next.js) - Edge Network
- **Netlify**
- **AWS Amplify**
- Any platform supporting Next.js

## 📝 Git Commit Strategy

This project follows clean, granular commits:
- Configuration commits
- Feature commits
- Component commits
- Layout commits

## 🎓 Senior Engineering Practices

- ✅ Utility functions for class merging (`cn` helper)
- ✅ TypeScript interfaces for type safety
- ✅ Reusable components with proper props
- ✅ Mobile-first responsive design
- ✅ Performance optimizations (zero CLS, optimized fonts)
- ✅ Accessibility considerations (ARIA, semantic HTML)
- ✅ Clean git history
- ✅ Advanced CSS animations (Spotlight effect)
- ✅ Strategic color hierarchy

## 📄 License

MIT

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
