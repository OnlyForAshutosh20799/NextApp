"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "✨ What does my zodiac say about me?",
      answer:
        "Your zodiac sign reflects your personality, emotions, and strengths. It helps you understand your natural tendencies and how you connect with the world around you.",
    },
    {
      question: "🌙 How can I read my daily horoscope?",
      answer:
        "You can read your horoscope based on your sun sign or moon sign. It gives daily insights about your mood, luck, love, and career.",
    },
    {
      question: "🌞 What are the elements in astrology?",
      answer:
        "Astrology divides all zodiac signs into four elements — Fire, Earth, Air, and Water — each representing different energies and emotions.",
    },
    {
      question: "💫 How do planets influence my life?",
      answer:
        "Planets represent cosmic forces that shape different aspects of your life such as love, career, health, and emotions.",
    },
    {
      question: "🌟 Which zodiac signs are most compatible?",
      answer:
        "Signs belonging to the same element are often compatible. For example, Fire signs (Aries, Leo, Sagittarius) share a natural bond.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-[#FFB100] via-[#FF8800] to-[#FFCB47] py-20 px-6 md:px-20 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          Frequently Asked <span className="text-[#FFF5CC]">Questions</span>
        </h2>
        <p className="mt-4 text-white/90 text-lg">
          Explore common questions about astrology and zodiac meanings 🌌
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/10 rounded-2xl shadow-md backdrop-blur-md hover:bg-white/20 transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left px-6 py-5 font-semibold text-white text-lg"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-6 h-6 text-white" />
              ) : (
                <ChevronDown className="w-6 h-6 text-white" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-5 text-white/90 text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
