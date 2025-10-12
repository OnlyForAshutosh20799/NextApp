"use client";

import { useEffect, useRef } from "react";
import { Mail, Phone, Star, CheckCircle } from "lucide-react";
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
} from "react-icons/fa";

const data = {
  header: {
    reviews: "2000+ reviews",
    rating: "Rated 4.6 on Google - Check on Google",
    delivery: "Delivered over 600,000 positive kundli reports to happy users",
  },
  testimonials: [
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
  ],

  footer: "All Rights Reserved © 2025 Payback Mantra (duastro.com)",
};

export default function Footer() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollAmount = 0;
    const scrollSpeed = 0.7; // Adjust speed here (pixels per frame)
    const gap = 20; // Gap between testimonials

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += scrollSpeed;

        const maxScroll = scrollContainer.scrollWidth / 2;

        // Reset scroll position when scrolled completely
        if (scrollAmount >= maxScroll) {
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
        }

        scrollContainer.scrollLeft = scrollAmount;
      }
      animationId = requestAnimationFrame(scroll);
    };

    // Start scrolling
    animationId = requestAnimationFrame(scroll);

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const footerSections = [
    {
      title: "Online Kundli",
      subtitle: "(Service in 30 Second)",
      items: [
        "Career Horoscope",
        "Finance Horoscope",
        "Life Forecast Horoscope",
        "Health Horoscope",
        "Education Horoscope",
        "Family Horoscope",
        "Government Job Horoscope",
        "Married Life Horoscope",
        "Foreign Travel Horoscope",
        "Relationship Horoscope",
        "Business Horoscope",
        "Disease Horoscope",
        "Home Horoscope",
        "Childbirth Horoscope",
        "Property Horoscope",
        "Planets Horoscope",
        "Houses Horoscope",
        "Gemstone Horoscope",
        "Dosha Horoscope",
        "Lo Shu Horoscope",
        "Numerology Horoscope",
        "Lal Kitab Horoscope",
      ],
      extraTitle: "Combo Offers",
      extraSubtitle: "(Service in 30 Second)",
      extraItems: [
        "6in1 Career Combo Horoscope",
        "5in1 Love Combo Horoscope",
        "6in1 Health Combo Horoscope",
        "6in1 Business Combo Horoscope",
        "2in1 Complete Horoscope",
        "3in1 Numerology Combo Horoscope",
      ],
    },
    {
      title: "Free Service",
      subtitle: "(Service in 30 Second)",
      items: [
        "Free Horoscope",
        "Free Bengali Kushti",
        "Free Astrology Prediction",
        "Free Horoscope Prediction",
        "Free Janam Kundli",
        "Free Kannada Jataka",
        "Free Tamil Jathagam",
        "Free Telugu Jathakam",
      ],
      extraSections: [
        {
          title: "Yearly Horoscope",
          subtitle: "(Service in 24 Hour)",
          items: [
            "2025 Career Horoscope",
            "2025 Finance Horoscope",
            "2025 Health Horoscope",
            "2025 Education Horoscope",
            "2025 Family Horoscope",
            "2025-2030 Career Horoscope",
            "2025-2026 Finance Horoscope",
            "2025-2030 Health Horoscope",
            "2025-2030 Education Horoscope",
            "2025-2030 Family Horoscope",
            "2025-2030 Yearly Horoscope",
          ],
        },
        {
          title: "Marriage Matching",
          subtitle: "(Service in 24 Hour)",
          items: [
            "Marriage Matching",
            "Kundli Milan",
            "Love & Relationship Matching",
            "Detailed Kundli Matching",
            "Ashtakoot Matching",
          ],
        },
      ],
    },
    {
      title: "Astrology Prediction",
      subtitle: "(Service in 24 Hour)",
      items: [
        "Gemstone Horoscope",
        "2025 Numerology Horoscope",
        "Lo Shu Horoscope",
        "Lal Kitab Horoscope",
        "Sade Sati Horoscope",
        "Kaal Sarp Horoscope",
        "Manglik Dosha Horoscope",
        "Pitra Dosha Horoscope",
        "In Depth Horoscope Horoscope",
        "Birth Horoscope",
        "120 year Dasha Horoscope",
        "300 Yoga Calculator Horoscope",
      ],
      extraSections: [
        {
          title: "Free Service",
          subtitle: "(Service in 30 Second)",
          items: [
            "Love Calculator",
            "Flame Calculator",
            "Birth Compatibility",
            "Angel Calculator",
            "Rashi Calculator",
            "Marriage Calculator",
            "Death Calculator",
            "Raj Yog Calculator",
            "Zodiac Compatibility",
            "Ista Devta Calculator",
            "Love Partner Report",
            "Love Match Calculator",
            "Secret Crush Calculator",
            "Mobile Number Compatibility",
            "Vehicle Number Compatibility",
            "Account Number Calculator",
          ],
        },
      ],
    },
    {
      title: "Corporate Info",
      items: [
        "Home",
        "About",
        "Disclaimer",
        "Privacy Policy",
        "Term & Condition",
        "Refund & Cancellation",
        "Shipping & Delivery",
        "Customer Support",
        "Duastro Sitemap",
      ],
      extraSections: [
        {
          title: "Important Link",
          items: [
            "Blog",
            "Vastu",
            "Daily Horoscope",
            "Online Pooja",
            "Astrologer Chat",
            "Astrologer Call",
            "Astrologer Profile",
            "Astrologer Registration",
            "Astrologer Login",
          ],
        },
        {
          title: "Contact Us",
          items: [
            { icon: <Phone size={14} />, text: "+91 9891911557" },
            { icon: <FaWhatsapp size={14} />, text: "WhatsApp Chat" },
            { icon: <Mail size={14} />, text: "info@duastro.com" },
          ],
        },
      ],
    },
  ];

  const socialIcons = [
    <FaWhatsapp />,
    <FaFacebookF />,
    <FaInstagram />,
    <FaYoutube />,
    <FaTwitter />,
    <FaPinterestP />,
  ];

  const profileIcons = [<FaGlobe />, <FaMobileAlt />, <FaYoutube />];

  return (
    <div className=" bg-[#454545] text-white p-6">
      <header className="flex items-center justify-between flex-wrap gap-4 p-4 rounded">
        <div className="text-left flex items-center gap-4 justify-center">
          <div className="flex flex-col items-left justify-center">
            <div>
              <span className="text-4xl text-blue-700">G</span>
              <span className="text-4xl text-red-700">o</span>
              <span className="text-4xl text-yellow-700">o</span>
              <span className="text-4xl text-blue-700">g</span>
              <span className="text-4xl text-green-700">l</span>
              <span className="text-4xl text-red-700">e</span>
            </div>
            <div className="text-[10px] text-gray-300 font-bold">
              Reviews ⭐⭐⭐⭐⭐
            </div>
          </div>
          <div className="mt-2">
            <div className="text-yellow-400 text-[18px] font-bold">
              2000+ reviews
            </div>
            <div className="flex flex-row justify-center gap-1  text-[15px]">
              {" "}
              <span className="text-yellow-400">Rated 4.6 on Google -</span>
              <span className="text-white">Check on Google</span>{" "}
            </div>
          </div>
        </div>
        <div className="text-right text-yellow-400">
          <div>
            ✅ Delivered over 600,000 positive kundli reports to happy users
          </div>
          <div>⭐ Rated 4.8/5 by 45,000 users</div>
        </div>
      </header>

      {/* Auto-scrolling testimonials */}
      <section className="p-4 rounded mt-6">
        <div className="relative overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex space-x-5 overflow-x-hidden py-2"
            style={{
              scrollBehavior: "auto", // Changed to auto for smoother animation control
              width: "100%",
            }}
          >
            {/* Duplicate testimonials for seamless looping */}
            {[...data.testimonials, ...data.testimonials].map(
              (testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-lg p-4 shadow-md shadow-black m-2"
                >
                  <p className="text-sm">{testimonial.text}</p>
                  <p className="text-right text-sm mt-2 font-semibold">
                    {testimonial.author}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* list section */}

      <div className=" text-gray-300 py-10 px-0 sm:px-12 md:px-16 lg:px-20">
        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-white mb-2">
                {section.title}
              </h3>
              {section.subtitle && (
                <p className="text-sm mb-3">{section.subtitle}</p>
              )}
              <ul className="space-y-1 text-sm">
                {section.items.map((item, i) => (
                  <li key={i} className="hover:text-[#FD7E14] cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>

              {/* Handle optional sections */}
              {section.extraTitle && (
                <>
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">
                    {section.extraTitle}
                  </h3>
                  <p className="text-sm mb-3">{section.extraSubtitle}</p>
                  <ul className="space-y-1 text-sm">
                    {section.extraItems.map((item, i) => (
                      <li
                        key={i}
                        className="hover:text-[#FD7E14] cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {section.extraSections &&
                section.extraSections.map((extra, i) => (
                  <div key={i} className="mt-6">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {extra.title}
                    </h3>
                    {extra.subtitle && (
                      <p className="text-sm mb-3">{extra.subtitle}</p>
                    )}
                    <ul className="space-y-1 text-sm">
                      {extra.items.map((item, j) =>
                        typeof item === "string" ? (
                          <li
                            key={j}
                            className="hover:text-[#FD7E14] cursor-pointer"
                          >
                            {item}
                          </li>
                        ) : (
                          <li key={j} className="flex items-center gap-2">
                            {item.icon}
                            {item.text}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                ))}
            </div>
          ))}

          {/* Social Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Connect with Us
            </h3>
            <div className="flex flex-wrap gap-3 text-lg">
              {socialIcons.map((icon, i) => (
                <div
                  key={i}
                  className="hover:text-[#FD7E14] cursor-pointer transition"
                >
                  {icon}
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-white mt-6 mb-2">
              Social Profile Duastro
            </h3>
            <div className="flex flex-wrap gap-3 text-lg">
              {profileIcons.map((icon, i) => (
                <div
                  key={i}
                  className="hover:text-[#FD7E14] cursor-pointer transition"
                >
                  {icon}
                </div>
              ))}
            </div>

            {/* Ratings */}
            <div className="bg-[#3A3C42] text-sm mt-6 rounded-lg p-4 flex flex-col gap-1 text-gray-300">
              <p className="flex items-center gap-2">
                ⭐ Rated 4.8/5 by 45,000 users
              </p>
              <p className="flex items-center gap-2">
               ✅ Delivered over 600,000 positive kundli reports to happy users
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-6 py-3 text-center bg-[#2A2A2A] ">
        <p>{data.footer}</p>
      </footer>
    </div>
  );
}
