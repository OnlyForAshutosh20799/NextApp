"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";

import poojaa from "../../../../../public/assets/services/lakshmiPooja.webp"
const categories = [
  "Navgraha",
  "Love & Relationship Pooja",
  "Pooja for Vashikaran",
  "Pooja for Career",
  "Pooja for Finance",
  "Pooja for Education",
  "Pooja for Travel",
  "Pooja for Child Birth",
  "Pooja for Planetary",
  "Pooja for Marriage",
  "Pooja for Health",
  "Nakshtra Pooja",
  "Dosh",
  "Pooja for Overcome Enemies",
  "Path and Jaap",
  "Evil Eye",
];

const poojas = {
  Navgraha : [
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
  "Love & Relationship Pooja": [
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
  "Pooja for Vashikaran": [
    // Dummy Poojas
    { title: "Vashikaran Yantra Puja", desc: "Control and influence desired individuals.", img: poojaa },
    { title: "Mohini Vashikaran Puja", desc: "Attract and charm with divine energy.", img: poojaa },
    { title: "Kamdev Vashikaran Puja", desc: "Enhance love attraction through rituals.", img: poojaa },
    { title: "Annapurna Vashikaran Puja", desc: "Influence with nurturing energy.", img: poojaa },
    { title: "Shabar Vashikaran Puja", desc: "Powerful ritual for control and harmony.", img: poojaa },
  ],
  "Pooja for Career": [
    // Dummy Poojas
    { title: "Lakshmi Kubera Puja", desc: "Boost career growth and financial success.", img: poojaa },
    { title: "Saraswati Puja", desc: "Enhance skills and professional success.", img: poojaa },
    { title: "Ganesh Puja", desc: "Remove obstacles in career path.", img: poojaa },
    { title: "Hanuman Puja", desc: "Strengthen willpower for career goals.", img: poojaa },
    { title: "Shani Career Puja", desc: "Overcome delays in professional life.", img: poojaa },
  ],
  "Pooja for Finance": [
    // Dummy Poojas
    { title: "Kubera Lakshmi Puja", desc: "Attract wealth and financial stability.", img: poojaa },
    { title: "Dhanteras Puja", desc: "Invoke prosperity and financial growth.", img: poojaa },
    { title: "Gaja Lakshmi Puja", desc: "Enhance financial security and abundance.", img: poojaa },
    { title: "Kuber Yantra Puja", desc: "Amplify wealth through divine blessings.", img: poojaa },
    { title: "Shree Yantra Puja", desc: "Attract financial prosperity and success.", img: poojaa },
  ],
  "Pooja for Education": [
    // Dummy Poojas
    { title: "Saraswati Havan", desc: "Boost learning and academic success.", img: poojaa },
    { title: "Vidya Lakshmi Puja", desc: "Enhance knowledge and concentration.", img: poojaa },
    { title: "Ganesha Vidya Puja", desc: "Remove obstacles in education.", img: poojaa },
    { title: "Brahma Puja", desc: "Invoke wisdom for academic excellence.", img: poojaa },
    { title: "Hayagriva Puja", desc: "Strengthen memory and intellect.", img: poojaa },
  ],
  "Pooja for Travel": [
    // Dummy Poojas
    { title: "Vishnu Padma Puja", desc: "Ensure safe and successful travel.", img: poojaa },
    { title: "Ganga Puja", desc: "Blessings for smooth travel journeys.", img: poojaa },
    { title: "Hanuman Travel Puja", desc: "Protection during travel adventures.", img: poojaa },
    { title: "Shiva Travel Puja", desc: "Safe passage with divine guidance.", img: poojaa },
    { title: "Durga Travel Puja", desc: "Shield from travel-related obstacles.", img: poojaa },
  ],
  "Pooja for Child Birth": [
    // Dummy Poojas
    { title: "Santana Gopala Puja", desc: "Blessings for healthy childbirth.", img: poojaa },
    { title: "Putra Kameshti Puja", desc: "Invoke divine grace for progeny.", img: poojaa },
    { title: "Annapurna Child Puja", desc: "Nurture and bless new life.", img: poojaa },
    { title: "Lakshmi Child Puja", desc: "Prosperity for the newborn.", img: poojaa },
    { title: "Durga Child Puja", desc: "Protection for mother and child.", img: poojaa },
  ],
  "Pooja for Planetary": [
    // Dummy Poojas
    { title: "Rahu Ketu Puja", desc: "Balance planetary influences.", img: poojaa },
    { title: "Ketu Shanti Puja", desc: "Mitigate Ketu's effects for peace.", img: poojaa },
    { title: "Jupiter Growth Puja", desc: "Enhance Jupiter's positive impact.", img: poojaa },
    { title: "Mercury Balance Puja", desc: "Harmonize Mercury's energy.", img: poojaa },
    { title: "Venus Harmony Puja", desc: "Strengthen Venus for love and art.", img: poojaa },
  ],
  "Pooja for Marriage": [
    // Dummy Poojas
    { title: "Vivah Gauri Puja", desc: "Blessings for a happy marriage.", img: poojaa },
    { title: "Shiva Parvati Puja", desc: "Strengthen marital bonds.", img: poojaa },
    { title: "Mangal Dosha Puja", desc: "Resolve marriage delays.", img: poojaa },
    { title: "Lagna Shanti Puja", desc: "Harmonize marriage prospects.", img: poojaa },
    { title: "Swayamvara Puja", desc: "Attract a suitable life partner.", img: poojaa },
  ],
  "Pooja for Health": [
    // Dummy Poojas
    { title: "Dhanvantari Puja", desc: "Healing and good health blessings.", img: poojaa },
    { title: "Shiva Health Puja", desc: "Restore physical and mental health.", img: poojaa },
    { title: "Hanuman Health Puja", desc: "Strength and vitality through rituals.", img: poojaa },
    { title: "Surya Health Puja", desc: "Boost immunity with solar energy.", img: poojaa },
    { title: "Lakshmi Health Puja", desc: "Prosperity with good health.", img: poojaa },
  ],
  "Nakshtra Pooja": [
    // Dummy Poojas
    { title: "Ashwini Nakshatra Puja", desc: "Blessings for healing and speed.", img: poojaa },
    { title: "Rohini Nakshatra Puja", desc: "Enhance growth and fertility.", img: poojaa },
    { title: "Mrigashira Puja", desc: "Attract love and creativity.", img: poojaa },
    { title: "Punarvasu Puja", desc: "Renewal and prosperity blessings.", img: poojaa },
    { title: "Pushya Nakshatra Puja", desc: "Nurturing and spiritual growth.", img: poojaa },
  ],
  Dosh: [
    // Dummy Poojas
    { title: "Kaalsarpa Dosh Puja", desc: "Remove serpent-related obstacles.", img: poojaa },
    { title: "Pitru Dosh Puja", desc: "Resolve ancestral karmic issues.", img: poojaa },
    { title: "Nadi Dosh Puja", desc: "Harmonize marital compatibility.", img: poojaa },
    { title: "Rahu Dosh Puja", desc: "Mitigate Rahu's negative effects.", img: poojaa },
    { title: "Ketu Dosh Puja", desc: "Balance Ketu's spiritual influence.", img: poojaa },
  ],
  "Pooja for Overcome Enemies": [
    // Dummy Poojas
    { title: "Baglamukhi Puja", desc: "Defeat enemies and obstacles.", img: poojaa },
    { title: "Hanuman Enemy Puja", desc: "Protection from adversaries.", img: poojaa },
    { title: "Kali Enemy Puja", desc: "Overcome evil forces and enemies.", img: poojaa },
    { title: "Durga Enemy Puja", desc: "Strength to conquer opposition.", img: poojaa },
    { title: "Maruti Enemy Puja", desc: "Shield against enemy attacks.", img: poojaa },
  ],
  "Path and Jaap": [
    // Dummy Poojas
    { title: "Mahamrityunjaya Jaap", desc: "Healing and longevity mantra.", img: poojaa },
    { title: "Ganesh Path", desc: "Remove obstacles with chanting.", img: poojaa },
    { title: "Lakshmi Path", desc: "Attract wealth through recitation.", img: poojaa },
    { title: "Sunderkand Path", desc: "Strength and protection mantra.", img: poojaa },
    { title: "Durga Saptashati", desc: "Divine protection and power.", img: poojaa },
  ],
  "Evil Eye": [
    // Dummy Poojas
    { title: "Nazar Suraksha Puja", desc: "Protect from evil eye effects.", img: poojaa },
    { title: "Hanuman Nazar Puja", desc: "Shield from negative energies.", img: poojaa },
    { title: "Kali Nazar Puja", desc: "Remove evil eye influences.", img: poojaa },
    { title: "Durga Nazar Puja", desc: "Safeguard against envy.", img: poojaa },
    { title: "Shiva Nazar Puja", desc: "Balance and protect from malice.", img: poojaa },
  ],
};

// combine all poojas by default
const allPoojas = Object.values(poojas).flat();

export default function PoojaBooking() {
 
const router = useRouter();

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

  const handleClick =()=>{
    router.push(`/pages/bookPooja/bookPoojaAllSection/mainSection`);
  }

  return (
    <div className="mt-15 min-h-screen bg-gradient-to-br from-[#FFF8E1] via-[#FFF3E0] to-[#FFECB3] flex flex-col items-center px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#5A3E00] drop-shadow-lg">
          🪔 Book Your Divine Pooja
        </h1>
        <p className="text-gray-700 mt-3 text-base md:text-lg max-w-2xl mx-auto">
          Choose from sacred rituals and connect with divine energies to bring
          peace, prosperity, and balance into your life.
        </p>
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
                <button
                onClick={handleClick}
                className="w-full bg-gradient-to-r from-[#FD8115] to-[#FFCC33] text-white py-2 rounded-lg font-semibold shadow-md hover:scale-105 transform transition duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center italic col-span-full">
            No poojas available for this category yet.
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
