/// <reference types="astro/client" />

interface Article {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  href: string;
}

interface Category {
  name: string;
  slug: string;
  description?: string;
}

const GRAPHQL_ENDPOINT = import.meta.env.PUBLIC_WP_GRAPHQL_URL;

async function fetchAPI(query: string, variables = {}) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

  try {
    if (!GRAPHQL_ENDPOINT) {
      throw new Error('WordPress GraphQL endpoint is not configured');
    }

    const res = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const json = await res.json();

    if (json.errors) {
      console.error('GraphQL Errors:', json.errors);
      throw new Error(json.errors[0]?.message || 'Failed to fetch API');
    }

    return json.data;
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('Request timeout: The server took too long to respond');
      }
      console.error('Error fetching from WordPress:', error.message);
      throw error;
    }
    throw new Error('An unknown error occurred');
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function getAllArticles(): Promise<Article[]> {
  const data = await fetchAPI(`
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          title
          excerpt
          slug
          date
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          author {
            node {
              name
            }
          }
        }
      }
    }
  `);

  return data.posts.nodes.map((post: any) => ({
    title: post.title,
    excerpt: post.excerpt.replace(/<[^>]*>/g, ''),
    image: post.featuredImage?.node?.sourceUrl || '/images/placeholder.jpg',
    category: post.categories?.nodes[0]?.name || 'GENEL',
    date: post.date,
    author: post.author?.node?.name || 'SEO News',
    href: `/haber/${post.slug}`,
  }));
}

export async function getArticlesByCategory(
  category: string,
  limit = 10
): Promise<Article[]> {
  const data = await fetchAPI(
    `
    query PostsByCategory($category: String!, $limit: Int!) {
      posts(
        first: $limit
        where: {
          categoryName: $category
          orderby: { field: DATE, order: DESC }
        }
      ) {
        nodes {
          title
          excerpt
          slug
          date
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          author {
            node {
              name
            }
          }
        }
      }
    }
  `,
    {
      category,
      limit,
    }
  );

  return data.posts.nodes.map((post: any) => ({
    title: post.title,
    excerpt: post.excerpt.replace(/<[^>]*>/g, ''),
    image: post.featuredImage?.node?.sourceUrl || '/images/placeholder.jpg',
    category: post.categories?.nodes[0]?.name || 'GENEL',
    date: post.date,
    author: post.author?.node?.name || 'SEO News',
    href: `/haber/${post.slug}`,
  }));
}

export async function getAllCategories(): Promise<Category[]> {
  const data = await fetchAPI(`
    query AllCategories {
      categories(first: 100) {
        nodes {
          name
          slug
          description
        }
      }
    }
  `);

  return data.categories.nodes;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        title
        excerpt
        slug
        date
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  `,
    {
      slug,
    }
  );

  if (!data.post) return null;

  return {
    title: data.post.title,
    excerpt: data.post.excerpt.replace(/<[^>]*>/g, ''),
    image: data.post.featuredImage?.node?.sourceUrl || '/images/placeholder.jpg',
    category: data.post.categories?.nodes[0]?.name || 'GENEL',
    date: data.post.date,
    author: data.post.author?.node?.name || 'SEO News',
    href: `/haber/${data.post.slug}`,
  };
} 