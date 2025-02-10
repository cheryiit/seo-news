import { describe, it, expect } from 'vitest';
import { formatDate, createSlug, truncateText, validateArticle } from '../lib/utils';

describe('Utility Functions', () => {
  describe('formatDate', () => {
    it('should format date to Turkish locale', () => {
      const date = '2024-02-10T08:33:00';
      const formatted = formatDate(date);
      expect(formatted).toContain('2024');
      expect(formatted).toContain('Şubat');
      expect(formatted).toContain('10');
    });
  });

  describe('createSlug', () => {
    it('should create URL-friendly slug from Turkish text', () => {
      const text = 'İstanbul\'dan Haberler & Güncel Gelişmeler';
      const slug = createSlug(text);
      expect(slug).toBe('istanbul-dan-haberler-guncel-gelismeler');
    });

    it('should handle special characters and spaces', () => {
      const text = '  Özel & Çok Güzel!  ';
      const slug = createSlug(text);
      expect(slug).toBe('ozel-cok-guzel');
    });
  });

  describe('truncateText', () => {
    it('should truncate text to specified length', () => {
      const text = 'This is a very long text that needs to be truncated';
      const truncated = truncateText(text, 20);
      expect(truncated).toBe('This is a very long...');
      expect(truncated.length).toBeLessThanOrEqual(23); // 20 + '...'
    });

    it('should not truncate text shorter than limit', () => {
      const text = 'Short text';
      const truncated = truncateText(text, 20);
      expect(truncated).toBe(text);
    });
  });

  describe('validateArticle', () => {
    it('should validate correct article data', () => {
      const article = {
        title: 'Test Title',
        excerpt: 'Test excerpt',
        image: '/test.jpg',
        category: 'TEST',
        date: '2024-02-10',
        author: 'Test Author',
        href: '/test-article',
      };
      expect(validateArticle(article)).toBe(true);
    });

    it('should reject invalid article data', () => {
      const invalidArticle = {
        title: 'Test Title',
        // Missing required fields
      };
      expect(validateArticle(invalidArticle)).toBe(false);
    });
  });
}); 