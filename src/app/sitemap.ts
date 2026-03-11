import { MetadataRoute } from 'next';
import { siteData } from '@/lib/siteData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fincore.example.com'; // Replace with actual domain if known

  const routes = siteData.navItems.map((item) => ({
    url: `${baseUrl}${item.href}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...routes,
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];
}
