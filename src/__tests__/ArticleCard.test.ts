import { describe, it, expect } from 'vitest';
import { validateArticle } from '../lib/utils';

describe('ArticleCard', () => {
  const validArticle = {
    title: 'Test Article',
    excerpt: 'This is a test article',
    image: '/images/placeholder.svg',
    category: 'TEST',
    date: '2024-02-10T08:33:00',
    author: 'Test Author',
    href: '/test-article',
  };

  it('should validate article data structure', () => {
    expect(validateArticle(validArticle)).toBe(true);
  });

  it('should have required properties', () => {
    const requiredProps = ['title', 'excerpt', 'image', 'category', 'date', 'author', 'href'];
    requiredProps.forEach(prop => {
      expect(validArticle).toHaveProperty(prop);
    });
  });

  it('should have valid date format', () => {
    const date = new Date(validArticle.date);
    expect(date).toBeInstanceOf(Date);
    expect(date.getTime()).not.toBeNaN();
  });

  it('should have valid image path', () => {
    expect(validArticle.image).toMatch(/^\/images\//);
  });

  it('should have valid href format', () => {
    expect(validArticle.href).toMatch(/^\//);
  });
}); 