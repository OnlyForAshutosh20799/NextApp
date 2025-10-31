"use client";

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
            <div className="">
              <div className=" rounded-3xl p-8 shadow-xl">
                <div className="">
                  <div className="aspect-square rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1723701832228-ab221dbd3fd4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJpZXN0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700"
                        alt="Astrologer Illustration"
                        className="max-w-full w-[300px] lg:w-[400px] drop-shadow-xl md:h-[500px] rounded-lg shadow-2xl"
                      />
                      <h3 className="text-2xl font-bold text-gray-800 mt-5">
                        Manish Choudhary
                      </h3>
                      <p className="text-[#FFD700] font-semibold">
                        Vedic Astrology Specialist
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="bg-gradient-to-l from-yellow-500 to-orange-500 text-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <p className="leading-relaxed">
                  With over 7 years of dedicated practice in Vedic astrology,
                  I've helped thousands find clarity and direction. My approach
                  combines ancient scriptures with practical modern
                  applications.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#FFF8E1] p-4 rounded-xl border-l-4 border-orange-400">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    🎓 Qualifications
                  </h4>
                  <p className="text-sm text-gray-600">
                    Certified Vedic Astrologer
                  </p>
                </div>
                <div className="bg-[#FFFBEA] p-4 rounded-xl border-l-4 border-orange-400">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    🌍 Languages
                  </h4>
                  <p className="text-sm text-gray-600">
                    Hindi, English, Rajasthani
                  </p>
                </div>
                <div className="bg-[#FFF8E1] p-4 rounded-xl border-l-4 border-orange-400">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    ⭐ Specialization
                  </h4>
                  <p className="text-sm text-gray-600">
                    Career, Relationships, Finance
                  </p>
                </div>
                <div className="bg-[#FFFBEA] p-4 rounded-xl border-l-4 border-orange-400">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    📈 Success Rate
                  </h4>
                  <p className="text-sm text-gray-600">
                    98% Client Satisfaction
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#FFE680] p-6 rounded-2xl shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-3">
                  My Philosophy
                </h4>
                <p className="text-gray-600 italic">
                  "Astrology is not about predicting the future, but about
                  understanding the present and making informed choices to shape
                  your destiny."
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
