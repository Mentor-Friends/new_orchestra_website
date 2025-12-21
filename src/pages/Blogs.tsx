import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react';

export function Blogs() {
  const featuredPost = {
    title: 'The Future of AI Agent Marketplaces: Why Certification Matters',
    excerpt: 'Exploring how standardized certification frameworks are transforming the AI agent ecosystem and enabling enterprise adoption at scale.',
    author: 'Sarah Chen',
    date: 'Dec 10, 2024',
    readTime: '8 min read',
    category: 'Industry Insights',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
  };

  const posts = [
    {
      title: 'Building Your First Certified AI Agent: A Complete Guide',
      excerpt: 'Step-by-step walkthrough of creating, testing, and certifying an AI agent for the A2A Orchestra marketplace.',
      author: 'Michael Torres',
      date: 'Dec 8, 2024',
      readTime: '12 min read',
      category: 'Technical',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=250&fit=crop',
    },
    {
      title: 'Zero-Trust Security in AI: Beyond the Hype',
      excerpt: 'Understanding the architecture and implementation of zero-trust security for production AI agents.',
      author: 'Alex Kumar',
      date: 'Dec 5, 2024',
      readTime: '10 min read',
      category: 'Security',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop',
    },
    {
      title: 'Revenue Models for AI Agent Creators: Maximizing Your Earnings',
      excerpt: 'Strategies for pricing, marketing, and scaling your AI agents to maximize revenue in the marketplace.',
      author: 'Emma Rodriguez',
      date: 'Dec 3, 2024',
      readTime: '7 min read',
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    },
    {
      title: 'The 4-Metric Framework: Deep Dive into Agent Certification',
      excerpt: 'Comprehensive analysis of Intelligence, Autonomy, Reasoning, and Neural Efficiency metrics.',
      author: 'Dr. James Liu',
      date: 'Nov 30, 2024',
      readTime: '15 min read',
      category: 'Technical',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    },
    {
      title: 'Case Study: How Acme Corp Deployed 50+ AI Agents in 3 Months',
      excerpt: 'Real-world success story of enterprise AI adoption using the A2A Orchestra platform.',
      author: 'Sarah Chen',
      date: 'Nov 28, 2024',
      readTime: '9 min read',
      category: 'Case Studies',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
    },
    {
      title: 'Neural Efficiency Optimization: Advanced Techniques',
      excerpt: 'Advanced strategies for optimizing AI agent performance and resource utilization.',
      author: 'Michael Torres',
      date: 'Nov 25, 2024',
      readTime: '11 min read',
      category: 'Technical',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop',
    },
  ];

  const categories = [
    'All Posts',
    'Technical',
    'Industry Insights',
    'Security',
    'Business',
    'Case Studies',
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="mb-6">
              Learn, Build & Grow
              <br />
              <span className="text-cyan-300">
                with A2A Orchestra
              </span>
            </h1>

            <p className="text-white/70 text-lg">
              Insights, tutorials, and stories from the world of AI agent development and deployment
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-20"
          >
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative bg-[#0f0f0f]/80 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-white/20 overflow-hidden transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-lg bg-blue-600 text-sm">Featured</span>
                    </div>
                  </div>
                  <div className="p-10 lg:p-12 flex flex-col justify-center">
                    <span className="text-blue-400 text-sm mb-4">{featuredPost.category}</span>
                    <h2 className="mb-4 text-2xl lg:text-3xl">{featuredPost.title}</h2>
                    <p className="text-white/60 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-6 text-sm text-white/50 mb-6">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-blue-400 group-hover:gap-3 transition-all"
                    >
                      Read Full Article
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-lg transition-all duration-200 ${category === 'All Posts'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/70 hover:text-white'
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <a href="#" className="group block h-full">
                  <div className="relative h-full">
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                    <div className="relative bg-[#0f0f0f]/90 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-white/20 overflow-hidden transition-all duration-300 h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2 py-1 rounded bg-black/70 backdrop-blur-sm text-xs text-white/90">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="mb-3 text-lg group-hover:text-blue-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-white/60 mb-4 flex-1">{post.excerpt}</p>
                        <div className="flex items-center gap-4 text-xs text-white/50 mb-4">
                          <div className="flex items-center gap-1">
                            <User size={14} />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-white/50">{post.readTime}</span>
                          <span className="text-blue-400 group-hover:gap-2 inline-flex items-center gap-1 transition-all text-sm">
                            Read More
                            <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-30" />
              <div className="relative bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl border border-white/20 p-12 lg:p-16 text-center">
                <h2 className="mb-4">Stay Updated</h2>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Get the latest insights, tutorials, and updates delivered to your inbox every week
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}