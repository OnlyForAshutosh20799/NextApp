export default function FeaturesSection() {
  const features = [
    {
      title: "Ascendant Analysis",
      description:
        "Understand your rising sign and how it shapes your personality, appearance, and approach to life.",
      icon: "🌅",
    },
    {
      title: "Planetary Periods",
      description:
        "Discover your major planetary periods (Mahadasha) and their impact on different life phases.",
      icon: "🪐",
    },
    {
      title: "Nakshatra Insights",
      description:
        "Deep analysis of your birth star and its influence on your emotional and spiritual nature.",
      icon: "⭐",
    },
    {
      title: "House Analysis",
      description:
        "Comprehensive examination of all 12 astrological houses and their significance in your life.",
      icon: "🏠",
    },
    {
      title: "Planetary Transits",
      description:
        "Track current planetary movements and their effects on your personal chart.",
      icon: "🔭",
    },
    {
      title: "Remedial Guidance",
      description:
        "Personalized suggestions to enhance positive influences and mitigate challenges.",
      icon: "✨",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-[#FFF5E6] via-[#FFE7C2] to-[#FFD89A] relative overflow-hidden"
    >
      {/* Background glow elements */}
      <div className="absolute -top-10 left-0 w-72 h-72 bg-gradient-to-br from-[#ffb347]/20 to-[#ffd700]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-[#ffb347]/20 to-[#ffd700]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="text-[28px] md:text-[32px] lg:text-[48px] font-extrabold text-[#5A3E00]">
              Comprehensive <span className="text-[#FF6F00] font-semibold">Astrological</span>  Analysis
            </span>
          </h2>
          <p className="text-lg md:text-xl text-[#a16207] max-w-3xl mx-auto leading-relaxed">
            Explore every dimension of your cosmic blueprint with our in-depth
            Vedic astrology report — merging tradition with modern precision.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-md border border-[#fef3c7] hover:border-[#fcd34d] p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(255,193,7,0.2)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-l from-yellow-500 to-orange-500 text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-[#92400e] mb-4 text-center group-hover:text-[#78350f] transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#a16207] text-center leading-relaxed">
                {feature.description}
              </p>

              {/* Underline */}
              <div className="mx-auto mt-6 w-0 group-hover:w-16 h-0.5 bg-gradient-to-r from-[#f59e0b] to-[#fcd34d] transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
