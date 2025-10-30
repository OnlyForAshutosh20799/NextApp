"use client";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to unlock your cosmic potential? Reach out for a personalized
            consultation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side — Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              {[
                {
                  icon: "📞",
                  title: "Phone",
                  text: "+91 98765 43210",
                },
                {
                  icon: "✉️",
                  title: "Email",
                  text: "consult@manishastrology.com",
                },
                {
                  icon: "🕒",
                  title: "Availability",
                  text: "9:00 AM - 8:00 PM (IST)",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center group hover:translate-x-2 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mr-4 group-hover:from-yellow-200 group-hover:to-orange-200">
                    <span className="text-yellow-600 text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Consultation Box */}
            <div className="mt-10 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl shadow-sm">
              <h4 className="font-bold text-gray-800 mb-3">
                Quick Consultation
              </h4>
              <p className="text-gray-600 mb-4">
                Need immediate answers? Book a 15-minute express call for quick
                insights.
              </p>
              <button className="bg-gradient-to-l from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Book Express Call
              </button>
            </div>
          </div>

          {/* Right Side — Form */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your concerns or questions..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-300"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-l from-yellow-500 to-orange-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
