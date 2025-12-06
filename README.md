# Production-Grade Portfolio MVP

A senior-level, production-ready portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. This is not a tutorial—this is a **production-grade codebase** focused on **Architecture**, **Visual Hierarchy**, and **Performance**.

## 🏗️ Architecture

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom Obsidian theme
- **Framer Motion** for smooth animations
- **Component-based** architecture with reusable ExperienceCard

## 🎨 Design System

### Color Palette (Obsidian Theme)
- **Background**: `#0a0a0a` (Deep charcoal, not pure black)
- **Surface**: `#111111` (Slightly lighter for cards)
- **Primary**: `#10b981` (Emerald - Software Stability)
- **Text Primary**: `#ededed` (Almost white)
- **Text Secondary**: `#a1a1aa` (Zinc-400)

### Typography
- **Font**: Inter (via Next.js font optimization)
- **Smooth scrolling** enabled
- **Anti-aliasing** for crisp text on high-DPI screens

## 🚀 Getting Started

### Prerequisites
- Node.js >= 20.9.0 (required for Next.js 16)
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx         # Main portfolio page
│   │   └── globals.css      # Global styles & Tailwind
│   ├── components/
│   │   └── ExperienceCard.tsx  # Reusable experience component
│   └── lib/
│       └── utils.ts         # Utility functions (cn helper)
├── tailwind.config.ts       # Tailwind configuration
└── package.json
```

## ✨ Features

- **Responsive Design**: Mobile-first approach
- **Sticky Header**: Left sidebar stays fixed on desktop
- **Smooth Animations**: Framer Motion for scroll-triggered animations
- **Accessibility**: Semantic HTML, ARIA labels
- **Performance**: Optimized fonts, code splitting
- **SEO**: OpenGraph metadata for social sharing

## 🎯 Experience Card Format

Use the **XYZ Formula** for descriptions:
> "Accomplished [X] as measured by [Y], by doing [Z]"

Example:
> "Spearheaded the migration of a legacy jQuery monolith to Next.js 14, reducing page load times by 40% and improving SEO rankings."

## 🔧 Customization

1. **Update Personal Info**: Edit `src/app/page.tsx`
2. **Add Experience**: Add more `ExperienceCard` components
3. **Modify Colors**: Update `tailwind.config.ts`
4. **Change Metadata**: Edit `src/app/layout.tsx`

## 📦 Dependencies

- `next`: 16.0.7
- `react`: 19.2.0
- `framer-motion`: ^12.23.25
- `lucide-react`: ^0.556.0
- `clsx`: ^2.1.1
- `tailwind-merge`: ^3.4.0

## 🚢 Deployment

Deploy easily to:
- **Vercel** (recommended for Next.js)
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
- ✅ Reusable components
- ✅ Mobile-first responsive design
- ✅ Performance optimizations
- ✅ Accessibility considerations
- ✅ Clean git history

---

Built with ❤️ using Next.js and Tailwind CSS
