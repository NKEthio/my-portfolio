import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      }),
    },
    react(),
    Sitemap({
      hostname: 'https://nuredin.pro.et',
      dynamicRoutes: [
        '/',
        '/blog',
        '/blog/is-ai-revolution-elusive-for-ethiopia',
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
