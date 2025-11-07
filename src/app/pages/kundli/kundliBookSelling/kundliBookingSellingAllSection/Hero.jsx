"use client";

import React from "react";
import {
  Download,
  Star,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1A0F00] via-[#3B1C00] to-[#0D0A00]">

      {/* Cosmic Floating Gradient Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 -left-20 w-96 h-96 bg-gradient-to-br from-orange-500 to-yellow-300 rounded-full blur-[120px] opacity-30" />
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-600 to-pink-400 rounded-full blur-[120px] opacity-40" />
      </div>

      {/* Floating Zodiac Stars */}
      {[...Array(40)].map((_, i) => (
        <span
          key={i}
          className="absolute w-[2px] h-[2px] bg-yellow-300 rounded-full animate-star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.8,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 5}s`,
          }}
        ></span>
      ))}

      {/* Waves Overlay */}
      <div className="absolute bottom-0 left-0 w-full opacity-30">
        <img src="/waves.svg" className="w-full" alt="" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 lg:flex lg:items-center lg:justify-between min-h-screen">
        
        {/* LEFT TEXT */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-7">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-amber-300 via-yellow-400 to-white bg-clip-text drop-shadow-[0_0_20px_rgba(255,180,50,0.6)]">
            1 YEAR FINANCIAL
          </h1>

          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-yellow-500 via-orange-400 to-red-400 bg-clip-text drop-shadow-[0_0_25px_rgba(255,120,0,0.4)]">
            HOROSCOPE
          </h2>

          <p className="text-xl md:text-2xl text-amber-200 tracking-wide font-semibold drop-shadow-lg">
            Unlock Your Wealth Destiny ✨
          </p>

          <p className="text-gray-300 max-w-lg mx-auto lg:mx-0 text-lg leading-relaxed">
            A powerful, detailed financial roadmap crafted by 
            <span className="text-yellow-300 font-bold"> Mr. Astro Verma </span>.
            Know the best months for investments, savings, and wealth expansion.
          </p>

          {/* DOWNLOAD BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <button className="group bg-gradient-to-r from-teal-500 to-green-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-teal-500/50 hover:scale-105 transition">
              <Download className="w-5 h-5 inline-block mr-2 group-hover:translate-y-1 transition" />
              Download Hindi Sample
            </button>

            <button className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition">
              <Download className="w-5 h-5 inline-block mr-2 group-hover:translate-y-1 transition" />
              Download English Sample
            </button>
          </div>

          {/* ORDER BUTTON */}
          <div className="pt-6">
            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-700 text-white px-10 py-4 rounded-full text-2xl shadow-2xl hover:scale-110 transition duration-300">
              Order Now  
              <del className="text-pink-300 text-lg">₹1299/-</del>
              <span className="text-3xl font-bold">₹299/-</span>
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-[0_0_40px_rgba(255,200,100,0.3)] max-w-sm w-full space-y-6">
            
            <div className="flex items-center gap-4">
              <Clock className="w-7 h-7 text-yellow-300" />
              <p className="text-lg text-white">
                <span className="font-bold text-yellow-300">24-Hours</span> Delivery Guarantee
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Star className="w-7 h-7 text-yellow-400" />
              <p className="text-lg text-white">
                Rated <span className="font-bold text-yellow-300">4.8/5</span> by 45,000 users
              </p>
            </div>

            <div className="flex items-center gap-4">
              <CheckCircle className="w-7 h-7 text-green-400" />
              <p className="text-lg text-white">
                Over <span className="font-bold text-green-300">600,000</span> Reports Delivered
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes star {
          0%, 100% { opacity: 0.3; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-star {
          animation: star ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
