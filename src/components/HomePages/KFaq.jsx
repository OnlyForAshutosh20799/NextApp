"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function KFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "❓ What is a Kundli and why should I get one?",
      answer:
        "A Kundli (birth chart) is your cosmic DNA created using your birth time, date, and place. It reveals your life's purpose, strengths, weaknesses, and destiny path. At AstroVastuGuru, our reports are powered by 20,000+ Vedic formulas and a 10,000,000-word database, ensuring over 95% accuracy. Getting your Kundli helps you align your actions with the universe and make confident life decisions.",
    },
    {
      id: 2,
      question: "🌟 How accurate are AstroVastuGuru free and premium horoscopes?",
      answer:
        "Both free and premium AstroVastuGuru horoscopes deliver 95%+ accuracy. Our algorithm combines ancient Vedic wisdom and advanced AI to generate real-time planetary analysis. Premium reports include deeper insights into love, health, wealth, and career based on your Mahadasha and planetary transits — crafted by verified astrologers for true cosmic clarity.",
    },
    {
      id: 3,
      question: "💬 How does the chat with astrologer feature work?",
      answer:
        "AstroVastuGuru offers 24/7 expert astrologer chat where you can ask personal questions about your career, love, marriage, or finances. You are billed per minute, and unused minutes remain saved. Each response is backed by your unique Kundli, ensuring deeply personalized, reliable, and spiritually aligned answers.",
    },
    {
      id: 4,
      question: "🔮 What makes AstroVastuGuru predictions so accurate?",
      answer:
        "Our predictions are powered by 20,000+ Vedic formulas, AI-assisted planetary mapping, and a decade of expert validation. Each prediction is custom-built for your chart — covering planetary strength, Dasha transitions, and karmic energy balance — giving you clarity on every stage of your life journey.",
    },
    {
      id: 5,
      question: "💫 What extra benefits do premium users get?",
      answer:
        "Premium users get unlimited Kundli analysis, advanced life timeline graphs, monthly Dasha insights, compatibility tools, and 1-on-1 astrologer sessions. You’ll also receive planetary remedies and gemstone guidance based on your horoscope. It’s the most comprehensive way to explore your destiny.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#FFF1D6] via-[#FFD580] to-[#FFB347] py-16 px-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl animate-pulse"></div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#7F4C00] mb-10 drop-shadow-lg">
        Frequently Asked Questions
      </h1>
      <p className="max-w-2xl text-center text-gray-700 mb-10 text-base md:text-lg">
        Here are the answers to the most common questions people ask about
        <span className="font-semibold text-[#FD7E14]"> AstroVastuGuru </span> and our
        astrology tools. Explore your doubts and find clarity in the stars ✨
      </p>

      <div className="max-w-4xl w-full space-y-5">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.id}
            className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-orange-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-orange-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <button
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="w-full text-left flex items-center justify-between px-5 py-4 font-semibold text-[#7F4C00] text-lg md:text-xl"
            >
              <span>{faq.question}</span>
              {activeIndex === index ? (
                <FaChevronUp className="text-orange-500" />
              ) : (
                <FaChevronDown className="text-orange-500" />
              )}
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-5 pb-5 text-gray-700 text-sm md:text-base leading-relaxed border-t border-orange-100"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12"
      >
        <button className="bg-[#FD7E14] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#e86c00] transition transform hover:scale-105">
          🔍 Explore More FAQs & Astrological Insights
        </button>
      </motion.div>
    </section>
  );
}
