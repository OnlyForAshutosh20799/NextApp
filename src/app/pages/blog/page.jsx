'use client';
import React, { useState } from 'react';
import { Search, Calendar, Menu, X, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

const blogPosts = [
  { id: 1, title: 'The Power of Your Zodiac Sign', category: 'Zodiac', image: 'https://images.unsplash.com/photo-1612832021014-6e3d1f9c1b17?auto=format&fit=crop&w=800&q=60', date: 'October 25, 2025', description: 'Discover how your zodiac influences your personality, relationships, and destiny.', readTime: '5 min read', featured: true },
  { id: 2, title: 'Mercury Retrograde Explained', category: 'Planets', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=60', date: 'October 20, 2025', description: 'Understand what Mercury Retrograde really means and how to navigate it peacefully.', readTime: '7 min read', featured: true },
  { id: 3, title: 'Daily Horoscope Predictions', category: 'Horoscope', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60', date: 'October 18, 2025', description: 'Get your daily horoscope updates based on planetary alignments.', readTime: '4 min read' },
  { id: 4, title: 'Secrets of Numerology', category: 'Numerology', image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=60', date: 'October 10, 2025', description: 'Learn how numbers can reveal hidden aspects of your destiny.', readTime: '6 min read' },
  { id: 5, title: 'How Tarot Cards Reflect Your Energy', category: 'Tarot', image: 'https://images.unsplash.com/photo-1629131726698-fdc9949b4f2b?auto=format&fit=crop&w=800&q=60', date: 'October 05, 2025', description: 'Explore how tarot cards can provide spiritual guidance and insight.', readTime: '8 min read' },
  { id: 6, title: 'Planetary Movements This Month', category: 'Planets', image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=60', date: 'September 29, 2025', description: 'Know how planetary shifts can impact your zodiac and energy levels.', readTime: '5 min read' },
  { id: 7, title: 'Understanding Moon Signs', category: 'Moon Signs', image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=60', date: 'September 15, 2025', description: 'Learn how your moon sign affects emotions and relationships.', readTime: '6 min read' },
  { id: 8, title: 'Love Compatibility by Zodiac', category: 'Compatibility', image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=60', date: 'September 10, 2025', description: 'Check which zodiac signs are your perfect love matches.', readTime: '7 min read' },
  { id: 9, title: 'Gemstones for Good Luck', category: 'Gemstones', image: 'https://images.unsplash.com/photo-1599834562578-d3a4bc94d6b4?auto=format&fit=crop&w=800&q=60', date: 'August 30, 2025', description: 'Discover which gemstones bring prosperity and protection.', readTime: '5 min read' },
];

const categories = [
  'All', 'Zodiac', 'Planets', 'Horoscope', 'Tarot', 'Numerology',
  'Compatibility', 'Moon Signs', 'Vastu Shastra', 'Gemstones'
];

const featuredPosts = blogPosts.filter(post => post.featured);

export default function BlogPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);

  const postsPerPage = 6;
  const filteredPosts = blogPosts.filter(
    post =>
      (activeCategory === 'All' || post.category === activeCategory) &&
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a1208] to-black text-white">
      {/* Floating Glow Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-400/50 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              opacity: Math.random() * 0.6 + 0.2,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="pt-20  px-4 text-center relative overflow-hidden">
        <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-6 border border-amber-400/40">
          <Sparkles size={16} className="text-amber-400" />
          <span className="text-sm text-amber-300">Discover Your Inner Light</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-white">Unlock Your</span>
          <span className="block bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent animate-gradient">
            Divine Potential
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Explore ancient astrology and cosmic wisdom through a modern lens — where tradition meets luxury.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative mb-10">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-400" size={22} />
          <input
            type="text"
            placeholder="Search astrology, planets, or horoscopes..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full bg-white/10 border border-amber-500/40 rounded-2xl py-4 pl-12 pr-6 text-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-white placeholder-gray-400"
          />
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Featured <span className="text-amber-400">Readings</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                className="group relative bg-white/5 rounded-3xl overflow-hidden border border-amber-500/30 hover:border-amber-400/60 transition-all duration-500 hover:scale-[1.03]"
              >
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-3 text-sm text-amber-300 mb-2">
                    <span className="bg-amber-500/20 px-2 py-1 rounded-full text-xs">{post.category}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-300 text-xs mb-3 line-clamp-2">{post.description}</p>
                  <button className="flex items-center gap-1 text-amber-400 hover:text-yellow-300 transition text-xs font-semibold">
                    Read More <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Blog Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className={`lg:w-1/4 ${showSidebar ? 'fixed inset-0 z-50 bg-black/95 p-6' : 'hidden lg:block'}`}>
            <div className="bg-white/5 rounded-3xl p-5 border border-amber-500/30 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-amber-400">Categories</h2>
                {showSidebar && (
                  <button onClick={() => setShowSidebar(false)} className="p-2 hover:bg-amber-400/10 rounded-lg">
                    <X size={18} className="text-white" />
                  </button>
                )}
              </div>

              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setCurrentPage(1);
                    setShowSidebar(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-semibold'
                      : 'text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </aside>

          {/* Blog Posts */}
          <main className="flex-1">
            <button
              onClick={() => setShowSidebar(true)}
              className="lg:hidden w-full mb-4 bg-white/10 border border-amber-500/40 rounded-xl py-3 px-4 flex items-center justify-between hover:bg-white/20 transition"
            >
              <span className="font-semibold text-amber-300 text-sm">Browse Categories</span>
              <Menu size={18} className="text-amber-400" />
            </button>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {paginatedPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white/5 rounded-2xl overflow-hidden border border-amber-500/30 hover:border-amber-400/50 transition hover:scale-[1.03]"
                >
                  <img src={post.image} alt={post.title} className="w-full h-40 object-cover opacity-90 group-hover:opacity-100" />
                  <div className="p-4">
                    <div className="flex items-center justify-between text-xs text-amber-300 mb-2">
                      <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                      <span className="flex items-center gap-1"><BookOpen size={12} />{post.readTime}</span>
                    </div>
                    <h3 className="text-base font-semibold mb-2 group-hover:text-amber-300">{post.title}</h3>
                    <p className="text-gray-400 text-xs mb-3 line-clamp-2">{post.description}</p>
                    <button
                      onClick={() => router.push(`/pages/blog/${post.id}`)}
                      className="flex items-center gap-1 text-amber-400 hover:text-yellow-300 text-xs"
                    >
                      Read More <ArrowRight size={12} />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8 gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-2 rounded-lg text-xs font-semibold transition ${
                      currentPage === i + 1
                        ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-black'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </main>
        </div>
      </section>
    </div>
  );
}
