const testimonials = [
  {
    name: "Priya Sharma",
    age: 28,
    story: "Career Guidance",
    content: "The career analysis helped me choose the right profession. I transitioned into digital marketing and my income doubled within 8 months.",
    result: "Successfully changed careers"
  },
  {
    name: "Rohan Mehta",
    age: 35,
    story: "Relationship Harmony",
    content: "Understanding my relationship dynamics through the 7th house analysis helped improve my marriage. The suggested remedies brought peace to our home.",
    result: "Improved relationship harmony"
  },
  {
    name: "Anjali Patel",
    age: 42,
    story: "Financial Stability",
    content: "The financial astrology report identified the right time for investments. Following the guidance helped me recover from business losses.",
    result: "Achieved financial stability"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-[#FFF5E6] via-[#FFE7C2] to-[#FFD89A] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-amber-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-amber-50 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-amber-100 rounded-full opacity-15 blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-6">
            <span className="text-[28px] md:text-[32px] lg:text-[48px] font-extrabold text-[#5A3E00]">
              Real Life Transformations
            </span>
          </h2>
          <p className="text-xl text-[#a16207] max-w-3xl mx-auto">
            Discover how ancient Vedic wisdom has guided thousands towards success, harmony, and fulfillment
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-amber-100 hover:border-amber-200 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Story Badge */}
              <div className="mb-6">
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {testimonial.story}
                </span>
              </div>

              {/* Quote Content */}
              <div className="relative mb-6">
                <div className="absolute -top-2 -left-2 text-4xl text-amber-200 opacity-60">"</div>
                <p className="text-amber-700 text-lg leading-relaxed relative z-10 italic">
                  {testimonial.content}
                </p>
                <div className="absolute -bottom-4 -right-2 text-4xl text-amber-200 opacity-60">"</div>
              </div>

              {/* Result Highlight */}
              <div className="bg-amber-50 rounded-xl p-4 mb-6 border border-amber-100">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-green-700 font-semibold text-sm">{testimonial.result}</span>
                </div>
              </div>

              {/* User Info */}
              <div className="border-t border-amber-200 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-amber-800">{testimonial.name}</p>
                    <p className="text-amber-600 text-sm">Age {testimonial.age}</p>
                  </div>
                </div>
              </div>

              {/* Hover Effect Line */}
              <div className="mt-4 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-100 p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700 mb-2">10,000+</div>
                <div className="text-amber-600 font-medium">Lives Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700 mb-2">98%</div>
                <div className="text-amber-600 font-medium">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700 mb-2">4.9/5</div>
                <div className="text-amber-600 font-medium">User Rating</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}