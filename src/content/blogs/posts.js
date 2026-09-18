// Auto-discover all MDX blog posts dynamically using Vite's import.meta.glob
const mdxModules = import.meta.glob('./*.mdx', { eager: true });

export const blogPosts = Object.keys(mdxModules).map((filePath) => {
  const mod = mdxModules[filePath];
  // Extract slug from filename (e.g. './my-post.mdx' -> 'my-post')
  const slug = filePath.replace(/^\.\//, '').replace(/\.mdx$/, '');

  // Retrieve metadata from MDX frontmatter export (or fallback to empty defaults)
  const meta = mod.frontmatter || mod.metadata || {};

  return {
    slug,
    title: meta.title || slug.replace(/-/g, ' '),
    date: meta.date || '',
    author: meta.author || 'Nuredin Kassaw',
    readTime: meta.readTime || '3 min read',
    tags: Array.isArray(meta.tags) ? meta.tags : [],
    summary: meta.summary || '',
    Component: mod.default,
  };
}).sort((a, b) => new Date(b.date) - new Date(a.date));
