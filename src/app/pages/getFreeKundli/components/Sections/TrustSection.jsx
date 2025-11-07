export default function TrustSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Background ornaments */}
      <div className="absolute top-10 left-20 w-56 h-56 bg-gradient-to-br from-yellow-200/40 to-amber-100/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-gradient-to-tr from-amber-200/50 to-yellow-100/30 rounded-full blur-3xl animate-pulse delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-saffron-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent text-[28px] md:text-[32px] lg:text-[48px]">
            Why Trust <span className="text-amber-700">AstroVastoGuru?</span>
          </h2>
          <p className="text-lg md:text-xl text-amber-800/90 max-w-3xl mx-auto leading-relaxed">
            We blend sacred Vedic wisdom with advanced analytics to give you authentic, life-changing astrological insights.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="group bg-white/80 backdrop-blur-xl p-10 rounded-3xl border border-amber-100 hover:border-amber-300 shadow-lg hover:shadow-amber-200/60 transition-all duration-500 hover:scale-[1.02]">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-saffron-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-amber-900 ml-4">
                Expert-Backed Precision
              </h3>
            </div>
            <p className="text-amber-800/90 text-lg mb-6 leading-relaxed">
              Crafted by renowned astrologers with decades of experience, ensuring
              precise, intuitive, and spiritually aligned predictions.
            </p>
            <ul className="space-y-4">
              {[
                "20+ years of expert Vedic mastery",
                "Over 100,000 detailed charts analyzed",
                "Authentic traditional methods preserved",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-amber-800/95">
                  <div className="w-6 h-6 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 */}
          <div className="group bg-white/80 backdrop-blur-xl p-10 rounded-3xl border border-amber-100 hover:border-amber-300 shadow-lg hover:shadow-amber-200/60 transition-all duration-500 hover:scale-[1.02]">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-saffron-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-amber-900 ml-4">
                Deep Cosmic Analysis
              </h3>
            </div>
            <p className="text-amber-800/90 text-lg mb-6 leading-relaxed">
              Our algorithm deciphers planetary patterns, houses, and nakshatras to
              reveal hidden potentials and karmic influences.
            </p>
            <ul className="space-y-4">
              {[
                "12 Houses & 9 Planets analyzed in depth",
                "Planetary periods & nakshatra insights",
                "15,000+ precision horoscope reports",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-amber-800/95">
                  <div className="w-6 h-6 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto text-center">
          {[
            { label: "Accuracy Rate", value: "99%" },
            { label: "Satisfied Users", value: "50K+" },
            { label: "Support", value: "24/7" },
          ].map((stat, i) => (
            <div
              key={i}
              className="group transform transition-all duration-300 hover:scale-105"
            >
              <div className="w-25 h-20 bg-gradient-to-br from-yellow-100 via-amber-50 to-white rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-inner">
                <span className="text-3xl font-extrabold text-amber-700 group-hover:text-amber-800 transition-colors">
                  {stat.value}
                </span>
              </div>
              <p className="text-amber-900 font-semibold tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
