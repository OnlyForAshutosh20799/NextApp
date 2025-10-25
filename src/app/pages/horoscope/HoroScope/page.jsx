"use client";
import React from "react";
import HoroscopeHero from "../resuableComponent/HoroscopeHero";
import FaqSection from "../resuableComponent/FaqSection";

export default function HoroscopePage() {
  const horoscopes = [
    "12 Month Career Horoscope: Predicts your professional growth and opportunities for the year.",
    "24 Month Career Horoscope: Provides a two-year forecast for your career path.",
    "36 Month Career Horoscope: Offers insights into your career for the next five years.",
    "12 Month Finance Horoscope: Analyzes your financial prospects and stability for the year.",
    "24 Month Finance Horoscope: Guides your financial planning over the next two years.",
    "60 Month Finance Horoscope: Long-term financial forecast over five years.",
    "12 Month Family Horoscope: Reveals family-related developments for the coming year.",
    "24 Month Family Horoscope: Provides insights into family matters for two years.",
    "60 Month Family Horoscope: Long-term family predictions over five years.",
    "12 Month Health Horoscope: Predicts health and wellness trends for the year ahead.",
    "24 Month Health Horoscope: Health-related guidance for the next two years.",
    "60 Month Health Horoscope: Comprehensive health predictions over five years.",
    "12 Month Education Horoscope: Focuses on academic growth and learning opportunities for the year.",
    "24 Month Education Horoscope: Forecasts your educational journey for the next two years.",
    "60 Month Education Horoscope: Long-term predictions on education over five years.",
    "2025 Complete Horoscope: Detailed predictions for the entire year 2025.",
    "2025-26 Complete Horoscope: Forecast covering two years, 2025 and 2026.",
    "2025-2030 Complete Horoscope: Comprehensive horoscope for the next five years 2025 to 2030.",
    "Nu-Shu Numerology Horoscope: Predictions based on your numerological calculations.",
    "Lo-Shu Horoscope: Based on the ancient Lo-Shu grid for numerological insights.",
    "120 Year Dasha Horoscope: Analyzes 300 different astrological yogas influencing your life.",
    "120 Year Dasha Analysis: Depicts planetary periods and their effects over 120 years.",
    "Birth Horoscope: A detailed natal chart based on your birth details.",
    "12 Month Horoscope Report: Provides an extensive analysis of all life aspects.",
    "12 Month Transit Horoscope: Tracks planetary transits and their influence over the year.",
    "24 Month Weekly Horoscope: Weekly predictions for two years, covering all life aspects.",
    "60 Month Weekly Horoscope: Weekly guidance for the next five years.",
    "12 Month Daily Horoscope: Daily reports of daily astrological guidance.",
    "24 Month Daily Horoscope: Daily insights and predictions for the next five years.",
    "Marriage Matching: Finds compatibility for prospective marriages.",
    "Kundli Matching: A deep analysis of matching horoscopes for marriage.",
    "Ashtkoot Analysis: Evaluates eight critical aspects for marriage compatibility.",
    "Mangal Dosh Calculator: Determines compatibility for marriage and relationships.",
    "Kaal Sarp Dosh Calculator: Checks for Kaal Sarp Dosh as per birth chart.",
    "Pitra Dosh Calculator: Detects ancestral curses and their impact on your life.",
  ];

  return (
    <main>
      <HoroscopeHero />
    <div className="min-h-screen bg-white text-gray-800 py-16 px-4">
      <section className="max-w-6xl mx-auto mb-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-[#E65100] mb-4 font-medium">
          Home <span className="text-gray-500"> / Horoscope</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#FF6F00] mb-8">
          Horoscope or Rashifal 🔮
        </h1>

        {/* Intro Text */}
        <div className="bg-gradient-to-r from-[#FFF3E0] via-[#FFE0B2] to-[#FFF8E1] rounded-3xl p-8 shadow-md border-l-4 border-[#FFA000] mb-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            Horoscope or <b>Rashifal</b> is a chart or prediction based on the
            positions of celestial bodies like the sun, moon, planets, and stars
            at a specific time — usually at the moment of a person's birth. The
            word Horoscope comes from Greek meaning "hora" (time) and "skopos"
            (observer). In India, it's known as Rashifal where "Rashi" means
            zodiac sign and "Phal" means result.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Horoscopes help people understand different aspects of their life
            such as career, love, health, and personal growth. It guides how the
            positioning of planets influences daily activities and life events.
          </p>
        </div>

        {/* Section: Does a Horoscope work? */}
        <h2 className="text-3xl font-bold text-[#FF8F00] mt-12 mb-4">
          Does a Horoscope Work?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Many believe horoscopes work because they are based on ancient
          astronomical principles. Astrology suggests the universe is
          interconnected — and celestial positions at birth influence your
          personality, emotions, and destiny. Though not scientifically proven,
          horoscopes offer valuable guidance for self-awareness and planning.
        </p>

        {/* Section: Astrology and Horoscope */}
        <h2 className="text-3xl font-bold text-[#FF8F00] mt-12 mb-4">
          Astrology and Horoscope
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Astrology studies how planets and stars affect human life. It's
          practiced globally — from Western astrology to ancient Vedic and
          Chinese traditions. A horoscope interprets your planetary chart to
          predict key life aspects such as love, wealth, and health.
        </p>

        {/* Section: Types */}
        <h2 className="text-3xl font-bold text-[#FF8F00] mt-12 mb-6">
          AstroVastuGuru Horoscope Types
        </h2>
        <ul className="space-y-3 border-l-4 border-[#FFB300] pl-6 bg-gradient-to-r from-[#FFFDE7] via-[#FFF8E1] to-[#FFF3E0] rounded-2xl p-8 shadow-sm">
          {horoscopes.map((item, index) => (
            <li
              key={index}
              className="hover:text-[#E65100] transition-colors duration-200 text-gray-700 font-medium"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

    </div>
    <FaqSection />
    </main>
  );
}
