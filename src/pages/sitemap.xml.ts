import { getAllArticles, getAllCategories } from '../lib/wordpress';
import type { APIRoute } from 'astro';

const SITE_URL = import.meta.env.PUBLIC_SITE_URL;

function formatDate(date: string) {
  return new Date(date).toISOString();
}

export const GET: APIRoute = async () => {
  const articles = await getAllArticles();
  const categories = await getAllCategories();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${formatDate(new Date().toISOString())}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${categories
    .map(
      (category) => `
  <url>
    <loc>${SITE_URL}/kategori/${category.slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('')}
  ${articles
    .map(
      (article) => `
  <url>
    <loc>${SITE_URL}${article.href}</loc>
    <lastmod>${formatDate(article.date)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}; 