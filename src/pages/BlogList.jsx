import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../content/blogs/posts';

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  // Collect all unique tags across posts
  const allTags = useMemo(() => {
    const tagsSet = new Set();
    blogPosts.forEach(post => post.tags.forEach(tag => tagsSet.add(tag)));
    return ['All', ...Array.from(tagsSet)];
  }, []);

  // Filter posts based on search term and selected tag
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            post.summary.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [searchTerm, selectedTag]);

  return (
    <div className="min-h-screen bg-shemma dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 pt-24 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <Helmet>
        <title>Blog | Nuredin Kassaw - Software Engineer & Tech Insights</title>
        <meta name="description" content="Explore articles and insights by Nuredin Kassaw on software engineering, AI revolution in Ethiopia, web development, React, and technology." />
        <meta name="keywords" content="Nuredin Kassaw, Blog, Software Engineering, AI Ethiopia, Tech Insights, React, Web Development" />
        <link rel="canonical" href="https://nuredin.pro.et/blog" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Blog | Nuredin Kassaw - Tech Insights & Articles" />
        <meta property="og:description" content="Explore articles and insights on software engineering, AI in Ethiopia, and modern web development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nuredin.pro.et/blog" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | Nuredin Kassaw" />
        <meta name="twitter:description" content="Articles and insights on software engineering and artificial intelligence." />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            <span className="text-ethiopia-green">Nuredin&apos;s</span>{' '}
            <span className="text-ethiopia-yellow dark:text-yellow-400">Blog &amp;</span>{' '}
            <span className="text-ethiopia-red">Insights</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Thoughts, technical guides, and reflections on technology, software engineering, and AI.
          </p>
        </header>

        {/* Search & Filter bar */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-ethiopia-green shadow-sm text-sm"
          />

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedTag === tag
                    ? 'bg-ethiopia-green text-white shadow-md'
                    : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Article Grid / Cards */}
        {filteredPosts.length > 0 ? (
          <div className="grid gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700/60 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-3">
                  <span className="bg-ethiopia-yellow/20 text-yellow-800 dark:text-yellow-300 px-2.5 py-1 rounded-full">
                    {post.date}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>By {post.author}</span>
                </div>

                <h2 className="text-2xl font-bold mb-3 hover:text-ethiopia-green transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed mb-6">
                  {post.summary}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 px-2.5 py-1 rounded-md font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-bold text-ethiopia-green hover:text-ethiopia-green/80 group"
                  >
                    Read article
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700">
            <p className="text-lg text-zinc-500 dark:text-zinc-400">No blog posts found matching your filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
