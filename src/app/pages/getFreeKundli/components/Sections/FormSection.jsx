export default function FormSection() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#FFF5E6] via-[#FFE7C2] to-[#FFD89A]">
      {/* Decorative glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#f4b400]/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tr from-[#ff9900]/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="  mb-4">
              <span className="bg-gradient-to-r from-[#ff8c00] via-[#e6b800] to-[#ffcc33] bg-clip-text text-transparent text-[28px] md:text-[32px] lg:text-[48px] font-extrabold">
                Unlock Your Cosmic Journey
              </span>
            </h2>
            <p className="text-lg text-[#000] font-medium max-w-2xl mx-auto">
              Enter your details below to receive your personalized Vedic astrology report, blending 
              timeless wisdom with modern precision.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white backdrop-blur-xl rounded-3xl shadow-2xl border border-[#ffe8b3] p-10 md:p-12 transition-all duration-300 hover:shadow-[0_15px_60px_rgba(255,186,0,0.25)]">
            <form className="space-y-8">
              {/* Name + Gender */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold text-[rgb(116,76,2)] mb-2">
                    Full Name <span className="text-[#e69a00]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-5 py-4 rounded-xl border-2 border-[#ffe7b2] bg-[#fff9ec] placeholder-[#d4a654] focus:ring-2 focus:ring-[#ffd24c] focus:border-[#ffc300] outline-none transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[rgb(116,76,2)] mb-2">
                    Gender <span className="text-[#e69a00]">*</span>
                  </label>
                  <select className="w-full px-5 py-4 rounded-xl border-2 border-[#ffe7b2] bg-[#fff9ec] text-[#a46b00] focus:ring-2 focus:ring-[#ffd24c] focus:border-[#ffc300] transition-all duration-300 appearance-none">
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Birth Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <label className="block text-sm font-semibold text-[rgb(116,76,2)] mb-2">
                    Date of Birth <span className="text-[#e69a00]">*</span>
                  </label>
                  <input
                    type="date"
                    className="w-full px-5 py-4 rounded-xl border-2 border-[#ffe7b2] bg-[#fff9ec] text-[#a46b00] focus:ring-2 focus:ring-[#ffd24c] focus:border-[#ffc300] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[rgb(116,76,2)] mb-2">
                    Time of Birth <span className="text-[#e69a00]">*</span>
                  </label>
                  <input
                    type="time"
                    className="w-full px-5 py-4 rounded-xl border-2 border-[#ffe7b2] bg-[#fff9ec] text-[#a46b00] focus:ring-2 focus:ring-[#ffd24c] focus:border-[#ffc300] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[rgb(116,76,2)] mb-2">
                    Birth Country <span className="text-[#e69a00]">*</span>
                  </label>
                  <select className="w-full px-5 py-4 rounded-xl border-2 border-[#ffe7b2] bg-[#fff9ec] text-[#a46b00] focus:ring-2 focus:ring-[#ffd24c] focus:border-[#ffc300] appearance-none">
                    <option>India</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold text-[rgb(116,76,2)] mb-2">
                    City <span className="text-[#e69a00]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your city"
                    className="w-full px-5 py-4 rounded-xl border-2 border-[#ffe7b2] bg-[#fff9ec] placeholder-[#d4a654] focus:ring-2 focus:ring-[#ffd24c] focus:border-[#ffc300]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[rgb(116,76,2)] mb-2">
                    State <span className="text-[#e69a00]">*</span>
                  </label>
                  <select className="w-full px-5 py-4 rounded-xl border-2 border-[#ffe7b2] bg-[#fff9ec] text-[#a46b00] focus:ring-2 focus:ring-[#ffd24c] focus:border-[#ffc300] appearance-none">
                    <option>Select State</option>
                    <option>Delhi</option>
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                  </select>
                </div>
              </div>

              {/* Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold text-[rgb(116,76,2)] mb-2">
                    Email Address <span className="text-[#e69a00]">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-5 py-4 rounded-xl border-2 border-[#ffe7b2] bg-[#fff9ec] placeholder-[#d4a654] focus:ring-2 focus:ring-[#ffd24c] focus:border-[#ffc300]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[rgb(116,76,2)] mb-2">
                    WhatsApp Number <span className="text-[#e69a00]">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+91-9876543210"
                    className="w-full px-5 py-4 rounded-xl border-2 border-[#ffe7b2] bg-[#fff9ec] placeholder-[#d4a654] focus:ring-2 focus:ring-[#ffd24c] focus:border-[#ffc300]"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="cursor-pointer w-full py-3 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-[#ff9900] via-[#e6b800] to-[#ffcc33] hover:from-[#ffac1c] hover:to-[#ffd84d] shadow-[0_8px_25px_rgba(255,174,0,0.4)] transition-all duration-300 transform hover:scale-[1.03] group"
                >
                  <span className="flex items-center justify-center space-x-3">
                    <span>Generate My Astrology Report</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </button>

                <div className="flex items-center justify-center mt-6 space-x-2">
                  <div className="w-6 h-6 bg-[#fff2c6] rounded-full flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-[#d19500]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-[rgb(116,76,2)] text-sm font-medium">
                    Your personal details are encrypted and 100% secure
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
