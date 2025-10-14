"use client";

import { useEffect, useRef } from "react";
import { Mail, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPinterestP,
  FaWhatsapp,
  FaLinkedinIn,
  FaGlobe,
  FaMobileAlt,
  FaStar,
} from "react-icons/fa";

export default function Footer() {
  const scrollContainerRef = useRef(null);

  // Auto-scrolling testimonials
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.6;
    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    };
    requestAnimationFrame(scroll);
  }, []);

  // Data
  const testimonials = [
    {
      text: "Mujhe apne love life ke bare mein clarity chahiye thi. Duastro ke astrologer ne mujhe patience aur solutions dono diye...",
      author: "- Yadav",
    },
    {
      text: "Chatting experience with Duastro astrologer was smooth. Unhone sab kuch calmly explain kiya. Kundli report well-organized...",
      author: "- Muhammad Yaseen",
    },
    {
      text: "Duastro ke astrologers highly experienced lage. Jo bhi bol, usme sachchayi. Astrology report clean, easy to read thi...",
      author: "- Vakani Kumar",
    },
    {
      text: "Excellent service and accurate predictions. My life has changed after consulting with Duastro astrologers.",
      author: "- Priya Sharma",
    },
    {
      text: "The kundli matching service helped me find the perfect life partner. Thank you Duastro!",
      author: "- Raj Patel",
    },
  ];

  const socialIcons = [
    { icon: <FaWhatsapp />, link: "#" },
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaYoutube />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaPinterestP />, link: "#" },
  ];

  const footerSections = [
    {
      title: "Online Kundli",
      subtitle: "(Service in 30 Seconds)",
      items: [
        "Career Horoscope",
        "Finance Horoscope",
        "Health Horoscope",
        "Education Horoscope",
        "Family Horoscope",
        "Government Job Horoscope",
        "Marriage Horoscope",
        "Foreign Travel Horoscope",
        "Business Horoscope",
        "Love & Relationship Horoscope",
        "Childbirth Horoscope",
        "Property Horoscope",
        "Gemstone Horoscope",
        "Dosha Horoscope",
        "Numerology Horoscope",
      ],
    },
    {
      title: "Free Services",
      subtitle: "(Instant Reports)",
      items: [
        "Free Horoscope",
        "Free Kundli Matching",
        "Free Janam Kundli",
        "Free Tamil Jathagam",
        "Free Telugu Jathakam",
        "Free Bengali Horoscope",
        "Free Marathi Kundli",
        "Free Compatibility Calculator",
      ],
    },
    {
      title: "Premium Predictions",
      subtitle: "(Delivered in 24 Hours)",
      items: [
        "2025 Career Report",
        "2025 Finance Report",
        "2025 Health Report",
        "2025 Love Life Report",
        "2025 Business Report",
        "Sade Sati Report",
        "Kaal Sarp Dosh Report",
        "Manglik Dosh Report",
        "In-depth Horoscope Report",
      ],
    },
    {
      title: "Corporate Info",
      items: [
        "Home",
        "About Us",
        "Privacy Policy",
        "Terms & Conditions",
        "Refund & Cancellation",
        "Customer Support",
        "Astrologer Login",
        "Contact Us",
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#2A2A2A] via-[#1E1E1E] to-black text-white">
      {/* Header Review Strip */}
      <div className="border-b border-gray-700 py-4 flex flex-col md:flex-row justify-between items-center px-6 md:px-16 bg-[#1E1E1E]/80 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="text-4xl font-extrabold text-white flex">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-400">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
          </div>
          <div className="flex flex-col">
            <p className="text-yellow-400 text-sm font-semibold">
              ⭐ Rated 4.8/5 (45,000+ Reviews)
            </p>
            <p className="text-gray-400 text-xs">
              Verified by Google Reviews & Testimonials
            </p>
          </div>
        </div>
        <p className="text-yellow-400 font-semibold mt-2 md:mt-0">
          ✅ Delivered over 600,000+ positive Kundli reports worldwide
        </p>
      </div>

      {/* Testimonials Carousel */}
      <section className="relative py-10 bg-[#141414] overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full"></div>
        <div ref={scrollContainerRef} className="flex overflow-x-hidden px-6 space-x-5">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-80 bg-gradient-to-br from-yellow-400 via-orange-300 to-orange-500 text-black rounded-2xl p-4 shadow-lg hover:scale-105 transition transform"
            >
              <p className="text-sm italic">“{t.text}”</p>
              <p className="text-right font-semibold mt-2">{t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Grid */}
      <section className="px-6 md:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {footerSections.map((section, i) => (
          <div key={i}>
            <h3 className="text-xl font-semibold text-[#FD7E14] mb-2">
              {section.title}
            </h3>
            {section.subtitle && (
              <p className="text-sm text-gray-400 mb-4">{section.subtitle}</p>
            )}
            <ul className="space-y-1 text-gray-300 text-sm">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="hover:text-[#FD7E14] transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Social Section */}
      <div className="bg-[#1A1A1A] py-8 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center border-t border-gray-800">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-[#FD7E14] mb-2">
            Connect with Us
          </h3>
          <div className="flex gap-4 justify-center md:justify-start text-2xl">
            {socialIcons.map((s, i) => (
              <a
                key={i}
                href={s.link}
                className="hover:text-[#FD7E14] transition"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="text-center md:text-right mt-6 md:mt-0">
          <p className="text-sm text-gray-300 mb-2">
            Need Help? Contact Our 24x7 Support
          </p>
          <div className="flex items-center justify-center md:justify-end gap-3">
            <Phone size={16} className="text-[#FD7E14]" />
            <span>+91 987654321</span>
            <Mail size={16} className="text-[#FD7E14]" />
            <span>info@astrovastuguru.com</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-400 py-6 text-center text-black font-semibold text-lg">
        ✨ Ready to Discover Your Destiny? —{" "}
        <span className="underline cursor-pointer hover:text-white">
          Get Your Free Kundli Now
        </span>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black py-4 text-center text-gray-400 text-sm border-t border-gray-700">
        © 2025 Payback Mantra (AstroVastuGuru.com) | All Rights Reserved
      </div>
    </footer>
  );
}
