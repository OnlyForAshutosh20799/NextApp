'use client'
import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Star, Moon, Sun, Calendar, Clock, Share2, Bookmark } from 'lucide-react'
import KFaq from '../../HomePages/KFaq'
import FaqSection from '../../horoscope/resuableComponent/FaqSection'

// Example blog data
const blogPosts = [
  {
    id: 1,
    title: 'Understanding Your Zodiac Sign: A Cosmic Guide to Self-Discovery',
    category: 'Zodiac Signs',
    image: '/images/zodiac.jpg',
    date: 'Oct 12, 2025',
    readTime: '8 min read',
    description:
      'Zodiac signs have long been used to understand personality, destiny, and compatibility. In this detailed article, we dive into the origins of astrology, how each sign represents unique traits, and what your sun sign reveals about your soul\'s journey...',
    content: `
      <p class="text-lg leading-relaxed mb-6">Astrology connects cosmic energies with human life. Your zodiac sign reflects your character and helps you align with universal rhythms.</p>
      
      <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border-l-4 border-[#FD8115] mb-8">
        <h3 class="text-xl font-bold text-gray-900 mb-3">✨ Cosmic Insight</h3>
        <p class="text-gray-700">The alignment of stars has guided civilizations for centuries — and continues to shape our modern spiritual path.</p>
      </div>

      <h4 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Zodiac Wheel</h4>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div class="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200">
          <span class="text-2xl">♈</span>
          <div>
            <strong class="text-gray-900">Aries (March 21 - April 19)</strong>
            <p class="text-sm text-gray-600">Bold, ambitious, and full of fire</p>
          </div>
        </div>
        <div class="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200">
          <span class="text-2xl">♉</span>
          <div>
            <strong class="text-gray-900">Taurus (April 20 - May 20)</strong>
            <p class="text-sm text-gray-600">Calm, grounded, and loves comfort</p>
          </div>
        </div>
        <div class="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200">
          <span class="text-2xl">♊</span>
          <div>
            <strong class="text-gray-900">Gemini (May 21 - June 20)</strong>
            <p class="text-sm text-gray-600">Dual-minded, social, and endlessly curious</p>
          </div>
        </div>
      </div>

      <p class="text-lg leading-relaxed">Understanding your zodiac sign helps you unlock your emotional and spiritual potential. Each sign carries unique energies that influence our lives in profound ways.</p>
    `,
  },
]

export default function BlogDescription() {
  const params = useParams()
  const router = useRouter()
  const id = Number(params.id)
  console.log("sdjfhlsjdhflsd", params)
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
    <>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-br from-[#FFF8E1] via-[#FFF3E0] to-[#FFECB3] pt-20"
    >

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Blog Content */}
          <motion.article
            variants={itemVariants}
            className="lg:col-span-8"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200/60">
              {/* Featured Image */}
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-gradient-to-r from-[#FD8115] to-[#FFCC33] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {post.category}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-6 right-6 z-20 flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-full border border-white/30 hover:bg-white/30 transition-colors"
                  >
                    <Bookmark className="w-5 h-5 text-white" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-full border border-white/30 hover:bg-white/30 transition-colors"
                  >
                    <Share2 className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 md:p-12">
                {/* Meta Information */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6"
                >
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h1
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
                >
                  {post.title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  variants={itemVariants}
                  className="text-xl text-gray-700 leading-relaxed mb-8 border-l-4 border-[#FD8115] pl-6 py-2 bg-gradient-to-r from-orange-50 to-transparent"
                >
                  {post.description}
                </motion.p>

                {/* Content */}
                <motion.div
                  variants={itemVariants}
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </div>
          </motion.article>

          {/* Sidebar */}
          <motion.aside
            variants={itemVariants}
            className="lg:col-span-4 space-y-8"
          >
            {/* Author Card */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200/60"
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#FD8115] to-[#FFCC33] p-1">
                  <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    🔮
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Astro Guide</h3>
                <p className="text-gray-600 mt-2">Cosmic Wisdom & Spiritual Insights</p>
                <div className="flex justify-center space-x-2 mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-[#FFCC33] text-[#FFCC33]" />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Related Topics */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200/60"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4">Related Topics</h4>
              <div className="space-y-3">
                {['Planetary Influences', 'Moon Phases', 'Love Compatibility', 'Career Astrology'].map((topic, index) => (
                  <motion.div
                    key={topic}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r from-orange-50 to-pink-50 cursor-pointer transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FD8115] to-[#FFCC33] flex items-center justify-center">
                      <span className="text-white text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-700 font-medium">{topic}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Cosmic Stats */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-[#FD8115] to-[#FFCC33] rounded-2xl p-6 text-white shadow-xl"
            >
              <h4 className="text-lg font-bold mb-4">Cosmic Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-sm opacity-90">Zodiac Signs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">88</div>
                  <div className="text-sm opacity-90">Constellations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">7</div>
                  <div className="text-sm opacity-90">Classical Planets</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-sm opacity-90">Elements</div>
                </div>
              </div>
            </motion.div>
          </motion.aside>
        </motion.div>
      </div>
    </motion.div>
    <KFaq />
    </>
  )
}