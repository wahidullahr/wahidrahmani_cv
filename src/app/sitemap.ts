import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wahid-portfolio.com';
  
  // Generate sitemap entries for all locales
  const routes = ['', '/contact']; // Add more routes as needed
  
  const sitemapEntries: MetadataRoute.Sitemap = [];
  
  // Create entries for each locale and route combination
  routing.locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });
  });
  
  return sitemapEntries;
}

