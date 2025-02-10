/**
 * Format a date string to Turkish locale
 */
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Create a URL-friendly slug from a string
 */
export function createSlug(str: string): string {
  const turkishMap: { [key: string]: string } = {
    'İ': 'i',
    'I': 'i',
    'ı': 'i',
    'Ğ': 'g',
    'ğ': 'g',
    'Ü': 'u',
    'ü': 'u',
    'Ş': 's',
    'ş': 's',
    'Ö': 'o',
    'ö': 'o',
    'Ç': 'c',
    'ç': 'c',
  };

  return str
    .split('')
    .map(char => turkishMap[char] || char.toLowerCase())
    .join('')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Truncate text to a specified length
 */
export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

/**
 * Validate article data
 */
export function validateArticle(article: any): boolean {
  return (
    typeof article.title === 'string' &&
    typeof article.excerpt === 'string' &&
    typeof article.image === 'string' &&
    typeof article.category === 'string' &&
    typeof article.date === 'string' &&
    typeof article.author === 'string' &&
    typeof article.href === 'string'
  );
} 