"use client";

import { motion } from "framer-motion";
import { FaStar, FaGlobe, FaSun, FaMoon } from "react-icons/fa";

export default function JDiscoverYourCosmic() {
  const topics = [
    {
      title: "🌞 What is Astrology?",
      content: `Astrology bridges the cosmic and human worlds, revealing how planets and stars influence your destiny. Duastro’s expert analysis helps you uncover your life path, purpose, and hidden strengths — from love and health to wealth and destiny.`,
    },
    {
      title: "📘 Understanding Your Kundli",
      content: `Your Kundli is your celestial DNA — a blueprint of your soul at birth. Discover how each planetary position shapes your personality, emotions, and life events. Duastro’s instant online Kundli report provides deep clarity within seconds.`,
    },
    {
      title: "💫 Power of Horoscopes",
      content: `Daily, weekly, and yearly horoscopes crafted from Vedic astrology reveal the movements of the planets guiding your choices. Duastro’s predictions empower you to attract success and positivity every day.`,
    },
    {
      title: "🌙 Nakshatras & Planetary Cycles",
      content: `Each Nakshatra (lunar mansion) defines your thoughts, emotions, and destiny. Combined with Mahadasha and Antardasha insights, Duastro reveals when to act, grow, or wait for the right time in life’s cosmic rhythm.`,
    },
    {
      title: "💍 Love, Marriage & Relationships",
      content: `Discover perfect compatibility with Ashthakoot and Gun Milan analysis. Whether finding your soulmate or strengthening your bond, Duastro’s love astrology offers clarity, trust, and divine timing.`,
    },
    {
      title: "💼 Career & Financial Success",
      content: `When will opportunity knock? Duastro’s career astrology identifies powerful planetary phases for promotions, new ventures, or financial breakthroughs. Take confident steps toward success with cosmic precision.`,
    },
    {
      title: "🌟 Why Choose Duastro?",
      content: `Duastro combines 5000+ years of Vedic wisdom with modern technology. With 95%+ accuracy and 6 lakh+ satisfied users worldwide, we help you align with your destiny confidently and instantly.`,
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#FFCC33] via-[#FDBA4D] to-[#FD8115] flex flex-col items-center py-12 px-6 overflow-hidden">
      
      {/* ✨ Animated Background Lights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.25),transparent_70%)]"></div>
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#fff8e1] opacity-30 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#ffb300] opacity-25 blur-3xl rounded-full animate-pulse"></div>

      {/* 🌟 Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-3xl md:text-4xl font-extrabold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] tracking-wide mb-8"
      >
        Discover Your <span className="text-yellow-200">Cosmic Destiny</span> with Duastro
      </motion.h1>

      {/* 🌌 Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative max-w-6xl bg-[#3D2B00]/80 text-white rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-xl border border-yellow-400/20 overflow-hidden"
      >
        {/* 🌠 Floating Icons */}
        <FaStar className="absolute top-4 right-6 text-yellow-400 animate-pulse" />
        <FaMoon className="absolute bottom-8 left-6 text-yellow-300 opacity-70 animate-bounce" />
        <FaSun className="absolute top-10 left-10 text-orange-300 opacity-60 animate-spin-slow" />

        {/* 🪐 Topics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topics.map((topic, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
              className="p-5 rounded-xl border border-yellow-500/10 shadow-md transition-all"
            >
              <h2 className="font-bold text-lg md:text-xl mb-2 text-yellow-300">
                {topic.title}
              </h2>
              <p className="text-sm md:text-base text-gray-100 leading-relaxed">
                {topic.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 🔮 CTA Button */}
        <div className="text-center mt-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#FFD54F] to-[#FF9800] hover:shadow-[0_0_20px_rgba(255,152,0,0.7)] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            Explore Free Astrology Tools Now 🔮
          </motion.button>
        </div>

        {/* 🌍 Footer Info */}
        <p className="text-center text-xs text-gray-300 mt-6">
          Trusted by 6+ Lakh Users | Verified Astrologers | 95%+ Accuracy
        </p>
      </motion.div>
    </div>
  );
}
