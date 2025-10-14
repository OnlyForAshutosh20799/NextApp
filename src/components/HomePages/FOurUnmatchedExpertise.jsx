"use client";

import Head from 'next/head';
import { motion } from "framer-motion";

export default function FOurUnmatchedExpertise() {
  const experts = [
    { name: 'Astro Sudhi Saluja', title: 'Numerologist with 15+ years decoding cosmic vibrations through numbers to guide your destiny.' },
    { name: 'Shri Kavita Pediya', title: 'Vastu Expert harmonising homes with universal energies for wealth, peace, and growth.' },
    { name: 'Acharya Kushal Verma', title: 'Vedic Astrologer with 20+ years of mastery offering life-transforming Kundli insights.' },
    { name: 'Pandit Vidya Prasad', title: 'Palm Reader unveiling destiny lines through deep intuitive palmistry.' },
    { name: 'Astro Anil Sharma', title: 'KP Astrologer with 22 years of precision in Krishnamurti Paddhati predictions.' },
    { name: 'Priya Mehra', title: 'Tarot Reader guiding you with 14 years of intuitive energy and hidden truths.' },
    { name: 'Acharya Rajesh Gupta', title: 'Gemstone Consultant aligning you with cosmic gems for abundance and success.' },
    { name: 'Dr. Neha Kapoor', title: 'Nadi Astrologer decoding ancient palm-leaf prophecies for your future path.' },
    { name: 'Astro Vikram Singh', title: 'Lal Kitab Specialist transforming lives through powerful planetary remedies.' },
    { name: 'PhD. Meera Desai', title: 'Reiki Healer channelling cosmic energy for spiritual and emotional balance.' },
    { name: 'Pandit Amit Patel', title: 'Horary Astrologer answering life’s toughest questions with precise planetary timing.' },
    { name: 'Mrs. Sonia Rathore', title: 'Matchmaking Expert ensuring cosmic compatibility for everlasting relationships.' },
  ];

  return (
    <div className="relative  bg-[#fff] py-16 px-6 overflow-hidden">
      <Head>
        <title>Our Unmatched Expertise Team | AstroVastuGuru</title>
      </Head>

      {/* Decorative background orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-200 rounded-full blur-3xl opacity-20"></div>

      {/* Header */}
      <div className="text-center relative z-10">
        <motion.h1
        initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
         className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
            Our Unmatched Expertise Team
          </span>
        </motion.h1>
        <p className="text-gray-700 text-lg italic mb-2">
          <span className="text-orange-600 font-semibold">Precision • Trust • Planetary Wisdom</span>
        </p>
        <p className="max-w-3xl mx-auto text-gray-600 mb-12 leading-relaxed">
          With over <span className="font-semibold text-orange-700">20+ years of collective experience</span>, our world-class astrologers,
          numerologists, Vastu experts, and healers have touched <span className="font-semibold text-orange-700">6 lakh+ lives globally</span>.  
          Guided by divine energy, we bring together ancient wisdom and modern insight for unmatched accuracy and personal transformation.
        </p>
      </div>

      {/* Expert Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center relative z-10">
        {experts.map((expert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-6 text-center border border-orange-100 hover:shadow-2xl hover:border-orange-300 transition-all duration-300"
          >
            <div className="mb-3">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 flex items-center justify-center text-white font-bold text-xl shadow-md">
                {expert.name.split(" ")[0][0]}
              </div>
            </div>
            <h2 className="text-lg font-bold text-orange-700 mb-2">{expert.name}</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{expert.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom section */}
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
           className="mt-16 text-center relative z-10">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          🌟 Empowering Lives Through Ancient Knowledge & Modern Insight 🌟
        </h3>
        <p className="max-w-2xl mx-auto text-gray-600">
          From guiding your career to harmonizing your home, our experts at AstroVastuGuru bring celestial clarity to every
          aspect of your life — helping you achieve peace, purpose, and prosperity.
        </p>
      </motion.div>
    </div>
  );
}
