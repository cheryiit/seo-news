/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_WP_GRAPHQL_URL: string;
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_SITE_TITLE: string;
  readonly PUBLIC_SITE_DESCRIPTION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 