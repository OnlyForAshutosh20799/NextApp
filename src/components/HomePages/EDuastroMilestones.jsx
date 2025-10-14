"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import { FaStar, FaUsers, FaChartLine, FaClock, FaUserTie, FaCheckCircle } from "react-icons/fa";

export default function EAstroVastuGuruMilestones() {
  const milestones = [
    {
      value: "20K+",
      label: "Kundlis Delivered",
      icon: <FaStar className="text-orange-500 text-3xl mb-3" />,
      desc: "Millions trust AstroVastuGuru for accurate and personalized Kundli readings.",
    },
    {
      value: "15  K+",
      label: "Positive Reviews",
      icon: <FaUsers className="text-orange-500 text-3xl mb-3" />,
      desc: "We’re loved by users worldwide for precision, insights, and simplicity.",
    },
    {
      value: "30 Sec",
      label: "World's Fastest Kundli",
      icon: <FaClock className="text-orange-500 text-3xl mb-3" />,
      desc: "Get your detailed Kundli in under 30 seconds — powered by AI + Vedic astrology.",
    },
    {
      value: "20+ Years",
      label: "Experience",
      icon: <FaUserTie className="text-orange-500 text-3xl mb-3" />,
      desc: "Two decades of astrological wisdom guiding millions toward clarity and success.",
    },
    {
      value: "95%+",
      label: "Prediction Accuracy",
      icon: <FaCheckCircle className="text-orange-500 text-3xl mb-3" />,
      desc: "Each prediction is crafted using 20,000+ Vedic formulas ensuring 95%+ accuracy.",
    },
    {
      value: "1200+",
      label: "Expert Astrologers",
      icon: <FaChartLine className="text-orange-500 text-3xl mb-3" />,
      desc: "Our team of certified astrologers are available 24/7 to guide your cosmic path.",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-[#FD7E14] via-[#FFCC33] to-[#FF9F1C] py-16 px-6 overflow-hidden">
      <Head>
        <title>AstroVastuGuru Milestones</title>
      </Head>

      {/* Animated Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] animate-pulse"></div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg"
        >
          AstroVastuGuru <span className="text-black">Milestones</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-white mt-4 text-sm md:text-lg max-w-2xl mx-auto italic"
        >
          Guiding millions toward cosmic clarity, success, and happiness with astrology backed by science and faith.
        </motion.p>
      </div>

      {/* Milestone Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 justify-center">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.05 }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 text-center transform hover:scale-105 hover:shadow-2xl transition duration-300 border border-orange-200"
          >
            <div className="flex flex-col items-center justify-center">
              {milestone.icon}
              <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-1">{milestone.value}</h2>
              <p className="text-gray-800 font-semibold text-sm md:text-base mb-2">{milestone.label}</p>
              <p className="text-gray-600 text-xs md:text-sm italic">{milestone.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* About Section */}
      {/* <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 mt-16 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-8 max-w-5xl mx-auto text-center border border-orange-100"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-orange-700 mb-4">
          Why Millions Trust AstroVastuGuru 🌟
        </h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          AstroVastuGuru isn’t just an astrology platform — it’s a life companion. With our AI-powered Vedic technology, 1200+ certified astrologers, and a deep understanding of the cosmos, we deliver guidance that transforms lives. Whether it’s <span className="font-semibold text-orange-600">career choices</span>, <span className="font-semibold text-orange-600">love life decisions</span>, or <span className="font-semibold text-orange-600">personal growth</span> — our insights empower you to make decisions aligned with your stars. 🌠
        </p>
      </motion.div> */}
    </div>
  );
}
