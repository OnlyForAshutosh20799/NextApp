"use client";

import {
  Calendar,
  Clock,
  FileText,
  Lightbulb,
  TrendingUp,
  Star,
  ArrowRight,
} from "lucide-react";

export default function BookDetail() {
  const features = [
    {
      icon: Calendar,
      title: "Month-by-Month Guidance",
      desc: "Get a clear monthly breakdown of your financial journey.",
    },
    {
      icon: Clock,
      title: "Quick Report Delivery",
      desc: "Your personalized report will be delivered within 24 hours.",
    },
    {
      icon: FileText,
      title: "Easy-to-Read PDF",
      desc: "Access your report anytime via phone or laptop.",
    },
    {
      icon: Star,
      title: "Made by Astro Verma",
      desc: "Expertly crafted insights from 20+ years of astrology experience.",
    },
    {
      icon: TrendingUp,
      title: "Plan for Growth",
      desc: "Discover your strongest financial periods of the year.",
    },
    {
      icon: Lightbulb,
      title: "Smart Investment Tips",
      desc: "Easy and safe investment suggestions that fit your chart.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E6] via-[#FFEBC6] to-[#FFD18B] relative overflow-hidden">
    
      {/* HERO SECTION */}
      <div className=" pb-16 text-center">
        
        {/* Curved Background Layer */}
        <div className=" inset-0 bg-gradient-to-b from-orange-200/60 to-transparent rounded-b-[60%]  shadow-inner"></div>

        {/* Book Spotlight */}
        <div className=" z-20 flex justify-center mb-6">
          <div className=" h-65 md:h-80  p-2">
            <img src="https://duastro.com/admin/service_book/12finance.webp" alt="Book" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#351C02] mb-4 tracking-tight">
          1-Year Financial Horoscope
        </h1>

        {/* Subheading */}
        <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
          Discover your financial rhythm for the next 12 months — crafted by 
          <span className="font-bold text-orange-700"> Mr. Astro Verma</span>. 
          Know your best months to invest, save, and grow your wealth.
        </p>
      </div>

      {/* FEATURES GRID */}
      <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <div
              key={i}
              className="bg-white/40 backdrop-blur-xl rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/50"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-300 to-yellow-200 flex items-center justify-center shadow">
                  <Icon className="w-6 h-6 text-orange-700" />
                </div>
                <h3 className="font-bold text-lg text-[#442200]">{f.title}</h3>
              </div>
              <p className="text-gray-700 text-sm">{f.desc}</p>
            </div>
          );
        })}
      </div>

      {/* WHY CHOOSE SECTION */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-orange-200">
          <h2 className="text-3xl font-extrabold text-orange-800 text-center mb-4">
            Why Choose This Horoscope?
          </h2>

          <p className="text-gray-700 text-center max-w-2xl mx-auto leading-relaxed">
            This financial horoscope gives a clear roadmap of your income, stability, 
            spending patterns, and luck cycles. Plan smarter with guidance based on
            Jupiter, Venus, and your chart's wealth houses.
          </p>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="text-center pb-20">
        <a
          href="#"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xl font-bold px-10 py-4 rounded-full shadow-xl hover:scale-105 transition duration-300"
        >
          Order Now  
          <span className="line-through text-yellow-200 text-lg">₹1299/-</span>
          <span className="text-2xl font-bold">₹299/-</span>
          <ArrowRight className="w-6 h-6" />
        </a>
      </div>

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
