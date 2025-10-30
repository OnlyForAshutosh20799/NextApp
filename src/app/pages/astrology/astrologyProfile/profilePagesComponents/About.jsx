'use client';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              About Your Guide
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#F4A300] to-[#FFD700] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image/Visual Section */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#FFF4D6] to-[#FFF8DC] rounded-3xl p-8 shadow-xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="aspect-square bg-gradient-to-br from-[#FFF8E1] to-[#FFF4C3] rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-r from-[#F4A300] to-[#FFD700] rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                        <span className="text-white text-4xl">🙏</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        Manish Choudhary
                      </h3>
                      <p className="text-[#FFD700] font-semibold">
                        Vedic Astrology Specialist
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#F4A300] rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#FFD700] rounded-full opacity-20 animate-bounce delay-1000"></div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#F4A300] to-[#FFD700] text-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <p className="leading-relaxed">
                  With over 7 years of dedicated practice in Vedic astrology, I've helped
                  thousands find clarity and direction. My approach combines ancient
                  scriptures with practical modern applications.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#FFF8E1] p-4 rounded-xl border-l-4 border-[#F4A300]">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    🎓 Qualifications
                  </h4>
                  <p className="text-sm text-gray-600">Certified Vedic Astrologer</p>
                </div>
                <div className="bg-[#FFFBEA] p-4 rounded-xl border-l-4 border-[#FFD700]">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    🌍 Languages
                  </h4>
                  <p className="text-sm text-gray-600">Hindi, English, Rajasthani</p>
                </div>
                <div className="bg-[#FFF8E1] p-4 rounded-xl border-l-4 border-[#F4A300]">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    ⭐ Specialization
                  </h4>
                  <p className="text-sm text-gray-600">
                    Career, Relationships, Finance
                  </p>
                </div>
                <div className="bg-[#FFFBEA] p-4 rounded-xl border-l-4 border-[#FFD700]">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    📈 Success Rate
                  </h4>
                  <p className="text-sm text-gray-600">98% Client Satisfaction</p>
                </div>
              </div>

              <div className="bg-white border border-[#FFE680] p-6 rounded-2xl shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-3">My Philosophy</h4>
                <p className="text-gray-600 italic">
                  "Astrology is not about predicting the future, but about understanding the
                  present and making informed choices to shape your destiny."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
