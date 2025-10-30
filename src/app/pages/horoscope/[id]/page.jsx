"use client";

import React, { useState, useEffect } from "react";
import FaqSection from "../resuableComponent/FaqSection";
import HoroscopeHero from "../resuableComponent/HoroscopeHero";
import { useParams, useRouter } from "next/navigation";
import { Contact } from "lucide-react";

const HoroscopePage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("Love");
  const [selectedZodiac, setSelectedZodiac] = useState("Aries");


  useEffect(() => {
    if (!id) return;
    const byName = zodiacSigns.find(
      (z) => z.name.toLowerCase() === id.toLowerCase()
    );
    const byId = zodiacSigns.find((z) => z.id.toString() === id.toString());

    if (byName) {
      setSelectedZodiac(byName.name);
    } else if (byId) {
      setSelectedZodiac(byId.name);
    }
  }, [id]);

  const zodiacSigns = [
    {
      id: 1,
      name: "Aries",
      dates: "Mar 21 - Apr 19",
      tagline: "The Bold Trailblazer ",
      image: "https://cdn-icons-png.flaticon.com/128/47/47043.png",
      color: "from-red-500 to-orange-400",
    },
    {
      id: 2,
      name: "Taurus",
      dates: "Apr 20 - May 20",
      tagline: "The Earthly Comfort Seeker ",
      image: "https://cdn-icons-png.flaticon.com/128/47/47219.png",
      color: "from-yellow-600 to-lime-400",
    },
    {
      id: 3,
      name: "Gemini",
      dates: "May 21 - Jun 20",
      tagline: "The Dual Dreamer ",
      image: "https://cdn-icons-png.flaticon.com/128/17926/17926014.png",
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: 4,
      name: "Cancer",
      dates: "Jun 21 - Jul 22",
      tagline: "The Gentle Guardian ",
      image: "https://cdn-icons-png.flaticon.com/128/47/47321.png",
      color: "from-pink-500 to-rose-400",
    },
    {
      id: 5,
      name: "Leo",
      dates: "Jul 23 - Aug 22",
      tagline: "The Fearless Leader ",
      image: "https://cdn-icons-png.flaticon.com/128/47/47157.png",
      color: "from-orange-500 to-yellow-400",
    },
    {
      id: 6,
      name: "Virgo",
      dates: "Aug 23 - Sep 22",
      tagline: "The Perfectionist Thinker ",
      image: "https://cdn-icons-png.flaticon.com/128/47/47038.png",
      color: "from-green-600 to-emerald-400",
    },
    {
      id: 7,
      name: "Libra",
      dates: "Sep 23 - Oct 22",
      tagline: "The Balancer of Worlds ",
      image: "https://cdn-icons-png.flaticon.com/128/47/47047.png",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 8,
      name: "Scorpio",
      dates: "Oct 23 - Nov 21",
      tagline: "The Mysterious Transformer ",
      image: "https://cdn-icons-png.flaticon.com/128/47/47183.png",
      color: "from-red-700 to-purple-700",
    },
    {
      id: 9,
      name: "Sagittarius",
      dates: "Nov 22 - Dec 21",
      tagline: "The Freedom Seeker ",
      image: "https://cdn-icons-png.flaticon.com/128/47/47213.png",
      color: "from-orange-400 to-amber-400",
    },
    {
      id: 10,
      name: "Capricorn",
      dates: "Dec 22 - Jan 19",
      tagline: "The Ambitious Climber ",
      image: "https://cdn-icons-png.flaticon.com/128/7828/7828321.png",
      color: "from-gray-700 to-slate-500",
    },
    {
      id: 11,
      name: "Aquarius",
      dates: "Jan 20 - Feb 18",
      tagline: "The Visionary Innovator ",
      image: "https://cdn-icons-png.flaticon.com/128/5796/5796758.png ",
      color: "from-blue-400 to-indigo-400",
    },
    {
      id: 12,
      name: "Pisces",
      dates: "Feb 19 - Mar 20",
      tagline: "The Dreamy Healer ",
      image: "https://cdn-icons-png.flaticon.com/128/47/47405.png",
      color: "from-cyan-500 to-teal-400",
    },
  ];

  // Horoscope data for each zodiac sign
  const horoscopeData = {
    Aries: {
      love: "Aries, your passionate nature is shining bright! This is a great time to express your feelings openly. Singles might meet someone exciting at social events.",
      health:
        "Your energy levels are high. Consider trying a new workout routine to channel your vibrant energy positively.",
      career:
        "New opportunities are coming your way. Don't hesitate to take the lead on projects that excite you.",
      emotion:
        "You're feeling particularly courageous and optimistic. Use this energy to overcome any challenges.",
      travel:
        "Spontaneous short trips could bring unexpected joy and new connections.",
      wealth:
        "Financial gains possible through bold decisions, but avoid impulsive spending.",
    },
    Taurus: {
      love: "Taurus, focus on building stable connections. Your reliable nature is very attractive right now.",
      health:
        "Ground yourself with nature walks and healthy meals. Your body craves stability.",
      career:
        "Steady progress is key. Your hard work will pay off in the long run.",
      emotion:
        "You're seeking comfort and security. Create a peaceful environment at home.",
      travel:
        "Luxury getaways or nature retreats would be perfect for you now.",
      wealth:
        "Good time for long-term investments. Avoid major financial risks.",
    },
    // Add similar data for other zodiac signs...
  };

  const luckyItems = {
    Aries: {
      colors: "Red, Orange, Gold",
      numbers: "4, 8, 9, 17",
      alphabets: "Q, O, W, M",
    },
    Taurus: {
      colors: "Green, Pink, Yellow",
      numbers: "2, 6, 9, 12",
      alphabets: "T, B, R, K",
    },
    Gemini: {
      colors: "Blue, Yellow, Silver",
      numbers: "3, 7, 12, 21",
      alphabets: "G, M, S, Z",
    },
    // Add for other signs...
  };

  const tipsData = {
    Aries: [
      {
        title: "Cosmic Tip",
        text: "Don't let fear hold you back, Aries. Trust your instincts & embrace passion.",
        icon: "🌌",
      },
      {
        title: "Tips for Singles",
        text: "Stay positive and open to new connections; trust your energy and charisma.",
        icon: "💖",
      },
      {
        title: "Tips for Couples",
        text: "Communication & mutual understanding will strengthen your bond.",
        icon: "💑",
      },
    ],
    Taurus: [
      {
        title: "Cosmic Tip",
        text: "Embrace stability but don't resist change. Growth often comes from stepping out of comfort zones.",
        icon: "🌿",
      },
      {
        title: "Tips for Singles",
        text: "Look for someone who appreciates your steady and reliable nature.",
        icon: "💖",
      },
      {
        title: "Tips for Couples",
        text: "Small, consistent gestures of love mean more than grand declarations.",
        icon: "💑",
      },
    ],
    // Add for other signs...
  };

  const currentZodiac =
    zodiacSigns.find((zodiac) => zodiac.name === selectedZodiac) ||
    zodiacSigns[0];
  const currentHoroscope = horoscopeData[selectedZodiac] || horoscopeData.Aries;
  const currentLuckyItems = luckyItems[selectedZodiac] || luckyItems.Aries;
  const currentTips = tipsData[selectedZodiac] || tipsData.Aries;

  return (
    <main className="bg-white">
      <HoroscopeHero />
      {/* Background decorative elements */}
      {/* <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-amber-50 via-orange-25 to-white -z-10"></div>
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-yellow-100 rounded-full blur-3xl opacity-40 -z-10"></div> */}

      <div className="relative min-h-screen bg-transparent text-gray-800 py-10 px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
            ✨ Cosmic Insights Await ✨
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm mb-4">
            Your Daily Horoscope
          </h1>
          <p className="text-lg text-yellow-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Discover personalized insights, cosmic tips, and love advice
            tailored for your zodiac sign
          </p>
        </div>

        {/* Zodiac Icons Grid */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap max-w-6xl mx-auto">
          {zodiacSigns.map((zodiac) => (
            <div
              key={zodiac.name}
              onClick={() => {
                setSelectedZodiac(zodiac.name);
                router.push(`/horoscope/${zodiac.name}`); 
              }}
              className={`group cursor-pointer transform transition-all duration-300 hover:scale-110 ${
                selectedZodiac === zodiac.name ? "scale-110" : ""
              }`}
            >
              <div
                className={`relative w-20 h-20 rounded-2xl p-1 transition-all duration-300 ${
                  selectedZodiac === zodiac.name
                    ? `bg-gradient-to-br ${zodiac.color} shadow-xl ring-2 ring-amber-300`
                    : "bg-gradient-to-br from-white to-amber-50 shadow-lg hover:shadow-xl border border-yellow-100"
                }`}
              >
                <div className="w-full h-full rounded-xl bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src={zodiac.image}
                    alt={zodiac.name}
                    className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                {selectedZodiac === zodiac.name && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
              </div>
              <p
                className={`text-center mt-2 text-sm font-medium transition-colors ${
                  selectedZodiac === zodiac.name
                    ? "text-amber-700 font-bold"
                    : "text-gray-600"
                }`}
              >
                {zodiac.name}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-white to-amber-25 shadow-xl rounded-3xl p-6 border border-yellow-200 sticky top-8">
              <div className="flex items-center gap-4 mb-6 p-4 bg-white rounded-2xl shadow-sm border border-yellow-100">
                <div className="relative">
                  <img
                    src={currentZodiac.image}
                    alt={currentZodiac.name}
                    className="w-16 h-16 rounded-2xl border-2 border-amber-300 shadow-md"
                  />
                  <div
                    className={`absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br ${currentZodiac.color} rounded-full flex items-center justify-center`}
                  >
                    <span className="text-white text-xs">
                      {currentZodiac.name[0]}
                    </span>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent">
                    {currentZodiac.name}
                  </h2>
                  <p className="text-sm text-yellow-600">
                    {currentZodiac.dates}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {currentZodiac.tagline}
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {[
                  "Yesterday Horoscope",
                  "Today Horoscope",
                  "Tomorrow Horoscope",
                  "Weekly Horoscope",
                  "Monthly Horoscope",
                  "Yearly Horoscope",
                ].map((item, i) => (
                  <li
                    key={i}
                    className={`cursor-pointer px-4 py-3 rounded-xl text-sm font-medium border transition-all duration-200 hover:text-white hover:bg-gradient-to-r from-amber-500 to-amber-600 text-gray-700  border-yellow-100 hover:border-amber-200 hover:transform hover:scale-105"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3 space-y-8">
            {/* Lucky Items */}
            <div className="bg-gradient-to-br from-white to-amber-25 border border-yellow-200 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-8 bg-gradient-to-b from-amber-500 to-yellow-500 rounded-full"></div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent">
                  Lucky Items for {currentZodiac.name}
                </h3>
                <div className="ml-auto w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-600 text-lg">🍀</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    label: "Lucky Colors",
                    value: currentLuckyItems.colors,
                    icon: "🎨",
                  },
                  {
                    label: "Lucky Numbers",
                    value: currentLuckyItems.numbers,
                    icon: "🔢",
                  },
                  {
                    label: "Lucky Alphabets",
                    value: currentLuckyItems.alphabets,
                    icon: "🔤",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-5 text-center border border-yellow-100 hover:border-amber-200 transition-all duration-300 hover:shadow-lg group"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 border border-yellow-200 group-hover:border-amber-300 transition-colors">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <h4 className="font-semibold text-amber-700 mb-2">
                      {item.label}
                    </h4>
                    <p className="text-yellow-700 font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-3 bg-white rounded-2xl p-4 shadow-lg border border-yellow-100">
              {["Love", "Health", "Career", "Emotion", "Travel", "Wealth"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 border-2 text-sm min-w-20 ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-transparent shadow-lg transform scale-105"
                        : "bg-white border-yellow-200 text-amber-700 hover:bg-amber-50 hover:border-amber-300 hover:transform hover:scale-105"
                    }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </div>

            {/* Tab Content */}
            <div className="bg-gradient-to-br from-white to-amber-25 border border-yellow-200 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-10 h-10 bg-gradient-to-br ${currentZodiac.color} rounded-xl flex items-center justify-center`}
                >
                  <span className="text-white text-lg">⭐</span>
                </div>
                <h4 className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent">
                  {activeTab} Horoscope for {currentZodiac.name}
                </h4>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {currentHoroscope[activeTab.toLowerCase()] || ""}
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                <p className="text-amber-800 text-center font-medium">
                  💫 <strong>Cosmic Advice:</strong> {currentZodiac.tagline}{" "}
                  Embrace the positive energy and take bold steps forward!
                </p>
              </div>
            </div>

            {/* Tips Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {currentTips.map((tip, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-white to-amber-25 border border-yellow-200 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 group"
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${currentZodiac.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-2xl text-white">{tip.icon}</span>
                  </div>
                  <h5 className="text-xl font-bold text-amber-700 mb-3">
                    {tip.title}
                  </h5>
                  <p className="text-gray-700 leading-relaxed">{tip.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FaqSection />
    </main>
  );
};

export default HoroscopePage;
