"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function IUnderstandYourFuture() {
  return (
    <section className="relative bg-gradient-to-br from-[#FFF1E0] via-[#FFE7CC] to-[#FFD8B0] overflow-hidden py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* ✨ Floating Background Orbs */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FFB347] opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#FF6F00] opacity-20 rounded-full blur-3xl animate-pulse"></div>

      {/* 📚 Left: Animated Book Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center gap-4"
      >
        {[
          "https://duastro.com/assetsonline/bookcover/22.webp",
          "https://duastro.com/assetsonline/bookcover/23.webp",
          "https://duastro.com/assetsonline/bookcover/24.webp",
        ].map((url, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotate: i === 1 ? 5 : -5 }}
            className="w-28 h-40 md:w-36 md:h-52 rounded-2xl shadow-lg bg-cover bg-center border border-[#FFB347]/50 transition-all duration-300"
            style={{ backgroundImage: `url(${url})` }}
          ></motion.div>
        ))}
      </motion.div>

      {/* 🪐 Right: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-lg text-center md:text-left z-10"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
          Numerology <span className="text-[#FF6F00]">Combo</span> Package
        </h2>

        <p className="text-lg italic text-gray-700 mb-4">
          Decode Your Destiny — Numbers Hold the Key to Your Success ✨
        </p>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
          Step into a world of divine insights with our <strong>Numerology Combo</strong> — a 
          complete guide to understanding your <strong>Life Path</strong>, <strong>Lo Shu Grid</strong>,
          and <strong>Personal Forecast</strong>.  
          <br /><br />
          Discover how numbers reveal your strengths, challenges, relationships, 
          and even your ideal career direction. Our experienced numerologists combine 
          <em>Vedic wisdom</em> with <em>modern analytics</em> to craft personalized reports 
          that enlighten your journey.
        </p>

        {/* 🌟 Extra Highlights */}
        <ul className="text-sm md:text-base text-gray-800 mb-8 space-y-2">
          <li>🔢 Personalized Lo Shu Grid & Lucky Numbers</li>
          <li>💫 Monthly & Yearly Numerology Forecasts</li>
          <li>💖 Relationship Compatibility Based on Numbers</li>
          <li>📘 Three Detailed PDF Reports with Lifetime Insights</li>
        </ul>

        {/* 🧡 Button */}
        <Link
          href="#"
          className="inline-block bg-gradient-to-r from-[#FF9800] to-[#FF5722] hover:shadow-xl hover:scale-105 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
        >
          Get Your Numerology Combo Now 🔮
        </Link>

        {/* 📈 Small tagline */}
        <p className="text-xs text-gray-500 mt-4">
          Trusted by 1 Lakh+ People | 95% Accuracy | Powered by Duastro Experts
        </p>
      </motion.div>
    </section>
  );
}
