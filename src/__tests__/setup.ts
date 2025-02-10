import { beforeAll } from 'vitest';

beforeAll(() => {
  // Set up environment variables for testing
  process.env.PUBLIC_SITE_TITLE = 'SEO News Test';
  process.env.PUBLIC_SITE_DESCRIPTION = 'Test Description';
  process.env.PUBLIC_SITE_URL = 'http://localhost:3000';
  process.env.PUBLIC_WP_GRAPHQL_URL = 'http://localhost:8000/graphql';
}); 