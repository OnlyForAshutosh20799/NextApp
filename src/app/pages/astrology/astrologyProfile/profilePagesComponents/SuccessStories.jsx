"use client";

import React from "react";

const SuccessStories = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      content:
        "Manish's career guidance helped me transition to my dream job. His predictions were incredibly accurate!",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      role: "Business Owner",
      content:
        "The financial advice and remedies suggested transformed my business. Highly recommended!",
      rating: 5,
    },
    {
      name: "Anita Patel",
      role: "College Student",
      content:
        "His educational guidance helped me choose the right career path. Thank you for the clarity!",
      rating: 5,
    },
  ];

  return (
    <section
      id="success-stories"
      className="py-20 bg-gradient-to-br from-[#FFF8E1] to-[#FFF3C4]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from people who transformed their lives with cosmic guidance
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Review Content */}
              <p className="text-gray-600 italic leading-relaxed mb-6">
                “{testimonial.content}”
              </p>

              {/* User Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            Share Your Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
