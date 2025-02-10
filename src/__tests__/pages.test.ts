import { describe, it, expect } from 'vitest';
import { validateArticle } from '../lib/utils';

describe('Index Page', () => {
  const mockArticles = [{
    title: 'Test Article',
    excerpt: 'This is a test article excerpt',
    image: '/images/test-article.jpg',
    category: 'SİYASET',
    date: new Date(),
    author: 'Test Author',
    href: '/haber/test-article'
  }];

  it('should have valid article data structure', () => {
    mockArticles.forEach(article => {
      expect(() => validateArticle(article)).not.toThrow();
    });
  });

  it('should have valid category names', () => {
    const validCategories = ['SİYASET', 'EKONOMİ', 'DÜNYA', 'TÜRKİYE', 'SPOR', 'SAĞLIK'];
    mockArticles.forEach(article => {
      expect(validCategories).toContain(article.category);
    });
  });

  it('should have valid date format', () => {
    mockArticles.forEach(article => {
      expect(article.date).toBeInstanceOf(Date);
    });
  });

  it('should have valid image paths', () => {
    mockArticles.forEach(article => {
      expect(article.image).toMatch(/^\/images\/.+\.(jpg|jpeg|png|webp)$/);
    });
  });

  it('should have valid href format', () => {
    mockArticles.forEach(article => {
      expect(article.href).toMatch(/^\/haber\//);
    });
  });
}); 