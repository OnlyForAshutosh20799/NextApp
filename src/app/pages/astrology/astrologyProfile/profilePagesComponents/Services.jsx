"use client";

import React from "react";

const Services = () => {
  const services = [
    {
      icon: "💼",
      title: "Career Guidance",
      description:
        "Find your ideal career path and overcome professional challenges.",
      features: ["Career Analysis", "Job Transition", "Business Growth"],
    },
    {
      icon: "❤️",
      title: "Relationship Analysis",
      description:
        "Understand compatibility and improve your relationships.",
      features: ["Love Compatibility", "Marriage Guidance", "Family Harmony"],
    },
    {
      icon: "💰",
      title: "Wealth & Finance",
      description:
        "Optimize your financial decisions and attract abundance.",
      features: ["Financial Planning", "Investment Guidance", "Wealth Growth"],
    },
    {
      icon: "🎓",
      title: "Education Planning",
      description:
        "Excel in academics and choose the right educational path.",
      features: ["Study Guidance", "Career Selection", "Exam Success"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#fff8ef] to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            My Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive astrology services tailored to your unique needs and
            life situations.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#f4a300] to-[#e0a82d] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="h-2 bg-gradient-to-r from-[#f4a300] to-[#e0a82d]"></div>

              <div className="p-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <span className="w-2 h-2 bg-[#f4a300] rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-[#f4a300] to-[#e0a82d] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-[#f4a300] to-[#e0a82d] rounded-3xl p-10 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">
            Need Immediate Guidance?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Get quick answers to your pressing questions with our express consultation service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#d97706] px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
              📞 15-min Call (₹299)
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#d97706] transition-all duration-300">
              💬 Chat Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
