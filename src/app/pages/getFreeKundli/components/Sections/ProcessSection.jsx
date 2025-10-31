"use client";
import React from "react";

const steps = [
  {
    step: "01",
    title: "Enter Your Details",
    description:
      "Provide your accurate birth information for precise astrological calculations",
  },
  {
    step: "02",
    title: "Generate Report",
    description:
      "Our system creates your personalized 50,000+ word astrology report instantly",
  },
  {
    step: "03",
    title: "Explore Insights",
    description:
      "Access your dashboard to read, download, or listen to your comprehensive report",
  },
  {
    step: "04",
    title: "Take Action",
    description:
      "Use the insights and remedies to navigate life challenges and opportunities",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-24 h-24 bg-[#f5d67b] rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-1/3 w-32 h-32 bg-[#f2c94c] rounded-full opacity-25 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent text-[28px] md:text-[32px] lg:text-[48px] font-extrabold ">
              Your Journey to Self-Discovery
            </span>
          </h2>
          <p className="text-lg text-[#a16207] max-w-2xl mx-auto">
            Follow these simple steps to unlock profound astrological insights
            and transform your life path
          </p>
        </div>

        {/* Steps Section */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-[#f7d774] to-[#f2c94c]">
            <div className="absolute inset-0 bg-[#f5d67b]/50 rounded-full animate-pulse"></div>
          </div>

          {/* Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="group relative text-center">
                {/* Step Number */}
                <div className="relative mx-auto mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#f2c94c] to-[#e9b949] rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-2xl group-hover:scale-110 group-hover:shadow-[#f7e49b] transition-all duration-500">
                    {step.step}
                  </div>
                  {/* Glow Ping */}
                  <div className="absolute inset-0 w-20 h-20 bg-[#f5d67b] rounded-2xl opacity-0 group-hover:opacity-40 animate-ping transition-opacity duration-500"></div>
                </div>

                {/* Step Content */}
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#f3e2a9] group-hover:border-[#f2c94c] group-hover:shadow-[#f7e49b]/60 transition-all duration-500">
                  <h3 className="text-xl font-semibold text-[#a27800] mb-4 group-hover:text-[#d4a017] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[#b8860b] leading-relaxed group-hover:text-[#9c7400] transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                {/* Connector Dots (Mobile) */}
                {index < steps.length - 1 && (
                  <>
                    <div className="lg:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#f2c94c] rounded-full"></div>
                    </div>
                    <div className="lg:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 flex items-center justify-center">
                      <div className="w-1 h-1 bg-[#f7d774] rounded-full"></div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
