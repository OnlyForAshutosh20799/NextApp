"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

export default function DZodiacSign() {
   const router = useRouter();
  const zodiacSigns = [
    {
      id: 1,
      name: "Aries",
      dates: "Mar 21 - Apr 19",
      tagline: "The Bold Trailblazer 🔥",
      image: "https://cdn-icons-png.flaticon.com/128/47/47043.png",
      color: "from-red-500 to-orange-400",
    },
    {
      id: 2,
      name: "Taurus",
      dates: "Apr 20 - May 20",
      tagline: "The Earthly Comfort Seeker 🌿",
      image: "https://cdn-icons-png.flaticon.com/128/47/47219.png",
      color: "from-yellow-600 to-lime-400",
    },
    {
      id: 3,
      name: "Gemini",
      dates: "May 21 - Jun 20",
      tagline: "The Dual Dreamer 💫",
      image: "https://cdn-icons-png.flaticon.com/128/17926/17926014.png",
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: 4,
      name: "Cancer",
      dates: "Jun 21 - Jul 22",
      tagline: "The Gentle Guardian 🌙",
      image: "https://cdn-icons-png.flaticon.com/128/47/47321.png",
      color: "from-pink-500 to-rose-400",
    },
    {
      id: 5,
      name: "Leo",
      dates: "Jul 23 - Aug 22",
      tagline: "The Fearless Leader 🦁",
      image: "https://cdn-icons-png.flaticon.com/128/47/47157.png",
      color: "from-orange-500 to-yellow-400",
    },
    {
      id: 6,
      name: "Virgo",
      dates: "Aug 23 - Sep 22",
      tagline: "The Perfectionist Thinker 🌾",
      image: "https://cdn-icons-png.flaticon.com/128/47/47038.png",
      color: "from-green-600 to-emerald-400",
    },
    {
      id: 7,
      name: "Libra",
      dates: "Sep 23 - Oct 22",
      tagline: "The Balancer of Worlds ⚖️",
      image: "https://cdn-icons-png.flaticon.com/128/47/47047.png",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 8,
      name: "Scorpio",
      dates: "Oct 23 - Nov 21",
      tagline: "The Mysterious Transformer 🦂",
      image: "https://cdn-icons-png.flaticon.com/128/47/47183.png",
      color: "from-red-700 to-purple-700",
    },
    {
      id: 9,
      name: "Sagittarius",
      dates: "Nov 22 - Dec 21",
      tagline: "The Freedom Seeker 🏹",
      image: "https://cdn-icons-png.flaticon.com/128/47/47213.png",
      color: "from-orange-400 to-amber-400",
    },
    {
      id: 10,
      name: "Capricorn",
      dates: "Dec 22 - Jan 19",
      tagline: "The Ambitious Climber 🏔️",
      image: "https://cdn-icons-png.flaticon.com/128/7828/7828321.png",
      color: "from-gray-700 to-slate-500",
    },
    {
      id: 11,
      name: "Aquarius",
      dates: "Jan 20 - Feb 18",
      tagline: "The Visionary Innovator 🌊",
      image: "https://cdn-icons-png.flaticon.com/128/5796/5796758.png ",
      color: "from-blue-400 to-indigo-400",
    },
    {
      id: 12,
      name: "Pisces",
      dates: "Feb 19 - Mar 20",
      tagline: "The Dreamy Healer 🐚",
      image: "https://cdn-icons-png.flaticon.com/128/47/47405.png",
      color: "from-cyan-500 to-teal-400",
    },
  ];


  const handleClick = (id) =>{
     router.push(`/pages/horoscope/${id}`);
  }

  return (
    <div className="relative bg-gradient-to-br from-[#FFF8E7] via-[#FFEAC7] to-[#FFD8A9] py-14 px-4 overflow-hidden">
      <Head>
        <title>Zodiac Signs | AstroVastuGuru</title>
      </Head>

      {/* Background decorative orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-yellow-400 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-4xl text-3xl font-bold text-gray-900 mb-3"
        >
          Discover Your <span className="text-[#FD7E14]">Zodiac Sign</span> ✨
        </motion.h1>

        <p className="text-gray-700 italic text-lg mb-2">
          “Every star holds a secret — let’s uncover yours.”
        </p>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Get accurate insights into your personality, strengths, and future paths.  
          Dive deep into your **daily**, **monthly**, and **yearly** horoscopes prepared by expert astrologers.  
          Connect with your true cosmic identity today 🌠.
        </p>

        {/* Zodiac Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7 mt-10 px-3 sm:px-0">
          {zodiacSigns.map((sign, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.07, rotate: 1 }}
              transition={{ duration: 0.4 }}
              className={`rounded-3xl p-5 bg-white/80 backdrop-blur-sm shadow-lg border border-amber-200 hover:shadow-amber-300 cursor-pointer group transition-all`}
            >
              <div
                className={`bg-gradient-to-tr ${sign.color} rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-3 shadow-md group-hover:shadow-lg transition-all duration-500`}
              >
                <img
                  src={sign.image}
                  alt={sign.name}
                  className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{sign.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{sign.dates}</p>
              <p className="text-xs text-gray-500 italic mb-3">{sign.tagline}</p>
              <button
               onClick={() => handleClick(sign.id)}
              className="text-xs bg-gradient-to-r from-[#FD7E14] to-[#FFCA28] text-white px-3 py-1.5 rounded-full shadow hover:shadow-md hover:scale-105 transition-all duration-300">
                Read Horoscope
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <p className="text-lg text-gray-800 font-medium mb-3">
            🌞 Start your astrological journey — because the stars are already waiting for you.
          </p>
          <button className="bg-gradient-to-r from-[#FD8115] to-[#FFCC33] text-black font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
            Explore Horoscope 🔮
          </button>
        </motion.div>
      </div>
    </div>
  );
}
