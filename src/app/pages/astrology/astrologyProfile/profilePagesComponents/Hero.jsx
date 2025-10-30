'use client';

import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-[#FFF8E1] to-[#FFF3C4]"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-gradient-to-r from-[#F4A300] to-[#FFD700] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              🔮 Certified Vedic Astrologer
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Unlock Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F4A300] to-[#FFD700]">
                Cosmic Potential
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover your true path with personalized Vedic astrology guidance. I blend
              ancient wisdom with modern insights to help you navigate career, relationships,
              and life's important decisions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F4A300]">7+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FFD700]">5K+</div>
                <div className="text-gray-600 text-sm">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F4A300]">98%</div>
                <div className="text-gray-600 text-sm">Satisfaction Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-[#F4A300] to-[#FFD700] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
                Book Consultation
              </button>
              <button className="border border-[#FFD700] text-[#F4A300] px-8 py-4 rounded-xl font-semibold hover:bg-[#FFF4D6] transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image / Illustration */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://plus.unsplash.com/premium_photo-1723701832228-ab221dbd3fd4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJpZXN0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700"
              alt="Astrologer Illustration"
              className="max-w-full w-[400px] lg:w-[500px] drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
