export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-r from-[#FFD700] via-[#FFD700] to-[#FF9933]">
     
      {/* 🌟 Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <h1 className="font-extrabold mb-6 leading-tight">
          <span className="text-[32px] lg:text-[48px] font-extrabold text-[#5A3E00]">
            Discover Your Cosmic Blueprint
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-black text-[16px] lg:text-[20px] font-medium  mb-10 max-w-3xl mx-auto leading-relaxed">
          Unlock your destiny with our authentic <span className="text-[#FF6F00] font-semibold">Vedic Astrology</span> —
          blending ancient wisdom with modern insight and clarity.
        </p>

        {/* Highlight Card */}
        <div className="bg-white border border-[#FFD54F]/40 rounded-3xl shadow-2xl p-8 md:p-10 max-w-2xl mx-auto transform hover:scale-[1.02] hover:shadow-[0_8px_40px_rgb(255,179,0,0.4)] transition-all duration-500">
          <div className="flex items-center justify-center mb-5">
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#FFF3E0] to-[#FFE082] px-5 py-2 rounded-full shadow-sm border border-[#FFD54F]/50">
              <div className="w-7 h-7 bg-gradient-to-br from-[#FF8F00] to-[#FFB300] rounded-full flex items-center justify-center shadow-inner">
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-[#A05A00] font-semibold text-lg">100% Free Access</span>
            </div>
          </div>
          <p className="text-[#7C4A00] text-lg leading-relaxed font-medium">
            Explore personalized insights into your <span className="text-[#E65100] font-semibold">career</span>, <span className="text-[#E65100] font-semibold">relationships</span>, and <span className="text-[#E65100] font-semibold">spiritual growth</span> — all through our premium, free astrological analysis.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button className="group bg-gradient-to-r from-[rgb(229,130,1)] via-[#F59E0B] to-[rgba(255,214,79,0.9)] hover:from-[#FFA000] hover:to-[#FFCA28] text-white font-semibold text-lg px-12 py-4 rounded-full shadow-3xl cursor-pointer hover:shadow-[0_6px_35px_rgba(255,160,0,0.55)] transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center justify-center gap-3">
              <span>Generate My Free Report</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>

          <p className="text-[#B45309] mt-4 text-sm tracking-wide">
            🌞 Trusted by thousands worldwide • Privacy guaranteed
          </p>
        </div>
      </div>
    </section>
  );
}
