# Project Images Directory

This folder contains images for your portfolio projects.

## Structure

```
public/
  images/
    projects/
      ├── ai-sentiment-analysis/
      │   ├── screenshot-1.jpg
      │   ├── screenshot-2.jpg
      │   └── screenshot-3.jpg
      ├── travel-tracker/
      │   ├── screenshot-1.jpg
      │   └── screenshot-2.jpg
      └── portfolio-v4/
          ├── screenshot-1.jpg
          └── screenshot-2.jpg
```

## Usage

To use images in your `ProjectCard` components, reference them like this:

```tsx
images={[
  "/images/projects/ai-sentiment-analysis/screenshot-1.jpg",
  "/images/projects/ai-sentiment-analysis/screenshot-2.jpg"
]}
```

## Image Guidelines

- **Format:** JPG or PNG
- **Size:** Recommended 1200x800px or similar aspect ratio
- **Optimization:** Compress images before uploading for better performance
- **Naming:** Use descriptive names like `screenshot-1.jpg`, `demo.jpg`, `mobile-view.jpg`

