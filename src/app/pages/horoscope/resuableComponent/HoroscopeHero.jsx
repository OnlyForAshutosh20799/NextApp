"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HoroscopeHero() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-gradient-to-r from-[#FFB100] via-[#FF8800] to-[#FFCB47] text-white overflow-hidden">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-xl text-center md:text-left z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Discover Your Inner Universe ✨
        </h2>
        <p className="text-lg md:text-xl font-light mb-6 text-white/90">
          Explore the secrets of your zodiac, destiny, and cosmic alignment.
          Dive into daily horoscopes, love insights, and personalized astrology
          designed for your star sign.
        </p>
        <button className="bg-white text-[#FF8800] font-semibold px-6 py-3 rounded-full hover:bg-[#FFECCC] transition-all duration-300 shadow-md">
          Explore Now
        </button>
      </motion.div>

      {/* Right Zodiac Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative mb-10 md:mb-0"
      >
        <div className="w-72 h-72 md:w-96 md:h-96 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/30 shadow-2xl backdrop-blur-md">
          <Sparkles size={120} className="text-white/80" />
        </div>
        <div className="absolute inset-0 animate-spin-slow border-t-4 border-white/40 rounded-full"></div>
      </motion.div>

      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
    </section>
  );
}
