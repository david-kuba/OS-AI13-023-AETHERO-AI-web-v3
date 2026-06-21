import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const env = loadEnv('', process.cwd(), 'STORYBLOK');

export default defineConfig({
  output: 'static',
  site: 'https://aethero.agency',
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        blog_post: 'storyblok/BlogPost',
        case_study: 'storyblok/CaseStudy',
      },
      apiOptions: { region: 'eu' },
    }),
    sitemap({
      i18n: {
        defaultLocale: 'cs',
        locales: { cs: 'cs-CZ', en: 'en-US' },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'en'],
    routing: { prefixDefaultLocale: true },
  },
});
