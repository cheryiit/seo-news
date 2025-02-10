# SEO News Website

A modern, SEO-optimized news website built with Astro and Headless WordPress. This project provides a fast, responsive, and user-friendly platform for delivering news content with optimal search engine visibility.

## Features

- 🚀 Built with Astro for optimal performance
- 🎯 SEO-optimized with structured data and meta tags
- 📱 Fully responsive design
- 🔄 Dynamic content from Headless WordPress
- 🌐 GraphQL integration for efficient data fetching
- 🖼️ Optimized image loading and processing
- 📰 Breaking news ticker
- 🔍 Category-based navigation
- 📱 Mobile-friendly navigation
- 🌍 Multi-language support (Turkish)
- 📊 Social sharing capabilities
- 🗺️ XML sitemap generation

## Tech Stack

- **Frontend Framework:** Astro
- **CMS:** Headless WordPress
- **Styling:** Tailwind CSS
- **Data Fetching:** GraphQL
- **Deployment:** Vercel

## Prerequisites

- Node.js 18.x or higher
- WordPress installation with GraphQL plugin
- Vercel account (for deployment)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/seo-news.git
   cd seo-news
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   PUBLIC_WP_GRAPHQL_URL=https://your-wordpress-site.com/graphql
   PUBLIC_SITE_URL=https://your-domain.com
   PUBLIC_SITE_TITLE="SEO News"
   PUBLIC_SITE_DESCRIPTION="Your trusted source for the latest news and updates"
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── components/    # Reusable UI components
├── layouts/       # Page layouts
├── lib/          # Utility functions and API calls
├── pages/        # Route pages
└── env.d.ts      # TypeScript declarations
public/           # Static assets
```

## WordPress Setup

1. Install and activate the following WordPress plugins:
   - WPGraphQL
   - Advanced Custom Fields
   - ACF to WPGraphQL

2. Configure CORS in your WordPress installation to allow requests from your frontend domain.

3. Create the necessary categories in WordPress that match the frontend navigation.

## Development

- Run development server:
  ```bash
  npm run dev
  ```

- Build for production:
  ```bash
  npm run build
  ```

- Preview production build:
  ```bash
  npm run preview
  ```

## Deployment

1. Connect your repository to Vercel.
2. Configure the environment variables in Vercel dashboard.
3. Deploy using the Vercel CLI or GitHub integration.

## SEO Features

- Structured data for articles
- OpenGraph and Twitter card meta tags
- Automatic XML sitemap generation
- Semantic HTML structure
- Optimized meta descriptions and titles
- Mobile-friendly design
- Fast loading times

## Performance Optimization

- Static site generation for core pages
- Image optimization and lazy loading
- Minimal JavaScript usage
- CDN integration through Vercel
- Efficient data fetching with GraphQL

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspired by [halktv.com.tr](https://halktv.com.tr)
- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com) 