"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AexperienceAstrology() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-gradient-to-r from-[#FFD700] via-[#FFD700] to-[#FF9933] flex flex-col-reverse md:flex-row items-center justify-between md:py-20 py-10 px-6 lg:px-16  shadow-lg mt-16">
      
      {/* Left Content */}
      <div className="text-center md:text-left flex flex-col items-center md:items-start justify-center w-full md:w-1/2 space-y-5">
         <motion.h1
         initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
         className="text-[28px] md:text-[40px] lg:text-[48px] font-extrabold text-[#5A3E00] leading-tight animate-slideIn drop-shadow-md">
          Discover Divine Insights with <span className="text-[#FF6F00]">AstroVastuGuru</span>
         </motion.h1>

        <motion.p
         initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-black text-[16px] md:text-[20px] font-medium max-w-lg leading-relaxed">
          Unlock the secrets of your destiny through accurate <span className="text-[#FF6F00] font-semibold">Kundli</span>,
          personalized <span className="text-[#FF6F00] font-semibold">Horoscopes</span>, and 
          expert <span className="text-[#FF6F00] font-semibold">Vastu Guidance</span> — all in one place.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <button className="bg-gradient-to-r from-[#FF6F00] to-[#FFD700] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-out">
            Check Free Kundli
          </button>
          <button className="border-2 border-[#FF6F00] text-[#5A3E00] px-6 py-3 rounded-full font-semibold hover:bg-[#FFF8E1] hover:text-[#FF6F00] transition-all duration-300 ease-out">
            Chat With Astrologer
          </button>
          <button className="border-2 border-[#FF6F00] text-[#5A3E00] px-6 py-3 rounded-full font-semibold hover:bg-[#FFF8E1] hover:text-[#FF6F00] transition-all duration-300 ease-out">
            Talk To Vastu Expert
          </button>
        </div>

        <div className="flex justify-center md:justify-start gap-4 mt-6 text-[#5A3E00] font-medium">
          <span className="bg-[#FFF5E1] px-2 md:px-4 py-2 md:text-base text-xs rounded-full shadow-inner">
            🔮 Trusted by 1L+ Users
          </span>
          <span className="bg-[#FFF5E1] px-2 md:px-4 py-2 md:text-base text-xs rounded-full shadow-inner">
            ⭐ Rated 4.9/5 by Clients
          </span>
        </div>
      </div>

      {/* Right Image */}
      <motion.div
       initial={{ opacity: 0, scale: 0.9, y: 30 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 1.5, ease: "easeOut" }} // duration in seconds

      className="w-full md:w-1/2 flex justify-center md:justify-end relative">
        <img
          src="/assets/VastuImage.png"
          alt="Astrology Illustration"
          className="w-[380px] md:w-[420px] lg:w-[600px] rounded-2xl shadow-2xl animate-fadeIn mb-10"
        />
        {/* Golden glow behind image */}
        <div className="absolute -z-10 w-[250px] h-[250px] bg-gradient-to-r from-[#FFD700]/40 to-[#FF9933]/40 rounded-full blur-3xl"></div>
      </motion.div>
    </div>
  );
}
