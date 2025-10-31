const faqs = [
  {
    question: "Is the astrology report really free?",
    answer: "Yes, our basic astrology report is completely free forever. You get comprehensive insights into your birth chart without any charges."
  },
  {
    question: "How accurate are the predictions?",
    answer: "Our predictions are based on traditional Vedic astrology principles and precise calculations. We analyze multiple astrological factors to ensure high accuracy."
  },
  {
    question: "Can I access my report in different languages?",
    answer: "Yes, we provide reports in multiple Indian and international languages for better accessibility and understanding."
  },
  {
    question: "How is my personal data protected?",
    answer: "We use encryption and secure servers to protect your data. Your personal information is never shared with third parties."
  },
  {
    question: "Do you provide remedies and solutions?",
    answer: "Yes, our reports include personalized suggestions and remedies based on your specific astrological configuration."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-white via-amber-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-10 w-28 h-28 bg-amber-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-50 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-amber-100 rounded-full opacity-15 blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent text-[28px] md:text-[32px] lg:text-[48px] font-extrabold ">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-[#a16207] max-w-2xl mx-auto">
            Get all the information you need about our Vedic astrology services and reports
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-100 hover:border-amber-200 hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Question Header */}
              <div className="p-8 cursor-pointer">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-amber-800 pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-180">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Answer Content */}
                <div className="mt-4">
                  <p className="text-amber-700 leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>

              {/* Hover Indicator */}
              <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Additional Support */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-l from-yellow-500 to-orange-500 rounded-2xl shadow-2xl p-10 max-w-4xl mx-auto">
            <div className="text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-amber-100 text-lg mb-6 max-w-2xl mx-auto">
                Our support team is here to help you understand our services better and guide you through your astrological journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-amber-700 px-8 py-3 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:scale-105">
                  Contact Support
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-amber-700 transition-all duration-300 transform hover:scale-105">
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <p className="text-amber-800 font-semibold">Secure & Encrypted</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="text-amber-800 font-semibold">Verified Accuracy</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-amber-800 font-semibold">24/7 Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}