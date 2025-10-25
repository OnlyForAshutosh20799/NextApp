"use client";

import { useState, useMemo } from "react";
import poojaa from "../../../../../public/assets/services/lakshmiPooja.webp"
const categories = [
  "Career Report",
  "Finance Horoscope",
  "Family Horoscope",
  "Health Horoscope",
  "Education Horoscope",
  "Gemstone Prediction",
  "Yearly Horoscope",
  "Numerology Horoscope",
  "Kundli Dosh Calculation",
  "Lal Kitab Prediction",
  "Marriage matching",
  "Planet Transit Prediction",
  "In Depth Horoscope",
  "120 year Dasha Analysis",
  "300 Yoga Calculation",
  "Muhurat",
];

const poojas = {
  "Career Report" : [
    {
      title: "Navgraha Shanti Puja",
      desc: "Appease the nine planets & bring harmony, positivity, and blessings into your life.",
      img: poojaa,
    },
    {
      title: "Surya Shanti Puja",
      desc: "Invoke the Sun God's power to radiate positivity, illuminate life, and enhance confidence.",
      img: poojaa,
    },
    {
      title: "Mangal Shanti Puja",
      desc: "Reduce the malefic effects of Mars, bring peace, and attract strong energy & courage.",
      img: poojaa,
    },
    // Dummy Poojas
    { title: "Chandra Shanti Puja", desc: "Calm lunar influences for emotional balance.", img: poojaa },
    { title: "Budh Shanti Puja", desc: "Enhance intellect and communication skills.", img: poojaa },
    { title: "Guru Shanti Puja", desc: "Seek wisdom and guidance from Jupiter.", img: poojaa },
    { title: "Shani Shanti Puja", desc: "Mitigate Saturn's challenges for stability.", img: poojaa },
    { title: "Rahu Shanti Puja", desc: "Balance Rahu's effects for growth and protection.", img: poojaa },
  ],
  "Finance Horoscope" : [
    {
      title: "Radha Krishna Prem Pooja",
      desc: "Enhance love, understanding, and spiritual connection with your partner.",
      img: poojaa,
    },
    {
      title: "Shukra Shanti Puja",
      desc: "Invoke Venus' blessings for emotional bonding, romance, and creative energy.",
      img: poojaa,
    },
    // Dummy Poojas
    { title: "Kamdev Pooja", desc: "Attract love and strengthen relationships.", img: poojaa },
    { title: "Lakshmi Narayan Pooja", desc: "Blessings for marital harmony and prosperity.", img: poojaa },
    { title: "Sita Ram Pooja", desc: "Foster trust and devotion in relationships.", img: poojaa },
    { title: "Gauri Shankar Pooja", desc: "Enhance marital bliss and unity.", img: poojaa },
    { title: "Mohini Pooja", desc: "Attract love and admiration from others.", img: poojaa },
  ],
 
};

// combine all poojas by default
const allPoojas = Object.values(poojas).flat();

export default function PoojaBooking() {
    console.log("flksdjflkds", poojaa)

  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const filteredPoojas = useMemo(() => {
    if (!selectedCategory) return allPoojas;
    return poojas[selectedCategory] || [];
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredPoojas.length / itemsPerPage);
  const currentItems = filteredPoojas.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="mt-15 min-h-screen bg-gradient-to-br from-[#FFF8E1] via-[#FFF3E0] to-[#FFECB3] flex flex-col items-center px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#5A3E00] drop-shadow-lg">
          Astrologer Written Horoscope Prediction
        </h1>
        <p className="text-gray-700 mt-3 text-base md:text-lg max-w-2xl mx-auto">
          Get Your Customized Career Horoscope in PDF - Unlock Your Future Success
        </p>
        <p>These predictions are prepared by an astrologer within 3 to 24 working hours and sent via email.</p>
      </div>

      {/* Dropdown */}
      <div className="mb-8 w-full max-w-md">
        <select
          onChange={handleCategoryChange}
          className="w-full p-3 md:p-4 text-gray-800 bg-white border border-yellow-200 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Pooja Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-7xl">
        {currentItems.length > 0 ? (
          currentItems.map((pooja, index) =>(
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1"
            >
              <div className="relative h-40 md:h-44 overflow-hidden">
                <img
                  src={pooja.img}
                  alt={pooja.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-[#6A4B00] mb-2">
                  {pooja.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {pooja.desc}
                </p>
                <button className="w-full bg-gradient-to-r from-[#FD8115] to-[#FFCC33] text-white py-2 rounded-lg font-semibold shadow-md hover:scale-105 transform transition duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center italic col-span-full">
            No data available for this category yet.
          </p>
        ) }
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-10 gap-3 flex-wrap">
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
      )}
    </div>
  );
}
