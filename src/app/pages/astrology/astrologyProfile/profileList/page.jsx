"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import image from "../../../../../../public/assets/services/man.avif";
import { useSearchParams } from "next/navigation";

export default function AstrologerProfileList() {
      const searchParams = useSearchParams();
       const type = searchParams.get("type");
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("All");
  const [expertise, setExpertise] = useState("All");
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 16;

  // 🧙‍♂️ Sample Data
  const astrologers = [
    {
      name: "Aditya Malhotra",
      expertise: "Vedic Astrology",
      language: "Hindi, English",
      rating: 4.9,
      experience: "12 Years",
      price: 5,
      image: image,
    },
    {
      name: "Yasmin Ahmed",
      expertise: "Tarot Reading",
      language: "Urdu, Hindi",
      rating: 4.8,
      experience: "10 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    {
      name: "Vijay Kapoor",
      expertise: "Numerology",
      language: "Punjabi, English",
      rating: 4.7,
      experience: "9 Years",
      price: 5,
      image: image,
    },
    // ... more astrologers as before
  ];

  // 💡 Apply Filters
  const applyFilters = () => {
    const filtered = astrologers.filter((astro) => {
      const matchesSearch = astro.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesLanguage =
        language === "All" ||
        astro.language.toLowerCase().includes(language.toLowerCase());
      const matchesExpertise =
        expertise === "All" ||
        astro.expertise.toLowerCase().includes(expertise.toLowerCase());
      return matchesSearch && matchesLanguage && matchesExpertise;
    });
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  // 🧮 Paginated Data
  const currentData = useMemo(() => {
    const data = filteredData.length ? filteredData : astrologers;
    const startIndex = (currentPage - 1) * cardsPerPage;
    return data.slice(startIndex, startIndex + cardsPerPage);
  }, [filteredData, currentPage]);

  const totalPages = Math.ceil(
    (filteredData.length || astrologers.length) / cardsPerPage
  );

  // ✅ Scroll to top whenever currentPage changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E1] via-[#FFF3E0] to-[#FFECB3] py-16 px-6 mt-10">
      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FD8115] to-[#FFCC33]"
      >
        🔮{type || ""} Our Expert Astrologers
      </motion.h1>
      <p className="text-center mt-3 text-gray-700 italic">
        Connect with certified astrologers for personalized guidance.
      </p>

      {/* SEARCH + FILTERS */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-8 flex-wrap">
        <input
          type="text"
          placeholder="Search astrologers by name..."
          className="w-full sm:w-1/4 px-4 py-2 border border-yellow-400 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FD8115] transition-all"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full sm:w-1/5 px-4 py-2 border border-yellow-400 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-[#FD8115] transition-all text-gray-700"
        >
          <option value="All">All Languages</option>
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
          <option value="Urdu">Urdu</option>
          <option value="Punjabi">Punjabi</option>
          <option value="Gujarati">Gujarati</option>
        </select>

        <select
          value={expertise}
          onChange={(e) => setExpertise(e.target.value)}
          className="w-full sm:w-1/5 px-4 py-2 border border-yellow-400 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-[#FD8115] transition-all text-gray-700"
        >
          <option value="All">All Expertise</option>
          <option value="Vedic">Vedic Astrology</option>
          <option value="Numerology">Numerology</option>
          <option value="Tarot">Tarot Reading</option>
          <option value="KP">KP Astrology</option>
          <option value="Palm">Palm Reading</option>
        </select>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={applyFilters}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-[#FD8115] to-[#FFCC33] text-white font-bold shadow-lg hover:shadow-[#FFD54F]/60 transition-all"
        >
          Apply Filters
        </motion.button>
      </div>

      {/* ASTROLOGER GRID */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {currentData.map((astro, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white shadow-md hover:shadow-lg border border-[#FFE082] rounded-2xl p-4 flex flex-col items-center relative"
          >
            {/* Top Badge and Status */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="bg-gradient-to-r from-[#FD8115] to-[#FFCC33] text-white text-[10px] font-semibold px-2 py-[2px] rounded-full shadow">
                Best In
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
            </div>

            {/* Profile Image */}
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#FFCC33] mt-2">
              <Image
                src={astro.image || "/default-profile.png"}
                alt={astro.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Astrologer Info */}
            <div className="text-center mt-3">
              <h2 className="text-sm md:text-base font-bold text-[#FD8115]">
                {astro.name}
              </h2>
              <p className="text-gray-500 text-xs mt-1">{astro.language}</p>
              <p className="text-gray-700 text-xs mt-1">{astro.expertise}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center gap-1 mt-2 text-xs text-yellow-600 font-semibold">
              ⭐ {astro.rating}
            </div>

            {/* Price */}
            <div className="text-[#2E7D32] font-semibold text-xs mt-2">
              ₹{astro.price}/min
            </div>

            {/* View Profile Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-3 px-5 py-1.5 bg-gradient-to-r from-[#FD8115] to-[#FFCC33] text-white text-xs font-semibold rounded-full shadow-md hover:shadow-[#FFD54F]/70 transition-all"
            >
              View Profile
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center mt-10 gap-3">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className={`px-4 py-2 rounded-full font-semibold ${
            currentPage === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-[#FD8115] to-[#FFCC33] text-white"
          }`}
        >
          ← Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-full font-semibold ${
              currentPage === i + 1
                ? "bg-gradient-to-r from-[#FD8115] to-[#FFCC33] text-white"
                : "bg-white border border-[#FFCC33] text-[#FD8115]"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className={`px-4 py-2 rounded-full font-semibold ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-[#FD8115] to-[#FFCC33] text-white"
          }`}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
