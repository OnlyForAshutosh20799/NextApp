"use client";
import Head from "next/head";
import { motion } from "framer-motion";

export default function HAstrologicalConnections() {
  const services = [
    {
      title: "Gun Milan Report",
      desc: "Detailed marriage compatibility through Ashtakoot analysis.",
      img: "https://duastro.com/admin/serviceimages/ashtakoot.webp",
    },
    {
      title: "Love & Relationship Prediction",
      desc: "Know your love potential through planetary alignments.",
      img: "https://duastro.com/admin/serviceimages/Love%20&%20Relationship%20Matching.webp",
    },
    {
      title: "Ashtakoot Prediction",
      desc: "Unlock spiritual compatibility and long-term understanding.",
      img: "https://duastro.com/admin/serviceimages/Marriage%20Matching.webp",
    },
    {
      title: "Marriage Matching",
      desc: "Comprehensive Kundli-based matching by expert astrologers.",
      img: "https://duastro.com/admin/serviceimages/Marriage%20Matching%20(2).webp",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-[#FFD580] via-[#FFB347] to-[#FF8C00] py-16 px-6 overflow-hidden">
      <Head>
        <title>Astrological Connections for Eternal Love</title>
      </Head>

      {/* Soft glowing background accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-300 rounded-full blur-3xl opacity-25 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Section header */}
      <div className="text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        
        className="text-3xl md:text-4xl font-extrabold text-orange-900 drop-shadow-lg mb-4">
          Astrological Connections for{" "}
          <span className="text-orange-900 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-50">
            Eternal Love
          </span>
        </motion.h1>
        <p className="text-white/90 italic mb-8 text-lg">
          💫 Find Your Perfect Match with AstroVastuGuru Expert Marriage Predictions 💫
        </p>
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 relative z-10">
        {/* Left side: Description */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 text-center lg:text-left text-white space-y-5"
        >
          <p className="text-base md:text-lg leading-relaxed">
            Astrology holds the secret to everlasting relationships. It reveals
            the cosmic blueprint of your connection by decoding planetary
            alignments, star positions, and emotional resonance.AstroVastuGuru’s
            astrologers harmonize your energies to ensure your bond thrives on
            emotional, spiritual, and karmic levels.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            With <span className="font-semibold text-yellow-100">26+ years of experience</span>, 
            our experts blend ancient Vedic astrology with cutting-edge technology
            to provide <span className="text-yellow-100 font-semibold">95%+ accuracy</span>.  
            From in-depth Kundli Milan to planetary analysis, our insights have helped 
            <span className="font-semibold text-yellow-100"> over 1 lakh couples</span> 
            find balance, love, and prosperity across the globe.
          </p>

          <div className="mt-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="inline-block bg-white text-orange-600 font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-xl transition duration-300"
            >
              Get Your Compatibility Report 💍
            </motion.a>
          </div>
        </motion.div>

        {/* Right side: Services grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-6 lg:w-1/2"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.07 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-4 text-center border border-orange-200 hover:shadow-2xl hover:border-yellow-400 transition-all duration-300"
            >
              <div className="overflow-hidden rounded-xl mb-3">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-28 object-cover rounded-xl hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h2 className="text-lg font-bold text-orange-700 mb-1">
                {service.title}
              </h2>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer text */}
      <div className="text-center mt-16 relative z-10">
        <h3 className="text-xl md:text-2xl text-white font-semibold mb-2">
          🌙 Guided by the Stars, Designed for Your Heart 🌙
        </h3>
        <p className="text-white/80 max-w-2xl mx-auto">
          Experience the power of astrology in uniting two souls destined by the
          universe. Let AstroVastuGuru illuminate your journey to true love — where
          destiny meets devotion.
        </p>
      </div>
    </div>
  );
}
