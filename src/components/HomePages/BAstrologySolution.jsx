"use client";
import Head from "next/head";
import { Star, Heart, Briefcase, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function BAstrologySolution() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#FFF5E6] via-[#FFE7C2] to-[#FFD89A] flex flex-col items-center justify-center text-center px-6 py-16 md:py-24">
      <Head>
        <title>Astrology Solution | AstroVastuGuru</title>
      </Head>

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,190,80,0.2),transparent_70%)]"></div>

      {/* Title Section */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className=" text-2xl md:text-4xl font-extrabold text-[#3B1F00] mb-3 text-center"
      >
        Perfect Astrology{" "}
        <span className="text-[#FD7E14]"> Solution for You ✨</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-700 mb-10 text-center max-w-2xl md:mt-5"
      >
        Select your area of interest and how quickly you'd like your
        personalized report — crafted by expert astrologers to align your
        destiny with cosmic energy.
      </motion.p>

      {/* Selection + Button Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-10 w-full max-w-4xl">
        {/* Interest dropdown */}
        <select className="w-full h-10 border-2 border-[#F4B400] rounded-full px-4 md:px-6 text-sm md:text-base bg-white text-gray-800 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all">
          <option>Select Your Interest</option>
          <option>❤️ Love & Relationships</option>
          <option>💼 Career & Finance</option>
          <option>🧘 Health & Wellness</option>
          <option>🌟 Personal Growth</option>
        </select>

        {/* Service dropdown */}
        <select className="w-full h-10 border-2 border-[#F4B400] rounded-full px-4 md:px-6 text-sm md:text-base bg-white text-gray-800 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all">
          <option>Select Service Type</option>
          <option>⚡ Express Report (Within 2 Hours)</option>
          <option>🌙 Standard Report (Within 24 Hours)</option>
          <option>💫 Premium Consultation (Live)</option>
        </select>

        {/* Button */}
        <button className="w-full h-10 bg-gradient-to-r from-[#FD8115] to-[#FFCC33] text-black font-semibold text-sm md:text-base px-6 md:px-8 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap">
          Get My Report 🔮
        </button>
      </div>

      {/* Highlight section */}
      <div className="relative bg-white/80 backdrop-blur-sm border border-yellow-300 rounded-2xl shadow-xl p-6 md:p-10 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#5A2D0C]">
          Why Choose AstroVastuGuru?
        </h2>
        <p className="text-gray-700 text-md md:text-lg leading-relaxed">
          Our team of{" "}
          <span className="font-semibold text-[#FD8115]">
            certified astrologers
          </span>{" "}
          combines ancient Vedic principles with modern analytical methods to
          deliver highly{" "}
          <span className="font-semibold text-[#5A2D0C]">
            accurate predictions
          </span>
          . Every Kundli report and consultation is{" "}
          <span className="font-semibold">personalized</span>,{" "}
          <span className="font-semibold">secure</span>, and{" "}
          <span className="font-semibold">deeply insightful</span> — designed to
          help you make confident life decisions with cosmic guidance.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-[#5A2D0C] font-medium">
          <span className="flex items-center gap-2">
            <Star className="text-yellow-500" size={18} /> 1 Lakh+ Happy Clients
          </span>
          <span className="flex items-center gap-2">
            <Heart className="text-pink-500" size={18} /> 95% Positive Feedback
          </span>
          <span className="flex items-center gap-2">
            <Briefcase className="text-orange-600" size={18} /> 20+ Years
            Experience
          </span>
          <span className="flex items-center gap-2">
            <Activity className="text-green-600" size={18} /> 24/7 Support
            Available
          </span>
        </div>
      </div>
    </div>
  );
}
