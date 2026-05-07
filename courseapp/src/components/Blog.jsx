import { motion } from 'framer-motion';
import {
  Search,
  Calendar,
  Clock,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Mail,
  Rocket,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.1 }
  },
  viewport: { once: true, margin: "-50px" }
};

const fadeInChild = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function BlogPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Courses', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const categories = ['All', 'Web Development', 'Backend', 'Career', 'AI & ML', 'Tools'];

  const categoryCounts = {
    'Web Development': 24,
    'Backend': 16,
    'Career': 12,
    'AI & ML': 10,
    'Tools': 8
  };

  const featuredPost = {
    title: 'How to Build a Full Stack App with React & Spring Boot',
    excerpt: 'A complete step-by-step guide to building a full stack application using React, Spring Boot, and MySQL.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80',
    date: 'May 12, 2024',
    readTime: '10 min read',
    category: 'Web Development'
  };

  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 VS Code Extensions Every Developer Should Use',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&auto=format&fit=crop&q=80',
      date: 'Apr 28, 2024',
      readTime: '6 min read',
      category: 'Tools'
    },
    {
      id: 2,
      title: 'Understanding REST APIs in Simple Terms',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80',
      date: 'Apr 24, 2024',
      readTime: '8 min read',
      category: 'Backend'
    },
    {
      id: 3,
      title: 'How to Crack Developer Interviews in 2024',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=80',
      date: 'Apr 20, 2024',
      readTime: '9 min read',
      category: 'Career'
    },
    {
      id: 4,
      title: 'Introduction to Generative AI',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop&q=80',
      date: 'Apr 18, 2024',
      readTime: '7 min read',
      category: 'AI & ML'
    },
    {
      id: 5,
      title: 'Spring Boot vs Node.js: Which to Choose?',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&auto=format&fit=crop&q=80',
      date: 'Apr 15, 2024',
      readTime: '7 min read',
      category: 'Backend'
    },
    {
      id: 6,
      title: '5 Project Ideas to Build Your Portfolio',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
      date: 'Apr 10, 2024',
      readTime: '6 min read',
      category: 'Web Development'
    }
  ];

  const popularPosts = [
    {
      id: 1,
      title: 'How I Became a Full Stack Developer',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=100&auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Best Roadmap for Web Developers',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100&auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'System Design Basics Every Developer Should Know',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      title: 'Git Commands You Should Know',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=100&auto=format&fit=crop&q=80'
    }
  ];

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <section className="pt-12 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-indigo-600 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Insights, Tutorials & Ideas
            </h1>
            <p className="text-gray-600 max-w-lg text-lg">
              Explore our blog for the latest tutorials, career advice, and industry insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative w-64 h-48">
              <div className="absolute top-0 right-0 w-32 h-40 bg-indigo-100 rounded-2xl rotate-6" />
              <div className="absolute top-4 right-8 w-32 h-40 bg-white border-2 border-indigo-200 rounded-2xl shadow-lg flex flex-col p-4 gap-2">
                <div className="h-2 bg-indigo-200 rounded w-3/4" />
                <div className="h-2 bg-gray-200 rounded w-full" />
                <div className="h-2 bg-gray-200 rounded w-5/6" />
                <div className="mt-auto flex gap-2">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg" />
                  <div className="w-8 h-8 bg-purple-500 rounded-lg" />
                </div>
              </div>
              <div className="absolute bottom-0 right-20 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Rocket className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10">
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-sm"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full lg:w-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <span className="text-sm text-gray-500">Sort By</span>
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Latest <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold w-fit mb-4">
                Featured Post
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {featuredPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {featuredPost.readTime}
                </span>
              </div>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors w-fit flex items-center gap-2">
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent lg:hidden" />
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 mb-6">All Blog Posts</h3>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={fadeInChild}
                  className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:shadow-gray-100 transition-all cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-md text-xs font-medium text-indigo-600">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {post.readTime}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Categories */}
            <motion.div
              {...fadeInUp}
              className="bg-white rounded-xl border border-gray-100 p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-3">
                {Object.entries(categoryCounts).map(([name, count]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-400 group-hover:bg-indigo-600 transition-colors" />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{name}</span>
                    </div>
                    <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">{count}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Popular Posts */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl border border-gray-100 p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Posts</h3>
              <div className="space-y-4">
                {popularPosts.map((post, idx) => (
                  <div key={post.id} className="flex gap-3 group cursor-pointer">
                    <div className="text-lg font-bold text-indigo-200 w-6 shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <div className="flex gap-3 flex-1">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 rounded-lg object-cover shrink-0"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 leading-snug mb-1 group-hover:text-indigo-600 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </aside>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-indigo-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
              <Mail className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Updated with Latest Insights</h3>
              <p className="text-gray-600 text-sm">Join our newsletter and get the best content delivered straight to your inbox.</p>
            </div>
          </div>
          <div className="flex w-full md:w-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-64 px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-sm"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-colors text-sm whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </section>

      {/* Pagination */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2">
          <button className="flex items-center gap-1 px-3 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-50">
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>

          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${page === 1
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600 hover:bg-gray-50 border border-transparent hover:border-gray-200'
                }`}
            >
              {page}
            </button>
          ))}

          <span className="text-gray-400 px-1">...</span>

          <button className="w-10 h-10 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-colors">
            10
          </button>

          <button className="flex items-center gap-1 px-3 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}