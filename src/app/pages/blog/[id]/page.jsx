'use client'
import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Star, Moon, Sun, Calendar, Clock, Share2, Bookmark, Sparkles, BookOpen, User, ArrowRight } from 'lucide-react'

// Example blog data
const blogPosts = [
  {
    id: 1,
    title: 'Understanding Your Zodiac Sign: A Cosmic Guide to Self-Discovery',
    category: 'Zodiac Signs',
    image: 'https://images.unsplash.com/photo-1612832021014-6e3d1f9c1b17?auto=format&fit=crop&w=1200&q=80',
    date: 'Oct 12, 2025',
    readTime: '8 min read',
    description:
      'Zodiac signs have long been used to understand personality, destiny, and compatibility. In this detailed article, we dive into the origins of astrology, how each sign represents unique traits, and what your sun sign reveals about your soul\'s journey...',
    content: `
      <p class="text-lg leading-relaxed mb-6 text-gray-300">Astrology connects cosmic energies with human life. Your zodiac sign reflects your character and helps you align with universal rhythms.</p>
      
      <div class="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-6 rounded-2xl border border-yellow-500/20 mb-8 backdrop-blur-sm">
        <h3 class="text-xl font-bold text-yellow-300 mb-3">Cosmic Insight</h3>
        <p class="text-gray-300">The alignment of stars has guided civilizations for centuries — and continues to shape our modern spiritual path.</p>
      </div>

      <h4 class="text-2xl font-bold text-white mt-8 mb-4">The Zodiac Wheel</h4>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div class="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-xl border border-yellow-500/20 backdrop-blur-sm">
          <span class="text-2xl">♈</span>
          <div>
            <strong class="text-white">Aries (March 21 - April 19)</strong>
            <p class="text-sm text-gray-400">Bold, ambitious, and full of fire</p>
          </div>
        </div>
        <div class="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-xl border border-yellow-500/20 backdrop-blur-sm">
          <span class="text-2xl">♉</span>
          <div>
            <strong class="text-white">Taurus (April 20 - May 20)</strong>
            <p class="text-sm text-gray-400">Calm, grounded, and loves comfort</p>
          </div>
        </div>
        <div class="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-xl border border-yellow-500/20 backdrop-blur-sm">
          <span class="text-2xl">♊</span>
          <div>
            <strong class="text-white">Gemini (May 21 - June 20)</strong>
            <p class="text-sm text-gray-400">Dual-minded, social, and endlessly curious</p>
          </div>
        </div>
        <div class="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-xl border border-yellow-500/20 backdrop-blur-sm">
          <span class="text-2xl">♋</span>
          <div>
            <strong class="text-white">Cancer (June 21 - July 22)</strong>
            <p class="text-sm text-gray-400">Intuitive, emotional, and nurturing</p>
          </div>
        </div>
      </div>

      <h4 class="text-2xl font-bold text-white mt-8 mb-4">Planetary Influences</h4>
      <p class="text-lg leading-relaxed text-gray-300 mb-6">Each zodiac sign is ruled by a specific planet that influences its core characteristics and energy patterns.</p>

      <div class="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-6 rounded-2xl border border-orange-500/20 mb-8 backdrop-blur-sm">
        <h3 class="text-xl font-bold text-orange-300 mb-3">Planetary Alignment</h3>
        <p class="text-gray-300">The planets in our solar system act as cosmic messengers, each carrying unique energies that shape our personality and life path.</p>
      </div>

      <p class="text-lg leading-relaxed text-gray-300">Understanding your zodiac sign helps you unlock your emotional and spiritual potential. Each sign carries unique energies that influence our lives in profound ways.</p>
    `,
  },
]

const relatedPosts = [
  {
    id: 2,
    title: 'Mercury Retrograde: Navigating Cosmic Chaos',
    category: 'Planets',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=60',
    date: 'Oct 10, 2025',
    readTime: '6 min read'
  },
  {
    id: 3,
    title: 'Moon Phases and Emotional Cycles',
    category: 'Moon Signs',
    image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=500&q=60',
    date: 'Oct 8, 2025',
    readTime: '5 min read'
  },
  {
    id: 4,
    title: 'Love Compatibility by Zodiac Elements',
    category: 'Compatibility',
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=500&q=60',
    date: 'Oct 5, 2025',
    readTime: '7 min read'
  }
]

export default function BlogDescription() {
  const params = useParams()
  const router = useRouter()
  const id = Number(params.id)
  const post = blogPosts.find((b) => b.id === id) || blogPosts[0]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a1208] to-black text-white">
      {/* Floating Stars Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="pt-24 pb-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Blog Content */}
            <motion.article
              variants={itemVariants}
              className="lg:col-span-8"
            >
              <div className="bg-slate-800/30 rounded-3xl shadow-2xl overflow-hidden border border-yellow-500/20 backdrop-blur-sm">
                {/* Featured Image */}
                <div className="relative h-64 sm:h-80 md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10" />
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-6 right-6 z-20 flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-full border border-yellow-500/30 hover:bg-slate-700/50 transition-colors"
                    >
                      <Bookmark className="w-5 h-5 text-yellow-300" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-full border border-yellow-500/30 hover:bg-slate-700/50 transition-colors"
                    >
                      <Share2 className="w-5 h-5 text-yellow-300" />
                    </motion.button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 md:p-12">
                  {/* Meta Information */}
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6"
                  >
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-yellow-400" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-yellow-400" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-yellow-400" />
                      <span>Astro Guide</span>
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h1
                    variants={itemVariants}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
                  >
                    {post.title}
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    variants={itemVariants}
                    className="text-xl text-gray-300 leading-relaxed mb-8 border-l-4 border-yellow-500 pl-6 py-2 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-r-xl"
                  >
                    {post.description}
                  </motion.p>

                  {/* Content */}
                  <motion.div
                    variants={itemVariants}
                    className="prose prose-lg max-w-none prose-headings:text-white prose-strong:text-white prose-p:text-gray-300 prose-li:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  {/* Tags */}
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-yellow-500/20"
                  >
                    {['Astrology', 'Zodiac', 'Self-Discovery', 'Cosmic Wisdom', 'Spiritual Growth'].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-800/50 border border-yellow-500/30 rounded-full text-sm text-yellow-300 backdrop-blur-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Related Posts */}
              <motion.section
                variants={itemVariants}
                className="mt-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center space-x-2">
                  <Sparkles className="text-yellow-400" size={24} />
                  <span>Related Cosmic Insights</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <motion.article
                      key={relatedPost.id}
                      whileHover={{ y: -5 }}
                      className="group bg-slate-800/30 rounded-2xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 backdrop-blur-sm cursor-pointer"
                      onClick={() => router.push(`/blog/${relatedPost.id}`)}
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-slate-900/80 text-yellow-300 px-2 py-1 rounded-full text-xs backdrop-blur-sm">
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-white mb-2 line-clamp-2 group-hover:text-yellow-300 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span className="flex items-center space-x-1">
                            <Calendar size={12} />
                            <span>{relatedPost.date}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <BookOpen size={12} />
                            <span>{relatedPost.readTime}</span>
                          </span>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.section>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              variants={itemVariants}
              className="lg:col-span-4 space-y-8"
            >
              {/* Author Card */}
              <motion.div
                variants={itemVariants}
                className="bg-slate-800/30 rounded-2xl p-6 border border-yellow-500/20 backdrop-blur-sm"
              >
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 p-1">
                    <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center">
                      <Sparkles className="text-white" size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">Astro Guide</h3>
                  <p className="text-gray-400 mt-2">Cosmic Wisdom & Spiritual Insights</p>
                  <div className="flex justify-center space-x-1 mt-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    Professional astrologer with 10+ years of experience in cosmic guidance and spiritual counseling.
                  </p>
                </div>
              </motion.div>

              {/* Table of Contents */}
              <motion.div
                variants={itemVariants}
                className="bg-slate-800/30 rounded-2xl p-6 border border-yellow-500/20 backdrop-blur-sm"
              >
                <h4 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                  <BookOpen size={20} className="text-yellow-400" />
                  <span>Article Contents</span>
                </h4>
                <div className="space-y-3">
                  {[
                    'Introduction to Zodiac Signs',
                    'The Zodiac Wheel',
                    'Planetary Influences',
                    'Self-Discovery Journey',
                    'Cosmic Applications'
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 cursor-pointer transition-colors group"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Cosmic Stats */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl p-6 border border-yellow-500/30 backdrop-blur-sm"
              >
                <h4 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                  <Sparkles size={20} className="text-yellow-300" />
                  <span>Cosmic Stats</span>
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { number: '12', label: 'Zodiac Signs' },
                    { number: '88', label: 'Constellations' },
                    { number: '7', label: 'Classical Planets' },
                    { number: '4', label: 'Elements' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-3 bg-slate-800/30 rounded-xl border border-yellow-500/20">
                      <div className="text-xl font-bold text-yellow-300">{stat.number}</div>
                      <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl p-6 border border-yellow-500/20 backdrop-blur-sm"
              >
                <h4 className="text-lg font-bold text-white mb-3">Cosmic Updates</h4>
                <p className="text-sm text-gray-400 mb-4">
                  Get weekly astrology insights and spiritual guidance delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address..." 
                    className="w-full bg-slate-800/50 border border-yellow-500/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500"
                  />
                  <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 py-3 rounded-xl font-semibold text-white hover:from-yellow-600 hover:to-orange-600 transition-all transform hover:scale-105">
                    Subscribe Now
                  </button>
                </div>
              </motion.div>
            </motion.aside>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}