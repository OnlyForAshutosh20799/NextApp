"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

const HoroscopePackages = () => {
  const packages = [
    {
      name: "Basic Insight",
      price: "₹999",
      duration: "30 mins",
      features: [
        "Basic Birth Chart Analysis",
        "Current Month Prediction",
        "2 Specific Questions",
        "Email Support",
      ],
      popular: false,
    },
    {
      name: "Comprehensive Guide",
      price: "₹2,499",
      duration: "60 mins",
      features: [
        "Detailed Birth Chart Analysis",
        "3 Months Detailed Prediction",
        "Unlimited Questions",
        "Remedial Solutions",
        "Priority Email Support",
      ],
      popular: true,
    },
    {
      name: "Life Transformation",
      price: "₹4,999",
      duration: "120 mins",
      features: [
        "Complete Life Analysis",
        "1 Year Detailed Prediction",
        "Career & Relationship Focus",
        "Personalized Gemstone Guidance",
        "24/7 Phone Support",
        "Follow-up Session",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF8E1] to-[#FFF3C4]" id="horoscope">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Consultation Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package that aligns with your needs and budget
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative group rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                pkg.popular
                  ? "bg-gradient-to-br from-yellow-500 to-orange-500 text-white shadow-xl scale-105"
                  : "bg-white border border-gray-100 text-gray-800 shadow-md hover:shadow-lg"
              }`}
            >
              {/* Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-yellow-600 px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Package Title */}
              <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-extrabold">{pkg.price}</span>
                <span
                  className={`ml-2 ${
                    pkg.popular ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  / {pkg.duration}
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle
                      className={`w-5 h-5 mt-1 ${
                        pkg.popular ? "text-white" : "text-yellow-500"
                      }`}
                    />
                    <span
                      className={`text-base ${
                        pkg.popular ? "text-white" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? "bg-white text-yellow-600 hover:shadow-lg"
                    : "bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:shadow-lg"
                }`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoroscopePackages;
