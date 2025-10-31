"use client";

import React from "react";

const ZodiacGrid = () => {
  const zodiacSigns = [
    { name: "Aries", dates: "Mar 21 - Apr 19", symbol: "♈" },
    { name: "Taurus", dates: "Apr 20 - May 20", symbol: "♉" },
    { name: "Gemini", dates: "May 21 - Jun 20", symbol: "♊" },
    { name: "Cancer", dates: "Jun 21 - Jul 22", symbol: "♋" },
    { name: "Leo", dates: "Jul 23 - Aug 22", symbol: "♌" },
    { name: "Virgo", dates: "Aug 23 - Sep 22", symbol: "♍" },
    { name: "Libra", dates: "Sep 23 - Oct 22", symbol: "♎" },
    { name: "Scorpio", dates: "Oct 23 - Nov 21", symbol: "♏" },
    { name: "Sagittarius", dates: "Nov 22 - Dec 21", symbol: "♐" },
    { name: "Capricorn", dates: "Dec 22 - Jan 19", symbol: "♑" },
    { name: "Aquarius", dates: "Jan 20 - Feb 18", symbol: "♒" },
    { name: "Pisces", dates: "Feb 19 - Mar 20", symbol: "♓" },
  ];

  return (
    <section id="zodiac" className="py-20 bg-gradient-to-b from-[#fff8ef] to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Zodiac Signs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover cosmic insights tailored to your zodiac sign
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Zodiac Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {zodiacSigns.map((sign, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-yellow-50 hover:to-orange-50 cursor-pointer"
            >
              {/* Symbol */}
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {sign.symbol}
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">
                {sign.name}
              </h3>

              {/* Dates */}
              <p className="text-sm text-gray-500 mt-1">{sign.dates}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-14">
          <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            Get Your Personalized Horoscope
          </button>
        </div>
      </div>
    </section>
  );
};

export default ZodiacGrid;
