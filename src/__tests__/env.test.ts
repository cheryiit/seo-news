import { describe, it, expect } from 'vitest';

describe('Environment Variables', () => {
  const requiredEnvVars = [
    'PUBLIC_SITE_TITLE',
    'PUBLIC_SITE_DESCRIPTION',
    'PUBLIC_SITE_URL',
    'PUBLIC_WP_GRAPHQL_URL',
  ];

  it('should have all required environment variables', () => {
    requiredEnvVars.forEach(envVar => {
      expect(process.env[envVar]).toBeDefined();
      expect(process.env[envVar]).not.toBe('');
    });
  });

  it('should have valid URL format for endpoints', () => {
    const urlPattern = /^https?:\/\/.+/;
    expect(process.env.PUBLIC_SITE_URL).toMatch(urlPattern);
    expect(process.env.PUBLIC_WP_GRAPHQL_URL).toMatch(urlPattern);
  });

  it('should have non-empty title and description', () => {
    expect(process.env.PUBLIC_SITE_TITLE?.length).toBeGreaterThan(0);
    expect(process.env.PUBLIC_SITE_DESCRIPTION?.length).toBeGreaterThan(0);
  });
}); 