import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../content/blogs/posts';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post || !post.Component) {
    return (
      <div className="min-h-screen bg-shemma dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 pt-32 pb-16 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">The blog post you are looking for does not exist.</p>
        <Link
          to="/blog"
          className="px-6 py-2.5 bg-ethiopia-green text-white rounded-full font-bold hover:bg-ethiopia-green/80 transition-all inline-block"
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const MdxContent = post.Component;
  const postUrl = `https://nuredin.pro.et/blog/${post.slug}`;

  // Structured Data (JSON-LD) for Google Search SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.summary,
    'author': {
      '@type': 'Person',
      'name': post.author,
      'url': 'https://nuredin.pro.et',
    },
    'datePublished': post.date,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    'keywords': post.tags.join(', '),
  };

  return (
    <div className="min-h-screen bg-shemma dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 pt-24 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <Helmet>
        <title>{`${post.title} | Nuredin Kassaw`}</title>
        <meta name="description" content={post.summary} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <link rel="canonical" href={postUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:url" content={postUrl} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.summary} />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <article className="max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center text-sm font-semibold text-ethiopia-green hover:underline mb-8 transition-all"
        >
          ← Back to all articles
        </Link>

        <header className="mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-4">
            <span className="bg-ethiopia-yellow/20 text-yellow-800 dark:text-yellow-300 px-3 py-1 rounded-full font-semibold">
              {post.date}
            </span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>By {post.author}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2.5 py-1 rounded-md font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-zinc dark:prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:text-ethiopia-green">
          <MdxContent />
        </div>

        <footer className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <Link
            to="/blog"
            className="px-6 py-2.5 bg-ethiopia-green text-white rounded-full font-bold text-sm hover:bg-ethiopia-green/80 transition-all shadow-md"
          >
            ← Back to Blog
          </Link>

          <a
            href="https://www.linkedin.com/in/nuredin-kassaw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-zinc-600 dark:text-zinc-300 hover:text-ethiopia-yellow transition-colors"
          >
            Connect on LinkedIn →
          </a>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;
