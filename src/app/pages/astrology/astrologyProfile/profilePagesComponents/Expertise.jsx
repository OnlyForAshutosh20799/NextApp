"use client";

import React from "react";

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: "📊",
      title: "Birth Chart Analysis",
      description:
        "Detailed analysis of your natal chart for life insights.",
    },
    {
      icon: "⭐",
      title: "Planetary Periods",
      description:
        "Understand how Mahadashas and Antardashas influence your life.",
    },
    {
      icon: "🔮",
      title: "Remedial Solutions",
      description:
        "Personalized gemstone, mantra, and puja recommendations for balance.",
    },
    {
      icon: "💫",
      title: "Transit Predictions",
      description:
        "Track current planetary movements and their effects on you.",
    },
  ];

  return (
    <section id="expertise" className="py-20 bg-gradient-to-b from-[#fff8ef] to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Areas of Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized Vedic astrology services backed by years of experience and deep knowledge.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#f4a300] to-[#e0a82d] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#fbe6b6] to-[#ffe9c2] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-all duration-300">
                <span className="text-3xl">{area.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {area.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-l from-yellow-500 to-orange-500 rounded-3xl p-10 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#fff] mb-2">7+</div>
              <div className="text-gray-900 font-bold">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#fff] mb-2">5K+</div>
              <div className="text-gray-900 font-bold">Clients Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#fff] mb-2">98%</div>
              <div className="text-gray-900 font-bold">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#fff] mb-2">24/7</div>
              <div className="text-gray-900 font-bold">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
