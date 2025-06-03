
import React from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Design: Trends to Watch in 2025',
    excerpt: 'Exploring the latest design trends including AI-powered layouts, immersive experiences, and sustainable web practices.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb',
    category: 'Design Trends',
    date: '2025-01-15',
    readTime: '5 min read',
    tags: ['UI/UX', 'Trends', 'Web Design']
  },
  {
    id: 2,
    title: 'Building Accessible Interfaces: A Complete Guide',
    excerpt: 'Learn how to create inclusive designs that work for everyone, with practical tips and real-world examples.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e',
    category: 'Accessibility',
    date: '2025-02-10',
    readTime: '8 min read',
    tags: ['Accessibility', 'Frontend', 'Best Practices']
  },
  {
    id: 3,
    title: 'Mastering CSS Grid and Flexbox in 2025',
    excerpt: 'Advanced layout techniques and practical examples to create stunning, responsive designs with modern CSS.',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0',
    category: 'Development',
    date: '2025-01-25',
    readTime: '6 min read',
    tags: ['CSS', 'Layout', 'Responsive']
  }
];

const BlogPreview: React.FC = () => {
  return (
    <section id="blog" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-[80px] ">Latest Articles</h2>
          <div className="h-1 w-20 bg-portfolio-accent mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on design and development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="glass-card rounded-3xl overflow-hidden card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Featured Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-portfolio-primary text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta information */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                <div className="flex items-center justify-between">
                  <a
                    href={`#blog-${post.id}`}
                    className="flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300 group/link"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href="#all-posts"
            className="btn-primary inline-flex items-center gap-2"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
